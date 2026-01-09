"use client";

import { useSearchParams } from "next/navigation";
import ShopNavbar from "../components/shop/ShopNavbar";

export default function ThankYouPage() {
  const params = useSearchParams();
  const orderId = params.get("order");
  console.log("🧾 Order ID from URL:", orderId);

  return (
      <><ShopNavbar /><main className="min-h-[70vh] flex items-center justify-center px-4 py-10">

          <div className="w-full max-w-xl text-center">
              {/* ✅ Icon */}
              <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                  <span className="text-3xl">✅</span>
              </div>

              {/* 📝 Title */}
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Order Successful!
              </h1>

              {/* 📦 Order Info */}
              <p className="text-gray-600 mb-6">
                  {orderId ? (
                      <>
                          Your order <span className="font-mono">{orderId}</span> is confirmed.
                      </>
                  ) : (
                      "Your order has been confirmed."
                  )}
                  <br />
                  We’ve sent you a confirmation email.
              </p>

              {/* 🔗 Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <button
                      onClick={() => window.location.href = "/shop"}
                      className="px-6 py-3 rounded-xl border text-sm hover:bg-gray-100 transition"
                  >
                      Continue Shopping
                  </button>
                  <button
                      onClick={() => window.location.href = "/orders"}
                      className="px-6 py-3 rounded-xl bg-black text-white text-sm hover:opacity-90 transition"
                  >
                      View My Orders
                  </button>
                  
  <button
    onClick={() => window.open(`/api/food/orders/${orderId}/receipt/`, "_blank")}
    className="px-6 py-3 rounded-xl border text-sm hover:bg-gray-100 transition"
  >
    Download Receipt (PDF)
  </button>

              
              
              
              </div>
          </div>
      </main></>
  );
}
