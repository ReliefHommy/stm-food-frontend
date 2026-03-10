// app/components/homepage/FarmMapNetwork.tsx
"use client";

import { useState } from "react";

type RegionKey = "north" | "northeast" | "central" | "south";

type Region = {
  key: RegionKey;
  name: string;
  shortLabel: string;
  products: string[];
  description: string;
  badge: string;
};

const regions: Region[] = [
  {
    key: "north",
    name: "North",
    shortLabel: "Northern Thailand",
    products: ["Coffee", "Tea", "Herbs"],
    badge: "Highland Crops",
    description:
      "Northern farm clusters focus on coffee, tea, and herbs grown in cooler highland regions, supporting traceable specialty sourcing.",
  },
  {
    key: "northeast",
    name: "Northeast (Isaan)",
    shortLabel: "Isaan Region",
    products: ["Jasmine Rice", "Chili", "Fermented Foods"],
    badge: "Staples & Tradition",
    description:
      "The Northeast is a key sourcing region for jasmine rice, chili, and traditional fermented products with strong cultural and agricultural identity.",
  },
  {
    key: "central",
    name: "Central",
    shortLabel: "Central Thailand",
    products: ["Fruits", "Tamarind", "Coconut"],
    badge: "Mixed Produce",
    description:
      "Central Thailand offers access to fruits, tamarind, and coconut products through practical aggregation across established agricultural zones.",
  },
  {
    key: "south",
    name: "South",
    shortLabel: "Southern Thailand",
    products: ["Spices", "Dried Fruit", "Tropical Crops"],
    badge: "Tropical Supply",
    description:
      "Southern farm clusters contribute spices, dried fruit, and tropical crops that expand STM Food’s sourcing network for EU buyers.",
  },
];

export default function FarmMapNetwork() {
  const [activeRegion, setActiveRegion] = useState<Region>(regions[0]);

  return (
    <section className="bg-[#f8f6f1] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Regional Sourcing Structure
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Thai Farm Network
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Sourcing from regional farm clusters across Thailand
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            STM Food begins by organizing producers into regional supply
            clusters, making sourcing more transparent and export coordination
            more practical.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left side: visual map mockup */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Thailand Regional Cluster Map
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Click a region to view sourcing highlights
                </p>
              </div>
            </div>

            {/* Mock map layout */}
            <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-4">
              <button
                type="button"
                onClick={() => setActiveRegion(regions[0])}
                className={`w-56 rounded-3xl px-6 py-5 text-left transition ${
                  activeRegion.key === "north"
                    ? "bg-emerald-700 text-white shadow-lg"
                    : "bg-emerald-50 text-slate-800 hover:bg-emerald-100"
                }`}
              >
                <div className="text-sm font-semibold uppercase tracking-wide opacity-80">
                  Region 01
                </div>
                <div className="mt-1 text-lg font-bold">North</div>
              </button>

              <button
                type="button"
                onClick={() => setActiveRegion(regions[1])}
                className={`w-72 rounded-3xl px-6 py-6 text-left transition ${
                  activeRegion.key === "northeast"
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-amber-50 text-slate-800 hover:bg-amber-100"
                }`}
              >
                <div className="text-sm font-semibold uppercase tracking-wide opacity-80">
                  Region 02
                </div>
                <div className="mt-1 text-lg font-bold">Northeast (Isaan)</div>
              </button>

              <div className="grid w-full max-w-md grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setActiveRegion(regions[2])}
                  className={`rounded-3xl px-5 py-6 text-left transition ${
                    activeRegion.key === "central"
                      ? "bg-lime-700 text-white shadow-lg"
                      : "bg-lime-50 text-slate-800 hover:bg-lime-100"
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-wide opacity-80">
                    Region 03
                  </div>
                  <div className="mt-1 text-lg font-bold">Central</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveRegion(regions[3])}
                  className={`rounded-3xl px-5 py-6 text-left transition ${
                    activeRegion.key === "south"
                      ? "bg-orange-600 text-white shadow-lg"
                      : "bg-orange-50 text-slate-800 hover:bg-orange-100"
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-wide opacity-80">
                    Region 04
                  </div>
                  <div className="mt-1 text-lg font-bold">South</div>
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                This is a homepage-ready interactive mockup. Later, you can
                replace it with a real SVG Thailand map or clickable province
                layer.
              </p>
            </div>
          </div>

          {/* Right side: active region details */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
              {activeRegion.badge}
            </span>

            <h3 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
              {activeRegion.shortLabel}
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {activeRegion.description}
            </p>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Main sourcing categories
              </h4>

              <div className="mt-4 flex flex-wrap gap-3">
                {activeRegion.products.map((product) => (
                  <span
                    key={product}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {regions.map((region) => (
                <button
                  key={region.key}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    activeRegion.key === region.key
                      ? "border-emerald-700 bg-emerald-50"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {region.name}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    {region.products.join(" • ")}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}