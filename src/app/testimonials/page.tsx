import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { TestimonialCard } from "@/components/cards";
import { Stats } from "@/components/Stats";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Testimonials",
  description:
    "Read what clients say about Shiv Ram Event — five-star reviews for engagement decor, themed birthday parties and event management in Ahmedabad.",
  path: "/testimonials",
});

const trustStats = [
  { value: "★★★★★", label: "5-Star Reviews" },
  { value: 500, suffix: "+", label: "Events Completed" },
  { value: 100, suffix: "%", label: "Dedication" },
] as const;

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        image="/images/lilac-staircase.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      <section className="py-14 sm:py-20">
        <div className="shell">
          <SectionHeader
            label="Reviews & Feedback"
            title="What Our Clients Say"
            description="Our clients' happiness is our greatest achievement. Here's what they have to say about their experience with Shiv Ram Event."
          />

          <div className="grid-fit-300 grid gap-6">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 140}>
                <TestimonialCard {...testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-soft py-20 text-center max-[480px]:py-14">
        <div className="shell">
          <Reveal>
            <span className="mb-3 inline-block text-xs uppercase tracking-[0.25em] text-gold">
              Trusted By Many
            </span>
            <h2 className="mb-4 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-cream">
              Join Our Happy Clients
            </h2>
            <p className="mx-auto mb-8 max-w-[640px] text-muted">
              We take pride in delivering events that exceed expectations. Your
              celebration could be our next success story.
            </p>
          </Reveal>

          <Reveal>
            <Stats
              items={trustStats}
              bordered={false}
              className="justify-center gap-8 sm:gap-12"
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Experience the Shiv Ram Event Difference"
        text="Ready to create your own memorable celebration? Get in touch with us today."
        actions={[
          { label: "Get a Quote", href: "/contact", variant: "gold" },
          { label: "Book an Event", href: site.whatsappUrl },
        ]}
      />
    </>
  );
}
