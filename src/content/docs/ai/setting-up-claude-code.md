---
title: Set up Claude Code
description: A one-time, beginner-friendly setup walkthrough for Mac — install Claude Code from the Terminal, sign in, fix the common snags, then add VS Code and the Claude Code extension as your home base.
draft: false
---

This is the one part of the guide that's pure setup. It takes about thirty minutes,
you do it once, and then you never think about it again. You'll need a Mac (macOS 13
or later) and the **paid Claude plan** from [what Claude Code is](/ai/what-is-claude-code/) —
the free plan doesn't include Claude Code.

We install the command-line tool first, then VS Code, then the extension that ties them
together. Take the steps in order and you won't hit the chicken-and-egg problems people
run into when they do it the other way around.

## Meet the Terminal

The Terminal is a plain text window where you type a command and press Return. That's
the whole idea. Open it with **Spotlight** (`Cmd + Space`, type "Terminal", Return).

You only need a handful of commands, ever:

- `pwd` — "print working directory," i.e. *where am I right now?*
- `ls` — list the files in the current folder.
- `cd foldername` — move into a folder; `cd ..` moves back up one.

One Mac-specific gotcha: if a folder name has a **space** in it, wrap the whole path in
quotes — `cd "Claude Code Projects"`. That's it. You do **not** need to learn shell
scripting, pipes, or anything else to use this guide. When a step gives you a command,
you'll copy it, paste it into the Terminal, and press Return.

## Install Claude Code

Paste this into the Terminal and press Return:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

This downloads and installs the tool (to `~/.local/bin/`) and keeps itself updated from
then on. When it finishes, confirm it's there:

```bash
claude --version
```

If you see a version number, you're installed. If you instead get `command not found`,
skip down to [If something went wrong](#if-something-went-wrong) — it's a common, quick fix.

## Sign in

Start Claude Code by typing its name:

```bash
claude
```

The first time you run it, it opens your web browser to a sign-in page. Log in with the
**same account as your paid plan**, and the browser hands you back to the Terminal —
authenticated. (If no browser opens on its own, press `c` to copy the sign-in link and
paste it into a browser yourself.) This happens once; your Mac remembers it afterward.

:::note[Screenshot to add]
The browser sign-in page on first launch.
:::

:::note
If sign-in says your plan doesn't include Claude Code, you're on the free tier. Claude
Code needs a paid plan (Pro or Max) — see [what you'll need](/ai/what-is-claude-code/#what-youll-need).
:::

## If something went wrong

Two snags account for almost every failed install.

**`command not found: claude`.** The tool installed fine, but your Terminal doesn't yet
know where to find it. Tell it once, then reload:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

Now try `claude --version` again. (Quitting and reopening the Terminal does the same thing
as that second line.)

**"Claude Code can't be opened because the developer cannot be verified."** That's macOS
Gatekeeper being cautious. Open **System Settings → Privacy & Security**, scroll down,
and click **Allow Anyway**, then run `claude` again.

:::caution
If you see `dyld: cannot load` or `Abort trap: 6`, your macOS is too old. Claude Code
needs **macOS 13 or later** (Apple menu → About This Mac to check).
:::

## Install VS Code

You *can* run Claude Code entirely in the Terminal, but it's far nicer with a home base.
**VS Code** (Visual Studio Code) is a free editor from Microsoft. It's an *IDE* —
think of that as one window that holds your files, a text editor, and a Terminal all
together, so you're not juggling separate apps.

Go to [code.visualstudio.com](https://code.visualstudio.com), download the Mac version,
unzip it, and drag **Visual Studio Code** into your **Applications** folder. The first
time you open it, macOS may ask you to confirm — click **Open**.

:::note[Screenshot to add]
Dragging Visual Studio Code into the Applications folder.
:::

## Add the Claude Code extension

Inside VS Code, open the **Extensions** panel (`Cmd + Shift + X`), search for
**Claude Code**, and click **Install** on the result published by **Anthropic**.

The extension is what gives you the nice parts: it shows Claude's proposed changes as a
side-by-side **diff** (old in red, new in green) you can approve or reject, and lets you
point at files by name.

:::note
The extension and the command-line tool are two separate things. The extension's chat
panel ships with its own copy, but when you run `claude` in VS Code's built-in Terminal —
which is how this guide works — it uses the standalone tool you installed first. That's
why we did the Terminal install before this step.
:::

## A quick tour of the window

You only need three parts of VS Code to start:

- **The Explorer** (the file list down the left side) — your folder's contents.
- **The editor** (the big area in the middle) — where a file's text shows when you click it.
- **The integrated Terminal** (a panel along the bottom) — open it with **Terminal → New
  Terminal**, or the `` Ctrl + ` `` shortcut. This is where you'll type `claude`.

One more thing to know: **File → Open Folder** sets which folder you're working in.
Whatever folder you open is the only place Claude looks unless you tell it otherwise —
which matters more than it sounds, and we lean on it in the next chapter.

:::note[Screenshot to add]
The VS Code window with the Explorer, editor, and integrated Terminal labeled.
:::

That's the whole setup. Next, you'll [run your first session](/ai/your-first-session/) —
make a safe practice folder, ask Claude a question, and watch it work.
