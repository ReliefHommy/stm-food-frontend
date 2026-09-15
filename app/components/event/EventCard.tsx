// app/components/event/EventCard.tsx
import React from "react";
import Image from "next/image";
import type { EventItem } from "./types";
import Link from "next/link";


export default function EventCard({ event }: { event: EventItem }) {
  const dateLabel = formatEventDate(event.startDateISO);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/events/${event.id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
      >
        <div className="flex min-h-[140px]">
          {/* Left image */}
          <div className="relative w-[140px] shrink-0 sm:w-[180px]">
            {event.imageUrl ? (
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 140px, 180px"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full bg-slate-100" />
            )}
            {/* subtle divider like screenshot */}
            <div className="absolute inset-y-0 right-0 w-px bg-black/10" />
          </div>

          {/* Right content (same layout vibe as screenshot, but keep bg-white) */}
          <div className="flex min-w-0 flex-1 flex-col justify-between bg-gradient-to-r from-slate-50 to-white p-4 sm:p-5">
            <div className="min-w-0">
             <h3 className="truncate text-base font-extrabold text-slate-600 sm:text-lg">
                {event.title}
              </h3>

              <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
                <CalendarIcon className="h-4 w-4 text-slate-500" />
                <span className="truncate">{dateLabel}</span>
              </div>

              {event.sub_title_thai ? (
                <p className="mt-3 line-clamp-2 text-sm text-slate-700">
                  {event.sub_title_thai}
                </p>
              ) : null}

                 <p className="mt-2 truncate text-xs text-slate-600"> <span className="font-extrabold">Organized by:</span>
             {event.organizer_name}
              </p>
            

            </div>

            {/* Bottom row: pills + CTA */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
        <Pill kind="locationName">
  <LocationIcon className="mr-1.5 h-4 w-4" />
  {event.locationName}
</Pill>

              <Pill kind="type">
                <GlobeIcon className="mr-1.5 h-4 w-4" />
                {event.country}
              </Pill>

              <span className="ml-auto inline-flex items-center gap-2 rounded-lg bg-[#d876ac] px-3 py-2 text-xs font-extrabold text-white shadow-sm transition group-hover:translate-x-0.5">
  <EyeIcon className="h-4 w-4" />
  View
</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

function Pill({
  kind,
  children,
}: {

 kind: "category" | "type" | "locationName";



  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center rounded-lg px-3 py-2 text-[11px] font-extrabold shadow-sm";
  const styles =
    kind === "category"
          ? "bg-gray-600 text-white"
      : "bg-white text-slate-800 ring-1 ring-slate-200";

  return <span className={`${base} ${styles}`}>{children}</span>;
}

function prettyCore(key: string) {
  return key
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function formatEventDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

/* tiny inline icons (no extra deps) */
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 3v2M17 3v2M4.5 8.5h15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 5h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 3) Replace TagIcon with LocationIcon
function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M2 12h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 2c3 3 4.5 6.5 4.5 10S15 19 12 22c-3-3-4.5-6.5-4.5-10S9 5 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}