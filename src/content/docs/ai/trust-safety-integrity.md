---
title: "Trust, Safety & Integrity"
description: "How to use Claude Code responsibly: review its work, manage permissions, protect your data, and never let it fabricate facts or results."
draft: true
---

By now you've installed Claude Code, opened it in a project, learned to read its
proposed edits, and seen how operating modes and permissions work. This post is
about the part that matters most: using the tool in a way that protects your data,
your reputation, and the integrity of your work. None of it is hard, but it does
require a habit of mind. Treat what follows as the rules of the road — and as the
last thing to read before you start using Claude Code for real.

## Claude can be confidently wrong

The single most important thing to internalize: Claude does not "know" things
the way you do. It generates plausible text, and plausible is not the same as
correct. It will sometimes state a wrong fact, misremember a method, or produce
code that runs but does the wrong thing — all in the same calm, fluent voice it
uses when it's right. There is no tone change when it's guessing.

So the rule is simple: **you are the reviewer of record.** Nothing Claude
produces enters a document, a spreadsheet, or a final file until you have
checked it yourself. The tool is a fast, tireless assistant. It is not a
collaborator you can take on faith, and it is certainly not an authority.

## Permissions, revisited

You've met the [operating modes](/ai/operating-modes/). Here's how to think about
them through a safety lens. The question to ask before allowing an action is: *if this goes
wrong, can I undo it?*

- **Safe to allow freely.** Reading files, searching your data, running a
  cleaning script that only writes to a `processed/` or output folder, building a
  draft results table. These are reversible or harmless — worst case you delete
  the output and rerun.
- **Always review first.** Anything that deletes or overwrites a file, moves
  files around, **touches your raw data**, runs `git commit` or `git push`, or
  installs software. These can destroy work you can't get back — and a quiet edit
  to raw data or a variable definition can invalidate every result downstream.

Match the mode to the stakes. Use **default mode** (Claude asks each time) or
**Plan mode** (read-only until you approve a plan) for anything irreplaceable —
your raw data, a working-paper draft, a replication file, anything under version
control you haven't backed up. Reserve **auto-accept edits** for genuinely
low-stakes work: drafting lecture notes, iterating on a figure's styling, scratch
code in a throwaway folder.

:::caution
**Bypass permissions** is for sandboxes you don't mind breaking, not your live project.
:::

## Review before you accept

When you [pointed Claude at your work](/ai/pointing-claude-at-your-work/) you
learned to read the diff — the side-by-side of what Claude wants to change. On
real work, look at it **every single time.** This is not optional
caution; it's where you catch the confident-but-wrong problem before it lands.

Read the diff the way you'd read an assistant's edits to an important file:
does this change do what I asked, and *only* what I asked? Did it quietly alter
a setting, drop a line, or "clean up" something that wasn't broken? A
thirty-second read of the diff is far cheaper
than tracking down a silent error three weeks later.

:::note[Screenshot to add]
*[SCREENSHOT: a diff view with additions and deletions highlighted, before the reader clicks accept]*
:::

## Integrity — the big one

This is the section to take most seriously, because it strikes at the heart of
academic work. **Claude will invent facts.** It will produce a citation that
looks perfect — plausible authors, a real-sounding title in a real journal, a
clean DOI, even a page number — for a paper that does not exist. The same goes
for quotes, summary statistics, and regression coefficients: it will report a
number that looks exactly right and is simply made up. This isn't a rare glitch;
it's a predictable consequence of how the tool works.

:::danger
No citation, quote, statistic, or data value enters your work until you have
verified it against the original source. Never let Claude invent references,
page numbers, or results.
:::

The rule: **no fact enters your work until you have verified it against a real
source.** Check the citation in your reference manager or the journal's site, the
quote against the actual paper, the number against the data you actually have —
not by asking Claude whether it's sure. And keep a sharp line between two very
different statements:

- "I verified this" — you found the actual source and confirmed the details.
- "This plausibly exists" — Claude produced it and it looks right.

Only the first belongs in a paper, a referee report, or a lecture. The same
discipline applies to results: if Claude reports a coefficient, an N, or a summary
statistic, it must trace back to output your own code produced, not to a value it
filled in to be helpful. Never let it hand-type a number into a table.

## Data safety

Your important files are precious. Treat them as **read-only**: Claude reads
from them, but it writes only to a separate working or output folder.

:::danger
Never point Claude at irreplaceable files without a backup — that one rule prevents the worst category of accident, an irreversible overwrite of something you may not be able to recreate. Keep backups regardless, ideally somewhere outside the project folder.
:::

Be just as careful with the data itself. If you ask Claude to clean or merge a
dataset, it may quietly drop observations that don't match or fill in missing
values to make things "work" — silently changing your sample and, with it, your
results. Don't let it. Insist that it report the row count at each step and show
you what changed, so you can account for every observation.

## Confidentiality

Claude Code runs locally, but it sends your prompts and the files it reads to
[Anthropic's servers](https://code.claude.com/docs/en/data-usage) to do its work. That means some material simply should not
go near it:

- **Unpublished work under review or embargo** — a manuscript you're refereeing,
  a working paper shared in confidence, proprietary data from a firm or agency.
  If someone gave it to you in trust, keep it out.
- **Personal records** — respondent-level survey data, identifiable information
  about research participants, or student records covered by FERPA.
- Unpublished data or text a collaborator shared in confidence.

When in doubt, ask whether you'd be comfortable emailing the material to a
third-party service. If not, don't paste it in.

## A short checklist

Keep this somewhere handy until it becomes automatic:

- [ ] Did I read the diff before accepting?
- [ ] Is anything irreplaceable protected by default or Plan mode?
- [ ] Have I verified every citation, quote, and number against the original source?
- [ ] Does every number in my text trace to output my own code produced — not a value Claude typed in?
- [ ] Is my raw data untouched, with writes going only to a processed/output folder?
- [ ] Did I confirm no observations were silently dropped or changed (row counts match)?
- [ ] Did a second, fresh check review any analysis code before I trusted its results?
- [ ] Is there nothing confidential, embargoed, under review, or private — including respondent or student data — in what I shared?

## Wrap-up

That's the path. You can install Claude Code, point it at a project, work with
it through its operating modes, read and approve its changes, and — most
important — do all of that without surrendering your judgment or your integrity.
The foundations are in place.

From here, the best next step is to use the tool on something real but
low-stakes: organizing a messy project folder, reformatting a handout, or turning
rough reading notes into a clean outline you'll verify anyway. Pay attention to
where it saves you time and where it tries to lead you astray. When you start using
it for empirical work, the [verification routine](/ai/verifying-claudes-work/) turns
these rules into a repeatable set of checks — and the rest of the
[reference pages](/ai/prompting-habits/) go deeper as each topic comes up.

The tool is powerful. It's your work. Keep it that way.
