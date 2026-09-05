// app/partners/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PartnerDetailPage from "@/app/components/partner/PartnerDetailPage";
import { getPartnerPost } from "@/app/lib/partners";

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const partner = await getPartnerPost(slug);
  if (!partner) return { title: "ไม่พบพาร์ทเนอร์นี้ · Som Tam Market" };

  const excerpt = partner.content?.replace(/\s+/g, " ").trim().slice(0, 160);

  return {
    title: `${partner.title} · Som Tam Market`,
    description: excerpt || undefined,
    openGraph: {
      type: "article",
      title: partner.title,
      description: excerpt || undefined,
      images: partner.featured_image ? [partner.featured_image] : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const partner = await getPartnerPost(slug);
  if (!partner) notFound();

  return <PartnerDetailPage partner={partner} />;
}
