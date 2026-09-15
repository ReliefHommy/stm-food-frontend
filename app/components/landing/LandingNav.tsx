// app/components/landing/LandingNav.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, CloseIcon,  } from './icons';
import { User } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/explore', label: 'Explore' },

];

export default function LandingNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#422646]-50 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-charcoal">
          <Image src="/society_logo.png" alt="somtam_society" width={180} height={180} className="h-10 w-auto" />
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
                  active ? 'text-[#422646] font-medium' : 'text-charcoal-soft hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/login"
            className="font-body text-sm font-medium bg-[#422646] hover:bg-[#422646]-hover text-white px-5 py-2.5 rounded-full transition-colors"
          >
          <User />
        
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
                className={`font-body text-sm ${active ? 'text-[#422646] font-medium' : 'text-charcoal-soft'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/events"
            onClick={() => setOpen(false)}
            className="font-body text-sm font-medium bg-[#422646] text-white px-5 py-2.5 rounded-full text-center"
          >
            Explore
          </Link>
        </div>
      )}
    </header>
  );
}
