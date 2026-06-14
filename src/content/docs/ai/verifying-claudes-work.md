---
title: "Verifying Claude's Work for Research"
description: "Turn the integrity cautions into a repeatable verification routine: check citations against the source, reconcile every number with your own output, count your sample at each step, and use a second tool to audit code."
draft: true
---

:::note
Reference — for when you're up and running. You don't need this to get started;
reach for it once you're using Claude Code on real empirical work.
:::

The [integrity page](/ai/trust-safety-integrity/) lays out the rules: verify
citations, verify numbers, protect your data. This post turns those rules into a
**routine** — a short, repeatable set of checks you run before any Claude-assisted
result leaves your machine. Think of it as the empirical-research equivalent of
proofreading: not optional, not occasional, but a fixed step in the workflow.

The discipline matters more here than almost anywhere else in the guide, because
this is the failure mode that can quietly end up in a published paper.

## Why a routine, not just vigilance

"Be careful" doesn't scale. Under deadline, vigilance is the first thing to slip.
A *routine* — the same handful of checks, every time — survives the deadline
because you don't have to decide to do it. Below is a four-part routine you can
adopt wholesale.

## 1. Cite from the source, never from Claude

Claude will produce citations that look impeccable and are entirely invented:
plausible authors, a real journal, a clean DOI, a page number — for a paper that
doesn't exist. It will also misattribute a real finding to the wrong paper.

The rule is absolute: **a citation enters your draft only after you've found it in
your reference manager or on the journal's site.** Not after Claude says it's sure
— asking it to double-check just produces a second confident answer.

:::danger
No citation, quote, page number, or DOI enters your work until you have confirmed
it against the original source. "Claude produced it and it looks right" is not
verification.
:::

A practical method: keep a sharp line between *"I verified this"* (you opened the
actual source) and *"this plausibly exists"* (Claude generated it). Only the first
belongs in a paper, a referee report, or a lecture. A reference manager with a
[Zotero integration](/ai/claude-md-and-memory/) helps here — it lets you pull real,
already-verified entries rather than trusting a hand-built one.

## 2. Reconcile every number with your own output

The same problem afflicts statistics. If a coefficient, an N, a mean, or a
*p*-value appears in your text, it must trace to output **your own code**
produced — not to a number Claude filled in to be helpful.

- Never let Claude **hand-type a number into a table.** Numbers come from a script
  that produces them; the table is built from that output.
- When Claude reports a result in prose ("the effect is about 0.3"), treat it as a
  claim to check against your regression output, not a fact.
- If the number in the text and the number from your code disagree, the code wins —
  every time.

## 3. Count your sample at every step

This is the quiet one. Ask Claude to clean or merge a dataset and it may drop rows
that don't match, or fill in missing values to make things "work" — silently
changing your sample and, with it, your results. A merge that should keep 10,000
rows and returns 9,640 changed your analysis whether or not you noticed.

So build counting into the work:

- **Insist on row counts** before and after every cleaning or merge step: *"Report
  the number of rows before and after, and tell me exactly which rows you dropped
  and why."*
- **Declare what a merge should produce** in advance — one-to-one, many-to-one —
  and check the result matches. (In Stata, `merge` reports `_merge`; in pandas, the
  `validate=` argument enforces the cardinality you expect. Ask Claude to use
  them.)
- **Never silently impute.** If values are missing, you decide what happens to
  them — not the tool, mid-task.

:::caution
A dropped or imputed observation you didn't authorize is a changed sample. Report N
at every step and account for every row, the same way you would if a research
assistant had done the cleaning.
:::

## 4. Audit code with a second, fresh check

The hardest thing to catch is a subtle bug in analysis code that runs cleanly and
produces a plausible-but-wrong number. The session that *wrote* the code is the
worst judge of it — it's already convinced. So bring in a second pair of eyes:

- **Open a fresh session** and ask it to review the script cold: *"Read
  `@analysis.R` with no prior context. What could be wrong? Where might it silently
  produce an incorrect result?"* A clean session isn't anchored on the first one's
  assumptions.
- **Use a dedicated audit tool.** Some economists have built structured code-review
  harnesses for exactly this. Scott Cunningham's
  [MixtapeTools](https://github.com/scunning1975/MixtapeTools) includes a
  "Referee 2" protocol that runs a systematic empirical-code audit — including
  cross-language replication — in a fresh Claude instance that has never seen the
  work. Tools like this formalize the "second check" instead of leaving it to
  memory.

:::note
External tools change; confirm any tool's current behavior and license against its
own page before relying on it for a real project. The principle — *a second,
independent check on analysis code* — holds regardless of which tool you use.
:::

## The routine, on one card

Keep this next to the [integrity checklist](/ai/trust-safety-integrity/):

- [ ] Every citation confirmed against the actual source — not against Claude.
- [ ] Every number in the text traced to my own code's output.
- [ ] Row counts reported and reconciled at every cleaning and merge step.
- [ ] Analysis code reviewed by a second, fresh check before I trust the result.

None of this is exotic — it's the verification a careful empiricist already does.
The only new wrinkle is that an AI assistant raises the *rate* at which
plausible-but-wrong material arrives, so the checking has to be just as
systematic.
