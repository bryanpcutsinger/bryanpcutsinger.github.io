// Post-build: a Markdown twin of every page, for LLMs and other machine readers.
//
// Walks the built HTML in dist/, converts each page's main content to Markdown,
// and writes:
//   - a .md next to every page:  /about/ → /about.md,  / → /index.md,
//     /…/recaps/recap-part-1.html → /…/recaps/recap-part-1.md
//   - /llms.txt       — an index of every Markdown page (llmstxt.org convention)
//   - /llms-full.txt  — every page's Markdown concatenated into one file
// and adds <link rel="alternate" type="text/markdown"> to each page's <head> so
// a crawler on any page can find its twin. Nothing in the visible UI links to
// these files.
//
// Works from the BUILT HTML (not the source Markdown) so every route — custom
// Astro pages, Starlight docs, course topics, the problem bank, recaps — is
// covered by one code path and the text matches what humans see. Fails the
// build on any error rather than shipping a partial set.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { parseHTML } from 'linkedom';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const DIST = 'dist';
const SITE = 'https://bryancutsinger.com';

// Pages not worth a twin: the 404, and the interactive figure widgets (their
// descriptive titles already appear inline in the parent page's Markdown).
const SKIP = (rel) => rel === '404.html' || /(^|\/)figures\//.test(rel);

// Chrome and interactive bits inside <main> that are noise as text.
const STRIP = [
  'script', 'style', 'noscript', 'template', 'svg', 'form', 'button', 'input',
  'select', 'textarea', 'nav', '[hidden]', '[aria-hidden="true"]', '.sr-only',
  '.sl-anchor-link', 'mobile-starlight-toc', 'starlight-toc', '.pagination-links',
  'main footer', '[data-md-skip]',
].join(',');

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

// dist/about/index.html → { url: /about/, md: about.md }
function paths(rel) {
  if (rel === 'index.html') return { url: '/', md: 'index.md' };
  if (rel.endsWith('/index.html')) {
    const dir = rel.slice(0, -'/index.html'.length);
    return { url: `/${dir}/`, md: `${dir}.md` };
  }
  return { url: `/${rel}`, md: rel.replace(/\.html$/, '.md') };
}

const td = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
});
td.use(gfm);
// Inline math: the problem-bank renderer tags each KaTeX span with its TeX
// (convert() swaps the rendered KaTeX for that TeX before the strip pass).
td.addRule('tex', {
  filter: (node) => node.nodeName === 'SPAN' && node.hasAttribute('data-tex'),
  replacement: (_c, node) => `$${node.getAttribute('data-tex')}$`,
});
// Journal/outlet names in citation lists: italic, as in a bibliography.
td.addRule('cite', {
  filter: 'cite',
  replacement: (content) => (content.trim() ? ` *${content.trim()}* ` : ''),
});
// Interactive figures become their (descriptive) title.
td.addRule('iframe', {
  filter: 'iframe',
  replacement: (_c, node) => {
    const title = node.getAttribute('title');
    return title ? `\n\n[${title}]\n\n` : '';
  },
});
// Collapsed solutions etc.: keep the content, label it with the summary.
td.addRule('summary', {
  filter: 'summary',
  replacement: (content) => `\n\n**${content.trim()}**\n\n`,
});
// Absolute-ize root-relative links so the Markdown stands alone.
td.addRule('rootLinks', {
  filter: (node) => node.nodeName === 'A' && /^\/(?!\/)/.test(node.getAttribute('href') || ''),
  replacement: (content, node) => {
    const text = content.trim();
    return text ? `[${text}](${SITE}${node.getAttribute('href')})` : '';
  },
});

function meta(document, selector, attr) {
  return document.querySelector(selector)?.getAttribute(attr)?.trim() || '';
}

function convert(html, url) {
  const { document } = parseHTML(html);
  const title = (document.querySelector('title')?.textContent || '').trim()
    .replace(/\s+[|—]\s+Bryan Cutsinger$/, '');
  const description = meta(document, 'meta[name="description"]', 'content');
  const canonical = meta(document, 'link[rel="canonical"]', 'href') || `${SITE}${url}`;

  const root = document.querySelector('main') || document.body;
  if (!root) throw new Error(`no <main> or <body> in ${url}`);
  // KaTeX's visual markup is aria-hidden, so swap it for the source TeX first.
  root.querySelectorAll('[data-tex]').forEach((el) => {
    el.textContent = el.getAttribute('data-tex');
  });
  root.querySelectorAll(STRIP).forEach((el) => el.remove());
  // A <details> left empty by the strip (e.g. the mobile "In this lesson" TOC).
  root.querySelectorAll('details').forEach((el) => {
    const summary = el.querySelector('summary')?.textContent || '';
    if (el.textContent.trim() === summary.trim()) el.remove();
  });
  root.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src') || '';
    if (src.startsWith('/')) img.setAttribute('src', `${SITE}${src}`);
  });

  let body = td.turndown(root.innerHTML).replace(/\n{3,}/g, '\n\n').trim();
  // Starlight renders the title outside the content; ensure exactly one H1.
  if (!/^# /m.test(body)) body = `# ${title}\n\n${body}`;

  const front = [
    '---',
    `title: ${JSON.stringify(title)}`,
    description && `description: ${JSON.stringify(description)}`,
    `url: ${canonical}`,
    '---',
  ].filter(Boolean).join('\n');
  return { title, description, md: `${front}\n\n${body}\n` };
}

function injectAlternate(html, mdPath) {
  const tag = `<link rel="alternate" type="text/markdown" href="/${mdPath}">`;
  if (html.includes(tag)) return html;
  if (!html.includes('</head>')) return html; // no head to announce it in
  return html.replace('</head>', `${tag}</head>`);
}

// Sections for llms.txt, first match wins. Order = order in the file.
const SECTIONS = [
  ['About Bryan Cutsinger', (u) => ['/', '/contact/'].includes(u)],
  ['Research and writing', (u) => ['/research/', '/writing/'].includes(u)],
  ['Speaking', (u) => u.startsWith('/speaking/')],
  ['AI workshops and consulting', (u) => u === '/ai/'],
  ['Getting Started with Claude Code (guide for economists)', (u) => u.startsWith('/ai/guide/')],
  ['Teaching', (u) => ['/teaching/', '/teaching/microeconomics/'].includes(u)],
  ['Micro-Economic Principles: lessons', (u) => u.startsWith('/teaching/microeconomics/') && !u.includes('/recaps/')],
  ['Micro-Economic Principles: lecture recaps', (u) => u.includes('/recaps/')],
  ['Price Theory problem bank', (u) => u.startsWith('/teaching/price-theory')],
  ['Other', () => true],
];

const files = (await walk(DIST)).sort();
const pages = [];
for (const file of files) {
  const rel = relative(DIST, file).split(sep).join('/');
  if (SKIP(rel)) continue;
  const { url, md: mdPath } = paths(rel);
  const html = await readFile(file, 'utf8');
  const page = convert(html, url);
  await writeFile(join(DIST, mdPath), page.md);
  await writeFile(file, injectAlternate(html, mdPath));
  pages.push({ url, mdPath, ...page });
}
if (pages.length === 0) throw new Error('no pages converted — is dist/ empty?');

const byUrl = (a, b) => a.url.localeCompare(b.url, 'en', { numeric: true });
const grouped = SECTIONS.map(([name]) => [name, []]);
for (const page of pages.sort(byUrl)) {
  grouped[SECTIONS.findIndex(([, test]) => test(page.url))][1].push(page);
}

const home = pages.find((p) => p.url === '/');
const llms = [
  '# Bryan Cutsinger',
  '',
  `> ${home?.description || 'Economist, speaker, and writer.'}`,
  '',
  'Every page on this site has a Markdown version, listed below. Append `.md` to a',
  'page path (e.g. /about/ → /about.md, / → /index.md) to get it. All pages in one',
  `file: ${SITE}/llms-full.txt. Essays published elsewhere are linked from ${SITE}/writing.md.`,
  '',
];
for (const [name, list] of grouped) {
  if (!list.length) continue;
  llms.push(`## ${name}`, '');
  for (const p of list) {
    llms.push(`- [${p.title}](${SITE}/${p.mdPath})${p.description ? `: ${p.description}` : ''}`);
  }
  llms.push('');
}
llms.push('## Optional', '', `- [Curriculum vitae (PDF)](${SITE}/downloads/cutsinger-cv.pdf)`, '');
await writeFile(join(DIST, 'llms.txt'), llms.join('\n'));

const full = grouped.flatMap(([, list]) => list).map((p) => p.md).join('\n\n');
await writeFile(join(DIST, 'llms-full.txt'), full);

console.log(`markdown: ${pages.length} pages → .md, plus llms.txt and llms-full.txt`);
