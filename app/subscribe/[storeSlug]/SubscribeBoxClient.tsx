'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { getStripe } from '@/lib/stripe';

export type SubscriptionProduct = {
  id: number | string;
  title: string;
  price: number;
  image?: string;
  stock_quantity?: number;
  is_subscription_eligible?: boolean;
};

type Frequency = 'weekly' | 'biweekly' | 'monthly';

const FREQUENCY_OPTIONS: { value: Frequency; label: string }[] = [
  { value: 'weekly', label: 'Weekly' },
  { value: 'biweekly', label: 'Every 2 weeks' },
  { value: 'monthly', label: 'Monthly' },
];

type StartResponse = {
  client_secret: string;
  type: 'payment' | 'setup';
  subscription_id?: number | string;
  id?: number | string;
  subscription?: { id?: number | string };
};

export default function SubscribeBoxClient({
  storeSlug,
  storeId,
  storeName,
  initialProducts,
}: {
  storeSlug: string;
  storeId: number | string;
  storeName: string;
  initialProducts: SubscriptionProduct[];
}) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [frequency, setFrequency] = useState<Frequency>('weekly');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [startData, setStartData] = useState<StartResponse | null>(null);

  const eligibleProducts = useMemo(
    () => initialProducts.filter((p) => p.is_subscription_eligible !== false),
    [initialProducts]
  );

  const selectedItems = useMemo(
    () =>
      eligibleProducts
        .map((p) => ({ product: p, quantity: quantities[String(p.id)] ?? 0 }))
        .filter((entry) => entry.quantity > 0),
    [eligibleProducts, quantities]
  );

  const total = selectedItems.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0
  );

  function setQuantity(productId: number | string, quantity: number) {
    setQuantities((prev) => ({ ...prev, [String(productId)]: Math.max(0, quantity) }));
  }

  async function handleStart(e: React.FormEvent) {
    e.preventDefault();
    if (selectedItems.length === 0) {
      setError('Pick at least one product for your box.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/subscriptions/start/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          store: storeId,
          frequency,
          items: selectedItems.map(({ product, quantity }) => ({
            product: product.id,
            quantity,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.detail || data?.error || 'Could not start subscription.');
      }

      if (!data?.client_secret || !data?.type) {
        throw new Error('Unexpected response from server.');
      }

      setStartData(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setSubmitting(false);
    }
  }

  const subscriptionId = startData?.subscription_id ?? startData?.id ?? startData?.subscription?.id;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-1">Build your subscription box</h1>
      <p className="text-gray-600 mb-6">{storeName}</p>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {!startData ? (
        <form onSubmit={handleStart} className="space-y-6">
          <div className="space-y-3">
            {eligibleProducts.length === 0 && (
              <p className="text-gray-500">No subscription-eligible products for this store yet.</p>
            )}

            {eligibleProducts.map((product) => {
              const qty = quantities[String(product.id)] ?? 0;
              return (
                <div
                  key={product.id}
                  className="flex items-center gap-4 border rounded-lg p-3"
                >
                  <div className="relative w-16 h-16 shrink-0 rounded overflow-hidden bg-gray-50">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{product.title}</p>
                    <p className="text-sm text-green-700">{product.price} kr</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, qty - 1)}
                      className="w-8 h-8 rounded border text-gray-600 hover:bg-gray-100"
                      aria-label={`Decrease ${product.title}`}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={0}
                      value={qty}
                      onChange={(e) => setQuantity(product.id, Number(e.target.value))}
                      className="w-14 text-center border rounded px-1 py-1"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, qty + 1)}
                      className="w-8 h-8 rounded border text-gray-600 hover:bg-gray-100"
                      aria-label={`Increase ${product.title}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Delivery frequency</label>
            <div className="flex gap-3">
              {FREQUENCY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFrequency(opt.value)}
                  className={`px-4 py-2 rounded-full border text-sm ${
                    frequency === opt.value
                      ? 'bg-green-600 text-white border-green-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold text-lg">
              <span>Box total</span>
              <span>{total} kr</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              A flat shipping fee applies at checkout, charged in addition to the box total shown above.
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting || selectedItems.length === 0}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 disabled:opacity-60"
          >
            {submitting ? 'Setting up…' : 'Continue to payment'}
          </button>
        </form>
      ) : (
        <Elements stripe={getStripe()} options={{ clientSecret: startData.client_secret }}>
          <PaymentStep
            intentType={startData.type}
            subscriptionId={subscriptionId}
            storeSlug={storeSlug}
            total={total}
          />
        </Elements>
      )}
    </div>
  );
}

function PaymentStep({
  intentType,
  subscriptionId,
  storeSlug,
  total,
}: {
  intentType: 'payment' | 'setup';
  subscriptionId: number | string | undefined;
  storeSlug: string;
  total: number;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState('');

  async function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setConfirming(true);
    setError('');

    const returnUrl = `${window.location.origin}/subscribe/success?subscription=${encodeURIComponent(
      String(subscriptionId ?? '')
    )}&store=${encodeURIComponent(storeSlug)}`;

    const { error: confirmError } =
      intentType === 'payment'
        ? await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: returnUrl },
          })
        : await stripe.confirmSetup({
            elements,
            confirmParams: { return_url: returnUrl },
          });

    if (confirmError) {
      setError(confirmError.message || 'Payment confirmation failed.');
      setConfirming(false);
    }
    // On success, Stripe redirects the browser to returnUrl.
  }

  return (
    <form onSubmit={handleConfirm} className="space-y-6">
      <div className="flex justify-between font-semibold text-lg border-b pb-4">
        <span>Box total</span>
        <span>{total} kr</span>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <PaymentElement />

      <button
        type="submit"
        disabled={!stripe || !elements || confirming}
        className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 disabled:opacity-60"
      >
        {confirming ? 'Confirming…' : 'Confirm subscription'}
      </button>
    </form>
  );
}
