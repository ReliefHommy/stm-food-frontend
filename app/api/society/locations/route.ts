import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://society-somtam-backend.onrender.com/api/society/locations";

  try {
    const res = await fetch(url, { cache: "no-store" });
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