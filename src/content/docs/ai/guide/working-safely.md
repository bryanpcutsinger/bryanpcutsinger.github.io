---
title: Working safely on real projects
description: Before you point Claude at real work — how folder scope limits what it sees, what to keep out, working on a copy, and using rewind to undo a change you didn't want.
draft: false
---

The [Sandbox](/ai/guide/your-first-session/) was the safe place to learn the rhythm. At some
point, though, you want Claude looking at a real syllabus, a real replication folder, a
real draft. Graduating to real files isn't a leap — it's the same ask → review → approve
loop you already know — but a few habits make the difference between a recoverable
mistake and a bad afternoon. None of them is hard. They're the digital equivalent of
working on a photocopy and keeping the original in the drawer.

## Folder scope: what Claude can see

Opening a folder in VS Code is how you point Claude at your work, and it doubles as a
quiet way to limit what Claude can touch. The folder you open is Claude's **working
directory** — by default it reads and edits files there and ignores everything else on
your Mac. Open the folder for *one* course or *one* paper, not your entire home
directory, and you've drawn a sensible boundary around the work without thinking about
it.

It's a good habit. But be honest with yourself about what it is and isn't.

:::caution[Folder scope is a default, not a wall]
The working directory is where Claude *starts looking* — not a sealed box it cannot leave.
Once Claude runs a shell command or uses a tool, that command can in principle reach files
outside the folder, just like any command you'd type yourself. Folder scope makes the easy
path the safe one; it is **not** a security boundary, and it is **not** a substitute for the
privacy practices in [keeping your data private](/ai/guide/keeping-your-data-private/). Don't treat "I only opened this one
folder" as protection for confidential data.
:::

So lean on folder scope as a tidiness habit — it keeps Claude focused and keeps stray
files out of view — while remembering the real guardrail for sensitive data is what you
let into the folder in the first place. (Claude Code does have genuinely *enforced*
boundaries — permission rules that hard-block specific paths, and an operating-system
sandbox that limits what commands can reach — but those are opt-in tools covered later
in the guide, not something opening a folder gives you for free.)

## What to keep out

Because Claude works on what's in the folder, the safest move is upstream: decide what
belongs there before you open it. A few things are worth keeping out until you've
deliberately decided otherwise.

- **Raw data.** Your read-only originals — the downloaded extract, the survey file, the
  administrative data — don't need to sit in a folder you're actively editing. Keep raw
  data in its own place and point Claude at a working copy or a cleaning script, not the
  source. (This mirrors the rule never to edit raw data by hand.)
- **Confidential or restricted material.** IRB-governed data, student records, anything
  under a data-use agreement, an unpublished manuscript under review — if it shouldn't
  leave your machine, the time to decide that is *before* it's in the folder, not after.
  The [data-privacy chapter](/ai/guide/keeping-your-data-private/) covers de-identifying and the rules research offices
  use; this is just the blunt version: when in doubt, leave it out.
- **Secrets.** API keys, passwords, tokens. These don't belong in a working folder any
  more than they belong in a [CLAUDE.md](/ai/guide/claude-md-file/) — the [API keys &
  secrets](/ai/guide/api-keys-and-secrets/) chapter covers where they go instead.

The reframe is simple: you're not restricting Claude so much as curating what it sees.
A folder with exactly the files the task needs is both safer and easier for Claude to
reason about.

## Work on a copy, back up first

The single habit that turns most mistakes into non-events: **don't let Claude's first run
on something important be on your only copy.**

Before you turn Claude loose on a folder that matters — the lecture notes you've refined
over three semesters, the analysis script behind a working paper — duplicate it first. In
Finder, select the folder and press `⌘ + D`, or right-click and choose **Duplicate**.
Work on the copy. If the session goes sideways, you delete the copy and you've lost
nothing. This costs you ten seconds and a little disk space, and it's the cheapest
insurance in this guide.

For a longer-term net, make sure **Time Machine** is running (System Settings → General →
Time Machine, with an external drive or network volume attached). Time Machine keeps
periodic snapshots of your whole Mac, so even a change you don't notice for a day is
recoverable from a backup taken before it happened. It's not a substitute for duplicating
a folder before a risky run, but it's the floor under everything.

:::tip[Two backups, two jobs]
Duplicating the folder protects against *this* session going wrong — it's the seatbelt you
buckle on purpose. Time Machine protects against the mistakes you don't see coming. They're
not redundant; keep both.
:::

If your project is already under version control, you have a third and even better net —
but that's [Git's](/ai/guide/git-and-github/) job, and it gets its own chapter. The point here is that you do
*not* need to know Git to work safely: a duplicate folder and Time Machine get you most of
the way.

## Rewind: the undo for AI edits

Even with backups in place, you'll want a faster way to take back a single change without
restoring a whole folder. Claude Code has one built in.

Claude quietly records the state of your files before each edit — every prompt you send
creates a **checkpoint**, without you asking. That lets you **rewind** — step back to how
things were a few moves ago, as if the intervening edits never happened. You trigger it
by typing:

```
/rewind
```

or by pressing **Esc twice** in quick succession (when the input line is empty — if
you've typed something, double-Esc clears the text instead). The menu lists each prompt
you sent; pick a point, and you can restore **both** the files and the conversation to
that moment — so you're not left with half-applied edits and a chat that no longer
matches what's on disk — or, if you prefer, restore just one side: roll back the files
but keep the discussion, or rewind the chat while keeping the current code.

This is the natural companion to reviewing diffs. The diff is your chance to catch a bad
edit *before* it lands; `/rewind` is your way out *after* one slips through — you approved
something, ran it, and only then realized it wasn't what you wanted. A double-Esc puts
things back.

:::caution[Rewind only covers Claude's own edits]
Checkpoints capture changes Claude makes through its file-editing tools. A file deleted,
moved, or overwritten by a **shell command** — `rm`, `mv`, a script writing over your
output folder — is *not* captured, and neither are edits you make yourself outside Claude
Code. That's exactly the gap the duplicate-the-folder habit above covers, so keep both.
:::

:::note[Rewind is a generous undo, not an archive]
Checkpoints do persist across sessions — as of mid-2026 they're kept for about 30 days
before being cleaned up (check the current docs for specifics). But they're an undo
stack, not a permanent record. For a durable, dated restore point you can return to next
semester, that's what committing in Git is for. Think of `/rewind` as the fine-grained
undo for the work in front of you, and Git (later in the guide) as the project's
long-term memory.
:::

---

That's the safety kit for real work: open a tightly-scoped folder, keep the wrong files
out of it, run on a copy with Time Machine behind you, and reach for `/rewind` when an
edit needs taking back. None of it slows you down once it's habit. The one thing folder
scope deliberately does *not* solve is what happens to data once Claude reads it — and
that's the next chapter, [keeping your data private](/ai/guide/keeping-your-data-private/).
