// app/userprofiles/subscription/page.tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isSessionExpired, SESSION_EXPIRED_MESSAGE } from '@/lib/session'

type SubscriptionStatus = 'incomplete' | 'active' | 'past_due' | 'paused' | 'canceled'
type Frequency = 'weekly' | 'biweekly' | 'monthly'

type SubscriptionItem = {
  product_id: number
  title: string
  quantity: number
  price: number
}

type Subscription = {
  id: number
  status: SubscriptionStatus
  frequency: Frequency
  next_delivery_date: string | null
  current_period_end: string | null
  partner_store_name: string
  box_total: number
  items: SubscriptionItem[]
}

type EligibleProduct = {
  id: number
  title: string
  price: number
  image?: string
  stock_quantity?: number
  is_subscription_eligible?: boolean
  partner_store: number
}

const STATUS_LABELS: Record<SubscriptionStatus, string> = {
  incomplete: 'Setting up',
  active: 'Active',
  past_due: 'Payment past due',
  paused: 'Paused',
  canceled: 'Canceled',
}

const FREQUENCY_LABELS: Record<Frequency, string> = {
  weekly: 'Weekly',
  biweekly: 'Every 2 weeks',
  monthly: 'Monthly',
}

const PAUSABLE_STATUSES: SubscriptionStatus[] = ['active', 'past_due']
const MANAGEABLE_STATUSES: SubscriptionStatus[] = ['active', 'past_due', 'paused']

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || 'https://api.somtammarket.com').replace(/\/+$/, '')

function formatDate(value: string | null): string {
  if (!value) return '—'
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? value : d.toLocaleDateString()
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function ManageSubscriptionPage() {
  const router = useRouter()

  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const [storeProducts, setStoreProducts] = useState<EligibleProduct[] | null>(null)

  const [editing, setEditing] = useState(false)
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [saving, setSaving] = useState(false)

  const [actionInFlight, setActionInFlight] = useState<'pause' | 'resume' | 'cancel' | null>(null)

  function handleSessionExpired() {
    router.push(`/login?message=${encodeURIComponent(SESSION_EXPIRED_MESSAGE)}`)
  }

  async function fetchSubscription(): Promise<Subscription | null | 'expired'> {
    const res = await fetch('/api/subscriptions/my/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    const data = await res.json().catch(() => null)

    if (res.status === 401 && isSessionExpired(data)) {
      return 'expired'
    }
    if (res.status === 404) {
      return null
    }
    if (!res.ok) {
      throw new Error(data?.detail || 'Could not load your subscription.')
    }
    return data as Subscription
  }

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const result = await fetchSubscription()
        if (cancelled) return
        if (result === 'expired') {
          handleSessionExpired()
          return
        }
        if (result === null) {
          setNotFound(true)
        } else {
          setSubscription(result)
        }
      } catch (err: any) {
        if (!cancelled) setError(err.message || 'Something went wrong.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // The store this subscription belongs to isn't exposed directly by
  // GET /my/ (only partner_store_name) -- derive the store id by matching
  // one of the subscription's own product_ids against the full eligible
  // product catalog, then scope the editor to that store's products.
  useEffect(() => {
    if (!subscription || subscription.items.length === 0) return
    let cancelled = false

    async function loadStoreProducts() {
      try {
        const res = await fetch(`${API_BASE}/api/food/products/?is_subscription_eligible=true`, {
          cache: 'no-store',
        })
        if (!res.ok) return
        const data = await res.json()
        const all: EligibleProduct[] = Array.isArray(data) ? data : Array.isArray(data?.results) ? data.results : []

        const knownProductIds = new Set(subscription!.items.map((i) => i.product_id))
        const anchor = all.find((p) => knownProductIds.has(p.id))
        if (!anchor || cancelled) return

        setStoreProducts(all.filter((p) => p.partner_store === anchor.partner_store))
      } catch (err) {
        console.error('Failed to load store products for editing', err)
      }
    }

    loadStoreProducts()
    return () => {
      cancelled = true
    }
  }, [subscription])

  function startEditing() {
    if (!subscription) return
    const initial: Record<string, number> = {}
    for (const item of subscription.items) {
      initial[String(item.product_id)] = item.quantity
    }
    setQuantities(initial)
    setEditing(true)
    setError('')
  }

  function setQuantity(productId: number, quantity: number) {
    setQuantities((prev) => ({ ...prev, [String(productId)]: Math.max(0, quantity) }))
  }

  const editedItems = useMemo(
    () => Object.entries(quantities).filter(([, qty]) => qty > 0),
    [quantities]
  )

  async function handleSaveItems() {
    if (editedItems.length === 0) {
      setError('Pick at least one product for your box.');
      return
    }
    setSaving(true)
    setError('')

    try {
      const res = await fetch('/api/subscriptions/items/', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: editedItems.map(([productId, quantity]) => ({
            product_id: Number(productId),
            quantity,
          })),
        }),
      })
      const data = await res.json().catch(() => null)

      if (res.status === 401 && isSessionExpired(data)) {
        handleSessionExpired()
        return
      }
      if (!res.ok) {
        throw new Error(data?.detail || 'Could not update your box.')
      }

      setSubscription((prev) => (prev ? { ...prev, box_total: data.box_total, items: data.items } : prev))
      setEditing(false)
      setNotice('Your box has been updated.')
    } catch (err: any) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setSaving(false)
    }
  }

  // Pause/resume flip Django's status only once the resulting Stripe webhook
  // lands -- the POST response itself carries no updated status. Poll GET
  // /my/ for a short while afterward rather than assuming success.
  async function pollForStatus(expected: (s: SubscriptionStatus) => boolean, attempts = 8, intervalMs = 1500) {
    for (let i = 0; i < attempts; i++) {
      await wait(intervalMs)
      const result = await fetchSubscription()
      if (result === 'expired') {
        handleSessionExpired()
        return
      }
      if (result && expected(result.status)) {
        setSubscription(result)
        return
      }
      if (result) setSubscription(result)
    }
  }

  async function postAction(path: 'pause' | 'resume' | 'cancel') {
    setActionInFlight(path)
    setError('')
    setNotice('')

    try {
      const res = await fetch(`/api/subscriptions/${path}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })
      const data = await res.json().catch(() => null)

      if (res.status === 401 && isSessionExpired(data)) {
        handleSessionExpired()
        return
      }
      if (!res.ok) {
        throw new Error(data?.detail || `Could not ${path} your subscription.`)
      }

      if (path === 'pause') {
        setNotice('Pausing your subscription…')
        await pollForStatus((s) => s === 'paused')
        setNotice('Your subscription is paused. No charge will occur while paused.')
      } else if (path === 'resume') {
        setNotice('Resuming your subscription…')
        await pollForStatus((s) => s !== 'paused')
        setNotice('Your subscription is active again.')
      } else {
        // Cancellation intentionally leaves Django's status untouched until
        // the current (already-paid-for) period actually ends.
        setNotice(data?.detail || 'Your subscription will cancel at the end of the current period.')
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setActionInFlight(null)
    }
  }

  function handleCancel() {
    if (!window.confirm('Cancel your subscription? It will stay active until the end of the current billing period.')) {
      return
    }
    postAction('cancel')
  }

  if (loading) {
    return <div className="max-w-3xl mx-auto p-6 text-gray-600">Loading your subscription…</div>
  }

  if (notFound) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">My Subscription</h1>
        <p className="text-gray-600 mb-4">You don&apos;t have a subscription yet.</p>
        <Link href="/shop" className="text-green-700 font-semibold hover:underline">
          Browse stores to start one
        </Link>
      </div>
    )
  }

  if (!subscription) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <p className="text-red-500">{error || 'Could not load your subscription.'}</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-1">My Subscription</h1>
        <p className="text-gray-600">{subscription.partner_store_name}</p>
      </div>

      {notice && <p className="text-green-700 bg-green-50 border border-green-200 rounded p-3">{notice}</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="border rounded-lg p-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Status</span>
          <span className="font-semibold">{STATUS_LABELS[subscription.status]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Frequency</span>
          <span className="font-semibold">{FREQUENCY_LABELS[subscription.frequency]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Next delivery</span>
          <span className="font-semibold">{formatDate(subscription.next_delivery_date)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Next charge</span>
          <span className="font-semibold">{formatDate(subscription.current_period_end)}</span>
        </div>
        <p className="text-xs text-gray-400">
          Next delivery and next charge can drift apart -- pauses, failed-payment retries, and box
          edits shift the billing date without moving the delivery date, and vice versa.
        </p>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-lg">Your box</h2>
          {!editing && MANAGEABLE_STATUSES.includes(subscription.status) && (
            <button
              onClick={startEditing}
              className="text-sm text-green-700 font-semibold hover:underline"
            >
              Edit box
            </button>
          )}
        </div>

        {!editing ? (
          <>
            <ul className="divide-y">
              {subscription.items.map((item) => (
                <li key={item.product_id} className="flex justify-between py-2">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>{item.price * item.quantity} kr</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-semibold text-lg border-t pt-3 mt-1">
              <span>Box total</span>
              <span>{subscription.box_total} kr</span>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {storeProducts === null && (
              <p className="text-sm text-gray-500">Loading products…</p>
            )}
            {storeProducts?.map((product) => {
              const qty = quantities[String(product.id)] ?? 0
              return (
                <div key={product.id} className="flex items-center gap-4 border rounded-lg p-3">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{product.title}</p>
                    <p className="text-sm text-green-700">{product.price} kr</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, qty - 1)}
                      className="w-8 h-8 rounded border text-gray-600 hover:bg-gray-100"
                      aria-label={`Decrease ${product.title}`}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={0}
                      value={qty}
                      onChange={(e) => setQuantity(product.id, Number(e.target.value))}
                      className="w-14 text-center border rounded px-1 py-1"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, qty + 1)}
                      className="w-8 h-8 rounded border text-gray-600 hover:bg-gray-100"
                      aria-label={`Increase ${product.title}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            })}

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSaveItems}
                disabled={saving}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-60"
              >
                {saving ? 'Saving…' : 'Save changes'}
              </button>
              <button
                onClick={() => setEditing(false)}
                disabled={saving}
                className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border rounded-lg p-4 flex flex-wrap gap-3">
        {PAUSABLE_STATUSES.includes(subscription.status) && (
          <button
            onClick={() => postAction('pause')}
            disabled={actionInFlight !== null}
            className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-50 disabled:opacity-60"
          >
            {actionInFlight === 'pause' ? 'Pausing…' : 'Pause'}
          </button>
        )}
        {subscription.status === 'paused' && (
          <button
            onClick={() => postAction('resume')}
            disabled={actionInFlight !== null}
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
          >
            {actionInFlight === 'resume' ? 'Resuming…' : 'Resume'}
          </button>
        )}
        {MANAGEABLE_STATUSES.includes(subscription.status) && (
          <button
            onClick={handleCancel}
            disabled={actionInFlight !== null}
            className="px-4 py-2 rounded border border-red-300 text-red-600 hover:bg-red-50 disabled:opacity-60"
          >
            {actionInFlight === 'cancel' ? 'Canceling…' : 'Cancel subscription'}
          </button>
        )}
      </div>
    </div>
  )
}
