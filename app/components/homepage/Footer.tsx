import Link from 'next/link';
import { Instagram, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-lime-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        
        {/* Brand / Newsletter Preview */}
        <div>
          <h4 className="text-lg font-semibold mb-3">STM FOOD</h4>
          <p className="text-white-200">
            Autentiska thailändska ingredienser och recept. Beställ online eller bli en del av vårt partnernätverk.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Snabblänkar</h4>
          <ul className="space-y-2">
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/recipes" className="hover:underline">Recept</Link></li>
            <li><Link href="/partner" className="hover:underline">Bli Partner</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Kontakt</h4>
          <ul className="space-y-2">
            <li>Email: admin@somtammarket.com</li>
            <li>Telefon: 073 807 95 91</li>
            <li>Adress: Vranavägen 9A Sköllerta 69774</li>
             <li>innehavare F-skatt och Momsregistrerad</li>
           
          </ul>
        </div>

        {/* Language & Social */}
        <div className="flex flex-col items-start gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <Globe size={18} />
            <select className="bg-lime-800 text-white border-none rounded px-2 py-1 text-sm">
              <option value="sv">Svenska</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <Link href="https://instagram.com" target="_blank" className="hover:text-gray-300">
              <Instagram size={20} />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-gray-300">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-green-200 text-xs">
        © {new Date().getFullYear()} STM Food. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}

