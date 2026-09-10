/**
 * Centralized image configuration.
 *
 * Every image used across the site is registered here so it can be swapped
 * for licensed brand photography later by editing a single file — nothing
 * else in the codebase should hardcode an image URL.
 */

export type ImageAsset = {
  src: string;
  alt: string;
};

function unsplash(id: string, width = 1600, height?: number) {
  const params = new URLSearchParams({
    q: "80",
    w: String(width),
    auto: "format",
    fit: "crop",
  });
  if (height) params.set("h", String(height));
  return `https://images.unsplash.com/${id}?${params.toString()}`;
}

export const images = {
  // Hero / homepage
  hero: {
    src: unsplash("photo-1600880292203-757bb62b4baf", 1800, 1200),
    alt: "Modern software studio where the OUTSTRIP team builds digital products",
  },

  // About mega-menu + About Us page
  aboutUs: {
    src: unsplash("photo-1497366754035-f200968a6e72", 1200, 1500),
    alt: "OUTSTRIP office interior — a modern software development workspace",
  },
  ourTeam: {
    src: unsplash("photo-1522202176988-66273c2fd55f", 1200, 1500),
    alt: "The OUTSTRIP team collaborating in the studio",
  },
  ourStory: {
    src: unsplash("photo-1521737604893-d14cc237f11d", 1200, 1500),
    alt: "Engineers reviewing a product roadmap together",
  },
  missionVision: {
    src: unsplash("photo-1552664730-d307ca884978", 1200, 1500),
    alt: "Team aligning on strategy and long-term vision in a meeting",
  },
  careers: {
    src: unsplash("photo-1600880292089-90a7e086ee0c", 1200, 1500),
    alt: "OUTSTRIP workplace — where the team builds every day",
  },
  contact: {
    src: unsplash("photo-1497366811353-6870744d04b2", 1200, 1500),
    alt: "OUTSTRIP studio location and workspace",
  },

  // Company / office
  office: {
    src: unsplash("photo-1497366216548-37526070297c", 1600, 1000),
    alt: "OUTSTRIP office space",
  },
  officeWide: {
    src: unsplash("photo-1560472354-b33ff0c44a43", 1800, 1000),
    alt: "Wide view of a modern technology office",
  },

  // Services / Industries / Portfolio / Hire developers
  services: {
    src: unsplash("photo-1519389950473-47ba0277781c", 1600, 1000),
    alt: "Developer working on a product interface",
  },
  industries: {
    src: unsplash("photo-1454165804606-c3d57bc86b40", 1600, 1000),
    alt: "Cross-industry digital products built by OUTSTRIP",
  },
  portfolio: {
    src: unsplash("photo-1551288049-bebda4e38f71", 1600, 1000),
    alt: "Selected product work delivered by OUTSTRIP",
  },
  hireDevelopers: {
    src: unsplash("photo-1516321318423-f06f85e504b3", 1600, 1000),
    alt: "OUTSTRIP engineers pairing on a codebase",
  },
} as const satisfies Record<string, ImageAsset>;

// stacking-cards Services section.
export const serviceImages: Record<string, ImageAsset> = {
  "web-development": {
    src: unsplash("photo-1461749280684-dccba630e2f6", 1400, 1050),
    alt: "Code editor showing a web application in development",
  },
  ecommerce: {
    src: unsplash("photo-1556742049-0cfed4f6a45d", 1400, 1050),
    alt: "Online storefront displayed on a laptop screen",
  },
  "mobile-apps": {
    src: unsplash("photo-1512941937669-90a1b58e7e9c", 1400, 1050),
    alt: "Mobile app interface displayed on a smartphone",
  },
  "ui-ux-design": {
    src: unsplash("photo-1561070791-2526d30994b5", 1400, 1050),
    alt: "UI/UX wireframes and design mockups laid out on a desk",
  },
  "digital-marketing": {
    src: unsplash("photo-1533750349088-cd871a92f312", 1400, 1050),
    alt: "Marketing analytics dashboard showing campaign performance",
  },
  "hosting-cloud": {
    src: unsplash("photo-1544197150-b99a580bb7a8", 1400, 1050),
    alt: "Server room representing cloud hosting infrastructure",
  },
};


// One image per project slug (see `projects` in lib/data.ts), used in the
// "Projects that move metrics" homepage section.
export const projectImages: Record<string, ImageAsset> = {
  "nordic-commerce": {
    src: unsplash("photo-1472851294608-062f824d29cc", 1400, 1000),
    alt: "Multi-currency e-commerce storefront",
  },
  "pulse-health": {
    src: unsplash("photo-1576091160399-112ba8d25d1d", 1400, 1000),
    alt: "Telehealth scheduling app on a tablet",
  },
  fleetline: {
    src: unsplash("photo-1601584115197-04ecc0da31d7", 1400, 1000),
    alt: "Logistics fleet on the road, tracked in real time",
  },
  "campus-os": {
    src: unsplash("photo-1523240795612-9a054b0db644", 1400, 1000),
    alt: "Students using a learning platform in a classroom",
  },
  "harbor-stays": {
    src: unsplash("photo-1500835556837-99ac94a94552", 1400, 1000),
    alt: "Travel destination featured in a booking experience",
  },
  "atelier-pos": {
    src: unsplash("photo-1441986300917-64674bd600d8", 1400, 1000),
    alt: "Boutique retail store using a point-of-sale system",
  },
};

// One image per industry slug (see `industries` in lib/industries.ts), used
// in the homepage/industries showcase and on each dedicated industry page.
export const industryImages: Record<string, ImageAsset> = {
  edtech: {
    src: unsplash("photo-1509062522246-3755977927d7", 1600, 1200),
    alt: "Students engaging with a learning platform",
  },
  healthcare: {
    src: unsplash("photo-1504813184591-01572f98c85f", 1600, 1200),
    alt: "Healthcare provider using a digital patient system",
  },
  ecommerce: {
    src: unsplash("photo-1483058712412-4245e9b90334", 1600, 1200),
    alt: "Online shopping and e-commerce checkout experience",
  },
  fintech: {
    src: unsplash("photo-1563013544-824ae1b704d3", 1600, 1200),
    alt: "Financial dashboard showing transactions and analytics",
  },
  "tours-travel": {
    src: unsplash("photo-1488646953014-85cb44e25828", 1600, 1200),
    alt: "Travel destination featured in a booking journey",
  },
  media: {
    src: unsplash("photo-1522869635100-9f4c5e86aa37", 1600, 1200),
    alt: "Content studio producing digital media",
  },
  "real-estate": {
    src: unsplash("photo-1560518883-ce09059eeffa", 1600, 1200),
    alt: "Modern property featured in a real estate listing",
  },
  foodtech: {
    src: unsplash("photo-1517248135467-4c7edcad34c4", 1600, 1200),
    alt: "Restaurant ordering and delivery experience",
  },
  gaming: {
    src: unsplash("photo-1538481199705-c710c4e965fc", 1600, 1200),
    alt: "Gaming setup with controller and screen",
  },
  sports: {
    src: unsplash("photo-1461896836934-ffe607ba8211", 1600, 1200),
    alt: "Sports stadium during a live match",
  },
};

// Portrait photography used for individual team member cards, cycled by index.
export const teamPhotos: ImageAsset[] = [
  {
    src: unsplash("photo-1519085360753-af0119f7cbe7", 600, 750),
    alt: "Portrait of an OUTSTRIP team member",
  },
  {
    src: unsplash("photo-1573496359142-b8d87734a5a2", 600, 750),
    alt: "Portrait of an OUTSTRIP team member",
  },
  {
    src: unsplash("photo-1560250097-0b93528c311a", 600, 750),
    alt: "Portrait of an OUTSTRIP team member",
  },
  {
    src: unsplash("photo-1580489944761-15a19d654956", 600, 750),
    alt: "Portrait of an OUTSTRIP team member",
  },
  {
    src: unsplash("photo-1500648767791-00dcc994a43e", 600, 750),
    alt: "Portrait of an OUTSTRIP team member",
  },
];

// Candid studio/culture photography for the Team page "Moments" gallery.
export const teamMoments: ImageAsset[] = [
  { src: unsplash("photo-1522071820081-009f0129c71c", 900, 1100), alt: "Team huddled around a whiteboard sprint" },
  { src: unsplash("photo-1543269865-cbf427effbad", 900, 700), alt: "Engineers pairing on a feature review" },
  { src: unsplash("photo-1600880292203-757bb62b4baf", 900, 1100), alt: "Design critique in the studio" },
  { src: unsplash("photo-1531482615713-2afd69097998", 900, 700), alt: "Team laughing during a break" },
  { src: unsplash("photo-1515187029135-18ee286d815b", 900, 1100), alt: "Standup meeting in the open office" },
  { src: unsplash("photo-1521737604893-d14cc237f11d", 900, 700), alt: "Product roadmap planning session" },
  { src: unsplash("photo-1517048676732-d65bc937f952", 900, 1100), alt: "Late-night launch celebration" },
  { src: unsplash("photo-1542744173-8e7e53415bb0", 900, 700), alt: "Cross-team collaboration workshop" },
];

// One image per post slug (see `blogPosts` in lib/data.ts), used on the Blog
// listing and article pages.
export const blogImages: Record<string, ImageAsset> = {
  "modern-web-architecture-2026": {
    src: unsplash("photo-1517180102446-f3ece451e9d8", 1600, 1000),
    alt: "Engineer reviewing system architecture diagrams on a large screen",
  },
  "mobile-retention-patterns": {
    src: unsplash("photo-1512941937669-90a1b58e7e9c", 1600, 1000),
    alt: "Mobile app interface displayed on a smartphone in hand",
  },
  "seo-for-product-sites": {
    src: unsplash("photo-1460925895917-afdab827c52f", 1600, 1000),
    alt: "Analytics dashboard showing organic search growth",
  },
  "design-systems-that-scale": {
    src: unsplash("photo-1561070791-2526d30994b5", 1600, 1000),
    alt: "Design system components and UI tokens laid out on a desk",
  },
};

// Wide-format photography for the Team page "Events" gallery.
export const teamEvents: ImageAsset[] = [
  { src: unsplash("photo-1511578314322-379afb476865", 1400, 900), alt: "Annual OUTSTRIP team offsite" },
  { src: unsplash("photo-1540575467063-178a50c2df87", 1400, 900), alt: "Company town hall and product demo day" },
  { src: unsplash("photo-1505373877841-8d25f7d46678", 1400, 900), alt: "Hackathon night at the studio" },
  { src: unsplash("photo-1528605248644-14dd04022da1", 1400, 900), alt: "Award celebration with the whole team" },
  { src: unsplash("photo-1475721027785-f74eccf877e2", 1400, 900), alt: "Community meetup hosted by OUTSTRIP" },
  { src: unsplash("photo-1524178232363-1fb2b075b655", 1400, 900), alt: "Team-building retreat" },
];
