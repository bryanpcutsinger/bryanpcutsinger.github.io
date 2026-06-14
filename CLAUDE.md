# Claude Context: Personal Website (bryanpcutsinger.github.io)

## What this is

An umbrella website built with **Astro + Starlight** and deployed to **GitHub
Pages** as a user site (`bryanpcutsinger.github.io`, served at the root). One repo:

- `/` — the professional landing page (a Starlight **splash** page; minimal stub,
  full build-out later)
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

## Stack & conventions

- **Astro 5 + Starlight** (`@astrojs/starlight@^0.36`). Static output, user site,
  no `base` path. Starlight owns the layout, sidebar, right-rail TOC, prev/next
  pager, and search.
  - Starlight is **pinned to the 0.36 line on purpose**: 0.38+ requires Astro 6 and
    we're staying on Astro 5 for now (see TODO). Don't bump it without bumping Astro.
- **Theming = FAU style guide.** `src/styles/fau-theme.css` (registered via
  Starlight `customCss`) maps the FAU palette and flat/square component language
  onto Starlight. Type is deliberately the **current stack recolored**: Georgia
  headings in FAU navy + system-sans body in FAU dark gray (no Avenir license).
  Key FAU colors: navy `#003366`, red `#cc0000` (active/accent), body `#4d4c55`,
  links `#0065d3`, sky-blue `#d9ecff`. Full design rationale: the approved plan at
  `~/.claude/plans/jaunty-spinning-tiger.md`.
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
  Cutsinger" on the navy bar — own identity, NO FAU logo/wordmark) and
  `Footer.astro` (**wraps** Starlight's default Footer so the prev/next pager is
  preserved, then adds a navy copyright bar). Don't replace Footer outright or you
  lose the pager.
- Safety/screenshot callouts use Starlight **asides** (`:::note` / `:::caution` /
  `:::danger`). Screenshot placeholders are `:::note[Screenshot to add]` blocks —
  Bryan still needs to capture and insert real images.

## Commands

- `npm run dev` — local preview at http://localhost:4321 **(use this to review)**
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the built site

> **IMPORTANT build caveat (current phase):** while all 17 guide posts are
> `draft: true`, **`npm run build` FAILS** — Starlight excludes drafts from the
> production build, so the sidebar slugs (all drafts) don't resolve. This is
> expected and not a bug. **Preview with `npm run dev`** (Starlight includes drafts
> in dev). The build goes green the moment posts flip to `draft: false` at publish.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to Pages.
No manual deploy step. **LIVE as of 2026-06-13** at
https://bryanpcutsinger.github.io (repo: GitHub user site
`bryanpcutsinger/bryanpcutsinger.github.io`, public; Pages source = GitHub Actions).
The site is **`noindex`ed** for now (a `head` meta in `astro.config.mjs`) while it's
shared privately — delete that `head` block to allow search indexing at full launch.
Build action emits a non-blocking warning that its Node 20 sub-actions are deprecated
(GitHub forces Node 24 ~June 2026) — bump `withastro/action`/checkout versions later.

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
  FAU theme automatically.

## Current status (as of 2026-06-13)

- **NEW BRANCH: "Claude on the Desktop (Cowork & Code)"** (2026-06-13; plan:
  `~/.claude/plans/sparkling-strolling-pearl.md`). A standalone sidebar group under
  `/ai/` for a **non-technical Windows colleague** (econ professor / dept chair) whose
  desktop app is already installed — built to prep them for a **2-hour working session**.
  Desktop-app-centric, **Cowork-first, Code as a taste** (the key research finding: the
  desktop app's **Code tab runs Claude Code with no terminal/Node/CLI** — so the Mac
  terminal path is skippable). 13 pages in `src/content/docs/ai/desktop/`: a **pre-read**
  (`index.mdx`, `the-desktop-app`, `meet-cowork`, `cowork-safely`,
  `cowork-for-economists`, `a-taste-of-code`, `before-we-meet`) + a **2-hour facilitator
  run-of-show** (`session-run-of-show.mdx`, `session-1-orientation` …
  `session-5-safety-and-wrap-up`) whose segment pages carry `:::tip[For the facilitator]`
  cues alongside colleague-facing reference steps. Authored via a 12-agent Workflow; all
  external links re-verified live against an Anthropic-docs allowlist. **These ship
  `draft: false`** (unlike the Mac guide), so to keep `npm run build` GREEN the existing
  "Getting Started with Claude Code" sidebar group is **temporarily commented out** in
  `astro.config.mjs` (files untouched/still draft; restore the block when the Mac guide's
  screenshots land). Build verified green; all 16 pages render (asides/cards/tables/
  screenshot placeholders OK). Windows desktop-app screenshots are Bryan's to add later
  (non-blocking — prose stands alone). Note: home splash + `/ai/` overview still point at
  the now-unbuilt Mac guide, so **share the direct `/ai/desktop/` URL** with the colleague.
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
  Only the **Claude on the Desktop (Cowork & Code)** branch + the home splash are live.
  For a clean, dead-link-free launch with the Mac guide still unfinished, three
  temporary changes were made (all reversible at full launch):
  1. **Home splash** (`src/content/docs/index.mdx`) hero button + card now point to
     `/ai/desktop/` (were `/ai/`).
  2. **`src/content/docs/ai/index.mdx`** (the Mac-guide overview) set `draft: true` so
     it isn't built (it linked to draft pages → would 404). Restore to `draft: false`
     and re-point the home splash when the Mac guide ships.
  3. The desktop branch's cross-links to the unbuilt Mac-guide pages
     (`/ai/what-is-claude-code/`, `/ai/trust-safety-integrity/`) were repointed —
     integrity refs → the branch's own `/ai/desktop/cowork-safely/`; command-line refs
     → Anthropic's official quickstart. Revisit if you want them to point back at the
     Mac guide once it's live.
- **Mac/terminal guide:** all 17 posts remain `draft: true` and its sidebar group
  stays commented out in `astro.config.mjs`. Publishing it = fill screenshot blockers,
  flip drafts to `draft: false`, uncomment the sidebar group, restore the home splash +
  `/ai/` overview, and (optionally) repoint the desktop cross-links back.

## Notes / TODO

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
