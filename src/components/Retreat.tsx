import Image from "next/image";
import { retreat, site } from "@/content/site";
import { whatsappLink } from "@/lib/url";
import { WhatsAppIcon } from "./WhatsApp";

/** Featured upcoming retreat with a WhatsApp booking button. */
export default function Retreat() {
  if (!retreat) return null;
  const message = `Hi Ro! I'd like to reserve a spot at the ${retreat.name} retreat (${retreat.dates}).`;

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
          </h2>
          <p className="retreat-dates">{retreat.dates}</p>
          <p className="retreat-body">{retreat.body}</p>
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
