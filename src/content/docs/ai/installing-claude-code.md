---
title: "Installing Claude Code & Your First Launch"
description: "Install the Claude Code command-line tool from inside VS Code's terminal, launch it, and complete the first-run browser sign-in."
draft: true
---

By now you should have [VS Code installed](/ai/installing-vs-code/) and know how to
[open and type into its integrated terminal](/ai/terminal-basics/). This is the post
where you actually install Claude Code and run it for the first time. It's the most
detail-dependent step in the whole path, so go slowly and follow it in order.

## Before you start

A quick prerequisites check, because each of these will stop you cold if it's
missing:

- **macOS 13 or later.** Click the Apple menu in the top-left corner, choose
  *About This Mac*, and check the version. Anything older won't run the tool.
- **A paid Claude plan.** Claude Code comes with **Pro** (the usual starting point
  for most beginners), as well as **Max**, **Team**, and **Enterprise**. The
  **free plan does not include Claude Code** — if you're on free, you'll hit a wall
  at sign-in. (A pay-as-you-go API account works too, but Pro is the simplest path.)
- **VS Code installed** — see [Installing VS Code](/ai/installing-vs-code/).

What you do *not* need: any developer tooling. You don't have to install Node.js,
Xcode, or anything else first. The installer you'll run is self-contained — it
downloads a single native app and sets it up for you.

## Open the terminal in VS Code

Open VS Code, then open the integrated terminal — the same panel you met in
[Terminal basics](/ai/terminal-basics/). The menu route is **Terminal → New
Terminal** from the top menu bar. A panel opens at the bottom of the window with a
blinking cursor, waiting for you to type.

That blinking cursor is where everything below happens. You'll type one command,
press Enter, and let it work.

:::note[Screenshot to add]
*[SCREENSHOT: VS Code with the integrated terminal panel open at the bottom, cursor blinking, ready for input]*
:::

## Run the install command

Here's the one command that installs Claude Code. Type it into the terminal (or
copy and paste it), then press Enter:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

In plain English: `curl` downloads a file from a web address — here, Anthropic's
[official installer script](https://code.claude.com/docs/en/setup). The `| bash` part takes that downloaded script and runs
it. So the whole line means "fetch Anthropic's installer and run it." The installer
then downloads the actual Claude Code app and puts it where your Mac can find it.

:::caution
Only run install scripts from sources you trust, because `| bash` runs whatever it
downloads. This one is the official Anthropic installer, which is why it's safe —
but the instinct to pause and check the source is a good one to keep for the rest
of your command-line life.
:::

A nice consequence of installing this way: the app keeps itself updated
automatically, so you won't have to repeat this step to stay current.

## Wait for it to finish

The command does the work for you — it'll print a few lines of progress and take
roughly a minute. You don't need to type anything while it runs; just let it go.

When it's done, the terminal stops printing and you get your cursor back, ready for
the next command. There's no pop-up or fanfare — a quiet return to the prompt is
what success looks like. If it printed an error in red and stopped, jump to
**Troubleshooting** below.

## Launch Claude Code

Now run the tool. Type this single word and press Enter:

```bash
claude
```

That's the command that starts Claude Code from here on out — short and memorable
by design.

## First-run sign-in

The very first time you run `claude`, it needs to confirm who you are. A browser
window opens automatically, pointed at Anthropic's sign-in page. Sign in with the
**same Claude account** that has your paid plan, approve the request, then switch
back to VS Code.

Your credentials are stored securely in the **macOS Keychain** — the same vault
your Mac uses for other passwords. That means this sign-in is a one-time thing:
you won't be asked again unless you explicitly log out.

**If the browser doesn't open** on its own, look in the terminal: Claude Code
prints a web address (a long URL) for exactly this case. Select that URL, copy it,
paste it into your browser's address bar, and sign in there. Same result.

:::note[Screenshot to add]
*[SCREENSHOT: the browser sign-in page that opens on first launch, with the Claude account login]*
:::

## Confirm it works

Back in the terminal, once sign-in completes, you should see the Claude Code
prompt — an input line waiting for you to type instructions, not the plain shell
prompt you started with. That waiting prompt is the whole goal of this post: it
means Claude Code is installed, signed in, and ready.

You don't have to ask it anything yet. For now, knowing the prompt is there is
enough. To leave Claude Code and return to the ordinary terminal, you can type
`/exit` and press Enter.

## Optional: the VS Code extension

You may notice that there's an official **"Claude Code" extension** for VS Code —
a graphical chat panel that lives inside the editor and shows changes side by side.
It's a real thing and some people prefer it, but it is a **separate, optional
add-on**. It is **not** required to run `claude` in the terminal, and this series
sticks with the terminal approach throughout. So you can ignore the extension for
now; there's nothing to install or set up here.

## Troubleshooting

Two snags account for almost everything that goes wrong at this stage:

- **[`command not found: claude`](https://code.claude.com/docs/en/troubleshoot-install)** — The install worked, but your current terminal
  session doesn't yet know where the new app lives (it loads that list, the "PATH,"
  when a terminal first opens). The fix is simple: **close the terminal panel and
  open a fresh one** (Terminal → New Terminal), then type `claude` again. Reopening
  refreshes the PATH and the command is found.
- **A message about needing a subscription** — This is a plan problem, not an
  install problem. Claude Code is rejecting the account because it isn't on a plan
  that includes it (the **free plan doesn't**). Confirm you signed in with the
  account that holds your **Pro** (or Max/Team/Enterprise) subscription, and upgrade
  if you're still on free.

If something else goes wrong, the safest move is to re-read the error text it
printed — Claude Code's messages are usually plain-English about what it needs.

That's the hard part done — and it's the end of setup. The tool is installed and
signed in, and from here on launching it is just typing `claude`. You'll **confirm
everything actually works** in [your first session](/ai/your-first-session/), which
doubles as the check that VS Code, the terminal, and Claude Code all talk to each
other.
