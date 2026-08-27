// app/components/shop/ShopQuickLogin.tsx
import Image from 'next/image';
import LoginForm from '../../login/login';

export default function ShopQuickLogin() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 md:h-[420px] rounded-card overflow-hidden">
          <Image
            src="/shop/login-panel-bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-cream-card border border-hairline rounded-card p-8 md:p-10">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-charcoal mb-6">
            เข้าสู่ระบบ
          </h2>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
