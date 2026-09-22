import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * The 1200x630 card social platforms and chat apps show when the site is
 * shared. There was no og:image at all before, which is why links pasted into
 * WhatsApp — the agency's main channel — previewed as bare text.
 *
 * Drawn rather than photographed: every event photo in `public/images` is
 * portrait (3:4), so any of them would have been center-cropped to ribbons at
 * this aspect ratio.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline} in ${site.city}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1508 55%, #0a0a0a 100%)",
          color: "#f5f5f5",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Gold rule across the top, echoing the site's section dividers. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background:
              "linear-gradient(90deg, #9a7b3c, #d4af37 50%, #9a7b3c)",
          }}
        />

        <div
          style={{
            fontSize: 34,
            letterSpacing: 14,
            textTransform: "uppercase",
            color: "#c5a059",
            marginBottom: 26,
          }}
        >
          {site.city}
        </div>

        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d4af37",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {site.wordmark}
        </div>

        <div
          style={{
            width: 320,
            height: 2,
            margin: "34px 0",
            background:
              "linear-gradient(90deg, transparent, #c5a059, transparent)",
          }}
        />

        <div
          style={{
            fontSize: 36,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a8a8a8",
            textAlign: "center",
          }}
        >
          {site.tagline}
        </div>

        <div
          style={{
            marginTop: 54,
            fontSize: 30,
            color: "#c5a059",
            letterSpacing: 2,
          }}
        >
          {site.phoneDisplay}
        </div>
      </div>
    ),
    size,
  );
}
