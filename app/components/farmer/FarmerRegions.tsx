import { regions } from "./data";

export default function FarmerRegions() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Regional sourcing structure
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Thai Farm Clusters
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="rounded-3xl border border-slate-200 bg-[#f8f6f1] p-6"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {region.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {region.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
