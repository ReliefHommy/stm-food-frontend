// app/components/partner/PartnerCard.tsx
import Image from "next/image";
import type { PartnerStore } from "@/app/lib/partners";

function thaiPart(text: string): string {
  const parts = (text ?? "").split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  return parts.find(p => /[฀-๿]/.test(p)) ?? parts[0] ?? "";
}

export default function PartnerCard({ store }: { store: PartnerStore }) {
  return (
    <div className="block rounded-card border border-hairline bg-cream-card p-5 shadow-sm">
      {store.logo ? (
        <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-full border border-hairline bg-cream-card">
          <Image
            src={store.logo}
            alt={store.name}
            fill
            sizes="64px"
            className="object-contain p-2"
          />
        </div>
      ) : (
        <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-full border border-hairline bg-cream-card" />
      )}

      <p className="text-lg font-extrabold text-charcoal">{store.name}</p>

      <p className="mt-2 text-sm leading-relaxed text-charcoal-soft line-clamp-3">
        {thaiPart(store.description)}
      </p>
    </div>
  );
}
