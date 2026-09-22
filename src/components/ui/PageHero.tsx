import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Reveal } from "./Reveal";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  image: string;
  imageAlt?: string;
  breadcrumbs: Crumb[];
};

/**
 * Inner-page banner. The legacy build set each page's background image in CSS
 * via a .page-hero--<name> modifier; here the image is a prop, so adding a page
 * no longer means touching the stylesheet.
 */
export function PageHero({
  title,
  image,
  imageAlt = "",
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-border pb-12 pt-16 sm:pb-16 sm:pt-28">
      {/* Same crumbs the trail below renders, so the two cannot disagree. */}
      <JsonLd data={breadcrumbSchema([...breadcrumbs])} />
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,10,10,0.88)_0%,rgba(10,10,10,0.65)_50%,rgba(10,10,10,0.9)_100%)]" />

      <div className="shell relative z-[1] text-center">
        <Reveal>
          <h1 className="mb-3 font-heading text-[clamp(1.65rem,6vw,3rem)] font-semibold text-cream">
            {title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted">
            {breadcrumbs.map((crumb, index) => (
              <Fragment key={crumb.label}>
                {index > 0 ? <span className="text-muted">/</span> : null}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="inline-flex min-h-10 items-center text-muted transition-colors hover:text-gold sm:min-h-0"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
