> **SUPERSEDED (2026-06-14).** This is the original pre-Starlight plan (it references
> `src/content/ai/`, `pubDate`/`tags`, and a `welcome.md` that no longer exist). The
> guide was rebuilt from a blank slate — see `~/.claude/plans/i-want-to-revist-jazzy-crane.md`
> and `docs/guide-rebuild-notes.md`. Kept for history only; do not follow it.

# Plan: "Getting Started with Claude Code" learning path (AI sub-site)

## Context

The AI sub-site (`/ai/`) is a Markdown knowledge base on using AI in academic
work. The scaffold is built and runs locally; the next task per the project
`CLAUDE.md` is **real content**, and right now only a placeholder article
(`welcome.md`) exists.

This plan establishes the **launch content**: a beginner-oriented learning path,
"Getting Started with Claude Code," aimed at **total beginners on a Mac** who have
never used a command line or an AI coding tool. The path is built around **VS Code
as the home base** — readers install VS Code, then install and run Claude Code in
VS Code's integrated terminal. PC-specific instructions are deliberately deferred
to a later effort.

Each topic below is **one post**. The per-post sections are written to be
**self-contained specs**: each carries everything an agent needs to draft that
post — goal, sections, length, tags, and any `[VERIFY]` items — without the
planning conversation.

**Execution: draft all posts simultaneously, not one at a time.** The ten posts
are independent units of work, so the intended approach is a single multi-agent
**workflow** that fans out one drafting agent per remaining post, runs them in
parallel, and then runs the verification pass once at the end. (Drafting them
one-by-one across sessions also works, but the parallel workflow is the default
now.) See **Execution approach** below for the exact shape.

We are still in the **content-first, do-not-publish** phase (see `CLAUDE.md`):
every post ships with `draft: true` until Bryan reviews. Nothing here involves
`git init` or pushing.

---

## Cross-cutting conventions (apply to EVERY post)

- **Location & naming.** One Markdown file per post in `src/content/ai/`.
  Filename = URL slug (kebab-case). Slugs are listed per step below.
- **Frontmatter schema** (validated by `src/content.config.ts`):
  ```yaml
  ---
  title: "<title>"
  description: "<one-sentence summary>"
  pubDate: 2026-06-13   # placeholder; sequence/adjust at publish time
  tags: ["claude-code", "getting-started", ...]
  draft: true           # ALWAYS true for now — do not publish
  ---
  ```
- **Audience & assumptions.** Total beginner, **macOS only**. Assume no terminal
  experience and no prior AI-coding-tool experience. State the Mac assumption in
  Post 1 and write as if PC users will get a separate guide later. Never assume
  Node.js, Homebrew, or developer tooling is present.
- **Voice.** Match `welcome.md`: practical, tested, low-hype, second person
  ("you"), concise; explain *why* a step matters, not just the mechanics. Bryan is
  an economist writing for other academics — lean on research/teaching examples,
  not generic software examples.
- **Sequencing.** This is a curriculum. Each post: (1) opens with a one-line note
  on where it sits in the path and what the reader should already have done;
  (2) ends with a **"Next:"** link to the following post (plain Markdown link,
  e.g. `[Installing VS Code](/ai/installing-vs-code/)`). This makes the series
  navigable without schema changes.
- **Screenshots.** We cannot generate real screenshots. Where one would help,
  insert a clearly-marked placeholder line: `> [SCREENSHOT: what it should show]`
  for Bryan to fill in, AND write the prose so it stands alone without the image.
- **Commands.** Show shell commands in fenced code blocks. Always explain a
  command in plain English *before* the reader runs it (per Bryan's "explain any
  shell command" rule — the readers are beginners too). Quote any path that
  contains a space.
- **Verify-before-drafting flag.** Anything version-dependent (install commands,
  macOS minimum version, auth flow, `/init` behavior) must be re-confirmed against
  official docs at draft time via the `claude-code-guide` agent — do not write
  these from memory. Steps that need this are marked **[VERIFY]**.

## Open / optional implementation notes (not blocking any draft)

- **Index ordering.** `src/pages/ai/index.astro` sorts articles by `pubDate`
  descending (newest first), which is *reverse* curriculum order. For now the
  in-post "Next:" links carry the sequence. Optional later polish: add an optional
  `order: number` to the schema and sort the guide by it, and/or add a "Start
  here" landing section. Do this only if/when Bryan wants the index to read as an
  ordered curriculum. Not required to draft any post.
- **pubDate sequencing.** Since all posts are drafts, exact dates don't matter yet.
  At publish time, either set ascending dates in path order or implement `order`.

---

## Execution approach (parallel workflow)

Draft the remaining posts as a single fan-out, not step by step.

- **Status.** Step 1 (`what-is-claude-code.md`) is **already drafted** (`draft:
  true`) and builds. The workflow should draft **Steps 2–10** and leave Step 1
  alone unless explicitly asked to revise it.
- **One agent per post.** Spawn one drafting agent for each of Steps 2–10, each
  given: (a) this file's **cross-cutting conventions**, (b) its own per-step spec
  below, (c) the **shared verified facts** block immediately below (so agents do
  *not* each re-run `claude-code-guide`), and (d) the instruction to match the
  voice of `src/content/ai/welcome.md`. Agents run in parallel; each writes one
  file to `src/content/ai/`.
- **No cross-post dependencies at draft time.** The only link between posts is the
  "Next:" line, and every slug is already fixed in the topic list — so an agent
  can write its "Next:" link without waiting on any other agent.
- **Verify once, at the end.** After all agents finish, run the single
  **Verification** pass at the bottom of this file (`npm run build`, then a links
  check). Keep every post `draft: true`. Do **not** `git init`/push.

### Shared verified facts (confirmed 2026-06-13 via `claude-code-guide`)

Pass these to every drafting agent so version-sensitive claims are consistent and
nobody re-verifies from memory:

- **Plans that include Claude Code:** Pro (the usual starting point), Max, Team,
  Enterprise. The **free plan does not** include Claude Code. A pay-as-you-go
  **Claude Console (API)** account also works, but Pro is the simplest path for
  most academics.
- **Install command (macOS, self-contained native app, no Node.js required):**
  `curl -fsSL https://claude.ai/install.sh | bash`
- **Minimum OS:** macOS 13 or later.
- **Auth:** first run of `claude` opens a browser sign-in; credentials are stored
  in the macOS Keychain. If the browser doesn't open, paste the printed URL.
- **VS Code download:** code.visualstudio.com; offer Apple Silicon vs. Intel vs.
  Universal build (check via Apple menu → About This Mac → "Chip").
- **Operating modes:** default (asks each time), Plan mode (read-only until you
  approve a plan), auto-accept edits, and bypass-permissions. **Shift+Tab** cycles
  modes; the current mode is shown in the interface.
- **Optional VS Code extension** ("Claude Code") exists as a separate graphical
  panel — not required for the terminal-based approach this series uses.

Any *new* version-sensitive claim an agent introduces that isn't covered here
still gets a `[VERIFY]` marker for a final human/`claude-code-guide` check.

---

## Locked topic list (launch set, in path order)

1. What Claude Code is (and isn't) — `what-is-claude-code.md`
2. Your home base: installing VS Code — `installing-vs-code.md`
3. The terminal, just enough — `terminal-basics.md`
4. Installing Claude Code & your first launch — `installing-claude-code.md`
5. Your first session — `your-first-session.md`
6. Choosing how much to approve: operating modes — `operating-modes.md`
7. Pointing Claude at your work — `pointing-claude-at-your-work.md`
8. How to ask: prompting habits — `prompting-habits.md`
9. Teaching Claude about you: CLAUDE.md & memory — `claude-md-and-memory.md`
10. Trust, safety & research integrity — `trust-safety-integrity.md`

---

## Step 1 — What Claude Code is (and isn't)  ✅ DRAFTED

> **Done (2026-06-13).** `what-is-claude-code.md` is written, `draft: true`, and
> builds. The plan-anatomy below is retained for reference; the parallel workflow
> should **skip** this step unless asked to revise it.

- **File:** `src/content/ai/what-is-claude-code.md`
- **Tags:** `["claude-code", "getting-started", "orientation"]`
- **Depends on:** nothing (entry point).
- **Goal / reader can:** explain in their own words what Claude Code is, how it
  differs from chatting with Claude in a browser, what it's good and bad at, and
  decide whether to follow the rest of the path.
- **No commands in this post** — pure orientation.

**Sections:**
1. *One-paragraph definition.* Claude Code is an AI assistant that works directly
   with the files on your own computer — it can read them, edit them, and run
   commands — and you drive it through a text prompt (the "terminal"). You stay in
   control; it asks permission before it changes things.
2. *"This guide assumes a Mac"* callout. PC guide coming later.
3. *How it's different from the Claude website.* Browser chat: you copy/paste text
   in and out. Claude Code: it acts on your actual project folder, remembers
   context across a session, can run real commands, and asks before acting.
4. *What it's good for in academic work.* 2–3 concrete vignettes: organizing and
   cleaning a messy folder of data/scripts; drafting and revising prose or LaTeX
   alongside your files; turning scattered notes into a structured document;
   building a simple website (like this one). Keep grounded, not hypey.
5. *What it's NOT / honest limits.* It can be confidently wrong; it is not a
   substitute for your judgment; you must review what it does; it should never be
   trusted to invent facts/citations/data (one-line teaser → links to Step 9).
6. *What you'll need to follow along.* A Mac, a paid Claude plan (Pro or Max — the
   free plan does not include Claude Code; **[VERIFY]** plan names at draft time),
   about 30 minutes for setup, and a willingness to try.
7. *Next:* link to Step 2.

**Length:** ~600–800 words.

---

## Step 2 — Your home base: installing VS Code

- **File:** `src/content/ai/installing-vs-code.md`
- **Tags:** `["claude-code", "getting-started", "setup", "vs-code"]`
- **Depends on:** Step 1 (conceptual only).
- **Goal / reader can:** download, install, and open VS Code on their Mac, and
  find the integrated terminal.

**Sections:**
1. *Why VS Code is our home base.* It's a free editor from Microsoft. We use it as
   a cockpit: a place to *see* your files in a sidebar and a built-in terminal to
   run Claude Code from. You don't need to know how to code to use it this way.
2. *Download.* Go to code.visualstudio.com (**[VERIFY]** current URL) and download
   the macOS build. Note Apple Silicon vs. Intel: how to check — Apple menu →
   "About This Mac" → look at "Chip"/"Processor"; pick the matching build (or the
   "Universal" build if offered).
3. *Install.* Open the downloaded file, drag **Visual Studio Code** into the
   **Applications** folder, then open it. Explain the first-open Gatekeeper dialog
   ("downloaded from the internet — are you sure?") and that it's expected.
   `> [SCREENSHOT: the drag-to-Applications window]`
4. *A 60-second tour.* The Explorer/sidebar (your files), and — most important —
   **where the integrated terminal is**: menu bar → **Terminal → New Terminal**,
   or the keyboard shortcut `` Ctrl+` ``. Show what an empty terminal panel looks
   like. `> [SCREENSHOT: VS Code with the integrated terminal open]`
5. *That's all for now.* We'll use the terminal in the next post.
6. *Next:* link to Step 3.

**Length:** ~700–900 words. **[VERIFY]** download URL & Apple Silicon detection.

---

## Step 3 — The terminal, just enough

- **File:** `src/content/ai/terminal-basics.md`
- **Tags:** `["claude-code", "getting-started", "terminal"]`
- **Depends on:** Step 2 (VS Code installed).
- **Goal / reader can:** open the integrated terminal, understand the prompt, and
  navigate to a folder using a handful of commands — including folders whose names
  contain spaces.

**Sections:**
1. *What a terminal actually is.* A way to tell your computer what to do by typing
   instead of clicking. Demystify it: you only need ~4 commands for this whole
   series.
2. *Open it in VS Code.* Recap: **Terminal → New Terminal** / `` Ctrl+` ``.
3. *Reading the prompt.* What the line of text before your cursor means (you're
   "in" a folder).
4. *The four commands you need:*
   - `pwd` — "where am I?" (prints the current folder)
   - `ls` — "what's here?" (lists files/folders)
   - `cd <folder>` — "go into a folder"; `cd ..` — "go up one"
   - Quoting paths with spaces: `cd "My Research Project"` — explain *why* the
     quotes matter (Bryan's own paths under `Dropbox/Claude Code Projects/` have
     spaces; use a relatable example).
5. *Three quality-of-life tips.* Tab to autocomplete a name; Up arrow to repeat a
   previous command; `Ctrl+C` to cancel something that's running.
6. *What you do NOT need to learn.* Reassurance — no scripting, no memorizing
   dozens of commands.
7. *Worked example.* Navigate from home into a sample `Documents/My Project`
   folder and `ls` it.
8. *Next:* link to Step 4.

**Length:** ~700–900 words.

---

## Step 4 — Installing Claude Code & your first launch

- **File:** `src/content/ai/installing-claude-code.md`
- **Tags:** `["claude-code", "getting-started", "setup"]`
- **Depends on:** Steps 2–3 (VS Code + can open/use the integrated terminal).
- **Goal / reader can:** install the Claude Code CLI from inside VS Code's
  terminal, launch it, and complete first-run sign-in.
- **This is the most version-sensitive post — [VERIFY] the entire install/auth
  flow against official docs at draft time** (re-run the `claude-code-guide`
  agent). Verified facts as of 2026-06-13 below.

**Sections:**
1. *Before you start (prerequisites).* macOS 13 or later; a paid Claude plan
   (Pro/Max — free plan excludes Claude Code); VS Code installed (Step 2). No
   Node.js, no Xcode tools required — the installer is self-contained.
2. *Open the integrated terminal in VS Code* (recap).
3. *Run the install command.* In the terminal:
   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```
   Explain in plain English what this does (downloads Anthropic's official
   installer and runs it) and add a one-line safety note: only run install scripts
   from sources you trust; this is the official one. It downloads a native app —
   no Node.js — and keeps itself updated automatically.
4. *Wait for it to finish* (~a minute). Note what success looks like.
5. *Launch Claude Code.* Type `claude` and press Enter.
6. *First-run sign-in.* A browser window opens; sign in with your Claude account;
   return to the terminal. Credentials are stored securely in the macOS Keychain;
   you won't sign in again unless you log out. If the browser doesn't open, copy
   the URL the terminal prints.
7. *Confirm it works.* You should see the Claude Code prompt waiting for input.
8. *Optional: the VS Code extension.* Mention that there's an official "Claude
   Code" extension (a graphical chat panel with side-by-side diffs) — it's a
   *separate, optional* add-on and is **not** required to run `claude` in the
   terminal, which is the approach this series uses. Link to it; don't walk
   through it here.
9. *Troubleshooting.* `command not found: claude` → close and reopen the terminal
   (PATH refresh); "you need a subscription" → plan issue.
10. *Next:* link to Step 5.

**Length:** ~900–1100 words.

---

## Step 5 — Your first session

- **File:** `src/content/ai/your-first-session.md`
- **Tags:** `["claude-code", "getting-started", "first-steps"]`
- **Depends on:** Step 4 (Claude Code installed and signed in).
- **Goal / reader can:** run a complete first task end-to-end — prompt, read the
  response, handle the permission prompt, see the result, and course-correct —
  with the confidence that they can't break anything.

**Sections:**
1. *Make a sandbox.* Create a throwaway practice folder (e.g. on the Desktop) so
   nothing real is at risk. Open it in VS Code (File → Open Folder) and launch
   `claude` in the integrated terminal there.
2. *Ask for one small thing.* Give an exact starter prompt, e.g. *"Create a file
   called todo.md with a short to-do list for planning a research paper."*
3. *Read the response.* Claude tells you what it intends to do before doing it.
4. *The permission prompt.* What it looks like, the approve/deny choices, and *why*
   it asks before creating or changing files. Approve it.
5. *See the result.* The new file appears in the VS Code Explorer; open it.
6. *Course-correct.* Ask for a change ("add a deadline column"); show that it's a
   conversation. If it does something you didn't want, you just tell it — and you
   can always undo manually since you can see the files.
7. *Ending and resuming a session.* How to quit and come back.
8. *Mindset.* You're the editor; Claude is the assistant. In a sandbox folder you
   genuinely can't break anything — experiment freely.
9. *Next:* link to Step 6.

**Length:** ~900–1100 words.

---

## Step 6 — Choosing how much to approve: operating modes

- **File:** `src/content/ai/operating-modes.md`
- **Tags:** `["claude-code", "getting-started", "modes", "permissions"]`
- **Depends on:** Step 5 (has seen a single permission prompt).
- **Goal / reader can:** name the main operating modes, switch between them, and
  pick the right one for a given task — trading off control vs. interruptions.
- **[VERIFY]** mode names, the cycle keyboard shortcut, and exact behavior against
  official docs at draft time (re-run `claude-code-guide`). Verified facts as of
  2026-06-13 below; treat as version-sensitive.

**Sections:**
1. *Why modes exist.* Every mode is a point on one dial: how much Claude does on
   its own vs. how often it stops to ask you. More approval = more control and
   more interruptions; less = faster but less oversight.
2. *Default mode (where you start).* Claude asks permission before each change or
   command — the safest setting and the one Step 5 showed you.
3. *Plan mode.* Claude investigates and proposes a written plan but makes **no**
   changes until you approve it (read-only until then). Best when you're learning,
   unsure, or working on something you don't want touched yet.
4. *Auto-accept edits mode.* Claude stops prompting for each file edit and applies
   them as it goes — faster once you trust the task. Name the trade-off: less
   review, so reserve it for low-stakes or well-understood work.
5. *Bypass-permissions mode.* No prompts at all. Strong caution: only in a
   throwaway/sandboxed folder where nothing matters — never on real or
   irreplaceable work.
6. *How to switch.* Press **Shift+Tab** to cycle modes; the current mode is shown
   in the interface. (**[VERIFY]** shortcut + indicator.)
7. *Which to use when — a short decision guide.* Learning / unsure → plan; routine,
   trusted edits → auto-accept; real or irreplaceable work → default; sandbox
   experiments → bypass is fine.
8. *Next:* link to Step 7.

**Length:** ~800–1000 words.

---

## Step 7 — Pointing Claude at your work

- **File:** `src/content/ai/pointing-claude-at-your-work.md`
- **Tags:** `["claude-code", "getting-started", "workflow"]`
- **Depends on:** Steps 5–6.
- **Goal / reader can:** open a real project folder, let Claude read and edit it,
  review changes in VS Code's diff view, and do so safely with a backup mindset.

**Sections:**
1. *The key idea: the working directory.* Claude works on whatever folder you
   launch it in. Choosing that folder is how you "point" it at a project.
2. *Open your real project in VS Code.* File → Open Folder → pick your project.
   Launch `claude` in the integrated terminal (it inherits that folder).
3. *Letting it read.* Claude reads relevant files to understand context before
   acting — this is normal and safe (reading doesn't change anything).
4. *Letting it edit — and reviewing.* When it proposes a change, VS Code shows a
   **diff** (red = removed, green = added). How to read it and approve/reject.
   `> [SCREENSHOT: VS Code side-by-side diff]`
5. *Work safely.* For this audience: keep a backup before big changes — Dropbox
   version history or a duplicated folder is fine if you don't use Git. Mention
   Git/version control exists as the proper tool, link-worthy for later, but don't
   require it.
6. *Do not point it at irreplaceable raw data without a backup.* Treat raw data as
   read-only; have Claude write to a derived/output folder. (Ties to Step 10.)
7. *Next:* link to Step 8.

**Length:** ~900–1100 words.

---

## Step 8 — How to ask: prompting habits

- **File:** `src/content/ai/prompting-habits.md`
- **Tags:** `["claude-code", "getting-started", "prompting"]`
- **Depends on:** Steps 5–7 (has run real tasks).
- **Goal / reader can:** write clearer prompts — giving context, being specific,
  iterating, and knowing when to be precise vs. let Claude explore.

**Sections:**
1. *Give context, not just commands.* Say what you're trying to achieve and why,
   not only the literal step. Good vs. vague example.
2. *Be specific about the outcome.* Name the file, the format, the constraints.
   Show a vague prompt rewritten into a good one (academic example, e.g. cleaning
   a dataset or restructuring a draft).
3. *It's a conversation — iterate.* Don't try to get everything in one prompt;
   refine across turns.
4. *Precise vs. exploratory.* When you know exactly what you want, say it; when you
   don't, ask Claude to explore options or explain trade-offs first.
5. *Ask it to explain before doing.* Useful for learning and for catching mistakes
   early.
6. *Break big tasks into steps.* And tell it your skill level / preferences (sets
   up Step 9).
7. *Next:* link to Step 9.

**Length:** ~800–1000 words.

---

## Step 9 — Teaching Claude about you: CLAUDE.md & memory

- **File:** `src/content/ai/claude-md-and-memory.md`
- **Tags:** `["claude-code", "getting-started", "claude-md", "memory"]`
- **Depends on:** Step 8.
- **Goal / reader can:** create a `CLAUDE.md` so they stop repeating themselves,
  and understand the difference between project and global instructions.
- **[VERIFY]** `/init` behavior and memory ("remember X") mechanics at draft time.

**Sections:**
1. *The problem.* Re-explaining your setup and preferences every session is
   tedious — and Claude forgets between sessions.
2. *CLAUDE.md: the fix.* A plain file Claude reads automatically at the start of a
   session. Put durable facts and preferences there.
3. *Where it lives.* Project-level `CLAUDE.md` (lives with that project) vs. a
   global `~/.claude/CLAUDE.md` (applies everywhere). Keep the explanation simple;
   recommend starting with one project file.
4. *What to put in it.* Who you are, the tools you use, your conventions, and —
   crucially — things Claude keeps getting wrong. Short academic example.
5. *How to create one.* Ask Claude to help draft it, or use `/init` to scaffold one
   from an existing project (**[VERIFY]**).
6. *Memory, briefly.* The lighter "remember this" mechanism for incidental
   preferences vs. durable rules in CLAUDE.md — one short paragraph, don't
   overload beginners.
7. *Why this is the highest-leverage beginner move.* Small effort, compounding
   payoff.
8. *Next:* link to Step 10.

**Length:** ~800–1000 words.

---

## Step 10 — Trust, safety & research integrity

- **File:** `src/content/ai/trust-safety-integrity.md`
- **Tags:** `["claude-code", "getting-started", "integrity", "safety"]`
- **Depends on:** all prior (capstone).
- **Goal / reader can:** use Claude responsibly — review its work, manage
  permissions, protect data, and uphold research integrity (never let it fabricate
  citations or data).

**Sections:**
1. *Claude can be confidently wrong.* You are the reviewer of record; never ship
   what you haven't checked.
2. *Permissions, revisited.* What's safe to allow freely vs. what to always review
   — anything that deletes/overwrites files or touches raw data. Tie back to the
   operating modes (Step 6): default/plan mode for anything irreplaceable,
   auto-accept only for low-stakes work.
3. *Review before you accept.* Use the diff view (Step 7) every time on real work.
4. *Research integrity — the big one.* Never let Claude invent citations, DOIs,
   page numbers, quotes, or data values. Verify every source against a real
   library before it enters a draft; distinguish "I verified this" from "this
   plausibly exists." (Mirrors Bryan's own integrity rules — frame for a general
   academic reader.)
5. *Data safety.* Treat raw data as read-only; write only to derived/output
   folders; keep backups; report N and how the sample was built. Don't have Claude
   silently drop or impute observations.
6. *Confidentiality.* Don't paste confidential, embargoed, or under-review material
   (e.g. peer-review manuscripts, student records) into external tools.
7. *A short personal checklist* the reader can keep.
8. *Wrap-up.* You now have the foundations; pointers to what to explore next.

**Length:** ~900–1100 words.

---

## Verification (after drafting any/all posts)

1. **Build passes:** `npm run build` — Astro validates frontmatter against
   `src/content.config.ts`; a bad date or missing field fails the build. This is
   the primary check.
2. **Local preview:** `npm run dev` → open http://localhost:4321/ai/. Confirm each
   new post renders. Note: `draft: true` posts are filtered out of the index
   (`getCollection('ai', ({ data }) => !data.draft)`), so to preview a draft
   either temporarily flip `draft: false` locally (revert before committing) or
   visit its URL directly if reachable.
3. **Links:** click each post's "Next:" link to confirm the slugs match the
   filenames and the path navigates in order.
4. **[VERIFY] content:** for Steps 1, 2, 4, 6, 9, re-confirm version-sensitive
   facts (plan names, download URL, install command, auth flow, operating-mode
   names + Shift+Tab shortcut, `/init`) against official docs via the
   `claude-code-guide` agent before publishing.
5. **Do NOT publish.** Leave `draft: true` and do not `git init`/push until Bryan
   says the content is ready.
```