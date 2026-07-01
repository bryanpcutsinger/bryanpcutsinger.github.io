---
title: Getting material into Claude
description: Three ways to feed Claude well — dictating long prompts, converting documents to Markdown so Claude reads them cleanly, and pasting figures, screenshots, and PDFs.
draft: false
---

Most of the friction in a Claude session isn't the asking — it's the *getting your stuff
in*. A long instruction is tedious to type. A draft lives in a Word file, the data
dictionary is a PDF, and the thing you actually want to show Claude is a figure or an
error message on your screen. This chapter is about all three: talking instead of typing,
converting documents into the format Claude reads best, and handing it images and PDFs
directly. None of it requires anything beyond [your first session](/ai/your-first-session/).

## Talking instead of typing

When the request in your head is two sentences, typing is fine. When it's a paragraph —
the full setup for a data-cleaning task, or a careful description of how you want a
problem set reworked — dictation wins. Most people speak well over twice as fast as they
type, but the bigger payoff is that talking lowers the cost of *starting*: the hardest
sentence of a referee report or a paper introduction is the first one, and rambling a
rough version aloud and then editing it beats staring at a blank prompt.

Claude Code has dictation built in. Run `/voice`, hold the trigger key while you speak,
and your words appear in the prompt as you talk (`/voice tap` switches to tap-to-start,
tap-again-to-send); you can mix voice and typing in the same message. The first time,
macOS asks to give your terminal microphone access — grant it once and it sticks. Two
things worth knowing: the audio is transcribed on Anthropic's servers, not on your Mac,
so it needs your Claude.ai login and the same judgment as anything else you send Claude;
and dictating doesn't count against your usage.

The alternative worth knowing about is **Wispr Flow**, a paid app (about $10/month as of
mid-2026) that does the same job system-wide — it transcribes your speech into *any* text
field, not just Claude's, so the same habit works in your editor, your email, and your
browser. If sending audio to another vendor gives you pause, tools like Superwhisper
transcribe locally on your Mac instead. Either way, treat these as upgrades you might
grow into rather than a requirement. Built-in `/voice` is enough to start.

:::caution[Proofread the transcript before you send it]
Dictation mis-hears — names, jargon, and anything unusual most of all. The built-in
transcription is tuned for technical vocabulary, so it usually gets file names and terms
like `regex` right, but spoken aloud "Overleaf" can still land as "oh relief", and a
coauthor's name or a variable like `lgdp_real` can come out mangled. Read the transcript
before you hit enter, the same way you'd glance at a voice-to-text message before sending
it. Claude is good at guessing through small errors, but it shouldn't have to guess at
the one term your whole request turns on.
:::

## Converting documents to Markdown

Claude reads plain text best, and among plain-text formats it handles **Markdown** most
reliably. Markdown is just text with a few lightweight marks for structure: `#` for a
heading, `-` for a list item, `**` around bold. There's nothing to learn to *read* it —
it looks like a tidied-up text file — and Claude treats those marks as real structure,
so it can see that a section is a section and a list is a list rather than guessing from
spacing.

The practical consequence: a `.md` file in your folder is the cleanest thing you can hand
Claude. Lecture notes, a research log, a methods write-up, an outline for a paper — if
it's in Markdown, Claude reads the structure exactly as you meant it.

Most of your material, though, starts life somewhere else: a syllabus in Word, a referee
report as a PDF, notes scattered across a few formats. You don't have to convert those by
hand. Put the file in your working folder and ask:

```
Convert syllabus.docx to Markdown and save it as syllabus.md.
```

Word files are the classic case — comments and Track Changes come through a direct read
awkwardly, so the converted copy is cleaner. The same logic covers data formats Claude
can't read as raw binary: ask it to turn an Excel workbook into one CSV per sheet, or to
write the short Stata script (`export delimited`) that dumps a `.dta` file to CSV.

Claude can also go the other way — turn a Markdown draft back into a Word document for a
coauthor who lives in Track Changes. The point isn't that Markdown is where everything
must end up; it's the best *working* format: convert into it while you and Claude are
doing the thinking, and convert back out when you need to share. And for anything you'll
return to for months — a codebook, a data dictionary, a reference paper — convert once
and keep the `.md` next to the original, so every later session starts from clean text.

:::note[A heavy PDF may need more than a quick conversion]
A short PDF made from LaTeX or Word converts smoothly, though tables, footnotes, and
multi-column layouts can get mangled — skim the converted Markdown before you rely on it.
Three harder cases. A **long** PDF (say, 50+ pages) is worth converting once rather than
having Claude re-read it every session — it crowds out the memory Claude has for your
actual task. A **scanned** PDF is just pictures of pages, which Claude can't read as text
at all; ask it to run an OCR tool first (`ocrmypdf` is a good free one), then convert.
And if a document is equation- or table-heavy and you have the source `.tex`, hand over
that instead — it's always cleaner than re-parsing the compiled PDF.
:::

## Pasting figures, screenshots, and PDFs

Not everything you want to show Claude is text. Sometimes the clearest way to explain a
problem is to show it the picture — and you can.

**Paste an image straight into the prompt** with `Ctrl + V`. A few things that come up
constantly in teaching and research:

- A **figure** that doesn't look right — a regression plot with an axis off, a chart
  whose legend is wrong. Paste it and ask what's happening or how to fix the code that
  drew it.
- A **table as an image** — a results table from a paper you're replicating, or a
  screenshot of output. Paste it and ask Claude to transcribe it into a LaTeX table or a
  data frame — then check every number against the original, because pulling text out of
  an image is the least reliable thing Claude does with pictures.
- An **error screenshot** — the red text when a script or a LaTeX build fails. Pasting the
  picture is often quicker than retyping the message.

:::tip[On a Mac, screenshot to the clipboard]
`Cmd + Ctrl + Shift + 4` lets you drag a box and copies that region straight to your
clipboard — no file saved — ready to `Ctrl + V` into the prompt. (Drop the `Ctrl` and it
saves a file to your Desktop instead.) Grabbing just the figure or just the error keeps
Claude focused on the part that matters.
:::

**You can also hand Claude a PDF directly.** Put it in your working folder and point at it
by name, and Claude reads the document without you converting anything first. This works
best for a short, text-based PDF — a long or scanned one needs the conversion route from
the note above — and it's genuinely useful for the work economists actually do: drop in a
working paper and ask for a summary of its identification strategy, hand over a dataset's
codebook PDF and ask it to pull the variable definitions into a table, or share the PDF of
a paper you're replicating so Claude can line its specification up against your code.

The same standing caveat applies as everywhere else in this guide: reading a figure or a
PDF is an interpretation, and interpretations can be wrong. When Claude transcribes a table
or reports what a paper claims, you're still the reviewer of record — check the numbers and
the wording against the source before they go anywhere.

---

Voice for the asking, Markdown for your documents, images and PDFs for everything that
isn't text: between them you can get almost anything in front of Claude without retyping or
reformatting it by hand. The [guide overview](/ai/) points to what's next.
