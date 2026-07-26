---
title: Working in VS Code
description: Settle into VS Code for real work — open and juggle multiple integrated terminals, and add the few extensions an economist needs.
draft: false
---

By now you've [set up Claude Code](/ai/guide/setting-up-claude-code/) and run a
[full session](/ai/guide/your-first-session/) inside VS Code's terminal. That's enough to be
productive, but real work tends to want two things the bare setup doesn't give you: a
second terminal so Claude isn't sharing a window with everything else you do, and a
handful of extensions so VS Code can actually open the files you live in. Both are quick,
and you only do them once.

## Running more than one terminal

The terminal you opened to launch `claude` is busy: Claude is running in it, waiting for
your next request. If you want to do anything else at the command line — check what
changed with `git status` (a version-control command you'll meet in the next chapter),
run a Python script, peek at a file — you don't want to interrupt Claude to do it. You
want a *second* terminal.

VS Code makes this easy. The integrated terminal isn't a single window; it's a panel that
can hold several terminals at once, and you switch between them freely. A common, calm
setup is **Claude in one terminal, everything else in another**: Claude works away on a
draft or a data script in the first, and in the second you run the thing it just wrote, or
commit your work, without breaking its train of thought.

To open another, click the **`+`** at the top-right of the terminal panel, or use
**Terminal → New Terminal**. The new terminal appears in a list on the right side of the
panel; click any entry to bring it to the front. Each one is an independent session with
its own working directory and its own history.

If you'd rather see two side by side instead of switching back and forth, **split** the
panel: the split-terminal button (two panes) at the top of the panel, or
**Terminal → Split Terminal**, divides the current terminal into two columns in the same
view. Splitting is handy when you want to watch a script's output in one half while you
keep typing to Claude in the other.

:::note[Screenshot to add]
The terminal panel with two terminals — Claude running in one, a split pane showing
`git status` in the other.
:::

Sometimes a terminal gets stuck — a script runs longer than you expected, or a process
won't return your prompt. Two moves cover almost every case:

- **Stop what's running** with `Ctrl + C`. This interrupts the current command and hands
  the prompt back to you, without closing the terminal. It's the first thing to try.
- **Kill the terminal entirely** with the trash-can icon next to it in the list (or
  **Terminal → Kill Terminal**). This closes that one session. Your other terminals — and
  Claude, if it's in a different one — are untouched.

:::tip
In Claude's own terminal, the gentler interrupt is **`Esc`**: it stops Claude mid-response
but keeps the work done so far, so you can redirect it. `Ctrl + C` interrupts too, but be
aware that with nothing running, a second press exits the session entirely. Neither means a
stuck terminal — reach for the trash can only when one is genuinely wedged.
:::

Two quirks of typing to Claude in VS Code's terminal are also worth fixing early. Enter
*submits* your prompt; to add a line break instead, press `Ctrl + J`, or run
`/terminal-setup` once inside Claude to make `Shift + Enter` do it. And don't paste
anything huge — VS Code's integrated terminal can silently drop characters from very large
pastes, so for a long log or error dump, save it to a file and ask Claude to read the file
by path instead.

## The economist starter set of extensions

Out of the box, VS Code is a capable text editor, but it doesn't know what a `.tex` file
is, can't open a Word document, and won't run a Stata do-file. **Extensions** teach it.
They live in the **Extensions** panel — the icon in the left sidebar that looks like four
squares with one detached, or `Cmd + Shift + X`. You search by name, click **Install**, and
the capability is there from then on.

This section is deliberately about **installing**, not mastering. The goal is a VS Code
that can open and handle the files an economist actually works with, so that when a later
chapter puts Claude inside a real writing or analysis workflow, the tools are already in
place. Using LaTeX with Claude belongs to the [writing chapter](/ai/guide/writing-papers-and-slides/); this is just the
starter set.

A reasonable kit for teaching and research:

- **LaTeX.** A LaTeX extension (a common one is **LaTeX Workshop**) lets VS Code compile
  a `.tex` paper or a Beamer slide deck to PDF and preview it right beside the source, so
  you're not bouncing out to a separate program to see what your problem set or working
  paper looks like.
- **A Word / Office viewer.** Coauthors, journals, and university committees still trade
  `.docx` files. An Office-document viewer lets you open a colleague's draft or a
  committee memo inside VS Code instead of switching to Word — useful when you want Claude
  to read it too.
- **Python.** Microsoft's Python extension adds the editing, linting, and run support
  you'd expect for data cleaning and replication scripts. Install it even if you don't
  write Python: a lot of everyday friction — converting a `.docx` to markdown, reshaping a
  CSV, pulling a FRED series — is a ten-line script Claude writes and runs *for* you, and
  this extension is what makes that path smooth.
- **R.** If your empirical work or a coauthor's lives in R, the R extension gives you the
  same kind of editing and run support for `.R` scripts.
- **Stata.** Stata is still the daily driver for a lot of applied economics. **Stata
  Workbench** runs do-files straight from the editor and — the part that matters for this
  guide — can connect Stata to Claude, so Claude can execute your do-file, inspect
  variables, and read stored results rather than just look at the code.
- **Quarto / Jupyter.** Quarto and Jupyter notebooks are how a lot of analysis,
  lecture notes, and reproducible reports get written now. Their extensions let you edit
  and run notebooks and `.qmd` documents without leaving the editor.
- **Data and paper files.** **Rainbow CSV** colour-codes the columns of a `.csv` so you
  can eyeball a dataset without opening Excel, and a PDF-viewer extension renders papers
  and compiled output right in the editor.

You don't need all of these. Install the ones that match what you teach and what you
write in — an empirical economist on Stata and a theorist drafting slides in LaTeX will
want different subsets — and add the rest if a project ever calls for them.

:::note
Extension names and publishers change over time, and there's often more than one
extension for the same language. As of mid-2026 the ones above are the common picks;
when you search, prefer an extension with a clear publisher and a healthy install
count, and verify it's current rather than assuming this list is.
:::

---

With a second terminal to keep Claude's work separate from your own, and the few
extensions that let VS Code open your real files, the editor is ready for actual projects.
The [guide overview](/ai/guide/) points to what comes next — putting these pieces to work on a
paper, a dataset, or a course, with version control and a writing workflow built on top.
