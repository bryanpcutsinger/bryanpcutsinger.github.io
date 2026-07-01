---
title: "Orchestration: agent teams and dynamic workflows"
description: The deep end — running many Claude agents in parallel for big, fan-out tasks like multi-file audits and literature sweeps, how agent teams differ from sub-agents, and what the speed buys and costs.
draft: false
---

This is the last chapter, and the most advanced. Everything before it has been about one
Claude working through one task while you review. Orchestration is what happens when one
worker isn't the right shape for the job — when the work splits cleanly into many pieces
that could all run at once. It's genuinely the deep end, and most of your work will never
need it. But it's worth understanding what's up here so you can recognize the rare task
that calls for it.

The honest framing first: you don't reach for this often, it costs much more than a normal
session, and it asks more of you as the reviewer, not less. Read this as a map of the
ceiling, not a daily habit.

## When one session isn't the right shape

Some tasks are a single line of reasoning — clean this dataset, draft this section, fix
this bug. One Claude, working start to finish, is exactly right, and that's most of what
you do.

Other tasks are wide rather than deep. They're made of many small, *independent* pieces
that don't depend on each other and could all happen in parallel. A few examples from
academic work:

- **A multi-file audit.** You have forty replication scripts and want each one checked for
  the same thing — hardcoded absolute paths, a missing random seed, a merge with no row-count
  check. Each file is its own little job; nothing about checking script twelve depends on
  what you found in script three.
- **A literature or data sweep.** You want twenty candidate papers each read and summarized
  against the same questions, or fifteen FRED series each pulled, described, and sanity-checked
  the same way. Same task, run many times over different inputs.
- **A migration.** You're moving a course's problem sets from one format to another, or
  renaming a variable consistently across a whole project. The same mechanical change,
  repeated across many files.

The tell is always the same: *the same kind of work, repeated over many independent
inputs.* Run those one at a time in a single session and you wait for each to finish
before the next begins. Run them in parallel and they finish in roughly the time of the
slowest one. That's the entire appeal — wall-clock speed on work that fans out.

## Two steps up from sub-agents

You met [sub-agents](/ai/sub-agents/) in the previous chapter: separate Claude workers you hand a
focused job so their work doesn't clutter your main conversation. Sub-agents report to
*you* and don't talk to each other — like sending two research assistants off to separate
libraries, each returning a memo to your desk. Above them sit two tools that solve
different problems.

A **dynamic workflow** is fan-out at scale. You hand Claude the whole wide job — "audit
all forty scripts for these three problems" — and it plans the split itself, runs tens to
hundreds of workers in parallel, and folds the checked results back into one answer. The
useful extra isn't just headcount: workflows can run **adversarial verification** — other
agents actively try to refute what one agent found before it enters the final result. The
built-in `/deep-research` workflow works this way for literature questions: it fans out
searches, has agents vote on each claim, and returns a cited report with unsupported
claims filtered out — exactly the safeguard you want where a [fabricated citation](/ai/writing-papers-and-slides/)
is the main risk.

An **agent team** is a different shape: not hundreds of workers, but a handful — think
three to five — of full Claude sessions that can **message each other** while they work,
coordinating through a shared task list, with one acting as lead. Teams earn their keep
when the workers need to *argue*, not just divide the work — the signature use is a
competing-hypotheses debate, which maps naturally onto empirical work: give one teammate
the identification strategy, another the data construction, a third the robustness checks,
and have each try to break what the others conclude — instead of one Claude anchoring on
the first plausible story.

So the rule of thumb: **sub-agents** for "go find this and report back," **dynamic
workflows** for sheer scale, **agent teams** when the workers need to challenge each
other. And for long but essentially *sequential* work — a replication you push to
completion — a single persistent session working toward a defined finish line (the
`/goal` feature) is cheaper than any fan-out.

:::note
Mechanics, as of mid-2026: the keyword `ultracode` (or "use a workflow") triggers a
dynamic workflow and `/workflows` watches it; agent teams are experimental and off by
default. These specifics move quickly — treat the *concepts* here as durable and confirm
the commands and limits against the current docs when you actually need them.
:::

## When fan-out is worth it — and when it isn't

Parallelism is a trade, and it's worth being clear-eyed about both sides.

What you buy is time. A sweep that would take an afternoon run one item at a time can
finish in a fraction of it when the items run together. On a true fan-out task — many
independent pieces, each non-trivial — that's a real saving.

What you pay is, roughly, several times the tokens of a single session, because you're
running several Claudes at once: each teammate in an agent team is a full session, and
dynamic workflows cost the most of all — enough that Claude asks for confirmation before
your first run. Treat the multiple as a ballpark; gauge a workflow on a small slice before
committing the whole job, and watch your own `/usage` (see [models, cost & usage
limits](/ai/models-cost-and-limits/)). You're spending money and your usage allowance to buy speed — a fine trade
when the speed matters and a poor one when it doesn't.

So the question to ask before fanning out is narrow: *is this actually wide, and do I
actually need it fast?* A few honest checks:

- **Are the pieces really independent?** If checking file twelve depends on what file
  three turned up, it isn't fan-out — it's one ordered task wearing a costume, and a single
  session will do it more cheaply and with less to untangle.
- **Is each piece big enough to be worth its own worker?** Spinning up a fleet to make ten
  one-line edits costs more than it saves. The overhead only pays off when each piece is
  substantial — get the single-worker version of the task right first, *then* parallelize
  it, not the other way around.
- **Do you need it done faster than one session can manage?** If you're not actually
  waiting on the result, the parallelism is buying speed you don't need at a price you're
  still paying.

When the answer to all three is yes — a big, wide, time-sensitive task — fan-out earns its
cost. When any is no, stay with one session.

## You're still the reviewer — only more so

The discipline that runs through this whole guide doesn't relax at the top; it gets
harder. With one Claude you read one stream of work and approve one set of diffs. With a
fleet you have many streams of work happening at once, and the same rule still
holds — [verify everything it produces](/ai/what-is-claude-code/) — but there's now more of
it, arriving faster, and you didn't watch each piece happen.

That's the real reason orchestration is the deep end. Not the commands, which you can look
up, but the review burden. Forty audited scripts is forty findings to spot-check; twenty
summarized papers is twenty places a fabricated claim could hide. Adversarial verification
inside a workflow narrows the review — agents refuting each other catch errors a single
pass won't — but it doesn't replace it. The verification is still on you, and it doesn't
parallelize. A practical way to keep it honest is to give the work a check the fleet
itself can run — a script that confirms every file still parses, a test that has to
pass — so you're reviewing against something concrete rather than trusting volume.

## Where this sits in the guide

This is the ceiling, and you reach it rarely. The everyday tools — a good
[CLAUDE.md](/ai/claude-md-file/), the [work loop and plan mode](/ai/controlling-claude/), choosing a
[model](/ai/models-cost-and-limits/) — carry the overwhelming majority of real teaching and research work. Agent
teams and workflows are for the genuine fan-out task that comes along now and then: the
big audit, the broad sweep, the project-wide migration that's both wide and urgent.

Knowing the deep end exists is most of the value. When a task is plainly wide,
independent, and worth the cost, you'll recognize it — and you'll know to confirm the
current mechanics, fan the work out, and then settle in to do the part that was always
yours: reviewing the result. That's where the guide ends and your own work begins. The
[overview](/ai/) ties the whole path together.
