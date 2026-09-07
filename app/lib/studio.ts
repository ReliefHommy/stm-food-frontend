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

const API = process.env.NEXT_PUBLIC_API_BASE ?? "https://api.somtammarket.com";
const REVALIDATE = 300;

export async function getStudioPost(rawSlug: string): Promise<StudioPost | null> {
  const key = decodeURIComponent(rawSlug).replace(/[,\s]+$/g, "");
  if (!key) return null;

  try {
    const res = await fetch(`${API}/api/studio/stm-post/`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    const posts = (await res.json()) as StudioPost[];
    return posts.find((p) => p.slug === key || String(p.id) === key) ?? null;
  } catch {
    return null;
  }
}
