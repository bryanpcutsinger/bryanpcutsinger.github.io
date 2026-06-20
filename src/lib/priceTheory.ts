import katex from 'katex';

export const COURSE = 'price-theory';

export const isStated = (value?: string | null) =>
  !!value && value.trim() !== '' && value.trim().toLowerCase() !== 'n.d.';

export const humanize = (value: string) => value.replace(/-/g, ' ');

export const titleize = (value: string) =>
  humanize(value).replace(/^./, (char) => char.toUpperCase());

export const paragraphs = (text: string) =>
  (text ?? '').split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);

export function provenance(source: any): string {
  const who = [source.instructor, source.year].filter(isStated).join(', ');
  return [source.university, source.course, who]
    .filter((part) => part && part.length)
    .join(' · ');
}

export const examContext = (context?: string) =>
  context && context !== 'unknown'
    ? context.charAt(0).toUpperCase() + context.slice(1)
    : '';

export function sourceLabel(source: any): string {
  const title = [source.university, source.course].filter(isStated).join(' · ');
  const suffix = [source.instructor, source.year].filter(isStated).join(', ');
  return [title, suffix].filter(Boolean).join(' · ');
}

export function optionLabel(value: string) {
  return humanize(value).replace(/\b\w/g, (char) => char.toUpperCase());
}

export function uniqueSorted<T>(items: T[], label: (item: T) => string) {
  return [...items].sort((a, b) => label(a).localeCompare(label(b)));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function groupBySourceYear(problems: any[]) {
  const groups = new Map<string, { id: string; label: string; items: any[] }>();
  for (const problem of problems) {
    const source = problem.source ?? {};
    const key = [source.slug, source.year].filter(Boolean).join('::');
    if (!groups.has(key)) {
      const label = sourceLabel(source) || 'Unstated source';
      groups.set(key, {
        id: slugify(key || label),
        label,
        items: [],
      });
    }
    groups.get(key)?.items.push(problem);
  }
  return [...groups.values()];
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const shouldRenderMath = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return false;
  // The source text also contains ordinary currency amounts such as "$2.80".
  // Treat dollar pairs that begin with a digit as prose, not math delimiters.
  if (/^\d/.test(trimmed)) return false;
  return true;
};

export function renderInlineMath(text: string) {
  const pieces = String(text ?? '').split('$');
  if (pieces.length < 3) return escapeHtml(text);

  let html = escapeHtml(pieces[0]);
  for (let i = 1; i < pieces.length; i += 2) {
    const candidate = pieces[i];
    const next = pieces[i + 1] ?? '';
    const hasClosingDelimiter = i + 1 < pieces.length;
    if (hasClosingDelimiter && shouldRenderMath(candidate)) {
      try {
        html += katex.renderToString(candidate, {
          throwOnError: false,
          strict: false,
          output: 'html',
        });
      } catch {
        html += `$${escapeHtml(candidate)}$`;
      }
      html += escapeHtml(next);
    } else {
      html += `$${escapeHtml(candidate)}`;
      if (hasClosingDelimiter) {
        html += `$${escapeHtml(next)}`;
      }
    }
  }
  return html;
}
