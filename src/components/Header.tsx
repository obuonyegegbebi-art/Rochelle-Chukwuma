"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const tone = !isHome ? "is-light" : scrolled ? "is-solid" : "";
  const [first, ...rest] = site.name.split(" ");

  return (
    <>
      <header className={`header ${tone}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label={`${site.name} — home`}>
            {first} <span>{rest.join(" ")}</span>
          </Link>

          <nav className="nav" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link href="/contact#book" className="btn btn-clay">
              Book a session
            </Link>
          </div>

          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact#book" className="btn btn-light" onClick={() => setOpen(false)}>
          Book a session
        </Link>
      </div>
    </>
  );
}
