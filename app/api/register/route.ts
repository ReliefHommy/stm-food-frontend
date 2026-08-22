// app/api/register/route.ts
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
  const { email, password, name } = await req.json()

  if (!API_URL) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    )
  }

  const registerResponse = await fetch(`${API_URL}/api/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })

  const registerData = await readJsonSafe(registerResponse)

  if (!registerResponse.ok) {
    const message =
      typeof registerData === 'object' && registerData !== null
        ? (registerData as any).detail || (registerData as any).error || 'Registration failed'
        : 'Registration failed'

    console.error('Register backend error:', registerResponse.status, registerData)
    return NextResponse.json(
      { error: message, backend: registerData },
      { status: registerResponse.status }
    )
  }

  // Auto-login: registration succeeded, now get a real token pair with the
  // same credentials so the new customer lands already signed in.
  const tokenResponse = await fetch(`${API_URL}/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  const tokenData = await readJsonSafe(tokenResponse)

  if (!tokenResponse.ok) {
    console.error('Post-register login failed:', tokenResponse.status, tokenData)
    // Account was created successfully; only the auto-login step failed.
    return NextResponse.json({ success: true, autoLogin: false })
  }

  const accessToken = (tokenData as any)?.access
  if (!accessToken) {
    console.error('Post-register login response missing access token:', tokenData)
    return NextResponse.json({ success: true, autoLogin: false })
  }

  const res = NextResponse.json({ success: true, autoLogin: true })

  res.cookies.set('access_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60,
    path: '/',
  })

  return res
}
