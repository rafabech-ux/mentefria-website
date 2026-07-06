# PRODUCT.md — Mente Fria Website

## What this is
Marketing + e-commerce site for **Mente Fria**, México's #1 premium cold-plunge brand. This Next.js build is the locked "first design" (deploy to Vercel first; later ported to a Shopify Liquid theme). Design IS the product here.

- **Register:** brand / marketing landing (design leads).
- **Audience:** high-income Mexican consumers (athletes, execs, wellness-driven) + B2B (hotels, gyms, spas, clinics).
- **Products:** MF ONE ($169,000 MXN, all-in-one w/ integrated chiller), MF Horizon ($74,000), MF Barrel ($69,000), motores & accesorios. NEVER bundle MF ONE with external motors.
- **Voice:** Modern Stoic. "MIND OVER BODY." Spanish, direct, benefit-first. Specs support, never lead.

## Design system (LOCKED — do not re-derive)
- Source of truth: `src/app/metal.css` (ported from Rafa's approved Claude Design "site_v2").
- World: silver / chrome / stainless steel / black / white on cool paper #F3F5F7.
- Accent: **ice blue #5B9BD5** (eyebrows, hovers, stars, small accents ONLY). Electric **#001BFF** lives only inside predefined gradients (`--grad-blue`, glows, promo bar).
- Type: Aileron (display + body), tight tracking, 0.5px text-stroke on display via `--bold-stroke`.
- Nav: liquid-glass sticky bar (glass "Medio"). Buttons: uppercase pills (`.mbtn-*`).
- Motion refs: Eight Sleep, Plunge, Apple, Whoop — slow, confident, ease-out; never bouncy.

## Constraints
- All copy/prices/claims must match mentefria.com (audited 2026-07-05). Real testimonials only.
- Landing reference implementation: `src/components/LandingV2.tsx`.
- 42 °C max heat (not 43). WhatsApp: +52 56 1647 1386.
