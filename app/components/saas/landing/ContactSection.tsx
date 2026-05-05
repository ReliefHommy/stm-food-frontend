'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  businessName: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  businessName: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('STM SaaS contact form:', form);
    setShowThanks(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Let&apos;s talk about your vendor growth plan
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Send us your details and we&apos;ll get back with a suitable setup for
            your business stage.
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{' '}
              <a href="admin@somtammarket.com" className="underline">
                admin@somtammarket.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                WhatsApp / LINE:
              </span>{' '}
              <a href="#" className="underline">
                Add support channel (placeholder)
              </a>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Book a call:</span>{' '}
              <a href="#" className="underline">
                Schedule meeting (placeholder)
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
              Name
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none ring-orange-500 focus:ring-2"
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none ring-orange-500 focus:ring-2"
                required
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-1 text-sm font-medium text-gray-700">
            Business name
            <input
              type="text"
              value={form.businessName}
              onChange={(e) => setForm({ ...form, businessName: e.target.value })}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none ring-orange-500 focus:ring-2"
              required
            />
          </label>

          <label className="mt-4 flex flex-col gap-1 text-sm font-medium text-gray-700">
            Message
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none ring-orange-500 focus:ring-2"
              required
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-indigo-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
          >
            Submit
          </button>

          {showThanks ? (
            <p className="mt-3 text-sm font-medium text-green-700">
              Thanks, your message has been received.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
