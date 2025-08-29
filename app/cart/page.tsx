'use client';


import { useCart } from '../context/CartContext';


export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-400">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="border-b pb-4">
                <div className="flex justify-between items-center">

                  <div>
                                      <img
   src={item.image}
    alt={item.title}
    className="w-16 h-16 object-cover rounded"

  />
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
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold text-right text-gray-400">Total: {total} kr</p>
          <button onClick={clearCart} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

