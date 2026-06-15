---
title: What Claude Code is (and isn't)
description: A three-minute orientation for economists deciding whether Claude Code is worth their time — what it does, how it differs from browser Claude, and the one rule that governs everything.
draft: false
---

Before you spend half an hour setting anything up, here's enough to decide whether
Claude Code is worth your time.

**Claude Code is an AI assistant that works on the actual files on your computer.**
You drive it by typing a request in plain English, and it reads, writes, and edits
files in a folder you point it at — a paper, a dataset, a folder of scripts. It
asks your permission before it changes anything, so you stay in control the whole
time. You stay the reviewer; it does the legwork.

## How it differs from Claude in a browser

If you've used Claude on the web, you know the rhythm: you paste text in, it
answers, you copy the answer back out. Claude Code closes that loop. Instead of
copying a regression table into a chat window and pasting the cleaned version back,
you point Claude at the folder and it edits the file in place — then shows you
exactly what it changed. It can see how your files relate to each other, run
commands, and carry context across a working session, rather than starting fresh
from whatever you remembered to paste.

## What it's good for in academic work

A few grounded examples, drawn from the two halves of the job:

- **Untangling a messy replication folder.** Point it at a directory of half-named
  scripts and stale data extracts and ask what runs in what order, or to write the
  one end-to-end script that reproduces a result.
- **Turning lecture notes into a problem set.** Hand it a set of notes and ask for
  five practice problems with worked solutions in the same notation — then revise
  the ones that miss.
- **Tightening a working paper.** Ask it to read a draft section and flag where the
  argument repeats itself or an undefined term appears before its definition.

It's good at the mechanical, legwork-heavy parts of research and teaching — the
reorganizing, drafting, and cross-checking that eat your afternoons. It is not a
substitute for your judgment about what's correct.

:::caution[The one rule that governs everything]
Claude can be **confidently wrong**. It will produce a citation, a page number, a
quoted passage, or a data value that looks completely plausible and is simply
invented. For an economist, that's the thing to internalize before anything else:
treat everything it produces as a draft to verify against the original source, never
as a finished fact. You are the reviewer of record — nothing it writes enters your
work until you've checked it. We come back to this rule throughout the guide.
:::

## What you'll need

A Mac (macOS 13 or later), a **paid Claude plan** (Pro is the usual starting point;
Max also works — the free plan does *not* include Claude Code), and about thirty
minutes for a one-time setup.

The next chapter — the setup walkthrough (installing VS Code, just-enough terminal,
and Claude Code itself) — is coming soon. For now, see the [guide overview](/ai/) for
what's available.
