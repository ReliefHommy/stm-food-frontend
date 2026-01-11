import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-orders/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const order = await res.json()
  return NextResponse.json(order)
}

