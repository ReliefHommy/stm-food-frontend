// app/components/event/types.ts




export type CoreCategoryKey =
  | "TEMPLE_DAY_TRACKER"
  | "MARKET_FOOD_FESTIVALS"
  | "MUSIC_ENTERTAINMENT"
  | "COMMUNITY_EVENTS";

export type CoreCategory = {
  key: CoreCategoryKey;
  label: string;
};

export type SidebarNavKey = "HOME" | "SAVED" | "BOARD";
export type PageSidebarNavKey = "HOME" | "EVENTS" | "BLOGS" | "MARKETPLACE";

export type EventItem = {
  id: string;
  title: string;
  sub_title_thai?: string | null;
  organizer_name?: string | null;
  contact_info?: string | null;

  eventType: string;
  coreCategory: CoreCategoryKey;

  locationName: string;
  country: string;
  city?: string;

  startDateISO: string;
  createdAt: string;

  imageUrl?: string | null;
};

export type LocationDTO = {
  id?: number;
  name?: string;
  category?: string;
  address?: string;
  website?: string | null;
  country?: string;
  country_code?: string;
  city?: string;
  lat?: number | null;
  lng?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  cover_image?: string | null;
  [key: string]: unknown;
};

export type EventDTO = {
  id?: number | string;
  title?: string;
  name?: string;
  description?: string | null;
  description_thai?: string | null;
  event_type?: string;
  type?: string;
  category?: string;
  start_datetime?: string;
  start_date?: string;
  startDate?: string;
  end_datetime?: string | null;
  end_date?: string | null;
  created_at?: string;
  createdAt?: string;
  cover_image?: string | null;
  banner_image?: string | null;
  image_url?: string | null;
  image?: string | null;
  location_id?: number;
  location?: number | LocationDTO | null;
  location_name?: string | null;
  location_category?: string | null;
  city?: string | null;
  country?: string | null;
  country_code?: string | null;
  [key: string]: unknown;
};

// UI model (what MainContentFeed uses)
export type EventUI = {
  id: number;
  title: string;
  subtitle: string;
  categoryPill: string;
  typePill: string;
  dateLine: string;
  bannerImage?: string | null;
  href: string;
};