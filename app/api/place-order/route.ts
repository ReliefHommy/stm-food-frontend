// app/api/place-order/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;

  if (!token) {
    return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/food/orders/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(data, { status: res.status });
    
  }
  const orderId = data.order_id ?? data.id; 
  return NextResponse.json({ order_id: orderId });



  
}
