// app/components/explore/ExploreGrid.tsx
'use client';

import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

const API_URL = (process.env.NEXT_PUBLIC_API_BASE || 'https://api.somtammarket.com').replace(/\/+$/, '');

// Studio's /api/studio/stm-post/ has no partner-store or category/pillar field yet
// (confirmed 2026-08-26) — every card falls back to the generic editorial tag below.
type StudioPost = {
  id: number;
  title: string;
  excerpt?: string;
  image_url?: string;
};

const MASONRY_BREAKPOINTS = {
  default: 4,
  768: 2,
};

export default function ExploreGrid() {
  const [posts, setPosts] = useState<StudioPost[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_URL}/api/studio/stm-post/`)
      .then((res) => {
        if (!res.ok) throw new Error(`Studio API returned ${res.status}`);
        return res.json();
      })
      .then((data: StudioPost[]) => {
        if (!cancelled) setPosts(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <p className="font-body text-sm text-charcoal-soft text-center py-16">
        ขออภัย ไม่สามารถโหลดเนื้อหาได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง
      </p>
    );
  }

  if (!posts) {
    return <p className="font-body text-sm text-charcoal-soft text-center py-16">กำลังโหลดเนื้อหา...</p>;
  }

  if (posts.length === 0) {
    return <p className="font-body text-sm text-charcoal-soft text-center py-16">ยังไม่มีเนื้อหาในขณะนี้</p>;
  }

  return (
    <Masonry breakpointCols={MASONRY_BREAKPOINTS} className="flex gap-4 md:gap-5" columnClassName="flex flex-col gap-4 md:gap-5">
      {posts.map((post) => (
        <article key={post.id} className="bg-cream-card border border-hairline rounded-card overflow-hidden">
          {post.image_url && (
            // eslint-disable-next-line @next/next/no-img-element -- intrinsic aspect ratio drives the masonry packing
            <img src={post.image_url} alt={post.title} loading="lazy" className="w-full h-auto block" />
          )}
          <div className="p-4">
            <h3 className="font-headline text-base font-semibold text-charcoal leading-snug">{post.title}</h3>
            {post.excerpt && (
              <p className="font-body text-sm text-charcoal-soft mt-2" style={{ lineHeight: 1.6 }}>
                {post.excerpt}
              </p>
            )}
            <span className="inline-block font-body text-xs font-medium text-charcoal-soft bg-hairline/40 rounded-full px-3 py-1 mt-3">
              เรื่องราว
            </span>
          </div>
        </article>
      ))}
    </Masonry>
  );
}
