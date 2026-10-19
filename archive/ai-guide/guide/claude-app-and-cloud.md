---
title: The Claude app and the cloud
description: Beyond the terminal — the Claude desktop and web apps and cloud sessions, what they add over the CLI, and when your data should and shouldn't leave your Mac.
draft: false
---

Everything so far in this guide has happened in one place: Claude Code running in the
Terminal inside VS Code, working on a folder on your Mac. That's the command-line tool,
and it's the heart of the guide. But "Claude" is also a family of apps — a desktop app,
a website, a phone app — and there's a way to run Claude Code's kind of work in the
cloud rather than on your own machine. This chapter sorts out what's what, so you know
which door you're walking through and, more importantly, where your data goes when you
do.

## Two different things that share a name

It's worth being precise, because the shared name causes real confusion.

**The Claude chat app** — the website at `claude.ai`, the phone app, and the Chat tab of
the desktop app — is a chat interface. You type or paste something into a box, attach a
file or an image, and have a conversation. It's where you'd brainstorm a paper's framing,
ask a question, or talk through an idea. It does not open a folder on your Mac and edit
your files.

**Claude Code** is the tool you've been using: it works inside a folder you point it at,
reads and edits the actual files there, and asks your permission before each change. That
working-in-your-folder, review-the-diff loop from [your first
session](/ai/guide/your-first-session/) is the thing the chat interface doesn't do.

The two are made by the same company and you sign into both with the same account, but
they're different tools for different moments. A useful rule of thumb: if you're
*talking*, that's chat; if you're *editing a project*, that's Claude Code. The wrinkle is
that the **desktop app contains both**: alongside its Chat tab sits a **Code tab** that
runs the same Claude Code engine as your Terminal — pick a project folder, set how much
it may do without asking, review its changes — driven by clicking rather than typed
commands.

## Where Claude Code can run

Claude Code isn't tied to your Terminal. The same engine shows up on several *surfaces*,
and across the local ones — your Terminal, the desktop app, a code editor — the same
underlying tool runs with your `CLAUDE.md` files and settings carrying over, so the choice
is about ergonomics, not capability. (The cloud is the exception, as you'll see in a
moment: a cloud session sees only what's stored in the repository, not your personal
setup.) The surfaces worth knowing:

- **In your Terminal, on your Mac.** The default, the most complete surface, and the one
  this guide teaches. The work happens locally, on a folder you opened.
- **In the desktop app's Code tab.** Same engine, graphical wrapper: when Claude edits
  files, click the change indicator to open a file-by-file diff, comment on specific
  lines, and have Claude revise — much like reviewing a coauthor's changes. If the
  command line intimidates you, this is the gentlest on-ramp: the terminal becomes an
  optional pane rather than the front door. As of mid-2026 it requires a paid plan.
- **On the web, at `claude.ai/code`.** Claude Code's web home, where you hand it a task
  that runs in the cloud — on an Anthropic-managed machine that isn't yours — against a
  project stored on GitHub. You kick it off from a browser, and the session keeps running
  even if you close the tab; you can check on it later from your phone.

The cloud version is genuinely useful for a certain shape of work: a self-contained,
well-defined job on a project that already lives on GitHub, that you'd like to run
without tying up your own machine — a long, low-steering task you leave running while you
teach, or several independent fixes to a replication package dispatched at once, each
coming back as its own branch to review. The cloud machine clones your repository, does
the work, and pushes the result back to GitHub for you to review — which is where
[Git and GitHub](/ai/guide/git-and-github/) stop being optional housekeeping and become the thing that *lets
the cloud see your project at all*. A cloud session knows only what's committed to the
repository: a file that lives only on your Mac is invisible to it, and so is your
personal setup — it reads the `CLAUDE.md` and settings stored *in the repo*, not the ones
in your home folder. (Strictly, there's a fallback that uploads a small local repository
without GitHub, but the GitHub path is the normal one.)

There's also an inverse arrangement: you can steer a Claude Code session running *on your
own Mac* from your phone or a browser. The files and the execution stay on your machine —
the phone is just a window into the session. That distinction — where the code actually
*runs* — is about to matter.

:::note
The exact shape of these features — what they're called, how you launch them, which plans
include them — is one of the faster-moving parts of this whole area. As of mid-2026 both
the web surface and the steer-from-your-phone arrangement are labeled "research preview."
Before you rely on any specific button or limit, check the current docs.
:::

## The tradeoff that actually matters: where your data goes

Here is the part to slow down on, because it's the reason this chapter sits where it does
in the guide rather than being a footnote.

When Claude Code runs **on your Mac**, your files start on your machine. (They don't stay
purely local — anything Claude reads is still sent over the network to the model to be
processed, which is the central point of [keeping your data
private](/ai/guide/keeping-your-data-private/).) But the files at least *originate* on your computer, and
nothing is copied to a third location to sit there.

When you run work **in the cloud**, you are deliberately moving your project off your
machine: it's cloned onto a remote computer you don't control, and the work happens
there. For a public replication package or an open-source teaching repo, that's no
different from the work already being public. For **confidential or IRB-governed data —
unpublished manuscripts, raw survey responses, student records, anything you wouldn't
post on a website — that move is exactly the thing your research office warns against.**
If what draws you to the cloud is checking on a long job from your phone between
meetings, steering a local session from your phone — the inverse arrangement above — gets
you that convenience while execution stays on your own disk, the safer default for
anything sensitive.

:::caution
Treat "should this leave my Mac?" as a question you answer *before* reaching for a cloud
session, not after. If the honest answer for this particular project is no — and for raw
or identifiable research data it usually is — keep the work local. The full set of rules
for de-identifying data and choosing the right plan lives in [keeping your data
private](/ai/guide/keeping-your-data-private/); read it before you point any cloud tool at sensitive work.
:::

The same caution scales down to the chat app. Pasting a confidential table into the
`claude.ai` box to "just ask a quick question" is the same act of sending restricted data
off your machine, in a more casual wrapper. The wrapper being friendly doesn't change
what the data is.

## A note on Projects (an app feature, not Claude Code)

One more thing that's easy to conflate. The Claude **chat app** has a feature called
**Projects** — a place on the website where you collect files, instructions, and chats
around a theme, say a course you're teaching or a paper you're writing. You upload
documents to a Project once and they're available to every conversation inside it.

This is convenient, and the mechanical fact to internalize is that an uploaded document
isn't a fleeting paste that vanishes when you close the tab — it's **stored** so your
later conversations can draw on it, and it sits there until you remove it. (The exact
retention terms are a fast-moving detail — as of mid-2026, check the current privacy
docs.) Apply the same bright line you'd apply
anywhere else: a de-identified dataset or a public syllabus is fine to keep in a Project;
raw identifiable data or an under-review manuscript is not.

The reason to flag this here is the name collision. **Claude.ai Projects (an app feature)
are not the same as opening a project folder in Claude Code.** A Project is a web
workspace with stored uploads; a Claude Code project is a folder on your Mac that Claude
edits in place and never silently copies anywhere. Knowing they're different keeps you
from assuming a privacy habit from one carries over to the other — it doesn't, so reason
about each on its own terms.

---

The short version: chat is for talking, Claude Code is for editing your project, and the
same Claude Code engine runs in your Terminal, in the desktop app's Code tab, and in the
cloud — which is handy for public, GitHub-hosted work and the wrong move for restricted
data. When in doubt, keep the work local and check [keeping your data private](/ai/guide/keeping-your-data-private/)
before you let a project leave your machine. From here, the [guide overview](/ai/guide/) points
to the rest of the chapters.
