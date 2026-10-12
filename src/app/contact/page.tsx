import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: `Book a class, private session or wellness experience with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">Contact</span>
          <h1 className="display-xl reveal" style={{ marginTop: 24 }}>
            <span className="line">Let&apos;s begin</span>
            <span className="line">together.</span>
          </h1>
          <p className="lead reveal">
            Book a class, plan a private session or wellness experience, or just say hello.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div id="book" className="container contact-grid">
          <div className="contact-info reveal">
            <span className="kicker">Get in touch</span>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt>Follow</dt>
                <dd>
                  <a href={site.instagram} target="_blank" rel="noreferrer">
                    {site.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
