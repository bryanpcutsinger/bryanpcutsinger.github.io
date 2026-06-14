---
title: "Your First Session"
description: "A guided first run of Claude Code: create a safe practice folder, ask for one small thing, handle the permission prompt, see the result, and course-correct — all without risking anything real."
draft: true
---

By now you should have [Claude Code installed and signed
in](/ai/installing-claude-code/). This post is where you actually use it for the
first time — start to finish — on a task small enough that nothing can go wrong.
It doubles as your setup check: if this run works, your machine is ready.
The goal is not to build something useful. It's to feel the rhythm of working
with Claude Code so the rest of the series makes sense in your hands, not just on
the page.

## Make a sandbox

Before you point an AI assistant at your real work or your only
copy of an important file, give it a playground. A **sandbox** is just a throwaway folder
that holds nothing you'd miss. If Claude Code does something unexpected, the worst
case is you delete the folder and start over.

:::caution
Do not point Claude Code at your real work or your only copy of an important file without a backup. Use a throwaway sandbox folder for your first run.
:::

Create one on your Desktop so it's easy to find. Open the **Finder**, go to your
Desktop, and make a new folder (right-click → New Folder, or File → New Folder).
Name it something obvious like `claude-sandbox`.

Now open that folder in VS Code (the editor you installed earlier). In VS Code,
choose **File → Open Folder**, navigate to the Desktop, select `claude-sandbox`,
and click Open. VS Code is now "pointed at" that folder — everything you do will
happen inside it.

Next, open VS Code's built-in terminal — the text prompt where you'll type to
Claude — with **Terminal → New Terminal** from the menu bar. A panel opens at the
bottom of the window. Because you opened the folder first, the terminal is
*already inside* `claude-sandbox`, which is exactly what you want.

Start Claude Code by typing this and pressing Return. The single word `claude`
launches the assistant in whatever folder the terminal is currently in:

```bash
claude
```

:::note[Screenshot to add]
*[SCREENSHOT: VS Code with the claude-sandbox folder open in the Explorer on the left and Claude Code running in the integrated terminal at the bottom]*
:::

## Ask for one small thing

Resist the urge to ask for something ambitious. For your first run, ask for one
small, concrete file. Type this at the Claude prompt and press Return:

```
Create a file called research-plan.md with the main phases of a research project,
from literature review through to writing up.
```

That's it — plain English, no special syntax. You're asking for a Markdown file
(`.md`) with a handful of phases in it. (If you'd rather start from teaching, ask
for a `course-plan.md` with the weeks of a semester instead — the rhythm is
identical.) Small and reversible is the whole point.

## Read the response

Watch what happens before anything changes on disk. Claude Code will tell you,
in plain language, what it intends to do — usually something like "I'll create a
file named `research-plan.md` with the phases of a research project." It often
shows you the *content* it plans to write, too.

Read this. Don't skim past it. The habit of reading Claude's stated intent before
it acts is the single most important one in this whole series — it's how you stay
the person in charge rather than a bystander clicking "yes." On a real project,
this is your chance to catch a misunderstanding before it touches your files.

## The permission prompt

Because creating a file changes what's on your computer, Claude Code stops and
asks first. You'll see a prompt offering choices along the lines of: approve this
action, approve it and stop asking for similar actions, or reject it (often with
the option to type why, so Claude can try a different approach).

This pause is a feature, not friction. Claude Code is designed so that **it never
edits, creates, or deletes a file without your say-so** (in its default mode —
you'll learn to adjust that with the [operating
modes](/ai/operating-modes/)). It's the seatbelt that makes experimenting
safe: nothing happens to your files unless you actively approve it.

For this task, approve it. Use the arrow keys to highlight the "yes" option and
press Return, or press the number shown next to it. Claude creates the file.

## See the result

Look at the **Explorer** — the file-list panel down the left side of VS Code. A
new entry, `research-plan.md`, has appeared. This is the payoff of working
*inside* your folder: you don't have to take Claude's word that it did something.
You can see the file with your own eyes.

Click `research-plan.md` to open it. You should see a short list of phases —
review the literature, assemble the data, run the analysis, write up, and so on.
The exact wording will vary; what matters is that you asked in plain English and
a real file showed up where you can read it.

:::tip[Success looks like this — your setup works]
If you got this far — Claude responded in the terminal, paused to ask permission,
and a new `research-plan.md` appeared in the Explorer that you could open and read
— **everything is installed and talking to each other.** That is the real purpose
of this first run: confirming, on your own with nobody looking over your shoulder,
that VS Code, the terminal, and Claude Code all work together. If the run stalled
— no response, a "command not found," or no sign-in — the [install
page](/ai/installing-claude-code/) has a short troubleshooting list to get you
unstuck.
:::

## Course-correct

Here's the part that makes Claude Code feel less like a vending machine and more
like working with an assistant: you can just keep talking. Suppose you want more
structure. Type:

```
Add a target-date column to research-plan.md so each phase has a deadline.
```

Claude proposes the change, you approve it the same way as before, and the file
updates. This back-and-forth *is* the workflow. You rarely get exactly what you
want on the first try, and you're not supposed to — you refine it in conversation.

And if Claude does something you didn't ask for? Tell it plainly: "That's not what
I meant — undo the target-date column and instead group the phases by term."
Because
you can see every file in the Explorer, you always have a manual fallback too: you
can edit a file by hand, or delete it, just as you would any other file on your
Mac. You are never trapped by something Claude did.

## Ending and resuming a session

When you're done, you don't need to do anything fancy. Type `/exit` at the Claude
prompt and press Return, or press **Ctrl+C** twice, to quit Claude Code. The
terminal returns to its ordinary prompt. Your files stay exactly where they are —
quitting Claude doesn't remove anything it made.

To come back later, open the same folder in VS Code, open a new terminal, and run
`claude` again. Note that a fresh `claude` starts a *new* conversation: it won't
remember the back-and-forth from your last session by default. ([Picking up a
previous conversation](https://code.claude.com/docs/en/sessions) is possible, and we'll get to it later in the series; for
now, starting clean is perfectly fine.)

## Long sessions: a tidy workspace

Claude Code remembers everything you've said *within* a session. That's useful —
but on a long working session it can get cluttered, mixing the dataset you cleaned
an hour ago with the paragraph you're editing now. Two built-in commands keep
things tidy:

- **`/clear`** wipes the current conversation and starts fresh, *without* quitting
  Claude or closing your folder. Reach for it when you finish one task and want to
  start an unrelated one with a clean slate — say, moving from cleaning data to
  drafting an email.
- **`/compact`** keeps the thread going but summarizes the conversation so far,
  freeing up room when a session has run long. Use it when you're deep in one task
  and don't want to lose the context, but things are getting unwieldy.

You won't need these on your first run. They're worth knowing about for the day a
session stretches across a whole afternoon.

## Mindset

The frame that makes all of this work: **you're the editor, Claude is the
assistant.** It drafts, suggests, and does the legwork; you decide what's right,
what's wrong, and what happens next. That division of labor is why the "read
before approving" habit matters so much.

And in a sandbox folder, you genuinely cannot break anything that counts. There's
no real data, no draft you care about, no published code. So experiment freely —
ask for odd things, change your mind, undo, start over. The confidence you build
here is exactly what you'll carry into your real projects.
