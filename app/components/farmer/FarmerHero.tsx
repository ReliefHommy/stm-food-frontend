import Link from "next/link";

export default function FarmerHero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            STM Food Network
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Explore the Farmer Network
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            STM Food connects regional Thai producers with European buyers
            through farmer digital profiles, structured product visibility,
            and cluster-based sourcing coordination.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Request Buyer Access
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Back to STM Food
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
