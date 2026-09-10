// app/components/landing/LandingNav.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, CloseIcon } from './icons';

const navLinks = [
  { href: '/explore', label: 'สำรวจ' },
  { href: '/shop', label: 'ร้านค้า' },
  { href: '/shop', label: 'สมัครกล่อง' },
  { href: '/login', label: 'เข้าสู่ระบบ' },
];

export default function LandingNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-charcoal">
          <Image src="/somtam_logo.png" alt="Som Tam Market" width={424} height={125} className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`font-body text-sm transition-colors ${
                  active ? 'text-terracotta font-medium' : 'text-charcoal-soft hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/shop"
            className="font-body text-sm font-medium bg-terracotta hover:bg-terracotta-hover text-white px-5 py-2.5 rounded-btn transition-colors"
          >
            ช้อปเลย
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-charcoal p-1"
          aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-cream px-4 pb-5 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`font-body text-sm ${active ? 'text-terracotta font-medium' : 'text-charcoal-soft'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="font-body text-sm font-medium bg-terracotta text-white px-5 py-2.5 rounded-btn text-center"
          >
            ช้อปเลย
          </Link>
        </div>
      )}
    </header>
  );
}
