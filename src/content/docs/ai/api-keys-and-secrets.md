---
title: API keys and secrets
description: What an API key is, when you actually need one, how to handle keys safely — never in a file, a commit, or printed output — and the API's own spend and rate limits.
draft: false
---

A lot of the work in this guide never needs an API key: you open a folder, talk to
Claude, review its edits. But the moment you ask Claude to pull a series from FRED, hit
the IMF's data API, or wire up an outside service, a key enters the picture — and a key is
a credential, the equivalent of a password. This chapter is about what that thing is, when
it shows up, and the one discipline that keeps it from leaking: it never goes in a file, a
commit, or anything Claude prints back to you.

## What an API key is, and when it surfaces

An **API** is just a way for one program to ask another program for something over the
internet — your script asks FRED's servers for an unemployment series, FRED's servers
answer. An **API key** is the string of characters that proves *you* are the one asking.
The service hands you a key when you register; from then on, every request carries it, and
the service uses it to recognize you, enforce your limits, and (sometimes) bill you.

For an economist, keys surface in a few predictable places:

- **Data pulls.** FRED, the IMF, the Census Bureau, the BLS, the World Bank — most public
  data APIs ask you to register for a free key before they'll answer a script. You'll see
  this the first time you ask Claude to write a `fredapi` or `pandas-datareader` call.
- **Connectors and outside services.** Plugging Claude into an external tool — a database,
  a reference manager, a third-party service — generally means giving it a credential for
  that tool. The standard way these connections take a key is by environment-variable name,
  which is exactly the discipline this chapter teaches.
- **The Claude API itself.** If you ever run Claude Code billed per-token instead of
  through a plan seat (the "API track" below), an Anthropic API key is what authorizes and
  meters that usage.

The key is not the data and not the code. It's the badge that gets you through the door,
and like a badge, anyone holding a copy of it can walk in as you.

## Handling keys safely

Here is the whole discipline in one sentence: **a key lives in an environment variable,
and everything else refers to it by name.** An environment variable is a named value your
shell keeps in memory — `FRED_API_KEY`, say. Code reads it by that name (in Python,
`os.getenv("FRED_API_KEY")`) and never contains the value itself. The secret sits in one
place you control; your scripts, your notebooks, and Claude all point at the *name*.

That indirection is what keeps the actual characters out of everywhere they'd otherwise
end up. Three places they must **never** end up:

- **Not in a CLAUDE.md or settings file.** Your [CLAUDE.md](/ai/claude-md-file/) is read
  into context at the start of every single session, and both it and Claude Code's
  `settings.json` are exactly the kind of files that get committed to a shared repository —
  two clean ways to leak a credential you meant to keep private. Standing instructions and
  configuration, yes; secrets, never.
- **Not in code or notebooks.** A key pasted into a `.py` file or a Jupyter cell travels
  with that file — into your Git history, into a replication package, into the version you
  email a coauthor. Reference the variable by name instead, so the file is safe to share.
- **Not in printed output.** Don't ask Claude to print a key to check it, and don't `echo`
  it in a terminal. Printed output lands in logs, in screenshots, in the scrollback you
  later paste somewhere. If you need to confirm a key is *set*, check that the variable
  exists — not what it contains.

:::caution
A key committed to Git doesn't go away when you delete the line and commit again — it
stays in the repository's history, recoverable by anyone with the repo. If a key ever does
land in a commit, treat it as compromised: **rotate it** (generate a new one at the
service and retire the old) rather than trusting that you scrubbed it.
:::

In practice you set these once. Keys go in a shell profile (a file like `~/.zshrc` that
your terminal reads at startup) so the variables are defined in every session, and your
code reads them by name from there. If that setup is unfamiliar, this is a good thing to
have Claude walk you through — *"help me store my FRED API key in an environment variable
on macOS"* — and a good moment to put a line in your global CLAUDE.md telling Claude to
reference keys by name and never print them. If a project folder does hold a secrets file
(a `.env`, say), you can go one step further and forbid Claude Code from reading it at all
— a permissions rule like `"deny": ["Read(./.env)"]` in its settings blocks the file
outright.

:::note
This is the same rule Bryan's own global CLAUDE.md enforces: FRED and IMF keys live in
environment variables, code reads them with `os.getenv`, and no key ever appears in a
file, a commit, or printed output. It's worth copying.
:::

## The API's own limits (for the API track)

Most readers will run Claude Code through a **plan seat** — a Pro or Max subscription —
and never touch an Anthropic API key at all. But if you run it on the **API track**,
billed per token, your key carries two separate limits worth understanding, because they
fail in different ways.

- **A spend limit** is a monthly ceiling on how much you can be billed. It exists so a
  runaway script or a long session can't quietly ring up a surprise. Hit your cap and API
  usage pauses until the next calendar month, unless you request a higher limit — and you
  can set your own limit *below* the cap, which is cheap insurance while you're learning.
- **Rate limits** cap how *fast* you can make requests — requests per minute and tokens
  per minute. Hit one and the request doesn't fail permanently; it comes back with an
  error that says how long to wait, and you try again in a moment.

Both loosen as your account advances through **usage tiers**: a new account starts on the
lowest tier with conservative limits, and it moves up automatically as you use the API.
As of mid-2026 the tiers are named Start, Build, and Scale, but the exact caps and
thresholds shift — treat any specific figure as something to confirm against the current
Anthropic documentation rather than memorize.

The deeper question of *which* billing model to choose — a plan seat versus a
pay-as-you-go API key — along with model tiers, effort levels, and the rolling and weekly
limits on plans, belongs to its own chapter on
[models, cost, and usage limits](/ai/models-cost-and-limits/). This one is just the key and the discipline
around it.

---

A key is a credential, so you treat it like one: store it once in an environment variable,
refer to it by name, and keep it out of files, commits, and printed output. That habit is
the floor for the next two topics — connecting Claude to your apps, and working in the
cloud — both of which lean on credentials you'll now know how to handle. Those are
[connectors & MCP](/ai/connectors-and-mcp/) and [the Claude app & the
cloud](/ai/claude-app-and-cloud/).
