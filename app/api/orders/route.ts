import { cookies } from "next/headers";

// POST to /api/orders/
export async function createOrder(orderData: any) {
  const res = await fetch(`${process.env.API_URL}/api/orders/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

     Authorization: `Bearer ${cookies().get('access_token')?.value}`,
    },
    body: JSON.stringify(orderData),
  });

  if (!res.ok) {
    throw new Error('Failed to place order');
  }

  return res.json();
}
