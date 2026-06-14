---
title: "Teaching with Claude Code"
description: "Using Claude Code for the teaching half of an academic job: syllabi, problem sets, answer keys, lecture notes and slides, office-hours summaries, and grading prep — with the FERPA and answer-key cautions that come with them."
draft: true
---

:::note
Reference — for when you're up and running. You don't need this to get started;
come back to it when you're ready to put Claude Code to work on teaching.
:::

The research uses of Claude Code get most of the attention, but teaching is where
many economists will feel the time savings first. A syllabus, a problem set, a set
of lecture notes, a rubric — these are structured, repetitive documents that you
remake every term, and Claude is well suited to drafting them while you supply the
judgment. This post walks through the teaching tasks that work best, and the two
cautions that come with them: **never trust a generated answer key without
checking the math**, and **keep student records out of the tool**.

## Why teaching is a natural fit

Course materials have a shape Claude can work with: a syllabus follows a familiar
structure, a problem set repeats a format across questions, lecture notes have a
predictable rhythm. You're rarely starting from a blank page so much as adapting
last term's version, leveling a question up or down, or reformatting notes into
slides. That's drafting-and-revising work — exactly the loop this tool is good at,
with you as the editor.

And unlike most research files, a lot of teaching material is **low-stakes to
draft**: a first cut of a syllabus or a practice problem isn't irreplaceable data.
You can let Claude move faster here than you would on a working paper — while still
reading everything before it reaches a student.

## What to use it for

- **Syllabi.** *"Draft a 15-week intermediate macro syllabus: topics, a rough
  reading per week, and three assessment points. Keep it to one page."* Then
  iterate — swap a unit, adjust the level, add your policies. Faster than copying
  last year's and editing by hand.
- **Problem sets.** Generate practice problems in a consistent format, vary the
  numbers for multiple versions, or scale a question's difficulty. *"Write three
  short problems on consumer surplus at the principles level, each with a brief
  setup and a numeric answer."*
- **Lecture notes → slides or handouts.** Point Claude at your notes and ask it to
  produce a **Beamer** deck, a one-page handout, or a slide outline. *"Turn
  `@notes/elasticity.md` into a Beamer presentation — one idea per slide, keep my
  examples."* (Beamer is the LaTeX presentation format many economists already
  use.)
- **Office-hours and Q&A summaries.** Turn your scrappy notes from a week of office
  hours into a short "where students struggled" summary you can act on — or a FAQ
  to post for the class.
- **Grading prep.** Draft a rubric from an assignment prompt, or a model answer you
  then verify, so your grading is consistent. The verifying is the whole job here
  (see below).

## The answer-key caution

This is the one teaching-specific trap, and it's worth stating bluntly. Claude
will produce an answer key that *looks* authoritative — clean steps, a confident
final number — and is **wrong**. It can drop a sign, misapply a formula, or
mis-solve an optimization and present the result with exactly the same fluency it
uses when it's right. There is no tone change when the math is off.

:::danger
Never hand students a generated answer key, worked solution, or grade without
checking the math yourself. Claude solves problems in a confident voice whether or
not it's correct — a wrong key marked "correct" is worse than no key at all.
:::

So treat any solution Claude produces as a *draft you must verify*, the same way
you'd verify a number before it enters a paper. Work the problem, or have Claude
show every step and check each one. This isn't a reason to avoid using it for
problem sets — a verified key it drafted still saved you the setup time — it's a
reason to never skip the check.

## The FERPA and student-data caution

Teaching brings a kind of data research often doesn't: **records about identifiable
students.** Grades, enrollment lists, emails, disciplinary notes, and graded work
are typically protected under [FERPA](https://studentprivacy.ed.gov/), and Claude
Code sends the files it reads to Anthropic's servers to do its work. That means
student records should not go near it.

:::caution
Keep identifiable student information out of Claude Code: names tied to grades,
rosters, student emails, disciplinary records, and graded work. Draft the
*materials* (syllabi, problems, rubrics) with Claude; keep the *records* out. This
is the same confidentiality rule from the [integrity
page](/ai/trust-safety-integrity/), applied to teaching.
:::

The practical line is simple: use Claude on the things you'd happily post to the
whole class, and keep anything tied to a specific student's identity or grade out
of it. If you want help analyzing grade distributions, strip the names first and
work with anonymized data in a separate file.

## A teaching CLAUDE.md

Just as research projects benefit from a [CLAUDE.md](/ai/claude-md-and-memory/),
so does a course. A short file in your course folder can carry the standing
context — *"I teach intermediate microeconomics; keep examples at that level. The
`grades/` folder is off-limits. Write slides in Beamer. Never give me a worked
solution without showing every step so I can check it."* — so you're not retyping
your level, format, and guardrails every session.

Teaching is half the job, and it's the half most of these tools ignore. Used with
the two cautions above, Claude can take the mechanical load off your course prep
and leave you the part that needs a teacher: deciding what's worth teaching and
making sure it's right.
