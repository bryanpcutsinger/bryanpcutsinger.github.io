// Starlight owns the content collection now. The learning-path articles live in
// src/content/docs/ai/*.md and the landing pages in src/content/docs/*.mdx.
// docsSchema() validates Starlight frontmatter (title, description, draft,
// sidebar, template, hero, …) at build time. `draft: true` pages are excluded
// from the production build but shown in `astro dev`.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Course topic posts, imported (instructor-notes stripped) from the private
// micro-principles repo by scripts/import-topic.sh. Rendered by the custom
// src/pages/teaching/<course>/[topic].astro route — NOT by Starlight. The schema
// is deliberately lenient: it names the few fields the website uses and lets Zod
// silently drop the source's pedagogy fields (sessions, ue_anchors, be_anchors,
// word_target, audience, note) so importing never fails on an unexpected key.
const courses = defineCollection({
  loader: glob({ pattern: '**/post.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    topic: z.string().optional(), // "T1 — …"; drives display order + badge
    course: z.string().optional(),
    status: z.string().optional(), // publish gate: only "approved" goes live
    description: z.string().optional(), // absent in source; optional
    order: z.number().optional(), // explicit override; else parsed from `topic`
    slides: z
      .array(z.object({ label: z.string(), file: z.string() }))
      .default([]),
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  courses,
};
