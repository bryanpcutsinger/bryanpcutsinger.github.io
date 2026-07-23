# Codebase cleanup plan (pre-launch hygiene pass)

**Created:** 2026-07-22 · **Status: NOT STARTED** — this is the plan of record; no cleanup work has been done yet.
**How it was produced:** five-way independent audit (four Claude subagents — root/config, pages/components, CSS systems, import pipelines — plus a blind Codex pass over the whole repo), synthesized 2026-07-22. Findings below were grep-/build-verified by the auditors; re-verify only if the tree has changed materially since.

**How to use this file:** work a phase per session (order matters for Phase 1 → 3), check items off, update the Status line above, and record decisions in the Decision log. Phases 1–4 ≈ 2–3 focused sessions. Content work can continue in parallel.

---

## Open decisions (owner: Bryan — resolve before or during Phase 2/4)

- [ ] **AGENTS.md** (untracked, repo root): it is a find/replace copy of CLAUDE.md ("Claude"→"Codex") with broken artifacts — dead paths (`~/.Codex/plans/...`), non-existent repos (`bryanpcutsinger/Codex-guide`), garbled prose. Actively misleading to any agent that reads it. **Recommend:** replace with a short hand-written pointer to CLAUDE.md, or delete if Codex isn't reading this repo. → Decision: ______
- [ ] **Testimonials markup**: `speaking.astro:~201` hand-rolls testimonial markup (`q: any`) while dead `TestimonialCard`/`TestimonialRow` components sit unused. **Recommend:** delete the components, keep the live inline version, type the map. → Decision: ______

## Decision log

- (record outcomes here as they're made)

---

## Phase 1 — Fix fragile spots (small effort, real risk reduction)

- [ ] **`scripts/import-guide.sh` — destructive-before-validate (HIGH).** `rm -rf` of `src/content/docs/ai/` (line ~56) runs *before* any post is fetched; the empty-listing guard fires after the delete, and a mid-loop fetch failure leaves a half-populated tree. Fix: stage all fetches in `mktemp -d`, run the non-empty guard against staging, then atomically swap. Copy the pattern from `import-cv.sh` (mktemp + trap + guard-then-mv) — it is the model script.
- [ ] **`astro.config.mjs` (~L59–73) — noindex/analytics launch trap.** The Starlight `head` block bundles the Plausible analytics scripts with the `robots: noindex,nofollow` meta, and its comment says "Delete this head block to allow indexing" — doing so at launch silently kills analytics. Split into two blocks; fix the comment; remember indexing is lifted in TWO places (this + `MarketingLayout.astro` `noindex` prop default).
- [ ] **`npm audit fix` (non-breaking only).** Clears svgo + js-yaml advisories. Current state: 4 high / 3 low (CLAUDE.md's "3 high, 2 low" is stale). Do NOT `--force`: the remaining sharp/esbuild highs are cleared by the already-planned Astro 6 upgrade (Phase 5).
- [ ] **`deploy.yml` — make the INSTRUCTOR NOTES gate explicit in CI.** It currently runs only because `withastro/action@v3` implicitly invokes the package.json `build` (whose `postbuild` greps dist). Add an explicit build step or a standalone `grep -rl 'INSTRUCTOR NOTES' dist && exit 1` step so an action upgrade can't silently drop the gate.
- [ ] **`scripts/import-topic.sh` — add positive content validation.** Only importer with no output gate (CV checks `%PDF-`, problems checks count). Assert fetched `post.md` is non-empty and starts with `---` frontmatter; make `> $dest` writes atomic (temp + mv); only `mkdir` the public figure dir when figures exist.
- [ ] **`package.json` — add `"engines": { "node": ">=22" }`** (self-documenting; Astro 6 needs it anyway).
- [ ] Optional, same pass: factor duplicated shell helpers (`BRANCH=$(gh api ... .default_branch)`, `fetch_to()`, ROOT resolution) into `scripts/lib.sh`; give all importers the CV script's single-SHA pinning so multi-file fetches are atomic.

## Phase 2 — Dead-code purge (mechanical, zero risk; all grep-verified 2026-07-22)

- [ ] Delete **11 dead components** in `src/components/marketing/` (CLAUDE.md lists only the first four):
  `ClaretOpener.astro`, `Colophon.astro`, `EditorialIndex.astro`, `PageMasthead.astro`, `AsSeenIn.astro`, `BioBlock.astro`, `PortraitFigure.astro`, `SpeakerReel.astro`, `EmailCapture.astro`, `TestimonialRow.astro`, `TestimonialCard.astro` (last one transitively dead; keep if the testimonials decision goes the other way).
  Note: grep "hits" on several of these are code comments (e.g. `CloseBand.astro:3`, `CitationList.astro:4`), not imports — clean up those comment references too.
- [ ] Delete the **2 dead Button variants** (`.btn--on-claret`, `.btn--ghost-claret` in `Button.astro`) — only the dead claret components invoked them.
- [ ] Delete **`src/assets/on-stage-podium.jpg`** (~14MB, orphaned since SpeakerReel died). Stays in git history if ever needed.
- [ ] Remove **3 unused exports** in `src/lib/priceTheory.ts`: `titleize` (~L10), `uniqueSorted` (~L38), `slugify` (~L42).
- [ ] Remove **unused dependency `@fontsource-variable/ibm-plex-sans`** — never imported; only named in `brand.css` `--font-body`, which `site.css:190` unconditionally overrides on every page (teaching included). No visual effect.
- [ ] Archive or delete stale notes: `docs/guide-rebuild-notes.md` (rebuild long done; contains a misleading "RESUME HERE") and `docs/getting-started-plan.md` (already banner-marked superseded — cosmetic).
- [ ] `rm public/.DS_Store` (untracked junk; `.gitignore` already covers it).

## Phase 3 — Collapse three CSS systems to two (do after Phase 2)

- [ ] **Retire `brand.css` entirely.** Audit finding: it is NOT blocked on a big teaching migration. Only two brand-only tokens have live consumers:
  - `--fs-display-lg` — used by `teaching/price-theory/[topic].astro:193`, `teaching/microeconomics/[topic].astro:265`
  - `--fs-eyebrow` — used by `teaching/microeconomics.astro:170`, `teaching/price-theory.astro:304,378`, `teaching/microeconomics/[topic].astro:242,379,626`, `teaching/price-theory/[topic].astro:301,323`
  Steps: (1) copy those two token definitions (brand.css ~L50, ~L56) into `site.css`; (2) with Phase 2's dead components gone, nothing else consumes brand-only tokens; (3) delete `brand.css` + its load in `MarketingLayout.astro` (~L19). `--accent-tint` is safe: site.css defines it (`#e7ede9`) and already wins load order. Visually diff teaching pages before/after (they're the risk surface).
- [ ] **Extract shared prose CSS.** `teaching/microeconomics/[topic].astro` carries a ~460-line `<style>` (50 `.prose` selectors); `teaching/price-theory/[topic].astro` ~185 lines. Extract shared typography into `src/styles/prose.css` (natural home alongside the two tokens above).
- [ ] **Hoist the `.head` section-head pattern** hand-rolled in all 6 marketing pages with divergent values (`about.astro:134` uses sp-6/20ch; index:213, speaking:225, research:120, contact:33, writing:71 use sp-8/22ch). Either a shared rule in `site.css` or standardize on the existing `SectionHeading` component (currently teaching-only). Pick one value deliberately.
- [ ] **Reconcile `fau-theme.css` drift** (L62–69): `--sl-color-text #1c1e20` → ink `#1a1917`; gray-3 `#5a5e63` → muted `#6b6862` — or comment them as intentional deltas. Add a "manual sync point with site.css" comment either way.
- [ ] Drop dead `.dropcap` rule (brand.css L184) — moot if brand.css is deleted.
- [ ] Optional: define shared TS interfaces for the JSON data shapes to kill the `any` frontmatter types (`speaking.astro:201`, `writing.astro:11`, `research.astro:12`, teaching pages).

## Phase 4 — Documentation reconciliation (biggest drift; safe any time)

- [ ] **CLAUDE.md corrections** (each verified wrong as of 2026-07-22):
  - Custom domain IS set up: `site: 'https://bryancutsinger.com'` in astro.config.mjs + `public/CNAME`. Only the Squarespace DNS cutover remains (per LAUNCH-ROADMAP.md). Fix the Deploy section + "Custom domain" TODO + all `bryanpcutsinger.github.io` references.
  - **Document the writing pipeline** — currently entirely undocumented: `import:writing` → `scripts/build_writing.py` generates `src/data/writing.json` from two author RSS feeds (EconLog + The Daily Economy; ~30 real essays), refreshed weekly by `.github/workflows/refresh-writing.yml` (Mon 12:00 UTC, commits as `writing-feed[bot]`, dispatches deploy). Reconcile with the single-publisher invariant note (this is a second automated publisher to `main`). Remove the "`writing.json` [PLACEHOLDER]" and "RSS not yet added" claims.
  - Placeholder list is stale: home "Recent" now auto-merges writing.json + publications.json (no literals); `sameAs` is populated (X, LinkedIn, Google Scholar). Still genuinely open: testimonials (empty, integrity-gated), Web3Forms key (BookingForm inert without it), speaker one-sheet PDF, video reel.
  - EmailCapture is NOT on the home page (dead file; deleted in Phase 2) — fix that claim.
  - The "/ai/ guide mid-rebuild… 3 of 6–8 posts… resume at post 4" status entries describe a world that no longer exists (18 posts live, 4 sidebar sections). Mark superseded or prune the Current-status history log (consider moving old entries to `docs/status-archive.md`).
  - npm advisory count: 4 high / 3 low (then re-update after Phase 1's audit fix).
- [ ] **Rewrite `README.md`** — still describes the pre-redesign Starlight-stub site and a 17-post monolithic guide. Rewrite to the current architecture (marketing front end + imported guide/courses) or reduce to a pointer at CLAUDE.md.
- [ ] **Commit `LAUNCH-ROADMAP.md`** — it self-describes as the durable launch record but is untracked.
- [ ] **Add the live-deploy refusal guardrail to `claude-code-guide`'s CLAUDE.md** (still missing; micro-principles `b9d714f` and price-theory `7cea48d` have it). Push from that repo.
- [ ] Resolve AGENTS.md per the decision above.

## Phase 5 — Already scheduled / deferred (unchanged by this audit)

- [ ] **Astro 6 + latest Starlight upgrade** — the deliberate last step; clears the remaining sharp/esbuild advisories. Node 24 installed; main work is Zod 3→4.
- [ ] Bump GitHub Action versions (`actions/checkout@v4`, `withastro/action@v3`, `actions/deploy-pages@v4` — Node-20 runtimes; GitHub forces Node 24 ~June 2026). Batch with the Astro bump.
- [ ] Downsize the two oversized source JPGs when next touched: `on-stage-podium.jpg` deleted in Phase 2 anyway; `src/assets/salve-regina-lecture.jpg` (8.3MB) → ~2500px/q80.
- [ ] ⏰ **CV-sync PAT expires 2026-10-12** — regenerate `cv-to-website-sync` token and update the `cv` repo's `WEBSITE_SYNC_TOKEN` secret via the GitHub web UI (the CV repo's Action now fails red when it's dead).
- [ ] Watch item: `refresh-writing.yml` fails closed if either RSS feed URL changes — the Writing list silently freezes rather than erroring. If Writing looks stale, check that workflow's runs first.

## Explicitly NOT problems (don't "fix" these)

- Committed generated trees (`src/content/docs/ai/`, `src/content/courses/`, `src/data/{guide-sidebar,publications,price-theory}`, `public/downloads/`, `public/teaching/`) — intentional, hermetic-CI design.
- Starlight 0.36 pin (until the Astro 6 step); the isolated `getStaticPaths()` scope in `[topic].astro`; light-only theming (deliberate, consistent across all three CSS systems); micro topic naming oddities (t05/t05b, t12/t12b — upstream-owned); `.gitignore` coverage (verified good); the import scripts' overall design (fail-closed; only the two fixes in Phase 1).
