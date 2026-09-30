// Sitewide rule (Bryan, 2026-09-30): links that leave the site — any http(s)
// link to another host — and PDFs open in a new tab, so readers keep the site
// open. Internal page-to-page links are untouched. One inline script shared by
// MarketingLayout (src/pages/) and the Starlight head (/ai/), so it also covers
// generated content (publications, writing feed, guide posts) without per-link
// edits. Links that already set a target keep it.
export const externalLinksScript = `
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href]').forEach(function (a) {
    if (a.hasAttribute('target')) return;
    if (a.protocol !== 'http:' && a.protocol !== 'https:') return;
    var external = a.host !== location.host;
    var pdf = /\\.pdf$/i.test(a.pathname);
    if (!external && !pdf) return;
    a.target = '_blank';
    var rel = (a.getAttribute('rel') || '').split(/\\s+/).filter(Boolean);
    if (rel.indexOf('noopener') === -1) rel.push('noopener');
    a.setAttribute('rel', rel.join(' '));
  });
});
`;
