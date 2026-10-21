"use client";

import Link from "next/link";
import { useState } from "react";
import { classes, retreat, site } from "@/content/site";
import { whatsappLink } from "@/lib/url";

/**
 * Builds the enquiry into a WhatsApp message to Ro and opens WhatsApp
 * (app on phones, WhatsApp Web on desktop). Nothing is stored by the site.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const line = (label: string, key: string) => {
      const v = String(data.get(key) ?? "").trim();
      return v ? `${label}: ${v}` : null;
    };
    const text = [
      `Hi Ro! I'd like to book with ${site.name}.`,
      "",
      line("Name", "name"),
      line("Email", "email"),
      line("Interested in", "interest"),
      line("Format", "format"),
      line("Message", "message"),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(whatsappLink(site.whatsapp, text), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email (optional)</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="interest">I&apos;m interested in</label>
        <select id="interest" name="interest" defaultValue={classes[0].title}>
          {classes.map((c) => (
            <option key={c.id}>{c.title}</option>
          ))}
          {retreat && <option>{`${retreat.name} retreat (${retreat.dates})`}</option>}
          <option>Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="format">Format</label>
        <select id="format" name="format" defaultValue="Group class">
          <option>Group class</option>
          <option>Private (one-to-one)</option>
          <option>Event or group booking</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">Tell Ro a little about you</label>
        <textarea id="message" name="message" placeholder="Experience, goals, occasion, group size, availability…" />
      </div>
      <div className="field full">
        <button type="submit" className="btn btn-clay">
          Send on WhatsApp
        </button>
      </div>
      <p className="form-note" aria-live="polite">
        {sent ? (
          "WhatsApp should now be open with your message ready — just press send."
        ) : (
          <>
            Your message opens in WhatsApp, ready to send to Ro. See our{" "}
            <Link href="/privacy">privacy policy</Link>.
          </>
        )}
      </p>
    </form>
  );
}
