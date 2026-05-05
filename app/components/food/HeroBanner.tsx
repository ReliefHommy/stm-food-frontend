// app/components/homepage/HeroBanner.tsx
import Link from 'next/link';


export default function HeroBanner() {
  return (
    <section
      className="relative w-full bg-white bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/healthy-food-01.png')" }} // Replace with your real image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Content */}

    </section>
  );
}


