---
title: "The Claude Desktop App at a Glance"
description: "A plain-language tour of the Claude desktop app's three tabs — Chat, Cowork, and Code — and which one to reach for, for a non-technical professor on Windows."
draft: false
---

The Claude desktop app is already on your Windows machine, so the first question is simply: now what? The app puts three different ways of working with Claude behind three tabs, and the names don't tell you much until someone explains them. This page does that — in plain language, with no jargon — so you know which tab to open before you start.

To launch the app, open it from the **Start menu** (search "Claude" if you don't see it pinned). You'll sign in with your Anthropic account the first time. Once you're in, you'll see the three tabs along the top: **Chat**, **Cowork**, and **Code**.

## The three tabs, in one breath each

Think of the tabs as three coworkers with very different job descriptions.

- **Chat** is a conversation. It's the same experience as the Claude website — you type, it answers. It has **no access to your files**.
- **Cowork** is an assistant that actually *does* multi-step work for you. It reads and writes the files in folders you connect, it can build things like spreadsheets and slide decks, and it works on its own once you approve a plan.
- **Code** is a hands-on assistant that edits files on your computer directly, while you approve each change as it goes. Despite the name, **no terminal or command line is required**.

### Chat — for thinking and asking

Reach for **Chat when you just want to ask, draft, or think out loud.** Explaining a concept for a lecture, sketching the outline of a memo, brainstorming exam questions, asking how a statistical method works — anything where you don't need Claude to touch your actual files.

Because Chat can't see your documents, it's also the lowest-stakes place to start. Nothing on your computer changes. The trade-off is that it can't pull a number from your spreadsheet or revise your syllabus in place — it only knows what you paste or type into the conversation.

### Cowork — for getting work done in your folders

Reach for **Cowork when you have a real task that spans several files or steps.** This is the assistant that does knowledge work for you: it reads and writes files in **folders you connect** (no manual uploading or downloading), it can build Excel files with working formulas and PowerPoint decks, and it can carry out a multi-step job from start to finish.

A few things make Cowork different from Chat, and worth understanding before you use it:

- **It shows you a plan and waits for your approval** before it acts. You stay in control.
- **It runs in an isolated virtual machine** — a sandboxed workspace separate from your Windows operating system — so its code and commands don't run loose on your computer.
- **You choose which folders it can see.** It only touches what you connect.
- **It asks before permanently deleting anything.**

This is the tab most of this branch is about — it's where an economics professor and department chair gets the most leverage without learning to code. The next page, [Meet Cowork](/ai/desktop/meet-cowork/), walks through it properly.

:::caution
Cowork uses more of your plan's usage than plain Chat, because it's doing more work behind the scenes. That's expected — it's the cost of having it run a whole task rather than answer one question.
:::

### Code — for editing files directly, with you watching

Reach for **Code when you want changes made directly to files and you want to see and approve each edit as it happens.** Code has direct access to your local files and shows you every proposed change as a visual **diff** — a side-by-side "before and after" — that you accept or reject. You're never handing over the keys; you're reviewing each change in real time.

Code is the more technical of the three, and this branch only gives you [a taste of it](/ai/desktop/a-taste-of-code/) — enough to know what it's for. You don't need it to get value from the app. If your work is editing data files, code, or scripts, it's there when you're ready.

:::note
On Windows, the Code tab's local sessions need **Git for Windows** installed (Macs usually already have it). You don't need to learn Git — it just has to be present. The taste-of-Code page covers this when it matters; you can skip it for now.
:::

## Which tab when — a quick rule of thumb

| If you want to… | Open |
| --- | --- |
| Ask a question, draft, or brainstorm | **Chat** |
| Have a whole task done across your files | **Cowork** |
| Edit specific files with each change approved | **Code** |

When in doubt, start in **Chat** to think the problem through, then move to **Cowork** when you're ready for Claude to act on it.

:::tip[See it on Anthropic's site]
When you open the app, the three tabs — **Chat**, **Cowork**, and **Code** — run
across the top of the window. Anthropic's [desktop
quickstart](https://code.claude.com/docs/en/desktop-quickstart) shows the layout and
walks through what each tab does.
:::

## A note for Windows users on plans

**Cowork and Code both require a paid plan.** The free plan excludes them. If you click into one of those tabs and Claude prompts you to upgrade, that's the plan gate working as intended — it's not a bug or an error with your install.

The entry paid plan is **Pro**, at about $17–$20 a month (roughly $17/month billed annually, $20 month-to-month). Pro includes Code, and higher tiers (Max, Team, Enterprise) include both Cowork and Code. You can check current details on the [pricing page](https://claude.com/pricing).

## One habit to carry into everything

Claude is genuinely useful across all three tabs, but it can also be confidently wrong. It can **fabricate citations, page numbers, quotes, and data values** that look entirely plausible. For an economist, that's the single most important thing to internalize: treat anything Claude produces — a reference, a statistic, a quoted passage — as a draft to verify against the original source, never as a finished fact. Trust nothing you haven't checked.

## Where to go next

- [Meet Cowork](/ai/desktop/meet-cowork/) — the heart of this branch, and the tab you'll use most.
- Anthropic's own [desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart) and the [install-the-desktop-app guide](https://support.claude.com/en/articles/10065433-install-claude-desktop) if you want to confirm setup details.

This branch focuses on **Cowork**, with a short taste of **Code** near the end. You won't need the command line at any point. If you ever want the deeper, terminal-based version of these tools, see Anthropic's [Claude Code quickstart](https://code.claude.com/docs/en/quickstart) — but it's entirely optional for what we're doing here.
