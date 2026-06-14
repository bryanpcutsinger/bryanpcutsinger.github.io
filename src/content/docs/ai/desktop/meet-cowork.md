---
title: "Meet Cowork"
description: "A plain-language introduction to Claude Cowork, the agent built into the desktop app that takes on multi-step knowledge work for you."
draft: false
---

You already know how to chat with Claude: you type a question, it answers, you type the next one. **Cowork** is the tab next to Chat in the desktop app, and it works differently. Instead of answering one prompt at a time, you hand it a *goal* and it carries out the multi-step work on its own — reading the files, doing the intermediate steps, and showing you the result.

Think of the difference this way. In **Chat**, you might ask, "What columns should a tidy expense spreadsheet have?" and then do the building yourself. In **Cowork**, you point it at a folder of PDF receipts and say, "Turn these into a tidy expense spreadsheet," and it reads each receipt, pulls out the dates and amounts, and assembles the spreadsheet for you — checking in along the way.

This page is the gentle introduction. For *how it asks permission and how to keep it safe*, see [Cowork Safely](/ai/desktop/cowork-safely/). For *concrete things to try*, see [Cowork for Economists](/ai/desktop/cowork-for-economists/).

## What Cowork actually does

Cowork is **agentic AI for knowledge work**, built right into the desktop app — no extra install, no terminal, nothing to configure at the command line. It's the same underlying engine as Claude Code (the developer tool some of your colleagues use), but with the technical parts stripped away. It's made for the kind of work a professor or department chair actually does: documents, spreadsheets, slide decks, and the tedious assembly in between.

A few things it can do that plain chat cannot:

- **Read and write files in folders you connect.** You don't upload files and download results one at a time. You connect a folder once, and Cowork reads from it and writes back to it directly. That's a big convenience when "the data" is a folder of twenty PDFs.
- **Build real spreadsheets and slide decks.** It can produce an Excel file with *working formulas* (not just a static table) and a PowerPoint deck — the kind of output you'd otherwise build by hand.
- **Run small bits of code on your behalf.** To do the work, it sometimes needs to run code or commands. It does this inside an **isolated virtual machine** — a sealed sandbox separate from your own operating system. You don't touch the code, and that code can't reach into the rest of your computer.

:::tip[See it on Anthropic's site]
You reach Cowork by clicking the **Cowork** tab at the top of the window (next to
Chat and Code). Anthropic's [desktop
quickstart](https://code.claude.com/docs/en/desktop-quickstart) shows the tabbed
layout.
:::

## A tiny example you'll recognize

Suppose you're chairing the department and you have a folder of conference-travel receipts saved as PDFs. The end-of-semester reimbursement summary is exactly the kind of chore Cowork is good at.

You connect that folder, then write something like:

> "Read every receipt in this folder. Build an Excel file listing the date, vendor, category, and amount for each, with a column that sums the total. Flag any receipt where the amount is unclear."

Cowork doesn't just start churning. It first shows you a **plan** — the steps it intends to take — and waits for you to approve it. Once you say go, it works through the receipts and hands you a spreadsheet with a live total formula. The "flag anything unclear" instruction matters: it surfaces the receipts that need your judgment instead of quietly guessing.

The same shape works for teaching ("turn this folder of lecture slides into a one-page study guide") and for research ("pull the summary statistics out of these three replication files into one comparison table"). You'll find more of these in [Cowork for Economists](/ai/desktop/cowork-for-economists/).

## Setting honest expectations

Cowork is genuinely useful, but it helps to know its edges going in.

**It plans, then asks.** Cowork shows you a plan and waits for approval before acting — it doesn't run off on its own by default. There are two modes: *Ask before acting* (recommended, and the right choice while you're learning) and *Act without asking* (faster but riskier, and it expects you to supervise). The whole approval model is covered in [Cowork Safely](/ai/desktop/cowork-safely/) — read that before you turn anything loose.

**Memory is limited to Projects.** If you work inside a **Project**, Cowork remembers context across your sessions there. In a standalone session outside a Project, it does *not* carry memory from one session to the next. If continuity matters, work inside a Project.

**It uses more of your plan than chatting does.** Because Cowork is doing many steps behind the scenes — reading files, running code, revising — it consumes more of your plan's usage than a plain back-and-forth chat. That's the cost of having it do the work rather than just describe it.

**It's desktop-only and needs a paid plan.** Cowork lives in the desktop app (not the website, not mobile) and is available on Pro, Max, Team, and Enterprise plans. The free plan doesn't include it.

:::caution
The convenience of "it built the whole thing" is also the risk: it's easy to accept output you haven't checked. Claude can **fabricate citations, page numbers, quotes, and data values** that look completely plausible. Treat anything Cowork produces — a stat in a spreadsheet, a reference in a memo, a number on a slide — as a draft to verify against the original source, never as a finished fact. This matters most in research, where a confidently wrong page number can survive all the way into a paper.
:::

## How it fits with the other tabs

The desktop app has three tabs, and it's worth keeping them straight:

- **Chat** — ordinary conversation. No access to your files. Best for thinking out loud, drafting prose, and asking questions.
- **Cowork** — the autonomous agent described here. Works in an isolated VM, takes a goal, does the multi-step work.
- **Code** — an interactive coding assistant with direct access to your local files, for when you're actually editing a project. That's a later page: [A Taste of Code](/ai/desktop/a-taste-of-code/).

If you've seen the command-line version of [Claude Code](https://code.claude.com/docs/en/quickstart), Cowork is that same idea made friendly: the same engine, the same care about reviewing changes, but without the terminal.

## Where to go next

Cowork rewards a little caution up front. The natural next step is to understand the approval model so you stay in control:

- [Cowork Safely](/ai/desktop/cowork-safely/) — how plans, approvals, and folder permissions keep you in charge.
- [Cowork for Economists](/ai/desktop/cowork-for-economists/) — concrete tasks across teaching, research, and chair work.

To read Anthropic's own introduction, see the official [get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) article, or the [Cowork product page](https://claude.com/product/cowork) for an overview.
