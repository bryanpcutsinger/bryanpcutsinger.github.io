---
title: "Your Home Base: Installing VS Code"
description: "Download, install, and open VS Code on your Mac, and find the built-in terminal you'll run Claude Code from."
draft: true
---

This is the first hands-on step. You should have read [what Claude Code is (and
isn't)](/ai/what-is-claude-code/) for orientation, but you don't need to have
installed anything yet — that starts now. By the end of this post you'll have VS
Code on your Mac and know where its terminal lives.

## Why VS Code is our home base

**VS Code** (Visual Studio Code) is a free code editor from Microsoft. We're not
going to use it to write code, so don't let the name scare you off. We're using it
as a **cockpit**: one window where you can *see* your project's files in a sidebar
and run Claude Code from a built-in command line in the same place.

That matters because Claude Code works on the files in a folder — a document, a
spreadsheet, a folder of notes — and it helps enormously to have those files visible while
you work. You'll watch Claude create and change files in real time, right there in
the sidebar. You don't need to know how to code to use it this way; you need a
window that shows your files and a place to type commands. VS Code gives you both.

## Download

Open your web browser and go to **code.visualstudio.com**. The site should offer a
download button for macOS automatically.

Before you click, you need to know which kind of Mac you have, because Apple makes
two chip families and there's a matching build for each:

- Click the **Apple menu** (top-left corner of your screen) and choose **About This
  Mac**.
- Look at the line labeled **Chip** (newer Macs) or **Processor** (older Macs).
  - If it says something like **Apple M1 / M2 / M3 / M4**, you have **Apple
    Silicon**.
  - If it says **Intel**, you have an **Intel** Mac.

On the download page, pick the build that matches: **Apple Silicon** or **Intel**.
If the site only offers a **Universal** build, that one works on either kind of Mac —
choose it and move on. Picking the right build just means the app runs as smoothly
as possible; the wrong one would still work but is best avoided.

## Install

The download lands in your **Downloads** folder, usually as a `.zip` that your Mac
unpacks into an app, or as a disk image you open.

- **Open the downloaded file.** If you got a disk image, double-click it; a small
  window opens showing the **Visual Studio Code** icon and a shortcut to your
  **Applications** folder.
- **Drag "Visual Studio Code" into the Applications folder.** This is how Mac apps
  are installed — you're just filing the app where it belongs so it shows up with
  your other programs.

:::note[Screenshot to add]
*[SCREENSHOT: the drag-to-Applications window]*
:::

- **Open it.** Go to **Applications**, find **Visual Studio Code**, and double-click.

The first time you open it, macOS will likely show a dialog warning that the app was
**downloaded from the internet** and asking whether you're sure you want to open it.
**This is expected and safe** — it's macOS's standard caution (a feature called
Gatekeeper) for any app that didn't come from the App Store. Click **Open**. You'll
only see this once.

## A 60-second tour

When VS Code opens you'll see a welcome tab. Two parts of the window matter to us.

- **The Explorer (the sidebar).** Down the left edge is a vertical strip of icons;
  the top one looks like two stacked pages. That's the **Explorer**, and it's where
  your files will appear once you open a folder. It's empty right now because we
  haven't opened a project yet — that's fine.
- **The integrated terminal.** This is the important one. The terminal is a small
  panel where you type commands — it's [how you'll actually talk to Claude Code](https://code.claude.com/docs/en/vs-code). To
  open it, use the menu bar at the top: **Terminal → New Terminal**. The keyboard
  shortcut is **Ctrl+`** (hold Control and press the backtick key, the one just
  above Tab, top-left of your keyboard).

:::note[Screenshot to add]
*[SCREENSHOT: VS Code with the integrated terminal open]*
:::

A panel slides up along the bottom of the window. An empty terminal isn't much to
look at: a mostly blank area with a short line of text ending in a blinking cursor,
waiting for you to type. That line is called the **prompt**. You don't need to type
anything yet — just confirm you can open and close this panel. (Ctrl+` toggles it
closed again.)

## That's all for now

You have a working cockpit: an editor that shows your files and a terminal you can
open on demand. We won't touch the terminal further in this post — the next step is
a gentle, jargon-free introduction to what that blinking prompt actually does, so
the commands in later steps feel familiar instead of mysterious.
