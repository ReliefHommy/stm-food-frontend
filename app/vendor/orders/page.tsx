'use client';

import { useEffect, useState } from 'react';
import { apiFetch } from '@/lib/api';

type Order = {
  id: number | string;
  number: string;
  customer_name: string;
  total: number;
  status: string; // Pending, Paid, Shipped, Delivered
  created_at: string;
};

export default function OrdersPage() {
  const [list, setList] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<Order[]>('/api/vendor/orders/')
      .then(setList)
      .catch((err) => {
        console.error('Failed to load orders', err)
        setList([])
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      <div className="rounded border bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-3 py-2">Order #</th>
              <th className="px-3 py-2">Customer</th>
              <th className="px-3 py-2">Total</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {loading && (<tr><td className="px-3 py-4" colSpan={5}>Loading…</td></tr>)}
            {!loading && list.length === 0 && (<tr><td className="px-3 py-4 text-gray-500" colSpan={5}>No orders yet.</td></tr>)}
            {list.map(o => (
              <tr key={o.id} className="border-t">
                <td className="px-3 py-2">{o.number}</td>
                <td className="px-3 py-2">{o.customer_name}</td>
                <td className="px-3 py-2">{o.total} kr</td>
                <td className="px-3 py-2">{o.status}</td>
                <td className="px-3 py-2">{new Date(o.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
