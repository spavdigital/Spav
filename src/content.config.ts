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
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
