// Starlight owns the content collection now. The learning-path articles live in
// src/content/docs/ai/*.md and the landing pages in src/content/docs/*.mdx.
// docsSchema() validates Starlight frontmatter (title, description, draft,
// sidebar, template, hero, …) at build time. `draft: true` pages are excluded
// from the production build but shown in `astro dev`.
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
