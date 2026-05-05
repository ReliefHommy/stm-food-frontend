// app/components/food/ComplianceLayer.tsx
import Image from "next/image";
import Link from "next/link";

type StatCard = {
  percent: string;
  label: string;
  imageSrc: string; // put images in /public/images/...
  imageAlt?: string;
};

type StepItem = {
  number: string; // "01"
  title: string;
  description: string;
};

type ComplianceLayerProps = {
  leftTitle?: string;
  leftSubtitle?: string;
  stats?: StatCard[];
  rightTitle?: string;
  rightBadge?: string;
  steps?: StepItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ComplianceLayer({
  leftTitle = "Built for European\nBuyers",
  leftSubtitle = "What Our Customer Love Most",
  stats = [
    {
      percent: "40%",
      label: "Fresh Produce",
      imageSrc: "/images/stat-fresh-produce.png",
      imageAlt: "Fresh produce",
    },
    {
      percent: "25%",
      label: "Beverages",
      imageSrc: "/images/stat-beverages.png",
      imageAlt: "Beverages",
    },
  ],
  rightTitle = "Trusted Quality",
  rightBadge = "Guaranteed Freshness",
  steps = [
    {
      number: "01",
      title: "Farm Transparency",
      description: "Verified farm profiles and production information.",
    },
    {
      number: "02",
      title: "Product Data",
      description: "Clear ingredient lists and production origin.",
    },
    {
      number: "03",
      title: "Export Readiness",
      description: "Documentation guidance for EU food import standards.",
    },
  ],
  ctaLabel = "Buyer Access",
  ctaHref = "/",
}: ComplianceLayerProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 md:grid-cols-2">
          {/* LEFT PANEL */}
          <div className="bg-emerald-900 px-8 py-10 text-white md:px-12 md:py-12">
            <h3 className="whitespace-pre-line text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              {leftTitle}
            </h3>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="text-center">
                  <div className="relative mx-auto h-[120px] w-[120px] overflow-hidden rounded-xl">
                    <Image
                      src={s.imageSrc}
                      alt={s.imageAlt ?? s.label}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="text-4xl font-extrabold tracking-tight">
                        {s.percent}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-base font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg font-semibold italic text-white/95">
              {leftSubtitle}
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white px-8 py-10 md:px-12 md:py-12">
            <h3 className="text-5xl font-extrabold tracking-tight text-slate-900">
              {rightTitle}
            </h3>

            <div className="mt-4 inline-flex items-center rounded bg-emerald-900 px-3 py-1 text-sm font-semibold text-white">
              {rightBadge}
            </div>

            <div className="mt-8 space-y-7">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-5">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-orange-600 text-2xl font-extrabold text-white">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-base leading-7 text-slate-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-emerald-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
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