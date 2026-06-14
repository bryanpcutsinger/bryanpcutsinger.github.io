---
title: "Safety, Integrity & Next Steps (1:35–2:00)"
description: "Consolidate the safety and integrity rules for using Claude on the desktop, then leave with practical habits and a clear next step."
draft: false
---

This is where everything comes together. You have seen Chat, [Cowork](/ai/desktop/meet-cowork/), and a [taste of Code](/ai/desktop/a-taste-of-code/). The tools are genuinely useful, but they act on your files and your reputation. The last half hour is for two things: pinning down the rules that keep you safe, and agreeing on one concrete thing to try on your own this week.

Nothing here is new. It is the same guardrails you saw in [Cowork safely](/ai/desktop/cowork-safely/), gathered in one place so you leave with a checklist rather than a memory.

## The safety rules, in one place

These hold whether you are drafting a syllabus, cleaning a dataset, or reconciling a teaching-load spreadsheet for the department.

### Keep "Ask before acting"

Cowork has two approval modes. **Ask before acting** (recommended) shows you a plan and waits for your approval before it does anything. **Act without asking** lets it run on its own, which is riskier and means supervising closely. For everything you do as a professor and chair, stay in *Ask before acting*. The plan it shows you is your chance to catch a misunderstanding before any file changes.

In the Code tab the equivalent default is **Ask permissions**, and each change arrives as a visual diff you accept or reject. There is also *Auto accept edits* and *Plan mode*. Default to reviewing.

### Choose folders and connectors deliberately

Claude can only touch what you connect. That is the most important safety setting you have. Connect the specific project folder for the task in front of you, not your entire Documents folder or your whole cloud drive. The same goes for connectors (email, calendar, drives): turn on only what a task actually needs, and turn it off when you are done. A small, deliberate footprint means a small blast radius if something goes wrong.

### Deletes require explicit permission

Cowork will ask for explicit permission before it permanently deletes any file. Read those prompts carefully rather than clicking through. Permanent means permanent.

### Don't assume pasted data can't leave

One caveat to surface plainly: the network-egress permissions that govern Cowork's isolated environment **do not apply to the web fetch and web search tools, or to MCP connectors** (including Claude in Chrome). So if you paste sensitive text and a task then performs a web search, you should not assume that text is sealed off. The safe habit: do not paste anything you would not be comfortable leaving your machine, and be especially careful with anything confidential. Which leads to the rule that matters most for an academic.

:::danger[Integrity is non-negotiable]
Claude can produce text that *looks* authoritative and is wrong. It can fabricate citations, invent page numbers, misquote a source, and generate plausible-but-false statistics or data values. For an economics professor and chair, that is a career risk, not a quirk.

- **Verify every citation, quote, number, and page reference against the original source** before it goes into a paper, a referee report, a memo, or a slide. Nothing ships from the model's say-so.
- **Keep student records out.** Grades, advising notes, anything FERPA-protected — do not paste it and do not connect folders that contain it.
- **Keep under-review and confidential work out** of tools that may reach the network — manuscripts you are refereeing, tenure files, personnel matters.
- **Never let it overwrite raw data.** Work on copies. Treat original datasets as read-only.
:::

For the fuller treatment, see [How Cowork Works Safely](/ai/desktop/cowork-safely/).

## Habits that make this stick

The difference between "I tried that AI thing once" and "this saves me real time" is a few small habits.

### Start with copies and a practice folder

For your first weeks, point Claude at a **practice folder** — a copy of a syllabus, a copy of a dataset, a duplicate of last year's schedule spreadsheet. You get the full experience with none of the risk. When you trust the workflow, graduate it to real files, still working on copies of anything irreplaceable.

### Use Projects for ongoing work

Memory persists **within Projects**, not across standalone sessions. So for anything recurring — your spring micro course, a working paper, the annual assessment report — put it in a Project. Claude remembers the context (the course, the dataset, the formatting conventions) instead of starting cold each time. A one-off question can stay a plain chat; an ongoing job belongs in a Project.

### Cowork costs more, so reach for the right tab

Cowork uses more usage than plain chat because it is doing real work in the background. Use Chat for quick questions and thinking-out-loud; reach for Cowork when you actually want files produced or changed.

### Treat the pre-read as reference

You do not need to memorize any of this. Revisit the pages as topics come up:

- [The desktop app](/ai/desktop/the-desktop-app/) — what the three tabs are for.
- [Meet Cowork](/ai/desktop/meet-cowork/) and [Cowork for economists](/ai/desktop/cowork-for-economists/) — what to actually do with it.
- [Cowork safely](/ai/desktop/cowork-safely/) — the full safety walkthrough.

## Read deeper on Anthropic's site

When you want more than this guide covers, these are the sources to trust:

- [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) — the official, non-technical starting point.
- [Best practices](https://code.claude.com/docs/en/best-practices) — how to get good results and avoid common mistakes.
- [Release notes](https://support.claude.com/en/articles/12138966-release-notes) — what is new, since this space moves quickly.

:::tip[For the facilitator]
Leave real time here for her own questions — this is the part she will remember. Then close on one concrete commitment: agree on **a single task she will do solo this week** (a practice-folder Cowork task is ideal — reformat a CV, draft a problem set, tidy a copied spreadsheet). Point her to the [Cowork get-started article](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) as her safety net, and confirm she is on a paid plan so the Code and Cowork tabs are actually available.
:::

## You're ready

You know what the three tabs do, when to reach for each, how to keep Claude on a short leash, and the one rule you can never bend — verify everything that carries your name. That is genuinely enough to be self-sufficient. The rest is practice.

Pick one small task this week, work on a copy, and review what it proposes before you accept. Come back to these pages whenever a question comes up:

- [Start here: the desktop overview](/ai/desktop/)
- [Cowork for economists](/ai/desktop/cowork-for-economists/)
