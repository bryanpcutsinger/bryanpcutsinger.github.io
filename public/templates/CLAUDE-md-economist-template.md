# CLAUDE.md — starter template for economists

# How to use this file:
#   1. Save it as `CLAUDE.md` in the top level of a project folder.
#   2. Delete the lines that don't apply to you and fill in the blanks.
#   3. Keep it short — a page is plenty. Add a rule each time you catch
#      yourself correcting the same mistake.
# Lines beginning with "#" are notes to you; you can delete them.
# Claude Code reads this file automatically at the start of every session and
# treats it as standing guidance. It is guidance Claude usually follows, not an
# enforced lock — so keep reviewing diffs and verifying results yourself.

## Who I am

- I'm an economist. I work on [your field — e.g. monetary history / labor / IO].
- I [teach / do empirical research / both]. Keep examples at that level.
- I work on a Mac and I'm a [beginner / intermediate] at the command line.

## How I want you to work

- Be concise and direct. Explain *why* when you introduce a new command or concept.
- Explain any shell command before you run it, and keep explanations short.
- Default to [Python / R / Stata]; show me [language] unless I ask otherwise.
- Ask before changing an analysis specification; don't change it silently.

## Data integrity (do not break these)

- Treat the `raw/` (or `raw-data/`) folder as READ-ONLY. Never edit or overwrite
  raw data. Write cleaned or derived data only to a separate folder (e.g.
  `processed/` or `output/`).
- Never silently drop, filter, or impute observations. Tell me first, and report
  the row count BEFORE and AFTER any cleaning or merge step.
- Before any merge, state the expected cardinality (one-to-one, many-to-one) and
  confirm the result matches.
- Set and print a random seed for any stochastic step. Sort data before
  operations that depend on order.

## Research integrity (do not break these)

- NEVER invent or guess citations, DOIs, page numbers, quotes, statistics, or
  data values. If you don't have the real source, say so — do not fill in a
  plausible-looking value.
- Only cite sources I have actually verified. Distinguish "I verified this" from
  "this plausibly exists."
- Never hand-type a number into a table. Numbers come from code that produced
  them.

## Teaching (if this is a course folder)

- The `grades/` (or `students/`) folder is OFF-LIMITS — it holds records about
  identifiable students (FERPA). Do not read or write there.
- Draft course materials (syllabi, problem sets, slides), but never give me a
  worked solution or answer key without showing every step so I can check the math.

## Output conventions

- Figures: PDF (vector) for papers, PNG (~300 DPI) for slides/dashboards.
- Tables: write LaTeX-ready output to a file; never hand-type a number code produced.
- Define a project root once and use relative paths; no hardcoded absolute paths.

## Things you keep getting wrong (add as you go)

- [Write the correction here the first time you have to make it twice.]
