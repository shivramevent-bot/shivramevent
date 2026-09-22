"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  /** Target number to count up to. */
  value: number;
  /** Rendered straight after the number, e.g. "+" or "%". */
  suffix?: string;
  className?: string;
};

const DURATION = 2600;

/**
 * Counts from zero to `value` the first time it scrolls into view, easing out
 * so the last digits settle rather than snap. Honours reduced motion by
 * rendering the final value immediately.
 */
export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }

    let frame = 0;
    let start: number | null = null;

    const step = (timestamp: number) => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / DURATION, 1);
      // Quadratic rather than cubic ease-out: the cubic tail crawled through
      // its last digits for most of a second, which read as a stall.
      const eased = 1 - Math.pow(1 - progress, 2);

      setDisplay(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            io.unobserve(entry.target);
            frame = requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.5 },
    );

    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
