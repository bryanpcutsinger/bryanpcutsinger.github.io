---
title: Your first session
description: Run Claude Code end to end on a safe practice folder — ask it a question, approve your first change, and learn to manage and hand off a conversation before you ever touch real work.
draft: false
---

With Claude Code [installed](/ai/setting-up-claude-code/), the best first move is a
low-stakes one: a throwaway folder where you can poke around, make a mistake, and learn
the rhythm before you point it at a real paper or dataset.

## Make a Sandbox

In Finder, create a new folder somewhere simple — `Sandbox` on your **Desktop** is
perfect. (A plain name with no spaces saves you a bit of quoting later.) Drop a file or
two inside so there's something to look at: a short `notes.txt` with a few lines about a
course or project will do. You genuinely can't break anything here, which is the point.

## Open it in VS Code

In VS Code, choose **File → Open Folder** and pick your `Sandbox` folder. The Explorer on
the left now shows your files.

This folder is Claude's **working directory** — the only place it looks unless you point
it elsewhere. Opening the right folder *is* how you point Claude at your work, so it's
worth getting in the habit now while the stakes are zero.

## Launch Claude

Open the integrated Terminal (**Terminal → New Terminal**, or `` Ctrl + ` ``) and type:

```bash
claude
```

You'll get a prompt waiting for you to type a request in plain English.

:::note[Screenshot to add]
VS Code with the Sandbox folder open and the `claude` prompt ready in the Terminal.
:::

## Ask it a question

Start with something that only *reads* — nothing changes, so there's nothing to approve:

```
What is this project?
```

Claude looks through the folder and tells you what it found. Reading is the safe on-ramp:
you can ask it to summarize a file, explain a script, or list what's in a messy directory
all day long without it touching a thing.

## Approve your first change

Now ask for something small that *writes*:

```
Add a one-line summary to the top of notes.txt.
```

This time Claude doesn't just do it. It shows you the proposed edit as a **diff** — the
old text and the new, side by side — and **asks your permission** before saving. You can
approve it, deny it, or type a correction. That permission prompt is the heart of how
Claude Code keeps you in control: nothing changes on disk until you say yes.

:::note[Screenshot to add]
The approve / deny permission prompt with the proposed diff.
:::

:::tip[Success looks like this]
You asked "what is this project?" and got a sensible answer about *your* folder. You
asked for a small edit, saw a red/green diff, and approved it. If that's what happened,
your setup works and you understand the core loop: **ask → review the diff → approve →
verify.** Everything else in the guide builds on this.
:::

## Managing the conversation

Claude's memory of the current chat is finite — it's called the **context window**, and a
long, wandering session eventually fills it. Three commands keep it healthy:

- `/context` — see how full the window is right now.
- `/compact` — summarize the conversation so far to free up room while staying in the
  same session. (Claude also does this automatically when things get tight.)
- `/clear` — wipe the slate and start a fresh conversation.

The habit worth forming: **one focused task per session, then `/clear` before the next
one.** Cleaning the same dataset, then drafting an unrelated problem set, then debugging a
figure — all in one endless conversation — muddies Claude's context and your own sense of
what it's doing. A clean break per task keeps both of you sharp.

## Handing off to the next session

When you stop for the day mid-task, don't trust your future self to remember where things
stood. Ask Claude to write it down:

```
Summarize where we are and what's left to do.
```

Next time, reopen the folder in VS Code and pick up where you left off:

```bash
claude --continue
```

That resumes the most recent session in this folder. (To choose from a list of past
sessions instead, run `claude` and then `/resume`.)

---

That's a full session, start to finish — the same loop you'll use on real work. From
here, the [guide overview](/ai/) points to what's next as the rest of the chapters come
online.
