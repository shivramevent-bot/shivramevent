"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The gold progress bar pinned to the top of the viewport plus the back-to-top
 * button. Both react to the same scroll listener, which is throttled to one
 * animation frame — the legacy script used the same `ticking` guard.
 */
export function ScrollUtilities() {
  const barRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrolled = document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        if (barRef.current) {
          const percent = height > 0 ? (scrolled / height) * 100 : 0;
          barRef.current.style.width = `${percent}%`;
        }

        setShowTop(scrolled > 350);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden
        ref={barRef}
        className="fixed left-0 top-0 z-[2000] h-[3px] w-0 bg-[linear-gradient(90deg,var(--color-gold-dark),var(--color-gold),var(--color-gold-light))]"
      />

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-6 z-[900] flex size-11 cursor-pointer items-center justify-center rounded-full border border-gold bg-ink-card text-lg text-gold transition-all duration-400 hover:bg-gold hover:text-ink ${
          showTop
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-3 opacity-0"
        }`}
      >
        ↑
      </button>
    </>
  );
}
