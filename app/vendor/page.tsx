// app/vendor/page.tsx

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutButton from './components/LogoutButton';

export default async function VendorDashboard() {

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
  <>
    <section className="space-y-6">
        <p className="text-2xl font-bold">Welcome back- Shop no.{user.id}</p>
<h1 className="text-lg text-gray-500 font-semibold">Store no.{user.id}</h1>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm text-gray-400 font-semibold">Total Sales</h2>
        <p className="text-2xl font-bold">$10,000</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm text-gray-400 font-semibold">New Orders</h2>
        <p className="text-2xl font-bold">25</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm text-gray-400 font-semibold">Pending Shipments</h2>
        <p className="text-2xl font-bold">5</p>
      </div>
</div>
    </section>
  
  
    



    
  
  <div className="p-6">
     <div className="flex justify-between items-center mb-4">
       <h2 className="text-2xl font-bold">Welcome Store no.{user.id}:{user.email}</h2>

     </div>

     <p className="text-gray-600">User ID: {user.id}</p>
     <p className="text-gray-600">Partner: {user.is_partner ? 'Yes' : 'No'}</p>
     <p className="text-gray-600">Customer: {user.is_customer ? 'Yes' : 'No'}</p>
     
   </div><LogoutButton /></>
   
);

}