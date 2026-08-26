// app/components/landing/LandingFooter.tsx
import Link from 'next/link';
import { LogoMark } from './icons';

export default function LandingFooter() {
  return (
    <footer className="bg-cream-card border-t border-hairline">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 text-charcoal mb-3">
            <LogoMark className="w-7 h-7 text-terracotta" />
            <span className="font-headline text-base font-semibold">Som Tam Market</span>
          </div>
          <p className="font-body text-sm text-charcoal-soft" style={{ lineHeight: 1.7 }}>
            ของไทยแท้จากร้านค้าจริง จะซื้อครั้งเดียวหรือสมัครสมาชิกก็เลือกได้
          </p>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-charcoal mb-4">ร้านค้า</h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/shop" className="font-body text-sm text-charcoal-soft hover:text-charcoal">
                ร้านค้า
              </Link>
            </li>
            <li>
              <Link href="/shop" className="font-body text-sm text-charcoal-soft hover:text-charcoal">
                สมัครกล่อง
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-charcoal mb-4">บัญชี</h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/login" className="font-body text-sm text-charcoal-soft hover:text-charcoal">
                เข้าสู่ระบบ
              </Link>
            </li>
            <li>
              <Link href="/register" className="font-body text-sm text-charcoal-soft hover:text-charcoal">
                สมัครสมาชิก
              </Link>
            </li>
            <li>
              <Link
                href="/userprofiles/subscription"
                className="font-body text-sm text-charcoal-soft hover:text-charcoal"
              >
                กล่องสมาชิกของฉัน
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-charcoal mb-4">ติดต่อเรา</h4>
          <p className="font-body text-sm text-charcoal-soft">[อีเมลติดต่อ]</p>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-charcoal-soft">© 2026 Som Tam Market สงวนลิขสิทธิ์</p>
          <p className="font-body text-xs text-charcoal-soft">somtammarket.com</p>
        </div>
      </div>
    </footer>
  );
}
