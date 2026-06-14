---
title: "How to Ask: Prompting Habits"
description: "Practical habits for writing clearer prompts to Claude Code — giving context, being specific, iterating, and knowing when to be precise versus letting it explore."
draft: true
---

:::note
Reference — for when you're up and running. You don't need this to get started;
come back when you want to sharpen how you ask.
:::

Once you've run a few real tasks — watching Claude read your files, make edits, and
run commands — the natural next question is how *you* ask. This post is about the
other half of the loop. The quality of what Claude does depends heavily on how
clearly you tell it what you want. The good news is that getting better at this is
mostly common sense, not jargon.

## Give context, not just commands

The single biggest improvement you can make is to say *what you're trying to
achieve and why*, not only the literal step you think comes next. Claude isn't
reading your mind; it's reading your words. When it knows your goal, it can make
better choices about the details — and catch you when the step you asked for won't
actually get you there.

- **Vague:** "Rename these columns."
- **Better:** "I'm going to combine this spreadsheet with another one later, so the
  ID column needs to match. Rename `cty` to `id` and make sure it's a five-digit
  string with leading zeros."

The second version tells Claude the *purpose* (a later merge) and the *constraint*
(five-digit IDs). With the first, it might rename the column and quietly strip the
leading zeros — exactly the bug that would wreck your merge.

## Be specific about the outcome

Name the file, the format, and the constraints. "Specific" doesn't mean long; it
means leaving less to guess. Compare:

- **Vague:** "Clean up my data."
- **Good:** "In `panel.csv`, drop rows where `real_gdp` is blank or coded `NA`,
  then write the result to a new file called `panel_clean.csv`. Don't change the
  original file. Tell me how many rows you dropped."

The good version pins down the input, the operations, the output location, and a
sanity check (the row count) — and it protects your original file. That row count
matters: silently dropped observations are how a sample quietly changes underneath
your results.

:::caution
Never let a tool overwrite your only copy of an important dataset. Treat raw data
as read-only and write cleaned versions to a new file.
:::

The same logic applies to prose: instead of "fix my introduction," try "tighten
the second paragraph of the introduction to about 120 words, keep the Friedman
citation, and don't change the section heading."

A useful test: read your prompt back and ask, "Could a careful assistant do the
wrong thing and still claim they followed my instructions?" If yes, add the
missing constraint.

Put together, the pattern is the same every time — name the purpose, the target,
and the guardrail:

| Vague ask | Sharper ask | What the sharper version pins down |
| --- | --- | --- |
| "Rename these columns." | "Rename `cty` to `id` as a five-digit string with leading zeros — I'll merge on it later." | The purpose (a merge) and the constraint |
| "Clean up my data." | "In `panel.csv`, drop rows where `real_gdp` is blank or `NA`, write the result to `panel_clean.csv`, don't touch the original, and tell me how many rows you dropped." | Input, output, a safety rule, and a check |
| "Fix my introduction." | "Tighten the second paragraph of the intro to ~120 words, keep the Friedman citation, and don't change the heading." | The scope and what to preserve |
| "Sort this." | "Sort this reading list alphabetically by author's last name and save it as a new file." | The exact target |

:::tip
To point Claude at a specific file without describing where it lives, type `@` at
the prompt for a file picker — e.g. `summarize @data/panel.csv`. More on this in
[Reading & Analyzing](/ai/reading-and-analyzing/).
:::

## It's a conversation — iterate

Resist the urge to cram everything into one perfect prompt. Claude Code keeps the
context of your session, so it's natural to refine across several turns. Start
with a first pass, look at what it did, and steer:

- "Good, but make the headings bigger and the body text a bit smaller."
- "That summary is close — make it one paragraph instead of bullets, and lead with
  the main point, not the background."

This is faster and more reliable than trying to specify every detail up front,
because you often don't know what you want until you see a first version. Treat
the first reply as a draft you're editing together, not a final answer you accept
or reject.

## Precise versus exploratory

Match how you ask to how much you already know.

- **When you know exactly what you want, say it.** "Take this reading list and
  sort it alphabetically by author's last name, then save it as a new file."
  There's no reason to make Claude guess at a target you can already describe.
- **When you don't, ask it to explore first.** "I have a monthly inflation series
  in this file and I want to show its trend. What are two or three sensible ways
  to do that, and what are the trade-offs between smoothing and responsiveness?"
  Here you're asking for options and reasoning *before* any work happens, so you
  can choose a direction rather than reacting to one Claude picked for you.

Knowing which mode you're in saves time. Being precise about something you're
actually unsure of just locks in a guess; asking for exploration when you already
know the answer wastes a turn.

## Ask it to explain before doing

For anything consequential — changing a file, restructuring a draft, running a
command you don't recognize — ask Claude to explain its plan *before* it acts.
**Plan mode** is built for exactly this, but you can also just ask in
plain English: "Before you change anything, walk me through what you're going to
do and why."

This habit pays off twice. You catch mistakes early, while they're cheap to fix,
and you learn what the tool is doing instead of just accepting it. For a
command-line beginner, "explain this command before you run it" is one of the most
valuable phrases you can use.

## Break big tasks into steps

A request like "reorganize my whole replication folder and rewrite the paper" is
too big to do well in one shot — for Claude or for a human assistant. Break it
down:

- First: "List everything in this folder and describe what each file seems to be."
- Then: "Propose a cleaner folder structure, but don't move anything yet."
- Then: "Okay, move the figures into `figures/` and the datasets into `data/`."

Smaller steps give you natural checkpoints to review, and they make it obvious
where something went wrong if it does.

Finally, **tell Claude about you.** Your field, skill level, and preferences are
context it can't infer. "I'm a beginner at the command line, so explain each
command before running it." "I teach undergraduate macro, so keep examples at that
level." "I work in Stata; show me Stata, not R." "Keep your explanations short and
skip the jargon." Saying this in a prompt works — but repeating it every session
gets old. That's the subject of the next post: a way to tell Claude
these things *once* and have it remember.
