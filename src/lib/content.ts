/**
 * Page content as data. Copy is carried over word for word from the legacy
 * site; only the imagery changed — every photo below is the agency's own work
 * rather than the stock photography the old build hot-linked.
 */

export type Service = {
  slug: string;
  title: string;
  /** Short line used on the home page overview cards. */
  blurb: string;
  /** Longer paragraph used on the services index cards. */
  summary: string;
  image: string;
  imageAlt: string;
  /** Eyebrow label on the detail page. */
  label: string;
  heading: string;
  body: [string, string];
  features: { title: string; text: string }[];
  cta: { heading: string; text: string };
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "corporate-events",
    title: "Corporate Events",
    blurb:
      "Elegant corporate gatherings with seamless coordination and premium decor.",
    summary:
      "Professional corporate event management including conferences, product launches, annual meets, and brand activations. We ensure seamless coordination, premium decor, and a polished experience that reflects your brand identity.",
    image: "/images/corporate-new-year.jpg",
    imageAlt:
      "Corporate New Year celebration stage with sequin backdrop and balloon columns",
    label: "Professional & Polished",
    heading: "Corporate Event Management in Ahmedabad",
    body: [
      "Shiv Ram Event delivers end-to-end corporate event management that reflects your brand with elegance and precision. From conferences and product launches to annual meets and team celebrations, we handle every detail so you can focus on your business.",
      "Our team provides venue coordination, stage setup, branding decor, guest management, and on-day execution — ensuring your corporate event runs smoothly from start to finish.",
    ],
    features: [
      {
        title: "Conferences & Seminars",
        text: "Full venue setup, seating, and AV coordination.",
      },
      {
        title: "Product Launches",
        text: "Brand-focused decor and stage presentation.",
      },
      {
        title: "Annual Meets",
        text: "Professional layouts for large corporate gatherings.",
      },
      {
        title: "Team Events",
        text: "Engaging celebrations that boost morale and unity.",
      },
    ],
    cta: {
      heading: "Plan Your Next Corporate Event",
      text: "Contact us for customized corporate event packages in Ahmedabad.",
    },
    metaTitle: "Corporate Events | Shiv Ram Event — Ahmedabad",
    metaDescription:
      "Corporate event management in Ahmedabad — conferences, product launches, annual meets and brand activations by Shiv Ram Event.",
  },
  {
    slug: "birthday-parties",
    title: "Birthday Parties",
    blurb:
      "Theme-based birthday celebrations designed exactly the way you envision.",
    summary:
      "Creative and theme-based birthday party decoration for all ages. From Formula 1 racing themes to fairy tale setups, we customize every detail — balloons, backdrops, cake tables, and entertainment zones.",
    image: "/images/racing-birthday.jpg",
    imageAlt:
      "Racing themed birthday decoration with checkered flags, balloon arch and marquee number five",
    label: "Fun & Memorable",
    heading: "Theme-Based Birthday Party Decoration",
    body: [
      "Make every birthday unforgettable with Shiv Ram Event's creative party planning and decoration services. From kids' themed parties to milestone celebrations, we design setups exactly the way you envision.",
      "Popular themes include Formula 1 racing, princess fairy tales, superhero adventures, and custom color-coordinated decor with balloons, backdrops, cake tables, and photo zones.",
    ],
    features: [
      {
        title: "Kids Theme Parties",
        text: "Custom themes for toddlers and young children.",
      },
      {
        title: "Balloon & Backdrop Decor",
        text: "Eye-catching entrance and stage setups.",
      },
      {
        title: "Cake Table Styling",
        text: "Beautiful cake display and dessert zones.",
      },
      {
        title: "Entertainment Zones",
        text: "Game areas and photo booth corners.",
      },
    ],
    cta: {
      heading: "Plan the Perfect Birthday Celebration",
      text: "Tell us your theme and we'll bring it to life in Ahmedabad.",
    },
    metaTitle: "Birthday Parties | Shiv Ram Event — Ahmedabad",
    metaDescription:
      "Theme-based birthday party decoration in Ahmedabad — balloon decor, backdrops, cake tables and photo zones by Shiv Ram Event.",
  },
  {
    slug: "cultural-events",
    title: "Cultural Events",
    blurb: "Traditional and modern cultural programs with creative execution.",
    summary:
      "Traditional and contemporary cultural program management with stage setup, lighting, sound coordination, and thematic decoration. We honor traditions while adding a modern creative touch.",
    image: "/images/princess-wide.jpg",
    imageAlt:
      "Themed event stage with balloon columns, character cut-outs and marquee letters",
    label: "Tradition & Creativity",
    heading: "Cultural Program Management",
    body: [
      "Shiv Ram Event specializes in organizing cultural programs that celebrate tradition with a modern creative touch. We manage everything from stage design and lighting to artist coordination and audience experience.",
      "Whether it's a community festival, religious celebration, or institutional cultural day, our team ensures smooth execution with beautiful thematic decoration and professional coordination.",
    ],
    features: [
      {
        title: "Stage Setup",
        text: "Professional stage design with lighting and sound.",
      },
      {
        title: "Festival Decor",
        text: "Traditional and contemporary thematic decoration.",
      },
      {
        title: "Program Coordination",
        text: "Artist scheduling and event flow management.",
      },
      {
        title: "Community Events",
        text: "Large-scale cultural gatherings and functions.",
      },
    ],
    cta: {
      heading: "Organize Your Cultural Event With Us",
      text: "Professional planning and execution for cultural programs in Ahmedabad.",
    },
    metaTitle: "Cultural Events | Shiv Ram Event — Ahmedabad",
    metaDescription:
      "Cultural program management in Ahmedabad — stage setup, lighting, festival decor and coordination by Shiv Ram Event.",
  },
  {
    slug: "decoration-services",
    title: "Decoration Services",
    blurb: "Stunning theme decor, photo booths, and grand entry arrangements.",
    summary:
      "Premium decoration services including wedding decor, engagement setups, baby shower themes, photo booth arrangements, floral designs, and grand entry concepts that leave a lasting impression.",
    image: "/images/elegant-50-gold.jpg",
    imageAlt:
      "Elegant white and gold balloon installation with pampas grass and neon Happy Birthday sign",
    label: "Elegant & Stunning",
    heading: "Premium Event Decoration in Ahmedabad",
    body: [
      "Transform any venue into a breathtaking celebration space with Shiv Ram Event's decoration services. We specialize in wedding decor, engagement setups, baby shower themes, floral arrangements, and grand entry concepts.",
      "Our creative team uses high-quality materials, theme-based designs, and meticulous attention to detail — delivering decor that makes every occasion picture-perfect and unforgettable.",
    ],
    features: [
      {
        title: "Wedding & Engagement",
        text: "Mandap, stage, and floral decor designs.",
      },
      {
        title: "Baby Shower Themes",
        text: "Charming setups with custom color palettes.",
      },
      {
        title: "Photo Booth Setup",
        text: "Creative backdrops for memorable photos.",
      },
      {
        title: "Grand Entry",
        text: "Dramatic entrance arrangements that wow guests.",
      },
    ],
    cta: {
      heading: "Make Your Event Visually Spectacular",
      text: "Share your vision and we'll design decoration that exceeds expectations.",
    },
    metaTitle: "Decoration Services | Shiv Ram Event — Ahmedabad",
    metaDescription:
      "Premium event decoration in Ahmedabad — wedding decor, baby shower themes, photo booths and grand entry setups by Shiv Ram Event.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** Extra services listed on the services page without a detail page of their own. */
export const specialisedServices = [
  {
    icon: "♥",
    title: "Wedding Planning",
    text: "Complete wedding planning from pre-wedding functions to reception.",
    href: "/services/decoration-services",
  },
  {
    icon: "★",
    title: "Baby Shower",
    text: "Charming baby shower decoration with custom themes and setups.",
    href: "/services/decoration-services",
  },
  {
    icon: "❋",
    title: "Photo Booth",
    text: "Creative photo booth setups for memorable event photography.",
  },
  {
    icon: "◆",
    title: "Grand Entry",
    text: "Stunning grand entry arrangements that wow your guests.",
  },
] as const;

export const featuredEvents = [
  {
    title: "Birthday Event",
    text: "Creative theme-based birthday party decorations with personalized touches that make every celebration unique and memorable.",
    image: "/images/racing-birthday.jpg",
    alt: "Racing themed birthday party decoration with balloon arch",
  },
  {
    title: "Social Event",
    text: "From engagements to social gatherings, we deliver elegant decor and seamless coordination for every special occasion.",
    image: "/images/elegant-50-gold.jpg",
    alt: "Elegant white and gold milestone birthday installation",
  },
  {
    title: "Baby Shower",
    text: "Beautiful baby shower decorations with charming themes, floral arrangements, and picture-perfect setups.",
    image: "/images/baby-shower.png",
    alt: "Baby shower centrepiece with knitted booties and fresh flowers",
  },
] as const;

export const testimonials = [
  {
    initial: "M",
    name: "Minal",
    role: "Engagement Event",
    quote:
      "Made my engagement more special, more memorable and elegant by their great decor. Loved the design work, humbleness — everything.",
  },
  {
    initial: "H",
    name: "Hiral Metha",
    role: "Birthday Party — Formula 1 Theme",
    quote:
      "Very good experience. They made the birthday party of my 2-year-old with Formula 1 car racing theme a memorable one. They did exactly the way I wanted.",
  },
  {
    initial: "D",
    name: "Doller Makwani",
    role: "Event Client",
    quote:
      "It was a nice experience with Shiv Ram Events. They handled everything very politely to the client and response is very good. Decoration ideas are super and work is excellent.",
  },
] as const;

export const gallery = [
  {
    image: "/images/black-gold-40.jpg",
    caption: "Milestone Birthday",
    alt: "Black and gold balloon wall with illuminated 40 marquee numbers",
  },
  {
    image: "/images/racing-birthday.jpg",
    caption: "Birthday Decor",
    alt: "Bike racing themed birthday setup with checkered track runner",
  },
  {
    image: "/images/fairy-first-birthday.jpg",
    caption: "First Birthday",
    alt: "Fairy themed first birthday with teal, pink and gold balloons",
  },
  {
    image: "/images/corporate-new-year.jpg",
    caption: "Corporate Event",
    alt: "Corporate New Year stage with sequin wall and balloon columns",
  },
  {
    image: "/images/elegant-50-gold.jpg",
    caption: "Grand Celebration",
    alt: "White and gold balloon cascade with pampas grass and neon sign",
  },
  {
    image: "/images/lilac-staircase.jpg",
    caption: "Home Celebration",
    alt: "Lilac and white balloon garland along a staircase with marquee numbers",
  },
  {
    image: "/images/jungle-first-birthday.jpg",
    caption: "Theme Decor",
    alt: "Jungle themed first birthday with green and gold balloon ring",
  },
  {
    image: "/images/princess-first-birthday.jpg",
    caption: "Kids Party",
    alt: "Princess themed first birthday backdrop with pastel balloon garland",
  },
  {
    image: "/images/mocha-arch.jpg",
    caption: "Aesthetic Decor",
    alt: "Mocha and cream balloon arch with fluted backdrop and marquee numbers",
  },
] as const;

export const team = [
  { initials: "RD", name: "Rahul Das", role: "Event Coordinator" },
  { initials: "BT", name: "Bhavesh Thakor", role: "Creative Director" },
  { initials: "AS", name: "Ajay Saxsena", role: "Operations Manager" },
] as const;

export const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Baby Shower",
  "Cultural Event",
  "Decoration Only",
  "Other",
] as const;
