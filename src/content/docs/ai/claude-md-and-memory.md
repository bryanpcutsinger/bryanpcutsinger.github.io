---
title: "Teaching Claude About You: CLAUDE.md & Memory"
description: "How to write a CLAUDE.md file so Claude Code remembers your setup and preferences, and the difference between project and global instructions."
draft: true
---

:::note
Reference — for when you're up and running. You don't need this to get started;
come back to it once you're using Claude Code on a project regularly.
:::

Once you're comfortable [asking Claude for what you want](/ai/prompting-habits/) in
a single session, the next annoyance is having to explain yourself all over again
every time you come back. This post fixes that.

## The problem

Each Claude Code session starts more or less from scratch. Within one session it
keeps track of what you've told it — but close the terminal, come back tomorrow,
and that context is gone. So you find yourself retyping the same preamble: "I work
on a Mac, my data lives in a `raw-data/` folder, treat it as read-only, and
explain any command before you run it." It works, but it's tedious, and it's easy
to forget a detail until Claude does the wrong thing and reminds you.

The deeper issue is that these are *durable* facts about how you work. They don't
change session to session, so retyping them is wasted effort — and any time you
forget one, you get worse results.

## CLAUDE.md: the fix

The fix is a plain text file named **[CLAUDE.md](https://code.claude.com/docs/en/memory)**. Claude Code reads it
automatically at the start of every session and treats its contents as standing
instructions. You write it once; Claude follows it every time, no reminder needed.

Think of it as the onboarding note you'd hand a new assistant on day one:
who you are, how you like things done, and the mistakes to avoid. The `.md` ending
means it's a Markdown file — the same plain-text-with-light-formatting you've seen
throughout this series — so you can read and edit it like any other note.

:::caution
A CLAUDE.md is **guidance Claude usually follows, not a rule it's incapable of
breaking.** It strongly shapes behavior, but it isn't an enforced lock — so for
anything that truly must not happen (touching your raw data, inventing a citation),
keep the real safeguards from the [integrity page](/ai/trust-safety-integrity/):
review the diff, work on backups, and verify every number and reference yourself.
CLAUDE.md reduces mistakes; it doesn't replace your judgment.
:::

## Where it lives

There are two places a CLAUDE.md can sit, and the difference is just *scope*:

- **Project-level** — a `CLAUDE.md` file in a specific project's folder. Claude
  reads it only when you're working in that project. This is where project-specific
  facts go: where the files live, what this project is, how to run it.
- **Global** — a single file at `~/.claude/CLAUDE.md` (the `~` is shorthand for
  your home folder). Claude reads this in *every* project. This is where
  preferences that follow you everywhere belong: who you are, your default tools,
  your ground rules.

Don't overthink this. **Start with one project-level file** in whatever project
you're working on now. You can add a global file later, once you notice yourself
repeating the same preferences across different projects.

## What to put in it

Keep it short and concrete. A useful CLAUDE.md usually covers four things:

- **Who you are.** The kind of work you do, so Claude reaches for the right
  examples and assumptions — "I'm an economist; I teach undergraduate macro and
  do empirical research on monetary history."
- **The tools you use.** "I analyze data in Stata," or "I write papers in LaTeX,"
  or "I'm a beginner at the command line, so explain commands before running
  them." This stops Claude from guessing.
- **Your conventions.** How you like results reported, where output goes, naming
  rules — the standing preferences you'd otherwise repeat.
- **Things Claude keeps getting wrong.** This is the highest-value part. Every time
  you catch yourself correcting the same mistake, write the correction down here so
  you never have to make it again.

A short example for a research project might read:

```markdown
# About this project

I'm an economist working on an empirical paper. I work on a Mac, I'm a
beginner at the command line, and I care about data integrity and
reproducibility.

- The `raw-data/` folder is read-only — never edit or overwrite it.
  Write any cleaned data to `processed-data/`.
- Never silently drop rows or rename variables. Tell me first, and report
  the row count before and after any cleaning step.
- Never invent citations, page numbers, or data values. If you're not sure,
  say so — don't fill in a plausible-looking number.
- I analyze data in Stata and write the paper in LaTeX.
- Explain any command before you run it, and keep explanations short.
```

(Teaching a course instead? The same file works — swap in "I teach intermediate
microeconomics; keep examples at that level" and point the read-only rule at your
`exams/` folder.)

You don't have to start from a blank file. This guide includes a **ready-made
CLAUDE.md template for economists** — covering research and teaching, with the
data-integrity and command-line rules already written in — that you can download,
drop into a project, and trim to fit:
[CLAUDE-md-economist-template.md](/templates/CLAUDE-md-economist-template.md).

Notice these are exactly the things you'd be annoyed to repeat — and exactly the
things that, if forgotten, would produce results you can't trust.

:::tip
One high-value rule for researchers ties directly to the no-fabricated-citations
problem: tell Claude where your *real* references live. If you manage citations in
**Zotero**, community tools can connect your library to Claude so it pulls genuine,
already-saved entries instead of inventing plausible-looking ones — see [Resources
for Economists](/ai/resources-for-economists/). Even without that, a CLAUDE.md line
like *"never invent a citation; if you don't have the real reference, say so"* is
worth including.
:::

## How to create one

You don't have to write it by hand. Two easy paths:

- **Ask Claude to help.** In a session, say something like: "Help me write a
  CLAUDE.md for this project — ask me whatever you need to know." It'll interview
  you and draft the file. Read it over and trim anything that isn't true.
- **Use `/init`.** Typing `/init` in a session tells Claude to look through an
  existing project and scaffold a CLAUDE.md describing what it finds — the
  structure, the tools, how things are run. This is handy when you point Claude at
  a folder that already has work in it. Treat the result as a first draft and edit
  it down to what matters.

:::note[Screenshot to add]
*[SCREENSHOT: a Claude Code session showing /init typed at the prompt and the
generated CLAUDE.md it proposes]*
:::

Either way, you end up editing a plain file. There's nothing magic about it — open
it anytime to add a rule or remove one that's gone stale.

## Memory, briefly

There's a lighter mechanism worth knowing. If you just say **"remember this"**
during a session — say, "remember that I prefer figures as PDF" — Claude can stash
that small preference for later without your opening any file. The rough rule:
durable, important rules that define how a project works belong in CLAUDE.md, where
you can see and edit them; small incidental preferences can go through "remember
this." When in doubt, put it in CLAUDE.md — it's the version you control directly.

## Why this is the highest-leverage beginner move

Of everything in this series, writing a CLAUDE.md gives you the most return for the
least effort. It takes ten minutes once, and every session afterward is better:
fewer repeated corrections, fewer wrong guesses, output that already fits your
conventions. The payoff compounds — the file grows a little each time you teach
Claude something, and a few weeks in you'll have an assistant that genuinely knows
how you work.
