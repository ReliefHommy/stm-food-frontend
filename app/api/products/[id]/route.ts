// app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const DJANGO_BASE = process.env.DJANGO_BASE_URL || 'http://localhost:8000';
export const dynamic = 'force-dynamic';

async function authHeader(): Promise<Record<string, string>> {
  const store = await cookies();
  const token = store.get('access_token')?.value;
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
}

function pass(res: Response, body: any) {
  return new NextResponse(
    typeof body === 'string' ? body : JSON.stringify(body),
    { status: res.status, headers: { 'Content-Type': 'application/json' } }
  );
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const res = await fetch(`${DJANGO_BASE}/api/products/${params.id}/`, {
    headers: { ...(await authHeader()) },
    cache: 'no-store',
  });
  const data = await res.json().catch(() => ({}));
  return pass(res, data);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const headers = await authHeader();
  const ct = req.headers.get('content-type') || '';

  if (ct.includes('multipart/form-data')) {
    const form = await req.formData();
    const res = await fetch(`${DJANGO_BASE}/api/products/${params.id}/`, {
      method: 'PATCH',
      headers,            // DO NOT set Content-Type for FormData
      body: form as any,
      // @ts-ignore - Node fetch streaming quirk
      duplex: 'half',
    });
    const data = await res.json().catch(() => ({}));
    return pass(res, data);
  } else {
    const body = await req.text(); // forward raw JSON
    const res = await fetch(`${DJANGO_BASE}/api/products/${params.id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', ...headers } as HeadersInit,
      body,
    });
    const data = await res.json().catch(() => ({}));
    return pass(res, data);
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const headers = await authHeader();
  const ct = req.headers.get('content-type') || '';
  if (ct.includes('multipart/form-data')) {
    const form = await req.formData();
    const res = await fetch(`${DJANGO_BASE}/api/products/${params.id}/`, {
      method: 'PUT',
      headers,
      body: form as any,
      // @ts-ignore
      duplex: 'half',
    });
    const data = await res.json().catch(() => ({}));
    return pass(res, data);
  } else {
    const body = await req.text();
    const res = await fetch(`${DJANGO_BASE}/api/products/${params.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...headers },
      body,
    });
    const data = await res.json().catch(() => ({}));
    return pass(res, data);
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const res = await fetch(`${DJANGO_BASE}/api/products/${params.id}/`, {
    method: 'DELETE',
    headers: { ...(await authHeader()) },
  });
  return new NextResponse(null, { status: res.status });
}
