/**
 * All of the site's words, links and media live here.
 * Edit this file to change copy — no need to touch the components.
 *
 * VIDEOS: drop .mp4 files into /public/media and set `src` below
 * (e.g. "/media/hero.mp4"). While `src` is empty, the poster image
 * is shown with a slow, cinematic zoom instead.
 */

export const site = {
  name: "Rochael Chukwuma",
  shortName: "Rochael",
  tagline: "Move with intention. Live with ease.",
  description:
    "Rochael Chukwuma — yoga, breathwork and mindful movement for a calmer body and a clearer mind. Group classes, private sessions and retreats.",
  email: "hello@rochaelchukwuma.com",
  location: "Studio & online",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
  tiktok: "https://tiktok.com/",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Journal", href: "/#watch" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Yoga · Breathwork · Mindful movement",
  title: ["Come home", "to your body."],
  body: "Slow, strong and soulful practice with Rochael — for every body, at every stage.",
  primary: { label: "Book a session", href: "/contact#book" },
  secondary: { label: "Explore classes", href: "/classes" },
  video: { src: "", poster: "/images/hero-sunset.jpg" },
};

export const intro = {
  kicker: "The practice",
  statement:
    "This isn't about touching your toes. It's about what you learn on the way down.",
  body: "Rochael blends grounded vinyasa, restorative stillness and breath-led strength into sessions that leave you softer, stronger and more yourself. No perfect poses required — just a willingness to show up.",
  link: { label: "Meet Rochael", href: "/about" },
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
    title: "Group Flow",
    body: "Energising vinyasa classes that build heat, rhythm and community.",
    image: "/images/studio-class.jpg",
    href: "/classes#group-flow",
    meta: "60 min · All levels",
  },
  {
    title: "Private Sessions",
    body: "One-to-one practice shaped entirely around your body and goals.",
    image: "/images/private-session.jpg",
    href: "/classes#private",
    meta: "75 min · In person or online",
  },
  {
    title: "Breath & Stillness",
    body: "Guided breathwork and meditation to quiet a busy nervous system.",
    image: "/images/seated-practice.jpg",
    href: "/classes#breath",
    meta: "45 min · Beginner friendly",
  },
  {
    title: "Strength & Mobility",
    body: "Functional, joint-friendly strength for a body that moves freely.",
    image: "/images/core-strength.jpg",
    href: "/classes#strength",
    meta: "50 min · Intermediate",
  },
  {
    title: "Sound & Restore",
    body: "Restorative postures held with blankets, bolsters and singing bowls.",
    image: "/images/sound-bowl.jpg",
    href: "/classes#restore",
    meta: "75 min · All levels",
  },
  {
    title: "Retreats",
    body: "Days away to reset — movement, nourishing food and open skies.",
    image: "/images/retreat-canyon.jpg",
    href: "/classes#retreats",
    meta: "Seasonal · Limited spaces",
  },
];

export const feature = {
  kicker: "Watch & practise",
  title: "Press play. Breathe out.",
  body: "Short flows, breath practices and moments from the studio — so you can practise with Rochael wherever you are.",
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
    title: "10-minute morning flow",
    length: "10:24",
    poster: "/images/beach-flow.jpg",
  },
  {
    title: "Box breathing for busy days",
    length: "06:12",
    poster: "/images/meditation-sunrise.jpg",
  },
  {
    title: "Hip openers to unwind",
    length: "14:48",
    poster: "/images/mobility.jpg",
  },
];

export const testimonial = {
  quote:
    "Rochael has a way of making you feel completely safe and completely capable at the same time. I leave every class lighter than I arrived.",
  name: "Client name",
  detail: "Private sessions, 1 year",
};

export const pillars = [
  { title: "Breath first", body: "Every session starts and ends with the breath — your anchor on and off the mat." },
  { title: "Every body welcome", body: "Options, props and modifications are offered in every class. You're never behind." },
  { title: "Strength in softness", body: "Build real, functional strength without forcing or punishing your body." },
  { title: "Rest is practice", body: "Stillness is not a reward you earn. It's part of the work." },
];

export const cta = {
  title: "Your first class is waiting.",
  body: "New here? Start with an introductory session and find the practice that fits you.",
  primary: { label: "Book a session", href: "/contact#book" },
};

export const about = {
  title: ["Hi, I'm", "Rochael."],
  lead: "I teach yoga and mindful movement for people who want to feel at home in their bodies again.",
  paragraphs: [
    "My own practice began as a way to slow down. Over time it became the place I return to — to breathe, to rebuild strength, and to listen.",
    "Today I guide group classes, private sessions and retreats that balance effort with ease. My teaching draws on vinyasa, restorative yoga, breathwork and functional mobility, and is always rooted in kindness.",
    "Whether you're stepping onto a mat for the first time or returning after years away, you are welcome exactly as you are.",
  ],
  portrait: "/images/meditation-sunrise.jpg",
  wide: "/images/beach-flow.jpg",
  stats: [
    { value: "8+", label: "Years teaching" },
    { value: "1,200+", label: "Classes guided" },
    { value: "500h", label: "Yoga training" },
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
    id: "group-flow",
    title: "Group Flow",
    body: "A dynamic, breath-linked vinyasa class that builds heat and focus, then winds down into a long, grounding savasana.",
    image: "/images/studio-class.jpg",
    details: ["60 minutes", "All levels", "Studio & live online"],
  },
  {
    id: "private",
    title: "Private Sessions",
    body: "Practice designed only for you — whether you're new to yoga, recovering from injury, or deepening an established practice.",
    image: "/images/private-session.jpg",
    details: ["75 minutes", "Tailored plan", "In person or online"],
  },
  {
    id: "breath",
    title: "Breath & Stillness",
    body: "Simple, powerful breath techniques and guided meditation to calm the nervous system and sharpen attention.",
    image: "/images/seated-practice.jpg",
    details: ["45 minutes", "Beginner friendly", "Live online"],
  },
  {
    id: "strength",
    title: "Strength & Mobility",
    body: "Bodyweight strength, active flexibility and joint care — so your body feels capable in everyday life.",
    image: "/images/core-strength.jpg",
    details: ["50 minutes", "Intermediate", "Studio"],
  },
  {
    id: "restore",
    title: "Sound & Restore",
    body: "Long, supported postures accompanied by singing bowls. Deeply restful and perfect for the end of a long week.",
    image: "/images/sound-bowl.jpg",
    details: ["75 minutes", "All levels", "Studio"],
  },
  {
    id: "retreats",
    title: "Retreats",
    body: "Seasonal weekends and weeklong escapes combining daily practice, nourishing food and time in nature.",
    image: "/images/retreat-canyon.jpg",
    details: ["2–7 days", "Small groups", "Dates announced seasonally"],
  },
];

export const schedule = [
  { day: "Monday", time: "07:00", name: "Group Flow", where: "Studio" },
  { day: "Tuesday", time: "19:30", name: "Breath & Stillness", where: "Online" },
  { day: "Wednesday", time: "18:00", name: "Strength & Mobility", where: "Studio" },
  { day: "Thursday", time: "07:00", name: "Group Flow", where: "Online" },
  { day: "Friday", time: "19:00", name: "Sound & Restore", where: "Studio" },
  { day: "Sunday", time: "10:00", name: "Group Flow", where: "Studio" },
];

export const footer = {
  groups: [
    {
      title: "Practice",
      links: [
        { label: "Classes", href: "/classes" },
        { label: "Private sessions", href: "/classes#private" },
        { label: "Retreats", href: "/classes#retreats" },
        { label: "Schedule", href: "/classes#schedule" },
      ],
    },
    {
      title: "Rochael",
      links: [
        { label: "About", href: "/about" },
        { label: "Watch", href: "/#watch" },
        { label: "Contact", href: "/contact" },
        { label: "Book a session", href: "/contact#book" },
      ],
    },
  ],
};
