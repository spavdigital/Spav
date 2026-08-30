import type { CollectionEntry } from 'astro:content';

export type WorkEntry = CollectionEntry<'work'>;

/**
 * "Real media" means something a visitor can watch or play without reading a
 * line of code: a clip, an embedded video, or a live place. A screenshot or a
 * still cover counts too — it is a picture of the thing running.
 *
 * The generated code cover deliberately does NOT count. It is honest and it
 * fills the card, but it is not proof the system runs, and ranking on it would
 * flatten the ordering back to "everything is equal".
 */
export function hasRealMedia(entry: WorkEntry): boolean {
  const d = entry.data;
  return Boolean(d.previewVideoUrl || d.videoUrl || d.liveUrl || d.coverImage || d.screenshots.length);
}

/**
 * Cases that can be watched or played come first, then the `order` field, then
 * title as a stable tiebreaker. Nothing here is keyed to a slug, so the day a
 * clip is added to any case it moves up on its own.
 */
export function sortByMediaThenOrder(entries: WorkEntry[]): WorkEntry[] {
  return [...entries].sort((a, b) => {
    const media = Number(hasRealMedia(b)) - Number(hasRealMedia(a));
    if (media !== 0) return media;
    const order = a.data.order - b.data.order;
    if (order !== 0) return order;
    return a.data.title.localeCompare(b.data.title);
  });
}

/**
 * First fenced code block in the body, used as the generated card cover for
 * cases with no media yet. Returns the raw source and the fence's language so
 * the cover highlights with the same Shiki grammar the project page uses.
 *
 * Tabs are expanded to two spaces: the cover renders at ~11px with no
 * horizontal scroll, and a real tab stop eats a third of that width.
 */
export function firstCodeBlock(body: string | undefined): { code: string; lang: string } | null {
  if (!body) return null;
  const match = body.match(/^```([\w-]*)\n([\s\S]*?)^```/m);
  if (!match) return null;
  const code = match[2].replace(/\t/g, '  ').replace(/\s+$/, '');
  if (!code.trim()) return null;
  return { code, lang: match[1] || 'plaintext' };
}

/**
 * Crops the excerpt to what a card cover can show. The cap is generous on
 * purpose: in the wide band layout the cover is as tall as the text column
 * beside it, and a 13-line excerpt left an obvious empty gutter at the bottom.
 * Whatever does not fit is hidden behind the cover's own bottom fade.
 */
export function coverExcerpt(code: string, maxLines = 20, maxCols = 78): string {
  const lines = code.split('\n');
  const kept: string[] = [];
  for (const line of lines) {
    if (kept.length >= maxLines) break;
    kept.push(line.length > maxCols ? line.slice(0, maxCols - 1) + '…' : line);
  }
  return kept.join('\n');
}
