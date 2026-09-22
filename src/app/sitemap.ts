import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Served at /sitemap.xml. Built from the same `services` array that generates
 * the detail routes, so adding a service cannot leave the sitemap stale.
 *
 * `priority` is relative within the site: the home page and the services hub
 * are the pages worth ranking, the gallery and testimonials support them.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/gallery", priority: 0.6 },
    { path: "/testimonials", priority: 0.6 },
  ];

  return [
    ...pages.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
