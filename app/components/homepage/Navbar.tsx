// app/components/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, BookOpen, Utensils, Search, User} from 'lucide-react'; // optional: use lucide icons


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

    const navItems = [
    { name: 'shop', href: '/shop',icon: <ShoppingCart size={18}/> },
    { name: 'Recipes', href: '/recipes', icon: <BookOpen size={18}/> },
    { name: 'Partner', href: '/partner', icon: <Utensils size={18}/> },
  ];

    const linkClass = (href: string) =>
    `flex items-center gap-1 hover:text-green-600 transition ${
      pathname === href ? 'text-green-600 font-semibold' : 'text-gray-700'
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-extrabold text-green-600 tracking-tight">
          STM FOOD
        </Link>
         {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
           {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.icon}
              {item.name}
            </Link>
          ))}

          {/* Search Icon */}
         <div className="relative">
  <input
    type="text"
    placeholder="Search..."
    className="border border-gray-300 rounded px-3 py-1 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
  <Search className="absolute right-2 top-1.5 text-gray-400" size={16} />
</div>


          {/* Login/Register */}
          <Link href="/login" className={linkClass('/login')}>
            <User size={18} />
            Login / Register
          </Link>
        </div>
        {/* Mobile Hamburger Icon */}
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
            key={item.href}
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
  );
}

