'use client'

import Image from 'next/image'
import Link from 'next/link'

export type MasonryPost = {
  id: string | number
  title: string
  excerpt?: string
  image: string
  href: string
}

interface PostMasonryProps {
  posts: MasonryPost[]
  /** 
   * "card"  = image + text (like first screenshot)
   * "image" = image-only grid (like second screenshot)
   */
  variant?: 'card' | 'image'
}

export default function PostMasonry({
  posts,
  variant = 'card',
}: PostMasonryProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
        >
          <Link href={post.href} className="block">
            {/* IMAGE */}
            <div className="relative w-full">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* TEXT CARD (only for 'card' variant) */}
            {variant === 'card' && (
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                )}
              </div>
            )}
          </Link>
        </article>
      ))}
    </div>
  )
}
