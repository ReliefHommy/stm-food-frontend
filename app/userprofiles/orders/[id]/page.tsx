// app/userprofiles/orders/[id]/page.tsx
import { notFound } from 'next/navigation'

export default async function OrderDetailPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-orders/${params.id}`, {
    



    cache: 'no-store',
  })


  if (res.status === 401) {
   return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600">Unauthorized</h1>
        <p className="text-gray-600 mt-2">You must be logged in to view this order.</p>
      </div>
    )
  }

  if (!res.ok) {
    return notFound()
  }

  const order = await res.json()

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Order #{order.id}</h1>
      <p className="mb-2">Full Name: {order.full_name}</p>
      <p className="mb-2">Phone: {order.phone}</p>
      <p className="mb-2">Address: {order.shipping_address}</p>
      <p className="mb-2">Delivery Date: {order.delivery_date}</p>
      <p className="mb-2">Total: {order.total_amount} kr</p>

      <h2 className="mt-6 text-xl font-semibold">Items</h2>
      <ul className="mt-2 space-y-2">
        {order.items.map((item: any, index: number) => (
          <li key={index} className="border p-2 rounded">
            🛒 Product ID: {item.product} — Quantity: {item.quantity} — Price: {item.price_at_purchase} kr
          </li>
        ))}
      </ul>
    </div>
  )
}


