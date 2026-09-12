export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: "accounting" | "office" | "dsc" | "gst";
  url: string;
  image?: string;
};

export const products: Product[] = [
  {
    slug: "accounting-software",
    name: "Accounting Software",
    category: "Finance & Accounting",
    tagline: "Books, invoicing & returns in one place",
    description:
      "A cloud accounting platform built for firms and businesses — ledgers, invoicing, expense tracking, and TDS return workflows, kept accurate and audit-ready.",
    highlights: ["Ledgers & invoicing", "TDS return workflows", "Cloud access, anywhere"],
    icon: "accounting",
    url: "https://accounts.tdsreturnhelp.in/",
    image: "/images/our-products/accounting-software.png",
  },
  {
    slug: "office-management",
    name: "Office Management",
    category: "Business Operations",
    tagline: "Run daily operations from one dashboard",
    description:
      "A centralized operations hub for client records, staff workflows, and document handling — built to keep accounting and compliance teams organized as they scale.",
    highlights: ["Centralized records", "Team workflow tracking", "Secure document access"],
    icon: "office",
    url: "https://gst-backend-mu.vercel.app/login",
    image: "/images/our-products/office-management.png",
  },
  {
    slug: "dsc-signature-tool",
    name: "DSC Signature Tool",
    category: "Digital Security",
    tagline: "Sign statutory filings with confidence",
    description:
      "A focused utility for applying Digital Signature Certificates to filings and documents — built to make statutory signing fast, secure, and error-free.",
    highlights: ["DSC-based signing", "Built for statutory filings", "Fast, secure workflow"],
    icon: "dsc",
    url: "https://dsc-tool-web.vercel.app/",
    image: "/images/our-products/dsc.png",
  },
  {
    slug: "gst-software",
    name: "GST Software",
    category: "Tax Compliance",
    tagline: "GST filing & reconciliation, simplified",
    description:
      "Purpose-built software for GST return filing, invoice reconciliation, and compliance tracking — helping firms file on time and stay audit-ready year-round.",
    highlights: ["GSTR filing support", "Invoice reconciliation", "Compliance tracking"],
    icon: "gst",
    url: "https://gst-backend-mu.vercel.app/login",
    image: "/images/our-products/gst-software.png",
  },
];
