---
title: "The Terminal, Just Enough"
description: "A no-jargon introduction to the terminal for beginners — opening it in VS Code, reading the prompt, and the handful of commands you need to find your way to a project folder."
draft: true
---

By now you should have [VS Code installed](/ai/installing-vs-code/). This post
gives you *just enough* of the terminal to be comfortable — not a computer-science
course, just the four commands you'll actually use with Claude Code.

## What a terminal actually is

A terminal is a way to tell your computer what to do by **typing** instead of
clicking. That's the whole idea. Everything you normally do by double-clicking
folders and dragging files has a typed equivalent, and the terminal is where you
type it.

[Claude Code lives in the terminal](https://code.claude.com/docs/en/quickstart) — that's why this step exists. The good news:
you don't need to "learn the terminal" in any serious sense. For this entire
series you need roughly **four commands**, and they all answer simple questions
like "where am I?" and "go into that folder." If the terminal has ever looked
intimidating, that's the marketing, not the reality.

## Open it in VS Code

You already have a perfectly good terminal built into VS Code, so use that one —
it keeps your editor and your typing in the same window.

- Open VS Code.
- From the menu bar, choose **Terminal -> New Terminal**.
- Or use the keyboard shortcut: **Ctrl + `** (the backtick key, top-left of most
  keyboards, just under Escape).

A panel opens along the bottom of the window with some text and a blinking cursor.
That's your terminal.

:::note[Screenshot to add]
*[SCREENSHOT: VS Code with the integrated terminal panel open at the bottom, cursor blinking after the prompt]*
:::

## Reading the prompt

The line of text sitting just before your cursor is called the **prompt**. It's
the terminal telling you where you currently are. Think of it as the open folder
in a Finder window — except written out as text.

It might look something like this:

```bash
bryan@MacBook ~ %
```

The `~` is shorthand for your **home folder** (the one with your Documents,
Desktop, and Downloads inside it). The `%` marks where your typing begins. When
you move into a different folder, that part of the prompt changes to show where
you now are. So the prompt is always quietly answering the question: *which folder
am I "in" right now?*

## The four commands you need

Type each command, then press **Return** to run it. Here they are, with what each
one is really asking.

**"Where am I?"** — `pwd` prints the full path of the folder you're currently in.
Use it any time you're unsure.

```bash
pwd
```

**"What's here?"** — `ls` lists the files and folders inside your current folder,
the same things you'd see if you opened it in Finder.

```bash
ls
```

**"Go into a folder"** — `cd` (short for *change directory*) moves you into a
folder. Follow it with the folder's name.

```bash
cd Documents
```

To go back **up one level** to the folder that contains your current one, use two
dots:

```bash
cd ..
```

**Quoting folder names with spaces.** This one trips up almost everyone, so it's
worth understanding rather than memorizing. The terminal treats a space as a
*separator* — it reads each chunk between spaces as a separate piece of
information. So if you have a project folder called `Coups and Inflation` and type
`cd Coups and Inflation`, the terminal sees three separate words and gets
confused. The fix is to wrap the whole name in straight quotes so it's read as one
thing:

```bash
cd "Coups and Inflation"
```

This matters more than it sounds, because everyday folders are full of spaces —
anything under Dropbox, a `My Project` folder, a document titled
`Budget Draft`. When in doubt, quote the name.

## Three quality-of-life tips

These save real time and reduce typos:

- **Tab to autocomplete.** Start typing a folder or file name, then press **Tab**.
  The terminal finishes it for you. Type `cd Doc` then Tab and it completes to
  `Documents`. This also dodges the spaces problem, since it quotes for you.
- **Up arrow to repeat.** Press the **Up arrow** to bring back the last command you
  ran (and again for the one before that). Handy when you want to rerun something
  or fix a small typo.
- **Ctrl + C to cancel.** If something is running and you want to stop it — or you
  just typed half a command and want a clean line — press **Ctrl + C**.

## What you do NOT need to learn

To be clear about the boundary: you do **not** need to learn scripting, write any
code, or memorize the dozens of commands a programmer might use. There's no exam.
The four commands above plus the three tips are genuinely enough to get to your
project folder and hand things off to Claude Code, which does the heavier lifting
from there.

## Worked example

Suppose you have a folder at `Documents/Monetary Policy Paper` and you want to
land inside it and see what's there. Starting from your home folder, the sequence
is:

First, confirm where you are:

```bash
pwd
```

Move into Documents, then into the project folder (quoted, because of the space):

```bash
cd Documents
cd "Monetary Policy Paper"
```

Now list what's inside:

```bash
ls
```

You should see the contents of `Monetary Policy Paper` printed out — your drafts,
data, and notes. The prompt will also have changed to show you're now inside that folder.
That's it: you can find your way to any folder on your Mac with these moves, and
that's all the terminal you need to start.
