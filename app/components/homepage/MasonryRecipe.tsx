

import { type } from "os";
import React from "react";

type MasonryCard = {
  id: number;
  title: string;
  image: string;
  description: string;
  tags?: string[];
};

interface MasonryGridProps {
  cards: MasonryCard[];
}

export default function MasonryGrid({ cards }: MasonryGridProps) {
  return (
    <section className="py-12 px-4 mx-auto max-w-7xl">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Shop by Recipes
        </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.description}</p>
              {card.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}