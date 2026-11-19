# Shizuka Luxury: landing page, Direction C "After hours"

An alternative design direction for the Shizuka Luxury landing page, inspired by onoera.com: a near-black page, a soft glow of light, one large serif paragraph per section with a small heading and icon on the left, dark photo cards and a "Menu" overlay with stacked serif links.

Made Shizuka's own: the hero shows a real piece "under one light", and the copper glow is that same photo blurred into light. Each light is baked into its own image on pure black (`public/images/glow-*.jpg`) and screen-blended, so the lights can drift independently without any live blur.

Stack: Next.js 16 (App Router, static export), plain CSS, `next/font` (Young Serif + Geist).

## Live preview

https://designerdxx.github.io/shizuka-landing-c/

Every push to `main` rebuilds and redeploys through GitHub Actions (`.github/workflows/deploy.yml`). The workflow sets `NEXT_PUBLIC_BASE_PATH` to the repository name, because Pages serves the site from `/<repo>/`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

Copy `env.example` to `.env.local` and set `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only, international format). Until it is set, every "Message us" button scrolls to the footer. `NEXT_PUBLIC_LINKEDIN_URL` and `NEXT_PUBLIC_INSTAGRAM_URL` fill the menu and footer links.

## Where things live

- Copy: `app/content.ts` and `app/page.tsx`
- Header and menu: `app/_components/Header.tsx`
- All styles and motion: `app/globals.css`

## Motion: "coming into focus"

- **Load:** the hero waits until its photo has decoded (at most 1.5s), then the photo resolves from a soft blur to sharp (1.6s, ease-out) while the glow fades up. The headline lines rise 50ms apart, then the paragraph, buttons and steps.
- **Drifting light (hero and closing band):** each glow is two lights that drift on their own slow loops (18–26s, sine ease-in-out, back and forth), moving a little, growing up to 12% and breathing in brightness, out of step so the pattern never repeats exactly. It stays behind the type and never competes with it; on phones the hero light stays behind the photo and fades out before the paragraph. The loops pause while off screen (`app/_components/Ambient.tsx`) and are switched off for reduced motion.
- **Sections:** reveal once as they enter, a 14px rise with a 6px blur clearing, 40ms between items. Anything already on screen at load stays as rendered.
- **Hover and press:** buttons get a fill wipe (280ms in, 200ms out) and press to 0.98; cards brighten and zoom 1.03 (280ms in, 200ms out); step rows draw a light line underneath; the quiet links draw an underline while their circle fills cream.
- **Menu:** a full-screen panel; serif links rise 35ms apart; the page behind is locked and Escape closes it.
- **Reduced motion:** no movement, only fades, and no smooth scrolling.

Audited against the 12 principles of animation: everything a click or hover starts finishes within 300ms, entrances ease out, exits ease in, staggers stay at or under 50ms, and every control has a pressed state.

## Still needed from the client

- WhatsApp number and pre-filled message.
- A real testimonial. "Client words" is a labelled placeholder; don't replace it with an invented quote.
- Office address, phone number, LinkedIn and Instagram URLs.
- What the "72 hours" claim is subject to.
- Confirmation that the chauffeur photo may be used (its Figma layer name suggests it is AI-generated).
