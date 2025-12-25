"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function GalleryCarousel({
  title = "Photo Gallery",
  images = [],
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const count = images.length;

  const clamp = (n) => Math.max(0, Math.min(n, count - 1));
  const goTo = (n) => setIndex(clamp(n));
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // Keep index synced when user swipes/scrolls
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const w = el.clientWidth;
      if (!w) return;
      const i = Math.round(el.scrollLeft / w);
      if (i !== index) setIndex(i);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [index]);

  // When index changes (buttons/dots), snap to that slide
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollTo({ left: index * w, behavior: "smooth" });
  }, [index]);

  // Optional: keyboard arrow support when focused
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  if (!count) return null;

  const canPrev = index > 0;
  const canNext = index < count - 1;

  return (
    <section className="home-gallery" aria-label={title}>
      <div className="home-section-head">
        <h2>{title}</h2>
        <p>Swipe on mobile or use arrows/dots on desktop.</p>
      </div>

      <div className="gallery-shell" tabIndex={0} onKeyDown={onKeyDown}>
        <div className="gallery-track" ref={trackRef}>
          {images.map((img, i) => (
            <div className="gallery-slide" key={`${img.src}-${i}`}>
              <div className="gallery-media">
                <Image
                  src={img.src}
                  alt={img.alt || `Gallery image ${i + 1}`}
                  fill
                  sizes="(max-width: 900px) 92vw, 980px"
                  quality={90}
                  style={{ objectFit: "cover" }}
                />
              </div>

              {img.caption ? (
                <div className="gallery-caption">{img.caption}</div>
              ) : null}
            </div>
          ))}
        </div>

        <button
          className="gallery-nav prev"
          type="button"
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous photo"
        >
          ‹
        </button>

        <button
          className="gallery-nav next"
          type="button"
          onClick={next}
          disabled={!canNext}
          aria-label="Next photo"
        >
          ›
        </button>

        <div className="gallery-dots" aria-label="Gallery navigation dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}