// /app/api/login/route.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const response = await fetch(`${process.env.API_URL}/api/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,  // ✅ using email as username
      password: password,

      
    }
  ),
  })



  const data = await response.json()

  if (!response.ok) {
    console.error('❌ Django login error:', data)
    return NextResponse.json({ error: data.detail || JSON.stringify(data) || 'Login failed' }, { status: 401 })
  }

  // ✅ Correct cookie usage — no await here
  const cookieStore = await cookies()
  cookieStore.set({
    name: 'access_token',
    value: data.access,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60, // 1 hour
    path: '/',
  })

  return NextResponse.json({ success: true })
}

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('access_token')

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  return NextResponse.json({ authenticated: true })
}
