import Link from "next/link";
import { farmers } from "./data";

export default function FarmerGrid() {
  return (
    <section className="bg-[#faf8f3]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Farmer digital profiles
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Featured Producers
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This mockup shows how STM Food can present verified farmers,
              product categories, and regional sourcing details for buyers.
            </p>
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
            {farmers.length} profiles in mock network
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {farmers.map((farmer) => (
            <article
              key={farmer.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-emerald-700">
                    {farmer.region}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {farmer.farmName}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {farmer.province}, Thailand
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    farmer.status === "Verified"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {farmer.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {farmer.story}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Main products
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {farmer.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-[#f8f6f1] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Production capacity
                </p>
                <p className="mt-2 text-sm font-medium text-slate-800">
                  {farmer.capacity}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Link
                  href="/login"
                  className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  View Profile →
                </Link>

                <Link
                  href="/login"
                  className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Contact via STM
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
