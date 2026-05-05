'use client';
import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 Later: send email to backend or Mailchimp
    alert(`Tack för din prenumeration: ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Prenumerera på vårt nyhetsbrev
        </h3>
        <p className="text-gray-600 mb-6">
          Få uppdateringar om nya produkter, recept och exklusiva erbjudanden.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Din e-postadress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Prenumerera
          </button>
        </form>
      </div>
    </section>
  );
}
