---
title: Models, cost, and usage limits
description: Choosing a model and managing what it costs — the model tiers, reasoning effort and fast mode, the two billing models, session and weekly limits, and the habits that keep usage down.
draft: false
---

Once you can [steer a session](/ai/controlling-claude/), the next thing worth understanding is what each
session costs — in money or in your usage allowance — and the few knobs that move that
cost. None of this is hard, and most of it comes down to two choices you make casually
many times a day: which model answers, and how much room you give it to think.

:::note[Verify the moving parts]
Prices, plan names, usage limits, and the exact model lineup change often. Everything
below describes the *structure* — how these pieces fit together — which is stable. Any
specific number is given as "as of mid-2026," and you should confirm the current figures
against Anthropic's own docs before relying on them.
:::

## Choosing a model

Claude comes in a few tiers, and they trade speed and cost against raw reasoning power.
You don't need to memorize the lineup; you need a rough sense of which to reach for. As
of mid-2026 the four you'll meet are, from most to least powerful:

- **Fable** — the top of the line, for the hardest and longest-running autonomous work.
  It's never the default; early on you can safely ignore it.
- **Opus** — heavy reasoning. Reach for it when the problem is genuinely hard:
  untangling a subtle bug in a replication script, reasoning through a tricky
  identification strategy, or planning a large multi-file change. It's slower and
  more expensive, so save it for when the thinking is the bottleneck.
- **Sonnet** — the sensible default, and where you should spend most of your time. It's
  fast enough to feel responsive and strong enough for nearly all everyday work: editing
  a problem set, cleaning a dataset, drafting a section, walking through a script.
- **Haiku** — quick and cheap, for light tasks where you don't need deep reasoning:
  renaming files, a fast summary, reformatting a table, simple lookups.

Fresh sessions default to Sonnet on cheaper plans and Opus on the top plans (as of
mid-2026), but the honest rule of thumb is the same either way: **start on Sonnet, drop
to Haiku when the task is trivial, and reach up to Opus only when a problem actually
stalls.** Running everything on the biggest model is the most common way to burn through
an allowance for no gain — most work simply doesn't need it.

You switch models with the `/model` command inside a session, or set a default in your
configuration. Switching at a natural break works well — think on Opus, then drop to
Sonnet once the plan is set and the work is just execution — but do it between tasks,
not mid-thought: a mid-conversation switch carries a hidden cost (see the caching note
in the last section).

## Effort and fast mode

Model choice is one dial; two others sit alongside it, and they do different things.
(These are the cost-and-quality knobs deferred from the [steering chapter](/ai/controlling-claude/),
because they belong with cost rather than with the work loop.)

- **Reasoning effort** (`/effort`) governs how much the model deliberates before
  responding. That internal "thinking" is billed like ordinary output, so higher effort
  helps on genuinely hard reasoning and is wasted on simple edits, where it just adds
  latency and cost. Lower effort is fine — often better — for routine work. Changing
  effort mid-conversation carries the same hidden cost as a model switch, which is why
  Claude Code asks you to confirm one before applying it.
- **Fast mode** (`/fast`) is easy to misread: it doesn't cut corners on quality, and it
  isn't cheaper. As of mid-2026 it's an Opus-only configuration, still in preview, that
  returns the *same* answers up to about two and a half times faster — at a higher price
  per token, billed against pay-as-you-go usage credits rather than your plan's pool.
  It's for when latency is the bottleneck; if you never touch it, you lose nothing.

So: the model picks the brain, effort sets how long it thinks, and fast mode pays extra
to hurry the biggest one up. A throwaway reformatting job wants a small model at low
effort; a thorny estimation problem wants a big model and room to think. Most of your
day sits comfortably in the middle.

## Two ways you get billed

How any of this turns into a bill depends on which of two arrangements you're on.

- **A paid plan (a seat).** You pay a flat monthly fee and draw from a shared *usage
  pool* — you're not charged per question. Use Claude lightly and you'll never notice a
  limit; use it heavily and you can run the pool down (see the next section). This is the
  simplest model and the right fit for most academic readers: predictable cost, no
  per-token accounting.
- **An API key (pay-as-you-go).** Instead of a seat, you supply a key tied to a billing
  account and pay per *token* — a chunk of text roughly three-quarters of an English
  word, counted both in and out. There's no monthly pool; every message costs what it
  costs, and bigger models and longer conversations cost more. This is the track that
  surfaces when you wire Claude into external services; the [API keys chapter](/ai/api-keys-and-secrets/)
  covers the mechanics and its own spend and rate limits.

For getting started, a paid plan is almost certainly what you want. The API route is
worth understanding mainly so you recognize which world a given cost lives in. For
scale: as of mid-2026 Anthropic reports metered use averaging roughly $150–250 per
developer per month — real but not alarming money for heavy professional use, and yours
will likely be lighter.

## Rolling and weekly limits

On a paid plan, the usage pool isn't a single monthly bucket — it refills on a rolling
schedule, and it's shared across your whole account (sessions in the Claude app or on
the web draw down the same allowance as Claude Code). As of mid-2026 there are two
limits working together:

- A **session limit measured over a rolling five-hour window**. Heavy use in a burst can
  hit it; it resets as the window rolls forward — paused for a few hours, not locked out
  for the month.
- A **weekly limit** that caps sustained heavy use across the whole week; as of
  mid-2026 Opus carries its own weekly cap on top of the all-models one — one more
  reason to reserve it.

What pushes you toward them is the same set of levers from the sections above:

- **How much you send** — long messages and large attachments cost more than short ones.
- **How long the conversation runs** — a sprawling session gets more expensive with
  every message, even before you add anything new.
- **How much work each turn does** — reading files, running commands, and other tool use
  all add up.
- **Which model, and how hard it's working** — Opus at high effort costs more than
  Sonnet at low effort, for the same request.

The upshot: the next section's habits aren't only about saving money on the API track —
on a plan, they're what keep you from bumping into a limit mid-task.

## Seeing what you've used

Two commands tell you where you stand, and they answer different questions.

- **`/usage`** is the main screen: how much of your allowance you've drawn down, how the
  current windows are tracking, and a breakdown of where recent usage went. It also
  reports the current session's cost in dollars — treat that as a **local estimate**,
  Claude's own tally computed on your machine, not an authoritative invoice. It's a
  useful gauge of relative cost (a debugging marathon versus a dozen short edits), not
  the number your card gets charged. (`/cost`, mentioned in older material, is now just
  an alias for the same screen.)
- **`/context`** answers a different question: what is *filling the window right now* —
  messages, files Claude has read, tool output — broken down by category. When a session
  starts to feel expensive or sluggish, this shows you why.

Glance at these occasionally, especially early on. You'll quickly learn that a focused
half-hour is cheap and an all-afternoon conversation that never gets cleared is not.

## Keeping usage down

The single biggest lever is **context** — the running length of the conversation. Claude
re-sends the whole conversation every turn; caching softens the blow (the unchanged
start is re-read from cache at roughly a tenth of the normal input price), but a long
session still taxes every message in it, and a stuffed window degrades the model's
attention too. Most of keeping costs down
is keeping context tight — the same habits that keep Claude focused and accurate.

- **`/clear` between unrelated tasks.** Finished cleaning a dataset and about to draft an
  unrelated problem set? Clear first. Carrying the data-cleaning conversation into the
  drafting work makes every drafting message more expensive *and* muddies what Claude is
  paying attention to. One focused task per session is the habit from [your first
  session](/ai/your-first-session/) — it's a cost habit too.
- **`/compact` when a single task runs long.** When one genuine task legitimately needs a
  long conversation, `/compact` summarizes what's happened so far and frees up room
  without losing the thread. Run it at a natural break — between cleaning and estimation,
  say — not mid-thought, since the summary replaces the raw history. And when you want to
  *abandon* a wrong path rather than summarize it, `/rewind` — the built-in undo you'll
  meet properly in *Working safely* — is cheaper still: it rolls the conversation back
  to a point the cache already knows.
- **Prefer Sonnet; reserve Opus.** Most work doesn't need the biggest model. Defaulting
  to Sonnet and reaching up only when a problem stalls is the easiest large saving there
  is.
- **Settle your dials up front.** Model and effort are part of the cache: change either
  mid-conversation and the next turn reprocesses the whole history at full price. Pick
  them at the top of a session and the cache stays warm.
- **Use plan mode to avoid expensive re-work.** Letting Claude propose a plan you read
  and approve before it touches anything is cheaper than paying to implement the wrong
  thing and then undo and redo it. A few cheap planning turns routinely save an
  expensive wrong turn.

:::tip[The short version]
Default to Sonnet, save Opus for problems that actually stall, and `/clear` between
unrelated tasks. Those three habits cover most of what keeps cost — and your usage
allowance — under control.
:::

---

That's the cost picture: a model dial, an effort dial, a billing arrangement, and a
handful of habits that keep a session lean. From here the [guide overview](/ai/) points to what's next.
