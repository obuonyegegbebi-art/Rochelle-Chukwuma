import Link from "next/link";
import { footer, site } from "@/content/site";
import Year from "./Year";
import { whatsappLink } from "@/lib/url";
import { WhatsAppIcon } from "./WhatsApp";

const icons = {
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function Footer() {
  const socials = [
    { label: "Instagram" as const, href: site.instagram },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              {site.brand.lead} <span>{site.brand.accent}</span>
            </div>
            <p className="footer-by">By {site.founder}</p>
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
          <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer" className="footer-wa">
            <WhatsAppIcon size={18} />
            Chat on WhatsApp · {site.phone}
          </a>
          <div className="socials">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="handle">
              {site.instagramHandle}
            </a>
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
            <Link href="/privacy">Privacy</Link>
            <a href="#top">Back to top ↑</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
