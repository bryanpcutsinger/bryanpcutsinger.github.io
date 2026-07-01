---
title: "Writing papers & slides: LaTeX, Overleaf & GitHub"
description: Put Claude Code inside a real academic writing workflow — a LaTeX paper kept in sync between Overleaf and GitHub, Beamer slides, and a verify-every-citation discipline.
draft: false
---

Most of the guide so far has used short, safe examples. Writing a paper is where the
pieces come together: Claude edits LaTeX on your machine, the [LaTeX
toolchain](/ai/working-in-vs-code/) compiles it, [Git and GitHub](/ai/git-and-github/) keep the
history and the cloud copy, and your [house style](/ai/claude-md-file/) does the work of
sounding like *you*. This chapter wires those together on a real manuscript — and draws
one bright line you must never cross when an LLM touches your citations.

## Overleaf and GitHub in sync

Many economists draft in **Overleaf** — it's where coauthors live, and it compiles in the
browser without anyone installing anything. The problem is that Claude Code works on
*files on your Mac*, not in a browser tab. The bridge is Overleaf's **GitHub
integration**, which connects an Overleaf project to a GitHub repository so the two can
exchange changes.

Once that's set up, the round-trip looks like this. You **pull** the project from GitHub
to a folder on your Mac, open that folder in VS Code, and let Claude edit the `.tex`
files there — the same ask → review the diff → approve loop you already know. When you're
happy, you **commit and push** back to GitHub, and then tell Overleaf to **pull from
GitHub** so the browser copy catches up. Your coauthors keep working in Overleaf the
whole time; your edits arrive as a normal update.

The direction that trips people up is the *other* one. If a coauthor edits in Overleaf
while you're editing locally, both sides have changed and Git has to **merge** them. Most
of the time that's painless. Sometimes the same paragraph changed on both sides and Git
reports a **conflict** — it can't decide which version wins, so it marks the spot and
leaves it to a human. That human is you, and Claude is good company for it: open the file
and ask it to walk you through the conflict markers and propose a resolution, then read
the result before you accept it.

:::caution[Pull before you push]
The reliable habit: **pull from GitHub before you start a local editing session, and
again before you push.** That keeps your copy current and turns most conflicts into
non-events. Skipping the pull is how you end up overwriting a coauthor's paragraph — the
one failure mode of this setup worth genuinely fearing.
:::

:::note[As of mid-2026 — verify the current docs]
Overleaf's GitHub integration has lived behind a paid tier in the past, and the exact
menus move. Treat the mechanics above as the shape of the workflow, not a click-by-click
script, and check Overleaf's current documentation for the present details.
:::

## Compiling and iterating

With the project folder open in VS Code, you have the [LaTeX
toolchain](/ai/working-in-vs-code/) from the editor chapter right there — the
extension that builds the PDF and shows you the result beside the source. That tight loop
is what makes Claude useful on a paper rather than just a fancy way to write text.

The pattern is: ask for a change, compile, look. Suppose a table is too wide for the
page. You ask Claude to switch it to a `tabularx` layout; it shows you the diff; you
approve; you rebuild and see whether it fits. If LaTeX throws an error — an undefined
control sequence, a runaway argument, a missing `}` — paste the error message back to
Claude and ask it to find the cause. LaTeX errors are famously cryptic, and reading them
is one of the things Claude genuinely saves you time on.

Good jobs to hand it on a manuscript: tightening a wordy paragraph against your house
style, converting a results table from code output into a `booktabs` table, drafting a
figure caption, reformatting a bibliography entry, or sweeping the whole document for an
inconsistency ("we write *Federal Reserve* on first mention then *the Fed* — make the
paper consistent"). Each one is small, compiles cleanly, and is easy to eyeball.

:::note[Community writing skills — as of mid-2026]
Economists have started packaging this craft advice as installable "skills" —
instruction files Claude loads on demand. One example, `econ-writing-skill` (Lu Han, on
GitHub), distills 50+ writing guides by Cochrane, McCloskey, Head, and others into
templates for introductions, journal-specific LaTeX and table conventions, and AEA
replication-package and AI-disclosure standards. Treat it as a third-party artifact:
read the repo before installing (its headline install pipes a script from the web into
your shell), and hold its output to the same verification as everything else here.
:::

:::tip[Keep edits reviewable]
Ask for one change at a time and rebuild between them. A single focused edit produces a
small diff you can actually read; a sprawling "polish the whole paper" request produces a
diff you'll be tempted to wave through. Small steps keep you the reviewer, not the
rubber stamp.
:::

## Slides

Beamer slides come from the **same setup**. A Beamer deck is just a LaTeX document with a
different document class, so everything above applies unchanged: Claude edits the `.tex`,
the toolchain compiles it to a PDF of slides, you review. Turning a section of a paper
into a short talk — pulling the key result into a frame, lifting a figure onto its own
slide, trimming prose to bullets — is exactly the kind of mechanical reshaping it's good
at, with you deciding what earns a slide. Teaching decks work the same way: hand Claude
your lecture notes for next week and ask for a first-pass Beamer deck — one frame per
concept, examples on their own slides — then prune what doesn't earn its class time.

That keeps everything in one toolchain, which is the appeal. If you'd rather end up in
**PowerPoint** — a job talk in your department's template, say — that's a different route
that goes through a connector on the Claude app side rather than local LaTeX. The
[connectors & MCP](/ai/connectors-and-mcp/) chapter covers it; it's the right tool when the
destination has to be a `.pptx`, not a PDF.

## Verify every citation

This is the part to read twice.

Large language models **fabricate references.** Asked for a citation, a model will
produce something that looks impeccable — plausible authors, a believable title, a
journal that exists, a DOI with the right shape — and is entirely invented. It's
generating text that *resembles* a citation, and a fake one resembles a real one almost
perfectly. The danger is precisely that the output looks right.

This isn't hypothetical, and it isn't fixed by feeding the model the sources. In a
controlled experiment published in *Library Trends* (2025), two librarians handed Claude
the **full text** of a fixed reading list and asked for a literature review. It was fast
at collating what the papers agreed on — and it *still* produced incomplete and
hallucinated references. Their verdict: without a human supplying context and analysis,
it "cannot produce a literature review that would stand on its own." Use it as a
first-pass summarizer, not a synthesizer — and never as a source of citations.

So the rule is absolute: **verify every citation against the actual source before it
enters the paper.** Not the ones that look suspicious — *every* one. Treat each
reference as unverified until the title, all the authors (names *and* order), the year,
and the venue match the real article — not the model's confidence. The same caution
extends to anything Claude can invent in a draft: a DOI, a page number, a statistic, a
quotation.

:::danger[Never let an unverified reference reach a draft]
A fabricated citation in a working paper, a referee report, or a grant is a serious
integrity failure — and "the AI added it" is not a defense; you're the author of record.
The safe workflow: write from references you already hold, let Claude format and arrange
them, and verify each one against the source. Don't ask it to *find* citations and then
trust what comes back.
:::

There's a structural way to lower the risk. If your references live in **Zotero**, you
can connect it to Claude Code through an MCP server (a small add-on program that plugs
an outside tool into Claude Code — a later chapter covers these) so Claude searches *your* library —
items you actually have — and exports the **actual BibTeX entry** into your `.tex` file
instead of reconstructing one from memory; it can even flag retracted papers. The
discipline that goes with it: search your library first, and treat any web or Scholar
hit as unverified until it's matched there. One honest caveat — this guarantees the
citation matches your Zotero record, not that the record itself is correct, so the
check-at-the-source rule still applies. The [connectors & MCP](/ai/connectors-and-mcp/) chapter covers
wiring up Zotero. And this is exactly the kind of non-negotiable that belongs in your
[CLAUDE.md](/ai/claude-md-file/): *never invent citations, DOIs, page numbers, or quoted
text* — written down once, enforced every session.

## Where the style lives

Notice what this chapter *didn't* do: it didn't teach you how to make Claude write like
you. That's deliberate. Your house style — the em-dashes, the *Fed* convention, the ban
on breathless adjectives — lives in your [CLAUDE.md](/ai/claude-md-file/), described once
and inherited by every session. By the time you sit down to draft a paper, that briefing
is already done, and the writing work is *applying* a style Claude already has rather than
re-explaining it. That's what lets the whole workflow feel like editing instead of
dictation.

One trick if you haven't written that style description yet: don't write it from
scratch. Hand Claude a few pieces of your real prose — a published introduction, a
couple of referee reports — and ask it to describe your style: tone, sentence length,
habits, what you avoid. Edit what comes back, then fold the essentials into your
CLAUDE.md.

---

That's the academic writing loop end to end: pull from GitHub, edit LaTeX locally with
Claude, compile and review, push back so Overleaf catches up, and verify every reference
before it lands. The [guide overview](/ai/) points to what's next.
