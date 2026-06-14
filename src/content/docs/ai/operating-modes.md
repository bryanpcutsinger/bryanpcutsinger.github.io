---
title: "Choosing How Much to Approve: Operating Modes"
description: "How Claude Code's operating modes trade control for speed, and how to pick the right one for the task in front of you."
draft: true
---

By now you've [run a first session](/ai/your-first-session/) and seen Claude pause
to ask for permission at least once — that prompt is the thing this post is about. Claude doesn't always have to stop and ask. How often it
checks with you is something you control, and choosing well makes the difference
between feeling micromanaged and feeling like you've handed the keys to a
stranger.

## Why modes exist

Think of every operating mode as a point on a single dial: **how much Claude does
on its own versus how often it stops to ask you.** Turn the dial one way and
Claude pauses before every change — you stay fully in the loop, but you also get
interrupted constantly. Turn it the other way and Claude moves quickly without
checking in — fewer interruptions, but less oversight.

There's no universally "right" setting, because the right amount of oversight
depends on the work. Drafting lecture notes in a throwaway practice folder and
cleaning the folder that holds the only copy of your survey data deserve very
different levels of caution. The modes below are just named presets along that dial. Once you can
name them and switch between them, you can match the mode to the stakes of the
task — which is the whole skill.

## Default mode (where you start)

This is the setting your [first session](/ai/your-first-session/) showed you, and
it's where every session begins.

- **Claude asks permission before each change or command.** Before it edits a
  file, runs a shell command, or touches anything on your machine, it stops and
  waits for your yes or no.
- **It's the safest mode** because nothing happens without your say-so. The cost
  is rhythm: on a long task you'll be approving a lot of small steps.

For your first weeks, this is exactly where you want to be. The interruptions are
the point — they're how you learn what Claude tends to do before you let it do it
unsupervised.

## Plan mode

[Plan mode](https://code.claude.com/docs/en/permission-modes) adds a step before any work happens. Claude investigates your files and
**proposes a written plan, but makes no changes until you approve it.** Until you
say go, the session is effectively read-only.

This is the mode to reach for when you're learning, when you're unsure how Claude
will approach something, or when you're working on material you don't want
touched yet. Say you want to reorganize a messy replication folder.
In plan mode, Claude reads the files and tells you *what* it intends to do —
which files move where, what gets renamed, what stays — and you get to catch a
misunderstanding on paper instead of in your folder. You approve the plan, and
only then does it start editing.

:::note[Screenshot to add]
*[SCREENSHOT: a Claude Code session in Plan mode, showing a proposed plan with the mode indicator visible]*
:::

## Auto-accept edits mode

Auto-accept edits is a step toward speed. Claude **stops prompting you for each
file edit and applies changes as it goes.** You're still watching, but you're no
longer clicking "approve" on every line.

The trade-off is real and worth saying plainly: **you're reviewing less.** Claude
makes the edits, and you read them after the fact rather than before. That's fine
when the task is low-stakes or well understood — drafting lecture notes, styling
a figure, tidying code comments, applying a change you've already watched Claude
do correctly a few times. It's the wrong choice the first time you try something,
or anytime a mistake would be expensive to undo — say, anything that touches your
raw data or a paper draft.

## Bypass-permissions mode

Bypass-permissions mode turns the dial all the way down: **no prompts at all.**
Claude runs commands and edits files without checking in about any of it.

Treat this one with strong caution. The only place it belongs is a
throwaway or sandboxed folder where nothing matters — a scratch directory you
created to test something and would happily delete.

:::danger
**Never use it on real or irreplaceable work:** a paper you're writing, original
data you can't get back, the analysis behind a result you'll publish or rely on.
The convenience is not worth the risk of an unsupervised command doing something
you can't take back.
:::

## How to switch

Switching modes is one keystroke. While you're in a session:

- **Press `Shift+Tab` to cycle through the modes.** Each press moves you to the
  next one.
- **The current mode is shown in the interface,** so you can always glance and
  confirm where the dial is set before you let Claude run.

Get in the habit of checking that indicator before you start a task, the same way
you'd check which folder you're in. The cost of a wrong mode is highest at the
moment you forget which one you're in.

## Which to use when

A short decision guide for the common cases:

- **Learning something new, or unsure how Claude will proceed** → Plan mode. See
  the plan, catch problems before any change happens.
- **Routine, well-understood edits you've trusted before** → Auto-accept edits.
  Skip the per-edit prompts and let it move.
- **Real or irreplaceable work — your raw data, a paper draft, anything you'll
  publish** → Default mode. The interruptions are cheap insurance.
- **Sandbox experiments in a folder you'd happily throw away** → Bypass is fine
  here, and only here.

When in doubt, drop back toward default. The slower mode costs you a few minutes;
the faster one can cost you an afternoon of cleanup. As you get a feel for what
Claude does well, you'll find yourself reaching for plan and auto-accept more
often — but you'll do it on purpose, which is the difference that matters.
