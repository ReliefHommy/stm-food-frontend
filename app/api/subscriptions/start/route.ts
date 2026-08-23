// app/api/subscriptions/start/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { SESSION_EXPIRED_CODE } from '@/lib/session';

export async function POST(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;

  if (!token) {
    return NextResponse.json({ error: SESSION_EXPIRED_CODE }, { status: 401 });
  }

  const body = await req.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/subscriptions/start/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    return NextResponse.json({ error: SESSION_EXPIRED_CODE }, { status: 401 });
  }

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(data, { status: res.status });
  }

  return NextResponse.json(data);
}
