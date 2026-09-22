import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { Stats } from "@/components/Stats";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { team } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Shiv Ram Event — a professional event management company in Ahmedabad specializing in weddings, corporate events and decoration services.",
  path: "/about",
});

const aboutStats = [
  { value: 500, suffix: "+", label: "Events Organized" },
  { value: 100, suffix: "%", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Theme Designs" },
] as const;

const missionVision = [
  {
    title: "Our Mission",
    text: "To deliver well-planned, creative, and memorable events that exceed our clients' expectations. We strive to provide stress-free event management with attention to every detail, ensuring each celebration becomes an unforgettable experience.",
  },
  {
    title: "Our Vision",
    text: "To become a trusted and leading event management company known for innovation, excellence, and creating unforgettable experiences for clients across India.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        image="/images/elegant-50-gold.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="py-14 sm:py-20">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <span className="mb-3 inline-block text-xs uppercase tracking-[0.25em] text-gold">
              Our Story
            </span>
            <h2 className="mb-4 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-cream">
              Passion for Memorable Events
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                {site.legalName} started with a passion for organizing memorable
                events. Our goal is to provide professional event planning,
                management, and promotion services that help clients celebrate
                important moments and achieve successful event outcomes.
              </p>
              <p>
                We focus on creativity, reliability, and customer satisfaction in
                every event we manage. From intimate gatherings to grand
                celebrations, our team brings your vision to life with meticulous
                planning and stunning execution.
              </p>
              <p>
                Based in {site.city}, we specialize in wedding planning,
                corporate event management, birthday party decoration, baby
                shower decoration, theme-based event decor, photo booth setup,
                and grand entry arrangements.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink-border">
              <Image
                src="/images/fairy-first-birthday.jpg"
                alt="Fairy themed first birthday celebration styled by Shiv Ram Event"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-soft py-14 sm:py-20">
        <div className="shell">
          <SectionHeader label="Our Purpose" title="Mission & Vision" />

          <div className="grid gap-6 lg:grid-cols-2">
            {missionVision.map((item, index) => (
              <Reveal key={item.title} delay={index * 140}>
                <div className="h-full rounded-lg border border-ink-border bg-ink-card p-6 transition-colors duration-400 hover:border-gold-dark sm:p-8">
                  <h3 className="mb-3 font-heading text-xl font-semibold text-gold-light">
                    {item.title}
                  </h3>
                  <p className="text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <Stats
              items={aboutStats}
              bordered={false}
              className="justify-around gap-x-5 gap-y-6 rounded-lg border border-ink-border bg-ink-card p-6 text-center sm:gap-12 sm:p-8"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="shell">
          <SectionHeader
            label="The People Behind"
            title="Meet Our Team"
            description="Our experienced team is dedicated to making every event a masterpiece."
          />

          <div className="grid-fit-240 grid gap-6">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 140}>
                <div className="group h-full rounded-lg border border-ink-border bg-ink-card p-6 text-center sm:p-8 transition-[transform,border-color,box-shadow] duration-[500ms] ease-soft hover:-translate-y-2 hover:border-gold hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full border border-gold-dark bg-[rgba(197,160,89,0.08)] font-heading text-xl font-semibold text-gold transition-transform duration-[500ms] group-hover:scale-110">
                    {member.initials}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-cream">
                    {member.name}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.12em] text-muted">
                    {member.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Let's Create Something Beautiful Together"
        text="Reach out to our team and start planning your next celebration today."
        actions={[
          { label: "Book an Event", href: "/contact", variant: "gold" },
          { label: "Contact Us", href: site.phoneHref },
        ]}
      />
    </>
  );
}
