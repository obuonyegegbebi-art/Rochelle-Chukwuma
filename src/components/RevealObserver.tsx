"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Adds `.in` to every `.reveal` element as it scrolls into view. */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    const show = (el: Element) => el.classList.add("in");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );
    els.forEach((el) => io.observe(el));

    // Reveal anything already on screen (e.g. landing on an #anchor) and
    // everything above it, so content can never stay hidden.
    const sweep = () => {
      const vh = window.innerHeight;
      for (const el of els) {
        if (el.getBoundingClientRect().top < vh) {
          show(el);
          io.unobserve(el);
        }
      }
    };
    const raf = requestAnimationFrame(sweep);
    window.addEventListener("hashchange", sweep);
    window.addEventListener("scrollend", sweep);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", sweep);
      window.removeEventListener("scrollend", sweep);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
