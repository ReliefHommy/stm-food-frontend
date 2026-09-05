// app/components/partner/PartnerCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { PartnerPost } from "@/app/lib/partners";

function excerpt(content: string, max = 140): string {
  const flat = content.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  return `${flat.slice(0, max).trimEnd()}…`;
}

export default function PartnerCard({ partner }: { partner: PartnerPost }) {
  return (
    <Link
      href={`/partners/${partner.slug}`}
      className="group block break-inside-avoid rounded-card border border-hairline bg-cream-card p-4 shadow-sm hover:shadow-md"
    >
      {partner.featured_image ? (
        <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-card bg-hairline/40">
          <Image
            src={partner.featured_image}
            alt={partner.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="mb-3 aspect-[4/3] w-full rounded-card bg-hairline/40" />
      )}

      <div className="min-w-0">
        <p className="text-sm font-extrabold text-charcoal">{partner.title}</p>
        {partner.author?.name ? (
          <p className="mt-0.5 text-xs font-semibold text-charcoal-soft">
            โดย {partner.author.name}
          </p>
        ) : null}
      </div>

      <p className="mt-2 text-xs text-charcoal-soft line-clamp-2">
        {excerpt(partner.content)}
      </p>

      <p className="mt-3 text-xs font-extrabold text-terracotta group-hover:underline">
        Open profile →
      </p>
    </Link>
  );
}
