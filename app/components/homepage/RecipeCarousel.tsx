'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';
import Image from 'next/image';

const recipes = [
  {
    name: 'Thai Basil Chicken',
    image: '/recipes/4-curry.jpg',
    href: '/recipes/4-curry',
  },
  {
    name: 'Tom Yum Soup',
    image: '/recipes/papaya.jpg',
    href: '/recipes/papaya',
  },
  {
    name: 'Green Curry',
    image: '/recipes/Shrimp-green-curry.jpg',
    href: '/recipes/Shrimp-green-curry',
  },
];

export default function RecipeCarousel() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2.5, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });
  return (
    <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Explore Weekly Catelogs
        </h2>
        
     
    

        <div ref={sliderRef} className="keen-slider">
          {recipes.map((recipe) => (
            <Link
              key={recipe.name}
              href={recipe.href}
              className="keen-slider__slide object-cover transition-transform duration-300 hover:scale-105 rounded-xl"
            >
              <div className="h-40 full">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
 width={350
 } 
 height={220} // Provide an appropriate width

               
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {recipe.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
