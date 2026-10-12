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
  email: "hello@wellbeingwithro.com",
  location: "Abuja, Nigeria",
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
    image: "/images/studio-class.jpg",
    href: "/classes#yoga",
    meta: "Group & private",
  },
  {
    title: "Pilates",
    body: "Mat Pilates for core strength, posture and moving with control.",
    image: "/images/core-strength.jpg",
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
    image: "/images/beach-flow.jpg",
    href: "/classes#experiences",
    meta: "Tailor-made",
  },
  {
    title: "Corporate Wellness",
    body: "Yoga, Pilates and sound sessions to help teams reset and connect.",
    image: "/images/seated-practice.jpg",
    href: "/classes#corporate",
    meta: "For teams",
  },
];

export const feature = {
  kicker: "Watch & practise",
  title: "Press play. Breathe out.",
  body: "Moments from Ro's classes, sound baths and gatherings — so you can feel the experience before you join.",
  video: { src: "", poster: "/images/lake-stillness.jpg" },
};

export type VideoItem = {
  title: string;
  length: string;
  poster: string;
  /** Local file in /public/media, e.g. "/media/morning-flow.mp4" */
  src?: string;
  /** Or a YouTube/Vimeo embed URL, e.g. "https://www.youtube.com/embed/VIDEO_ID" */
  embed?: string;
};

export const videos: VideoItem[] = [
  {
    title: "Morning yoga flow",
    length: "Video",
    poster: "/images/mobility.jpg",
  },
  {
    title: "Inside a sound bath",
    length: "Video",
    poster: "/images/meditation-sunrise.jpg",
  },
  {
    title: "Pilates core basics",
    length: "Video",
    poster: "/images/core-strength.jpg",
  },
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
  lead: "I'm Rochelle Chukwuma — a wellness experience curator in Abuja. I design experiences that connect people.",
  paragraphs: [
    "Wellbeing With Ro brings together yoga, Pilates and sound bath into experiences that help you slow down, move well and feel at home in your body.",
    "From group classes and private sessions to birthday gatherings and team wellness days, every experience is thoughtfully designed — warm, welcoming and grounded.",
    "Whether you're stepping onto a mat for the first time or returning after a long break, you are welcome exactly as you are.",
  ],
  portrait: "/images/meditation-sunrise.jpg",
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
    image: "/images/studio-class.jpg",
    details: ["All levels", "Group & private", "Abuja"],
  },
  {
    id: "pilates",
    title: "Pilates",
    body: "Mat Pilates focused on core strength, posture and controlled, mindful movement.",
    image: "/images/core-strength.jpg",
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
    image: "/images/beach-flow.jpg",
    details: ["Birthdays & celebrations", "Tailor-made", "Enquire for dates"],
  },
  {
    id: "corporate",
    title: "Corporate Wellness",
    body: "Sessions for teams and workplaces to de-stress, reset and connect — on site or at a venue of your choice.",
    image: "/images/seated-practice.jpg",
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
      ],
    },
  ],
};
