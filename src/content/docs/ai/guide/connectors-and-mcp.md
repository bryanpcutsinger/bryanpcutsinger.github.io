---
title: Connecting Claude to your apps
description: Extend Claude beyond your files — app connectors and the browser extension on the Claude side, and MCP servers that plug data sources like Zotero or a database into Claude Code.
draft: false
---

So far Claude has only ever seen the folder you opened. That's a sensible default — it
keeps the stakes contained — but plenty of your work lives elsewhere: references in
Zotero, a paper synced to a cloud drive, results sitting in a database. There are two
separate ways to give Claude reach beyond the working directory, and the most common
confusion in this whole topic is treating them as one thing. They aren't, so it's worth
getting the names straight before anything else.

## Two different things: connectors vs. MCP

The split runs along which *product* you're extending.

- **Connectors and extensions** live on the **Claude app** side — the desktop and web
  apps at claude.ai, and the browser extension. These are the click-to-enable
  integrations: a toggle that lets the Claude app read your Google Drive, or a browser
  extension that lets it see the page you're on. You turn them on in the app's settings;
  there's nothing to install at the command line.
- **MCP servers** live on the **Claude Code** side — the terminal tool this guide is
  mostly about. **MCP** stands for *Model Context Protocol*, an open standard for handing
  an external tool or data source to an AI assistant. An MCP server is a small program
  that speaks that protocol: one for Zotero exposes your library, one for a database
  exposes your tables, one for GitHub exposes your repositories. Some run locally on your
  Mac; others are hosted services you connect to over the web. Either way, you register it
  once and Claude Code can then call it.

The practical takeaway: if you're in the Claude app and want it to reach your files or
your browser, you want a **connector or extension**. If you're in Claude Code and want it
to reach a tool that isn't just files on disk, you want an **MCP server**. Both ultimately
do the same job — widen what Claude can see — but you set them up in different places, and
the words are not interchangeable.

:::note
The terminology is genuinely unsettled across the broader AI tooling world, and you'll see
"plugin," "integration," and "tool" used loosely. This guide fixes the names — *connectors*
on the app side, *MCP servers* on the Claude Code side — and uses them consistently.
:::

## App connectors and the browser extension

On the Claude app side, the integrations worth knowing about are the everyday-software
kind. There are connectors for cloud storage and productivity suites — Google Drive, the
Microsoft 365 apps (Word, Excel, PowerPoint) — that let the Claude app open and work with
documents living in those services rather than only files you paste in. And there's a
**browser extension** that gives Claude a view of the web page you're currently looking
at, so you can ask about it directly instead of copying text across.

For an economist, the honest assessment is that these are convenience features, not
transformative ones. A connector to your cloud drive saves you the step of downloading a
working paper before asking about it. The browser extension saves you a copy-paste when
you're reading something online. Useful, but each one also widens what a remote service
can see, which matters more for confidential or IRB-governed material than for a public
PDF — a tradeoff the [keeping your data private](/ai/guide/keeping-your-data-private/) chapter takes up directly.

These are app-side features, so they don't touch your Claude Code sessions in VS Code at
all. If your work happens mostly in the terminal, you can leave them off and lose nothing.

## MCP servers for your data

The Claude Code side is where the more interesting reach lives, because an MCP server can
expose things that aren't files at all.

The example that earns its keep for an economist is **Zotero**. With a Zotero MCP server
registered (the community-built `zotero-mcp` is the established one), Claude Code can
search your actual library, pull the real citation key, BibTeX entry, and DOI for a paper,
and check what you have on a topic — instead of guessing at a reference and handing you
something that looks plausible but doesn't exist. It can also run read-only against your
local library, so the connection can look things up without being able to change anything.
Given that fabricated citations are the single failure mode you most need to guard
against, an integration that lets Claude read *your verified library* rather than invent
from memory is the rare one that changes the work rather than just speeding it up.

Other MCP servers follow the same shape, and several were built by and for economists:

- **A FRED server** gives Claude tool access to the full FRED catalog — 800,000-plus
  series — so a data pull happens through a real, reproducible API call rather than a
  number recalled from memory.
- **A database server** lets Claude query a real data source in plain language — describe
  a schema, pull summary counts — rather than working only from a CSV you exported. The
  official documentation's own example wires in a connection that is *read-only by
  construction*: Claude can `SELECT` and summarize, but the connection itself can't alter
  the source. That's the right shape for a research dataset.
- **A Stata server** (built at the LSE) lets Claude run do-files and read back the `r()`
  and `e()` results directly, instead of you relaying output by hand.
- **A GitHub server** lets it read issues, pull requests, and repository contents, which
  matters once a paper or replication package lives on GitHub (its own chapter,
  [Git & GitHub](/ai/guide/git-and-github/), covers that workflow).

Registering an MCP server is a one-time setup step, done with a single command
(`claude mcp add`) rather than a click; once you have servers registered, typing `/mcp`
inside a session shows what's connected. Some servers need nothing more than that.
Others — the ones that reach a service with an account behind it, like a hosted
database or a web API — need a **credential** so
the server can authenticate as you. That credential is an **API key**, and where it comes
from and how to handle it without leaking it is exactly the subject of the
[API keys & secrets](/ai/guide/api-keys-and-secrets/) chapter, which is the prerequisite here. The one rule worth
stating now, because it's the rule everywhere keys appear: a key goes in an environment
variable, never pasted into a CLAUDE.md or committed to a repository.

:::caution
A local MCP server runs as a real program on your Mac with whatever access you grant it,
and a hosted one is a service your requests travel to — and many of both are written by
third parties, not by Anthropic. Register servers you understand and trust, the same way
you'd be careful about any tool you install. Reach is power, and power you didn't mean to
grant is the thing to avoid.
:::

## Which are worth it

Most of this you can skip, at least at first — and that's the useful thing to hear. The
working directory plus the [CLAUDE.md file](/ai/guide/claude-md-file/) gets you a very long way,
and every integration you add is one more piece of setup to maintain and one more surface
your data can travel across. Each connected server also spends a little of Claude's
working memory just by being registered — as of mid-2026 only the tool names load up
front, and `/mcp` shows what each server costs — so an unused connection isn't free. The
friction is real too: MCP servers still ask for a command-line registration step and,
often, a key to configure, which is more than a beginner needs on day one.

So the order that makes sense:

- **Worth it early, if it fits your work:** the **Zotero** MCP server, because verified
  references are a genuine integrity gain, not a convenience. If you manage your library in
  Zotero, this is the one to set up first.
- **Worth it when a project calls for it:** a **FRED**, **database**, **Stata**, or
  **GitHub** server, once you actually have a project living in those tools. Don't set them
  up speculatively — add the integration when the project earns it, the same way you add a
  project CLAUDE.md.
- **Optional, app-side, low stakes:** the cloud-drive connectors and browser extension.
  Turn them on if the copy-paste is annoying you; otherwise leave them.

The honest summary is that integrations are an amplifier, not a foundation. They make
Claude reach further into the tools you already use, but none of them changes the one rule
this guide keeps coming back to from [what Claude Code is](/ai/guide/what-is-claude-code/): you
review what it produces. A Zotero server that returns a real citation key still hands you a
citation *you* confirm before it enters a draft. Wider reach raises the stakes of that
review; it never removes it.

:::note[Verify the current details]
The specific connectors, the roster of available MCP servers, and the exact registration
commands all move quickly. The structure above — app-side connectors versus Claude Code
MCP servers, and where a key is needed — is stable as of mid-2026, but check the current
documentation for today's exact list and setup steps before you follow them.
:::

---

That's the integration landscape: two surfaces, named clearly, with Zotero as the one most
likely to repay the setup for a working economist. From here the [guide overview](/ai/guide/)
points to the rest — including the [API keys & secrets](/ai/guide/api-keys-and-secrets/) chapter you'll want before
wiring up any server that needs a credential.
