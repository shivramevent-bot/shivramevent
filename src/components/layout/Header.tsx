"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { navigation, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /** Any link click inside the sheet navigates, so close it on the way out. */
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  /**
   * Active state is derived from the route, so no page has to hand-set it.
   * "/services" also lights up for its detail pages, matching the old markup
   * where service pages marked both the parent and their own dropdown entry.
   */
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    /*
     * `sticky` also establishes the containing block that anchors the mobile
     * nav sheet to the header's own bottom edge.
     * The sheet used to be `fixed` at `--spacing-header + 40px`, a figure that
     * assumed the TopBar was still on screen — once the page scrolled and the
     * sticky header pinned to the top, the sheet detached and floated 40px
     * below it.
     */
    <header className="sticky top-0 z-[1000] border-b border-ink-border bg-[rgba(10,10,10,0.95)] backdrop-blur-[12px]">
      <div className="shell flex h-header items-center justify-between gap-3 sm:gap-4">
        {/*
         * `min-w-0` lets the lockup give up space to the actions instead of
         * pushing them off screen; the wordmark truncates as a last resort so
         * the header can never overflow, however narrow the device.
         */}
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
          <Image
            src="/logo/logo-256.png"
            alt=""
            width={80}
            height={80}
            priority
            className="size-11 shrink-0 object-contain min-[400px]:size-[52px] sm:size-20"
          />
          <span className="flex min-w-0 flex-col justify-center gap-[0.15rem] leading-[1.15]">
            <span className="truncate font-heading text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-gold-light min-[400px]:text-[0.95rem] min-[400px]:tracking-[0.08em] sm:text-2xl sm:tracking-[0.12em]">
              {site.wordmark}
            </span>
            <span
              aria-hidden
              className="relative my-[0.2rem] hidden h-px w-full max-w-[120px] bg-[linear-gradient(90deg,var(--color-gold-dark),var(--color-gold-light))] after:absolute after:left-1/2 after:top-1/2 after:size-[5px] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:bg-gold-light after:content-[''] min-[420px]:block sm:max-w-[180px]"
            />
            <span className="hidden truncate font-body text-[0.5rem] font-semibold uppercase tracking-[0.1em] text-gold min-[420px]:block sm:text-[0.6875rem] sm:tracking-[0.18em]">
              {site.tagline}
            </span>
          </span>
        </Link>

        {/*
         * The desktop nav needs ~410px on its own; at `md` it shared a 768px
         * row with the lockup and the CTAs and blew the layout out to 1001px.
         * It now waits for `lg`, and below that the sheet takes over.
         */}
        <nav
          id="main-nav"
          onClick={closeMenu}
          className={`max-lg:absolute max-lg:inset-x-0 max-lg:top-full max-lg:max-h-[calc(100dvh-var(--spacing-header))] max-lg:overflow-y-auto max-lg:overscroll-contain max-lg:border-b max-lg:border-ink-border max-lg:bg-ink max-lg:p-4 max-lg:shadow-[0_18px_36px_rgba(0,0,0,0.55)] max-lg:transition-all max-lg:duration-400 ${
            menuOpen
              ? "max-lg:visible max-lg:translate-y-0 max-lg:opacity-100"
              : "max-lg:invisible max-lg:-translate-y-[120%] max-lg:opacity-0"
          }`}
        >
          <ul className="flex items-center max-lg:flex-col max-lg:items-stretch">
            {navigation.map((item) =>
              "children" in item ? (
                <li key={item.href} className="group relative">
                  <div className="flex items-center max-lg:justify-between max-lg:border-b max-lg:border-ink-border">
                    <Link
                      href={item.href}
                      className={`block rounded px-2 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.02em] transition-colors hover:text-gold max-lg:flex max-lg:min-h-12 max-lg:flex-1 max-lg:items-center max-lg:px-4 max-lg:text-[0.8125rem] ${
                        isActive(item.href) ? "text-gold" : "text-cream"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services menu"
                      aria-expanded={servicesOpen}
                      onClick={(event) => {
                        // Expanding the submenu must not close the sheet.
                        event.stopPropagation();
                        setServicesOpen((open) => !open);
                      }}
                      className="cursor-pointer text-[0.6rem] text-gold-dark max-lg:flex max-lg:size-12 max-lg:shrink-0 max-lg:items-center max-lg:justify-center lg:pointer-events-none lg:px-0 lg:py-0"
                    >
                      ▾
                    </button>
                  </div>

                  <ul
                    className={`min-w-[210px] max-lg:bg-ink-soft lg:invisible lg:absolute lg:left-0 lg:top-[calc(100%+0.5rem)] lg:z-[100] lg:translate-y-[6px] lg:rounded-md lg:border lg:border-ink-border lg:bg-ink-card lg:py-2 lg:opacity-0 lg:shadow-[0_8px_24px_rgba(0,0,0,0.4)] lg:transition-all lg:duration-400 lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ${
                      servicesOpen ? "max-lg:block" : "max-lg:hidden"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2 text-[0.6875rem] transition-colors hover:bg-[rgba(197,160,89,0.08)] hover:text-gold max-lg:flex max-lg:min-h-12 max-lg:items-center max-lg:border-b max-lg:border-ink-border max-lg:pl-7 max-lg:text-xs ${
                            pathname === child.href ? "text-gold" : "text-cream"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded px-2 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.02em] transition-colors hover:text-gold max-lg:flex max-lg:min-h-12 max-lg:items-center max-lg:border-b max-lg:border-ink-border max-lg:px-4 max-lg:text-[0.8125rem] ${
                      isActive(item.href) ? "text-gold" : "text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/*
           * Visibility lives on a wrapper, not on the Button itself: `Button`
           * hardcodes `inline-flex`, and Tailwind emits `inline-flex` after
           * `hidden`, so a `hidden` passed through `className` lost the
           * cascade and this CTA rendered on phones — the single biggest
           * contributor to the header overflowing the viewport.
           */}
          <span className="hidden lg:block">
            <Button
              href="/contact"
              variant="outline"
              className="px-3.5 py-[0.45rem] text-[0.625rem]"
            >
              Get a Quote
            </Button>
          </span>

          <Button
            href={site.phoneHref}
            aria-label="Call now"
            className="min-h-11 shrink-0 px-3.5 text-[0.625rem] max-[379px]:size-11 max-[379px]:px-0"
          >
            <span aria-hidden className="text-base min-[380px]:hidden">
              ☎
            </span>
            <span className="max-[379px]:hidden">Call Now</span>
          </Button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-11 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-gold transition-transform duration-400 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gold transition-opacity duration-400 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gold transition-transform duration-400 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
