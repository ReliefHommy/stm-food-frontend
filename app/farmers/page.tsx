

import Link from "next/link";

type Farmer = {
  id: number;
  farmName: string;
  region: string;
  province: string;
  products: string[];
  capacity: string;
  status: "Verified" | "In Review";
  story: string;
};

const farmers: Farmer[] = [
  {
    id: 1,
    farmName: "Chiang Rai Highland Coffee Collective",
    region: "North",
    province: "Chiang Rai",
    products: ["Coffee", "Tea", "Herbs"],
    capacity: "2.5 tons / season",
    status: "Verified",
    story:
      "A northern farm collective focused on traceable highland coffee and herb cultivation for specialty buyers.",
  },
  {
    id: 2,
    farmName: "Surin Jasmine Rice Group",
    region: "Northeast (Isaan)",
    province: "Surin",
    products: ["Jasmine Rice", "Chili"],
    capacity: "12 tons / harvest cycle",
    status: "Verified",
    story:
      "Producer group in Surin working with jasmine rice and supporting transparent regional sourcing for export readiness.",
  },
  {
    id: 3,
    farmName: "Ayutthaya Fruit & Tamarind Farm",
    region: "Central",
    province: "Ayutthaya",
    products: ["Fruits", "Tamarind", "Coconut"],
    capacity: "5 tons / season",
    status: "In Review",
    story:
      "Mixed produce farm with fruit and tamarind supply, preparing structured product data for future EU buyer access.",
  },
  {
    id: 4,
    farmName: "Nakhon Si Tropical Crop Network",
    region: "South",
    province: "Nakhon Si Thammarat",
    products: ["Spices", "Dried Fruit", "Tropical Crops"],
    capacity: "4 tons / season",
    status: "Verified",
    story:
      "Southern producer network supporting tropical crops and spices through a cluster-based sourcing model.",
  },
  {
    id: 5,
    farmName: "Ubon Chili Heritage Producers",
    region: "Northeast (Isaan)",
    province: "Ubon Ratchathani",
    products: ["Chili", "Fermented Foods"],
    capacity: "3 tons / cycle",
    status: "Verified",
    story:
      "A regional chili-focused producer group preserving traditional food heritage while improving digital sourcing visibility.",
  },
  {
    id: 6,
    farmName: "Phrae Botanical Herb Farm",
    region: "North",
    province: "Phrae",
    products: ["Herbs", "Tea"],
    capacity: "1.8 tons / season",
    status: "In Review",
    story:
      "Small-scale botanical herb farm building a digital profile for future partnerships with wellness and specialty buyers.",
  },
];

const regions = [
  {
    name: "North",
    summary: "Coffee, tea, and herbs from highland farm clusters.",
  },
  {
    name: "Northeast (Isaan)",
    summary: "Jasmine rice, chili, and traditional fermented food producers.",
  },
  {
    name: "Central",
    summary: "Fruit, tamarind, and coconut sourcing from mixed agricultural zones.",
  },
  {
    name: "South",
    summary: "Spices, dried fruit, and tropical crop networks.",
  },
];

export default function FarmersPage() {
  return (
    <main className="bg-[#faf8f3]">
      {/* Hero */}
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

      {/* Search / Filters mockup */}
      <section className="bg-[#f8f6f1]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1.5fr_1fr_1fr_auto] md:p-6">
            <input
              type="text"
              placeholder="Search farm, product, or province"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:border-emerald-500"
            />
            <select className="rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500">
              <option>All Regions</option>
              <option>North</option>
              <option>Northeast (Isaan)</option>
              <option>Central</option>
              <option>South</option>
            </select>
            <select className="rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500">
              <option>All Categories</option>
              <option>Rice</option>
              <option>Coffee</option>
              <option>Herbs</option>
              <option>Spices</option>
              <option>Fruit</option>
            </select>
            <button className="rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Region overview */}
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

      {/* Farmer cards */}
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

      {/* Bottom CTA */}
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
    </main>
  );
}
