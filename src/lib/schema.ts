import { services } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * JSON-LD builders. Search engines and the LLM crawlers behind ChatGPT /
 * Gemini / Perplexity read this to learn what the business *is* — the name,
 * where it operates, how to contact it — rather than inferring it from prose.
 *
 * Everything here is derived from `site` and `content`, so the markup cannot
 * drift from what the pages actually render.
 *
 * Deliberately absent: `geo`, `openingHours`, `priceRange`, `aggregateRating`.
 * The first three are simply not known, and inventing them would put false
 * claims in machine-readable form. The fourth is a Google policy matter —
 * review markup a business supplies about itself is "self-serving" and is
 * ignored (or penalised) on LocalBusiness, so the on-page testimonials stay
 * plain HTML.
 */

/** Stable @id for the business node, so other nodes can reference it. */
const businessId = `${site.url}/#business`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.street,
  addressLocality: site.city,
  addressRegion: site.region,
  postalCode: site.postalCode,
  addressCountry: "IN",
} as const;

/**
 * The business itself. `EventVenue` would be wrong — they travel to the
 * client — so this is a professional service that plans events.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": businessId,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: `+${site.phoneDisplay.replace(/\D/g, "")}`,
    email: site.email,
    address: postalAddress,
    logo: `${site.url}/logo/logo-1024.png`,
    image: `${site.url}/images/black-gold-40.jpg`,
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "State", name: site.region },
    ],
    knowsAbout: services.map((service) => service.title),
    // Profiles that corroborate this is the same entity.
    sameAs: [site.instagramUrl, site.mapsUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event management services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: `${site.url}/services/${service.slug}`,
        },
      })),
    },
  };
}

/** Ties the domain to the business so the two are understood as one entity. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en-IN",
    publisher: { "@id": businessId },
  };
}

/**
 * Breadcrumbs for an inner page. Takes the same crumb list `PageHero`
 * renders, so the markup and the visible trail cannot disagree.
 */
export function breadcrumbSchema(crumbs: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${site.url}${crumb.href}` } : {}),
    })),
  };
}

/** One service detail page, described as an offering of the business. */
export function serviceSchema(slug: string) {
  const service = services.find((entry) => entry.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.title,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: site.city },
    image: `${site.url}${service.image}`,
  };
}
