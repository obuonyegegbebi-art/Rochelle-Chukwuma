import Link from "next/link";
import { footer, site } from "@/content/site";
import Year from "./Year";

const icons = {
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  YouTube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
    </svg>
  ),
  TikTok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.5 2.8 2.4 4.5 5 4.8" />
    </svg>
  ),
};

export default function Footer() {
  const [first, ...rest] = site.name.split(" ");
  const socials = [
    { label: "Instagram" as const, href: site.instagram },
    { label: "YouTube" as const, href: site.youtube },
    { label: "TikTok" as const, href: site.tiktok },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              {first} <span>{rest.join(" ")}</span>
            </div>
            <p>{site.tagline}</p>
          </div>
          {footer.groups.map((g) => (
            <div key={g.title}>
              <h4>{g.title}</h4>
              <ul>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-social">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {icons[s.label]}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-legal">
          <span>
            © <Year /> {site.name}. All rights reserved.
          </span>
          <nav aria-label="Legal">
            <Link href="/contact">Contact</Link>
            <a href="#top">Back to top ↑</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
