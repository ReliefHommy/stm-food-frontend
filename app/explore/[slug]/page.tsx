// app/explore/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExploreDetailPage from '@/app/components/explore/ExploreDetailPage';
import { getStudioPost } from '@/app/lib/studio';

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getStudioPost(slug);
  if (!post) return { title: 'ไม่พบเรื่องราวนี้ · Som Tam Market' };

  return {
    title: `${post.title} · Som Tam Market`,
    description: post.excerpt || undefined,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt || undefined,
      images: post.image_url ? [post.image_url] : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getStudioPost(slug);
  if (!post) notFound();

  return <ExploreDetailPage post={post} />;
}
