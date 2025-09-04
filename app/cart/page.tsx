'use client';


import ShopNavbar from '../components/shop/ShopNavbar';
//import router from 'next/router';
import { useCart } from '../context/CartContext';
import { useRouter } from "next/navigation";


export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const router = useRouter();

  return (
      <><ShopNavbar /><div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-4 text-gray-400">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>

          {/* Product list */}




          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="border-b pb-4">
                <div className="flex justify-between items-center">

                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded" />
                    <p className="font-bold text-gray-200">{item.title}</p>
                    <p className="text-gray-400">{item.price} kr × {item.quantity}</p>
                  </div>
                  <div className="flex gap-2 text-gray-400">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>🗑</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Footer actions */}
           {/* 🔗 Navigation Buttons */}

          <p className="mt-4 font-bold text-right text-gray-400">Total: {total} kr</p>
          <div className="flex gap-4">
            <button onClick={clearCart} className="px-6 py-3 rounded-xl border text-sm hover:bg-gray-100 transition">
              Clear Cart
            </button>
            <button
              onClick={() => router.push("/checkout")}
              className="px-6 py-3 rounded-xl bg-black text-white text-sm hover:opacity-90 transition"
            >
              Proceed to Checkout
            </button>
          </div>

        </>
      )}
    </div></>
  );
}

