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
        // ── Getting Started with Claude Code (live, minimal) ────────────────
        // The Claude Code guide is being rebuilt post-by-post. Only the overview
        // and the orientation post are draft:false so far, so this live group
        // lists just those two. Add slugs here as each post is re-drafted and
        // flipped to draft:false. The fuller structure to restore lives in the
        // commented block below.
        {
          label: 'Getting Started with Claude Code',
          items: [
            { label: 'Start here', slug: 'ai' },
            { slug: 'ai/what-is-claude-code' },
            { slug: 'ai/setting-up-claude-code' },
            { slug: 'ai/your-first-session' },
          ],
        },

        // ── TEMP (2026-06-13, updated 2026-06-15): the FULL "Getting Started
        // with Claude Code" group is commented out ON PURPOSE. Its posts are
        // still draft:true (or not yet rebuilt), and Starlight FAILS the
        // production build whenever the sidebar references draft/missing slugs.
        // The minimal live group above keeps `npm run build` green while the
        // guide is rebuilt. RESTORE this whole block (and remove the minimal
        // group + this note) once every post below exists and is draft:false.
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
