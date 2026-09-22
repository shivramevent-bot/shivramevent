import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { CardGrid, EventCard, ServiceCard } from "@/components/cards";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services, specialisedServices } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description:
    "Event management services in Ahmedabad — corporate events, birthday parties, cultural programs, wedding planning and premium decoration by Shiv Ram Event.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        image="/images/corporate-new-year.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-14 sm:py-20">
        <div className="shell">
          <SectionHeader
            label="What We Offer"
            title="Complete Event Solutions"
            description="From concept to execution, Shiv Ram Event delivers end-to-end event planning, management, and decoration services tailored to your needs."
          />

          <CardGrid>
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 140}>
                <EventCard
                  image={service.image}
                  alt={service.imageAlt}
                  title={service.title}
                  text={service.summary}
                  href={`/services/${service.slug}`}
                />
              </Reveal>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="bg-ink-soft py-14 sm:py-20">
        <div className="shell">
          <SectionHeader
            label="Also Available"
            title="Specialized Event Services"
          />

          <CardGrid>
            {specialisedServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 140}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  text={service.text}
                  href={"href" in service ? service.href : undefined}
                  linkLabel="Learn More"
                />
              </Reveal>
            ))}
          </CardGrid>
        </div>
      </section>

      <CtaBanner
        heading="Need a Custom Event Package?"
        text="Tell us about your event and we'll create a tailored plan that fits your vision and budget."
        actions={[
          { label: "Get a Quote", href: "/contact", variant: "gold" },
          { label: "WhatsApp Us", href: site.whatsappUrl },
        ]}
      />
    </>
  );
}
