import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/ContactForm";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Shiv Ram Event in Ahmedabad for event planning and decoration — call, email or send an enquiry over WhatsApp.",
  path: "/contact",
});

const contactItems = [
  {
    icon: "☎",
    heading: "Phone",
    lines: [{ text: site.phoneDisplay, href: site.phoneHref }],
  },
  {
    icon: "✉",
    heading: "Email",
    lines: [{ text: site.email, href: site.emailHref }],
  },
  {
    icon: "📍",
    heading: "Location",
    lines: [
      { text: site.address },
      { text: "View on Google Maps", href: site.mapsUrl, external: true },
    ],
  },
  {
    icon: "IG",
    heading: "Instagram",
    lines: [
      { text: site.instagramHandle, href: site.instagramUrl, external: true },
    ],
  },
  {
    icon: "WA",
    heading: "WhatsApp",
    lines: [
      {
        text: "Chat with us on WhatsApp",
        href: site.whatsappUrl,
        external: true,
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        image="/images/mocha-arch.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="py-14 sm:py-20">
        <div className="shell grid gap-10 sm:gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <span className="mb-3 inline-block text-xs uppercase tracking-[0.25em] text-gold">
              Get In Touch
            </span>
            <h2 className="mb-4 font-heading text-2xl font-semibold text-cream sm:text-[1.75rem]">
              We&apos;d Love to Hear From You
            </h2>
            <p className="mb-8 text-muted">
              Have an event coming up? Contact Shiv Ram Event for a free
              consultation. We&apos;re here to help you plan the perfect
              celebration.
            </p>

            <ul className="space-y-6">
              {contactItems.map((item) => (
                <li key={item.heading} className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-gold-dark text-xl text-gold">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-[0.9375rem] font-semibold text-gold-light">
                      {item.heading}
                    </h3>
                    {item.lines.map((line) => (
                      <p
                        key={line.text}
                        className="text-[0.9375rem] text-muted"
                      >
                        {line.href ? (
                          <a
                            href={line.href}
                            {...("external" in line && line.external
                              ? { target: "_blank", rel: "noopener" }
                              : {})}
                            className="inline-flex min-h-10 items-center transition-colors hover:text-gold sm:min-h-0"
                          >
                            {line.text}
                          </a>
                        ) : (
                          line.text
                        )}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>

        <div className="shell mt-12">
          <Reveal>
            <div className="h-[300px] overflow-hidden rounded-lg border border-ink-border sm:h-[400px]">
              <iframe
                src={site.mapsEmbedUrl}
                title={`${site.name} location — ${site.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="size-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Prefer to Call Directly?"
        text="Our team is available to discuss your event requirements anytime."
        actions={[
          {
            label: `Call ${site.phoneShort}`,
            href: site.phoneHref,
            variant: "gold",
          },
          { label: "WhatsApp Us", href: site.whatsappUrl },
        ]}
      />
    </>
  );
}
