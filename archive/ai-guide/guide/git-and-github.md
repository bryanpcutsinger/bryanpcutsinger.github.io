---
title: "Version control: Git & GitHub"
description: What Git and GitHub are in plain terms — an undo history for a whole project, plus a cloud home for it — and the handful of moves you'll actually use day to day.
draft: false
---

You already know the feeling of a `paper_final_v3_REALLY_final.tex` graveyard: a folder
full of dated copies because you were afraid to overwrite something you might want back.
**Git** is the grown-up version of that instinct. It keeps a complete history of a folder
so you can change anything freely, knowing every earlier state is recoverable — without
the copies. **GitHub** is where that history lives in the cloud: a backup, a way to share,
and the place collaborators meet. The two together are worth learning not because you'll
become a software engineer, but because they turn "I think I broke it" into a calm
`undo` — which is exactly the safety net you want once Claude Code starts editing your
files.

This chapter assumes you're [working in VS Code](/ai/guide/working-in-vs-code/), where Git is built in and most of
what follows happens with a click or a single command.

## What is Git

Git is a save-history for a whole folder. At moments you choose, you take a **commit** — a
snapshot of every file as it stands right then, with a short message saying what changed.
The chain of commits is your project's history, and you can return to any point in it.

The key word is *snapshot*. A commit isn't a backup of one file; it captures the entire
project at once — your script, your data-cleaning code, your `.tex` draft, your figures —
so "go back to how things were on Tuesday" restores all of them together, consistently.
That matters in research, where a result depends on a script *and* the data *and* the
table-building code all being in step.

You decide when to commit, and the rhythm is up to you: after you finish a working draft
of a section, after a regression finally runs clean, before you try something you're not
sure about. A good commit is one coherent change with a message your future self will
understand — `Add robustness check with state clustering`, not `stuff`.

## What is GitHub

Git runs entirely on your Mac; a project's history lives in a hidden folder right next to
your files, and you never need the internet for any of it. **GitHub** is a website that
hosts a copy of that history in the cloud. The two are separate on purpose.

- Your **local** repository is the one on your machine, where you actually work.
- The **remote** is the copy on GitHub. You sync them deliberately: **push** sends your
  local commits up; **pull** brings down commits that aren't on your machine yet.

That separation is the whole point. Pushing to GitHub is an off-site backup — if your
laptop dies, your work and its full history are safe. It's also how you share: a
collaborator can pull your commits, and you can pull theirs, each of you working locally
and syncing when ready. And it's the spine of the writing workflow later in this guide,
where a paper stays in sync between [Overleaf and GitHub](/ai/guide/writing-papers-and-slides/).

:::note
A GitHub repository can be **private** (only you and people you invite can see it) or
**public** (anyone can). Unpublished work — a working paper, anything with confidential or
restricted data — belongs in a private repo, and there's more on that below.
:::

## Starting a project, starting a repo

There are two ways a project becomes a Git repository, depending on which came first.

**You have a folder already.** Say you've got a course folder or a half-finished
replication on your Desktop and you want it under version control. Open it in VS Code, and
either click **Initialize Repository** in the Source Control panel or run `git init` in the
Terminal. That creates the hidden history alongside your files. From there you make your
first commit (everything as it stands now becomes snapshot one), and when you're ready to
back it up, create a matching repository on GitHub and push to it.

**The project lives on GitHub already.** A coauthor shares a repo, or you're picking up
your own work on a different machine. Here you **clone** it — copy the whole thing,
history and all, down to your Mac:

```bash
git clone https://github.com/yourname/your-project.git
```

That gives you a local folder already wired to its remote, so push and pull just work.
Cloning is also how you grab a public replication package or a course template to build
on.

Either way you end up in the same place: a local folder with a history, linked to a remote
on GitHub. The only difference is which end you started from.

## The day-to-day loop

You don't need most of Git. The daily loop is a handful of moves, and VS Code's Source
Control panel gives you all of them with buttons — but it's worth knowing what each one
does, because that's what you're approving when Claude offers to do it for you. (If you'd
rather stay out of the terminal entirely, **GitHub Desktop** is a free app that does the
same loop with clicks — not a crutch, just a different interface.)

- **Check status.** `git status` (or just glancing at the Source Control panel) tells you
  what's changed since your last commit. This is your "what am I about to save?" view.
- **Review the diff.** Before committing, look at *exactly* what changed — the old lines
  and the new, side by side, the same red/green **diff** you saw approving an edit in
  [your first session](/ai/guide/your-first-session/). Click a changed file in the Source
  Control panel and VS Code shows it. Never commit without looking; the diff is where you
  catch a stray edit or a number that shouldn't have moved.
- **Commit.** Write a one-line message describing the change and save the snapshot. In the
  Terminal that's two steps — stage what you want, then commit:

  ```bash
  git add .
  git commit -m "Clean enrollment data and drop duplicate IDs"
  ```

  (*Staging* with `git add` is just choosing which changes go into this commit; `.` means
  "all of them.")
- **Push and pull.** **Push** sends your new commits to GitHub; **pull** brings down any
  that aren't on your machine yet. Push when you want your work backed up or shared; pull
  before you start working if a collaborator might have changed something.
- **Undo a mistake.** This is the payoff. If a change went wrong and you *haven't*
  committed yet, you can discard it and snap the file back to its last committed state
  (**Discard Changes** in the panel). If you already committed and want to walk the whole
  project back to an earlier snapshot, that's possible too — and a good moment to ask
  Claude to do it carefully, since the exact command depends on whether you've already
  pushed.

That's the loop: *status → review the diff → commit → push*, with *pull* when you're
syncing and *undo* when you need it. Everything else Git can do is something you'll look
up the day you need it.

## Commit as a safety net

Here's the habit that makes the rest of this guide safer: **commit before any big change.**

A clean commit is a guaranteed restore point. Before you ask Claude to refactor a messy
script, restructure a `.tex` document, or run a sweeping find-and-replace across a folder,
take a commit first. If the result is wrong — or just not what you wanted — you discard
everything since and you're back exactly where you started, with zero loss. The cost is
ten seconds; the alternative is reconstructing your work from memory.

This complements Claude Code's own **checkpoints**: it automatically snapshots your files
before each edit, and `/rewind` steps back to any of those points. But the two operate at
different scales. A checkpoint is a *local undo* — automatic, temporary, and covering
only the edits Claude made through its own editing tools. A commit is *permanent
history*: you choose when to take it, it captures everything, and it survives cleanups,
restarts, and even a dead laptop once you've pushed it. Use `/rewind` for the small stuff mid-conversation, and
lean on a commit for the deliberate "I'm about to do something big" moment. Checkpoints
and `/rewind` get their own treatment in [working safely](/ai/guide/working-safely/); this is the
version-control half of the same safety net.

:::tip
Get in the habit of committing at natural stopping points — a finished section, a working
regression, the end of a session — not just before big changes. A history of small,
labeled commits is itself an undo log: the more often you snapshot, the finer-grained your
"go back to before that" becomes. It's also a defensible audit trail of how an analysis
evolved — exactly what you want when a referee or a journal's data editor asks how a
result changed.
:::

## Don't commit what shouldn't leave your machine

A commit captures files; a push sends them to GitHub. So the discipline that matters is
keeping the wrong things *out* of commits in the first place — because once something is
pushed to a remote, treating it as fully erased is hard, and on a public repo it may
already have been seen.

The tool for this is a **`.gitignore`** file: a plain-text list, at the top of your
project, of files and folders Git should pretend aren't there. Anything matching it never
gets staged, committed, or pushed. Three categories belong in it for an economist:

- **Confidential or restricted data.** Raw data under a license, anything with personal
  identifiers, IRB-restricted or student data. Ignore the whole `raw/` folder so it
  physically cannot be committed. Your *code* goes on GitHub; the protected data stays on
  your Mac.
- **Secrets.** API keys, tokens, passwords, any `.env` file that holds them. These should
  never be in a file you commit — see [API keys & secrets](/ai/guide/api-keys-and-secrets/) for where they
  belong instead.
- **Large or regenerable files.** Big binaries, build artifacts, and anything a script can
  recreate (intermediate datasets, compiled PDFs). GitHub isn't built for large files, and
  there's no reason to version something you can rebuild from code.

The second line of defense is the repo's visibility. Unpublished work — a working paper
before it circulates, a project on sensitive data — belongs in a **private** repository,
where only people you invite can see it. Private repos plus a careful `.gitignore` are how
version control coexists with confidentiality; the broader question of what data should
leave your machine at all is the subject of [keeping your data private](/ai/guide/keeping-your-data-private/).

:::caution
A `.gitignore` only blocks files that aren't *already* committed. If you accidentally
commit a data file or a key, adding it to `.gitignore` afterward doesn't remove it from
the history — pulling it back out is a separate, fiddly job. The safe move is to set up
`.gitignore` first, before the first commit, and to glance at the diff every time so
nothing slips in.
:::

## How Claude Code fits

Here's the good news for a command-line beginner: **you don't need to know Git to use
Git.** You need Git to *exist* in your project; Claude can drive the mechanics. It's
genuinely good at the parts people find tedious: it can check status, stage your changes,
write a clear commit message that actually describes the diff, and push — all from a
plain-English request like *"commit this with a sensible message and push."* It can also
draft a `.gitignore` suited to your project, or talk you through an undo when you're not
sure which command is safe. And the history pays Claude back: once a project has real
commits, Claude can inspect how files evolved and reason about *when* a bug or a weird
result crept in — the history becomes context it can use.

The arrangement is the same one that governs everything else in this guide: **Claude does
the typing; you stay the reviewer.** Read the diff before you approve a commit, exactly as
you would for any edit. Confirm the commit message matches what actually changed. And be
especially deliberate about the irreversible-feeling steps — pushing to a shared remote,
or rewriting history — where it's worth slowing Claude down and checking before you say
yes. Used this way, the version-control habits in this chapter and Claude's help reinforce
each other: frequent commits give Claude clean restore points to work against, and Claude
makes the commits cheap enough that you actually take them.

---

That's version control end to end — snapshots you can return to, a cloud home that backs
them up, and a `.gitignore` keeping the private things off it. With commits as a reliable
safety net, you're set up for the workflows that lean on them most: keeping a paper in sync
between [Overleaf and GitHub](/ai/guide/writing-papers-and-slides/), and the heavier [orchestration](/ai/guide/orchestration-and-workflows/) work later in the
guide. The [guide overview](/ai/guide/) points to what's next.
