import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsApp";
import { site } from "@/content/site";
import { siteUrl, whatsappLink } from "@/lib/url";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Yoga, Pilates & Sound Bath`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f5efe6",
};

/** Structured data so search engines understand the business (name, place, contact). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  description: site.description,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.country },
  areaServed: [site.city, "Nigeria"],
  founder: { "@type": "Person", name: site.founder },
  sameAs: [site.instagram, whatsappLink(site.whatsapp)],
  knowsAbout: ["Yoga", "Pilates", "Sound bath", "Corporate wellness"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      id="top"
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
