"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const PAGE_SIZE = 9;

export function ServiceGallery({ images, title }: { images: string[]; title: string }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [active, setActive] = useState<number | null>(null);

  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? null : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, step]);

  return (
    <>
      <div className="sv-gallery">
        {images.slice(0, visible).map((src, i) => (
          <button
            key={src}
            type="button"
            className="sv-thumb"
            onClick={() => setActive(i)}
            aria-label={`Open photo ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${title} photo ${i + 1}`}
              fill
              sizes={i === 0 ? "(max-width: 760px) 100vw, 520px" : "(max-width: 760px) 50vw, 260px"}
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>

      {visible < images.length && (
        <div className="sv-more">
          <button type="button" className="btn btn-green" onClick={() => setVisible((v) => v + PAGE_SIZE * 2)}>
            Show more photos ({images.length - visible} remaining)
          </button>
        </div>
      )}

      {active !== null && (
        <div className="sv-lightbox" role="dialog" aria-modal="true" aria-label={`${title} photo viewer`} onClick={() => setActive(null)}>
          <button type="button" className="sv-lb-btn sv-lb-close" aria-label="Close" onClick={() => setActive(null)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <button type="button" className="sv-lb-btn sv-lb-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <Image
            src={images[active]}
            alt={`${title} photo ${active + 1}`}
            width={1600}
            height={1200}
            sizes="92vw"
            priority
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" className="sv-lb-btn sv-lb-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
          <span className="sv-lb-count">{active + 1} / {images.length}</span>
        </div>
      )}
    </>
  );
}
