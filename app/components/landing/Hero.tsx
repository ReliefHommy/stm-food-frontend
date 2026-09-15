
// app/components/Hero.tsx
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT: Image / Visual block */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white shadow-sm dark:border-gray-800/70 dark:bg-gray-900">
              {/* Image area */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
                {/* ✅ Replace src with your own image later (Canva export placed in /public) */}
                <Image
                  src="/banners/thai_event.png"
                  alt="Nok in House studio"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Soft overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
              </div>

              {/* Overlay brand mark (like the example) */}
              <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                <div className="grid place-items-center border border-white/70 bg-white/10 backdrop-blur-md rounded-2xl h-24 w-24 sm:h-28 sm:w-28">
                  <div className="text-left leading-[0.95] text-[#d876ac] dark:text-[#d876ac]">
                    <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      SOM
                    </div>
                  
                    <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      TAM
                    </div>
                  </div>
                </div>
              </div>

              {/* Small caption (optional) */}
              <div className="p-5 sm:p-6">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  5 เรื่องที่คนในชุมชนถามหาและช่วยกันบอกต่อ — รวมไว้ให้ในที่เดียว
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Text block */}
          <div className="order-1 lg:order-2">
            {/* Eyebrow */}
          

            {/* Headline */}
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#d876ac] dark:text-white sm:text-5xl lg:text-6xl">
            
              <span className="text-[#422646] dark:text-[#422646]">Where the Thai Food World</span>
              <br className="hidden sm:block" />
              Comes Together{" "}
              <span className="text-[#d876ac] dark:text-[#d876ac]">in Nordic</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              เราคือแหล่ง Update ข้อมูลงานวัดและปฏิทินจันทรคติ เราช่วยร้านขายสินค้าไทยที่ต้องการระบายสินค้า เราช่วยรวบรวมยอดสั่งซื้อสินค้าเพื่อให้ถึงเกณฑ์ขั้นต่ำของผู้นำเข้า เราช่วยให้ผู้ประกอบร้านอาหารที่ต้องการขายหรือเช่ากิจการเป็นไปโดยง่าย หรือแม้แต่คนปลูกผักหน้าร้อนที่มีผลผลิตสวนเกินกว่าที่ครัวเดียวจะบริโภคให้แก่คนต้องการในพื้นที่ไกล้เคียง ทั้งหมดนี้รวมอยู่ในที่เดียว คือ SOMTAM.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/events"
                className="inline-flex justify-center rounded-full bg-[#422646] px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-gray-400 transition"
              >
                Explore Events
              </a>

              <a
                href="/explore"
                className="inline-flex justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-800 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition"
              >
                Explore STM
              </a>
            </div>

            {/* Tiny trust line */}
         
          </div>
        </div>
      </div>
    </section>
  )
}
