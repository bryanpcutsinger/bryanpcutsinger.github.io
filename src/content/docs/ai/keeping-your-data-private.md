---
title: Keeping your data private
description: What happens to data you give Claude, why your plan choice matters, and how to work on confidential or IRB-governed data without exposing it.
draft: false
---

When you [set up Claude Code](/ai/setting-up-claude-code/) you made a couple of quick
privacy decisions at signup — pick a plan, turn data-sharing off, don't paste anything
confidential. This chapter is the full version of that briefing: what actually happens
to the data you hand Claude, why the plan you're on changes the answer, and how to work
on student records, IRB-governed data, or an unpublished manuscript without exposing any
of it.

The short version, if you read nothing else: **de-identify sensitive data before it ever
touches Claude, and keep data-sharing turned off.** The rest of this chapter explains why
those two habits cover most of what a working economist needs.

## What actually gets sent

Start with the one architectural fact everything else follows from: **Claude is not
running on your Mac.** When Claude reads a file, summarizes a draft, or cleans a dataset,
the relevant contents are transmitted over the network to Anthropic's model and the
response comes back. Nothing it "looks at" is processed purely locally.

This is easy to forget precisely because the experience is so local — you open a folder in
VS Code, edits land on your own disk. But the moment Claude needs to *understand* a file to
act on it, that file's contents leave your computer. The working directory limits what
Claude can reach without asking — it is not a wall that keeps your data on the Mac.

:::caution
Treat "Claude can see it" and "it left my machine" as the same event. If Claude read it,
summarized it, or edited it, it was transmitted. There is no local-only mode where
sensitive contents stay on your Mac.
:::

## The bright-line rule

University research offices have converged on a simple, strict way to think about this,
and it's worth adopting wholesale because it removes the guesswork: **entering
confidential data into a public or consumer AI tool is treated as equivalent to releasing
it publicly.**

That's a deliberately conservative framing, and it's the right default for an academic.
It means the following do not go into Claude in identifiable form unless you have
specifically confirmed your data agreement allows it:

- Human-subjects or IRB-governed research data with any identifiers attached.
- Student records — grades, rosters, anything covered by FERPA.
- Unpublished manuscripts and working papers you don't want circulating.
- Grant proposals under preparation, and unpublished results.
- Anything you've signed a data-use agreement promising to protect.

The rule isn't that Claude *will* leak these — it's that the cautious accounting an IRB or
sponsor expects from you doesn't distinguish between "released to the public" and
"transmitted to a third party's servers." For the data you're personally responsible for,
assume the strict reading and you'll never have to walk anything back.

Student data has its own version of this rule. Under FERPA (and its GDPR-style cousins
abroad), identifiable student work or grades entering an AI tool triggers student-privacy
law, and there are only two clean paths: a tool your **institution has vetted and
contracted** (the vendor acts as a "school official" under a data-processing agreement),
or **de-identifying the data first**, which takes it outside FERPA entirely. Identifiable
student work in a personal or consumer account is an unauthorized disclosure — and since
institutional AI contracts are still rare, de-identification is usually the path actually
open to you. Calibrate on two examples: uploading the gradebook for Claude to summarize
is a disclosure of protected records; drafting a generic rubric with no student data
attached involves no education records at all.

## Your plan decides training and retention

Two separate questions hang on which plan you're on: does Anthropic **train** future
models on your inputs, and how long does it **retain** what you sent. These are governed
by your plan and your settings, not by anything you type in a prompt, so this is the part
worth getting right once.

The structure, as of mid-2026, looks like this:

- **Consumer plans (Free, Pro, Max).** With **data-sharing turned on**, your conversations
  can be used to train future models and are retained for up to **five years**. Turning
  data-sharing **off** in your privacy settings cuts retention to **30 days** and keeps
  your inputs out of training. This is the single most important toggle for a typical
  reader, and the reason the setup chapter had you flip it.
- **Commercial plans (Team, Enterprise, API).** These do **not** train on your data by
  default — the terms are written for organizations that can't accept training on their
  inputs — and standard retention is 30 days.
- **Zero data retention.** Qualified accounts on Claude for Enterprise can arrange for
  inputs not to be retained at all after the request is served. It isn't part of the
  standard Enterprise plan — it's enabled per organization after an eligibility check.

The takeaway for most readers on Pro or Max: **find the data-sharing setting and confirm
it's off.** That moves you from the five-year, training-eligible posture to the 30-day,
no-training one — a meaningful difference for anyone touching research or student data,
and free to do.

:::note
Those figures are as of mid-2026, and the day-counts change. When it matters for a
compliance question, check your live privacy settings
(claude.ai/settings/data-privacy-controls) and Anthropic's data-usage docs rather than
quoting this page — and tell your IRB what you actually found there.
:::

## Working on sensitive data safely

Turning sharing off lowers the stakes; it doesn't make confidential data safe to paste. The
durable practice — the one that holds regardless of plan terms — is to **de-identify the
data before Claude ever sees it.** If what reaches Claude carries no identifiers, the
privacy question largely dissolves.

A few concrete moves, in the order you'd actually use them:

- **Strip identifiers first, HIPAA Safe-Harbor-style.** Before a dataset goes anywhere near
  Claude, remove names, addresses, dates tied to individuals, record numbers, emails, and
  the other direct and quasi-identifiers. For teaching, drop names and student IDs *before*
  the grade cleanup; for research, make de-identification the first step of the pipeline,
  run on a copy.
- **Pseudonymize, and keep the key separate.** Replace identifiers with codes
  (`student_001`, `subject_A`) and store the crosswalk that maps codes back to people in a
  *separate* place Claude never opens — not in the working folder. Claude can clean, merge,
  and analyze the coded data without ever holding the key.
- **Let a script, not Claude, touch the raw file.** The cleanest pipeline has a small
  script read the raw export (LMS or survey platform), strip identifiers, and write the
  de-identified copy plus the crosswalk — so Claude only ever sees an anonymous ID and the
  work itself. A script may read identifiable data; Claude's context never should.
- **Don't re-identify inside Claude.** The point of coding the data is defeated the moment
  you paste the crosswalk in to "just check who subject_A is." Keep re-identification a
  manual step you do yourself, outside the session.

One caution: "identifiable" is broader than names. Indirect clues — a birth date, a
distinctive writing style, an essay topic only one student in a small seminar would pick —
can re-identify someone after every direct identifier is gone. Privacy officers call this
the **mosaic effect**: de-identification means addressing *combinations* of clues, not
just deleting the name column. Where the content itself gives the person away, the clean
route is an institutionally contracted tool, not a scrubbing script.

:::tip
A clean division of labor: **identifiers and the crosswalk stay out of the working folder;
the de-identified data goes in.** Then Claude only ever sees what you'd be comfortable
sharing, and the plan's retention terms become a second line of defense.
:::

## The stronger path for truly confidential work

De-identification handles most academic data. But some work genuinely can't be
de-identified, or sits under an agreement that forbids any third-party transmission at
all — certain restricted-use datasets, some clinical data, data behind a data-enclave
agreement. For that, the consumer toggle isn't enough.

The stronger path is an **Education or Enterprise plan, where training is off by default
and zero data retention can be arranged** on qualified setups. One honest caveat: a
vendor's no-training default is a commercial commitment, not a regulatory ruling — which
is why this is a conversation for your institution's IT or research-computing office, who
can put a real contract behind it, not a setting you fix yourself on a personal plan. And
when the data agreement says "no third-party processing," respect it literally: the safe
answer may be that this particular dataset doesn't go into Claude at all.

---

Two habits carry almost all of the weight here: **data-sharing off**, and **de-identify
before Claude sees it.** Get those right and you can use Claude across most of your
teaching and research without exposing anything you're responsible for. The related
discipline — never letting an API key or password into a file, a commit, or printed
output — is its own topic, covered in
[API keys & secrets](/ai/api-keys-and-secrets/).
