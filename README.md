# IADE Website — React + Tailwind

Structured rebuild of theiade.in's hero/interaction style, with real routing and content
for the institute's actual pages.

## Structure

```
src/
  components/      Reusable UI: Navbar, Footer, Preloader, Hero, SkillRail,
                    CourseCard, TestimonialCard, SectionHeading, StatBlock,
                    ContactForm, WhatsAppButton, BackgroundLoop
  pages/            Home, About, Trainers, Reviews, Gallery, Courses,
                    CourseDetail, OnlineClasses, OfflineClasses, Placement, Contact
  utils/
    data.js         All course/testimonial/trainer/contact content — edit here first
    cn.js           Tiny classnames helper
    useReducedMotion.js
  App.jsx           Routes
  main.jsx          Entry point
  index.css         Tailwind + shared keyframes
```

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Swap in your real hero video

`src/components/BackgroundLoop.jsx` currently renders an animated gradient so the hero
works with zero external assets. Put your video file in `/public` and pass it in:

```jsx
<BackgroundLoop videoSrc="/hero-loop.mp4" />
```
(used inside `src/components/Hero.jsx`)

## Editing content

Everything text-based — course list, testimonials, trainers, stats, contact info —
lives in `src/utils/data.js`. Update it there and it flows through every page/component
automatically.

## Notes

- Preloader (`components/Preloader.jsx`) runs once per full page load, respects
  `prefers-reduced-motion`.
- `SkillRail` is a draggable, auto-scrolling course strip (the Bayone-style sliding
  screens moment) — click any card to go to that course's detail page.
- Gallery page has placeholder tiles — drop real photos in `/public/gallery` and swap
  the placeholders in `src/pages/Gallery.jsx`.
- Contact form is UI-only for now — wire `handleSubmit` in `ContactForm.jsx` to your
  backend or a form service (Formspree, EmailJS, etc.).
