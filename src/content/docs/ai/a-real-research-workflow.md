---
title: "A Real Research Workflow, Start to Finish"
description: "One end-to-end example of using Claude Code on an empirical paper — from orienting in the literature, to drafting a section, to stress-testing the argument, to verifying every claim — so you can see how the pieces fit together."
draft: true
---

:::note
Reference — for when you're up and running. You don't need this to get started; it
ties the individual skills together, so it lands best once you've tried a few.
:::

The individual skills in this guide — reading files, prompting well, reviewing
edits, protecting your data — are easier to understand once you see them strung
together on something real. So here is one full loop: how you might use Claude Code
across the life of a small empirical project, from the first literature search to a
verified draft section. It's a composite, not a magic button. The point is to show
*where* the tool helps and, just as important, where you stay firmly in charge.

The running example: a short empirical paper asking whether a state-level policy
change moved some outcome. Swap in your own question as you read.

:::note
This post assumes you've worked through the basics — running a session, pointing
Claude at a folder, reviewing diffs, and the [integrity
rules](/ai/trust-safety-integrity/). It ties them together rather than introducing
them.
:::

## 1. Get oriented in the literature

Start read-only. Drop a few papers you've already collected into the project
folder and ask Claude to help you map the terrain:

```
Read the PDFs in @lit/ and give me a one-paragraph summary of each, then a short
synthesis: where do these papers agree, where do they conflict, and what question
is still open?
```

This is triage, not a literature review. You get a map of what you have so you know
where to read closely — and Claude's synthesis is a *starting hypothesis about the
literature*, not a citable claim.

:::danger
Claude will invent citations that look perfect — real-sounding authors, a clean
DOI, a plausible journal — for papers that do not exist. Every reference it
mentions gets checked against your reference manager or the journal's site before
it enters anything. Never let it supply a citation you haven't verified.
:::

## 2. Profile the data

Before any modeling, understand what you actually have. Point Claude at the
dataset and ask it to describe it — columns, units, coverage, missingness, anything
odd — exactly the read-and-analyze move from [Reading &
Analyzing](/ai/reading-and-analyzing/):

```
Describe @data/states_panel.csv: the unit of observation, time range, treatment
and outcome variables, and how much is missing. Don't change anything.
```

You're looking for the shape of the data and any landmines (a discontinued series,
a coding change mid-panel) before you build on it.

## 3. Draft a section — with you as the editor

Now let it write, but narrowly. A good prompt names the section, the length, the
claims it may make, and the ones it may *not*:

```
Draft the "Data and Setting" section, about 400 words. Describe the panel and the
policy change. Use only facts from @data/codebook.md and my notes in @notes/ —
do not state any statistic that isn't in those files. Flag anything you're unsure
of rather than filling it in.
```

That last instruction is the whole game: you're telling Claude to surface its
uncertainty instead of papering over it with a confident guess. Read the draft as
a first pass you'll edit, reviewing the diff the way you'd read a co-author's
tracked changes.

## 4. Stress-test the argument — the expert critic

Here's a use that's easy to miss and genuinely valuable: turn Claude from a drafter
into a **skeptical referee.** Ask it to attack your own argument:

```
Read @drafts/identification.md. Play a tough but fair referee for a field journal.
Where is the identification weakest? What's the most damaging objection, and what
would I need to show to answer it?
```

You won't agree with all of it, and some objections will miss — but a few will be
exactly the ones a referee would raise, and finding them now is far cheaper than
finding them in a rejection letter. This is one of the highest-leverage things the
tool does: a tireless, fast critic that costs nothing to consult and never gets
tired of your paper.

:::tip
Critique is read-only — Claude is reacting to your draft, not changing it. So
there's no risk in asking, and no reason to hold back. Push it: *"What would make a
referee reject this outright?"*
:::

## 5. Verify everything that will be published

Before any of this leaves your machine, every factual claim gets checked — this is
the workflow from [Verifying Claude's Work](/ai/verifying-claudes-work/):

- **Citations** against your reference manager or the journal, not against Claude's
  say-so.
- **Numbers** against output *your own code* produced — never a figure Claude
  typed into the text.
- **Sample claims** ("we drop 312 observations") against the actual row counts your
  cleaning script reports.

If you let Claude touch the analysis code, have a *second*, fresh check it — a
clean session, or a dedicated audit tool — rather than trusting the same session
that wrote it.

## 6. Keep a record of what changed

As you go, keep a short log of what Claude did and what you decided — the basis for
a transparency note or replication appendix later. That's its own short post:
[Reproducibility & Research Logs](/ai/reproducibility-and-logs/).

## The shape of the loop

Step back and notice the pattern: **read freely, draft narrowly, critique
aggressively, verify everything.** Claude does the legwork at each stage — the
reading, the first draft, the adversarial pass — and you supply the judgment about
what's true, what's good, and what's next. That division of labor is the whole
method. The tool makes you faster at the parts that are mechanical and leaves you
the parts that are actually research.
