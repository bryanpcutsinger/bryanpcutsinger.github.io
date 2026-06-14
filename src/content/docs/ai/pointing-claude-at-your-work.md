---
title: "Pointing Claude at Your Work"
description: "How to open a real project folder, let Claude read and edit it, review every change in VS Code's diff view, and keep your work safe while you do."
draft: true
---

By now you've had a [first real session](/ai/your-first-session/) and you know how
the [operating modes](/ai/operating-modes/) work — when Claude asks before acting
and when it doesn't. This post connects those skills to a folder you actually care
about:
your own project. By the end you'll be able to open a real project, let Claude
read and change files in it, review every edit before it lands, and do all of
that without risking work you can't replace.

## The key idea: the working directory

Here's the single most important thing to understand, and it's simpler than it
sounds: **Claude works on whatever folder you launch it in.** That folder is
called the *[working directory](https://code.claude.com/docs/en/security)*, and it sets the boundary of what Claude can see
and touch by default.

Launch `claude` inside your project folder, and that's the world
it operates in — those files, those drafts, those scripts. Launch it
somewhere else and it sees something else entirely. There's no separate "open
project" command to hunt for. **Choosing the folder you start in *is* how you
point Claude at a project.**

This is why the setup matters. Get the folder right and everything else follows.
Get it wrong and Claude is reading the wrong files, confused about your project,
or worse — poised to edit something you didn't mean.

## Open your real project in VS Code

In your [first session](/ai/your-first-session/) you may have practiced in a
throwaway folder. Now use something real
but low-stakes — a draft handout, your reading notes, a small analysis on data
you can re-download. Avoid your most precious, irreplaceable project — original
survey data, the paper that's out for review — for this first pass; we'll talk
about backups below.

The cleanest way to set the working directory is to open the folder in VS Code
first, then launch Claude from inside it:

1. In VS Code, go to **File → Open Folder**.
2. Navigate to your project folder and click **Open**. VS Code now shows that
   folder's files in the sidebar on the left.
3. Open the integrated terminal with **Terminal → New Terminal** (or
   `` Ctrl+` ``).

The terminal opens *already inside* the folder you just opened — it inherits it.
You don't have to type a path. Now start Claude by typing:

```bash
claude
```

Because the terminal is sitting in your project folder, Claude launches with
that folder as its working directory. That's the whole trick. The folder open in
VS Code's sidebar and the folder Claude is working in are now the same place,
which is exactly what you want: you'll edit through Claude and *see* the results
in the sidebar.

## Letting it read

The first thing Claude usually does when you give it a task is **read**. Ask it
to "tighten the literature review in this draft" and it will open the relevant
files, look around, and figure out what's actually there before it changes
anything.

This can feel surprising the first time — it may open several files in a row. **It
is normal and it is safe.** Reading a file changes nothing; it's the equivalent
of you flipping through a document. Claude reads to build context so its edits
are informed rather than guesses. A tool that edited blindly would be far more
dangerous than one that looks first.

So when you see Claude reading through your project, let it. The more relevant
context it gathers, the better its suggestions. You're not committing to anything
by letting it look.

## Letting it edit — and reviewing

Editing is where the [operating modes](/ai/operating-modes/) earn their keep. In the default
mode, when Claude wants to change a file it doesn't just do it — it shows you a
**diff** and waits for your approval.

A diff is a before-and-after view of a single file. VS Code displays it in two
panels side by side: the old version and the new one, with the changes
highlighted.

:::note[Screenshot to add]
*[SCREENSHOT: VS Code side-by-side diff]*
:::

Reading a diff is mostly a matter of color:

- **Red (or a minus sign)** marks lines being **removed** — text as it is now,
  about to go away.
- **Green (or a plus sign)** marks lines being **added** — the new text Claude
  proposes.
- Lines with no color are unchanged; they're shown for context so you can see
  where the edit sits.

Read the change the way you'd read a colleague's tracked-changes edit on a
document. Does the green actually say what you wanted? Did the red remove
something you meant to keep? Then act:

- **Approve** if it's right, and Claude writes the change to the file.
- **Reject** if it's wrong, and nothing happens to the file — you can explain
  what you actually wanted and let it try again.

Nothing is saved to disk until you approve. That review step is your safety net,
and it's worth slowing down for at first. Skim a few diffs carefully and you'll
quickly develop a feel for what a good edit looks like.

## Work safely: keep a backup

The diff review protects you edit by edit. But for a *large* change — asking
Claude to reorganize a whole folder, rewrite a long script, restructure a document —
you also want a way to undo everything at once if you change your mind. The
answer is a backup taken *before* you start.

You don't need anything fancy:

- **Dropbox version history.** If your project lives in Dropbox (many of these
  guides assume it does), Dropbox already keeps old versions of every file. You
  can roll a file back to how it looked an hour ago from the Dropbox website.
  That's a real safety net you may already have without doing anything.
- **A duplicated folder.** Even simpler: before a big session, make a copy of the
  whole project folder (in Finder, select it and press `Cmd+D`). Name the copy
  something like `MyProject-backup-2026-06-13`. If things go sideways, you still
  have the original, untouched.

There's a proper tool for this — **version control**, usually **Git** — that
tracks every change and lets you undo any of them precisely. It's genuinely worth
learning later, and Claude can help you set it up when you're ready. But you do
**not** need it to start. A backup folder or Dropbox history is plenty for now.
Don't let "I haven't learned Git" stop you from using the tool today.

:::note
A backup folder is **not** version control. A duplicate folder or Dropbox history
is a snapshot you can fall back to — exactly what you want as a beginner. Git is
different: it records *every* change over time and lets you undo any single one. The
snapshot is enough to start; Git is the upgrade for later, not a prerequisite.
:::

If a session ever goes sideways — a bad edit lands, or a command does the wrong
thing — these backups are how you recover. [When Something Goes
Wrong](/ai/errors-and-recovery/) walks through that, step by step.

## Never point it at irreplaceable files without a backup

One rule deserves to stand on its own, because it's where beginners get hurt:
**treat important files as read-only.** Survey data you collected by hand, a
dataset a collaborator shared in confidence, archival material you photographed in
person, graded student work — these are the things you cannot regenerate, and an
accidental overwrite is a genuine disaster, not just an inconvenience.

:::danger
Never point Claude at irreplaceable files without a backup. Survey data you
collected by hand, a collaborator's dataset, archival materials — these you cannot
regenerate, and an accidental overwrite is a genuine disaster.
:::

So two habits, from the very first session:

- **Back up important files before Claude ever touches the folder they live in.** A
  duplicate copy is the minimum.
- **Have Claude write results to a separate folder** rather than editing the
  originals in place. Say so explicitly: "read the files in `raw-data/`, but write
  the cleaned version to a new `processed-data/` folder." This keeps a clean line
  between what you started with and what you produced, and means Claude can't
  silently change or drop your original observations.

We'll come back to this in [Trust, Safety &
Integrity](/ai/trust-safety-integrity/), where keeping your work safe gets the full
treatment it deserves. For now, the short version: reading is free, editing is
reviewed, and your originals are sacred.
