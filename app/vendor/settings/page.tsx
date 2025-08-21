'use client';

import { useEffect, useState } from 'react';
import { apiFetch } from '@/lib/api';

type VendorProfile = {
  name: string;
  store_name: string;
  phone?: string;
  address?: string;
};

export default function SettingsPage() {
  const [profile, setProfile] = useState<VendorProfile | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    apiFetch<VendorProfile>('/api/vendor/profile/')
      .then(setProfile)
      .catch(() => setProfile({ name: '', store_name: '' }));
  }, []);

  async function save() {
    if (!profile) return;
    setSaving(true);
    try {
      await apiFetch('/api/vendor/profile/', {
        method: 'PUT',
        body: JSON.stringify(profile),
      });
      alert('Saved');
    } catch (e: any) {
      alert(e.message);
    } finally {
      setSaving(false);
    }
  }

  if (!profile) return <div>Loading…</div>;

  return (
    <section className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="space-y-4 bg-white p-4 rounded border">
        <Field label="Your Name">
          <input
            className="w-full rounded border px-3 py-2"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </Field>
        <Field label="Store Name">
          <input
            className="w-full rounded border px-3 py-2"
            value={profile.store_name}
            onChange={(e) => setProfile({ ...profile, store_name: e.target.value })}
          />
        </Field>
        <Field label="Phone">
          <input
            className="w-full rounded border px-3 py-2"
            value={profile.phone || ''}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </Field>
        <Field label="Address">
          <textarea
            className="w-full rounded border px-3 py-2"
            value={profile.address || ''}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
          />
        </Field>
        <div className="pt-2">
          <button
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-60"
            onClick={save}
            disabled={saving}
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm mb-1 text-gray-600">{label}</label>
      {children}
    </div>
  );
}
