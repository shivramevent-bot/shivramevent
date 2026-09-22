"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

/**
 * One IntersectionObserver is shared by every Reveal on the page — the legacy
 * build created a single observer too, and it keeps scroll cost flat no matter
 * how many elements are tagged.
 */
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  observer ??= new IntersectionObserver(
    (entries, self) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          self.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  return observer;
}

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  /** Stagger offset in milliseconds, applied as a transition delay. */
  delay?: number;
  className?: string;
  /** Rendered element — use "li" inside a list so the markup stays valid. */
  as?: "div" | "li";
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = getObserver();

    // No IntersectionObserver (or reduced motion handled in CSS): show it.
    if (!io) {
      node.classList.add("is-revealed");
      return;
    }

    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal={direction}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
