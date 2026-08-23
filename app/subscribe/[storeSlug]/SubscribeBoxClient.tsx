'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { isSessionExpired, SESSION_EXPIRED_MESSAGE } from '@/lib/session';
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

type DeliveryAddress = {
  full_name: string;
  phone: string;
  shipping_address: string;
  city: string;
  postal_code: string;
  country: string;
};

const EMPTY_ADDRESS: DeliveryAddress = {
  full_name: '',
  phone: '',
  shipping_address: '',
  city: '',
  postal_code: '',
  country: 'SE',
};

// Stripe Tax needs a real ISO 3166-1 alpha-2 code, not free text (see PR #12's
// stale-shipping-address bug) -- a dropdown keeps that guaranteed rather than
// trusting a text input.
const COUNTRY_OPTIONS: { value: string; label: string }[] = [
  { value: 'SE', label: 'Sweden' },
  { value: 'NO', label: 'Norway' },
  { value: 'DK', label: 'Denmark' },
  { value: 'FI', label: 'Finland' },
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
  const router = useRouter();
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [frequency, setFrequency] = useState<Frequency>('weekly');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [startData, setStartData] = useState<StartResponse | null>(null);
  const [needsAddress, setNeedsAddress] = useState(false);
  const [address, setAddress] = useState<DeliveryAddress>(EMPTY_ADDRESS);

  const isAddressComplete = Object.values(address).every((v) => v.trim() !== '');

  function setAddressField(field: keyof DeliveryAddress, value: string) {
    setAddress((prev) => ({ ...prev, [field]: value }));
  }

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
    if (needsAddress && !isAddressComplete) {
      setError('Please fill in your delivery address.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/subscriptions/start/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          frequency,
          items: selectedItems.map(({ product, quantity }) => ({
            product_id: product.id,
            quantity,
          })),
          ...(needsAddress ? { delivery_address: address } : {}),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401 && isSessionExpired(data)) {
          router.push(`/login?message=${encodeURIComponent(SESSION_EXPIRED_MESSAGE)}`);
          return;
        }
        // First-time subscriber with no delivery address on file yet --
        // reveal the address form instead of erroring out, and let them
        // resubmit with it filled in.
        if (data?.code === 'delivery_address_required') {
          setNeedsAddress(true);
          setError('Please add your delivery address to continue.');
          return;
        }
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

          {needsAddress && (
            <div className="space-y-3 border-t pt-4">
              <label className="block text-sm font-medium">Delivery address</label>
              <input
                name="full_name"
                placeholder="Full name"
                value={address.full_name}
                onChange={(e) => setAddressField('full_name', e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <input
                name="phone"
                placeholder="Phone"
                value={address.phone}
                onChange={(e) => setAddressField('phone', e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <input
                name="shipping_address"
                placeholder="Street address"
                value={address.shipping_address}
                onChange={(e) => setAddressField('shipping_address', e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <div className="flex gap-3">
                <input
                  name="city"
                  placeholder="City"
                  value={address.city}
                  onChange={(e) => setAddressField('city', e.target.value)}
                  required
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  name="postal_code"
                  placeholder="Postal code"
                  value={address.postal_code}
                  onChange={(e) => setAddressField('postal_code', e.target.value)}
                  required
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <select
                name="country"
                value={address.country}
                onChange={(e) => setAddressField('country', e.target.value)}
                className="w-full p-2 border rounded"
              >
                {COUNTRY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}

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
            {submitting
              ? 'Setting up…'
              : needsAddress
              ? 'Save address and continue to payment'
              : 'Continue to payment'}
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
