// components/event/FeaturedThisWeek.tsx
export default function FeaturedThisWeek() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F3D2E]">Coming Soon</h2>
          <p className="text-neutral-500 mt-1">งานอีเวนท์ที่กำลังจะมาเร็วๆนี้</p>
        </div>
        <a 
        href="/events"
        className="text-sm font-bold text-[#F97316] hover:underline decoration-2 underline-offset-4">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[500px]">
        {/* BIG FEATURE CARD */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-neutral-100 cursor-pointer h-64 sm:h-80 md:h-auto">
          <img
            src="/banners/northern-light-vipassana.png"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Main Event"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 p-6 md:p-8 text-white">
            <span className="bg-[#d876ac] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              Wat Buddharama
            </span>
            <h3 className="text-2xl md:text-4xl font-bold mt-4 mb-2">Travel trips and Dhamma practice värmdö</h3>
            <p className="text-white/80 max-w-md line-clamp-2">วิปัสสนาแสงเหนือ</p>
          </div>
        </div>

        {/* SIDE STACK */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6 md:grid-cols-1 md:grid-rows-2">
       {[
  { src: "/banners/FB_IMG_1789476421923.jpg", alt: "Sub Event 1" },
  { src: "/banners/budharama-katlstad.jpg", alt: "Sub Event 2" },
].map((item) => (
  <div key={item.src} className="group relative overflow-hidden rounded-3xl bg-neutral-100 cursor-pointer h-40 sm:h-48 md:h-auto">
    <img
      src={item.src}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      alt={item.alt}
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
    <div className="absolute bottom-0 p-6 text-white"></div>
  </div>
))}







        </div>
      </div>
    </section>
  );
}