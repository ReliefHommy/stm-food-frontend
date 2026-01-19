// app/components/JumbotronsCTA.tsx
// Two-section CTA layout (Customers + Thai Grocery Owners)
// Uses Next.js <Image /> + Tailwind. Adjust image paths as needed.

import Image from "next/image"
import Link from "next/link"

type JumboSectionProps = {
  id: string
  imageSrc: string
  imageAlt: string
  eyebrow?: string
  headline: string
  body: string
  ctaHref: string
  ctaText: string
  variant?: "customer" | "owner"
  reverse?: boolean
}

function JumboSection({
  id,
  imageSrc,
  imageAlt,
  eyebrow,
  headline,
  body,
  ctaHref,
  ctaText,
  variant = "customer",
  reverse = false,
}: JumboSectionProps) {
  const isOwner = variant === "owner"

  return (
    <section id={id} className="w-full py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={[
            "grid items-center gap-8 md:gap-10",
            "md:grid-cols-2",
            reverse ? "md:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
            <div className="relative aspect-[16/11] w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={false}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text / CTA */}
          <div className="flex flex-col">
            {eyebrow ? (
              <p className="text-sm font-semibold tracking-wide text-slate-600">
                {eyebrow}
              </p>
            ) : null}

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {headline}
            </h2>

            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-slate-700 md:text-lg">
              {body}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={ctaHref}
                className={[
                  "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold",
                  "transition focus:outline-none focus:ring-2 focus:ring-offset-2",
                  isOwner
                    ? "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900"
                    : "bg-lime-600 text-white hover:bg-lime-700 focus:ring-lime-600",
                ].join(" ")}
              >
                {ctaText}
              </Link>

              {/* Optional secondary hint line (keeps UI calm) */}
              <span className="text-sm text-slate-500">
                {isOwner
                  ? "För butiker i Sverige & EU"
                  : "Sverige (fler länder snart)"}
              </span>
            </div>

            {/* Optional keyword row for SEO/UX (customer section only) */}
            {!isOwner ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {["#Thai livsmedel", "#Ingredienser", "#Butiker", "#Recept"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function JumbotronCTA() {
  return (
    <div className="w-full">
      {/* 1) Customer section */}
      <JumboSection
        id="thai-livsmedel"
        imageSrc="/banners/thai_jumbo.png" // <- put thai_jumbo.png in /public/images/
        imageAlt="Thai livsmedel - upptäck ingredienser och butiker"
        eyebrow="För kunder"
        headline="Thai livsmedel nära dig"
        body="Upptäck thailändska livsmedel, ingredienser och butiker i Sverige — samlade på ett ställe."
        ctaHref="/" // <- change to your route (e.g. /stores or /food/stores)
        ctaText="Se butiker nära mig"
        variant="customer"
      />

      {/* 2) Grocery owner section */}
      <JumboSection
        id="for-butiker"
        imageSrc="/banners/din_jumbo.png" // <- put din_jumbo.png in /public/images/
        imageAlt="För Thai grocery owners - syns online med innehåll"
        eyebrow="För butikägare"
        headline="Din Thai Livsmedel App"
        body={`Vi hjälper dig att berätta din historia —\nSkapa innehåll snabbare.\nLåt kunderna hitta din butik.`}
        ctaHref="/ga-med" // <- change to your route (e.g. /creators or /partners)
        ctaText="Gå med oss"
        variant="owner"
        reverse
      />
    </div>
  )
}
