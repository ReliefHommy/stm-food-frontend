


// app/components/food/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              2026–2027 Roadmap: B2B • Farmer Profiles • Compliance • Cluster Shipping
            </div>

          
               <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
               Thai Farms, Connected to Europe
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              STM Food is a sourcing platform connecting Thai farmers and producers with EU buyers through{" "}
              <span className="font-medium text-slate-800">verified farm profiles</span>,{" "}
              <span className="font-medium text-slate-800">compliance-ready product data</span>, and{" "}
              <span className="font-medium text-slate-800">coordinated cluster shipping</span>.
            </p>

            {/* mini feature bullets */}
            <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                Verified farmer digital profiles
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                EU-friendly compliance layer
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                Transparent sourcing & origin
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                Cluster shipping coordination
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/farmers"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Explore Farmer Network
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Request Buyer Access
              </Link>
            </div>

            {/* small trust line */}
            <p className="mt-4 text-xs text-slate-500">
              Not a grocery shop. STM Food is built for sourcing, verification, and logistics partnerships.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/40 via-transparent to-amber-50/40" />
              <Image
                src="/hero_stm_food.png"
                alt="STM Food product packaging — Thai farm products for the EU market"
                width={1200}
                height={1200}
                priority
                className="relative h-auto w-full object-contain p-6 sm:p-8"
              />
            </div>

            {/* floating label */}
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-xs text-slate-700 shadow-sm backdrop-blur">
              <div className="font-semibold text-slate-900">STM Food</div>
              <div>Thai Farm Network for the European Market</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
