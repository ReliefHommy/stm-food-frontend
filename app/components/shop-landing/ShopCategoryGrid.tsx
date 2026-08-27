// app/components/shop/ShopCategoryGrid.tsx
import Image from 'next/image';

// TODO(nok): swap these placeholder photos for the real product photos on Cloudflare before shipping.
const categories = [
  { label: 'เครื่องแกงและซอส', image: '/shop/category-curry-sauces.png' },
  { label: 'ของนำเข้าจากไทย', image: '/shop/category-imported-thai.png' },
  { label: 'อาหารพร้อมทาน', image: '/shop/category-ready-to-eat.png' },
  { label: 'ผักสด', image: '/category/fresh-product.jpeg' },
  { label: 'เนื้อสัตว์และอาหารทะเล', image: '/shop/category-meat-seafood.png' },
  { label: 'สมุนไพรและเครื่องเทศ', image: '/shop/category-herbs-spices.png' },
  { label: 'ข้าวและเส้นก๋วยเตี๋ยว', image: '/category/rice-grains.jpeg' },
  { label: 'ผลิตภัณฑ์นม', image: '/shop/category-dairy.png' },
  { label: 'ของแห้งและเครื่องปรุง', image: '/shop/category-dry-goods.jpg' },
  { label: 'ขนมและของว่าง', image: '/shop/category-snacks.png' },
  { label: 'ขนมปังและเบเกอรี่', image: '/shop/category-bakery.png' },
  { label: 'อาหารแช่แข็ง', image: '/category/frozen-foods.png' },
];

export default function ShopCategoryGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <h2 className="font-headline text-3xl md:text-4xl font-semibold text-charcoal text-center mb-10">
        หมวดหมู่สินค้า
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.label}
            className="bg-cream-card border border-hairline rounded-card overflow-hidden flex flex-col items-center text-center"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={category.image}
                alt={category.label}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-body text-sm md:text-base font-medium text-charcoal px-3 py-4">
              {category.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
