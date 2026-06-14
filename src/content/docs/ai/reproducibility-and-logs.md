---
title: "Reproducibility & Research Logs"
description: "CLAUDE.md tells Claude what to do; a research log records what it did. How to keep a running account of changes and decisions you can fold into a replication appendix or transparency statement."
draft: true
---

:::note
Reference — for when you're up and running. You don't need this to get started;
come back to it when you start keeping a record of real research work.
:::

A [CLAUDE.md](/ai/claude-md-and-memory/) file is *instructions in*: it tells Claude
how you work before a session starts. This post is about the other direction —
*record out*: keeping a running account of what Claude actually changed and why,
as you go. For an economist, that record isn't bureaucratic overhead. It's the raw
material for a replication appendix, a transparency statement, or simply your
own ability to answer "wait, why did we do it that way?" three months from now.

## Why a log, when the files are right there?

Your project folder shows you the *end state* — the current version of every file.
What it doesn't show is the **path**: which decisions were made, what was tried and
rejected, why a variable is defined the way it is. When an AI assistant is making
many small changes quickly, that path is exactly what gets lost, and it's exactly
what a careful reader (a referee, a replicator, future-you) will want.

A good research log answers three questions the final files can't:

- **What changed?** Which files, which steps, in what order.
- **Why?** The reasoning behind a judgment call — why these rows were dropped, why
  this deflator, why this specification.
- **What did we *not* do?** The alternative that was considered and set aside, so
  nobody re-litigates it later.

## The simplest version: a CHANGELOG file

You don't need tooling. Keep a plain Markdown file in the project — call it
`CHANGELOG.md` or `research-log.md` — and have Claude append to it as you work. A
prompt as simple as:

```
Append a dated entry to @research-log.md summarizing what we changed this session
and why — the cleaning steps, any rows dropped (with counts), and decisions I made.
Keep it factual and brief.
```

…turns the session into a durable record. Read the entry before accepting it — it's
a claim about what happened, and like any Claude output it should match reality.

A useful entry looks like:

```markdown
## 2026-06-13

- Cleaned `raw/states.csv` → `processed/states_clean.csv`.
  Dropped 312 rows missing the outcome variable (14,320 → 14,008). Counts logged.
- Chose the CPI-U (1982–84 = 100) to deflate; rebased the index to 2017.
- Considered dropping pre-1990 data for coverage gaps; kept it, flagged the gap
  instead.
```

Notice it records the **row counts** and the **decisions**, not just "cleaned the
data." That's what makes it useful later.

## What belongs in the log

Bias toward recording the things that would be hard to reconstruct:

- **Sample construction.** Every drop, filter, and merge, with N before and after.
  This is the heart of a transparency statement — see [Verifying Claude's
  Work](/ai/verifying-claudes-work/) for why counts matter so much.
- **Data provenance.** Where each input came from, its units, vintage, and when you
  pulled it.
- **Judgment calls.** Deflators and base years, specification choices, how you
  handled outliers or missing values — anything a replicator couldn't guess.
- **Things you tried and abandoned.** The road not taken, so it isn't taken again
  by accident.

What *doesn't* need to be in a hand-kept log: the mechanical line-by-line edits.
Those are better captured by version control (below).

## Toward a replication appendix

The payoff comes at write-up. A log kept this way is most of a **replication
appendix** already: a clean narrative of how you got from raw data to results, with
the sample-construction counts a referee will ask for. Late in the project you can
ask Claude to help shape it:

```
Read @research-log.md and draft a replication-appendix section: data sources,
sample construction with counts, and the key processing decisions, in order.
```

As always, you verify the result against what actually happened — the log is a
record, not a substitute for knowing your own project.

## The proper tool, noted for later: version control

A hand-kept log captures *decisions and reasoning*. The mechanical record of *every
change to every file* is the job of **version control** — usually **Git** — which
keeps a timestamped history you can inspect and roll back. It's genuinely worth
learning when you're ready, and it pairs naturally with a research log: Git records
*what* changed line by line, the log records *why*.

:::note
You don't need Git to start. For now, **Dropbox version history** plus a written
research log already give you a real, auditable trail. Git is the next step up, not
a prerequisite — the same "start simple, add tools later" stance as the rest of
this guide.
:::

A log costs you a minute at the end of a session and saves you an afternoon of
reconstruction later — and for an economist, it's the difference between "trust
me" and a result someone else can actually reproduce.
