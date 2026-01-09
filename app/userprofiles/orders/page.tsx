// app/userprofiles/orders/page.tsx
'use client'

import { ReactNode, useEffect, useState } from 'react'
import { CalendarCheck, Package, Truck, ChevronDown, ChevronUp } from 'lucide-react'


interface Order {
  id: number
  full_name: string
  delivery_date: string
  total_amount: string
  status: string
  placed_at: string
  items: Array<{
    id: number
    product_title: string
    quantity: number
    price: string
  }>
}

export default function UserOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [expandedOrderId, setExpandedOrderId] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false); // ✅ Add this line

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch('/api/my-orders/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      if (res.ok) {
        const data = await res.json()
        setOrders(data)
      } else {
        console.error('Failed to fetch orders')
      }
    }

    fetchOrders()
  }, [])

  const toggleOrder = (id: number) => {
    setExpandedOrderId(expandedOrderId === id ? null : id)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-800 mb-6">📦 My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const isOpen = expandedOrderId === order.id
            const totalQuantity = order.items.reduce((sum, item) => sum + item.quantity, 0)
            function setOpen(arg0: boolean): void {
              throw new Error('Function not implemented.')
            }

            return (

            
              
              <div 
              
                key={order.id}
                className="border rounded-lg p-4 hover:shadow transition"
              >
                {/* Summary Header */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleOrder(order.id)}
                >
                  <div>
                    <p className="text-lg font-semibold text-green-900">
                      Order ID #{new Date(order.placed_at).toLocaleDateString()}-00{order.id}
                    </p>
                    <p className="text-sm text-gray-500">By {order.full_name}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-lg font-semibold text-green-900">{order.total_amount} kr</p>
                    <p className="text-sm text-gray-500">{new Date(order.placed_at).toLocaleDateString()}</p>


                     <button
    onClick={() =>  toggleOrder(order.id)}
    className="text-gray-600 hover:text-green-600 transition-all text-xs flex items-center gap-1"
  >
    {isOpen ? (
      <>
        Hide Details <ChevronUp className="w-4 h-4" />
      </>
    ) : (
      <>
        Show Details <ChevronDown className="w-4 h-4" />
      </>
    )}
  </button>

                  </div>
                </div>

                {/* Expandable Details */}
                {isOpen && (
                  <div className="mt-6 space-y-4 text-sm text-gray-700">
                    <div className="flex flex-wrap gap-4 items-center">
                      <CalendarCheck className="w-4 h-4 text-green-600" />
                      Delivery: {new Date(order.delivery_date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-green-600" />
                     <span>Status: <span className="text-xs font-bold text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full">{order.status}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-green-600" />
                      Items:
                    </div>
                            <ul className="mt-2 space-y-1">
     <div className="overflow-x-auto mt-4">
  <table className="min-w-full text-sm text-left text-gray-800 border rounded-lg overflow-hidden">
    <thead className="bg-green-100 text-gray-700 uppercase text-xs">
      <tr>
        <th className="px-4 py-2">ID</th>
         <th className="px-4 py-2">Title</th>
        <th className="px-4 py-2 text-right">Quantity</th>
        <th className="px-4 py-2 text-right">Price (kr)</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-green-100">
      {order.items.map((item: any) =>  (
        <tr key={item.id} className="border-t border-green-200">
           <td className="px-4 py-2">{item.id}</td>
           <td className="px-4 py-2">{item.product_title}</td>
           <td className="px-4 py-2 text-right">{item.quantity}</td>
           <td className="px-4 py-2 text-right">{parseFloat(item.price_at_purchase).toFixed(2)}</td>
         </tr>
         
           
        
        
      ))}
      <tr className="border-t border-green-200">
        <td className="px-4 py-2"></td>
        <td className="px-4 py-2">moms 25%</td>
        <td className="px-4 py-2 text-right"></td>
        <td className="px-4 py-2 text-right">{(parseFloat(order.total_amount) * 0.25).toFixed(2)}</td>
             
           </tr>
      <tr className="bg-green-100 font-bold text-green-800">
        <td className="px-4 py-2">Total</td>
        <td className="px-4 py-2"></td>
        <td className="px-4 py-2 text-right">{order.items.reduce((sum, item) => sum + item.quantity, 0)}</td>
        <td className="px-4 py-2 text-right">{parseFloat(order.total_amount).toFixed(2)}</td>
      </tr>
    </tbody>
  </table><br />
  <button
  onClick={() => window.print()}
  className="mt-4 bg-green-700 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
>
  🖨️ Print Receipt
</button>
</div>


      </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
