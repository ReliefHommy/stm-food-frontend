// app/dashboard/page.tsx

import LogoutButton from './components/LogoutButton';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');

  if (!token?.value) redirect('/login');

  // Optional: call Django API to verify token or fetch vendor data
  const res = await fetch(`${process.env.API_URL}/api/my-profile/`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
     cache: 'no-store',
    // If you need credentials, add: credentials: 'include'
  });

  if (!res.ok) redirect('/login');

  const user = await res.json();
  

 return (
  <><div className="p-6">
     <div className="flex justify-between items-center mb-4">
       <h2 className="text-2xl font-bold">Welcome, {user.email}</h2>

     </div>

     <p className="text-gray-600">User ID: {user.id}</p>
     <p className="text-gray-600">Partner: {user.is_partner ? 'Yes' : 'No'}</p>
     <p className="text-gray-600">Customer: {user.is_customer ? 'Yes' : 'No'}</p>
     
   </div><LogoutButton /></>
   
);

}

