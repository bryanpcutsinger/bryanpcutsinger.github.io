---
title: "Asking Claude to Read & Analyze (Not Just Edit)"
description: "Claude Code's biggest early payoff for an economist isn't editing files — it's reading and explaining them. How to point it at a dataset, draft, or PDF and ask good questions about what's there."
draft: true
---

:::note
Reference — for when you're up and running. You don't need this to get started;
come back to it when the topic comes up in your own work.
:::

Most of this guide so far has shown Claude Code *changing* files — creating a
document, cleaning a column, rewriting a paragraph. But the fastest payoff for an
economist is usually the opposite: asking Claude to **read** something and tell
you what's in it. Profiling a dataset you inherited, summarizing a stack of
referee notes, or comparing two drafts of a paper costs you nothing and risks
nothing, because reading never changes a file. This post is about that half of
the tool, which beginners tend to under-use.

## Why reading is the safe place to start

A read-only request is the lowest-stakes thing you can do with Claude Code. It
opens the file, looks, and reports back — your data and drafts are untouched.
That makes "read and explain" the ideal way to build trust in the tool before you
ever let it edit anything that matters.

It's also where the leverage is. You already know how to *write* a paragraph or
recode a variable; what eats your time is getting oriented in material you didn't
make — a co-author's messy script, last year's syllabus, a 60-page working paper
you need to react to by Friday. Claude is fast at exactly that kind of triage.

:::tip
A good first move in any new project: open the folder and ask, *"Read through this
folder and tell me what each file is and how they relate."* You get a map before
you touch anything.
:::

## Pointing Claude at a specific file: the `@` reference

When you want Claude to look at one particular file, you don't have to describe
where it is in prose. Type `@` at the prompt and you'll get a file picker that
completes paths from your project folder. So instead of "look at my panel
dataset," you write:

```
Summarize the columns in @data/panel.csv — what's the unit of observation,
the time range, and which variables look like identifiers?
```

The `@` reference drops the exact file into your request, so there's no ambiguity
about which file you mean. You can reference more than one — handy when you want a
comparison (more on that below). This is the same mechanic whether the file is a
dataset, a script, or a draft.

## What to ask it to read

A few patterns that pay off immediately:

- **Profile a dataset.** *"Describe `@data/cps.csv`: list the columns with their
  types, the number of rows, how much is missing in each column, and anything that
  looks off."* You get the shape of the data — units, coverage, obvious problems —
  in seconds, without writing a line of summary code. (Verify any count that will
  end up in the paper against your own code; see below.)
- **Summarize messy notes.** Point it at a file of reading notes, meeting notes,
  or a long email thread and ask for the three things that actually need a
  decision. Good for turning a semester's worth of scattered office-hours notes
  into a list of where students kept getting stuck.
- **Explain code you didn't write.** *"Walk me through what `@clean.do` does, step
  by step, in plain English."* Inheriting a collaborator's Stata or R script is
  far less daunting when you can ask it what each block is for.
- **React to a long document.** Drop in a working paper or a grant call and ask for
  a one-page summary, the main contribution, or the parts most relevant to your
  question. You still read the original — but you read it knowing where to look.

## Comparing and diffing

Two of the most useful read-only tasks involve *two* files.

**Compare two drafts.** Reference both and ask what changed in substance, not just
wording: *"Compare `@intro-v1.md` and `@intro-v2.md`. What claims were added,
dropped, or softened?"* This is the kind of thing that's tedious to do by eye and
quick for Claude.

**Diff two versions of a script.** If you have an old and a new version of an
analysis file, ask: *"What's different between `@analysis-old.R` and
`@analysis.R`, and could any of those changes alter the results?"* That last
clause matters — a changed sample filter or a flipped sign is exactly the kind of
quiet change that moves a coefficient.

:::note
A "diff" here is just a before-and-after comparison — the same idea as the
side-by-side edit view in [Pointing Claude at Your
Work](/ai/pointing-claude-at-your-work/), but applied to two files you already
have rather than to a proposed edit.
:::

## What file types can it open?

Claude reads **plain-text formats** directly and easily. Anything that's text
under the hood is fair game:

| Format | Can Claude read it directly? | Notes |
| --- | --- | --- |
| `.csv`, `.txt`, `.md`, `.json` | Yes | Plain text — opens and reads natively. |
| `.R`, `.do`, `.py`, `.tex` | Yes | Code and LaTeX are just text. |
| `.xlsx` (Excel) | Usually, with help | Not plain text; Claude can write a short script to read it, or ask you to export a sheet to CSV. |
| `.dta` (Stata) | With help | A binary format — Claude can read it via a small script (e.g. pandas or a Stata command), not by opening it raw. |
| `.pdf` | Often | Text-based PDFs read well; a scanned image PDF needs OCR first. Good for pulling a table or the abstract out of a paper. |

The rule of thumb: if you could open it in a text editor and see readable text,
Claude can read it straight away. If it's a binary format (Excel, Stata, a scanned
PDF), Claude can still get at the contents, but it'll do so by running a small
piece of code — which it will show you first.

## Reading is free — but a computed number is still a claim

Two habits keep this safe and honest:

- **Let it read as much as it wants.** Opening ten files to answer your question
  changes nothing on disk. There's no reason to ration it.
- **Verify any number it computes against your own output.** If you ask "how many
  observations are in this panel?" and Claude answers "14,320," that figure does
  not belong in your paper until your *own* code produces it. Reading is free;
  trusting a generated statistic is not. This is the same discipline from the
  [integrity page](/ai/trust-safety-integrity/) — a plausible number is not a
  verified one.

Start here. Spend a session just asking Claude to read and explain your own
files — you'll get comfortable with the tool on tasks where nothing can go wrong,
and you'll learn what it's genuinely good at before you ever hand it the keys to
edit.
