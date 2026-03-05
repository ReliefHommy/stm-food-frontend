// app/components/food/WhatIsSTM.tsx
import Image from "next/image";
import Link from "next/link";

type WhatIsSTMProps = {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  // Optional: swap the gray placeholder with a real image later
  imageSrc?: string | null;
};

export default function WhatIsSTM({
  title = "What is STM Food",
  subtitle = "A Digital Bridge Between Thai Farms and Europe",
  paragraphs = [
    "STM Food helps connect Thai farmers,",
    "small producers,",
    "and organic cooperatives with buyers in",
    "Europe.",
  ],
  ctaLabel = "CTA",
  ctaHref = "#",
  imageSrc = "/what-is-stm.png",
  
}: WhatIsSTMProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Image / Placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-[240px] w-full max-w-[420px] overflow-hidden rounded-3xl bg-slate-200">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt="STM Food section visual"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full" aria-hidden="true" />
              )}
            </div>
          </div>

          {/* Right: Text */}
          <div className="md:pl-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>

            <p className="mt-3 text-sm font-semibold text-slate-700">
              {subtitle}
            </p>

            <div className="mt-4 space-y-1 text-base leading-7 text-slate-700">
              {paragraphs.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            <div className="mt-7">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-emerald-800 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}