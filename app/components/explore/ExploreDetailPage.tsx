// app/components/explore/ExploreDetailPage.tsx
import { Bitter, Noto_Sans_Thai, Work_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import LandingNav from '@/app/components/landing/LandingNav';
import LandingFooter from '@/app/components/landing/LandingFooter';
import type { StudioPost } from '@/app/lib/studio';

// Same per-page font loading pattern as app/explore/page.tsx (this repo scopes
// these fonts per-page rather than in the shared root layout).
const bitter = Bitter({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-bitter',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-thai',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans',
  display: 'swap',
});

function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    calendar: 'gregory',
  }).format(d);
}

export default function ExploreDetailPage({ post }: { post: StudioPost }) {
  const dateLabel = formatDate(post.published_at ?? post.created_at);
  const paragraphs = (post.body ?? '')
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div
      className={`${bitter.variable} ${notoSansThai.variable} ${workSans.variable} font-body bg-cream text-charcoal min-h-screen`}
    >
      <LandingNav />

      <article className="mx-auto max-w-2xl px-5 py-12 sm:py-16">
        <Link
          href="/explore"
          className="font-body text-sm text-charcoal-soft underline-offset-4 hover:text-terracotta hover:underline"
        >
          กลับไปหน้าสำรวจ
        </Link>

        <header className="mt-6">
          <h1 className="font-headline text-3xl leading-tight text-charcoal sm:text-4xl">
            {post.title}
          </h1>
          {dateLabel && (
            <p className="mt-3 font-body text-sm text-charcoal-soft">
              เผยแพร่เมื่อ {dateLabel}
            </p>
          )}
        </header>

        {post.image_url && (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-card border border-hairline bg-cream-card">
            <Image
              src={post.image_url}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-10 space-y-5 font-body text-[17px] leading-[1.85] text-charcoal-soft">
          {paragraphs.map((p, i) => (
            <p key={i} className="whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-14 border-t border-hairline pt-8">
          <Link
            href="/explore"
            className="inline-block rounded-btn bg-terracotta px-6 py-3 font-body text-white transition-colors hover:bg-terracotta-hover"
          >
            อ่านเรื่องราวอื่นต่อ
          </Link>
        </div>
      </article>

      <LandingFooter />
    </div>
  );
}
