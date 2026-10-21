import Image from "next/image";
import { retreat, site } from "@/content/site";
import { whatsappLink } from "@/lib/url";
import { WhatsAppIcon } from "./WhatsApp";

/** Featured upcoming retreat with a WhatsApp booking button. */
export default function Retreat() {
  if (!retreat) return null;
  const message = `Hi Ro! I'd like to reserve a spot at ${retreat.name}: ${retreat.subtitle} (${retreat.dates}, ${retreat.venue}).`;

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
          <a
            href={whatsappLink(site.whatsapp, message)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
          >
            <WhatsAppIcon size={18} />
            {retreat.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
