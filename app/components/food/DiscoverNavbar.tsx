//components/hompage/MainNavbar.tsx
import Link from 'next/link';

export default function DiscoverNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo [cite: 21] */}
        <div className="text-2xl font-bold tracking-tighter text-[#0F3D2E]">
          SOMTAM<span className="text-[#F97316]">.</span>
        </div>

        {/* Navigation Links [cite: 22, 23, 24, 25] */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-600">
          <Link href="/" className="hover:text-black transition-colors">Explore</Link>
          <Link href="/europe" className="hover:text-black transition-colors">Europe</Link>
          <Link href="/bangkok" className="hover:text-black transition-colors">Bangkok</Link>
          <Link href="/stories" className="hover:text-black transition-colors">Stories</Link>
        </div>

        {/* Search & Profile [cite: 26, 27] */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <div className="w-8 h-8 bg-[#0F3D2E] rounded-full" />
        </div>
      </div>
    </nav>
  );
}
