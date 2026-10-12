import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { classes, schedule } from "@/content/site";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Yoga, Pilates, sound bath, private sessions, curated experiences and corporate wellness in Abuja.",
};

export default function ClassesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">Experiences</span>
          <h1 className="display-xl reveal" style={{ marginTop: 24 }}>
            <span className="line">Move, breathe,</span>
            <span className="line">connect.</span>
          </h1>
          <p className="lead reveal">
            Yoga, Pilates and sound bath — in a group, one-to-one, or designed around your
            occasion. Every session welcomes beginners.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container class-list">
          {classes.map((c, i) => (
            <article key={c.id} id={c.id} className="class-row reveal">
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2>{c.title}</h2>
                <p>{c.body}</p>
                <div className="chips">
                  {c.details.map((d) => (
                    <span key={d} className="chip">
                      {d}
                    </span>
                  ))}
                </div>
                <Link href="/contact#book" className="text-link">
                  Enquire about {c.title} →
                </Link>
              </div>
              <div className="class-image">
                <Image src={c.image} alt={c.title} width={800} height={600} sizes="(max-width: 860px) 100vw, 40vw" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="schedule" className="section video-section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Weekly schedule</span>
              <h2 className="display-lg">
                This <span className="italic">week</span>
              </h2>
            </div>
            <Link href="/contact#book" className="btn btn-light">
              Reserve a spot
            </Link>
          </div>
          <div className="schedule-wrap reveal">
            <table className="schedule">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Time</th>
                  <th scope="col">Class</th>
                  <th scope="col">Where</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s) => (
                  <tr key={s.day + s.time}>
                    <td>{s.day}</td>
                    <td>{s.time}</td>
                    <td>{s.name}</td>
                    <td>{s.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
