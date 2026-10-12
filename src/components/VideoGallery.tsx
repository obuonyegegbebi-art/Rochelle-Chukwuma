"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { VideoItem } from "@/content/site";

function PlayIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
      <path d="M17 10 1 19V1z" fill="currentColor" />
    </svg>
  );
}

export default function VideoGallery({ videos }: { videos: VideoItem[] }) {
  const [active, setActive] = useState<VideoItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="video-grid">
        {videos.map((v, i) => (
          <button
            key={v.title}
            className="video-card reveal"
            style={{ "--delay": `${i * 120}ms` } as React.CSSProperties}
            onClick={() => setActive(v)}
            aria-label={`Play: ${v.title}`}
          >
            <div className="video-thumb">
              <Image
                src={v.poster}
                alt=""
                fill
                sizes="(max-width: 800px) 50vw, 25vw"
              />
            </div>
            <span className="play">
              <PlayIcon />
            </span>
            <span className="video-caption">
              <strong>{v.title}</strong>
              <span>{v.length}</span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button className="modal-close" aria-label="Close video" onClick={() => setActive(null)} autoFocus>
            ×
          </button>
          <div
            className={`modal-frame ${active.vertical ? "vertical" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {active.embed ? (
              <iframe
                src={active.embed}
                title={active.title}
                allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                allowFullScreen
              />
            ) : active.src ? (
              <video src={active.src} poster={active.poster} controls autoPlay playsInline />
            ) : (
              <>
                <Image src={active.poster} alt="" fill sizes="1100px" />
                <p className="modal-note">
                  Video coming soon — add a file or YouTube link for “{active.title}” in
                  src/content/site.ts.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
