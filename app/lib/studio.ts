// app/lib/studio.ts
// Shared fetch helper for Studio's stm-post endpoint, used by both
// generateMetadata and the page component in app/explore/[slug]/page.tsx
// (Next dedupes the two identical fetch calls within one request).

export type StudioPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  image_url: string | null;
  language: string;
  published_at: string | null;
  created_at: string;
};

// Matches the env var ExploreGrid.tsx already uses (NEXT_PUBLIC_API_BASE),
// not NEXT_PUBLIC_API_URL.
const API_URL = (process.env.NEXT_PUBLIC_API_BASE || 'https://api.somtammarket.com').replace(/\/+$/, '');
const REVALIDATE = 300;

/** Accepts either a slug or a numeric id. Returns null if there's no such post. */
export async function getStudioPost(rawSlug: string): Promise<StudioPost | null> {
  const key = decodeURIComponent(rawSlug).replace(/[,\s]+$/g, '');
  if (!key) return null;

  const detailUrl = /^\d+$/.test(key)
    ? `${API_URL}/api/studio/stm-post/${key}/`
    : `${API_URL}/api/studio/stm-post/by-slug/${encodeURIComponent(key)}/`;

  try {
    const res = await fetch(detailUrl, { next: { revalidate: REVALIDATE } });
    if (res.ok) return (await res.json()) as StudioPost;
  } catch {
    // fall through to the list lookup
  }

  // Fallback: the list endpoint is confirmed live and currently returns 6 posts.
  try {
    const res = await fetch(`${API_URL}/api/studio/stm-post/`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    const posts = (await res.json()) as StudioPost[];
    return posts.find((p) => p.slug === key || String(p.id) === key) ?? null;
  } catch {
    return null;
  }
}
