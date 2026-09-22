import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Per-page metadata: canonical URL, Open Graph and Twitter card.
 *
 * This exists because Next *replaces* rather than merges `openGraph` when a
 * child segment declares its own. Pages that set `openGraph: { title, url }`
 * silently dropped the root's `images`, so every page except the home page
 * shipped without an og:image. Routing all pages through one builder keeps
 * the card attached.
 *
 * The image path resolves against `metadataBase` and is served by
 * `src/app/opengraph-image.tsx`.
 */
const ogImage = "/opengraph-image";

export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Page title without the brand suffix — the layout template adds it. */
  title: string;
  description: string;
  /** Route-relative path, e.g. "/about". */
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
