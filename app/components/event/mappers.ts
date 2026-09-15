// app/components/society/mappers.ts
import type { CoreCategoryKey, EventDTO, EventItem, LocationDTO } from "./types";

function pickString(...values: Array<unknown>): string {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

function normalize(value: string): string {
  return value.trim().toUpperCase();
}

function getLocationFromEvent(event: EventDTO, locationsById: Map<number, LocationDTO>) {
  if (typeof event.location === "object" && event.location !== null) return event.location as LocationDTO;
  if (typeof event.location_id === "number") return locationsById.get(event.location_id);
  if (typeof event.location === "number") return locationsById.get(event.location);
  return undefined;
}

function toCoreCategory(eventTypeRaw: string, locationCategoryRaw: string): CoreCategoryKey {
  const eventType = normalize(eventTypeRaw);
  const locCat = normalize(locationCategoryRaw);

  // Based on your Django models
  if (locCat === "TEMPLE" || eventType === "RELIGIOUS") return "TEMPLE_DAY_TRACKER";
  if (locCat === "MARKET" || locCat === "MARKET" || eventType === "Market/Food Festival") return "MARKET_FOOD_FESTIVALS";
  if (locCat === "EXHIBITION" || eventType === "CONCERT") return "COMMUNITY_EVENTS";
  if (locCat === "PARTNER" || locCat === "PARTNER" || eventType === "COMMUNITY") return "MARKET_FOOD_FESTIVALS";
  if (eventType === "CONCERT") return "MUSIC_ENTERTAINMENT"; return "COMMUNITY_EVENTS";
}

function getDateString(value: string) {
  return value || new Date().toISOString();
}

export function mapEventsToEventItems(events: EventDTO[], locations: LocationDTO[]): EventItem[] {
  const locationsById = new Map<number, LocationDTO>();
  for (const loc of locations) {
    if (typeof loc.id === "number") locationsById.set(loc.id, loc);
  }

  return events.map((event, index) => {
    const location = getLocationFromEvent(event, locationsById);

    const title = pickString(event.title, event.name, "Untitled event");

    const eventType = normalize(pickString(event.event_type, event.type, "COMMUNITY"));
    const locationCategory = normalize(
      pickString(event.location_category, (location as any)?.category, "")
    );

    const coreCategory = toCoreCategory(eventType, locationCategory);

    const locationName = pickString(event.location_name, location?.name, "Unknown location");

    const city = pickString(event.city, (location as any)?.city, "");
    const country = pickString(
      event.country_code,
      (location as any)?.country_code,
      event.country,
      (location as any)?.country,
      "Unknown"
    );

    const startDateISO = pickString(event.start_date, event.start_datetime, event.startDate);
    const createdAt = pickString(event.created_at, event.createdAt, startDateISO);

    const imageUrl = pickString(
      event.banner_image,
      event.cover_image,
      event.image_url,
      event.image
    );

    const id = String(event.id ?? index);

    return {
      id,
      title,
      sub_title_thai: (event as any).sub_title_thai ?? null,
      description_thai: (event as any).description_thai ?? null,
      organizer_name: (event as any).organizer_name ?? null,
      contact_info: (event as any).contact_info ?? null,
      eventType,
      coreCategory,
      locationName,
      country,
      city: city || undefined,
      startDateISO: getDateString(startDateISO),
      createdAt: getDateString(createdAt),
      imageUrl: imageUrl || null,
    };
  });
}