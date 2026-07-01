---
title: Rules, hooks, and skills
description: The customization layer beyond CLAUDE.md — hooks that run on their own to enforce your guardrails, and skills that package a repeatable job into a single command.
draft: false
---

A [CLAUDE.md file](/ai/claude-md-file/) gets you a long way: standing instructions Claude
reads at the start of every session. But a CLAUDE.md is *guidance Claude usually follows*,
not a wall it cannot walk through — and some things you'd rather not leave to good
intentions. That's where the next layer comes in. **Hooks** are commands your machine runs
automatically, on its own, when Claude tries to do something. **Skills** are reusable
packets of instructions you can summon by name. Neither is required to do real work, and
you can ignore both for a long time. This chapter is for when you've started to wish a
particular rule were a hard stop, or to wish a fiddly multi-step task were one short
command.

## Hooks: rules that fire on their own

A CLAUDE.md says *please don't overwrite the raw data*. A **hook** makes it so Claude
*can't* — or at least can't without pausing to ask you first. A hook is a small command
the Claude Code harness runs automatically at a fixed moment: right before Claude edits a
file, right after it finishes a response, before it runs a shell command. The harness
checks the hook's result and acts on it. If the hook says *no*, the action is blocked,
regardless of what Claude intended. And a hook can only *tighten* what's allowed, never
loosen it — a blocking hook fires even in permissive modes where other checks are skipped,
which is exactly what makes it the right home for a hard guarantee.

The difference is who's in charge. The official docs put it sharply: an instruction is a
*request*; a hook is *enforcement*. A CLAUDE.md rule lives inside Claude's reasoning, so
it holds only as well as Claude attends to it. A hook lives *outside* Claude, in the
harness, so it fires every time without depending on Claude noticing. For the handful of
rules you truly never want broken, that gap matters.

A few examples make the shape concrete, and each comes straight from how a working
economist actually uses this:

- **Protect raw data.** A hook that runs before any file write can refuse if the target
  path is inside your `raw/` folder. Now the rule *never overwrite raw data* isn't a
  reminder Claude might overlook three hours into a session — it's a hard block. Claude
  proposes the edit, the hook catches it, and the write simply doesn't happen.
- **Pause on anything that leaves your machine.** A hook can intercept a `git push`, a
  package install, or a paid API call and make it pause for your explicit yes. These are
  the actions you most want a beat to think about before they go through — sending code to
  a shared repository, pulling something off the internet, spending money — and a hook
  turns each one into a deliberate confirmation rather than something that happens while
  you're reading the diff above it.
- **Keep student data out of the conversation.** For grading work, a hook can stop Claude
  from opening data files (`.csv`, `.dta`, and the like) or dumping them to the screen,
  while still letting the *scripts* it writes read the data and print only aggregates. The
  principle: a script may read identifiable records; Claude's context never sees a raw row.

Hooks can also do quiet, useful housekeeping: run a formatter after Claude edits a file,
pop a desktop notification when it finishes while you're across the room, or log every
shell command it ran so you have a record. But the protective use is the one worth setting
up first, because it's the one that converts a wish into a guarantee.

:::note
You may already be living with hooks without having written one. A harness configured for
research work often ships with a few sensible guards — blocking writes to `raw/`, pausing
on `git push` or `git commit`, holding installs for confirmation. If a confirmation prompt
appears that *you* didn't ask for, a hook is doing its job.
:::

Setting a hook up is more involved than adding a line to a CLAUDE.md — hooks live in a
`settings.json` file (the project's copy, committed so a coauthor who clones the repo
inherits the same guards, or your personal one in `~/.claude/` that applies everywhere),
and writing the command behind one is genuinely programming. The honest beginner move is
not to hand-author one from scratch but to **ask Claude to add it for you**: describe the
guardrail you want in plain English — *"add a hook that blocks any write inside the raw
folder"* — and let it write the configuration, which you then read and approve like any
other change. The concept is the part worth carrying out of this chapter; the syntax you
can borrow.

:::caution
A hook is a real command your computer runs automatically, so a careless one can get in
your way or, worse, do something you didn't intend. Treat a hook you didn't write the way
you treat any code Claude proposes: read it before you accept it, and start with hooks that
*block* or *pause* — the conservative direction — rather than ones that act on their own.
:::

## Skills: a repeatable job in one command

Where a hook automates a guardrail, a **skill** packages a *task*. A skill is a named
bundle of instructions — sometimes with a script or a template alongside — that you invoke
by name as a slash-command, and that Claude can also reach for on its own when a task
matches the skill's description. Instead of re-typing the same paragraph of setup every
time you do a recurring job, you write it down once as a skill and then just call it.

The test for whether something should be a skill is simple: **do you explain the same
multi-step procedure to Claude more than once?** If so, it's a candidate. A few that recur
in an economist's week:

- **A new-paper scaffold.** A skill that lays out your standard project structure — `raw/`,
  `derived/`, `output/`, a `scripts/` folder, a stub `CLAUDE.md`, a `.gitignore` — the way
  you always set up a replication. One command instead of fifteen minutes of the same
  clicking and explaining.
- **A grading pass.** A skill that reads a problem-set submission against your rubric and
  drafts feedback in your voice and format. You wrote the rubric and the format once; now
  each submission is one invocation, and the standard stays identical across the stack.
- **A regression-results table.** A skill that takes model output and writes a
  booktabs-style LaTeX table to a file — estimator, standard-error type, fixed effects, and
  N reported the way you always report them. The conventions live in the skill, so you stop
  restating them.

A skill differs from a CLAUDE.md in *when* it applies. A CLAUDE.md is always on — it
shapes every response in the session. A skill stays out of the way until it's needed —
you call it, or Claude pulls it in when the job matches — which is exactly what you want
for a task you do occasionally rather than constantly. Keep standing preferences in the
CLAUDE.md; reach for a skill when a specific, repeatable *job* has its own steps.

:::note
Under the hood, a skill is a small folder holding a `SKILL.md` file: put it in your
project's `.claude/skills/` and coauthors who clone the repo get it too, or in
`~/.claude/skills/` to have it in every project. You'll also see "custom slash-commands"
in older material — as of mid-2026 those are the same mechanism — and the slash-command
menu in a session is where everything available to you shows up. Check the current docs
for the authoring format before building one by hand.
:::

As with hooks, the gentlest way in is to let Claude help: describe the recurring task and
ask it to *"turn this into a skill I can run as a command."* You review what it writes,
save it, and from then on the task is a single call. One craft note worth insisting on in
that review: keep the skill's text short, because once invoked it rides along in the
conversation for the rest of the session. And the same rule that governs
everything else in this guide still holds — a skill that drafts a table or grades a
problem set has produced *a draft*. You remain the reviewer of record; the skill saves you
the setup, not the checking.

## Where advanced rules go beyond a basic CLAUDE.md

The [CLAUDE.md chapter](/ai/claude-md-file/) covers the everyday rules — who you are, your
house style, the integrity lines you never want crossed — and for most people that file
is the whole story. But once you've lived with it for a while, you may find a rule that a
plain CLAUDE.md isn't the right home for, and that's the seam this chapter sits on.

The distinction is what kind of rule it is. A rule that's *advice* — a preference Claude
should weigh as it works — belongs in a CLAUDE.md, where it shapes every response. A rule
that's a *hard stop* — something you want enforced whether or not Claude is paying
attention — wants a hook, because only the hook fires outside Claude's reasoning. And a
rule that's really a *procedure* — a fixed sequence you'd otherwise re-explain — is better
written down as a skill than crammed into the always-on briefing.

So the move isn't to pile more and more into one CLAUDE.md — the official guidance is to
keep that file under roughly two hundred lines, because a longer one both costs context
and gets followed less reliably. It's to notice which of those three a given rule actually
is, and put it where it belongs. There's also a middle ground for rules that only apply to
certain files: a `.claude/rules/` folder can hold topic-scoped rule files gated to file
paths — LaTeX conventions that matter only when Claude touches `.tex` files, say — so they
load when relevant instead of riding along in every session. The next section lays the
main three side by side.

## How the three layers fit together

It helps to see the customization layer as three tools sorted by *who acts and when*, not
as competing options:

- **CLAUDE.md** is your standing briefing — always loaded, shapes every response, the home
  for who you are, your house style, and the rules you want Claude to keep in mind. Start
  here; most people never need more.
- **Hooks** are automatic guardrails — they fire in the harness without Claude's
  involvement, which is what makes them the right tool for the few rules you want enforced
  rather than merely requested. And because they run outside the conversation, they cost
  nothing from your context window unless they report something back.
- **Skills** are on-demand jobs — invoked by name, or offered by Claude when the task
  matches, which suits a repeatable task with its own steps.

A reasonable path is to live on a good CLAUDE.md until something pushes you past it: a rule
you keep wishing were a hard stop (that's a hook) or a procedure you keep re-explaining
(that's a skill). You don't graduate to these by hitting some threshold — you reach for one
the day a specific friction makes the case for it. Until then, the [CLAUDE.md
file](/ai/claude-md-file/) is plenty, and the [core review loop](/ai/your-first-session/)
is what keeps any of it honest.

---

None of this changes the one rule the [whole guide](/ai/what-is-claude-code/) rests on:
you verify what Claude produces. Hooks and skills move *where* the work happens — a hook
moves a guardrail out of Claude's reasoning and into your machine; a skill moves a
procedure out of your typing and into a command — but neither moves the reviewing off your
desk. They make the setup reliable so you can spend your attention on the part that needs
it.
