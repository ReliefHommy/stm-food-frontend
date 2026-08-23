// app/api/my-orders/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { SESSION_EXPIRED_CODE } from '@/lib/session';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;

  if (!token) {
    return NextResponse.json({ error: SESSION_EXPIRED_CODE }, { status: 401 });
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE}/api/food/my-orders/`;

  try {
    const res = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      return NextResponse.json({ error: SESSION_EXPIRED_CODE }, { status: 401 });
    }

    const contentType = res.headers.get('content-type') || '';

    if (!res.ok) {
      const text = await res.text();
      console.error(`❌ Error response from ${apiUrl} (${res.status}):`, text.slice(0, 300));
      return NextResponse.json({ error: 'Backend error', status: res.status, raw: text }, { status: res.status });
    }

    if (!contentType.includes('application/json')) {
      const text = await res.text();
      console.error('⚠️ Expected JSON but got HTML:', text.slice(0, 300));
      return NextResponse.json({ error: 'Invalid response format', raw: text }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('🔥 Unexpected error:', error);
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}
