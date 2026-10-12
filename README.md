# Wellbeing With Ro — website

Next.js site for **Wellbeing With Ro** by Rochelle Chukwuma: yoga, Pilates and sound bath in Abuja.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All words, links, classes, schedule and media paths live in **`src/content/site.ts`**.

- **Email / socials:** `site` object at the top.
- **Hero & feature videos:** put `.mp4` files in `public/media/` and set
  `hero.video.src` / `feature.video.src` (e.g. `"/media/hero.mp4"`). Until then the
  poster photo is shown with a slow zoom.
- **Video gallery ("Practise anywhere"):** for each item in `videos`, set either
  `src: "/media/file.mp4"` or `embed: "https://www.youtube.com/embed/VIDEO_ID"`.
- **Photos:** live in `public/images/`. Current ones are Unsplash stock placeholders —
  replace with Ro's own photography (keep the same file names, or update paths).

## Pages

| Route      | What's there                                                     |
| ---------- | ---------------------------------------------------------------- |
| `/`        | Video hero, intro, 3×2 offerings grid, video band, video gallery, principles, testimonial, CTA |
| `/about`   | Story, stats, principles                                          |
| `/classes` | All class types + weekly schedule                                 |
| `/contact` | Contact details + booking enquiry form (opens visitor's email app) |

Styling: `src/app/globals.css` — colour palette is defined as CSS variables at the top.
