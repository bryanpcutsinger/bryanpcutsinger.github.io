---
title: "A Taste of the Code Tab"
description: "A gentle, conceptual look at the desktop app's Code tab — what it does, when a non-technical reader might reach for it, and why Cowork is usually the friendlier choice."
draft: false
---

The desktop app's third tab, **Code**, sounds intimidating — and for most of the everyday work an economics professor or department chair does, you can happily ignore it. But it helps to know what it is, because there are a handful of moments where Code is genuinely the better tool, and you don't want to reach for the wrong one out of fear.

This page is a light, conceptual tour. No setup walkthrough, no jargon you have to memorize — just enough to recognize when the Code tab earns its place and when [Cowork](/ai/desktop/meet-cowork/) is the easier path.

## What the Code tab actually does

The Code tab is an interactive coding assistant that edits files **directly on your computer**. The key word is *interactive*: it doesn't go off and work on its own the way Cowork does. Instead, it proposes a change, shows it to you, and waits.

Crucially, **you never touch a terminal**. That black-screen-with-blinking-cursor that scares people off the command line? It's not here. Code lives inside the same friendly desktop window as Chat and Cowork.

The thing that makes Code feel safe is the **diff**. When Code wants to change a file, it shows you exactly what it proposes — the old text and the new text, side by side, line by line — and you **accept or reject** each change. Nothing is altered on your computer until you say yes. If a proposed edit looks wrong, you reject it and it's as if it never happened.

:::tip[See it on Anthropic's site]
The Code tab shows every change as a **diff** — removed lines in red, added lines in
green — with **Accept** and **Reject** controls so you decide what sticks. Anthropic's
[desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart) describes the
diff-review step.
:::

### The permission modes

Code gives you three ways to control how much it asks before acting. As a newcomer you'll want the cautious default:

- **Ask permissions** (the default) — Code shows you each change as a diff and waits for your approval. Start here and stay here while you're learning.
- **Auto-accept edits** — Code applies its changes without pausing for each one. Faster, but you give up the line-by-line review. Reserve this for when you already trust the task.
- **Plan mode** — Code lays out *what* it intends to do before it does anything, so you can sanity-check the approach first.

The same review-before-it-happens instinct that makes Cowork's "Ask before acting" mode the recommended one applies here. When in doubt, let it ask.

### Environments: stick to Local

When you start a Code session you'll see a choice of environment — **Local**, **Remote**, or **SSH**. The last two are for connecting to other machines and servers, which is well outside what a non-technical reader needs. **A beginner uses Local**, which simply means "work with the files on this computer." That's the only one you need to think about.

## A Windows requirement: Git for Windows

Here is the one genuine prerequisite, and it's worth stating plainly. To run **Local** Code sessions on Windows, you need a free tool called **Git for Windows** installed first. (Macs usually ship with Git already, which is why this comes up on Windows specifically.)

You don't need to understand what Git is to use the Code tab — you just need it present. Download it from [git-scm.com/downloads/win](https://git-scm.com/downloads/win) and run the installer with its default options.

This is on the checklist over on [Before We Meet](/ai/desktop/before-we-meet/), so if you've worked through that, you may already be set.

:::caution
If you open the Code tab and a Local session won't start or complains about Git, the missing piece is almost always Git for Windows. Install it, restart the desktop app, and try again.
:::

## When Code beats Cowork

Both tabs can read and change your files, so when would you choose the more technical-feeling one? Three situations stand out:

- **Repeated, structured edits across many files.** Say you have a folder of forty teaching handouts and you need the same header swapped on every one, or a set of replication scripts where a variable was renamed and the change has to propagate consistently. Code's accept-or-reject diff lets you confirm each edit is exactly right.
- **Working inside a real code or replication project.** If you're touching the actual scripts behind a paper — a Stata `.do` file, an R or Python script, a replication package you're preparing for a journal — Code is built for exactly this kind of file. It understands the structure of a project rather than treating files as isolated documents.
- **Anything where the precise, line-by-line change matters.** When you need to *see* what changed and not just trust that it did, the diff view is the whole point. For code, for formulas, for anything where one wrong character breaks the result, that visibility is worth the slightly more technical feel.

If your task is "summarize these committee documents," "build me a budget spreadsheet," or "draft a grading rubric," that's not a Code task — that's [Cowork](/ai/desktop/cowork-for-economists/), and Cowork will be the friendlier, lower-friction experience.

:::tip
A simple rule of thumb: if you're working with *prose and documents*, reach for Cowork. If you're working with *code, scripts, or many files at once where exact changes matter*, reach for Code. For most knowledge work, Cowork is the right default.
:::

## Same engine underneath

One reassuring fact: the desktop app and the original **command-line tool** that programmers use run the *same engine*, and they share the same configuration. That means the `CLAUDE.md` files, connectors, and settings you set up carry over — you're not learning a different product. The desktop's Code tab is simply that engine with a friendly window around it and no terminal in sight.

If you find yourself curious about how the more technical, command-line version works — or you have a colleague who already uses it — Anthropic's [Claude Code quickstart](https://code.claude.com/docs/en/quickstart) covers it. You don't need it to use the desktop app, but it's there when you want to go deeper.

## A word on verification

Everything from [Cowork, Safely](/ai/desktop/cowork-safely/) applies just as firmly here. The diff view tells you *what changed*; it does not tell you whether the change is *correct*. Claude can write code that runs cleanly but does the wrong thing, and — for an economist especially — it can fabricate citations, page numbers, quotes, and data values that look entirely plausible. The accept-or-reject control is your chance to check, not a guarantee. Read what's proposed, and confirm any factual claim against the original source before you rely on it.

## Where to go next

- For the everyday knowledge-work tab you'll use most, see [Meet Cowork](/ai/desktop/meet-cowork/).
- For the safety habits that apply across all three tabs, see [Cowork, Safely](/ai/desktop/cowork-safely/).
- To read Anthropic's own walkthrough of the desktop Code experience, see the [desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart) or the [Claude Code product page](https://claude.com/product/claude-code).

The takeaway: the Code tab is a precise, review-everything tool for the moments precision matters. It's worth knowing it exists. But you don't have to start there — and most days, you won't need to.
