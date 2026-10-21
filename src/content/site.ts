/**
 * All of the site's words, links and media live here.
 * Edit this file to change copy — no need to touch the components.
 *
 * VIDEOS: drop .mp4 files into /public/media and set `src` below
 * (e.g. "/media/hero.mp4"). While `src` is empty, the poster image
 * is shown with a slow, cinematic zoom instead.
 */

export const site = {
  name: "Wellbeing With Ro",
  /** Brand split for the logo: "Wellbeing" + italic "with Ro" */
  brand: { lead: "Wellbeing", accent: "with Ro" },
  founder: "Rochelle Chukwuma",
  founderShort: "Ro",
  tagline: "Wellness experiences that connect people.",
  description:
    "Wellbeing With Ro by Rochelle Chukwuma: yoga, Pilates and sound bath experiences, based in Abuja and available to travel. Group classes, private sessions and curated wellness events.",
  /** Leave empty until Ro confirms her email — it's hidden while empty. */
  email: "",
  phone: "+234 707 877 3261",
  /** WhatsApp number in international format, digits only (used for wa.me links). */
  whatsapp: "2347078773261",
  /** Home base. Ro travels, so always pair it with `travel` and keep it off the home page. */
  location: "Abuja, Nigeria",
  travel: "Available to travel",
  city: "Abuja",
  country: "NG",
  instagram: "https://www.instagram.com/wellbeingwithro",
  instagramHandle: "@wellbeingwithro",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Experiences", href: "/classes" },
  { label: "Watch", href: "/#watch" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Yoga · Pilates · Sound bath",
  title: ["Come home", "to your body."],
  body: "Wellness experiences that connect you to your body, your breath and each other. Curated by Rochelle Chukwuma.",
  primary: { label: "Book a session", href: "/contact#book" },
  secondary: { label: "Explore experiences", href: "/classes" },
  image: { src: "/images/ro/hero-silhouette.jpg", alt: "Ro holding a warrior pose in a blue-lit studio" },
};

export const intro = {
  kicker: "Wellbeing with Ro",
  statement:
    "Wellness is better shared. I design experiences that bring people together — and back to themselves.",
  body: "Through yoga, Pilates and sound bath, Ro creates warm, welcoming spaces to move, breathe and slow down — wherever you are. Led by a 200hr and 500hr certified yoga teacher. No experience needed — just come as you are.",
  link: { label: "Meet Ro", href: "/about" },
};

export type Offering = {
  title: string;
  body: string;
  image: string;
  href: string;
  meta: string;
};

export const offerings: Offering[] = [
  {
    title: "Yoga",
    body: "Flowing, breath-led classes that build strength, ease and focus.",
    image: "/images/ro/yoga-down-dog.jpg",
    href: "/classes#yoga",
    meta: "Indoors & outdoors",
  },
  {
    title: "Pilates",
    body: "Mat and reformer Pilates for core strength, posture and control.",
    image: "/images/ro/pilates.jpg",
    href: "/classes#pilates",
    meta: "Group & private",
  },
  {
    title: "Sound Bath",
    body: "Lie back and let singing bowls guide you into deep rest.",
    image: "/images/ro/sound-bath.jpg",
    href: "/classes#sound-bath",
    meta: "Deep relaxation",
  },
  {
    title: "Private Sessions",
    body: "One-to-one practice shaped entirely around you and your goals.",
    image: "/images/ro/yoga-up-dog.jpg",
    href: "/classes#private",
    meta: "By appointment",
  },
  {
    title: "Curated Experiences",
    body: "Wellness gatherings for birthdays, celebrations and friends.",
    image: "/images/ro/poster-birthday.jpg",
    href: "/classes#experiences",
    meta: "Tailor-made",
  },
  {
    title: "Corporate Wellness",
    body: "Sound healing, yoga, Pilates and retreat days — a real reset for teams.",
    image: "/images/ro/corporate.jpg",
    href: "/classes#corporate",
    meta: "For teams",
  },
];

/** Featured upcoming retreat — shown on the home and Experiences pages. Set to null to hide. */
export const retreat: {
  kicker: string;
  name: string;
  subtitle: string;
  dates: string;
  venue: string;
  body: string;
  /** Ro's words — their first letters spell the retreat name. */
  words: string[];
  /** Price line and group size, from Ro's Selar listing. */
  price: string;
  spots: string;
  /** Selar checkout link. The Pay button only shows when this is set. */
  payLink: string;
  image: string;
  imageAlt: string;
} | null = {
  kicker: "Upcoming retreat",
  name: "REST",
  subtitle: "A Weekend to Restore",
  dates: "December 11–13",
  venue: "Greenhouse Resort, Karshi",
  body: "A small-group wellness retreat to slow down, soften and be taken care of. Yoga, Pilates, sound bath, massage, nourishing meals, intimate conversations and a gift box to take home.",
  words: ["Restored", "Educated", "Soften", "Touched"],
  price: "₦350,000 per person (sharing)",
  spots: "Limited to 15–20 guests · Accommodation, meals, sessions & massage included",
  payLink: "https://selar.com/5650dc42m3",
  image: "/images/ro/rest-flyer.jpg",
  imageAlt:
    "REST retreat flyer: December 11–13, 2026 at Greenhouse Resort, Abuja. Healthy meals, massage, accommodation, sound bath and aqua yoga. Investment ₦350,000.",
};

export const feature = {
  kicker: "Watch & practise",
  title: "Press play. Breathe out.",
  body: "Moments from Ro's classes, sound baths and gatherings — under the trees, in the studio and beyond.",
  video: { src: "/media/garden.mp4", poster: "/images/ro/poster-garden.jpg" },
};

export type VideoItem = {
  title: string;
  /** Small label under the title, e.g. "Reel" or "04:30" */
  length: string;
  poster: string;
  /** Local file in /public/media, e.g. "/media/morning-flow.mp4" */
  src?: string;
  /** Or an embed URL — YouTube, Vimeo or an Instagram reel ("https://www.instagram.com/reel/CODE/embed/") */
  embed?: string;
  /** Portrait player, for Instagram reels */
  vertical?: boolean;
};

export const videos: VideoItem[] = [
  {
    title: "Hi, I'm Ro",
    length: "Reel",
    poster: "/images/ig/meet-ro.jpg",
    embed: "https://www.instagram.com/reel/Dd0taSGI4Oc/embed/",
    vertical: true,
  },
  {
    title: "What is a sound bath?",
    length: "0:13",
    poster: "/images/ro/poster-sound-bath.jpg",
    src: "/media/sound-bath.mp4",
    vertical: true,
  },
  {
    title: "Reformer Pilates",
    length: "0:30",
    poster: "/images/ro/poster-reformer-pilates.jpg",
    src: "/media/reformer-pilates.mp4",
    vertical: true,
  },
  {
    title: "A birthday wellness gathering",
    length: "0:22",
    poster: "/images/ro/poster-birthday.jpg",
    src: "/media/birthday.mp4",
    vertical: true,
  },
];

/** Recent Instagram posts shown in the "From Instagram" grid. */
export const instagramPosts = [
  { image: "/images/ig/dear-hr.jpg", href: "https://www.instagram.com/p/Dd-0KX9okXs/", alt: "Dear HR — not another team-building day" },
  { image: "/images/ig/outdoor-bridge.jpg", href: "https://www.instagram.com/p/DdTDFthCEqc/", alt: "Outdoor yoga on the grass" },
  { image: "/images/ig/studio.jpg", href: "https://www.instagram.com/p/DdI4U4_un0T/", alt: "The studio, mats laid out" },
  { image: "/images/ig/reformer-pilates.jpg", href: "https://www.instagram.com/reel/DdlaeztO5-I/", alt: "Reformer Pilates" },
  { image: "/images/ig/birthday.jpg", href: "https://www.instagram.com/reel/DdhE_VJoKtN/", alt: "A birthday wellness gathering" },
  { image: "/images/ig/wellness-basket.jpg", href: "https://www.instagram.com/p/DdofDWQiJSv/", alt: "Wellness is balance, peace, clarity" },
];

/** Real reviews — shown side by side on the home page. `detail` is optional. */
export const testimonials: { quote: string; name: string; detail?: string }[] = [
  {
    quote:
      "Ro delivered an excellent sound bath session at our STILL experience in September. She brought such a calming presence, and beyond her skill, she's warm and kind. I highly recommend her.",
    name: "Grace",
    detail: "CoppahandGold",
  },
  {
    quote:
      "Your session was so impactful, engaging and beautiful. You poured so much heart into it and our ladies felt it! Thank you for gracing us and making the gathering a memorable one.",
    name: "The Blush Gathering Team",
  },
];

export const pillars = [
  { title: "Connection", body: "Experiences designed to bring people together — and closer to themselves." },
  { title: "Every body welcome", body: "Options and modifications in every session. You're never behind." },
  { title: "Strength in softness", body: "Build real strength through yoga and Pilates without forcing your body." },
  { title: "Rest is practice", body: "Sound and stillness are part of the work, not a reward for it." },
];

export const cta = {
  title: "Your first session is waiting.",
  body: "Join a class, book a private session or plan a wellness experience for your people.",
  primary: { label: "Book a session", href: "/contact#book" },
};

export const about = {
  title: ["Hi, I'm", "Ro."],
  lead: "I'm Rochelle Chukwuma — a wellbeing facilitator based in Abuja and available to travel. I work at the intersection of movement, sound and nature.",
  /** Ro's own words. */
  blocks: [
    {
      title: "Who's behind it",
      body: "I'm a 200hr and 500hr certified yoga teacher, and I bring that depth of training to everything I design, so the experience is beautiful and your body is also looked after.",
    },
    {
      title: "Wherever you are",
      body: "I create in studios, gardens, resorts, offices and far-flung places. If you can gather people, I can design the experience.",
    },
    {
      title: "How you'll leave",
      body: "Refreshed, rejuvenated and more at home in yourself.",
    },
  ],
  closing:
    "Whether you're stepping onto a mat for the first time or returning after a long break, you're welcome exactly as you are.",
  cta: { label: "Plan an experience with me", href: "/contact#book" },
  portrait: "/images/ro/yoga-up-dog.jpg",
  wide: "/images/ro/garden-wide.jpg",
  stats: [
    { value: "200hr", label: "Certified yoga teacher" },
    { value: "500hr", label: "Advanced certification" },
    { value: "Anywhere", label: "Studios, gardens, resorts, offices" },
  ],
};

export type ClassDetail = {
  id: string;
  title: string;
  body: string;
  image: string;
  details: string[];
};

export const classes: ClassDetail[] = [
  {
    id: "yoga",
    title: "Yoga",
    body: "Breath-led yoga that builds strength and flexibility, then winds down into a long, grounding rest.",
    image: "/images/ro/yoga-down-dog.jpg",
    details: ["Private sessions", "All levels", "Indoors & outdoors"],
  },
  {
    id: "pilates",
    title: "Pilates",
    body: "Mat and reformer Pilates focused on core strength, posture and controlled, mindful movement.",
    image: "/images/ro/pilates.jpg",
    details: ["Mat Pilates", "At Pinkinetics", "All levels"],
  },
  {
    id: "sound-bath",
    title: "Sound Bath",
    body: "A deeply restful session where you lie back and let the sound of singing bowls carry you into stillness.",
    image: "/images/ro/sound-bath.jpg",
    details: ["No experience needed", "At your preferred location"],
  },
  {
    id: "private",
    title: "Private Sessions",
    body: "One-to-one yoga, Pilates or sound sessions designed around your body, goals and schedule.",
    image: "/images/ro/yoga-up-dog.jpg",
    details: ["Tailored to you", "By appointment"],
  },
  {
    id: "experiences",
    title: "Curated Experiences",
    body: "Wellness gatherings for birthdays, celebrations and friends — movement, sound and connection, designed for your occasion.",
    image: "/images/ro/poster-birthday.jpg",
    details: ["Birthdays & celebrations", "Tailor-made", "Enquire for dates"],
  },
  {
    id: "corporate",
    title: "Corporate Wellness",
    body: "Not another team-building day. Sound healing, yoga & Pilates and retreat days that give your people a real reset.",
    image: "/images/ro/corporate.jpg",
    details: ["For teams", "On site or venue", "Enquire for pricing"],
  },
];

/** Ro's weekly timetable. */
export const schedule = [
  { day: "Monday", time: "6pm", name: "Mat Pilates", where: "Pinkinetics" },
  { day: "Wednesday", time: "9am", name: "Yoga", where: "Private session" },
  { day: "Thursday", time: "10am", name: "Mat Pilates", where: "Pinkinetics" },
  { day: "Saturday", time: "5pm", name: "Sound Bath", where: "Your preferred location" },
];

export const footer = {
  groups: [
    {
      title: "Experiences",
      links: [
        { label: "Yoga", href: "/classes#yoga" },
        { label: "Pilates", href: "/classes#pilates" },
        { label: "Sound bath", href: "/classes#sound-bath" },
        { label: "Schedule", href: "/classes#schedule" },
      ],
    },
    {
      title: "Wellbeing with Ro",
      links: [
        { label: "About", href: "/about" },
        { label: "Watch", href: "/#watch" },
        { label: "Contact", href: "/contact" },
        { label: "Book a session", href: "/contact#book" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ],
};
