/**
 * Every business constant the site renders lives here. In the legacy HTML the
 * phone number alone appeared ~100 times across ten pages; changing it now
 * means editing one object.
 */

const phoneDigits = "919099020289";

export const site = {
  /**
   * Canonical origin. Everything absolute — canonicals, OG tags, the sitemap,
   * JSON-LD @id values — derives from this, so pointing a custom domain at the
   * site later is a one-line change (or a NEXT_PUBLIC_SITE_URL env var).
   */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivramevent.vercel.app"
  ).replace(/\/$/, ""),

  name: "Shiv Ram Event",
  /** How the logo lockup spells the name — one word, as in the original. */
  wordmark: "Shivram Event",
  legalName: "Shiv Ram Event Company",
  tagline: "Event Management Company",
  city: "Ahmedabad",
  region: "Gujarat",
  country: "India",
  address:
    "Ambica Apartment, Near Vaikunth Society, Ghodasar, Ahmedabad, Gujarat 380050",
  /** The same address split up, for schema.org PostalAddress. */
  street: "Ambica Apartment, Near Vaikunth Society, Ghodasar",
  postalCode: "380050",

  phoneDisplay: "+91 9099020289",
  phoneShort: "9099020289",
  phoneHref: `tel:+${phoneDigits}`,

  email: "shivramevent@gmail.com",
  emailHref: "mailto:shivramevent@gmail.com",

  instagramHandle: "@shivrameventplanerahmedabad",
  instagramUrl: "https://www.instagram.com/shivrameventplanerahmedabad/",

  whatsappUrl: `https://wa.me/${phoneDigits}`,
  mapsUrl: "https://share.google/EWRIKSIM85E7sP4Nf",
  // Kept in step with `address` — the embed pins whatever this query resolves to.
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Ambica+Apartment,+Vaikunth+Society,+Ghodasar,+Ahmedabad,+Gujarat+380050&output=embed",

  description:
    "Professional event management company in Ahmedabad — weddings, corporate events, parties & decoration services.",
} as const;

/** Build a wa.me link with a prefilled message. */
export function whatsappLink(message?: string): string {
  if (!message) return site.whatsappUrl;
  return `${site.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hello Shiv Ram Event, I would like to inquire about your event management services.";

/** Primary navigation. `children` renders as the Services dropdown. */
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Corporate Events", href: "/services/corporate-events" },
      { label: "Birthday Parties", href: "/services/birthday-parties" },
      { label: "Cultural Events", href: "/services/cultural-events" },
      { label: "Decoration Services", href: "/services/decoration-services" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const footerLinks = {
  quick: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
  ],
  services: [
    { label: "Corporate Events", href: "/services/corporate-events" },
    { label: "Birthday Parties", href: "/services/birthday-parties" },
    { label: "Cultural Events", href: "/services/cultural-events" },
    { label: "Decoration Services", href: "/services/decoration-services" },
  ],
} as const;
