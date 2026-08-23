import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    engine: z.string(),
    complexity: z.string(),
    summary: z.string(),
    videoUrl: z.string().url().optional(),
    // Local, self-hosted clip used as the autoplaying card preview on the
    // Work grid (e.g. "/work/npc-ai-card.mp4") — deliberately not a full
    // URL like videoUrl, since it's always a same-site public/ asset.
    previewVideoUrl: z.string().optional(),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
    // Each localized version of a project is its own entry (e.g.
    // roblox-npc-ai.md for EN, roblox-npc-ai.pt.md for PT) sharing the
    // same urlSlug so both resolve to the same clean URL per language.
    // Named urlSlug, not slug: "slug" is a reserved frontmatter key the
    // glob loader uses for its own id generation, and two entries setting
    // it to the same value collide instead of just sharing our own field.
    lang: z.enum(['en', 'pt']).default('en'),
    urlSlug: z.string().optional(),
  }),
});

export const collections = { work };
