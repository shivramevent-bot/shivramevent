import Image from "next/image";
import { CardGrid, EventCard, ServiceCard, TestimonialCard } from "@/components/cards";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredEvents, services, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

const heroStats = [
  { value: 500, suffix: "+", label: "Events Managed" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
] as const;


export default function HomePage() {
  return (
    <>
      {/* Hero — the agency's own black-and-gold balloon wall sits behind the
          same dark diagonal wash the legacy build used. */}
      <section className="relative flex min-h-[calc(100dvh-var(--spacing-header))] items-center overflow-hidden py-16 sm:py-20">
        <Image
          src="/images/black-gold-40.jpg"
          alt="Luxury black and gold birthday balloon decoration by Shiv Ram Event, event planner in Ahmedabad"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.72)_50%,rgba(10,10,10,0.88)_100%)]" />

        <div className="shell relative z-[1]">
          <Reveal className="max-w-[720px]">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-gold sm:text-[0.8125rem] sm:tracking-[0.3em]">
              {site.city}&apos;s Trusted Event Planners
            </p>
            <h1 className="mb-5 font-heading text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.2] text-cream">
              Creating <span className="text-gold">Unforgettable</span>{" "}
              Celebrations
            </h1>
            <p className="mb-8 max-w-[560px] text-base text-muted sm:text-[1.0625rem]">
              Shiv Ram Event is a professional event management company in{" "}
              {site.city}, offering complete event planning and decoration
              services from weddings and corporate events to themed birthday
              parties and baby showers.
            </p>
            <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:gap-4">
              <Button href="/contact">Book an Event</Button>
              <Button href="/services" variant="outline">
                Our Services
              </Button>
            </div>
            <Stats items={heroStats} className="mt-10 sm:mt-12" />
          </Reveal>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-14 sm:py-20">
        <div className="shell">
          <SectionHeader
            label="What We Do"
            title="Our Services Overview"
            description="Shiv Ram Event Company provides professional event planning, management, and promotion services. We organize weddings, corporate events, birthday parties, cultural programs, and special occasions with complete coordination, decoration, and flawless execution."
          />

          <CardGrid>
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 140}>
                <ServiceCard
                  number={String(index + 1).padStart(2, "0")}
                  title={service.title}
                  text={service.blurb}
                  href={`/services/${service.slug}`}
                />
              </Reveal>
            ))}
          </CardGrid>

          <div className="mt-10 text-center">
            <Button href="/services">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-ink-soft py-14 sm:py-20">
        <div className="shell">
          <SectionHeader
            label="Our Work"
            title="Featured Events"
            description="A glimpse of the memorable celebrations we have crafted for our clients."
          />

          <CardGrid>
            {featuredEvents.map((event, index) => (
              <Reveal key={event.title} delay={index * 140}>
                <EventCard
                  image={event.image}
                  alt={event.alt}
                  title={event.title}
                  text={event.text}
                />
              </Reveal>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* About preview */}
      <section className="py-14 sm:py-20">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink-border">
              <Image
                src="/images/lilac-staircase.jpg"
                alt="Lilac and white balloon garland styled along a staircase"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <span className="mb-3 inline-block text-xs uppercase tracking-[0.25em] text-gold">
              About Us
            </span>
            <h2 className="mb-4 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-cream">
              Stress-Free Event Management with Attention to Every Detail
            </h2>
            <p className="mb-4 text-muted">
              Our experienced team focuses on delivering creative event
              solutions, high-quality decorations, and seamless event
              coordination across {site.city}.
            </p>
            <p className="mb-8 text-muted">
              Shiv Ram Events is known for reliable service, customized event
              planning, and memorable celebration experiences. We aim to make
              your special occasions truly unforgettable.
            </p>
            <Button href="/about">Learn More About Us</Button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink-soft py-14 sm:py-20">
        <div className="shell">
          <SectionHeader label="Client Love" title="What Our Clients Say" />

          <div className="grid-fit-300 grid gap-6">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 140}>
                <TestimonialCard {...testimonial} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/testimonials" variant="outline">
              Read All Testimonials
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Plan Your Dream Event?"
        text="Contact us today for a free consultation. Let Shiv Ram Event turn your vision into a spectacular celebration."
        actions={[
          { label: "Get a Quote", href: "/contact", variant: "gold" },
          { label: `Call ${site.phoneShort}`, href: site.phoneHref },
          { label: "WhatsApp Us", href: site.whatsappUrl },
        ]}
      />
    </>
  );
}
