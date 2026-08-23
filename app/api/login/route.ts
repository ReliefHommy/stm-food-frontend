// app/api/login/route.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const API_URL =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, '') ||
  'https://api.somtammarket.com'

async function readJsonSafe(res: Response) {
  const text = await res.text()
  try {
    return text ? JSON.parse(text) : null
  } catch {
    return { raw: text }
  }
}

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!API_URL) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    )
  }

  const response = await fetch(`${API_URL}/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const data = await readJsonSafe(response)

  if (!response.ok) {
    const message =
      typeof data === 'object' && data !== null
        ? (data as any).detail || (data as any).error || 'Invalid credentials'
        : 'Invalid credentials'

    console.error('Login backend error:', response.status, data)
    return NextResponse.json(
      { error: message, backend: data },
      { status: response.status }
    )
  }

  const accessToken = (data as any)?.access
  if (!accessToken) {
    console.error('Login response missing access token:', data)
    return NextResponse.json(
      { error: 'Login response missing access token', backend: data },
      { status: 502 }
    )
  }

  // Fetch the profile so the client can route customers to /shop and
  // vendor/staff accounts to /stm-saas, instead of sending everyone to the
  // vendor dashboard.
  let isCustomer = false
  try {
    const profileResponse = await fetch(`${API_URL}/api/me/`, {
      headers: { Authorization: `Bearer ${accessToken}`, Accept: 'application/json' },
    })
    if (profileResponse.ok) {
      const profileData = await readJsonSafe(profileResponse)
      isCustomer = Boolean((profileData as any)?.is_customer)
    }
  } catch (err) {
    console.error('Failed to fetch profile after login:', err)
  }

  const res = NextResponse.json({ success: true, isCustomer })

  res.cookies.set('access_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 8,
    path: '/',
  })

  return res
}

export async function GET() {
  const cookieStore = cookies()
  const token = (await cookieStore).get('access_token')

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  return NextResponse.json({ authenticated: true })
}
