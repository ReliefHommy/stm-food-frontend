import Link from 'next/link';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function SaaSFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-gray-700 transition hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/privacy"
            className="font-medium text-gray-700 transition hover:text-gray-900"
          >
            Privacy
          </Link>
          <a href="#" className="font-medium text-gray-700 transition hover:text-gray-900">
            Terms
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} STM Food SaaS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
