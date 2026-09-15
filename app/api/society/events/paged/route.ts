import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const limit = searchParams.get("limit") || "12";
  const offset = searchParams.get("offset") || "0";
  const country_code = searchParams.get("country_code");
  const event_type = searchParams.get("event_type");
  const location_id = searchParams.get("location_id");
  const upcoming_only = searchParams.get("upcoming_only");
  const ids = searchParams.get("ids");

  // Build query string for backend
  const backendParams = new URLSearchParams();
  backendParams.set("limit", limit);
  backendParams.set("offset", offset);
  
  if (country_code) backendParams.set("country_code", country_code);
  if (event_type) backendParams.set("event_type", event_type);
  if (location_id) backendParams.set("location_id", location_id);
  if (upcoming_only) backendParams.set("upcoming_only", upcoming_only);
  if (ids) backendParams.set("ids", ids);

  const backendUrl = `https://society-somtam-backend.onrender.com/api/society/events/paged?${backendParams.toString()}`;

  try {
    const res = await fetch(backendUrl, { cache: "no-store" });
    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream fetch failed", status: res.status, body: text },
        { status: 502 }
      );
    }

    return new NextResponse(text, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Proxy error", message: String(err?.message || err) },
      { status: 502 }
    );
  }
}