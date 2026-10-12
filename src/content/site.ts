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
    "Wellbeing With Ro by Rochelle Chukwuma — yoga, Pilates and sound bath experiences in Abuja. Group classes, private sessions and curated wellness events.",
  /** Leave empty until Ro confirms her email — it's hidden while empty. */
  email: "",
  phone: "+234 707 877 3261",
  /** WhatsApp number in international format, digits only (used for wa.me links). */
  whatsapp: "2347078773261",
  location: "Abuja, Nigeria",
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
  eyebrow: "Yoga · Pilates · Sound bath — Abuja",
  title: ["Come home", "to your body."],
  body: "Wellness experiences that connect you to your body, your breath and each other. Curated by Rochelle Chukwuma.",
  primary: { label: "Book a session", href: "/contact#book" },
  secondary: { label: "Explore experiences", href: "/classes" },
  video: { src: "", poster: "/images/hero-sunset.jpg" },
};

export const intro = {
  kicker: "Wellbeing with Ro",
  statement:
    "Wellness is better shared. I design experiences that bring people together — and back to themselves.",
  body: "Through yoga, Pilates and sound bath, Ro creates warm, welcoming spaces in Abuja to move, breathe and slow down. No experience needed — just come as you are.",
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
    image: "/images/ig/outdoor-bridge.jpg",
    href: "/classes#yoga",
    meta: "Indoors & outdoors",
  },
  {
    title: "Pilates",
    body: "Mat and reformer Pilates for core strength, posture and control.",
    image: "/images/ig/reformer-pilates.jpg",
    href: "/classes#pilates",
    meta: "Group & private",
  },
  {
    title: "Sound Bath",
    body: "Lie back and let singing bowls guide you into deep rest.",
    image: "/images/sound-bowl.jpg",
    href: "/classes#sound-bath",
    meta: "Deep relaxation",
  },
  {
    title: "Private Sessions",
    body: "One-to-one practice shaped entirely around you and your goals.",
    image: "/images/private-session.jpg",
    href: "/classes#private",
    meta: "By appointment",
  },
  {
    title: "Curated Experiences",
    body: "Wellness gatherings for birthdays, celebrations and friends.",
    image: "/images/ig/birthday.jpg",
    href: "/classes#experiences",
    meta: "Tailor-made",
  },
  {
    title: "Corporate Wellness",
    body: "Sound healing, yoga, Pilates and retreat days — a real reset for teams.",
    image: "/images/ig/dear-hr.jpg",
    href: "/classes#corporate",
    meta: "For teams",
  },
];

export const feature = {
  kicker: "Watch & practise",
  title: "Press play. Breathe out.",
  body: "Moments from Ro's classes, sound baths and gatherings — under the trees, in the studio and beyond Abuja.",
  video: { src: "", poster: "/images/lake-stillness.jpg" },
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
    title: "Yoga under the trees",
    length: "Reel",
    poster: "/images/ig/outdoor-group.jpg",
    embed: "https://www.instagram.com/reel/DeY3CZnuRwz/embed/",
    vertical: true,
  },
  {
    title: "W is for women & wellbeing",
    length: "Reel",
    poster: "/images/ig/women-wellbeing.jpg",
    embed: "https://www.instagram.com/reel/Dd3-3PVowuQ/embed/",
    vertical: true,
  },
  {
    title: "Teaching yoga in Taraba",
    length: "Reel",
    poster: "/images/ig/taraba.jpg",
    embed: "https://www.instagram.com/reel/Ddi91AiIM1N/embed/",
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

export const testimonial = {
  quote:
    "Ro has a way of making you feel completely safe and completely capable at the same time. I leave every session lighter than I arrived.",
  name: "Client name",
  detail: "Placeholder — add a real review",
};

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
  lead: "I'm Rochelle Chukwuma — a wellbeing facilitator in Abuja. I work at the intersection of movement, sound and nature.",
  paragraphs: [
    "Wellbeing With Ro brings together yoga, Pilates and sound bath into experiences that help you slow down, move well and feel at home in your body.",
    "From group classes and private sessions to birthday gatherings and team wellness days, every experience is thoughtfully designed — warm, welcoming and grounded.",
    "Whether you're stepping onto a mat for the first time or returning after a long break, you are welcome exactly as you are.",
  ],
  portrait: "/images/ig/meet-ro.jpg",
  wide: "/images/retreat-canyon.jpg",
  stats: [
    { value: "Yoga", label: "Flow & breath" },
    { value: "Pilates", label: "Core & control" },
    { value: "Sound", label: "Bath & rest" },
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
    image: "/images/ig/outdoor-bridge.jpg",
    details: ["All levels", "Indoors & outdoors", "Abuja"],
  },
  {
    id: "pilates",
    title: "Pilates",
    body: "Mat and reformer Pilates focused on core strength, posture and controlled, mindful movement.",
    image: "/images/ig/reformer-pilates.jpg",
    details: ["All levels", "Group & private", "Abuja"],
  },
  {
    id: "sound-bath",
    title: "Sound Bath",
    body: "A deeply restful session where you lie back and let the sound of singing bowls carry you into stillness.",
    image: "/images/sound-bowl.jpg",
    details: ["No experience needed", "Group & private", "Abuja"],
  },
  {
    id: "private",
    title: "Private Sessions",
    body: "One-to-one yoga, Pilates or sound sessions designed around your body, goals and schedule.",
    image: "/images/private-session.jpg",
    details: ["Tailored to you", "By appointment"],
  },
  {
    id: "experiences",
    title: "Curated Experiences",
    body: "Wellness gatherings for birthdays, celebrations and friends — movement, sound and connection, designed for your occasion.",
    image: "/images/ig/birthday.jpg",
    details: ["Birthdays & celebrations", "Tailor-made", "Enquire for dates"],
  },
  {
    id: "corporate",
    title: "Corporate Wellness",
    body: "Not another team-building day. Sound healing, yoga & Pilates and retreat days that give your people a real reset.",
    image: "/images/ig/dear-hr.jpg",
    details: ["For teams", "On site or venue", "Enquire for pricing"],
  },
];

/** Placeholder timetable — replace with Ro's real schedule. */
export const schedule = [
  { day: "Monday", time: "07:00", name: "Yoga", where: "Abuja" },
  { day: "Wednesday", time: "18:00", name: "Pilates", where: "Abuja" },
  { day: "Friday", time: "19:00", name: "Sound Bath", where: "Abuja" },
  { day: "Saturday", time: "09:00", name: "Yoga", where: "Abuja" },
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
