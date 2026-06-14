---
title: "First Cowork Task (0:15–0:45)"
description: "Run one concrete Cowork task end to end on a practice folder, with a close look at the moment you approve the plan."
draft: false
---

This segment is where Cowork stops being an idea and becomes a thing you have done. The goal is modest on purpose: pick one real folder, ask for one useful deliverable, and walk through the full loop — request, plan, **approval**, work, and a check of the result. The single habit worth carrying out of these thirty minutes is the pause at the plan: reading what Cowork intends to do *before* you let it act.

If you have not yet opened the app and connected a folder, [Session 1: Orientation](/ai/desktop/session-1-orientation/) covers that. This page assumes the desktop app is open and a practice folder is ready.

## The goal for this segment

**Timebox: roughly 30 minutes (0:15–0:45).** Produce one tidy deliverable from a folder of messy source files, and in doing so, learn the rhythm of working with Cowork: you describe the outcome, Cowork proposes a plan, you approve, it works, you check. By the end you should be able to repeat that loop without help.

## The exercise

A good first task reads a folder of mixed material and produces something clean and reviewable. The recommended one:

> *Read this folder and turn the PDFs and notes into a tidy one-page summary, plus a spreadsheet listing the key items.*

That single request exercises the parts of Cowork you most want to see: it reads files in a folder you connected (no uploading), it can build a real spreadsheet with working formulas, and it produces output concrete enough to judge at a glance. The source folder can be whatever you actually have on hand — a stack of conference PDFs, a set of meeting notes, scanned committee documents, or a pile of student feedback.

:::tip[For the facilitator]
Pick the exercise to fit the files she actually brought, not the demo in your head. A chair who arrived with budget memos should summarize budget memos; someone with a folder of seminar papers should summarize those. The task above is a template — swap the nouns. If nothing was brought, a folder of two or three short PDFs you supply works fine.
:::

## The reference loop

### Open Cowork and connect the folder

In the desktop app, switch to the **Cowork** tab. Connect the practice folder — the folder you choose is the only place Cowork can read or write. Connecting a folder is how Cowork gets at your files; there is no separate upload or download step.

:::caution
Connect a *specific* folder, not your whole Documents directory or your desktop. Cowork can only touch what you connect, so a narrow folder is a real safety boundary. [Working safely with Cowork](/ai/desktop/cowork-safely/) covers the reasoning; the short version is: scope it tight.
:::

### Write a clear, specific request

Type the request in plain language, but be specific about the *outcome* you want. "Summarize this stuff" is vague; the template above names two concrete deliverables (a one-page summary and a spreadsheet of key items), which gives Cowork something definite to plan toward. You do not need technical wording — describe the result the way you would to a capable research assistant.

### Read the plan it proposes

This is the part to slow down for. Cowork does not just start changing things — it shows you a **plan** of what it intends to do and waits for your approval. Read it. The plan will say, in effect, which files it will open, what it will produce, and where it will write the output. You are checking that it understood the task and that nothing in the plan surprises you (for example, it should not propose touching files outside the folder you connected).

:::tip[For the facilitator]
Narrate this step out loud — it is the whole point of the segment. Say something like: "Notice it stopped and asked. This is the moment you read before you approve." On the "Ask before acting" mode (the recommended one), this pause happens every time. Make sure she sees the plan, not just the result.
:::

### Approve, and watch it work

Once the plan looks right, approve it. Cowork carries out the work — reading the files, drafting the summary, assembling the spreadsheet. It runs the actual file-reading and any code in an **isolated virtual machine**, separate from your operating system, and it only touches the folder you connected. You can watch it proceed; there is nothing you need to do while it works.

### Open and check the result

When it finishes, open the output files directly. Read the one-page summary and skim the spreadsheet. Do they actually reflect the source material? This check is not a formality.

:::caution
Claude can fabricate — citations, page numbers, quotes, figures, dates. A summary that *reads* authoritative can still misstate what a document said. Spot-check the summary and the spreadsheet against the original files before you trust or forward anything. For research material especially, verify every claim against the source, not against Cowork's restatement of it.
:::

## Give feedback and iterate

The first result is a draft, not a verdict. If the format is wrong or something is missing, just say so in plain language and let Cowork revise:

> *Redo the summary as bullet points instead of paragraphs.*

> *Add a column to the spreadsheet for the date of each item.*

> *The summary missed the third PDF — please include it.*

Each revision goes through the same loop: Cowork proposes what it will change, you approve, it works, you check again. Iterating this way — small, specific corrections — is the normal mode of working, and it is faster than trying to write one perfect request up front.

:::tip[See it on Anthropic's site]
Watch for the moment Cowork shows its **proposed plan** with an **Approve** control —
nothing changes in your folder until you click it. Anthropic's [Get started with
Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)
shows the same flow.
:::

## What just happened (worth saying out loud)

Three things are worth naming, because they are the reasons Cowork is safe to use this way:

- **It asked first.** On the recommended mode, Cowork showed a plan and waited. Approval is yours to give or withhold, every time.
- **It stayed in its lane.** It only read and wrote inside the folder you connected. Nothing else on the computer was in reach.
- **It ran in a sandbox.** The work happened in an isolated virtual machine, not directly on your operating system.

:::tip[For the facilitator]
Protect the full thirty minutes for this — it is the heart of the day. If Cowork stalls or the result is off, simplify the request rather than debugging (e.g. "just summarize the two shortest PDFs for now"). Keep an eye out for over-broad folder connections; if she connected something large or sensitive, pause and re-scope before approving anything. The win condition is that she ran the loop herself and read the plan before approving — not that the deliverable is polished.
:::

## Where to next

Up next, the task gets tailored to her actual work — a research or teaching deliverable — in [Session 3: Research or Teaching](/ai/desktop/session-3-research-or-teaching/).

For more worked examples of the request-plan-approve loop, see Anthropic's [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) and the [common workflows](https://code.claude.com/docs/en/common-workflows) reference.
