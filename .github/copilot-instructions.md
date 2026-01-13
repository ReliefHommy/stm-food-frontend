# Copilot instructions for stm-food-frontend

- Short summary: This is a Next.js (App Router) TypeScript frontend that proxies to a Django backend API. UI is Tailwind-based; Prisma client + migrations live under `lib/prisma` (Postgres schema). Use `npm run dev` (Next + Turbopack) for local development.

## Where to start (big picture) ✅
- Frontend entry: `app/` (Next 15 App Router). Pages + server components live here; client components are marked with `'use client'`.
- Backend integration: The app calls an external Django API. Most server-side API proxies are in `app/api/*/route.ts` and pages fetch from `process.env.NEXT_PUBLIC_API_BASE` (fallback: `https://stm-food-backend-production.up.railway.app`).
- DB (Prisma): `lib/prisma.ts` and `lib/prisma/schema.prisma`. Migrations: `lib/prisma/migrations/*`.

## Key developer workflows and commands 🔧
- Start dev server: `npm run dev` (uses `next dev --turbopack`).
- Build: `npm run build` ; Start production: `npm run start`.
- Lint: `npm run lint`.
- No test framework configured (add tests and scripts if you introduce them).

## Environment and runtime notes ⚠️
- API base URL: set `NEXT_PUBLIC_API_BASE` to point to the Django backend. Example local value: `http://127.0.0.1:8000`.
- Token cookie: cookie name defaults to `access_token`. The code reads `process.env.NEXT_PUBLIC_STM_TOKEN_COOKIE` or falls back to `"access_token"` (see `app/api/me/route.ts` and others).
- Watch for inconsistent env names: some files reference `API_URL` or `NEXT_PUBLIC_BASE_URL`—prefer `NEXT_PUBLIC_API_BASE` and update all references consistently if changing.
- Prisma uses `DATABASE_URL` in `lib/prisma/schema.prisma`.

## Patterns and conventions to follow 💡
- Server vs client: files that start with `'use client'` are client components; otherwise they are server components by default. Example client components: `app/shop/page.tsx`, `app/components/homepage/*`.
- API proxying: Server routes in `app/api/*/route.ts` commonly read cookies via `next/headers` and forward `Authorization: Bearer <token>` when present — follow that pattern when adding endpoints.
- Response handling: Use `NextResponse` in API routes to set cookies/status. Example: `app/api/login/route.ts` sets `access_token` as an httpOnly cookie.
- Fetch helpers: `lib/api.ts` has `apiFetch` which sets `credentials: 'include'`, central JSON parsing and error throwing — reuse it for client-side requests.
- Dynamic pages & cache: many server fetches use `cache: 'no-store'` and some routes use `export const dynamic = 'force-dynamic'` (e.g., `app/api/products/route.ts`). Maintain caching behavior unless you understand performance implications.
- UI primitives: shared UI components are under `components/ui/*` and home/ shop/ vendor UI under `app/components/*`.

## Integration and cross-component notes 🔁
- Auth flow: `app/api/login/route.ts` posts to `<API_BASE>/api/token/`, then sets `access_token` cookie. Server routes read that cookie and forward Authorization header to Django. When debugging, inspect cookies and Authorization headers.
- File upload: `app/api/products/route.ts` handles `multipart/form-data` and proxies raw body to Django — preserve headers and body when implementing file uploads.
- Vendor flows: vendor-specific pages live under `app/vendor/*` and often call `/api/vendor/products/*` and then forward them to Django.

## When you modify things — checklist ✅
- If changing an env var name, search for all references (`NEXT_PUBLIC_API_BASE`, `API_URL`, `NEXT_PUBLIC_BASE_URL`) and update accordingly.
- If you add server endpoints that set cookies, use `NextResponse` and follow existing cookie flags (httpOnly, secure in production, sameSite: 'strict').
- If you change data models, update Prisma schema at `lib/prisma/schema.prisma` and add/inspect migrations under `lib/prisma/migrations`.
- Add a short manual test case (how to verify) in your PR description: what to run locally, sample env values, and request sequence.

## Files to reference for common tasks 📁
- Dev/Build: `package.json`
- API helpers: `lib/api.ts`
- Prisma client + schema: `lib/prisma.ts`, `lib/prisma/schema.prisma` and `lib/prisma/migrations/`
- Auth routing and cookies: `app/api/login/route.ts`, `app/api/me/route.ts`
- Product endpoints: `app/api/products/route.ts`, `app/api/products/[id]/route.ts`
- Client components patterns: `app/components/*`, `components/ui/*`
- Example server-rendered page calling API: `app/vendor/page.tsx`, `app/userprofiles/page.tsx`.

---
If any of these sections are unclear or you'd like more examples/snippets for specific tasks (e.g., adding a new server route that proxies to Django, or handling image uploads), tell me which part to expand and I’ll iterate. ✨
