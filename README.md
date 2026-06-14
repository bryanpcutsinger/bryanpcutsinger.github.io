# bryanpcutsinger.github.io

Personal umbrella website for Bryan Cutsinger, built with
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) and
deployed to GitHub Pages. One repo holds the professional landing page plus a
growing guide, themed to the FAU style guide.

## Sites

- `/` — professional landing page (Starlight splash; stub for now)
- `/ai/` — **Getting Started with Claude Code**: a beginner's guide to getting started with
  Claude Code (a 17-post path for economists new to the command line and AI tools),
  organized into stages: Orientation, Setup, Your first sessions, Working well,
  Teaching with Claude Code, Doing research, Integrity & safety, and Reference.

## Local development

```bash
npm install      # one time, installs Astro + Starlight + dependencies
npm run dev      # local preview at http://localhost:4321  ← use this to review
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

> **Note:** while the guide posts are `draft: true`, `npm run build` fails on
> purpose — Starlight excludes drafts from the production build, so the sidebar
> can't resolve them. Preview with `npm run dev` (it includes drafts). The build
> succeeds once posts are set to `draft: false` at publish time.

## Adding an article to the guide

Create a Markdown file in `src/content/docs/ai/` with Starlight frontmatter:

```markdown
---
title: "Your title"
description: "One-sentence summary."
draft: true
---

Your content...
```

Then add it to the sidebar group in `astro.config.mjs`:

```js
{ slug: 'ai/your-file-name' }
```

The filename becomes the URL slug (`my-post.md` → `/ai/my-post/`). Curriculum
**order comes from the sidebar config**, not a date. Keep posts `draft: true`
until they're ready to publish.

## Theming

The FAU look lives in `src/styles/fau-theme.css` (FAU palette + flat/square
components mapped onto Starlight; Georgia headings, system-sans body). Chrome
overrides (site title, footer) are in `src/components/overrides/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. No manual steps. (Not yet published.)

## Structure

```
src/
  components/overrides/   Starlight component overrides (SiteTitle, Footer)
  styles/fau-theme.css    FAU style-guide theme layered on Starlight
  content/docs/           Starlight content (the whole site)
    index.mdx             /  — splash landing
    ai/index.mdx          /ai/ — guide overview (cards + requirements table)
    ai/*.md               the 17 guide posts
  content.config.ts       Starlight docs collection (docsLoader + docsSchema)
astro.config.mjs          Starlight integration: title, sidebar, theme, overrides
public/                   static assets served as-is (favicon, etc.)
  templates/              downloadable assets (economist CLAUDE.md template)
```
