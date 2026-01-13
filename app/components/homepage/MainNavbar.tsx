'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, BookOpen, Utensils, Search, Home, User, ChevronDown } from 'lucide-react';

export default function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Thaishops', href: '/', icon: <Home size={18} /> },
    { name: 'Recipes', href: '/', icon: <BookOpen size={18} /> },
    { name: 'Restaurangs', href: '/', icon: <Utensils size={18} /> },
  ];

  const linkClass = (href: string) =>
    `flex items-center gap-1 hover:text-green-600 transition ${
      pathname === href ? 'text-green-600 font-semibold' : 'text-gray-700'
    }`;

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* ---------------- 1️⃣ Top Partner Invitation Bar ---------------- */}
      {/* Desktop */}
      <div className="hidden md:flex justify-center items-center bg-orange-400 text-gray-900 text-sm py-2 font-medium">
        <p>
          🌿 Are you a Thai shop or restaurant owner? Join STM Marketplace and open your <span className="font-semibold">Partner Store</span> today! &nbsp;
          <Link href="/" className="underline hover:text-green-400">
            Become a Partner
          </Link>
        </p>
      </div>

      {/* Mobile Collapsed */}
      <div className="md:hidden bg-orange-400 text-gray-900 text-sm font-semibold text-center py-2">
        <Link href="/" className="block hover:text-green-700">
          🌿 Become an STM Partner Store →
        </Link>
      </div>

      {/* ---------------- 2️⃣ Utility Bar ---------------- */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#0c1321] text-gray-300 text-sm border-b border-gray-700">
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-yellow-400">FAQ</Link>
          <Link href="#" className="hover:text-yellow-400">My Account</Link>
          <Link href="#" className="hover:text-yellow-400">About Us</Link>
          <Link href="#" className="hover:text-yellow-400">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-yellow-400">Order Tracking</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
            <span>English</span>
            <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
            <span>SEK</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* ---------------- 3️⃣ Main Navigation Bar ---------------- */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/STM_logo.png"
              alt="Somtam Marketplace"
              width={172}
              height={35}
              priority
            />
          </Link>

          {/* Center: Search bar */}
          <div className="relative hidden md:block w-1/3">
            <div className="flex items-center bg-white rounded-md overflow-hidden border border-gray-200">
              <select className="text-gray-600 text-sm px-3 py-2 outline-none border-r border-gray-200">
                <option value="all">All</option>
                <option value="Fresh Produce">Fresh Produce</option>
                <option value="Rice & Grains">Rice & Grains</option>
                <option value="Canned & Preserved Foods">Canned & Preserved Foods</option>
              </select>
              <input
                type="text"
                placeholder="Search.."
                className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={`${item.name}-${item.href}`} href={item.href} className={linkClass(item.href)}>
                {item.icon}
                {item.name}
              </Link>
            ))}

            <Link href="/login" className={linkClass('/login')}>
              <User size={18} />
              Login / Register
            </Link>
            <Link href="/cart" className="relative hover:text-yellow-400 transition">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] rounded-full px-1.5 py-0.5">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 p-1 border rounded"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          {[...navItems, { name: 'Search', href: '/search', icon: <Search size={18} /> }, { name: 'Login / Register', href: '/login', icon: <User size={18} /> }].map((item) => (
            <Link
              key={`${item.name}-${item.href}`}
              href={item.href}
              className={linkClass(item.href)}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
