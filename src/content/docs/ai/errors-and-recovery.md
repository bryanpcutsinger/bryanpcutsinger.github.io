---
title: "When Something Goes Wrong"
description: "Errors are normal, not a sign you broke something. How to read an error message, tell a failed command from a wrong result, paste the problem back to Claude, reject a bad edit, and roll back when you need to."
draft: true
---

:::note
Reference — for when you're up and running. You don't need this to get started;
come back to it the first time something goes wrong (it will, and that's normal).
:::

The first time something goes red in the terminal, it's tempting to quit and
decide this isn't for you. Don't. Errors are not a sign you broke the tool or
that you're doing it wrong — they're the single most ordinary thing that happens
when working with code, and recovering from them is a skill you can learn in one
sitting. This post is the one to come back to the moment something looks broken.

## First: nothing is on fire

A wall of red text feels alarming, but in almost every case it's just Claude (or
a command it ran) reporting that something didn't work — the equivalent of a
spell-checker underlining a word, not your computer breaking. Your files are
where you left them. The fix is usually a sentence away.

The mindset that helps most: **you are never stuck.** Worst case, you reject the
change, close Claude, and your project is exactly as it was. Everything below is
about getting unstuck faster than that.

## Read the error — or have Claude read it

Error messages look intimidating because they're written for programmers, but the
useful part is often one line near the bottom in plain-ish English: *"file not
found,"* *"permission denied,"* *"no such column: gdp."* You don't have to decode
the rest.

And you don't have to read it alone. The fastest move when something fails is to
**paste the error straight back to Claude** and ask what it means:

```
That command failed with this error — what does it mean and how do we fix it?
[paste the red text here]
```

Claude is genuinely good at this. It wrote (or ran) the thing that failed, it has
the context of your session, and explaining error messages is one of its
strongest skills. For a command-line beginner this is one of the most valuable
habits in the whole guide: **don't puzzle over an error — hand it back.**

:::tip
You rarely need to retype an error. Select it in the terminal, copy it, and paste
it into your next message. The more of the message you include, the better Claude
can diagnose it.
:::

## Two very different kinds of "wrong"

It's worth learning to tell these apart, because they call for different
responses:

- **The command failed.** It stopped with an error and *didn't* do anything — the
  script crashed, the file wasn't found, a package was missing. This is the safe
  kind: nothing changed, and you just paste the error back and let Claude fix it.
- **It ran, but did the wrong thing.** No error at all — the command completed,
  the file was written — but the result isn't what you wanted. The figure has the
  wrong axis, the cleaned dataset dropped rows you meant to keep, the paragraph
  changed a claim you cared about.

The second kind is the dangerous one, precisely *because* there's no red text to
warn you. This is why the review habits from earlier in the guide matter: a
command that "succeeds" can still be wrong, and only your eyes catch it. When the
result is off, say so plainly — *"That ran, but it dropped the 2020 rows and I
need those. Redo it keeping every year."*

## Rejecting a bad edit

If Claude proposes a change you don't like, you don't accept it and fix it later —
you **reject it outright.** In the default mode, an edit isn't written to disk
until you approve it, so rejecting means nothing happens to the file. (This is the
diff review from [Pointing Claude at Your
Work](/ai/pointing-claude-at-your-work/) doing its job.)

The useful part is *what you say next.* Don't just reject — restate the goal:

> "No — that rewrote the whole section. I only wanted the second paragraph
> tightened, and keep the Friedman citation."

Rejecting plus a clear correction is faster than accepting a bad edit and
untangling it afterward. Treat the first attempt as a draft you're steering, not a
verdict you're stuck with.

## Rolling back after the fact

Sometimes you approve a change, and only later realize it was wrong. You still
have options, in rough order of reach:

- **Just ask Claude to undo it.** Within the same session it usually remembers
  what it changed: *"Undo the last edit to that file — put it back the way it
  was."*
- **Fix it by hand.** Every file is visible in VS Code's sidebar. You can open it
  and edit or delete it like any other file on your Mac — you're never trapped by
  something Claude did.
- **Restore from your backup.** This is why the guide keeps insisting on one. If
  your project is in **Dropbox**, you can roll any file back to an earlier version
  from the Dropbox website. If you made a **duplicate folder** before a big
  session, your untouched original is sitting right there. A backup turns "I broke
  it" into "I'll restore the version from an hour ago."

:::caution
The one situation a backup can't save you from is overwriting an irreplaceable
file you never backed up — original survey data, a collaborator's confidential
dataset. That's exactly why the rule is to treat those as read-only and never
point Claude at them without a copy. Recovery starts *before* the mistake.
:::

## When you're truly stuck

If a session has gone in circles — Claude keeps proposing fixes that don't land —
the best move is often to stop and reset rather than push further:

1. **Reject the current change** so nothing half-broken is written.
2. **Quit and start fresh.** A new `claude` session begins with a clean slate;
   restate the goal from the top, more specifically this time.
3. **Restore from backup** if any file got into a bad state, then begin again from
   the known-good version.

None of this is failure — it's the normal rhythm of working with the tool. The
researchers and instructors who get the most out of Claude Code aren't the ones
who never hit errors; they're the ones who shrug, paste the error back, and keep
going.
