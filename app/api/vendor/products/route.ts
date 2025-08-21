// app/api/vendor/products/route.ts
import { NextResponse } from 'next/server';

const BASE = process.env.DJANGO_API_URL || 'http://localhost:8000';

export async function GET() {
  const res = await fetch(`${BASE}/api/vendor/products/`, {
    headers: { 'Content-Type': 'application/json' },
    // If using session cookies across domains you’ll need sameSite config; prefer token auth:
    // headers: { Authorization: `Token ${process.env.DJANGO_API_TOKEN}` }
  });
  const data = await res.json();
  if (!res.ok) return NextResponse.json({ error: data?.detail || 'Fetch error' }, { status: res.status });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const res = await fetch(`${BASE}/api/vendor/products/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // 'Authorization': `Token ${process.env.DJANGO_API_TOKEN}`,
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) return NextResponse.json({ error: data?.detail || 'Create error' }, { status: res.status });
  return NextResponse.json(data, { status: 201 });
}
