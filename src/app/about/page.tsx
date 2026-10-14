import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, cta, pillars } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: about.lead,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">About</span>
          <h1 className="display-xl reveal" style={{ marginTop: 24 }}>
            {about.title.map((line) => (
              <span key={line} className="line">
                {line}
              </span>
            ))}
          </h1>
          <p className="lead reveal">{about.lead}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div className="split-media reveal">
            <Image src={about.portrait} alt="Yoga practice in the garden" fill loading="eager" sizes="(max-width: 860px) 100vw, 50vw" />
          </div>
          <div className="about-copy reveal">
            {about.blocks.map((b) => (
              <div key={b.title} className="about-block">
                <h2>{b.title}</h2>
                <p>{b.body}</p>
              </div>
            ))}
            <p className="about-closing">{about.closing}</p>
            <Link href={about.cta.href} className="btn btn-clay">
              {about.cta.label}
            </Link>
            <div className="stats">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wide-image reveal">
        <Image src={about.wide} alt="A garden yoga session in Abuja" fill sizes="100vw" />
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head reveal" style={{ borderBottom: 0, paddingBottom: 0 }}>
            <div>
              <span className="kicker">What I believe</span>
              <h2 className="display-lg">
                The <span className="italic">principles</span>
              </h2>
            </div>
          </div>
          <div className="pillars">
            {pillars.map((p, i) => (
              <div key={p.title} className="pillar reveal" style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}>
                <span className="num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-inner">
          <div className="reveal">
            <h2 className="display-lg">{cta.title}</h2>
            <p>{cta.body}</p>
          </div>
          <Link href={cta.primary.href} className="btn btn-light reveal">
            {cta.primary.label}
          </Link>
        </div>
      </section>
    </>
  );
}
