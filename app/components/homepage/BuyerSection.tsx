// app/components/homepage/BuyerSection.tsx
type BuyerType = {
  title: string;
  description: string;
};

type BuyerBenefit = {
  title: string;
  description: string;
};

const buyerTypes: BuyerType[] = [
  {
    title: "Thai Grocery Stores",
    description:
      "Source Thai farm products with clearer origin, structured product data, and more direct supplier visibility.",
  },
  {
    title: "Asian Food Importers",
    description:
      "Discover regional sourcing clusters that help simplify early-stage supplier discovery and trade coordination.",
  },
  {
    title: "Restaurants",
    description:
      "Access Thai ingredients with stronger sourcing transparency for menu planning and long-term supplier relationships.",
  },
  {
    title: "Organic Retailers",
    description:
      "Explore producer-led sourcing with a platform designed around trust, traceability, and export readiness.",
  },
  {
    title: "Wellness Shops",
    description:
      "Find herbs, dried fruit, spices, and related categories with a more curated and origin-based sourcing approach.",
  },
  {
    title: "Specialty Distributors",
    description:
      "Use STM Food as a discovery and coordination layer for niche Thai products entering the European market.",
  },
];

const benefits: BuyerBenefit[] = [
  {
    title: "Verified producer visibility",
    description:
      "See who produces what, from which region, and how STM organizes sourcing across Thai farm clusters.",
  },
  {
    title: "Standardized product information",
    description:
      "Review clearer product details, origin context, and documentation support before moving into sourcing conversations.",
  },
  {
    title: "Reduced sourcing uncertainty",
    description:
      "STM Food is designed to reduce blind sourcing by combining regional structure, producer profiles, and platform guidance.",
  },
  {
    title: "Cluster-based shipping support",
    description:
      "Early-stage logistics coordination becomes more practical when producers are grouped into structured sourcing clusters.",
  },
];

export default function BuyerSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left panel */}
          <div className="rounded-3xl bg-emerald-900 px-8 py-10 text-white shadow-sm md:px-10 md:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100/90">
              Built for B2B Sourcing
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Built for European Buyers
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-emerald-50/90">
              STM Food is designed for buyers who need more than a product
              listing. It supports sourcing relationships built on clearer
              producer visibility, practical product information, and early
              export coordination.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <h3 className="text-base font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/85">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
              >
                Request Buyer Access
              </a>
              <a
                href="/farmers"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Farmer Network
              </a>
            </div>

            <p className="mt-8 text-sm italic text-emerald-100/85">
              STM Food is B2B first — built to support sourcing decisions, not
              impulse shopping.
            </p>
          </div>

          {/* Right panel */}
          <div className="rounded-3xl border border-slate-200 bg-[#f8f6f1] p-8 shadow-sm md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Who STM Food serves
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Buyer Types in the Early Network
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                STM Food’s early model is focused on European businesses that
                need trusted access to Thai producers and more structured
                sourcing pathways.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {buyerTypes.map((buyer) => (
                <div
                  key={buyer.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange-500" />
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        {buyer.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {buyer.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h4 className="text-base font-semibold text-emerald-900">
                Why this matters
              </h4>
              <p className="mt-2 text-sm leading-6 text-emerald-800/90">
                European buyers increasingly need clearer sourcing visibility,
                better product context, and more practical coordination with
                smaller producers. STM Food is designed to help bridge that gap
                in a structured, scalable way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}