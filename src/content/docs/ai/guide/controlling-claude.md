---
title: Controlling Claude
description: How to steer a Claude session on real work — the explore, plan, implement, commit loop, plan mode, the permission modes, and the habit of staying the reviewer.
draft: false
---

In [your first session](/ai/guide/your-first-session/) you approved one small edit: Claude
showed you a diff, you said yes, the file changed. That single approval is the whole game
in miniature. Real work is just more of it — a data-cleaning script with a dozen edits, a
paper section that touches three files — and approving a dozen diffs one at a time gets
tedious fast. This chapter is about the next move: steering a whole *run*, not just a
single edit, without giving up the control that made the first one safe.

## The work loop: explore, plan, implement, commit

The most reliable way to drive Claude on anything non-trivial is a four-beat loop:
**explore, plan, implement, commit.** Its core move — separating the deciding from the
doing — is what makes an agent dependable, and the loop maps cleanly onto how you
already work as a researcher.

- **Explore.** Before Claude changes anything, let it *read*. Point it at the relevant
  files and ask what's there: *"Read `clean.py` and the data dictionary and tell me how
  the sample is constructed."* This is the safe, no-stakes part you already met — nothing
  is written, so there's nothing to approve.
- **Plan.** Ask Claude to lay out *how* it would make the change before it makes it. You
  read the plan, push back, and adjust. This is where you catch a bad approach while it's
  still free to fix — the subject of the next section.
- **Implement.** Once the plan is right, Claude carries it out, making the edits. You're
  still reviewing what changes, but against a plan you already approved, so the diffs hold
  no surprises.
- **Commit.** Save the result as a restore point you can return to — a Git commit, once
  you've met Git later in the guide; until then, the built-in undo covered in *Working
  safely* plays the same role.

The discipline that makes this work is putting *thinking before typing* — measure twice,
cut once, because the cheapest place to fix a mistake is before anything is cut.
Skipping straight to "implement" — *just clean the data* — is how
you end up reviewing a wrong approach one diff at a time, which is slower and more nerve-
wracking than reading a plan would have been.

:::note
The loop is a default, not a ritual. For a one-line fix or a quick question you'll skip
straight to implement — that's fine. The bigger and less reversible the task, the more
the "explore" and "plan" beats earn their keep.
:::

## Plan mode

**Plan mode** is the built-in version of the "plan" beat. In it, Claude can read your
files, run read-only commands to look around, and *think out loud about what it would
do* — but it cannot edit anything. It produces a plan and stops, waiting for you to
approve before a single line is written. You enter it with **Shift+Tab**, or type
`/plan` in front of a single request to plan just that one turn.

That restriction is the point. Plan mode is a safe space to think: Claude can look at
everything and propose a full approach with zero risk of it half-doing the work while you
were still deciding whether you wanted it done.

A plan is also far easier to steer than a finished change. Reading *"I'll recode the
missing values as zero, then collapse to the county level"* and replying *"no — drop those
rows, don't impute, and keep it at the individual level"* takes ten seconds and costs
nothing. Catching that same mistake after Claude has rewritten three files means unwinding
real edits. You revise the plan as many times as it takes, and only when it reads right do
you approve it and let Claude implement.

The rhythm is: **ask for a plan, read it, revise it, approve it.**

```
Plan how you'd merge the survey waves and build the panel.
Don't write anything yet — just walk me through the approach.
```

Claude comes back with steps. You read them the way you'd read a research assistant's
proposed approach before they spend a day on it — checking the parts that matter:

```
Two changes: cluster the standard errors at the school level, not the
student level, and report N before and after the merge. Then go ahead.
```

When the plan is right, you approve it — and the approval menu asks *how* Claude should
proceed: reviewing each edit with you as it goes, or making the edits without pausing
(the accept-edits mode below). **Ctrl+G** opens the plan in a text editor if you'd
rather mark it up directly before approving.

:::tip
Reach for plan mode whenever a request is big enough that you'd want to see the approach
first — a multi-file refactor of an analysis script, restructuring a paper, anything where
"do it and I'll check" feels like too much to verify after the fact. The few seconds
spent reading a plan are the cheapest insurance in the whole workflow. For a really big
job, ask Claude to save the approved plan to a file (say, `plan.md`) — then a fresh
session can execute just the plan, without the planning back-and-forth crowding the work.
:::

## The permission modes

Plan mode is actually one position on a larger dial: the **permission modes**, which
control how much Claude can do without stopping to ask. Plan mode parks that dial at
"read only." The other two everyday positions govern, once Claude *is* acting, how often
it asks before each change — and together the three cover almost everything you'll need
as you start out:

- **Default (ask).** This is what you saw in your first session: Claude proposes each
  change, shows you the diff, and waits for your yes before it touches disk. Nothing
  happens without an explicit approval. It's the right setting while you're learning what
  Claude tends to do, and the right setting any time the stakes are high — editing a real
  analysis script, touching a paper you've already submitted.
- **Accept edits.** Here Claude makes file edits — and runs routine file commands, like
  creating a folder — inside your project without pausing for each one, so a run flows
  without a string of approval prompts. You're trading per-edit approval for speed.
  This pays off once you *trust the plan* — you've reviewed it in plan mode, you know the
  scope, and stopping to approve fifteen near-identical edits adds friction without adding
  safety. The natural pairing is plan mode then accept-edits: approve the *approach* once,
  then let the mechanical edits flow, and review the result as a whole.

You cycle these three modes with **Shift+Tab**; the mode you're in is shown at the prompt
so you always know which one is live. A good working pattern is to plan in plan mode,
approve the plan into accept-edits so the agreed-on work flows, then look at the full set
of changes together — the diff, or the verification check below. And even in accept-edits
there's a floor: a few sensitive files (your Git internals, your shell configuration) are
never edited without asking.

:::caution
More aggressive modes exist — as of mid-2026, an "auto" mode that removes routine prompts
(a separate safety model screens each action) and a bypass-everything mode with no checks
at all. The rule for researchers is blunt: no "YOLO" mode on research pipelines — never
point the bypass mode at real data. Leave both off; "accept edits after a reviewed plan"
gives you nearly all the convenience with none of the exposure.
:::

## Staying the reviewer

Letting Claude run a whole plan does not move you out of the reviewer's chair — it just
changes *when* you sit in it. Instead of approving twelve edits as they happen, you review
the result once, as a whole. The job is the same; the unit of review got bigger.

That makes one habit non-negotiable: **trust, then verify.** Claude is fluent and
confident, and fluent-and-confident is exactly the failure mode that slips past a tired
reader. A merge that silently dropped two hundred rows, a regression that clustered at the
wrong level, a citation that looks perfect and refers to a paper that does not exist —
none of these announce themselves. They read as correct. A pipeline that *runs* is not a
pipeline that's *right* — and it's your name on the paper, not Claude's; "the AI told me
so" is never a defense.

The practical rule is short: **if you can't verify it, don't ship it.** And the best way
to close that gap is to make verification *something Claude can run*, not something you
have to eyeball. Ask for the check, not just the change:

```
After the merge, print the row count before and after and confirm no
duplicate IDs were created.
```

```
Add a quick check that every \cite key resolves to an entry in the .bib
file, and list any that don't.
```

:::tip
Phrase verification requests neutrally — *"re-run the pipeline and report what it
produces,"* not *"confirm this matches Table 2."* In benchmarks of agents reproducing
published social-science results, the tools did well until they were told what answer to
expect — at which point they drifted into hunting for specifications that delivered it.
"This does not reproduce" is as valuable a report as a match.
:::

A check that *runs* and *reports* turns "I think this is fine" into "here is the evidence
it's fine" — which is the standard your own research already holds itself to. This is the
same reviewer-of-record stance from the [CLAUDE.md chapter](/ai/guide/claude-md-file/), now
scaled from one edit to a whole run: a CLAUDE.md shifts the odds in your favor, plan mode
lets you steer before the work happens, and a runnable check confirms it afterward. None
of them excuses you from the final read.

The concrete checks worth building into your routine — backing up before a risky run,
committing as a restore point, verifying every citation against its source — live in the
chapters where each tool is introduced: working safely, Git and GitHub, and the writing
workflow. They're all variations on this one rule.

---

You can now steer a session, not just approve a single edit: explore before acting, plan
before implementing, choose how often Claude pauses, and verify the result with a check
that runs. The one knob deliberately left out here is *which model* does the work and what
it costs — a quality-and-cost dial that deserves its own treatment, and gets it in the
next chapter. The [guide overview](/ai/guide/) maps the rest of the guide.
