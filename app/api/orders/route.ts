import { cookies } from "next/headers";

// POST to /api/orders/
async function createOrder(orderData: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/food/orders/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

     Authorization: `Bearer ${(await cookies()).get('access_token')?.value}`,
    },
    body: JSON.stringify(orderData),
  });

  if (!res.ok) {
    throw new Error('Failed to place order');
  }

  return res.json();
}
