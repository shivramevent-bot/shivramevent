import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { gallery } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Shiv Ram Event gallery — photos of past weddings, birthday parties, corporate events and decorations in Ahmedabad.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        image="/images/black-gold-40.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="py-14 sm:py-20">
        <div className="shell">
          <SectionHeader
            label="Our Portfolio"
            title="Photos of Past Events"
            description="Browse our gallery to see firsthand how we execute every project — from weddings and corporate events to birthday parties and themed decorations."
          />

          <GalleryGrid items={gallery} />

          <p className="mt-8 text-center text-[0.9375rem] text-muted">
            Follow us on{" "}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-10 items-center text-gold transition-colors hover:text-gold-light sm:min-h-0"
            >
              Instagram
            </a>{" "}
            for more event photos and updates.
          </p>
        </div>
      </section>

      <CtaBanner
        heading="Want Your Event Featured Here?"
        text="Let us create a stunning celebration that you'll be proud to share."
        actions={[
          { label: "Book an Event", href: "/contact", variant: "gold" },
          { label: "Contact Us", href: site.phoneHref },
        ]}
      />
    </>
  );
}
