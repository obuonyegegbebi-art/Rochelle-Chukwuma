import { site } from "@/content/site";

/**
 * Absolute base URL — used for metadata, link previews, sitemap and robots.
 * Production always uses the custom domain; previews use their own URL.
 */
export const siteUrl =
  process.env.VERCEL_ENV === "production"
    ? site.domain
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

export const whatsappLink = (number: string, text?: string) =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
