import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  // Function form (not a plain object) so the schema can use `image()`, which
  // routes any file it validates through Astro's image pipeline — the
  // optimized formats, the width/height needed to avoid layout shift, and the
  // hashed filename. Paths are resolved relative to the markdown file.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      engine: z.string(),
      complexity: z.string(),
      summary: z.string(),
      videoUrl: z.string().url().optional(),
      // Local, self-hosted clip used as the autoplaying card preview on the
      // Work grid (e.g. "/work/npc-ai-card.mp4") — deliberately not a full
      // URL like videoUrl, since it's always a same-site public/ asset.
      previewVideoUrl: z.string().optional(),
      // Poster frame for previewVideoUrl. Shown while the video loads, if
      // autoplay is blocked (iOS low-power mode, data saver), and — via the
      // prefers-reduced-motion CSS in ProjectCard — as the only thing shown
      // to users who've asked for less motion.
      previewPosterUrl: z.string().optional(),
      // Still cover for the Work card, for cases that have a screenshot but no
      // clip. Ranks below previewVideoUrl and above the generated code cover.
      // `alt` is required, not optional: a decorative alt on the only visual a
      // scanning visitor sees would hide the case from screen readers.
      coverImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      // Feeds /gallery. Same reasoning on alt. Empty by default, which is why
      // the gallery route exists but stays out of the nav for now.
      screenshots: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          })
        )
        .default([]),
      repoUrl: z.string().url().optional(),
      // The playable place. Named liveUrl since it predates the card redesign
      // and is already rendered as "Try it" on the project page; the card
      // surfaces the same field as "Play".
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
