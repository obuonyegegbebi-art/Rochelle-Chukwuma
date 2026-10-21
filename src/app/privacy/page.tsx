import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/url";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles your personal information.`,
};

const updated = "12 October 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">Privacy</span>
          <h1 className="display-xl reveal" style={{ marginTop: 24 }}>
            <span className="line">Your privacy,</span>
            <span className="line">simply put.</span>
          </h1>
          <p className="lead reveal">Last updated {updated}.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="prose">
          <h2>Who we are</h2>
          <p>
            This website belongs to {site.name}, run by {site.founder}, based in {site.location}. If you
            have any questions about your information, message us on{" "}
            <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer">
              WhatsApp ({site.phone})
            </a>
            .
          </p>

          <h2>What we collect</h2>
          <p>
            We only collect what you choose to send us. When you use the enquiry form, your
            details (name, phone or email, what you&apos;re interested in and your message) are
            put into a WhatsApp message on your own device. Nothing is sent until you press send
            in WhatsApp, and this website does not store a copy.
          </p>
          <p>
            We use your details only to reply to your enquiry and arrange your session. We never
            sell your information or share it for marketing.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This website does not use advertising or tracking cookies. Our hosting provider
            (Vercel) keeps standard technical logs, such as IP addresses, to run the site securely.
          </p>
          <p>
            Some pages show content from Instagram. When you play an Instagram video, Instagram
            (Meta) may set its own cookies under its own privacy policy. Messages sent through
            WhatsApp are also covered by WhatsApp&apos;s privacy policy.
          </p>

          <h2>Your rights</h2>
          <p>
            Under the Nigeria Data Protection Act 2023, you can ask us what information we hold
            about you, ask us to correct it, or ask us to delete it. Just send us a message and
            we&apos;ll take care of it.
          </p>

          <h2>Changes</h2>
          <p>
            If we change how we handle your information, we&apos;ll update this page and the date at
            the top.
          </p>

          <p style={{ marginTop: 40 }}>
            <Link href="/contact" className="text-link">
              Contact us →
            </Link>
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
