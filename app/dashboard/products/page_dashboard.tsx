// /app/dashboard/products/page.tsx

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} 
from "@/components/ui/table"


import Link from "next/link"
import { Button } from '@/components/ui/button'
import { Trash2 } from "lucide-react"
//import { Pencil } from "lucide-react"


export default async function ProductsPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('access_token')

  if (!token?.value) {
    redirect('/login')
  }

  const res = await fetch(`${process.env.API_URL}/api/products/`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    redirect('/dashboard') // or show fallback
  }

  const products = await res.json()

  return (
    <div className="p-4 space-y-6">
    
      
<div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-bold text-gray-600">My Products</h1>
  <Link href="/dashboard/products/new">
    <Button className="text-2xl font-bold text-gray-600" >Add Product</Button>
  </Link>
  
</div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='text-gray-600 font-bold'>Img</TableHead>
              <TableHead className='text-gray-600 font-bold'>Name</TableHead>
              <TableHead className='text-gray-600 font-bold'>Description</TableHead>
              <TableHead className="text-right text-gray-600 font-bold">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: any) => (
              <TableRow key={product.id}>
                <TableCell  className='text-gray-400 font-medium'><img
   src={product.image}
    alt={product.image}
    className="w-16 h-16 object-cover rounded"
  /></TableCell>
                <TableCell className='text-gray-400 font-medium'>{product.title || '-'}</TableCell>
                <TableCell className='text-gray-400 font-medium'>{product.description || '-'}</TableCell>
                <TableCell className="text-right text-gray-400 font-medium">{product.price}</TableCell>
                <TableCell className="text-center space-x-2 text-gray-400 font-medium">
          <Button variant="ghost" size="sm">Edit</Button>
          <Button variant="ghost" size="icon">
  <Trash2 className="h-4 w-4" />
</Button>

          
        </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
