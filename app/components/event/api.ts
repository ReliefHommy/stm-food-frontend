// app/components/event/api.ts


export type PagedResponse<T> = {
  items: T[];
  count: number;
  limit: number;
  offset: number;
  next_offset: number | null;
};
export type EventsPagedResponse = {
  items: any[];
  count: number;
  limit: number;
  offset: number;
  next_offset: number | null;
};


export async function fetchEvents() {
  const res = await fetch("/api/society/events", { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

// ✅ NEW: paged endpoint
export async function fetchEventsPaged(params?: {
  limit?: number;
  offset?: number;
  country_code?: string;
  event_type?: string;
  location_id?: number;
  upcoming_only?: boolean;
  ids?: number[];
}) {
  const limit = params?.limit ?? 12;
  const offset = params?.offset ?? 0;

  const qs = new URLSearchParams();
  qs.set("limit", String(limit));
  qs.set("offset", String(offset));

  if (params?.country_code) qs.set("country_code", params.country_code);
  if (params?.event_type) qs.set("event_type", params.event_type);
  if (typeof params?.location_id === "number") qs.set("location_id", String(params.location_id));
  if (typeof params?.upcoming_only === "boolean") qs.set("upcoming_only", String(params.upcoming_only));
  if (Array.isArray(params?.ids) && params.ids.length > 0) {
    qs.set("ids", params.ids.join(","));
  }

  const res = await fetch(`/api/society/events/paged?${qs.toString()}`, { cache: "no-store" });
  if (!res.ok) {
    return { items: [], count: 0, limit, offset, next_offset: null } as PagedResponse<any>;
  }

  const data = await res.json();
  // safety fallback
  return {
    items: Array.isArray(data?.items) ? data.items : [],
    count: typeof data?.count === "number" ? data.count : 0,
    limit: typeof data?.limit === "number" ? data.limit : limit,
    offset: typeof data?.offset === "number" ? data.offset : offset,
    next_offset:
      typeof data?.next_offset === "number" ? data.next_offset : null,
  } as PagedResponse<any>;
}

export async function fetchLocations() {
  const res = await fetch("/api/society/locations", { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}