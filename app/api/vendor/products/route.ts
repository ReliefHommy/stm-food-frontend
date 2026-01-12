// app/api/vendor/products/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    
    // FIX: Use the variable name that matches your .env / Vercel settings
    const API_URL = process.env.NEXT_PUBLIC_API_BASE 

    if (!API_URL) {
      console.error("Critical Error: NEXT_PUBLIC_API_BASE is not defined in environment variables")
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Call the specific vendor endpoint we set up in Django
    const upstream = await fetch(`${API_URL}/api/food/products/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })

    // Read raw response so we can handle non-JSON bodies (Django may return an HTML error page)
    const raw = await upstream.text();
    let data: any = null;
    try { data = raw ? JSON.parse(raw) : null; } catch { data = { error: 'Backend did not return JSON', body: raw } }

    if (!upstream.ok) {
      console.error("Django Backend Error:", upstream.status, raw)

      // Helpful debug: if the backend returned 404, try again without the trailing slash
      if (upstream.status === 404) {
        try {
          const alt = await fetch(`${API_URL}/api/food/products`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
          })

          const altRaw = await alt.text();
          console.error('Retry without trailing slash:', alt.status, altRaw)

          if (alt.ok) {
            try { const altData = altRaw ? JSON.parse(altRaw) : null; return NextResponse.json(altData ?? {}, { status: 201 }) } catch { return NextResponse.json({ error: 'Backend returned non-JSON on retry', body: altRaw }, { status: alt.status }) }
          }
        } catch (e) {
          console.error('Retry failed:', e)
        }
      }

      return NextResponse.json(data, { status: upstream.status })
    }

    return NextResponse.json(data)

  } catch (err) {
    console.error("Route Handler Crash:", err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}