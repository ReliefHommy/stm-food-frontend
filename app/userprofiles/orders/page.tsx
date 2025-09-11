// app/orders/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Order {
  id: number
  full_name: string
  placed_at: string | null
  total_amount: string
  delivery_date?: string
  status: string
  notes?: string
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/my-orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Needed for cookie-based JWT
        })

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()
        setOrders(data)
      } catch (err: any) {
        console.error('Error fetching orders:', err)
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

      {loading && <p>Loading your orders...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && orders.length === 0 && (
        <p>You haven't placed any orders yet.</p>
      )}

      {!loading && orders.length > 0 && (
        <div className="space-y-4">
{orders.map((order) => {
  console.log("🧾 placed_at raw:", order.placed_at); // <-- Add here
  return (
    <div
      key={order.id}
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-lg">Order #{order.id}</h2>
          <p className="text-sm text-gray-500">
            Name: {order.full_name}
          </p>
          <p className="text-sm text-gray-500">
            Placed on: {order.placed_at ? new Date(order.placed_at).toLocaleDateString() : 'N/A'}
          </p>
        </div>
        <div className="text-right">
          <p className="text-green-700 font-semibold text-lg">
            {order.total_amount} kr
          </p>
          <p className="text-sm text-gray-400 capitalize">
            Status: {order.status}
          </p>
        </div>
      </div>
      {order.delivery_date && (
        <p className="text-sm text-gray-600 mt-2">
          Delivery: {new Date(order.delivery_date).toLocaleDateString()}
        </p>
      )}
      {order.notes && (
        <p className="text-sm text-gray-600 mt-1 italic">
          Note: {order.notes}
        </p>
      )}
    </div>
  );
})}
        </div>
      )}
    </main>
  )
}
