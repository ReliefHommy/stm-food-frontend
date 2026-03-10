// app/components/homepage/ClusterShipping.tsx

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Thai Farm Clusters",
    description:
      "Producers are organized into regional farm clusters across Thailand, allowing buyers to discover supply sources with clearer structure.",
  },
  {
    title: "STM Coordination Layer",
    description:
      "STM Food provides a digital coordination layer connecting farmers, product data, and sourcing requests from European buyers.",
  },
  {
    title: "Regional Aggregation",
    description:
      "Products from multiple farms can be aggregated through cluster-based sourcing, making export preparation more practical for smaller producers.",
  },
  {
    title: "Export & Logistics Support",
    description:
      "STM supports early-stage export readiness and helps align producers with logistics and documentation requirements.",
  },
  {
    title: "European Buyers",
    description:
      "Buyers gain clearer sourcing visibility and can explore Thai producer networks through a structured digital platform.",
  },
];

export default function ClusterShipping() {
  return (
    <section className="bg-[#f8f6f1] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Logistics Coordination
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Cluster Shipping Model
          </h2>

          <p className="mt-4 text-lg text-slate-700">
            A practical way to coordinate Thai farm supply for the European
            market
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            STM Food helps organize producers into regional clusters so export
            coordination becomes more realistic for smaller farms and more
            transparent for European buyers.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-emerald-700">
                    Step {index + 1}
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 text-slate-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Supporting explanation */}
        <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h3 className="text-lg font-semibold text-emerald-900">
            Why cluster shipping matters
          </h3>

          <p className="mt-3 text-sm leading-7 text-emerald-800">
            Many Thai producers operate at smaller scale and cannot export
            individually. By organizing sourcing through regional clusters,
            STM Food helps create more realistic export pathways while giving
            European buyers better visibility into producer networks.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/buyers/request-access"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Request Buyer Access
          </a>

          <a
            href="/farmers"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Explore Farm Network
          </a>
        </div>
      </div>
    </section>
  );
}