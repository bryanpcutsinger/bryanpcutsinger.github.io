// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// GitHub *user site* (bryanpcutsinger.github.io) served from root — no `base`.
// The site is a Starlight docs site themed to the FAU style guide (see
// src/styles/fau-theme.css). When a custom domain is attached, only `site` changes.
export default defineConfig({
  site: 'https://bryanpcutsinger.github.io',
  integrations: [
    // Explicit sitemap so the custom marketing pages (src/pages/*) are included
    // — Starlight's transitive sitemap only enumerates its own docs routes.
    sitemap(),
    starlight({
      title: 'Bryan Cutsinger',
      // TEMP: keep the site out of search results while it's shared privately with a
      // colleague (deploy-ready, not a public announcement). Delete this `head` block
      // to allow search engines to index the site at full public launch.
      head: [
        { tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } },
      ],
      description:
        'A beginner\'s guide to getting started with Claude Code for teaching and research, plus notes on using AI.',
      // FAU style-guide theming layered on top of Starlight's tokens.
      customCss: ['./src/styles/fau-theme.css'],
      // Keep Bryan's own identity in the chrome (no FAU logo/wordmark); the
      // Footer override WRAPS the default so the prev/next pager is preserved.
      components: {
        SiteTitle: './src/components/overrides/SiteTitle.astro',
        Footer: './src/components/overrides/Footer.astro',
        // Repurpose the (empty) social-icons header slot for nav links back to
        // the marketing site, keeping both systems navigable.
        SocialIcons: './src/components/overrides/HeaderLinks.astro',
      },
      // Curriculum order lives here (not in pubDate). Labels are curated;
      // URLs stay flat at /ai/<slug>/. The guide is framed as a LEAN pre-read:
      // a short required path (set up + get oriented, 8 pages) that gets a
      // beginner self-sufficient, with everything else demoted to a collapsed
      // "Reference (for after)" group so it reads as optional, not the path.
      sidebar: [
        // ── The "Claude on the Desktop (Cowork & Code)" branch ──────────────
        // A standalone, Windows + desktop-app-centric branch written for a
        // non-technical colleague (econ professor / department chair) whose app
        // is already installed. Cowork-first; Code as a taste. Two sections: a
        // pre-read to skim, and a 2-hour facilitator run-of-show that doubles as
        // a later reference. All posts ship draft:false (see TEMP note below).
        {
          label: 'Claude on the Desktop (Cowork & Code)',
          items: [
            { label: 'Start here', slug: 'ai/desktop' },
            {
              label: 'Before we meet (pre-read)',
              items: [
                { slug: 'ai/desktop/the-desktop-app' },
                { slug: 'ai/desktop/meet-cowork' },
                { slug: 'ai/desktop/cowork-safely' },
                { slug: 'ai/desktop/cowork-for-economists' },
                { slug: 'ai/desktop/a-taste-of-code' },
                { slug: 'ai/desktop/before-we-meet' },
              ],
            },
            {
              label: 'The 2-hour session',
              items: [
                { slug: 'ai/desktop/session-run-of-show' },
                { slug: 'ai/desktop/session-1-orientation' },
                { slug: 'ai/desktop/session-2-first-cowork-task' },
                { slug: 'ai/desktop/session-3-research-or-teaching' },
                { slug: 'ai/desktop/session-4-taste-of-code' },
                { slug: 'ai/desktop/session-5-safety-and-wrap-up' },
              ],
            },
          ],
        },

        // ── TEMP (2026-06-13): the "Getting Started with Claude Code" group is
        // commented out ON PURPOSE. All 17 of its posts are still draft:true,
        // and Starlight FAILS the production build whenever the sidebar
        // references draft slugs. Keeping it out lets `npm run build` go green so
        // the desktop branch above (draft:false) is publish-ready. Nothing in
        // these files changed — they're untouched drafts. RESTORE this whole
        // block (and delete this note) once the main guide's screenshot blockers
        // are filled and its posts flip to draft:false. The two groups coexist
        // fine then.
        // {
        //   label: 'Getting Started with Claude Code',
        //   items: [
        //     { label: 'Start here', slug: 'ai' },
        //     { slug: 'ai/what-is-claude-code' },
        //     {
        //       label: 'Set up (do this first)',
        //       items: [
        //         { slug: 'ai/installing-vs-code' },
        //         { slug: 'ai/terminal-basics' },
        //         { slug: 'ai/installing-claude-code' },
        //       ],
        //     },
        //     {
        //       label: 'Get oriented',
        //       items: [
        //         { slug: 'ai/your-first-session' },
        //         { slug: 'ai/operating-modes' },
        //         { slug: 'ai/pointing-claude-at-your-work' },
        //         { slug: 'ai/trust-safety-integrity' },
        //       ],
        //     },
        //     {
        //       label: 'Reference (for after)',
        //       collapsed: true,
        //       items: [
        //         { slug: 'ai/prompting-habits' },
        //         { slug: 'ai/claude-md-and-memory' },
        //         { slug: 'ai/reading-and-analyzing' },
        //         { slug: 'ai/errors-and-recovery' },
        //         { slug: 'ai/teaching-with-claude-code' },
        //         { slug: 'ai/a-real-research-workflow' },
        //         { slug: 'ai/verifying-claudes-work' },
        //         { slug: 'ai/reproducibility-and-logs' },
        //         { slug: 'ai/resources-for-economists' },
        //       ],
        //     },
        //   ],
        // },
      ],
      // No social/edit links or last-updated for now; keep it clean.
      lastUpdated: false,
      pagination: true,
      // Remove the search box (Starlight's built-in Pagefind UI + ⌘K modal).
      pagefind: false,
    }),
  ],
});
