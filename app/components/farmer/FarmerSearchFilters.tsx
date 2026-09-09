export default function FarmerSearchFilters() {
  return (
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
  );
}
