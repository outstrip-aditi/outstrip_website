export type ImageAsset = {
  src: string;
  alt: string;
};

export const images = {
  // Hero / homepage
  hero: {
    src: "/images/hero/hero.jpg",
    alt: "Modern software studio where the OUTSTRIP team builds digital products",
  },

  // About mega-menu + About Us page
  aboutUs: {
    src: "/images/about/about-us.jpg",
    alt: "OUTSTRIP office interior — a modern software development workspace",
  },
  ourTeam: {
    src: "/images/about/our-team.jpg",
    alt: "The OUTSTRIP team collaborating in the studio",
  },
  ourStory: {
    src: "/images/about/our-story.jpg",
    alt: "Engineers reviewing a product roadmap together",
  },
  missionVision: {
    src: "/images/about/mission-vision.jpg",
    alt: "Team aligning on strategy and long-term vision in a meeting",
  },
  careers: {
    src: "/images/about/careers.jpg",
    alt: "OUTSTRIP workplace — where the team builds every day",
  },
  contact: {
    src: "/images/about/contact.jpg",
    alt: "OUTSTRIP studio location and workspace",
  },

  // Company / office
  office: {
    src: "/images/about/office.jpg",
    alt: "OUTSTRIP office space",
  },
  officeWide: {
    src: "/images/about/office-wide.jpg",
    alt: "Wide view of a modern technology office",
  },

  // Services / Industries / Portfolio / Hire developers
  services: {
    src: "/images/pages/services.jpg",
    alt: "Developer working on a product interface",
  },
  industries: {
    src: "/images/pages/industries.jpg",
    alt: "Cross-industry digital products built by OUTSTRIP",
  },
  portfolio: {
    src: "/images/pages/portfolio.jpg",
    alt: "Selected product work delivered by OUTSTRIP",
  },
  hireDevelopers: {
    src: "/images/pages/hire-developers.jpg",
    alt: "OUTSTRIP engineers pairing on a codebase",
  },
} as const satisfies Record<string, ImageAsset>;

// stacking-cards Services section.
export const serviceImages: Record<string, ImageAsset> = {
  "web-development": {
    src: "/images/services/web-development.jpg",
    alt: "Code editor showing a web application in development",
  },
  ecommerce: {
    src: "/images/services/ecommerce.jpg",
    alt: "Online storefront displayed on a laptop screen",
  },
  "mobile-apps": {
    src: "/images/services/mobile-apps.jpg",
    alt: "Mobile app interface displayed on a smartphone",
  },
  "ui-ux-design": {
    src: "/images/services/ui-ux-design.jpg",
    alt: "UI/UX wireframes and design mockups laid out on a desk",
  },
  "digital-marketing": {
    src: "/images/services/digital-marketing.jpg",
    alt: "Marketing analytics dashboard showing campaign performance",
  },
  "hosting-cloud": {
    src: "/images/services/hosting-cloud.jpg",
    alt: "Server room representing cloud hosting infrastructure",
  },
};


// One image per project slug (see `projects` in lib/data.ts), used in the
// "Projects that move metrics" homepage section.
export const projectImages: Record<string, ImageAsset> = {
  "nordic-commerce": {
    src: "/images/projects/stock-nordic-commerce.jpg",
    alt: "Multi-currency e-commerce storefront",
  },
  "pulse-health": {
    src: "/images/projects/stock-pulse-health.jpg",
    alt: "Telehealth scheduling app on a tablet",
  },
  "campus-os": {
    src: "/images/projects/stock-campus-os.jpg",
    alt: "Students using a learning platform in a classroom",
  },
  "harbor-stays": {
    src: "/images/projects/stock-harbor-stays.jpg",
    alt: "Travel destination featured in a booking experience",
  },
  "food-hub": {
    src: "/images/projects/stock-food-hub.jpg",
    alt: "Restaurant ordering and reservation platform on a tablet",
  },
  "estate-pro": {
    src: "/images/projects/stock-estate-pro.jpg",
    alt: "Modern property listing shown in a real estate platform",
  },
};

// One image per industry slug (see `industries` in lib/industries.ts), used
// in the homepage/industries showcase and on each dedicated industry page.
export const industryImages: Record<string, ImageAsset> = {
  edtech: {
    src: "/images/industries/edtech.jpg",
    alt: "Students engaging with a learning platform",
  },
  healthcare: {
    src: "/images/industries/healthcare.jpg",
    alt: "Healthcare provider using a digital patient system",
  },
  ecommerce: {
    src: "/images/industries/ecommerce.jpg",
    alt: "Online shopping and e-commerce checkout experience",
  },
  fintech: {
    src: "/images/industries/fintech.jpg",
    alt: "Financial dashboard showing transactions and analytics",
  },
  "tours-travel": {
    src: "/images/industries/tours-travel.jpg",
    alt: "Travel destination featured in a booking journey",
  },
  media: {
    src: "/images/industries/social-media.png",
    alt: "Content studio producing digital media",
  },
  "real-estate": {
    src: "/images/projects/stock-estate-pro.jpg",
    alt: "Modern property featured in a real estate listing",
  },
  foodtech: {
    src: "/images/projects/stock-food-hub.jpg",
    alt: "Restaurant ordering and delivery experience",
  },
  gaming: {
    src: "/images/industries/gaming.jpg",
    alt: "Gaming setup with controller and screen",
  },
  sports: {
    src: "/images/industries/sports.jpg",
    alt: "Sports stadium during a live match",
  },
};

// Portrait photography used for individual team member cards, cycled by index.
export const teamPhotos: ImageAsset[] = [
  {
    src: "/images/team/member-1.jpg",
    alt: "Portrait of an OUTSTRIP team member",
  },
  {
    src: "/images/team/member-2.jpg",
    alt: "Portrait of an OUTSTRIP team member",
  },
  {
    src: "/images/team/member-3.jpg",
    alt: "Portrait of an OUTSTRIP team member",
  },
  {
    src: "/images/team/member-4.jpg",
    alt: "Portrait of an OUTSTRIP team member",
  },
  {
    src: "/images/team/member-5.jpg",
    alt: "Portrait of an OUTSTRIP team member",
  },
];

// Candid studio/culture photography for the Team page "Moments" gallery.
export const teamMoments: ImageAsset[] = [
  { src: "/images/team/moment-1.jpg", alt: "Team huddled around a whiteboard sprint" },
  { src: "/images/team/moment-2.jpg", alt: "Engineers pairing on a feature review" },
  { src: "/images/hero/hero.jpg", alt: "Design critique in the studio" },
  { src: "/images/team/moment-4.jpg", alt: "Team laughing during a break" },
  { src: "/images/team/moment-5.jpg", alt: "Standup meeting in the open office" },
  { src: "/images/about/our-story.jpg", alt: "Product roadmap planning session" },
  { src: "/images/team/moment-7.jpg", alt: "Late-night launch celebration" },
  { src: "/images/team/moment-8.jpg", alt: "Cross-team collaboration workshop" },
];

// One image per post slug (see `blogPosts` in lib/data.ts), used on the Blog
// listing and article pages.
export const blogImages: Record<string, ImageAsset> = {
  "benefits-of-hiring-a-web-development-company": {
    src: "/images/blog/live-news2-1.jpg",
    alt: "Benefits of Hiring a Web Development Company",
  },
  "how-the-bad-design-of-a-website-affects-my-business": {
    src: "/images/blog/live-news1-1.jpg",
    alt: "How the Bad Design of a Website Affects My Business",
  },
  "benefits-of-hiring-professional-web-design-services-in-jaipur": {
    src: "/images/blog/live-news4-1.jpg",
    alt: "Benefits of Hiring Professional Web Design Services in Jaipur",
  },
  "affordable-pay-per-click-service-india": {
    src: "/images/blog/live-news3-1.jpg",
    alt: "Affordable Pay Per Click Service India",
  },
  "developing-website-using-cakephp-framework": {
    src: "/images/blog/live-map2-1.png",
    alt: "Developing Website Using “CakePHP” Framework",
  },
  "how-the-website-for-a-company-can-become-its-best-seller": {
    src: "/images/blog/live-news2-1.png",
    alt: "How the Website for a Company Can Become Its Best Seller",
  },
};

// Wide-format photography for the Team page "Events" gallery.
export const teamEvents: ImageAsset[] = [
  { src: "/images/team/event-1.jpg", alt: "Annual OUTSTRIP team offsite" },
  { src: "/images/team/event-2.jpg", alt: "Company town hall and product demo day" },
  { src: "/images/team/event-3.jpg", alt: "Hackathon night at the studio" },
  { src: "/images/team/event-4.jpg", alt: "Award celebration with the whole team" },
  { src: "/images/team/event-5.jpg", alt: "Community meetup hosted by OUTSTRIP" },
  { src: "/images/team/event-6.jpg", alt: "Team-building retreat" },
];
