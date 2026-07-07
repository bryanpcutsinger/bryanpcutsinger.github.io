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

The root is a **bespoke, conversion-grade marketing site** positioning Bryan as an
economist + **paid speaker**, built as **custom Astro pages in `src/pages/`**
(`index`, `about`, `speaking`, `contact`, **`writing`, `research`**, plus `teaching/*`),
completely separate from Starlight (which still owns `/ai/`).

> **⚠️ REDESIGNED 2026-07-01 → the "public economist" system (LIVE, commit `369cf5f`).**
> The brass/bone and Fraunces+Inter descriptions in this section — and a since-superseded
> interim *claret* "public essay" system — are **HISTORY**. The live look is now
> **outward-first**: bright paper + deep ink + **one ledger-green accent**, a two-face
> pairing (**Fraunces** display + **Newsreader** reading + **Inter** labels). See the
> **"Public economist redesign"** bullet below and the top **Current status** entry.
> Earlier history: `~/.claude/plans/i-want-to-rebuilt-ancient-zephyr.md` (Rev 1–5) and
> `~/.claude/plans/let-s-try-another-approach-async-knuth.md` (the 2026-07-01 rebuild).

- **Brand — "the public economist" (2026-07-01, current):** bright archival **paper
  `#FBFAF7`** + warm **ink `#1A1917`** + one **ledger-green accent `#22453B`** (on-ink
  variant `#B8D0C6`; hard rule — never green on the ink header/footer, 1.66:1). Type is a
  **two-face pairing**: **Fraunces** (display voice) + **Newsreader** (reading prose) +
  **Inter** (labels/nav/data), all reusing fonts already in `package.json` (no new font
  deps). Tokens: **`src/styles/site.css`** (loaded by `MarketingLayout` *after* the
  legacy `brand.css`, whose shared tokens it overrides via aliases; `brand.css` = the
  superseded claret system, kept loaded only until Teaching is migrated). The two CSS
  systems never touch — `site.css`/`brand.css` load only on `src/pages/`; `fau-theme.css`
  only inside Starlight. Accent hue is a token knob (green default; ink-blue/graphite noted).
- **Layout/kit:** `src/layouts/MarketingLayout.astro` (own `<head>`, sticky nav, footer,
  **`noindex` prop default `true`**, sitewide `Person` JSON-LD) + `src/components/marketing/*`.
  New primitives: **`DatedList`** (dated record; year in accent tabular figures; stacks
  <640px), **`EmailCapture`** (graceful mailto fallback), **`PageHead`** (interior-page
  masthead), **`CloseBand`** (in-system ink CTA, replaces the claret `Colophon`),
  **`CitationList`** (bibliography; year folio). `Button` gained an **`on-ink`** variant.
  Reused: `Section`, `BookingForm`, `DownloadCard`. Editable copy: `src/data/{topics,
  testimonials,logos,writing,publications}.json`. **Home is outward-first** — masthead +
  positioning line, proof strip, signature talks as outcomes, an **ink invite band with a
  fee signal**, the **Claude Code guide as a hook**, a Recent list, email capture, and a
  departments router. **Claret-era components** (`ClaretOpener`, `Colophon`,
  `EditorialIndex`, `PageMasthead`) are now **unused dead files** pending cleanup.
- **Photos** in `src/assets/`: `bryan-cutsinger.png` (headshot → hero/about), plus
  `on-stage-podium.jpg` (home "Bryan in the room" reel), `on-stage-gesturing.jpg` (about),
  `speaking-hero.jpg` (speaking hero). Optimized via `astro:assets`.
- **Nav order (2026-07-01):** `Speaking · Writing · Research · Teaching · Guides · About ·
  Contact` (Speaking promoted to slot 1) across `SiteHeader`, `SiteFooter`, and the
  `HeaderLinks` override. On-ink surfaces use the `--accent-on-ink` variant for
  hover/active (never green on ink). Sitemap: explicit `@astrojs/sitemap` in
  `astro.config.mjs` covers the `src/pages/` routes.
- **`/ai/` guides share the marketing site's FULL visual language** — retuned 2026-07-01
  to the "public economist" system: `fau-theme.css` maps paper/ink/**ledger-green** onto
  Starlight's ramp; **Fraunces** headings, **Newsreader** prose, **Inter** UI, IBM Plex
  Mono code (loaded via `SiteTitle.astro`, whose wordmark is now Fraunces). Sentence-case
  headings, minimal hairline tables, lift-on-hover cards, green note-callouts. The **only**
  intentionally-distinct thing is the Starlight docs layout (sidebar/TOC).
- **LIVE** (redesign deployed 2026-07-01, commit `369cf5f`); still **`noindex`ed**.

**Placeholders Bryan still owes (marked `[PLACEHOLDER]` in code; all `noindex`, but
publicly viewable by link on the live site):** real **essay/press
URLs** (`data/writing.json` — Writing page); the home **Recent** list (literals in
`index.astro`); Web3Forms access key + booking email (booking form inert until then —
`BookingForm.astro`) and a list provider for `EmailCapture` (mailto fallback until then);
speaker **one-sheet PDF** + a **video reel** (Speaking's
paid-speaking launch gate: at least one on-stage photo + short clip before lifting `noindex`);
**testimonials** (`testimonials.json` empty → section auto-hidden; named quotes only);
`sameAs` profile URLs for the `Person` JSON-LD (Scholar/ORCID/SSRN). **Already real:** talk
topics (`data/topics.json`), short + long bio + credentials (`about.astro`), **publications**
(`data/publications.json` — Research page; 12 articles + 3 chapters + 1 book in press + 4 under
review, transcribed from Bryan's CV, no DOIs yet), and the **CV PDF** (`import:cv` pipeline — see
below). Verified facts
only: "Featured in" = National Review, The Hill, The Washington Examiner, RealClearEducation;
credentials = interim director of the **AIER Sound Money Project**, Associate Editor of
*Public Choice*, FAU economics professor (WSJ was a letter to the editor — not featured).
**Integrity: never fabricate a citation, DOI, essay URL, testimonial, or `sameAs`.**

## Stack & conventions

- **Astro 5 + Starlight** (`@astrojs/starlight@^0.36`). Static output, user site,
  no `base` path. Starlight owns the layout, sidebar, right-rail TOC, prev/next
  pager, and search.
  - Starlight is **pinned to the 0.36 line on purpose**: 0.38+ requires Astro 6 and
    we're staying on Astro 5 for now (see TODO). Don't bump it without bumping Astro.
- **Theming = the "public economist" brand (retuned 2026-07-01; was FAU→brass→claret).**
  `src/styles/fau-theme.css` (registered via Starlight `customCss`) carries the **full
  marketing brand** onto Starlight — palette/type (paper `#FBFAF7` + ink `#1A1917` + one
  **ledger-green `#22453B`** accent; **Fraunces** headings, **Newsreader** prose, **Inter**
  UI, IBM Plex Mono code) **and** its patterns: sentence case throughout, minimal hairline
  tables, lift-on-hover cards, green underlined links, green note-callouts. The filename
  and its `--fau-*` variable names are **historical** — they hold the current brand colors,
  not FAU's (and not the interim brass/claret). **Marketing tokens: `src/styles/site.css`**
  (the current system); `src/styles/brand.css` is the superseded claret system, still
  loaded first so not-yet-migrated pages keep working — retire it once Teaching is migrated.
  Redesign plan: `~/.claude/plans/let-s-try-another-approach-async-knuth.md`.
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
- **This repo is the ONLY publisher to the live site (single-publisher invariant).**
  Source repos feed in via the `import:*` scripts (read over `gh api`); the live deploy
  then happens **here**: `npm run import:*` → `npm run build` → commit/push `main`. The
  source repos **never deploy to live** — `micro-principles` and `price-theory` each
  carry a refusal **guardrail** in their own `CLAUDE.md` (added 2026-06-20; committed +
  pushed: micro `b9d714f`, price `7cea48d`) telling the agent to decline any
  push/deploy-to-live request and redirect it here. Pushing *source* to those repos' own
  GitHub remotes is fine and expected — that's the importer's input; only live-deploy is
  blocked there. (`claude-code-guide` is also import-fed but does not yet carry this
  guardrail.)
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
without publishing them. As of 2026-07-06 the **full 21-topic course is approved
upstream and imported here** (T1, T2, T3a/b, T4a/b/c, T5, T6a/b, T7a/b, T8a/b, T9,
T10a/b, T11a/b, T12, T13 — the one-per-lecture split; the legacy un-split folders
t03/t04/t06/t07/t08/t10/t11 upstream have no `post.md` and are not imported), so the
live topic index renders all 21. To refresh after an upstream edit, re-run
`npm run import:topic -- <slug> microeconomics` for the changed topics (or loop over
`src/content/courses/microeconomics/`), rebuild, and commit.

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
  results list with a live, `aria-live` count. **The results list is on-demand** (redesign
  2026-06-20): it (and the count) stay `hidden` until the search/any filter is "active";
  the inactive default shows a one-line hint and lets the topic grid be the primary browse
  path — no 68-item wall on load. `applyFilters()` runs once on load to set that state.
  Filtering is pure DOM (`data-*` attributes on each result row); no JS framework, no network.
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

## CV — imported from its own repo (built 2026-07-07)

The **Curriculum vitae** download on `/research/` is **imported** from a dedicated
source repo, same source-of-truth → import → commit model as the guide/micro/price-theory.

- **Source of truth = `bryanpcutsinger/cv`** (private; local `~/Documents/CV`). A
  **self-contained LaTeX CV**: `cutsinger_CV.tex` (`\documentclass[11pt]{article}`, no
  custom `.cls`/inputs/graphics) + its committed compiled **`cutsinger_CV.pdf`**. Bryan
  updates it there — edit `.tex` → `latexmk -pdf` → commit **both** .tex and .pdf → push.
  Editing happens **in this repo, not Overleaf** (Overleaf was retired for the CV to avoid
  two diverging sources; the seed was his last Overleaf export, 2026-06-04).
- **Refresh on the website:** `npm run import:cv` (`scripts/import-cv.sh`, via `gh`) pulls
  the compiled PDF into a **generated, never-hand-edited committed copy** at
  `public/downloads/cutsinger-cv.pdf`. The script **guards** the fetch (must be `%PDF-` and
  ≥1 KB — refuses to publish an error payload or an accidental source push, leaving the
  existing CV untouched). No compile happens here (CI stays hermetic/Node-only); the PDF is
  built in the source repo and served as-is.
- **Rendering:** `research.astro`'s `DownloadCard` uses `fileUrl="/downloads/cutsinger-cv.pdf"`
  (real **"Download my CV (PDF)"** button; the request-fallback path is gone).
- **Full loop after a CV edit:** (in `~/Documents/CV`) edit → `latexmk` → commit → push;
  then (here) `npm run import:cv` → `npm run build` → commit + push to deploy.

## Current status (as of 2026-07-07)

**Latest (2026-07-07) — Research page populated + CV pipeline built:** (1) Micro topic
ordering fixed and topics renumbered as sequential **"Lecture N"** (dropping the repeating
"T#" badge that read as duplicate titles) — commits `412e60a`/`64478d9`. (2) **Research page
filled from Bryan's CV** (`1e18509`): 12 refereed articles + 3 book chapters + 1 book in press
+ 4 works under review in `data/publications.json`, all real (no DOIs — none on the CV,
nothing fabricated). (3) **CV download is now a live PDF** via a new **`import:cv` pipeline**
from the new `bryanpcutsinger/cv` source repo (see "CV — imported from its own repo" above).
Build green throughout (63 pages, INSTRUCTOR NOTES gate passed). **Open:** confirm the CV seed
is current vs. any post-2026-06-04 Overleaf edits; add DOIs/`sameAs` when available; Writing
page (`data/writing.json`) still placeholder.

**Prior (2026-07-06) — full 21-topic micro course published + pushed + deployed
(`b8b0acc`, still `noindex`ed):** Closes the "micro course publish gap" below. Re-imported
**all 21 approved Micro-Economic Principles topics** from `bryanpcutsinger/micro-principles`
(loop over `src/content/courses/microeconomics/` → `npm run import:topic -- <slug>
microeconomics`), pulling in Bryan's revised prose across **22 posts** (~2,500 insertions /
~700 deletions) and many new **interactive HTML figures**. Instructor notes stripped at
import; build green (63 pages, postbuild `INSTRUCTOR NOTES` gate passed); deploy run
`28832685598`. Pure content re-import — no code changes. The live micro course now renders
all 21 topics (was T1-only). See the updated **Publish gate** note in the Teaching section.

**Prior (2026-07-01) — full front-end REDESIGN committed + pushed + deployed (`369cf5f`,
still `noindex`ed):** The marketing site was rebuilt from scratch as the **outward-first
"public economist" system** (paper/ink/**ledger-green**; Fraunces + Newsreader + Inter). See
the rewritten **Marketing site** and **Stack → Theming** sections above for the full spec, and
`~/.claude/plans/let-s-try-another-approach-async-knuth.md` for the plan (which went through a
Codex review + a 5-adversary red-team; client chose outward-first / design-first / fresh system).
- **New/changed:** `src/styles/site.css` (new token+type system, loaded after `brand.css` and
  overriding its shared tokens via aliases); new primitives `DatedList`, `EmailCapture`,
  `PageHead`, `CloseBand`; `Button` gained `on-ink`; **outward Home** (`index.astro`),
  promoted **Speaking**, new **Writing** + **Research** pages (fed from forgiving
  `data/{writing,publications}.json`, honest labeled placeholders), migrated **About** +
  **Contact**; nav reordered to `Speaking·Writing·Research·Teaching·Guides·About·Contact`
  (header/footer/`HeaderLinks`); **/ai/ Starlight guides retuned** (`fau-theme.css`,
  `SiteTitle` fonts); sitewide `Person` JSON-LD. Build green (43 pages, postbuild gate passed).
- **Deliberately DEFERRED (open follow-ups):** (1) **Teaching pages** still use the reused/
  claret-era components under aliased tokens — they render fine + build green, but a full
  restyle is pending; (2) **`brand.css` + claret-era components** (`ClaretOpener`, `Colophon`,
  `EditorialIndex`, `PageMasthead`) stay until Teaching is migrated, then retire; (3) **RSS**
  for Writing not yet added (would be empty until real essays) — add `@astrojs/rss` when
  `writing.json` has real entries; (4) all `[PLACEHOLDER]` content above (real publications,
  essay URLs, Recent, CV, forms, reel) still owed by Bryan.

**Prior (2026-06-21) — committed + pushed to `main` (`a62547c`, deployed, still `noindex`ed):**
- **Price Theory bank refreshed: 311 → 477 problems across 40 sources.** Bryan added new
  questions upstream in `bryanpcutsinger/price-theory`; published them via the standard
  loop: `npm run import:problems` → `npm run build` (green, 26 pages, postbuild
  `INSTRUCTOR NOTES` gate passed) → commit + push `main` (deploy run `27904329890` went
  green). Only `src/data/price-theory/problems.json` changed; `taxonomy.json` was
  unchanged, so the 13 topic routes are the same set — and all 13 are now non-empty
  (`exchange-and-trade` rose from 0 → 14, so it now has a page). Pure content re-import,
  no code changes.

**Prior (2026-06-21) — docs-only (this repo):**
- **Recorded the single-publisher guardrail in the Deploy section.** Noted that this repo
  is the sole publisher to the live site and that the `micro-principles` (`b9d714f`) and
  `price-theory` (`7cea48d`) source repos now carry refusal guardrails in their own
  `CLAUDE.md` (both committed + pushed) declining any live-deploy request and redirecting
  it here. See the new bullet under `## Deploy`. No code/build change.

**Prior (2026-06-20) — committed + pushed to `main` (`594aa0e`, deployed, still `noindex`ed):**
- **Content refresh: revised T1 micro topic + much larger Price Theory bank.** Re-imported
  the revised `t01-economic-way-of-thinking` (`npm run import:topic`) and refreshed the
  Price Theory problem bank (`npm run import:problems`) — the bank grew **68 → 311 problems
  across 38 sources**. Pure content re-import (no code changes): `T1 post.md` + its
  interactive figure, and `src/data/price-theory/problems.json`. Build green (26 pages,
  postbuild gate passed).
  - **✅ Micro course publish gap — RESOLVED 2026-07-06** (see the Latest entry): the full
    21-topic course is now imported and live. (At this 2026-06-20 point only T1 was imported;
    Bryan had scoped that update to T1 on purpose.)

**Prior (2026-06-20) — committed + pushed to `main` (`eba9b95`, deployed, still `noindex`ed):**
- **Price Theory landing redesigned: search results are on-demand; topic grid leads.**
  The course home used to dump all 68 problems as one `<ol>` on load (search just hid
  rows) — an overwhelming "wall of every exam." Now the results list + count stay `hidden`
  until the search/any filter is "active"; the inactive default shows a one-line hint and
  the `TopicGrid` is the primary browse path. `applyFilters()` runs once on load to set the
  inactive state. Also tightened the About copy (3 → 2 paragraphs; scale still stated in the
  first sentence). Single file: `src/pages/teaching/price-theory.astro` (+ a
  `.search-results[hidden]` rule so `display:grid` doesn't defeat the `hidden` attr). Build
  green (25 pages, postbuild gate passed). See the on-demand note in the Price Theory page
  description above. No follow-ups outstanding.

**Prior (2026-06-20) — committed + pushed to `main` (`f9304fc`, still `noindex`ed):**
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
