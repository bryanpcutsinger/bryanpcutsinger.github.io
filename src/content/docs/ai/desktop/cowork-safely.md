---
title: "How Cowork Works Safely"
description: "How Cowork's approval modes, folder permissions, and isolated workspace keep you in control, plus what a cautious academic should connect first."
draft: false
---

If you're a department chair handling student records, an instructor with unpublished
exam keys, or a researcher with data under review, the first question about an agent
that *reads and writes your files* is the right one: what can it actually touch, and
when does it act without me? This page answers that. Read it before you connect a real
folder in [Meet Cowork](/ai/desktop/meet-cowork/).

The short version: Cowork is designed to keep you in the driver's seat. It proposes a
plan and waits, it only sees folders you choose, it runs its own code in a sealed
workspace, and it cannot permanently delete a file without asking you first. Below is
what each of those means in plain terms.

## It shows you a plan, then waits

Before Cowork does real work, it lays out a **plan** — the steps it intends to take —
and waits for you to approve it. You're not handed a finished result you have to undo;
you see the intent first.

How tightly it checks in with you is governed by two modes:

- **Ask before acting (recommended).** Cowork pauses and asks for your go-ahead before
  taking actions. This is the mode a cautious user should stay in. You trade a little
  speed for the chance to read each step and say no.
- **Act without asking (riskier).** Cowork proceeds through its plan without stopping
  to confirm each action. It's faster, but you must supervise it actively, and you give
  up the per-step veto. Don't use this on anything you care about until you've watched
  Cowork work several times and trust what it's doing.

There's no rush to leave the recommended mode. "Ask before acting" is the right default
for grading, drafting a report, or anything touching real materials.

:::tip[See it on Anthropic's site]
Before Cowork acts, it lays out a **plan** and waits for your approval, with the
permission mode (Ask before acting / Act without asking) within reach. Anthropic's
[Get started with
Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)
walks through this approve-the-plan flow and the permission settings.
:::

## You choose what it can see

Cowork doesn't roam your whole computer. It works inside the **folders and connectors
you explicitly grant it** — nothing more. If you connect one folder, that folder is its
world; the rest of your drive, your email, and your other documents stay invisible to it
unless you connect them too.

This is the single most important lever you have. Treat connecting a folder as a
deliberate decision, not a default. A good first move is to connect a **practice folder**
— a *copy* of a few non-sensitive files — and learn how Cowork behaves there before you
ever point it at the real thing.

## It can't quietly delete your work

Cowork requires your **explicit permission before it permanently deletes any file**.
Deletion is treated as a special, high-consequence action — not something that can happen
as a quiet side effect of a larger task. Combined with starting on a copied practice
folder, this means an early mistake costs you nothing real.

## Its code runs in a sealed workspace

When Cowork needs to run code or a shell command — say, to compute something or build a
spreadsheet — it does that inside an **isolated virtual machine**, a separate sandboxed
computer that is walled off from your operating system. Code it runs there can't reach
into the rest of your machine. What Cowork can touch on *your* side is still just the
folders you connected; the VM is where its own computation happens, safely apart from
your system.

## One boundary to understand: network access and "egress"

Here's the caveat worth slowing down for, because it's easy to misread.

Cowork has controls over what can leave its sandbox over the network ("egress"
permissions). But those network controls **do not apply to the web fetch and web search
tools, or to MCPs** (the connectors that link Claude to outside services — including
Claude in Chrome).

:::caution
The network limits that protect Cowork's sandbox **do not cover web search, web fetch, or
MCP/connector tools**. In plain terms: if Cowork uses a tool that reaches out to the
internet or an outside service, information can leave through that path even when the
sandbox itself is locked down. **Don't assume sensitive text can't go anywhere just
because Cowork runs in an isolated workspace.** Treat anything you put in front of a
web-enabled or connector-enabled task as potentially leaving your machine.
:::

For a non-technical reader, the practical rule is simple: **don't paste or connect
sensitive material into a task that also uses web search, web fetch, or an outside
connector**. If a task needs the internet, keep confidential data out of it.

## What to keep out (for now)

Until you've used Cowork enough to trust the workflow, keep the genuinely sensitive
material out of any connected folder:

- **Student records and anything FERPA-covered** — grades tied to names, advising notes,
  disciplinary matters.
- **Unpublished data and work under review** — your own datasets, a manuscript out for
  refereeing, a colleague's confidential draft.
- **Anything confidential to the department** — personnel files, search-committee
  materials, budget detail you wouldn't email casually.

None of this is a permanent ban. It's a sequence: start on copies of low-stakes files,
keep "Ask before acting" on, watch how Cowork plans and acts, and widen what you connect
only as your comfort grows.

:::tip
Build a single `claude-practice` folder, drop in a few throwaway copies, and connect only
that for your first week. Everything you learn there transfers — without putting anything
real at risk.
:::

## The integrity rule that matters most for academics

Permissions protect your files. They do **not** protect the *truth* of what Cowork writes.
This is a separate, non-negotiable discipline.

:::danger
Claude can **fabricate citations, page numbers, quotes, statistics, and data values** —
confidently and in a format that looks correct. A made-up reference can read exactly like
a real one. **Nothing Cowork produces enters a syllabus, a problem set, a paper, a grant
application, or a department report until you have verified it against the original
source.** Check every citation, every quoted passage, every number against the actual
document or dataset — not against what Claude says the document contains. This holds no
matter how polished or persuasive the output looks.
:::

This standard is non-negotiable for academic work, and it applies identically whether
you use Cowork or the command-line tool. The convenience
of an agent that drafts a literature review or summarizes a dataset is real — and so is
its ability to invent a plausible source. Verification is your job, every time.

## Where this leaves you

Cowork's safety model is built on consent: it plans before it acts, it sees only what you
connect, it can't permanently delete without asking, and its own code runs sealed off from
your system. Your part is to use that model deliberately — start on copies, hold the
sensitive material back, stay in "Ask before acting," mind the network caveat, and verify
every fact before it counts.

With that settled, you're ready to put it to work. See
[Cowork for Economists](/ai/desktop/cowork-for-economists/) for concrete teaching,
research, and chair-admin tasks.

For Anthropic's own walkthrough of getting started and the permission settings, see the
[Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)
support article.
