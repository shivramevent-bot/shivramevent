import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollUtilities } from "@/components/layout/ScrollUtilities";
import { TopBar } from "@/components/layout/TopBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivramevent.vercel.app"),

  title: {
    default: "Shiv Ram Event | Best Event Management Company in Ahmedabad",
    template: "%s | Shiv Ram Event",
  },

  description:
    "Shiv Ram Event is a professional event management company in Ahmedabad offering wedding planning, birthday decoration, baby shower decoration, corporate events, anniversary decoration, engagement decoration, theme decor and luxury event planning.",

  keywords: [
    "Event Planner Ahmedabad",
    "Best Event Planner Ahmedabad",
    "Event Management Company Ahmedabad",
    "Wedding Planner Ahmedabad",
    "Wedding Decoration Ahmedabad",
    "Birthday Decoration Ahmedabad",
    "Birthday Party Planner Ahmedabad",
    "Baby Shower Decoration Ahmedabad",
    "Corporate Event Planner Ahmedabad",
    "Anniversary Decoration Ahmedabad",
    "Ring Ceremony Decoration Ahmedabad",
    "Haldi Decoration Ahmedabad",
    "Mehndi Decoration Ahmedabad",
    "Sangeet Decoration Ahmedabad",
    "Reception Decoration Ahmedabad",
    "Theme Decoration Ahmedabad",
    "Luxury Event Planner Ahmedabad",
    "Event Organizer Ahmedabad",
    "Party Planner Ahmedabad",
    "Decoration Services Ahmedabad",
    "Ahmedabad Event Company",
    "Shiv Ram Event",
    "Shiv Ram Events"
  ],

  authors: [
    {
      name: "Shiv Ram Event",
      url: "https://shivramevent.vercel.app",
    },
  ],

  creator: "Shiv Ram Event",
  publisher: "Shiv Ram Event",

  applicationName: "Shiv Ram Event",

  category: "Event Management",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Shiv Ram Event",

    title: "Shiv Ram Event | Best Event Management Company in Ahmedabad",

    description:
      "Professional Event Management Company in Ahmedabad for Weddings, Birthday Decoration, Baby Shower, Corporate Events and Luxury Theme Decorations.",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shiv Ram Event Ahmedabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Shiv Ram Event | Best Event Management Company in Ahmedabad",

    description:
      "Wedding Planner • Birthday Decoration • Baby Shower • Corporate Events • Ahmedabad",

    images: ["/opengraph-image.png"],

    creator: "@eventplanerahmedabad",
  },

  verification: {
    google: "3BSm9vs8oiuxhSJ8Ec2WC2_bqS3kZgcB1BP2szD4svM",
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "theme-color": "#000000",
    "color-scheme": "light",
    "format-detection": "telephone=no,address=no,email=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black",
    "apple-mobile-web-app-title": "Shiv Ram Event",
    "msapplication-TileColor": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
      <body className="font-body">
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <ScrollUtilities />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
