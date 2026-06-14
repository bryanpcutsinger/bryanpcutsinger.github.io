---
title: "A Real Research or Teaching Task (0:45–1:15)"
description: "The heart of the session — run a second, more meaningful Cowork task tied to your actual work, then verify the result together before it leaves the room."
draft: false
---

This is the block where Cowork stops being a demo and starts looking like something you would actually use. The first task showed the mechanics: connect a folder, read a plan, approve the work. Now you point that same workflow at a real piece of your job — a paper you are reading, a class you are teaching, or a department task sitting in your inbox.

Pick one task. Do it well. Then check it carefully. The checking is not an afterthought here — for an economics professor, it is the whole point.

:::tip[For the facilitator]
This is the "aha" block. Give it the full 30 minutes and resist the urge to squeeze in a second option. Choose the menu item below that matches the task your colleague actually brought to the session — a real PDF, a real problem set, a real roster. The win is watching Cowork do *their* work, not a toy example. Budget the last several minutes for a verification pass you do together, out loud.
:::

## Choose one: a task worth doing

Offer these three. The right one is whichever maps onto something real and already on the desk.

- **Research** — pull the tables out of a dense PDF into a clean spreadsheet, or get a first-pass synthesis of a few papers (with a verification step built in).
- **Teaching** — build a grading rubric for an assignment, or generate several variants of a problem set plus an answer key.
- **Chair / admin** — assemble a short department report, or reconcile a messy roster or budget export into something usable.

All three follow the same rhythm you already saw: connect the folder, give the prompt, read the plan, approve, then **check**. The difference now is that the output matters, so the check matters more.

:::caution
Before any of these starts: work on a **copy** of the original file, and connect the folder that copy lives in. Cowork reads and writes files in the folders you connect, and it asks for explicit permission before permanently deleting anything — but the safest habit is to never aim it at your only copy of the raw data. Treat the original as read-only.
:::

## Research: tables out of a PDF, or a first-pass synthesis

**The prompt (table extraction):**

> "In the connected folder there's a PDF named `[filename]`. Pull the regression tables in it into an Excel file, one sheet per table, with the variable names, coefficients, and standard errors in separate columns. Don't change the numbers — copy them exactly as printed."

**The plan to expect.** Cowork will lay out something like: open the PDF, locate the tables, build an `.xlsx` with one sheet per table, and save it back to the folder. It can produce a real Excel file with formulas if you ask for derived columns, but for extraction you want it to transcribe, not compute.

**The prompt (synthesis):**

> "Read the three PDFs in this folder and write a one-page summary of what each paper argues, its data and method, and its main finding. Note where the papers disagree. Keep page references so I can check them."

**The check.** This is where economists earn their skepticism. Open the original PDF beside the spreadsheet or summary and spot-check: do the coefficients and standard errors match the printed table exactly? Does each claimed finding actually appear on the page Cowork cited? Claude can transpose a digit, drop a negative sign, or describe a result the paper never reported. The synthesis is a fast way to triage a stack of papers — it is **not** a substitute for reading them.

## Teaching: a rubric, or problem-set variants with a key

**The prompt (rubric):**

> "In this folder is an assignment prompt, `[filename]`. Build a grading rubric for it as a one-page table: criteria down the side, performance levels across the top (Excellent / Proficient / Developing / Incomplete), with a short descriptor in each cell. Save it as a Word or Excel file."

**The prompt (problem-set variants):**

> "Here's a problem set with five questions. Generate three variants of each question that test the same concept with different numbers or scenarios, and produce a separate answer key. Keep the difficulty consistent."

**The plan to expect.** Cowork will read the source file, draft the rubric or variants, and write them to new files in the folder — leaving your original untouched.

**The check.** For the rubric, read it against how you actually grade: are the criteria the ones you care about, or generic filler? For the variants, **work every problem yourself or confirm the key** — a generated answer key can be wrong, and a wrong key handed to students is worse than no key. Treat the output as a strong first draft you edit, not a finished assignment.

## Chair / admin: a short report, or a messy export reconciled

**The prompt (report):**

> "In this folder are last term's enrollment numbers and the section list. Draft a one-page summary for the dean: total enrollment, how it compares to the prior term, and any sections under the minimum. Put the supporting numbers in a small table."

**The prompt (reconcile a roster/budget):**

> "This CSV is a roster export with inconsistent name formatting and some duplicate rows. Clean it into one row per student with a consistent `Last, First` name column, and flag any rows you weren't sure about in a separate column."

**The plan to expect.** Cowork describes the cleaning or summarizing steps before touching anything, writes the result to a **new** file, and — importantly — flags what it was unsure about rather than silently guessing.

**The check.** Confirm the totals add up, that no rows were dropped, and that the "unsure" flags are where the real ambiguity is. If a number is going to the dean or the budget office, you own it the moment you send it — so verify it the way you'd verify a coefficient in a referee report.

## The integrity pass — do it together, out loud

:::caution
Nothing leaves this room unverified. Claude can fabricate a citation, invent a page number, misquote a passage, or alter a data value while sounding completely confident. Before any output is used — a coefficient in a spreadsheet, a finding in a summary, an answer in a key, a figure in a report — open the **original source** and confirm it with your own eyes. The rule is simple: *if you didn't check it against the source, it isn't done.*
:::

Do this part as a shared exercise. Pick two or three specific claims or numbers from whatever Cowork produced and trace each one back to the original — the printed table, the PDF page, the source spreadsheet cell. Seeing one error caught live is worth more than any warning. This is the same discipline covered in [How Cowork Works Safely](/ai/desktop/cowork-safely/); it applies identically here.

The companion page [Cowork for Economists](/ai/desktop/cowork-for-economists/) has more worked examples in this same shape — prompt, expected plan, verification — if you want a few to try after the session.

:::note[For the facilitator]
End the block by naming the habit out loud: Cowork did the tedious part fast, and *you* did the part that requires judgment. That division of labor — agent drafts, economist verifies — is the takeaway you want them to leave with.
:::

## What's next

You've now seen Cowork handle a real piece of your work end to end, with a check you trust. The last working block steps over to the **Code** tab — a different way of using the desktop app, for when you want to see and approve each change directly.

Continue to [A Taste of Code](/ai/desktop/session-4-taste-of-code/).

For more worked Cowork examples on Anthropic's site, see the [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) guide.
