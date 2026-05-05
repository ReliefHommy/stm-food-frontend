//app/layout.tsx


import { CartProvider } from './context/CartContext';
import './globals.css';

export const metadata = {
  title: {
    default: 'Somtam Market | Fresh Food & Authentic Flavors',
    template: '%s | Somtam Market'
  },
  description: 'Explore the vibrant food marketplace at Somtam Market. Order fresh local dishes, browse vendor menus, and experience the best of Thai cuisine.',
  keywords: ['Somtam Market', 'Food Delivery', 'Thai Food', 'Online Marketplace', 'STM Food'],
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
 
      <body className="flex flex-col min-h-screen">
               <main className="flex-grow">

</main>

       <CartProvider>{children}</CartProvider>
       
        </body>
    </html>
  );
}








     

