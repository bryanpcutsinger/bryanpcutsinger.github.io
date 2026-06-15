# Claude Context: Personal Website (bryanpcutsinger.github.io)

## What this is

An umbrella website built with **Astro + Starlight** and deployed to **GitHub
Pages** as a user site (`bryanpcutsinger.github.io`, served at the root). One repo:

- `/`, `/about/`, `/speaking/`, `/contact/` — the **professional marketing site**
  (custom Astro pages in `src/pages/`, NOT Starlight). Built out 2026-06-14 — see the
  **Marketing site** section below. This is now the primary front end.
- `/ai/` — **Getting Started with Claude Code**: a beginner's guide to getting started with
  Claude Code, written for **academic economists** on a Mac who are new to the
  command line and AI tools. **Framed as a LEAN pre-read** (see the Goal below): a
  short *required path* of **8 pages** (orientation + set up + get oriented) that
  gets a reader self-sufficient, with the other **9 posts demoted to a collapsed
  "Reference (for after)" group** — good material, but for when a topic comes up,
  not pre-read. (Framed for an economist audience — examples draw on **teaching
  economics and doing economic research**, balanced roughly evenly. Stay
  beginner-friendly: the reader is a fellow economist new to these tools, not a
  developer. Keep new content in this academic-economist register.)
- **Goal / guiding lens (2026-06-13):** the site exists to get a reader *self-sufficient
  on setup and the core mental model on their own*, so any in-person/hands-on time is
  spent on real work, not basics. Public-facing framing (no "our session" language),
  but every page is judged by: *does it help the reader arrive ready?* Bias toward a
  lean required path; resist scope creep back into the reference pile. Audit + revision
  plan: `~/.claude/plans/crystalline-rolling-jellyfish.md`.

Future sub-sites get added as new Starlight content groups in the same repo.

## Marketing site (the primary front end — built 2026-06-14)

The root is now a **bespoke, conversion-grade marketing site** positioning Bryan as an
economist + **paid speaker**, built as **custom Astro pages in `src/pages/`**
(`index`, `about`, `speaking`, `contact`), completely separate from Starlight (which
still owns `/ai/`). Full build history: `~/.claude/plans/i-want-to-rebuilt-ancient-zephyr.md`
(Revisions 1–5).

- **Brand (independent/editorial — NOT FAU navy/red):** deep ink `#1a1c1e` + warm brass
  `#b07a2c` on bone `#f7f4ef`; **Fraunces** display + **Inter** body, self-hosted via
  `@fontsource-variable/*`. Tokens: `src/styles/brand.css`. The two CSS systems never
  touch — `brand.css` loads only on `src/pages/`; `fau-theme.css` only inside Starlight.
- **Layout/kit:** `src/layouts/MarketingLayout.astro` (own `<head>`, sticky nav, footer,
  **`noindex` prop default `true`**) + `src/components/marketing/*` (Hero, Section,
  TopicGrid, TestimonialRow [null-on-empty], AsSeenIn, CTABand, SpeakerReel [3-state
  graceful], BookingForm, PortraitFigure, …). Editable copy: `src/data/{topics,testimonials,logos}.json`.
- **Photos** in `src/assets/`: `bryan-cutsinger.png` (headshot → hero/about), plus
  `on-stage-podium.jpg` (home "Bryan in the room" reel), `on-stage-gesturing.jpg` (about),
  `speaking-hero.jpg` (speaking hero). Optimized via `astro:assets`.
- **Cross-nav:** `src/components/overrides/HeaderLinks.astro` (registered as Starlight's
  `SocialIcons`) links guides → About/Speaking/Contact; marketing nav has a "Guides" link.
  Sitemap: explicit `@astrojs/sitemap` in `astro.config.mjs` covers the `src/pages/` routes.
- **`/ai/` guides share the marketing site's FULL visual language** (Rev 5, then fully
  unified 2026-06-15): `fau-theme.css` carries the brand palette + Fraunces/Inter + 4px
  (fonts loaded site-wide via `SiteTitle.astro` frontmatter) **and** the brand's
  patterns — sentence-case headings/nav/tables (no institutional all-caps), minimal
  hairline tables (no zebra striping), cards that lift on hover (no navy-gradient
  takeover), and a softened ink header. There is **no separate "FAU pattern."** The
  **only** intentionally-distinct thing is the Starlight docs layout (sidebar/TOC), kept
  because the guides are reference docs that need navigation.
- **LIVE** (commit `6b6d36f`, 2026-06-14); still **`noindex`ed**.

**Placeholders Bryan still owes (marked `[PLACEHOLDER]` in code):** Web3Forms access key
+ booking email (booking form is inert until then — `BookingForm.astro`); real **talk
topics** (`data/topics.json`); **testimonials** (`testimonials.json` empty → section
auto-hidden; named quotes only); **long bio** + exact **rank/department** (`about.astro`);
speaker **one-sheet PDF** → `public/downloads/`; optional video **reel** (photo fallback
shows now). Verified facts only: "Featured in" = National Review, The Hill, The Washington
Examiner, RealClearEducation; credentials = interim director of the **AIER Sound Money
Project**, Associate Editor of *Public Choice*, FAU economics professor (WSJ was a letter
to the editor — deliberately not featured).

## Stack & conventions

- **Astro 5 + Starlight** (`@astrojs/starlight@^0.36`). Static output, user site,
  no `base` path. Starlight owns the layout, sidebar, right-rail TOC, prev/next
  pager, and search.
  - Starlight is **pinned to the 0.36 line on purpose**: 0.38+ requires Astro 6 and
    we're staying on Astro 5 for now (see TODO). Don't bump it without bumping Astro.
- **Theming = the brand (was FAU; changed 2026-06-14, fully unified 2026-06-15).**
  `src/styles/fau-theme.css` (registered via Starlight `customCss`) carries the
  **full marketing brand** onto Starlight — not just the palette/type/corners (ink
  `#1a1c1e` + brass `#b07a2c` on bone `#f7f4ef`, Fraunces headings + Inter body, 4px)
  but the brand's *patterns* too: sentence case throughout, minimal hairline tables,
  lift-on-hover cards, underlined brass links. **Don't reintroduce FAU structural
  patterns** (uppercase nav/table headers, navy-gradient card hover, zebra striping,
  hard brass header underline) — they were deliberately removed. The filename and its
  `--fau-*` variable names are **historical** — they hold brand colors now, not FAU
  navy/red. Marketing tokens: `src/styles/brand.css`. (Unification plan:
  `~/.claude/plans/the-style-for-the-effervescent-shannon.md`; original FAU rationale,
  now superseded: `~/.claude/plans/jaunty-spinning-tiger.md`.)
- **Content lives in `src/content/docs/`** (Starlight's `docs` collection, defined
  in `src/content.config.ts` via `docsLoader()` + `docsSchema()`):
  - `docs/index.mdx` → `/` (splash landing)
  - `docs/ai/index.mdx` → `/ai/` (overview: stage cards + "What you'll need" table)
  - `docs/ai/<slug>.md` → `/ai/<slug>/` (the 17 guide posts; flat slugs)
  - `public/templates/CLAUDE-md-economist-template.md` → `/templates/...` (a
    downloadable economist CLAUDE.md starter, linked from `claude-md-and-memory.md`)
- **Frontmatter is Starlight's** (`title`, `description`, `draft`, optionally
  `template`/`hero`/`sidebar`). **No `pubDate`/`tags`** — curriculum ORDER lives in
  the sidebar config, not dates.
- **Sidebar / curriculum order is in `astro.config.mjs`** — the "Getting Started
  with Claude Code" group, now in **4 sections** reflecting the lean pre-read:
  *Start here* (overview + `what-is-claude-code`) → **Set up (do this first)**
  (`installing-vs-code`, `terminal-basics`, `installing-claude-code`) → **Get
  oriented** (`your-first-session`, `operating-modes`, `pointing-claude-at-your-work`,
  `trust-safety-integrity`) → **Reference (for after)** (`collapsed: true`; the other
  9 posts). To add/reorder a post, edit that sidebar config — and decide deliberately
  whether it belongs in the required path or Reference (default to Reference unless it
  serves "arrive ready").
- **The path is DE-NUMBERED.** The original 10 posts used to hard-code "Step N" in
  prose; that was removed in the 2026-06-13 reframe (it broke once pages were
  resequenced/demoted). All posts now **open topically and reference prerequisites by
  link**, relying on Starlight's pager/breadcrumbs. Keep that convention — never
  reintroduce a global "Step N" label.
- **Reference pages carry a banner.** Each of the 9 demoted posts opens with a
  `:::note` "Reference — for when you're up and running…" aside so it reads as
  optional. Add the same banner to any future Reference post.
- **Chrome overrides** in `src/components/overrides/`: `SiteTitle.astro` ("Bryan
  Cutsinger" wordmark on the ink bar — own identity, NO FAU logo; **also loads the
  Fraunces/Inter fonts site-wide** via its frontmatter imports), `Footer.astro`
  (**wraps** Starlight's default Footer to preserve the pager, then adds an ink
  copyright bar — don't replace it outright), and `HeaderLinks.astro` (registered as
  `SocialIcons`; adds About/Speaking/Contact links back to the marketing site).
- Safety/screenshot callouts use Starlight **asides** (`:::note` / `:::caution` /
  `:::danger`). Screenshot placeholders are `:::note[Screenshot to add]` blocks —
  Bryan still needs to capture and insert real images.

## Commands

- `npm run dev` — local preview at http://localhost:4321 **(use this to review)**
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the built site

> **Build status: `npm run build` is GREEN.** The marketing pages (`src/pages/`) build
> fine. The `/ai/` Claude Code guide is being rebuilt post-by-post: the **overview
> (`ai/index.mdx`) and `what-is-claude-code` are `draft:false`** and served via a
> **minimal live sidebar group** in `astro.config.mjs`. The fuller guide structure stays
> **commented out** below that group until each post is rebuilt and flipped to
> `draft:false` — leave it commented, or Starlight fails the build on draft/missing slugs.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to Pages.
No manual deploy step. **LIVE** at https://bryanpcutsinger.github.io (repo: GitHub
user site `bryanpcutsinger/bryanpcutsinger.github.io`, public).
- **Pages source = "GitHub Actions" (`build_type: workflow`).** Set 2026-06-14 via
  `gh api -X PUT .../pages -f build_type=workflow`. It was previously **`legacy`**
  ("deploy from branch"), which made GitHub auto-run its **Jekyll** `pages-build-deployment`
  builder on every push — it choked on the `.astro` frontmatter and **failed every time**
  (harmless: the Astro workflow is what actually served, but it spammed failure emails).
  **Do NOT switch Pages back to branch mode** or the failing Jekyll builds return.
- The site is **`noindex`ed** while shared privately: a `head` meta in `astro.config.mjs`
  (covers `/ai/`) AND `MarketingLayout.astro`'s `noindex` prop default `true` (covers
  `src/pages/`). **To allow indexing at full launch, lift BOTH** (comment-linked).
- Non-blocking CI warning: Node 20 sub-actions deprecated (GitHub forces Node 24 ~June
  2026) — bump `withastro/action`/checkout versions later.

## Adding content

- **A guide post:** add `src/content/docs/ai/<slug>.md` with Starlight frontmatter
  (`title`, `description`, `draft: true`), then add `{ slug: 'ai/<slug>' }` to the
  right stage in the `sidebar` config in `astro.config.mjs`. Frame it for an
  **academic economist** new to these tools — draw examples from teaching and
  research, balanced roughly evenly (e.g. syllabi, problem sets, lecture notes;
  data cleaning, replication, working papers, citations). Stay beginner-friendly,
  not developer-facing. Voice: practical, low-hype, second person.
- **A new sub-site:** add content under `src/content/docs/<name>/`, give it its own
  `sidebar` group in `astro.config.mjs` (and/or a splash index). It inherits the
  brand theme automatically.

## Current status (as of 2026-06-13)

- **The Cowork/Desktop branch was DELETED (2026-06-15).** A standalone "Claude on the
  Desktop (Cowork & Code)" branch (13 pages under `src/content/docs/ai/desktop/`, for a
  non-technical Windows colleague) was removed entirely — the site's focus is now
  **entirely on Claude Code**. Its sidebar group, the `sparkling-strolling-pearl*` plan
  files, and all `/ai/desktop/` references are gone. The marketing header/footer "Guides"
  link was repointed `/ai/desktop/` → `/ai/`, and the **`/ai/` Claude Code guide overview
  + `what-is-claude-code` were published (`draft:false`)** so that link lands on real
  content (see Build status above). The rest of the guide is still being rebuilt.
- **Refocused as a lean "arrive-ready" pre-read** (plan:
  `~/.claude/plans/crystalline-rolling-jellyfish.md`). A read-only multi-agent audit
  (one agent per post + synthesis) found the guide had become a 17-post standalone
  curriculum when the goal needs a short pre-read. Revision implemented:
  - **Sidebar collapsed 8 stages → 4 sections**; 8 required pages, 9 demoted to a
    collapsed **Reference (for after)** group (nothing deleted — only resequenced).
  - **Overview (`ai/index.mdx`) reframed** into a required-vs-optional map: "the short
    path" (2 cards), a literal **setup checklist**, and a single "Reference, for after"
    card. Public framing, no in-person-day language.
  - **Path de-numbered** — "Step N" prose removed across all posts; intros now open
    topically and link prerequisites. "Capstone" framing dropped.
  - **`your-first-session` gained a "Success looks like this" setup-verification**
    callout; `installing-claude-code` now points to it as the end-of-setup check.
  - **Trims:** `what-is-claude-code` "What it's NOT" compressed to one caution;
    `trust-safety-integrity` wrap-up trimmed and the 4-bullet verification routine
    folded into its checklist (so the deferred `verifying-claudes-work` isn't
    load-bearing). All 9 Reference posts carry a "reference, not required" banner.
  - **DONE + verified in `dev`** (2026-06-13): all 19 pages return 200, sidebar shows
    the 4 sections with Reference collapsed, banners/checklist/success-callout render,
    grep-clean of "Step N"/"capstone". The reframe is complete — not mid-flight. The
    only remaining work before publish is the **screenshots** (see Notes/TODO) and the
    standard pre-publish integrity re-check; do NOT re-run the audit/restructure.
- **Redesigned to Astro+Starlight with FAU theming; runs clean in `dev`.** The
  `/ai/` guide is drafted, restyled to the FAU look, and framed for an
  academic-economist audience (teaching + research examples, balanced). Landing +
  overview pages done.
- **Phase 1 of the value-add audit is IMPLEMENTED** (plan:
  `~/.claude/plans/velvet-conjuring-kernighan.md`). Grew the guide from 10 → **17
  posts** and added three sidebar stages. The seven new posts:
  `reading-and-analyzing`, `errors-and-recovery` (Working well);
  `teaching-with-claude-code` (new **Teaching** stage); `a-real-research-workflow`,
  `verifying-claudes-work`, `reproducibility-and-logs` (new **Doing research**
  stage); `resources-for-economists` (new **Reference** stage). Plus: prompt
  before/after table + `@`-ref tip in `prompting-habits`; `/clear` `/compact`
  context-mgmt in `your-first-session`; "not enforced" caution + Zotero pointer +
  template link in `claude-md-and-memory`; "backup ≠ version control" callout +
  recovery cross-link in `pointing-claude`; author/credibility line + new stage
  cards on the overview; the `public/templates/` economist CLAUDE.md asset; and the
  broken `/ai/getting-started/` link in `installing-vs-code.md` fixed to
  `/ai/what-is-claude-code/`. All new pages verified 200 in `dev`.
- **External links were verified against live sources** (Korinek JEL 2023 via
  Brookings, Cunningham MixtapeTools/"Referee 2", Zotero MCP, awesome-ai-for-economists,
  Blattman). The plan's "Sant'Anna econometrics AI agent" lead **could not be
  verified and was dropped** — do not reintroduce it without a real source.
- **Phase 2 is deferred** (a signposted "Going further" track: Skills/MCP/subagents,
  model & cost, Git as undo, Codex comparison). See the plan. Not started.
- **PUBLISHED to GitHub Pages (2026-06-13).** Live at https://bryanpcutsinger.github.io
  (public repo `bryanpcutsinger/bryanpcutsinger.github.io`; Pages via GitHub Actions).
  The marketing site is the front end; under `/ai/`, the **Claude Code guide overview
  (`ai/index.mdx`) + `what-is-claude-code`** are live (`draft:false`). Everything stays
  **`noindex`ed** while shared privately.
- **Mac/terminal Claude Code guide — mid-rebuild.** The old 17 posts were deleted in the
  blank-slate rebuild; only the **overview + `what-is-claude-code`** exist so far (both
  `draft:false`, in a minimal live sidebar group). Resume drafting the remaining posts per
  `docs/guide-rebuild-notes.md`; as each ships, add its slug to the live sidebar group and
  link it from the overview. The fuller sidebar structure stays commented in
  `astro.config.mjs` until the full set is rebuilt.

## Notes / TODO

- **Marketing site — open items (see the Marketing site section for the full list).**
  Highest-value next steps: Web3Forms key + booking email (booking form inert until
  then); real talk topics; named testimonials; long bio + exact rank/department; speaker
  one-sheet PDF; optional video reel. All are `[PLACEHOLDER]` in code. Optional: pre-shrink
  the 14 MB `src/assets/on-stage-podium.jpg` source (build already optimizes the output).
  The TODO bullets below this one are about the older Mac `/ai/` guide, not the marketing site.
- **Screenshots — HARD pre-publish blockers on the required path.** Several posts have
  `:::note[Screenshot to add]` placeholders for Bryan to fill. On the lean pre-read,
  these gate solo followability (a beginner with nobody to help hits a wall at a blank
  placeholder). Priority order: (1) `installing-claude-code` — browser **sign-in page**
  (gates auth) + integrated-terminal panel; (2) `your-first-session` — VS Code with
  folder + Claude prompt (the "success looks like this" anchor); (3)
  `pointing-claude-at-your-work` — side-by-side **diff** view; (4)
  `trust-safety-integrity` — diff view; (5) `installing-vs-code` — drag-to-Applications
  + terminal-open; (6) `terminal-basics`, `operating-modes` — terminal panel; Plan-mode
  view. **Do not flip `draft:false` on the required path until 1–4 are filled** (or
  replaced with text fallbacks). The audit deliberately left these placeholders untouched.
- **Integrity gate before publish:** the new `resources-for-economists` and
  `verifying-claudes-work` posts cite external tools/links. They were verified live
  during the Phase 1 build, but the pages themselves tell readers to re-verify —
  re-confirm every external link, tool name, and the Korinek citation against a live
  source at publish time. Nothing ships from memory.
- **npm advisories:** the Starlight install brought build-time deps that report
  vulnerabilities (last seen: 3 high, 2 low). Build-time only (not shipped to
  visitors). `npm audit fix --force` was NOT run (breaking). Review before publish.
- **Astro 6 upgrade — deferred, do after first publish.** Unlocks the latest
  Starlight line (features, fixes, likely clears the advisories above). Node 24 is
  already installed, so the Node 22+ requirement is met; nothing here uses removed
  APIs (`Astro.glob`, `<ViewTransitions/>`); main work is Zod 3→4 (mostly absorbed
  by Starlight). Plan it as one deliberate step: `astro@6` + latest `@astrojs/starlight`.
- **Custom domain:** not set up (on github.io). When added, change `site` in
  `astro.config.mjs` and add `public/CNAME`.
- **Capstone title:** the integrity post is titled "Trust, Safety & Integrity"
  (the academic "Research" qualifier was dropped in the reframe).
