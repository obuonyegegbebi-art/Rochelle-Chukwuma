import Image from "next/image";
import Link from "next/link";
import Media from "@/components/Media";
import VideoGallery from "@/components/VideoGallery";
import {
  cta,
  feature,
  instagramPosts,
  hero,
  intro,
  offerings,
  pillars,
  testimonial,
  site,
  videos,
} from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero — Ro's studio portrait */}
      <section className="hero hero--photo">
        <div className="hero-photo">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            preload
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
        <div className="container hero-content">
          <span className="kicker reveal">{hero.eyebrow}</span>
          <h1 className="display-xl reveal" style={{ "--delay": "120ms" } as React.CSSProperties}>
            {hero.title.map((line) => (
              <span key={line} className="line">
                {line}
              </span>
            ))}
          </h1>
          <div className="hero-bottom reveal" style={{ "--delay": "240ms" } as React.CSSProperties}>
            <p>{hero.body}</p>
            <div className="hero-actions">
              <Link href={hero.primary.href} className="btn btn-clay">
                {hero.primary.label}
              </Link>
              <Link href={hero.secondary.href} className="text-link">
                {hero.secondary.label} →
              </Link>
            </div>
          </div>
        </div>
        <span className="scroll-cue">Scroll</span>
      </section>

      {/* Intro statement */}
      <section className="section">
        <div className="container intro">
          <span className="kicker reveal">{intro.kicker}</span>
          <div>
            <h2 className="display-md reveal">{intro.statement}</h2>
            <div className="intro-body reveal">
              <p>{intro.body}</p>
              <Link href={intro.link.href} className="text-link">
                {intro.link.label} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings — 3 x 2 grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Experiences</span>
              <h2 className="display-lg">
                Ways to <span className="italic">feel well</span>
              </h2>
            </div>
            <Link href="/classes" className="text-link">
              All experiences →
            </Link>
          </div>
          <div className="card-grid">
            {offerings.map((o, i) => (
              <Link
                key={o.title}
                href={o.href}
                className="card reveal"
                style={{ "--delay": `${(i % 3) * 120}ms` } as React.CSSProperties}
              >
                <div className="card-media">
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                  <span className="card-meta">{o.meta}</span>
                </div>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <span className="text-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed feature video band */}
      <section className="band">
        <Media src={feature.video.src} poster={feature.video.poster} />
        <div className="container">
          <span className="kicker reveal">{feature.kicker}</span>
          <h2 className="display-lg reveal">{feature.title}</h2>
          <p className="reveal">{feature.body}</p>
        </div>
      </section>

      {/* Video gallery */}
      <section id="watch" className="section video-section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Watch</span>
              <h2 className="display-lg">
                Practise <span className="italic">anywhere</span>
              </h2>
            </div>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="text-link">
              More on Instagram →
            </a>
          </div>
          <VideoGallery videos={videos} />
        </div>
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal" style={{ borderBottom: 0, paddingBottom: 0 }}>
            <div>
              <span className="kicker">The approach</span>
              <h2 className="display-lg">
                How we <span className="italic">practise</span>
              </h2>
            </div>
          </div>
          <div className="pillars">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="pillar reveal"
                style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <span className="num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section testimonial">
        <div className="container">
          <blockquote className="reveal">
            <span className="mark" aria-hidden="true">
              “
            </span>
            <p>{testimonial.quote}</p>
            <footer>
              {testimonial.name} · <span>{testimonial.detail}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* From Instagram */}
      <section className="section insta">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">From Instagram</span>
              <h2 className="display-lg">
                <a href={site.instagram} target="_blank" rel="noreferrer">
                  {site.instagramHandle}
                </a>
              </h2>
            </div>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Follow on Instagram
            </a>
          </div>
          <div className="insta-grid">
            {instagramPosts.map((p, i) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="insta-tile reveal"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <Image src={p.image} alt={p.alt} fill sizes="(max-width: 700px) 50vw, 17vw" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
