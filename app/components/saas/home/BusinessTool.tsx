// app/components/WhatIBuild.tsx
import Image from "next/image"
export default function BusinessTool() {
  return (
    <section
  id="What-I-Build"
  className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800"
>
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    {/* Section header */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
        Business Digital Tools-เครื่องมือธุรกิจดิจิทัล
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        สร้างเพื่อธุรกิจไทยในยุโรป —  <span className="text-indigo-400 dark:text-indigo-400">A Digital Infrastructure for Thai business in Europe.</span>
      </h2>
     
    </div>

    {/* Case cards */}
    <div className="mt-14 grid gap-8 lg:grid-cols-3">
      {/* Case 1 */}
      <article className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition">
        <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
          Case 01 • Society Events Platform
-
        </p>
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
      Community
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
          -
Connecting Thai events across Europe.
        </p>

   <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white shadow-sm dark:border-gray-800/70 dark:bg-gray-900">  {/* Image area */}
                      <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
                        {/* ✅ Replace src with your own image later (Canva export placed in /public) */}
                        <Image
                          src="/saas/community.png"
                          alt="Nok in House studio"
                          fill
                          priority
                          className="object-cover"
                        />
                        {/* Soft overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
                      </div>
                      </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Result: Less stress, more consistency
          </span>
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Explore more.. →
          </a>
        </div>
      </article>

      {/* Case 2 */}
      <article className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition">
        <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
          Case 02 • Food & Grocery SaaS Infrastructure-

        </p>
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          Commerce
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
      
-Helping small Thai businesses operate digitally.
        </p>

<div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white shadow-sm dark:border-gray-800/70 dark:bg-gray-900">  {/* Image area */}
                      <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
                        {/* ✅ Replace src with your own image later (Canva export placed in /public) */}
                        <Image
                          src="/saas/ecommerce.png"
                          alt="Nok in House studio"
                          fill
                          priority
                          className="object-cover"
                        />
                        {/* Soft overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
                      </div>
                      </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Result: Stronger brand trust
          </span>
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Explore more.. →
          </a>
        </div>
      </article>

      {/* Case 3 (Soft hint to internal platform, no STM name) */}
      <article className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition">
        <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
          Case 03 • AI-powered tools -
        </p>
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          AI Content
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
        -for content, catalog, and automation.
        </p>
<div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white shadow-sm dark:border-gray-800/70 dark:bg-gray-900">  {/* Image area */}
                      <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
                        {/* ✅ Replace src with your own image later (Canva export placed in /public) */}
                        <Image
                          src="/saas/social.png"
                          alt="Nok in House studio"
                          fill
                          priority
                          className="object-cover"
                        />
                        {/* Soft overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
                      </div>
                      </div>
        

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Result: A workflow that scales calmly
          </span>
          <a
            href="#story"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Explore more.. →
          </a>
        </div>
      </article>
    </div>
  </div>
</section>

  );
}