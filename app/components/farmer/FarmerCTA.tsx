import Link from "next/link";

export default function FarmerCTA() {
  return (
    <section className="bg-emerald-900">
      <div className="mx-auto max-w-7xl px-6 py-16 text-white md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Join the network
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Built for transparent sourcing relationships
          </h2>
          <p className="mt-5 text-base leading-7 text-emerald-50/90">
            STM Food starts with producer visibility, regional structure, and
            practical sourcing coordination for the European market.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
            >
              Request Buyer Access
            </Link>
            <Link
              href="/contaxt"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact STM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
