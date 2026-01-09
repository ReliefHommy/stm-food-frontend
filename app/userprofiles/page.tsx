// app/userprofile/page.tsx

import LogoutButton from './components/LogoutButton';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Button from '../components/homepage/Button';

export default async function UserProfile() {
   const token = (await cookies()).get('access_token');


  if (!token?.value) redirect('/login');


  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/me/`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
     cache: 'no-store',
    // If you need credentials, add: credentials: 'include'
  });

  if (!res.ok) redirect('/login');

  const user = await res.json();
  

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl text-gray-600 font-bold">My Account</h1>

      <div className="bg-white border rounded-lg p-4 shadow">
        <h2 className="text-xl font-semibold mb-2 text-gray-600">👤 Profile</h2>
        <p>Email: <span className="font-medium text-gray-600">{user.email}</span></p>
        <p>Account Type: Customer</p>
             <p className="text-gray-600">User ID: {user.id}</p>
     <p className="text-gray-600">Partner: {user.is_partner ? 'Yes' : 'No'}</p>
     <p className="text-gray-600">Customer: {user.is_customer ? 'Yes' : 'No'}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border rounded-lg p-4 shadow">
          <h3 className="text-lg font-semibold mb-1 text-gray-600">📦 My Orders</h3>
          <p className="text-sm text-muted-foreground mb-2 text-gray-600">View your purchase history.</p>
          <Button  className="w-full bg-green-700 hover:bg-green-50 text-black hover:text-green-700"  >  <a href="/userprofiles/orders">📦 My Orders</a></Button>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow">
          <h3 className="text-lg font-semibold mb-1 text-gray-600">❤️ Saved Products</h3>
          <p className="text-sm text-muted-foreground mb-2">Your wishlist items.</p>
          <Button  className="w-full bg-green-700 hover:bg-green-50 text-black hover:text-green-700" >Coming Soon</Button>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow col-span-full">
          <h3 className="text-lg font-semibold mb-1 text-gray-600">🚪 Become a Vendor</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Want to sell your own Thai products? Join our partner program.
          </p>
          <Button className="w-full bg-green-700 hover:bg-green-50 text-black hover:text-green-700" >
            <a href="/partner/subscribe">Become a Vendor</a>
          </Button>
        </div>
      </div>
    </div>
  )

}

