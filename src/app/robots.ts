import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Served at /robots.txt. There was no robots file at all before, which leaves
 * crawlers guessing and gives them no route to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
