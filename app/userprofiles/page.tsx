// app/userprofile/page.tsx

import LogoutButton from './components/LogoutButton';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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
  <><div className="p-6">
     <div className="flex justify-between items-center mb-4">
       <h2 className="text-2xl font-bold">The Me, {user.email}</h2>

     </div>

     <p className="text-gray-600">User ID: {user.id}</p>
     <p className="text-gray-600">Partner: {user.is_partner ? 'Yes' : 'No'}</p>
     <p className="text-gray-600">Customer: {user.is_customer ? 'Yes' : 'No'}</p>
     
   </div><LogoutButton /></>
   
);

}

