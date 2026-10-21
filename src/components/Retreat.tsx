import Image from "next/image";
import { retreat, site } from "@/content/site";
import { whatsappLink } from "@/lib/url";
import { WhatsAppIcon } from "./WhatsApp";

/** Featured upcoming retreat: pay via Selar, or ask a question on WhatsApp. */
export default function Retreat() {
  if (!retreat) return null;
  const message = `Hi Ro! I have a question about ${retreat.name}: ${retreat.subtitle} (${retreat.dates}, ${retreat.venue}).`;

  return (
    <section className="retreat" aria-labelledby="retreat-title">
      <div className="container retreat-inner">
        <div className="retreat-media reveal">
          <Image src={retreat.image} alt="" fill sizes="(max-width: 860px) 100vw, 50vw" />
        </div>
        <div className="retreat-copy reveal">
          <span className="kicker">{retreat.kicker}</span>
          <h2 id="retreat-title" className="retreat-name">
            {retreat.name}
            <span className="retreat-subtitle">{retreat.subtitle}</span>
          </h2>
          <p className="retreat-dates">
            {retreat.dates} <span aria-hidden="true">·</span> {retreat.venue}
          </p>
          <p className="retreat-body">{retreat.body}</p>
          <p className="retreat-words">
            {retreat.words.map((w) => (
              <span key={w}>
                <b>{w[0]}</b>
                {w.slice(1)}.
              </span>
            ))}
          </p>
          <div className="retreat-price">
            <strong>{retreat.price}</strong>
            <span>{retreat.spots}</span>
          </div>
          <div className="retreat-actions">
            {retreat.payLink && (
              <a href={retreat.payLink} target="_blank" rel="noreferrer" className="btn btn-clay">
                Pay now
              </a>
            )}
            <a
              href={whatsappLink(site.whatsapp, message)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost-light"
            >
              <WhatsAppIcon size={18} />
              Ask a question
            </a>
          </div>
          {retreat.payLink && (
            <p className="retreat-note">Secure payment via Selar. Full details are sent after booking.</p>
          )}
        </div>
      </div>
    </section>
  );
}
