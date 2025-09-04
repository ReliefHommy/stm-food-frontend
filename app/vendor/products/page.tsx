//app/vendors/products/page.tsx

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
import { EditProductDialog } from '@/components/products/EditProductDialog'
import { EditProductDialogWrapper } from '@/components/products/EditProductDialogWrapper'
import { DeleteProductButton } from '@/components/products/DeleteProductButton'
//import { Pencil } from "lucide-react"


export default async function VendorProductsPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('access_token')

  if (!token?.value) {
    redirect('/login')
  }
  //const res = await fetch(`${process.env.API_URL}/api/products/`,
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    redirect('/dashboard') // or show fallback
  }

  const products = await res.json()

  function mutate(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-bold text-gray-600">In-use Vendor's Products</h1>
     <Link
          href="/vendor/products/new"
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Add Product
        </Link>
 
 
  
  
</div>


      <div className="rounded bg-gray overflow-hidden">
        

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

  />
  </TableCell>
                <TableCell className='text-gray-400 font-medium'>{product.title || '-'}</TableCell>
                <TableCell className='text-gray-400 font-medium'>{product.description ? product.description.slice(0, 60) + (product.description.length > 60 ? '...' : '')
    :  '-'}</TableCell>
                <TableCell className="text-right text-gray-400 font-medium">{product.price}</TableCell>
                <TableCell className="text-center space-x-2 text-gray-400 font-medium">
        <EditProductDialogWrapper product={product} />
        <DeleteProductButton productId={product.id} />



          
        </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
     
     
      </div>
      <Link
  href="/vendor/products/new"
  className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
>
  + Add Product
</Link>
    
      

    </section>
  )
}