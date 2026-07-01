---
title: Sub-agents
description: What sub-agents are — separate Claude workers you hand a focused job — and how to use them to keep your main session clean.
draft: false
---

By the time you've worked through [controlling Claude](/ai/controlling-claude/), you know that a session's
memory — its context window — is finite, and that a long, wandering conversation
eventually gets crowded. Some tasks are crowding by nature: searching a folder of two
hundred files to find where a variable is defined, reading a long appendix to extract one
table, scanning a literature folder for every paper that mentions a method. The *answer*
is short. The *digging* is enormous. A **sub-agent** is how you do the digging somewhere
else, so only the answer comes back.

## What a sub-agent is

A sub-agent is a separate Claude worker that your main session spins up to handle one
self-contained job. It gets its own fresh context window, does the task, and reports back
a summary — and then it's gone. The hundreds of files it read, the dead ends it went
down, the half-page of notes it took along the way: none of that lands in your main
conversation. Only the result does.

Think of it as sending a research assistant down to the archives. You don't want them to
narrate every box they open and every folder they set aside — you want them to come back
and tell you what they found. The main session stays focused on the work *you're* doing;
the sub-agent absorbs the mess of getting there.

The point is keeping your main context clean. A search that would otherwise fill half
your window with file contents you'll never look at again instead costs you a few lines
of summary — leaving room, and Claude's attention, for the actual task: the paper you're
drafting, the script you're debugging, the analysis you're reasoning through.

## The built-in ones

You don't have to define a sub-agent to use one. Claude ships with three general ones it
reaches for on its own, and the two you'll notice most are **Explore** and **Plan**.

- **Explore** is the one Claude sends to look around. It runs on a fast model and is
  read-only — it can't change anything. When you ask "where does this project read in the
  raw data?" or "which of these files defines the sample filter?", Claude often dispatches
  an Explore sub-agent to comb the folder and come back with the answer and the relevant
  file paths — instead of pulling every file it opened into your session.
- **Plan** is the one that thinks through an approach before any work happens. It's the
  engine behind the planning step you met in [controlling Claude](/ai/controlling-claude/): it studies the
  task, weighs how to tackle it, and hands back a plan for you to read and approve. The
  exploring and deliberating happen off to the side; what reaches you is the plan itself.

(The third, a **general-purpose** worker with full tools, handles delegated multi-step
jobs.)

You'll frequently see Claude use these without being told to — it'll mention that it's
exploring or planning. That's the mechanism working as intended. Knowing it's there mostly
helps you *ask* for it when Claude doesn't reach for it on its own.

:::caution
Explore and Plan don't load your `CLAUDE.md` — the rules you wrote there don't travel with
them. If a convention matters for the job ("never touch anything in `raw/`", "the sample
starts in 1959"), restate it in the request itself rather than assuming the sub-agent
knows it.
:::

## Invoking one and reading what comes back

Most of the time, the right move is to describe the job and let Claude decide whether to
hand it off. Phrasing a request as a clean, self-contained task is the nudge:

```
Search the whole project and tell me every script that loads the CPI series,
with the file path and the line. Don't change anything.
```

That's a perfect sub-agent task — lots of reading, a short answer, nothing to modify. You
can also ask directly: *"Use a sub-agent to find…"* or *"Explore the folder and report
back…"* Claude will dispatch one and return its summary. By default your session waits
for the result; if you'd rather keep working while it digs, say "run it in the
background" — the `/agents` command shows what's running.

You can also define your own sub-agents — a named worker with its own instructions and a
restricted set of tools, created through that same `/agents` command. The official docs'
example: a data-analysis sub-agent whose database access is *mechanically* limited to
read-only queries — "read the data, never alter it" enforced by the tool, not by a polite
request. That style of guardrail gets its own treatment in a [later chapter](/ai/rules-hooks-and-skills/).

What comes back is a report, not a finished change — and that's the part to slow down on.
A sub-agent did its reading in a context you never saw, so you can't watch its reasoning
the way you watch a normal turn. Treat its summary as a claim to check, not a conclusion
to trust. If it says a variable is defined in one file, open that file. If it found three
papers that use a method, the citations still need verifying against the actual sources —
the [same discipline](/ai/what-is-claude-code/) that governs everything Claude produces.
The sub-agent saved you the digging; it didn't relieve you of being the reviewer.

:::caution
A sub-agent reports back in its own words. It can summarize confidently and still be
wrong about a detail — a path, a line number, which file does what. The summary is a lead
to confirm, not a fact to file away.
:::

## When it helps, and when it's overkill

The shape that calls for a sub-agent is consistent: **big input, small output, no
back-and-forth needed.** A few that fit cleanly:

- Finding where something lives in a large, unfamiliar project — a function, a setting, a
  data import — without reading the whole thing into your session.
- Sweeping a folder of PDFs or notes for everything relevant to one question, and getting
  back a short list.
- Drafting one self-contained section — a literature paragraph, a methods note, a problem
  set's solution key — as a discrete chunk you'll then read and fold in.

And the cases where it's the wrong tool:

- **A quick task in a small folder.** If Claude can just read the three files and answer,
  a sub-agent only adds overhead. The main session was never going to get crowded.
- **Anything iterative.** A sub-agent does its job and reports once; it isn't a
  conversation. If you expect to look at a draft, react, and revise together, that belongs
  in your main session where you can steer turn by turn.
- **Work you need to watch.** When you want to see each edit as it's proposed and approve
  it, keep it in front of you. A sub-agent's value is *hiding* its intermediate work —
  which is exactly wrong when the intermediate work is what you're reviewing.

The honest test: would the digging have crowded your context, and is the answer something
you can verify after the fact? If yes to both, hand it off. If not, just ask in the main
session.

## A note on cost

Spinning up a sub-agent isn't free. It's a second worker with its own context, doing its
own reading, so a task run through a sub-agent generally uses more of your usage than the
same task answered inline would. And the isolation isn't total: each summary a sub-agent
sends back still lands in your main conversation, so dispatching many of them fills your
context anyway while multiplying token use. For one or two focused errands that's a fair
trade — a bit more spending for a clean main context — but it's a real cost, worth knowing
before you reach for one reflexively. How that spending works, and the limits it counts
against, is the subject of the [models, cost & limits](/ai/models-cost-and-limits/) chapter.

---

A sub-agent is one helper you send off and get a report from. The deep end of this idea is
several agents working at once on a big, fan-out task — a team rather than an errand — and
that's its own [chapter](/ai/orchestration-and-workflows/) later in the guide. Sub-agents are the building block it's
made of, so this is the right place to have started.
