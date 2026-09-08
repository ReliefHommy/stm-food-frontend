// app/lib/partners.ts
// Fetch helpers for the public Partners pages (app/partners). The list page
// uses the store endpoint (api/food/stores/); the detail route still uses
// Thefood's blog endpoint (api/food/blog/). Both are a different Django app
// than Studio's stm-post endpoint (see app/lib/studio.ts) — do not assume the
// field names match; they were confirmed separately against the live API.

export type PartnerStore = {
  id: number;
  slug: string;
  name: string;
  description: string;
  logo: string | null;
  website: string | null;
};

export type PartnerPost = {
  id: number;
  title: string;
  slug: string;
  content: string;
  author: PartnerStore;
  created_at: string;
  featured_image: string | null;
  related_recipe: unknown | null;
  related_products: unknown[];
};

const API_URL = (process.env.NEXT_PUBLIC_API_BASE || 'https://api.somtammarket.com').replace(/\/+$/, '');
const REVALIDATE = 300;

export async function getPartnerStores(): Promise<PartnerStore[]> {
  const res = await fetch(`${API_URL}/api/food/stores/`, { next: { revalidate: REVALIDATE } });
  if (!res.ok) throw new Error(`Store list API returned ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function getPartnerPosts(): Promise<PartnerPost[]> {
  const res = await fetch(`${API_URL}/api/food/blog/`, { next: { revalidate: REVALIDATE } });
  if (!res.ok) throw new Error(`Partner blog API returned ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

/** Detail lookup is by slug: GET /api/food/blog/<slug>/ (confirmed 200). Falls
 * back to scanning the list endpoint if the direct lookup fails. */
export async function getPartnerPost(rawSlug: string): Promise<PartnerPost | null> {
  const slug = decodeURIComponent(rawSlug).trim();
  if (!slug) return null;

  try {
    const res = await fetch(`${API_URL}/api/food/blog/${encodeURIComponent(slug)}/`, {
      next: { revalidate: REVALIDATE },
    });
    if (res.ok) return (await res.json()) as PartnerPost;
  } catch {
    // fall through to the list lookup
  }

  try {
    const posts = await getPartnerPosts();
    return posts.find((p) => p.slug === slug) ?? null;
  } catch {
    return null;
  }
}
