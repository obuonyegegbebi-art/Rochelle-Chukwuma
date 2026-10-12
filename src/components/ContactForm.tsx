"use client";

import { useState } from "react";
import { classes, site } from "@/content/site";

/**
 * Opens the visitor's email app with the enquiry pre-filled.
 * Swap this for a real form service / API route when ready.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const subject = `Booking enquiry — ${data.get("interest")} (${name})`;
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      `Interested in: ${data.get("interest")}`,
      `Format: ${data.get("format")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="interest">I&apos;m interested in</label>
        <select id="interest" name="interest" defaultValue={classes[0].title}>
          {classes.map((c) => (
            <option key={c.id}>{c.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </div>
      <div className="field full">
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
          Send enquiry
        </button>
      </div>
      <p className="form-note" aria-live="polite">
        {sent
          ? "Your email app should now be open with your message ready to send."
          : "Ro usually replies within two working days."}
      </p>
    </form>
  );
}
