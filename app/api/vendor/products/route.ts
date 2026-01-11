// app/api/vendor/products/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const cookieStore = cookies()
  const token = (await cookieStore).get('access_token')?.value
  if (!token) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const body = await req.json()
  const API_URL = process.env.API_URL
  const upstream = await fetch(`${API_URL}/api/food/products/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })

  const data = await upstream.json().catch(() => ({ error: 'Upstream error' }))
  if (!upstream.ok) return new NextResponse(JSON.stringify(data), { status: upstream.status })

  return NextResponse.json(data)
}
