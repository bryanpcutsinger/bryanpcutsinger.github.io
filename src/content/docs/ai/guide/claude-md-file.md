---
title: Customizing Claude with a CLAUDE.md file
description: The single highest-leverage habit — a CLAUDE.md file that tells Claude who you are, how you work, and your house style, so you stop re-explaining yourself every session.
draft: false
---

In [your first session](/ai/guide/your-first-session/) you may have noticed yourself
repeating things: *I'm on a Mac, explain the shell command first, default to Python,
don't invent citations.* Type those out once per session and they cost you a few minutes
each time. Write them down once in a **CLAUDE.md** file and Claude knows them from the
first message of every session, forever. It's the single highest-leverage habit in this
guide.

## What a CLAUDE.md is

A `CLAUDE.md` is a plain-text file of standing instructions that Claude reads
automatically at the start of every session and treats as guidance for the whole
conversation. There's no command to load it and nothing to remember — if the file is
there, Claude has already read it before you type your first word.

Think of it as the briefing you'd give a sharp new research assistant on day one: who you
are, how you like things done, and the lines they must never cross. You write it once,
correct it occasionally, and stop re-explaining yourself.

One honest caveat, the same one that governs everything else in this guide: a CLAUDE.md
is guidance Claude *usually* follows, not a lock it *cannot* break. It dramatically
shifts the odds in your favor, but it doesn't excuse you from reviewing diffs and
verifying results. You're still the reviewer of record.

## Global vs. project files

There are two main places a CLAUDE.md lives, and they stack. (Claude Code supports a
few other locations for special cases, but these two cover nearly everything.)

- **Your global file** lives at `~/.claude/CLAUDE.md` (the `~` is your home folder). It
  applies to *every* project on your machine. This is the home for things that are true
  no matter what you're working on: that you're an economist on a Mac, a command-line
  beginner who wants shell commands explained, that you default to Python, and your
  non-negotiable integrity rules.
- **A project file** lives at the top level of a specific project folder, named just
  `CLAUDE.md`. It applies only when you're working in that folder, and it holds what's
  true *here*: this paper uses `biblatex`, the `raw/` folder is read-only, clustered
  standard errors at the state level, the data dictionary lives in `docs/`.

When both exist, Claude reads both — the global file sets your defaults and the project
file adds or overrides for the project at hand. Start with a global file; add project
files as each one earns its own rules.

## Bootstrapping one with /init

You don't have to write a project file from a blank page. Open a project folder, start
Claude, and run:

```
/init
```

Claude looks through the folder — the scripts, the data layout, any README — and drafts a
starter `CLAUDE.md` describing what the project is and how it's organized. Read what it
proposes, trim what's wrong, and keep it. It's a first draft to react to, which is far
easier than inventing one cold.

For your **global** file there's no `/init` — but you don't need one. The template at the
end of this chapter is the starting point, and you can always just ask Claude to help:
*"Help me write a global CLAUDE.md. I'm an economist who…"*

## What belongs in it (for an economist)

A good CLAUDE.md is short — a page is plenty — and grows by a line at a time, each time
you catch yourself making the same correction twice. A few categories earn their place:

- **Who you are and how you work.** Your field, whether you teach or do empirical work or
  both, your skill level at the command line, your default language (Python? R? Stata?),
  and how much explanation you want. This is what stops Claude from pitching answers at
  the wrong level.
- **Data and research integrity rules.** The lines that protect your work: never invent
  citations, DOIs, page numbers, or data values; treat the `raw/` folder as read-only;
  never silently drop or impute observations; report row counts before and after a merge.
  These are the rules you most want enforced and most regret leaving unsaid.
- **Output conventions.** Vector PDF figures for papers, ~300 DPI PNG for slides;
  LaTeX-ready tables written to a file rather than hand-typed; relative paths, not
  hardcoded absolute ones.

And one category that must **never** go in a CLAUDE.md: **secrets.** No API keys, no
passwords, no tokens. The file is read into context every single session and is exactly
the kind of thing that ends up committed to a shared repository — both ways to leak a
credential you meant to keep private. Keys belong in environment variables; the [API keys
& secrets](/ai/guide/api-keys-and-secrets/) chapter covers how.

## Your house style lives here

If you write the same way across papers — em-dashes not parentheses, no Oxford comma,
"Federal Reserve" on first mention then "the Fed," active voice, no breathless adjectives
— that's a **house style**, and the CLAUDE.md is its one home. Describe your style once,
here, and every session inherits it.

The payoff is that you describe it in *one* place. When you later sit down to draft a
paper or a set of slides, you don't re-explain how you write — Claude already knows, and
the writing work is just *applying* a style it already has. Centralizing it here is what
makes the writing workflow feel like editing rather than re-briefing.

## A starting template

You don't have to start from scratch. There's a fill-in-the-blanks template built for
economists — global-file structure, with the data and research integrity rules already
written and a teaching section for course folders:

**[CLAUDE-md-economist-template.md](/templates/CLAUDE-md-economist-template.md)**

Save it as `~/.claude/CLAUDE.md`, delete the lines that don't apply, fill in the blanks,
and you have a working global file in a few minutes. Keep it lean and add a rule whenever
you find yourself making the same correction a second time.

---

A CLAUDE.md is the foundation of customizing Claude. The advanced version — rules that
fire automatically, hooks that run on their own, and reusable skills — builds directly on
this habit, and gets its own chapter later in the guide. Next, though, is learning to
steer a session in motion: the work loop, plan mode, and the permission modes.
