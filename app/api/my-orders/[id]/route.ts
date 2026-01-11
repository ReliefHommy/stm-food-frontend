// app/api/my-orders/[id]/route.ts
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ??
  "https://stm-food-backend-production.up.railway.app"

const TOKEN_COOKIE = process.env.NEXT_PUBLIC_STM_TOKEN_COOKIE ?? "access_token"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const token = (await cookies()).get(TOKEN_COOKIE)?.value
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const res = await fetch(`${API_BASE}/api/my-orders/${id}/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    cache: "no-store",
  })

  const text = await res.text()
  let data: any = null
  try {
    data = text ? JSON.parse(text) : null
  } catch {
    data = { raw: text }
  }

  if (!res.ok) {
    return NextResponse.json(
      { error: data?.detail ?? "Fetch error", data },
      { status: res.status }
    )
  }

  return NextResponse.json(data)
}




