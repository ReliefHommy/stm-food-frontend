/* eslint-disable @next/next/no-img-element */
'use client'
import FadeIn from './FadeIn'

export type MasonryItem = {
  id: string | number
  src: string           // image URL (local or remote)
  title?: string
  subtitle?: string
  href?: string
}

export default function MasonryGrid({ items }: { items: MasonryItem[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
      {items.map((it) => (
        <FadeIn key={it.id}>
          <a
            href={it.href ?? '#'}
            className="mb-4 block break-inside-avoid rounded-xl overflow-hidden border bg-white hover:shadow-md"
          >
            <img
              src={it.src}
              alt={it.title || 'image'}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            {(it.title || it.subtitle) && (
              <div className="p-3">
                {it.title && (
                  <h3 className="text-sm font-medium leading-tight">{it.title}</h3>
                )}
                {it.subtitle && (
                  <p className="mt-1 text-xs text-gray-500">{it.subtitle}</p>
                )}
              </div>
            )}
          </a>
        </FadeIn>
      ))}
    </div>
  )
}
