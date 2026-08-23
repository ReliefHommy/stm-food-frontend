//app/login/login.tsx
'use client'
import Link from "next/link";

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    const message = new URLSearchParams(window.location.search).get('message')
    if (message) setNotice(message)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
    router.push('/stm-saas') 
      //router.push('/vendor') 
    } else {
      const data = await res.json()
      setError(data.error || 'Login failed')
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {notice && <p className="text-amber-600">{notice}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
        Log In
      </button>
       <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Back to STM Food
              </Link>
      </div>
      <p className="text-sm text-slate-600">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-semibold text-emerald-700 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  )
}
