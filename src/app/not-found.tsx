import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="container">
        <span className="kicker reveal">Page not found</span>
        <h1 className="display-xl reveal" style={{ marginTop: 24 }}>
          <span className="line">Let&apos;s take</span>
          <span className="line">a breath.</span>
        </h1>
        <p className="lead reveal">
          The page you&apos;re looking for has moved or doesn&apos;t exist. Let&apos;s get you back
          to somewhere calm.
        </p>
        <div className="not-found-actions reveal">
          <Link href="/" className="btn btn-clay">
            Back to home
          </Link>
          <Link href="/classes" className="text-link">
            Explore experiences →
          </Link>
        </div>
      </div>
    </section>
  );
}
