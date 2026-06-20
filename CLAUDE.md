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
- **Sidebar / curriculum order lives in the GUIDE repo** (`guide.manifest.json` in
  `bryanpcutsinger/claude-code-guide`), NOT in `astro.config.mjs` anymore (changed
  2026-06-17 — see the "Claude Code guide" section below). The config just does
  `import claudeGuideSidebar from './src/data/guide-sidebar.json'` (a generated copy)
  and `sidebar: [claudeGuideSidebar]`. To add/reorder a post or restore the nested
  *Start here → Set up → Get oriented → Reference (for after)* groups, edit the
  **manifest in the guide repo** and re-import — never hand-edit the config or the
  generated JSON. Draft-safety rule still applies: the manifest lists only
  `draft:false` posts (Starlight fails the build on draft/missing slugs).
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
> fine. The `/ai/` Claude Code guide is now **imported** from `bryanpcutsinger/claude-code-guide`
> (see the "Claude Code guide" section below): the overview (`ai/index.mdx`),
> `what-is-claude-code`, `setting-up-claude-code`, and `your-first-session` are
> `draft:false` and the sidebar is built from the imported manifest
> (`src/data/guide-sidebar.json`). The fuller structure is reintroduced by editing the
> manifest **in the guide repo** as posts are rebuilt and flipped to `draft:false` (only
> `draft:false` posts go in the manifest, or Starlight fails the build).

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

- **A guide post:** author it in the **guide repo** (`~/Projects/claude-code-guide`),
  NOT here — add `posts/<slug>.md` with Starlight frontmatter (`title`, `description`,
  `draft: true`), add `{ "slug": "ai/<slug>" }` to `guide.manifest.json` when ready
  (`draft:false`), push, then on the website run `npm run import:guide` + `npm run
  build` and commit the regenerated files. Frame it for an **academic economist** new
  to these tools — examples from teaching and research, balanced (syllabi, problem
  sets, lecture notes; data cleaning, replication, working papers, citations).
  Beginner-friendly, not developer-facing. Voice: practical, low-hype, second person.
  **Never hand-edit `src/content/docs/ai/` here — it's a generated copy.**
- **A new sub-site:** add content under `src/content/docs/<name>/`, give it its own
  `sidebar` group in `astro.config.mjs` (and/or a splash index). It inherits the
  brand theme automatically.

## Teaching section + course-content publishing (built 2026-06-17)

`/teaching/` is a **marketing-styled** sub-site (custom `src/pages/`, NOT Starlight),
separate from the `/ai/` Starlight docs. Two layers:

- **Static scaffold** (committed 2026-06-17, `158f056`): `/teaching/` landing
  (`src/pages/teaching.astro` + `src/data/teaching.json`) and the per-course home
  `src/pages/teaching/microeconomics.astro`. Nav links to `/teaching/` were added to
  `SiteHeader`, `SiteFooter`, and the Starlight `HeaderLinks` override.
  - **Courses are scaffold, NOT imported.** The course list/cards live HERE in
    `src/data/teaching.json` (each card: `title`/`description`/`audience`/`format`/`href`)
    and each course home is a hand-authored `src/pages/teaching/<slug>.astro` (copy
    `microeconomics.astro`). Only the *topics inside* a course flow through the import
    pipeline. **Adding a course = one card in `teaching.json` + one page in
    `src/pages/teaching/`.** The course `<slug>` in the card's `href` MUST match the
    `course` arg passed to `import:topic` (the `src/content/courses/<course>/` folder),
    or topics won't show under it.
  - As of 2026-06-18 (`c1cc97b`): two course cards — **Micro-Economic Principles**
    (renamed from "Principles of Microeconomics"; URL slug stays `microeconomics`; real
    description) and **Price Theory** (`/teaching/price-theory/`, slug `price-theory`).
    **Price Theory does NOT use the topic-posts pipeline** — it's a problem bank with its
    own `import:problems` pipeline (see "Price Theory — problem-bank pipeline" below).
- **Topic-posts pipeline** (the publishing machine): per-topic readers are **imported**
  from the **private** repo `bryanpcutsinger/micro-principles` — this public repo holds a
  *generated, never-hand-edited copy*. Edit the source post → re-import → site updates.

**How to publish/refresh a topic:**
```
npm run import:topic -- <topic-slug> [course]     # e.g. t01-economic-way-of-thinking microeconomics
```
`scripts/import-topic.sh` (via `gh`, no local clone of the source needed): copies `post.md`
with the `<!-- INSTRUCTOR NOTES … -->` block **stripped**, rewrites relative figure refs
`](figures/x.svg)` → absolute `](/teaching/<course>/<slug>/figures/x.svg)`, and copies
`figures/*.svg` into `public/teaching/<course>/<slug>/figures/`. Cleaned posts land in
`src/content/courses/<course>/<slug>/post.md` (the `courses` content collection in
`src/content.config.ts` — lenient Zod schema; Starlight's `docs` is untouched).

**🔴 Security — instructor notes are stripped at THREE layers (the public repo must never
carry them):** (1) PRIMARY — the import script removes the block at copy time, so notes
never enter source/git history; (2) defense-in-depth — a path-scoped remark plugin
(`stripCourseComments` in `astro.config.mjs`, no-op outside `/content/courses/`, so `/ai/`
output is byte-unchanged) strips HTML comments at render; (3) a `postbuild` gate
(`package.json`) fails the build if `INSTRUCTOR NOTES` appears anywhere in `dist`.

**Publish gate:** topic pages render/route **only when frontmatter `status: approved`** in
the PRODUCTION build. `astro dev` also previews drafts (mirrors Starlight's `draft:`
behavior) with a "Draft preview" badge, so Bryan can read in-progress topics locally
without publishing them. As of 2026-06-17 **no source topic is `approved`** (T1 was
re-set to `draft` after a 2026-06-06 rebuild — "re-approval pending"), so the live topic
index renders **empty** until Bryan flips a topic to `approved` and re-imports. T1 is
imported into the working tree for verification.

**Rendering:** `src/pages/teaching/microeconomics/[topic].astro` (`getStaticPaths` +
`render()`) — eyebrow band (course · T#), in-page TOC from `##` claim headers, scoped
`.prose` CSS (incl. GFM tables + figure/caption styling), prev/next pager, back-link,
CTABand. The course home lists published topics as an ordered index. Slides are LaTeX and
on hold upstream → `DownloadCard`s show "Request" until PDFs land in `public/downloads/`.
**Note:** in `[topic].astro`, `getStaticPaths()` runs in an isolated scope — keep the
consts it needs (`COURSE`, helpers) *inside* it; the template re-declares `COURSE`.

### Price Theory — problem-bank pipeline (built 2026-06-18)

Price Theory is **not** topic readers — its source repo
`bryanpcutsinger/price-theory` (public) is a **problem bank**, so it uses a *separate,
simpler* pipeline from `import:topic`. The repo's own build (`fetch_raw.py` →
`collect_problems.js` → `build.py`) regenerates `derived/problems.json` (flattened
problems, each with inline provenance + `topics[]`/`subtopics[]`/`exam_context`/`solution`)
and `taxonomy.json` (13 topics, each with a `label` + allowed subtopics).

**Refresh the bank:** `npm run import:problems` (`scripts/import-problems.sh`, via `gh`)
pulls those two files into a **generated, never-hand-edited committed copy** at
`src/data/price-theory/{problems,taxonomy}.json`. No notes-strip / no figure copy (the
source is public + text-only); the script fails if the bank is empty/malformed.

**Rendering** (custom Astro pages reading the JSON, NOT the `courses` collection or the
Markdown pipeline):
- `src/pages/teaching/price-theory.astro` — course home = the bank's front door: overview
  + a `TopicGrid` of the taxonomy topics that have ≥1 problem (sorted by count), each
  card → `/teaching/price-theory/<topic-key>/`, **plus a client-side cross-bank search**:
  free-text box + facet filters (topic, source, instructor, year, exam context) over a
  results list with a live, `aria-live` count. Filtering is pure DOM (`data-*` attributes
  on each result row); no JS framework, no network.
- `src/pages/teaching/price-theory/[topic].astro` — `getStaticPaths` over taxonomy topics
  (one route per non-empty topic); renders each matching problem as a card (verbatim
  question, provenance line + "source" back-link to Irwin Collier, subtopic chips,
  `<details>` solution when present). Adds a visible `<h1>`, **clickable subtopic chips
  that filter the page** (`data-chip-value`), a source-jump nav, and **problems grouped by
  source/year** (`groupBySourceYear`, anchored `<section data-source-group>` blocks).
  Imports the JSON at module scope (fine in `getStaticPaths` — imports are allowed there,
  unlike module consts).
- **Inline math:** inline LaTeX (`$…$`) is rendered with **KaTeX** (added 2026-06-20,
  `f9304fc`) via `renderInlineMath` in `src/lib/priceTheory.ts` — a shared helper module
  that also holds the provenance/label/grouping helpers used by both Price Theory pages.
  `renderInlineMath` is **currency-aware**: a `$…$` pair whose contents start with a digit
  is treated as a prose dollar amount (e.g. `$2.80`), not a math delimiter, so ordinary
  prices don't get mangled. (Was previously a deferred follow-up — rendered raw.)
- No publish-gate / no `status:approved` here — the bank is public by construction
  (decision 2026-06-18: publish with source attribution). Site-wide `noindex` still applies.

## Claude Code guide — imported from its own repo (split out 2026-06-17)

The `/ai/` "Getting Started with Claude Code" guide is **no longer hand-authored in
this repo**. Its source of truth is `bryanpcutsinger/claude-code-guide` (private; local
folder `~/Projects/claude-code-guide`, a top-level sibling of `Website`). This repo
holds a **generated, committed copy** — same source-of-truth model as the micro course,
but for Starlight content. Plan: `~/.claude/plans/would-it-make-sense-humble-cupcake.md`.

**Refresh the guide:**
```
npm run import:guide        # scripts/import-guide.sh, via gh
```
It pulls from the guide repo (default branch) over `gh` — no local cross-folder
dependency — and writes:
- `posts/**` → `src/content/docs/ai/**` (**clear-and-rewrite**: this dir is 100%
  generated, so a renamed/deleted source post can't leave an orphan live page),
- `guide.manifest.json` → `src/data/guide-sidebar.json` (drives the Starlight sidebar
  via the `import` in `astro.config.mjs`),
- the guide's `public/**` → this repo's `public/**` (**additive** — never deletes
  site-owned files like `favicon.svg` or `teaching/**`; this is how
  `public/templates/CLAUDE-md-economist-template.md` arrives).

No notes-strip / no path-rewrite needed (no instructor notes in the guide). The global
`postbuild` `INSTRUCTOR NOTES` gate still runs but is a harmless no-op here.

**Rules:** never hand-edit `src/content/docs/ai/` or `src/data/guide-sidebar.json` —
edit the source repo + re-import (the next import clobbers local edits). The generated
files **must stay committed** (CI builds from local files only; it never runs the
import). `posts/` in the guide repo is **flat** (the importer's listing is via the git
trees API but slugs assume a flat layout). Why import-then-commit rather than an Astro 5
remote loader: keeps CI hermetic (no build-time private-repo auth) and every change is
visible in `git diff`.

## Current status (as of 2026-06-20)

**Latest (2026-06-20) — committed + pushed to `main` (`f9304fc`, still `noindex`ed):**
- **Price Theory: inline math renders via KaTeX + cross-bank search/filtering shipped.**
  Closes both deferred follow-ups. Added `katex` dep + a shared `src/lib/priceTheory.ts`
  (provenance/label/grouping helpers + a currency-aware `renderInlineMath`), and wired both
  pages to it. Home page gained a client-side cross-bank search (free-text + topic/source/
  instructor/year/exam-context facets, live count); topic pages gained a visible `<h1>`,
  filterable subtopic chips, a source-jump nav, and source/year grouping. Also re-imported
  `problems.json` (upstream stripped the `[N points]` annotations). Build green (25 pages,
  postbuild gate passed). See "Inline math" + the page descriptions in the Price Theory
  problem-bank pipeline section. No follow-ups outstanding.

**Prior (2026-06-18) — committed to `main` and deployed (`de49b94`, still `noindex`ed):**
- **Price Theory problem bank integrated + LIVE.** The placeholder Price Theory course is
  now a real, browsable **problem bank** sourced from the public repo
  `bryanpcutsinger/price-theory` (68 verbatim Chicago/Columbia exam problems across a
  13-topic taxonomy). It uses its **own** `import:problems` pipeline (NOT `import:topic`)
  — see "Price Theory — problem-bank pipeline" in the Teaching section. New/changed:
  `scripts/import-problems.sh`, generated+committed `src/data/price-theory/{problems,taxonomy}.json`,
  rewritten `src/pages/teaching/price-theory.astro` (overview + topic grid), new
  `src/pages/teaching/price-theory/[topic].astro` (per-topic problem cards w/ provenance +
  source back-links), real `teaching.json` card copy. Build green; 12 topic pages live
  (`exchange-and-trade` has 0 problems → no page yet). **Refresh loop:** edit the source
  repo → `build.py` there → `npm run import:problems` → `npm run build` → commit.
  **Known follow-ups:** both resolved 2026-06-20 (`f9304fc`) — inline LaTeX now renders via
  KaTeX and cross-bank search/filtering shipped; see the Latest entry above.
- **Parallel micro work (`b7950ad`):** between the two Price Theory commits, a separate
  change landed on `main` — `import-topic.sh` now also copies `figures/*.html` interactive
  widgets (INSTRUCTOR-NOTES-gated) alongside `*.svg`, plus the regenerated **T1 micro
  content is now TRACKED** (`src/content/courses/microeconomics/t01-.../post.md` + a new
  `t01-ppf-interactive.html` figure) — superseding the older "held out of git" note below.
  Heads-up: the CLAUDE.md docs commit `2eea0bb` incidentally swept the T1 `post.md`/`html`
  in with it (harmless, already pushed; build green).

**Prior same day (2026-06-18) — committed to `main` and deployed (`c1cc97b`, still `noindex`ed):**
- **Teaching course cards updated.** Renamed the micro course to **Micro-Economic
  Principles** (card + course-page title/headline; URL slug unchanged) with a real
  one-line description, and added the **Price Theory** course card (now backed by the
  problem bank above; was a placeholder at `c1cc97b`). See the "Courses are scaffold, NOT
  imported" note in the Teaching section. Committed directly to `main` and pushed.

**Prior (2026-06-17) — merged to `main` and deployed (still `noindex`ed):**
- **Teaching section + course pipeline shipped.** `/teaching/` landing +
  `/teaching/microeconomics/` course home + the topic-posts pipeline
  (`scripts/import-topic.sh`, `courses` collection, `[topic].astro`). Live topic index
  is **empty** until a micro topic is flipped to `status: approved` upstream (none is
  yet). See "Teaching section + course-content publishing" above.
- **AI guide split into its own repo.** `/ai/` is now **imported** from
  `bryanpcutsinger/claude-code-guide` (local `~/Projects/claude-code-guide`); the
  website holds a generated, committed copy + a manifest-driven sidebar. Output is
  byte-identical to before the split. See "Claude Code guide — imported from its own
  repo" above.
- **Held out of git on purpose (untracked, regenerable):** `src/content/courses/` (the
  imported T1 micro post) and `public/teaching/` (its figure) — kept out until T1 is
  re-approved; recreate with `npm run import:topic`.
- **Branches:** today's work landed on `teaching-topics` → `ai-guide-split`, both merged
  into `main` and pushed (2026-06-17). The deploy workflow publishes `main` to Pages.
- The history log below predates today and is kept for context; where it says the guide
  is "mid-rebuild in-repo," that's superseded by the split above.

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
  blank-slate rebuild; the **overview + posts 1–3** (`what-is-claude-code`,
  `setting-up-claude-code`, `your-first-session`) are published (`draft:false`, in a
  minimal live sidebar group) — **guide is at 3 of the 6–8 budget.** Resume at **post 4
  (operating modes)** per `docs/guide-rebuild-notes.md` ("RESUME HERE"); as each ships, add
  its slug to the live sidebar group and link it from the overview. The fuller sidebar
  structure stays commented in `astro.config.mjs` until the full set is rebuilt.

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
