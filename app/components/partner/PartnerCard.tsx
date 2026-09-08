// app/components/partner/PartnerCard.tsx
import Image from "next/image";
import type { PartnerStore } from "@/app/lib/partners";

export default function PartnerCard({ store }: { store: PartnerStore }) {
  return (
    <div className="block break-inside-avoid rounded-card border border-hairline bg-cream-card p-4 shadow-sm">
      {store.logo ? (
        <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-card bg-hairline/40">
          <Image
            src={store.logo}
            alt={store.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-4"
          />
        </div>
      ) : (
        <div className="mb-3 aspect-[4/3] w-full rounded-card bg-hairline/40" />
      )}

      <div className="min-w-0">
        <p className="text-sm font-extrabold text-charcoal">{store.name}</p>
      </div>

      <p className="mt-2 text-xs text-charcoal-soft line-clamp-2">
        {store.description}
      </p>
    </div>
  );
}
