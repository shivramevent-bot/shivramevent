import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { getService, services } from "@/lib/content";
import { serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    // The legacy pages carried their own full <title>, so opt out of the
    // "%s | Shiv Ram Event" template rather than double up the brand.
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service.slug)} />
      <PageHero
        title={service.title}
        image={service.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-14 sm:py-20">
        <div className="shell">
          <div className="mb-12 grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal direction="left">
              <span className="mb-3 inline-block text-xs uppercase tracking-[0.25em] text-gold">
                {service.label}
              </span>
              <h2 className="mb-4 font-heading text-[clamp(1.5rem,3vw,2rem)] font-semibold text-gold-light">
                {service.heading}
              </h2>
              {service.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mb-4 text-muted">
                  {paragraph}
                </p>
              ))}
              <Button href="/contact" className="mt-2">
                Get a Quote
              </Button>
            </Reveal>

            <Reveal direction="right">
              <div className="relative h-[240px] overflow-hidden rounded-lg border border-ink-border sm:h-[360px]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <ul className="grid-fit-240 grid gap-4">
            {service.features.map((feature, index) => (
              <Reveal
                as="li"
                key={feature.title}
                delay={index * 120}
                className="h-full rounded border border-ink-border border-l-[3px] border-l-gold bg-ink-card p-5 text-[0.9375rem] text-muted transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
              >
                <strong className="mb-1.5 block font-heading text-[0.9375rem] font-semibold text-gold-light">
                  {feature.title}
                </strong>
                {feature.text}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        heading={service.cta.heading}
        text={service.cta.text}
        actions={[
          { label: "Book an Event", href: "/contact", variant: "gold" },
          { label: "WhatsApp Us", href: site.whatsappUrl },
        ]}
      />
    </>
  );
}
