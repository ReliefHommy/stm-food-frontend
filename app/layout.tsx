
import { CartProvider } from './context/CartContext';
import './globals.css';

export const metadata = {
  title: 'STM Food RootLayout',
  description: 'Frontend for STM Food project',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
 
      <body>
        <CartProvider> 
          {children}
        </CartProvider>
       
        </body>
    </html>
  );
}








     

