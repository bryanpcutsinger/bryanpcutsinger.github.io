# Guide rebuild — working notes

Working scratchpad for the blank-slate rebuild of the `/ai/` "Getting Started with
Claude Code" guide. Plan: `~/.claude/plans/i-want-to-revist-jazzy-crane.md`. Not part
of the site build (lives in `docs/`, outside `src/`). Delete or keep as a project note
when the rebuild is done.

## Definition of done

The guide is done when a CLI-novice academic economist can, **from the guide alone**:
1. Install Claude Code and sign in.
2. Run one real session end to end (prompt → approve → see result → course-correct).
3. Hold the core mental model: point it at a folder, choose how much to approve,
   review changes in a diff, and **verify everything before trusting it**.

Coverage is measured against the must-cover list below — not "feels covered."

## Page budget

**Target 6–8 posts, hard ceiling of 8** (plus the `/ai/` overview index). Anything
beyond budget requires an explicit "what gets cut to make room" trade, not a silent add.
Bias hard toward lean — the old guide failed by drifting 10 → 17.

## Must-cover concepts checklist (harvested from the old 17 posts)

The publish gate: every load-bearing item below must appear *somewhere* in the rebuilt
guide. Tier matters — **Required** must survive; **Optional** only if it fits the budget.

### Required (the self-sufficiency core)
- [ ] **What Claude Code is / isn't** — on-disk assistant vs. browser chat; what it's
      good and bad at; "it can be confidently wrong." (Decide-if-worth-my-time framing.)
- [ ] **Prerequisites** — Mac (macOS 13+), a **paid plan** (Pro/Max; free plan excludes
      Claude Code — the common gotcha), ~30 min setup.
- [ ] **Install VS Code** — as the home base; find the integrated terminal (Terminal →
      New Terminal / Ctrl+`). Apple Silicon vs. Intel; Gatekeeper dialog.
- [ ] **Just-enough terminal** — `pwd`, `ls`, `cd`/`cd ..`, quoting paths with spaces;
      Tab-complete, Up-arrow, Ctrl+C. Explicit "what you do NOT need to learn."
- [ ] **Install Claude Code + first launch** — `curl` install, browser sign-in (Keychain,
      one-time), confirm the prompt; `command not found` PATH troubleshooting.
- [ ] **First session** — sandbox folder, one small prompt, the **permission prompt**
      (what it is, approve/deny, why it asks), see the result, course-correct.
      "Success looks like this" verification.
- [ ] **Operating modes** — default / plan / auto-accept / bypass; the control-vs-speed
      dial; **Shift+Tab** to cycle; which to use when.
- [ ] **Point Claude at your work** — working directory = the folder you launch in; open
      a real project; **read the diff** (red/green) before accepting; backup mindset;
      treat raw data as read-only (write to derived/output).
- [ ] **Trust, safety & integrity** — you're the reviewer of record; never let it invent
      citations/DOIs/quotes/numbers; verify before it enters a draft; data safety;
      confidentiality (no embargoed/under-review/FERPA material). A short checklist.

### Optional (only within budget; fold in or cut)
- [ ] **Prompting habits** — context + specific outcome; iterate; precise vs. exploratory.
- [ ] **CLAUDE.md & memory** — standing instructions Claude reads each session;
      project vs. global.
- [ ] **Reading & analyzing (not just editing)** — reading is the safe, low-stakes
      on-ramp; @file references.
- [ ] **Verifying Claude's work** — the integrity rules turned into a repeatable routine
      (cite from source, reconcile numbers, count samples, second-tool audit).
- [ ] **Errors & recovery** — errors are normal; failed-command vs. wrong-result; undo.
- [ ] **Reproducibility & logs** — a research log / CHANGELOG of decisions.
- [ ] **Teaching with Claude Code** — syllabi/problem sets/slides; answer-key + FERPA
      cautions.
- [ ] **A real research workflow** — one end-to-end empirical example.
- [ ] **Resources for economists** — official docs, Korinek JEL survey, tools, Zotero.

Note: the integrity/verification material is **load-bearing for Bryan's positioning** —
keep it in the Required tier even if the dedicated "verifying" routine gets folded in.

## Running outline (fill in as we go, post-by-post)

| # | slug | title (working) | tier | status |
|---|------|-----------------|------|--------|
| 1 | what-is-claude-code | What Claude Code is (and isn't) | required | PUBLISHED 2026-06-15 (`draft:false`, committed `33c9c38`) |

(Decide each next post only after the prior is finalized; keep this table current so
cross-links and sequence stay coherent.)

## >>> RESUME HERE (next session) <<<

**Where we are:** Step 0 done — checkpoint commit `846e42c` preserves the 17 old
posts; all 17 deleted from `src/content/docs/ai/`. **Post 1 (`what-is-claude-code`) is
drafted and now published** (`draft:false`), and the **overview (`index.mdx`) is published
too** (trimmed to only-existing links) — both live in a minimal sidebar group. The old
Cowork/`desktop/` branch was **deleted** (2026-06-15); `/ai/` is Claude-Code-only.
`docs/getting-started-plan.md` marked superseded; `npm run build` green. Still in the
**per-post loop** — next is proposing post 2 (the setup arc).

**Start by proposing post 2 — the setup arc.** Post 1 is done and published. Per the
must-cover checklist, the next required ground is **setup**: install VS Code (home base) →
just-enough terminal → install Claude Code + first launch. Decide whether that's **one
consolidated "Set up" post** or **two** (VS Code/terminal, then install/auth) — bias to one
lean post if it fits the 6–8 page budget. Re-verify version-sensitive facts at draft time
(plan names, the `curl … claude.ai/install.sh` install command, macOS 13+, browser/Keychain
auth) via the `claude-code-guide` agent — nothing version-sensitive from memory.

**Conventions to hold (already set by post 1 + the overview):**
- Lean (~500–600 words/post), de-numbered/topical open (no "Step N"), self-contained prose.
  Voice: practical, low-hype, second person; teaching/research examples balanced.
- **Publishing model has shifted:** new posts can ship **`draft:false`** as they're
  finalized (post 1 + overview are already live). When a post ships: add its slug to the
  **minimal live sidebar group** in `astro.config.mjs` ("Getting Started with Claude Code"),
  add a working link from `src/content/docs/ai/index.mdx` (the overview's "Start here" list),
  and keep every internal link resolving (no links to not-yet-written pages).
- Screenshots optional, not load-bearing. Keep `npm run build` green.

**Process:** propose post 2's shape → Bryan approves → draft → finalize/publish → update the
table above. Hold the **6–8 page budget** and the must-cover checklist. Don't re-sprawl
toward 17.
