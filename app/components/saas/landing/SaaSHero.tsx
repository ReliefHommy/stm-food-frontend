export default function SaaSHero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex w-fit rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            เครื่องมือจัดการธุรกิจออนไลน์สำหรับผู้ประกอบกิจการไทยในยุโรป
          </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-indigo-900 sm:text-5xl">
            STM Food SaaS <span className=" text-indigo-400">  forThai  Vendors in EU</span>
          </h1>

          <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            เปลี่ยนงานที่วุ่นวายให้เป็นระบบอัตโนมัติด้วยเทคโนโลยี AI ที่ออกแบบมาเพื่อคุณ: จัดการออเดอร์ เมนู และคอนเทนต์โซเชียลได้ในที่เดียว ประหยัดเวลาและดูเป็นมืออาชีพ
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="stm-saas"
              className="inline-flex items-center justify-center rounded-full bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Try one month Free (€0)
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-indigo-400 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-50"
            >
              See Plans
            </a>
          </div>

          <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
            <li>• เปลี่ยนงานที่วุ่นวายให้เป็นระบบอัตโนมัติด้วยเทคโนโลยี AI ที่ออกแบบมาเพื่อคุณ</li>
            <li>• ร้านขายของ:รับออเดอร์, จัดส่ง, ระบบติดตาม , ถาม-ตอบ AIให้ข้อมูลลุกค้าอัตโนมัติ</li>
            <li>• ร้านอาหาร:จัดการออเดอร์ ,เมนู ,และคอนเทนต์โซเชียลได้ในที่เดียว ประหยัดเวลาและดูเป็นมืออาชีพ</li>
          </ul>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-900">ทำไมเราจึงต้องเปลี่ยนแปลงวิธีทำธุรกิจ</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            ใช้ประโยชน์จากเทคโนโลยี จัดการธุรกิจของท่านและการสื่อสารกับลูกค้าได้ในที่เดียว เพื่อให้ธุรกิจของคุณสามารถให้บริการได้เร็วยิ่งขึ้นและเพิ่มรายได้ที่มั่นคง
          </p>
        </div>
      </div>
    </section>
  );
}
