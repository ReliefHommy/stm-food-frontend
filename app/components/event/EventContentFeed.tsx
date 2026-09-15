// app/components/event/EventContentFeed.tsx
"use client";


import React, { useEffect, useMemo, useRef, useState } from "react";
import { fetchEvents, fetchEventsPaged, fetchLocations } from "./api";
import EventCard from "./EventCard";
import { CoreCategoryKey, EventItem } from "./types";
import { mapEventsToEventItems } from "./mappers";

export default function EventContentFeed({
  title,
  subtitle,
  activeCategory = "ALL",
  previewMode = false,
  previewLimit,
  hideLoadMore = false,
}: {
  title: string;
  subtitle?: string;
  activeCategory?: CoreCategoryKey | "ALL";
  previewMode?: boolean;
  previewLimit?: number;
  hideLoadMore?: boolean;
}) {
  const [allItems, setAllItems] = useState<EventItem[]>([]);
  const [locationsData, setLocationsData] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);
  const loadingMoreRef = useRef(false);

  const [nextOffset, setNextOffset] = useState<number | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);


   const LIMIT = 12;

  useEffect(() => {
    let cancelled = false;

    async function initialLoad() {
      // 1) locations first (cache for mapping)
      const locs = await fetchLocations();
      if (cancelled) return;
      setLocationsData(locs);

      // 2) first page of events
      const page = await fetchEventsPaged({ limit: LIMIT, offset: 0 });
      if (cancelled) return;

      const mapped = mapEventsToEventItems(page.items, locs);
      setAllItems(mapped);
      setNextOffset(page.next_offset ?? null);
      setLoaded(true);

    }

    initialLoad();

    return () => {
      cancelled = true;
    };
  }, []);

  async function onLoadMore() {
    if (loadingMoreRef.current) return;      // ✅ hard lock
    if (nextOffset === null) return;

    loadingMoreRef.current = true;
    setLoadingMore(true);

    try {
      const page = await fetchEventsPaged({ limit: LIMIT, offset: nextOffset });

      if (!page.items || page.items.length === 0) {
        console.warn("No items returned from API");
        setNextOffset(null);
        return;
      }

      const mapped = mapEventsToEventItems(page.items, locationsData);

      setAllItems((prev) => {
        const seen = new Set(prev.map((x) => x.id));
        const merged = [...prev];
        for (const item of mapped) {
          if (!seen.has(item.id)) merged.push(item);
        }
        return merged;
      });

      setNextOffset(page.next_offset ?? null);
    } catch (error) {
      console.error("Error loading more events:", error);
      setLoadingMore(false);
    } finally {
      loadingMoreRef.current = false;
      setLoadingMore(false);
    }
  }

  const filteredItems = useMemo(() => {
    if (activeCategory === "ALL") return allItems;
    return allItems.filter((item) => item.coreCategory === activeCategory);
  }, [allItems, activeCategory]);

  const displayedItems = useMemo(() => {
    if (previewMode && previewLimit) {
      return filteredItems.slice(0, previewLimit);
    }
    return filteredItems;
  }, [filteredItems, previewMode, previewLimit]);

  const showEmptyState = loaded && displayedItems.length === 0;



 

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-extrabold tracking-tight text-[#422646] dark:text-[#422646] sm:text-2xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        ) : null}
      </div>

      <div className="max-w-[860px]">
        <div className="grid grid-cols-1 gap-6">
          {displayedItems.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>


        {showEmptyState ? (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            No events yet.
          </div>
        ) : null}

        {/* Load more */}
      {!hideLoadMore && loaded && nextOffset !== null ? (
          <div className="mt-6 flex justify-center">
            <button
            
              onClick={onLoadMore}
              disabled={loadingMore}
              className={[
                "rounded-2xl px-5 py-3 text-sm font-extrabold transition",
                loadingMore
                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                  : "bg-slate-900 text-white hover:bg-slate-800",
              ].join(" ")}
            >
              {loadingMore ? "Loading..." : "Load more"}
            </button>
          </div>
        ) : 
          // optional: “end” indicator
          loaded && allItems.length > 0 ?(
            <div className="mt-6 text-center text-xs text-slate-500">
              You’re all caught up.
            </div>
          ) : null
        }
      </div>
      <br></br>
    </section>

    
    
  )


}