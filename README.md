# Som Tam Market — Customer Frontend

The customer-facing storefront for **Som Tam Market**, a Thai groceries and product subscription marketplace serving the Thai diaspora in Sweden. Live at [food.somtammarket.com](https://food.somtammarket.com) (also reachable via `somtammarket.com` and `www.somtammarket.com`, both redirected here — `www` is a known non-blocking loose end, not fully cut over).

Built with [Next.js](https://nextjs.org) 15 (App Router), React 19, and Tailwind CSS.

## What's here

- **`/`** — landing page (PR #6). Warm-market-and-spice visual identity established here first — cream/charcoal/gold/terracotta/basil/hairline tokens added to `tailwind.config.js` (`theme.extend`), Bitter/Noto Sans Thai/Work Sans loaded via `next/font/google`, scoped to this page only (not the root layout). Components live under `app/components/landing/`, including a hand-drawn inline-SVG icon set (`icons.tsx`) — no icon font, no emoji. Real photography (hero image, "Sawatdee Snack Box" sequence) replaced the original icon placeholders on 2026-08-29 (PR #9). "Meet the vendors" and a Stores nav link are deliberately left out — the only `PartnerStore` rows on file are test fixtures, not real vendors.
- **`/explore`** — "Explore the market" (PR #7). Pinterest-style masonry grid (`react-masonry-css`, 4 columns desktop → 2 at 768px) fed live from Studio's public `GET /api/studio/stm-post/` (flat array, unpaginated, fields `id, title, slug, excerpt, body, image_url, language, published_at, created_at` — no partner-store or category field yet). Cards render as photo + title only, nothing else. `app/explore/page.tsx`, `app/components/explore/{ExploreHero,ExploreGrid}.tsx`.
- **`/shop`** — the storefront (PR #8): hero → 12-category tile grid → combo/bundle promo banner → curated seasonal picks, wired into the existing product list and checkout flow. Components live under **`app/components/shop-landing/`** — not `app/components/shop/`, which collides case-insensitively with the pre-existing legacy `app/components/Shop/` folder on Windows and breaks the TS build. Category and dessert images are still placeholders and combo/dessert prices still show literal `[ราคา]` pending real Cloudflare photos and kr pricing from Nok.
- **`/checkout`** — cart checkout.
- **`/subscribe/<storeSlug>`** and **`/subscribe/success`** — subscription box signup. **There is no bare `/subscribe` route** — every subscribe CTA elsewhere in the app links to `/shop` until a real per-store picker exists.
- **`/login`**, **`/register`** — customer auth. Login sets an httpOnly `access_token` cookie (JWT, 8-hour lifetime); registration auto-logs the new customer in; both redirect customers to `/shop` post-auth (not the vendor dashboard).
- **`/userprofiles/orders`**, **`/userprofiles/subscription`** — order history and subscription management (view items, edit box contents, pause/resume/cancel — status only reflects the real Stripe webhook, never optimistic client state).

A `/stores` directory (browsing real partner vendors) is designed but not built — blocked on real vendor onboarding, not a technical blocker.

## Architecture notes

- **Auth is a BFF (backend-for-frontend) pattern.** Next.js API routes under `app/api/*/route.ts` hold the httpOnly JWT cookie server-side and forward it as `Authorization: Bearer <token>` to the Django API — the browser never sees the raw token. `app/api/login/route.ts` and `app/api/place-order/route.ts` are the reference implementations for new authenticated routes.
- **Cart state is `localStorage`-only**, not synced to the backend. Subscription box state is different by design — it lives server-side from creation, since it's billed recurringly.
- **The backend** is a separate repo, `stm-food-backend-clean` (Django + DRF, Railway) at `api.somtammarket.com`, shared across this app, the admin dashboard, and Studio. This repo talks to it over REST only — no shared code, no shared deploy pipeline.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — **use port 3000 specifically**: Django's `CORS_ALLOWED_ORIGINS` only whitelists `http://localhost:3000`, so any client-side fetch from a dev server on another port (e.g. `next dev -p 3100`) fails with a generic `Failed to fetch`, not a helpful CORS error.

`.env.local` needs `NEXT_PUBLIC_API_BASE`. By default this is set to a local backend (`http://localhost:8000`) that most people won't have running, so pages that fetch data will show their error state unless you override it — for read-only frontend work, point it at production instead:

```
NEXT_PUBLIC_API_BASE=https://api.somtammarket.com
```

For anything touching Stripe, use **test-mode** keys only (sandbox: "Nokinhouse"). Never point local dev at live keys or the production database.

## Deployment

Deployed on [Vercel](https://vercel.com), auto-deploying from `main`. Workflow for every change: branch off as `phase<N>/<name>` → commit → push → open a PR → **wait for explicit sign-off before merging** (never merge immediately after opening) → verify the specific thing built.

One incident worth knowing about: pushing follow-up commits to a branch that was already merged once doesn't put them on `main` automatically. On 2026-08-29 two commits landed on `phase2/frontend-shop-redesign` after its PR had already merged, and the live site kept showing stale content until a second PR (#9) picked them up. If you push to an old branch name, check `git log origin/main` before assuming the live site reflects it.

## Related repos

| Repo | What it is |
|---|---|
| `stm-food-backend-clean` | Django + DRF API this app talks to (Railway, `api.somtammarket.com`). Not `stm_marketPlace`'s backend folder — that one's an empty, unrelated skeleton that's been mistaken for the real thing before. |
| `stm-admin-frontend` | Internal staff/vendor admin dashboard (~30% built), separate app, separate audience |
| `stm-portal-frontend` | "Studio" — the content-publishing tool that feeds `/explore`. Its own frontend (branded "SOMTAM.") is a separate, unrelated app — don't reuse its nav/branding here. |

## Status

Actively developed. Track A of the frontend UX pass — landing, Explore, and the redesigned Shop — is done at the code level; `/shop`'s placeholder photos and prices are the one remaining item before it's launch-ready. Current focus is onboarding real vendors before broader launch. Full as-built task history: `claude/phase2-build-tasks.md` in the project (mirrors `claude/phase1-build-tasks.md` for the subscription/backend work).
