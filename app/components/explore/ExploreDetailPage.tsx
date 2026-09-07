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

      <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Link
          href="/explore"
          className="font-body text-sm text-charcoal-soft underline-offset-4 hover:text-terracotta hover:underline"
        >
          กลับไปหน้าสำรวจ
        </Link>

        {/* Title + meta */}
        <header className="mb-8 mt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-cream-card px-3 py-1 font-body text-xs text-charcoal-soft">
            <span className="h-2 w-2 rounded-full bg-terracotta" />
            เรื่องราวจาก STM
          </div>

          <h1 className="mt-4 font-headline text-3xl leading-tight text-charcoal sm:text-4xl">
            {post.title}
          </h1>

          {dateLabel && (
            <p className="mt-3 font-body text-sm text-charcoal-soft">
              เผยแพร่เมื่อ {dateLabel}
            </p>
          )}
        </header>

        {/* Post image */}
        {post.image_url && (
          <div className="relative overflow-hidden rounded-card border border-hairline bg-cream-card">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image_url}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Content card */}
        <section className="mt-10 rounded-card border border-hairline bg-cream-card">
          <div className="p-6 sm:p-10">
            {/* Excerpt */}
            {post.excerpt && (
              <div className="rounded-card border-l-4 border-terracotta bg-cream px-5 py-4">
                <p className="whitespace-pre-line font-body text-lg font-medium leading-relaxed text-charcoal">
                  {post.excerpt}
                </p>
              </div>
            )}

            {/* Body */}
            {paragraphs.length > 0 && (
              <div
                className={`space-y-5 font-body text-[17px] leading-[1.85] text-charcoal-soft ${
                  post.excerpt ? 'mt-8' : ''
                }`}
              >
                {paragraphs.map((p, i) => (
                  <p key={i} className="whitespace-pre-line">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Footer row */}
            <div className="mt-10 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/explore"
                className="font-body text-sm font-medium text-charcoal-soft hover:text-terracotta"
              >
                ← กลับไปหน้าสำรวจ
              </Link>
              <div className="font-body text-xs text-charcoal-soft">
                เผยแพร่ผ่าน STM Studio
              </div>
            </div>
          </div>
        </section>
      </article>

      <LandingFooter />
    </div>
  );
}
