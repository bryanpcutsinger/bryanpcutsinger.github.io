---
title: "A Taste of Code (1:15–1:35)"
description: "A short, low-pressure look at the Code tab in the desktop app, so you recognize what it does and when to reach for it."
draft: false
---

This is a quick taste, not a deep dive. By now you've spent most of your time in [Cowork](/ai/desktop/meet-cowork/), which handles the bulk of what an economics professor and department chair needs day to day. The Code tab is the third tab in the desktop app, and the goal here is simply *recognition*: you should leave knowing it exists, what it feels like, and when it might be worth opening. Mastery is not the point.

:::tip[For the facilitator]
Budget about 20 minutes for this segment. If the earlier blocks ran long, it is completely fine to shorten this — or skip it entirely and go straight to [Safety and Wrap-Up](/ai/desktop/session-5-safety-and-wrap-up/). Say so out loud. Cowork already covers most of her real work; this is a "so you know it's there" moment, not a skill she has to walk away with.
:::

## What the Code tab is for

The desktop app has three tabs, and they're worth keeping straight:

- **Chat** — general conversation. No access to your files.
- **Cowork** — the autonomous agent you've been using. It works hands-off across many steps in an isolated virtual machine, shows you a plan, and waits for your approval before acting.
- **Code** — an interactive assistant with **direct access to your local files**. You review and approve each change *as it happens*, shown as a visual diff. No terminal required.

The simplest way to think about the difference: **Cowork is hands-off, multi-step work** you delegate and check at the end. **Code is line-by-line editing you approve one change at a time.** Both run the same underlying engine; they're just two ways of working.

For most of what lands on a chair's or a professor's desk, Cowork is the right tool. You'd reach for Code when you want to watch a file change closely — for example, tidying a script a research assistant left behind, or making a careful, reviewable pass through a document where you want to see exactly what changed before you accept it.

:::note
The Code tab requires a paid plan (Pro or higher). If you're on the free plan, Code and Cowork aren't available — see [pricing](https://claude.com/pricing).
:::

## One small thing in Code

Let's do exactly one tiny task so you can see the diff and the accept/reject approval. The point is the *experience*, not the result.

Pick a small, low-stakes local file — something like a short Markdown document (a few notes, an agenda) or a small CSV (a roster, a tidy little data extract). Then in the Code tab, ask for one modest, well-scoped change. For example:

- "Clean up the formatting in this Markdown file — consistent headings and bullet style."
- "Sort this CSV by the last-name column and trim any stray spaces."

Claude will propose the edit and show it to you as a **diff**: the old version and the new version side by side, with changes highlighted. Nothing is saved until you say so.

:::tip[See it on Anthropic's site]
When Code proposes an edit, it appears as a **diff** you can **Accept** or **Reject**,
one change at a time. Anthropic's [desktop
quickstart](https://code.claude.com/docs/en/desktop-quickstart) covers this review
view.
:::

### Accept or reject

Look at the diff. If it's what you wanted, **accept** it and the file is updated on disk. If it's not, **reject** it and nothing changes. This is the whole rhythm of the Code tab: a proposed change, a clear view of it, and a deliberate yes or no from you.

The default permission mode is **"Ask permissions"** — Claude pauses for your approval on each change. (There are other modes, "Auto accept edits" and "Plan mode," but the default is the right one while you're getting your bearings, and the right one for careful work generally.)

Contrast that with Cowork, where you approve a *plan* up front and then let it run a sequence of steps on its own. Code keeps you in the loop on every edit; Cowork lets you step away. Neither is "better" — they fit different jobs.

## A note for Windows

There's one setup detail specific to Windows. For the Code tab's **Local** sessions — working directly on files on your own machine — **Git for Windows** must be installed. (Macs usually already have Git, so this is a Windows-specific gotcha.) If you walked through the [pre-meeting checklist](/ai/desktop/before-we-meet/), this should already be handled; if Local sessions won't start, a missing Git install is the usual cause. The download lives at git-scm.com/downloads/win, and there's more detail on the [Code tab page](/ai/desktop/a-taste-of-code/).

Code offers three environment types — **Local**, **Remote**, and **SSH** — but for this taste you only care about Local: your files, your machine.

## The same caution still applies

Everything you learned about verification carries straight over. The Code tab edits real files, and the diff shows you *what* changed, but it does not vouch for whether the change is *correct*. If Claude edits a document that contains references, a data note, or any factual claim, that content can still be wrong — Claude can fabricate citations, page numbers, quotes, and data values. The diff tells you the text changed; it does not tell you the text is true. Read what you accept, and check anything load-bearing against the original source.

:::caution
Accepting a diff means you're putting your name on the result. Treat an accepted edit the way you'd treat anything Claude produces: verify facts, citations, and numbers yourself before they go anywhere that matters.
:::

## Where this leaves you

You don't need to master Code today. You need to recognize it: it's there in the desktop app, it edits local files one approved diff at a time, and it's the tool for close, reviewable work when Cowork's hands-off style isn't what you want. For the great majority of teaching, research, and chair tasks, Cowork is still your main tool — and that's by design.

When you want to go further on your own, Anthropic's [desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart) is a gentle next read.

Next: [Safety and Wrap-Up](/ai/desktop/session-5-safety-and-wrap-up/), where we tie together the approval models, what to allow, and how to keep all of this trustworthy.
