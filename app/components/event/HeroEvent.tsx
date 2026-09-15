'use client';






export default function HeroEvents() {


 

  return (
<section className="relative w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Headline & Subheadline [cite: 31, 32, 33, 34] */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#d876ac] mb-6 leading-[1.1]">
          <span className="text-[#422646]">Discover</span> Thai-Connected
          <br />
          Experiences
        </h1>
        <p className="text-lg text-neutral-500 mb-10 max-w-xl mx-auto">
          SOMTAM คือจุดนัดพบของอาหารไทยในยุโรป

        </p>

        {/* Search Bar: City / Date / Category [cite: 35] */}
        <div className="flex flex-col md:flex-row items-center bg-white border border-neutral-200 shadow-xl shadow-black/5 rounded-2xl md:rounded-full p-2 mb-8 transition-all hover:shadow-2xl">
          <input 
            type="text" 
            placeholder="Search city..." 
            className="flex-1 px-6 py-3 bg-transparent outline-none text-sm border-b md:border-b-0 md:border-r border-neutral-100"
          />
          <input 
            type="text" 
            placeholder="Select date" 
            className="flex-1 px-6 py-3 bg-transparent outline-none text-sm border-b md:border-b-0 md:border-r border-neutral-100"
          />
          <button className="w-full md:w-auto rounded-full bg-[#422646] text-white px-8 py-3 md:rounded-full font-semibold text-sm hover:brightness-110 transition-all">
            Find
          </button>
        </div>

  

      </div>
    </section>
  );
}