'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SubscribeSuccessClient() {
  const params = useSearchParams();
  const subscriptionId = params.get('subscription');
  const redirectStatus = params.get('redirect_status');

  const [status, setStatus] = useState<'checking' | 'confirmed' | 'unconfirmed'>('checking');

  useEffect(() => {
    if (redirectStatus === 'failed' || redirectStatus === 'canceled') {
      setStatus('unconfirmed');
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch('/api/subscriptions/my/', { cache: 'no-store' });
        if (!res.ok) throw new Error();
        const data = await res.json();
        const subs = Array.isArray(data) ? data : Array.isArray(data?.results) ? data.results : [];
        const match = subscriptionId
          ? subs.find((s: any) => String(s.id) === String(subscriptionId))
          : subs[0];
        if (!cancelled) setStatus(match ? 'confirmed' : 'unconfirmed');
      } catch {
        if (!cancelled) setStatus('unconfirmed');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [subscriptionId, redirectStatus]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
          <span className="text-3xl">{status === 'unconfirmed' ? '⚠️' : '✅'}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {status === 'checking' && 'Confirming your subscription…'}
          {status === 'confirmed' && 'Subscription started!'}
          {status === 'unconfirmed' && 'We could not confirm your subscription'}
        </h1>

        <p className="text-gray-600 mb-6">
          {status === 'confirmed' &&
            (subscriptionId
              ? <>Subscription <span className="font-mono">{subscriptionId}</span> is active.</>
              : 'Your subscription is active.')}
          {status === 'unconfirmed' &&
            'Your payment may not have completed. Check your orders page or try again.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={() => (window.location.href = '/userprofiles/orders')}
            className="px-6 py-3 rounded-xl bg-black text-white text-sm hover:opacity-90 transition"
          >
            View My Orders
          </button>
          <button
            onClick={() => (window.location.href = '/shop')}
            className="px-6 py-3 rounded-xl border text-sm hover:bg-gray-100 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </main>
  );
}
