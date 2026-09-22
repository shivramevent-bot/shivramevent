import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

const socials = [
  { label: "IG", href: site.instagramUrl, name: "Instagram", external: true },
  { label: "WA", href: site.whatsappUrl, name: "WhatsApp", external: true },
  { label: "@", href: site.emailHref, name: "Email", external: false },
];

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-5 font-heading text-base font-semibold text-gold-light">
        {heading}
      </h4>
      <ul className="space-y-0.5 sm:space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-10 items-center text-[0.9375rem] text-muted transition-colors hover:text-gold sm:min-h-0"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink-soft">
      <div className="shell grid gap-10 py-12 sm:gap-8 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <Image
            src="/logo/logo-256.png"
            alt={site.name}
            width={96}
            height={96}
            className="mb-4 size-24 object-contain"
          />
          <p className="mb-5 max-w-[320px] text-[0.9375rem] text-muted">
            {site.description}
          </p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                {...(social.external
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                className="flex size-10 items-center justify-center rounded-full border border-ink-border bg-ink-card text-sm font-semibold text-gold transition-all duration-400 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn heading="Quick Links" links={footerLinks.quick} />
        <FooterColumn heading="Services" links={footerLinks.services} />

        <div>
          <h4 className="mb-5 font-heading text-base font-semibold text-gold-light">
            Contact Us
          </h4>
          <ul className="space-y-2 text-[0.9375rem] text-muted sm:space-y-2.5">
            <li>
              ☎{" "}
              <a
                href={site.phoneHref}
                className="inline-flex min-h-10 items-center transition-colors hover:text-gold sm:min-h-0"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              ✉{" "}
              <a
                href={site.emailHref}
                className="inline-flex min-h-10 items-center break-all transition-colors hover:text-gold sm:min-h-0"
              >
                {site.email}
              </a>
            </li>
            <li>📍 {site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border py-5">
        <div className="shell text-center text-[0.8125rem] text-muted">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved. |
            Event Management Company in {site.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
