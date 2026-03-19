export type Brand = {
  name: string;
  tagline: string;
  description: string;
};

export type ProductCategory = {
  name: string;
  description: string;
};

export type Catalogue = {
  title: string;
  description: string;
  fileUrl: string;
  coverLabel: string;
};

export type Branch = {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapsUrl: string;
};

export type GalleryItem = {
  title: string;
  type: "image" | "video";
  src: string;
};

export type SiteContent = {
  businessName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  whatsappNumber: string;
  whatsappMessage: string;
  aboutTitle: string;
  aboutBody: string;
  trustPoints: string[];
  brands: Brand[];
  categories: ProductCategory[];
  catalogues: Catalogue[];
  branches: Branch[];
  gallery: GalleryItem[];
};

export const defaultSiteContent: SiteContent = {
  businessName: "KAJARIA SANITARY MART",
  heroTitle: "Luxury surfaces and bath spaces curated for modern living.",
  heroSubtitle:
    "Authorized-style product showcase for premium tiles, bath fittings, finishes, and sink solutions.",
  heroDescription:
    "Explore a refined selection spanning KAJARIA TILES, SIMPOLO TILES, JAQUAR, ARTIZE, BERGER PAINTS, and FUTURA SINKS. Discover collections, browse catalogues, and connect instantly on WhatsApp for showroom guidance across tiles, bathware, finishes, and sink solutions.",
  whatsappNumber: "919876543210",
  whatsappMessage:
    "Hello, I would like details about tiles, bath fixtures, catalogues, and branch locations.",
  aboutTitle: "A dealership presence built around trust, guidance, and showroom experience.",
  aboutBody:
    "KAJARIA SANITARY MART is positioned as a destination for homeowners, architects, builders, and contractors seeking a premium mix of tiles, sanitaryware, bath fittings, paints, and kitchen sink solutions. This website is intentionally designed as a digital showroom that leads visitors toward inquiry, catalogue exploration, and store visits rather than online checkout.",
  trustPoints: [
    "Premium brand portfolio across tile, sanitary, and finish categories",
    "WhatsApp-first enquiry journey for fast product assistance",
    "Multiple branch locations with easy map access",
    "Catalogue viewing built into the website for quick discovery"
  ],
  brands: [
    {
      name: "KAJARIA TILES",
      tagline: "Premium wall and floor tiles with advanced manufacturing and design depth",
      description:
        "Inspired by Kajaria's emphasis on premium wall and floor tiles, advanced technology, elegant designs, and easy maintenance for lasting residential and commercial spaces."
    },
    {
      name: "SIMPOLO TILES",
      tagline: "Beauty, innovation, and strength brought into contemporary surfaces",
      description:
        "Inspired by Simpolo's focus on beauty, innovation, strength, and modern living, suited for expressive interiors, premium flooring, and design-led spaces."
    },
    {
      name: "JAQUAR",
      tagline: "Complete bath solutions built on quality, aesthetics, and service",
      description:
        "Inspired by Jaquar's positioning around complete bathroom solutions, world-class products, contemporary inspiration, and strong after-sales care."
    },
    {
      name: "ARTIZE",
      tagline: "Art-inspired luxury crafted for refined bath spaces",
      description:
        "Inspired by Artize's luxury-first language of refined taste, minimal forms, tactile detailing, and design connoisseur appeal."
    },
    {
      name: "BERGER PAINTS",
      tagline: "Paint and coating solutions backed by reach, service, and finish expertise",
      description:
        "Inspired by Berger Paints India's focus on innovative solutions, broad product depth, customer support, and tailored paint services across project types."
    },
    {
      name: "FUTURA SINKS",
      tagline: "Precision-driven kitchen sink solutions with durability and style",
      description:
        "Inspired by Futura's emphasis on precision, durability, aesthetic value, and high-performance sink and accessory solutions."
    }
  ],
  categories: [
    {
      name: "Tiles & Surfaces",
      description: "Wall tiles, floor tiles, feature surfaces, and large-format collections."
    },
    {
      name: "Bath Fixtures",
      description: "Faucets, showers, wellness products, and complete fitting ranges."
    },
    {
      name: "Luxury Bathware",
      description: "Statement bathroom collections under the Artize premium line."
    },
    {
      name: "Paints & Finishes",
      description: "Color systems and finish products to complete interior and exterior projects."
    },
    {
      name: "Sinks & Utility Solutions",
      description: "Kitchen and utility sinks designed for longevity and easy maintenance."
    }
  ],
  catalogues: [
    {
      title: "Kajaria Signature Collection",
      description: "Primary tile catalogue slot for your Kajaria range.",
      fileUrl: "/catalogues/kajaria-signature-collection.pdf",
      coverLabel: "PDF ready to replace"
    },
    {
      title: "Jaquar and Artize Bath Collections",
      description: "Ideal for bath fittings, sanitaryware, and premium bath concepts.",
      fileUrl: "/catalogues/jaquar-artize-collections.pdf",
      coverLabel: "Add your showroom PDF"
    },
    {
      title: "Simpolo and Surface Inspiration",
      description: "Use this slot for design-led surface brochures and launch books.",
      fileUrl: "/catalogues/simpolo-surface-inspiration.pdf",
      coverLabel: "Viewer supports local PDF files"
    }
  ],
  branches: [
    {
      name: "Main Showroom",
      address: "Add full address for Branch 1, city, state, PIN",
      phone: "+91 98765 43210",
      hours: "Mon-Sat, 10:00 AM - 8:00 PM",
      mapsUrl: "https://maps.google.com"
    },
    {
      name: "Design Studio Branch",
      address: "Add full address for Branch 2, city, state, PIN",
      phone: "+91 98765 43210",
      hours: "Mon-Sat, 10:00 AM - 8:00 PM",
      mapsUrl: "https://maps.google.com"
    }
  ],
  gallery: [
    {
      title: "Showroom Ambience",
      type: "image",
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Premium Bath Display",
      type: "image",
      src: "https://images.unsplash.com/photo-1616594039964-5f6f3e52f17f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Tile and Surface Inspiration",
      type: "image",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};
