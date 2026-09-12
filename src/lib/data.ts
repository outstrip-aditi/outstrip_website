export const siteConfig = {
  name: "OUTSTRIP",
  legalName: "Outstrip InfoTech Private Limited",
  tagline: "Build digital products that outperform",
  description:
    "Outstrip infotech Pvt. Ltd. was established to solve these concerns. We are a desktop, web and mobile application development company which is presently available to bring about the complex structure of the companies and the spirit of compatibility between the requirements of medium and small enterprises are there.",
  url: "https://outstripinfotech.com",
  email: "info@outstripinfotech.com",
  phone: "+91 87690 06030",
  phoneAlt: "+91 97855 66636",
  address:
    "122/191, Opp. Tarani Hospital, Near Vijay Path, Mansarovar, Jaipur - 302020",
  founded: 2007,
  certifications: ["ISO 9001:2015", "ISO/IEC 27001:2013"],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const headerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/hire-developers", label: "Hire Developers" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Portfolio" },
  { href: "/our-products", label: "Our Products" },
];

export const engagementModels = [
  {
    title: "Dedicated team",
    description:
      "A ring-fenced squad of engineers embedded in your roadmap, working your hours, reporting to you directly.",
    bestFor: "Long-term product builds",
  },
  {
    title: "Fixed scope",
    description:
      "Clear requirements, a fixed price, and a fixed timeline — ideal when the deliverable is well defined upfront.",
    bestFor: "MVPs & defined projects",
  },
  {
    title: "Hourly / staff augmentation",
    description:
      "Add senior engineers to your existing team on demand, scaled up or down as the workload changes.",
    bestFor: "Ongoing or variable workload",
  },
];

export const stats = [
  { value: 100, suffix: "+", label: "Clients worldwide" },
  { value: 14, suffix: "+", label: "Years of experience" },
  { value: 50, suffix: "+", label: "Specialists on team" },
  { value: 400, suffix: "+", label: "Projects delivered" },
];

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Scalable web platforms engineered for speed, security, and growth.",
    description:
      "We turn product ideas into production-ready software using modern stacks and clean architecture. From MVPs to enterprise systems, OUTSTRIP ships reliable web applications that scale with your business.",
    highlights: ["CodeIgniter", "Laravel", "Magento", "Salesforce", "WordPress", "Next.js"],
    icon: "code",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Solutions",
    short: "Revenue-ready storefronts that convert browsers into buyers.",
    description:
      "Launch or modernize your online business with conversion-focused commerce platforms, inventory workflows, payment integrations, and performance optimization built for growth.",
    highlights: ["Custom Storefronts", "Payment Gateways", "Inventory Sync", "Multi-vendor"],
    icon: "cart",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    short: "Native and cross-platform apps that feel effortless to use.",
    description:
      "Android, iOS, and hybrid applications designed for retention. We build food, mobility, accounting, and custom business apps with polished UX and robust backends.",
    highlights: ["Android", "iOS", "Cross-platform", "API Integration"],
    icon: "mobile",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Interfaces that communicate clearly and convert confidently.",
    description:
      "Research-led product design spanning wireframes, design systems, responsive layouts, and high-fidelity prototypes that align brand, usability, and business goals.",
    highlights: ["Custom Web Design", "Mobile UI/UX", "Design Systems", "Prototyping"],
    icon: "design",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Acquisition systems that put your brand in front of the right audience.",
    description:
      "SEO, SEM, PPC, email, and site audits engineered to grow qualified traffic and measurable ROI — not vanity metrics.",
    highlights: ["SEO", "PPC", "SEM", "Email Marketing", "Site Audits"],
    icon: "growth",
  },
  {
    slug: "hosting-cloud",
    title: "Hosting & Cloud",
    short: "Reliable infrastructure with domains, SSL, and messaging solutions.",
    description:
      "Managed hosting, cloud servers, domains, SSL, and email/SMS infrastructure so your products stay online, secure, and reachable.",
    highlights: ["Hosting", "Servers & Cloud", "Domains & SSL", "Email & SMS"],
    icon: "cloud",
  },
];

export { industries, type Industry } from "./industries";

export const projects = [
  // E-COMMERCE
  {
    slug: "grovedale-flooring",
    title: "Grovedale Flooring",
    category: "E-commerce",
    year: "2023",
    summary:
      "A professional flooring website built to showcase flooring solutions and provide a seamless customer browsing experience.",
    outcome: "Modern flooring product experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/grovedaleflooring-1.jpg",
    projectUrl: "http://grovedaleflooring.com.au",
    color: "#0D9F8A",
  },

  {
    slug: "whole-nutrition",
    title: "Whole Nutrition",
    category: "E-commerce",
    year: "2023",
    summary:
      "A nutrition-focused website designed to present products and services through a clean and user-friendly digital experience.",
    outcome: "Improved online customer experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/nutrition-1.jpg",
    projectUrl: "https://wholenutrition.co.in/",
    color: "#E85D04",
  },

  {
    slug: "utah-senior-planning",
    title: "Utah Senior Planning",
    category: "E-commerce",
    year: "2023",
    summary:
      "A professional web platform created to provide clear information and an accessible digital experience for senior planning services.",
    outcome: "Accessible and informative web experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/utahseniorplanning-1.jpg",
    projectUrl: "https://www.utahseniorplanning.com/",
    color: "#1B6BFF",
  },

  // EDUCATION
  {
    slug: "meritto",
    title: "MERITTO",
    category: "Education",
    year: "2023",
    summary:
      "An education-focused digital platform built to provide a smooth and accessible online experience for students and education services.",
    outcome: "Streamlined digital education experience",
    technology: "PHP",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/merittoonline-1.jpg",
    projectUrl: "http://meritto.in/",
    color: "#6B5B95",
  },

  {
    slug: "simbans",
    title: "Simbans",
    category: "Education",
    year: "2023",
    summary:
      "A modern education technology platform designed to deliver a user-friendly online experience and showcase educational products.",
    outcome: "Improved online education experience",
    technology: "Shopify",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/simbans-1.jpg",
    projectUrl: "https://www.simbans.com/",
    color: "#1B6BFF",
  },

  {
    slug: "bkj-public-school",
    title: "BKJ Public School",
    category: "Education",
    year: "2023",
    summary:
      "A professional school website designed to present academic information, facilities, and school activities through a clear digital experience.",
    outcome: "Modern school web presence",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/bkj-1.jpg",
    projectUrl: "https://bkjsappleorchardschool.in/",
    color: "#2A9D8F",
  },

  // FOOD & RESTAURANT
  {
    slug: "starlite-cuisine",
    title: "Starlite Cuisine",
    category: "Food & Restaurant",
    year: "2023",
    summary:
      "A professional restaurant website designed to showcase the brand, menu, and dining experience through an engaging digital presence.",
    outcome: "Modern and engaging restaurant web experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/starlitecuisine-1.jpg",
    projectUrl: "https://starlitecuisine.com",
    color: "#E85D04",
  },

  // HEALTHCARE
  {
    slug: "grovedale-flooring",
    title: "Grovedale Flooring",
    category: "Healthcare",
    year: "2023",
    summary:
      "A professional healthcare-focused digital experience designed to present services and information through a clean and accessible website.",
    outcome: "Modern and accessible healthcare web experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/grovedaleflooring-1.jpg",
    projectUrl: "http://grovedaleflooring.com.au",
    color: "#0D9F8A",
  },
  {
    slug: "whole-nutrition",
    title: "Whole Nutrition",
    category: "Healthcare",
    year: "2023",
    summary:
      "A nutrition-focused website built to provide users with a clear, engaging, and easy-to-navigate digital experience.",
    outcome: "Improved online nutrition experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/nutrition-1.jpg",
    projectUrl: "https://wholenutrition.co.in/",
    color: "#E85D04",
  },
  {
    slug: "utah-senior-planning",
    title: "Utah Senior Planning",
    category: "Healthcare",
    year: "2023",
    summary:
      "A senior planning website designed to provide clear information and an accessible digital experience for users seeking planning services.",
    outcome: "Accessible and informative digital experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/utahseniorplanning-1.jpg",
    projectUrl: "https://www.utahseniorplanning.com/",
    color: "#1B6BFF",
  },


  // REAL ESTATE
  {
    slug: "grovedale-flooring",
    title: "Grovedale Flooring",
    category: "Real Estate",
    year: "2023",
    summary:
      "A professional real estate-focused website designed to showcase services and properties through a clean and engaging digital experience.",
    outcome: "Modern real estate web experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/grovedaleflooring-1.jpg",
    projectUrl: "http://grovedaleflooring.com.au",
    color: "#0D9F8A",
  },
  {
    slug: "whole-nutrition",
    title: "Whole Nutrition",
    category: "Real Estate",
    year: "2023",
    summary:
      "A user-friendly website built to present information and services with a clear, professional, and responsive digital experience.",
    outcome: "Improved online customer experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/nutrition-1.jpg",
    projectUrl: "https://wholenutrition.co.in/",
    color: "#E85D04",
  },
  {
    slug: "utah-senior-planning",
    title: "Utah Senior Planning",
    category: "Real Estate",
    year: "2023",
    summary:
      "A professional service website designed to provide clear information and an accessible digital experience for its audience.",
    outcome: "Accessible and informative web experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/utahseniorplanning-1.jpg",
    projectUrl: "https://www.utahseniorplanning.com/",
    color: "#1B6BFF",
  },

  // TOURS & TRAVEL
  {
    slug: "kathiroll-eatery",
    title: "Kathiroll Eatery",
    category: "Tours & Travel",
    year: "2023",
    summary:
      "A professional website designed to create an engaging online presence with a simple and user-friendly digital experience.",
    outcome: "Modern and engaging web experience",
    technology: "WordPress",
    image:
      "https://outstripinfotech.com/wp-content/uploads/2023/01/kathirolleatery-1.jpg",
    projectUrl: "http://www.thekathirollexpress.com",
    color: "#0077B6",
  },
];

export const caseStudies = [
  {
    slug: "ecommerce-revenue-rebuild",
    title: "Rebuilding revenue for a mid-market retailer",
    client: "Nordic Commerce",
    industry: "E-commerce",
    challenge:
      "Legacy Magento store with slow checkout, fragmented inventory, and declining conversion.",
    approach:
      "Re-architected the storefront, streamlined checkout, integrated real-time inventory, and tuned performance + SEO.",
    results: ["38% higher checkout completion", "22% faster page loads", "19% increase in AOV"],
    services: ["E-commerce", "Web Development", "SEO"],
  },
  {
    slug: "healthcare-scheduling",
    title: "Making healthcare appointments effortless",
    client: "Pulse Health",
    industry: "Healthcare",
    challenge:
      "Patients abandoned booking flows; staff spent hours on phone scheduling.",
    approach:
      "Designed a secure responsive web app with smart scheduling, reminders, and role-based admin tools.",
    results: ["2.4× faster booking", "45% fewer no-shows", "Staff time saved ~18 hrs/week"],
    services: ["Web Development", "UI/UX Design"],
  },
  {
    slug: "food-ordering-platform",
    title: "Building a modern ordering experience for a restaurant group",
    client: "Food Hub",
    industry: "Food & Restaurant",
    challenge:
      "Manual phone orders and a disconnected reservation system capped growth across locations.",
    approach:
      "Built a unified online ordering, reservations, and loyalty platform with real-time kitchen integration.",
    results: ["42% increase in online orders", "30% fewer reservation no-shows", "Unified ordering across all locations"],
    services: ["Web Development", "UI/UX Design", "E-commerce"],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
  service?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Initial version needed tweaking, but the team fixed it without friction and delivered a strong final product.",
    author: "Rudi",
    role: "Product Client",
    company: "Independent",
    rating: 5,
    service: "Web Development",
  },
  {
    quote:
      "Excellent team members. I prefer these guys for apps, websites, APIs, CMS, and frameworks going forward.",
    author: "Manish Jangir",
    role: "Business Owner",
    company: "Jangir Enterprises",
    rating: 5,
    service: "Mobile App Development",
  },
  {
    quote:
      "Reliable communication and delivery. OUTSTRIP turned a messy brief into a polished, production-ready platform.",
    author: "Scruffsl",
    role: "Startup Founder",
    company: "Scruffsl Labs",
    rating: 5,
    service: "Web Development",
  },
  {
    quote:
      "The team understood our requirements quickly and transformed our ideas into a clean, intuitive, and scalable product.",
    author: "Arjun Mehta",
    role: "Technology Lead",
    company: "Meridian Tech",
    rating: 5,
    service: "UI/UX Design",
  },
  {
    quote:
      "Very professional approach from start to finish. The communication was clear, timelines were respected, and the final result exceeded expectations.",
    author: "Neha Sharma",
    role: "Business Consultant",
    company: "Sharma Consulting",
    rating: 5,
    service: "Digital Marketing",
  },
  {
    quote:
      "OUTSTRIP delivered exactly what we needed with excellent attention to detail. The overall experience was smooth and professional.",
    author: "Daniel Carter",
    role: "Product Manager",
    company: "Carter & Co.",
    rating: 5,
    service: "E-commerce",
  },
  {
    quote:
      "What impressed us most was their ability to understand a complex requirement and turn it into a simple, user-friendly solution.",
    author: "Priya Kapoor",
    role: "Founder & CEO",
    company: "Kapoor Ventures",
    rating: 5,
    service: "Web Development",
  },
  {
    quote:
      "Great technical expertise and excellent support throughout the project. I would definitely recommend the team for future development work.",
    author: "Rahul Verma",
    role: "Startup Founder",
    company: "Verma Digital",
    rating: 5,
    service: "Mobile App Development",
  },
  {
    quote:
      "The quality of development and attention to performance was impressive. Everything was delivered in a clean and production-ready state.",
    author: "Alex Morgan",
    role: "Product Owner",
    company: "Morgan & Field",
    rating: 5,
    service: "Web Development",
  },
  {
    quote:
      "A dependable development partner with strong communication, fast execution, and a genuine focus on delivering the right solution.",
    author: "Sakshi Gupta",
    role: "Business Owner",
    company: "Gupta Retail Group",
    rating: 5,
    service: "E-commerce",
  },
];

export const leadership = [
  { name: "Gaurav Jain", role: "Co-Founder" },
  { name: "Saarubah Jain", role: "CEO" },
];

export const team = [
  {
    name: "Mahesh Verma",
    role: "Business Development Manager",
    image: {
      src: "/images/team/mahesh-verma.jpg",
      alt: "Mahesh Verma",
    },
  },
  {
    name: "Vimal Kumavat",
    role: "Business Analyst",
    image: {
      src: "/images/team/vimal-kumavat.jpg",
      alt: "Vimal Kumavat",
    },
  },
  {
    name: "Manish Gupta",
    role: "Sr. Magento Developer",
    image: {
      src: "/images/team/manish-gupta.jpg",
      alt: "Manish Gupta",
    },
  },
  {
    name: "Rinku Saini",
    role: "Sr. UI/UX Designer",
    image: {
      src: "/images/team/rinku-saini.jpg",
      alt: "Rinku Saini",
    },
  },
];

export const values = [
  {
    title: "Fully functional",
    description: "We ship complete systems — not demos that break under real usage.",
  },
  {
    title: "24/7 support",
    description: "Post-launch partnership so your product stays stable as you scale.",
  },
  {
    title: "Clear communication",
    description: "Transparent updates, defined milestones, and stakeholders always aligned.",
  },
  {
    title: "Secure by design",
    description: "ISO-aligned practices and secure coding standards from day one.",
  },
];

export const careers = [
  {
    id: "fe-01",
    title: "Senior Frontend Engineer",
    type: "Full-time",
    location: "Jaipur / Hybrid",
    department: "Engineering",
    yearsExperience: "3+ Years",
    summary:
      "Build performant React/Next.js interfaces with motion-rich UX and strict quality bars.",

    responsibilities: [
      "Build scalable and reusable React.js and Next.js components.",
      "Develop responsive, accessible, and high-performance user interfaces.",
      "Work closely with designers and backend developers to deliver complete features.",
      "Improve frontend performance, code quality, and overall user experience.",
      "Review code and contribute to frontend architecture and best practices.",
    ],

    requirements: [
      "3+ years of professional frontend development experience.",
      "Strong experience with React.js and Next.js.",
      "Good knowledge of JavaScript, TypeScript, HTML, and CSS.",
      "Experience with Tailwind CSS or similar styling frameworks.",
      "Understanding of REST APIs, Git, and modern frontend development workflows.",
    ],
  },

  {
    id: "be-02",
    title: "Laravel Backend Developer",
    type: "Full-time",
    location: "Jaipur",
    department: "Engineering",
    yearsExperience: "2+ Years",
    summary:
      "Design APIs, data models, and integrations for high-traffic web and mobile products.",

    responsibilities: [
      "Develop and maintain scalable Laravel applications and REST APIs.",
      "Design efficient database schemas and backend architecture.",
      "Integrate third-party APIs and external services.",
      "Optimize application performance, security, and reliability.",
      "Collaborate with frontend developers to deliver complete product features.",
    ],

    requirements: [
      "2+ years of experience with Laravel and PHP.",
      "Strong knowledge of MySQL or other relational databases.",
      "Experience building RESTful APIs.",
      "Understanding of authentication, authorization, and API security.",
      "Good knowledge of Git and backend development best practices.",
    ],
  },

  {
    id: "ux-03",
    title: "Product Designer (UI/UX)",
    type: "Full-time",
    location: "Jaipur / Remote",
    department: "Design",
    yearsExperience: "2+ Years",
    summary:
      "Craft end-to-end product experiences — research, systems, and high-fidelity UI.",

    responsibilities: [
      "Create user flows, wireframes, prototypes, and high-fidelity designs.",
      "Design intuitive and visually engaging web and mobile experiences.",
      "Work with developers to ensure accurate design implementation.",
      "Create and maintain reusable design systems and UI components.",
      "Conduct user research and use insights to improve product experiences.",
    ],

    requirements: [
      "2+ years of professional UI/UX or product design experience.",
      "Strong proficiency in Figma.",
      "Good understanding of UX principles and responsive design.",
      "Experience designing web and mobile applications.",
      "Strong visual, communication, and problem-solving skills.",
    ],
  },

  {
    id: "mkt-04",
    title: "SEO & Growth Specialist",
    type: "Full-time",
    location: "Jaipur",
    department: "Marketing",
    yearsExperience: "2+ Years",
    summary:
      "Own technical SEO, content strategy, and measurable acquisition programs for clients.",

    responsibilities: [
      "Develop and execute SEO strategies for websites and digital products.",
      "Perform keyword research, competitor analysis, and technical SEO audits.",
      "Plan and optimize content for organic search growth.",
      "Monitor search performance using analytics and SEO tools.",
      "Prepare performance reports and identify opportunities for continuous growth.",
    ],

    requirements: [
      "2+ years of hands-on SEO experience.",
      "Strong understanding of on-page, off-page, and technical SEO.",
      "Experience with Google Search Console and Google Analytics.",
      "Good understanding of keyword research and content optimization.",
      "Strong analytical, communication, and reporting skills.",
    ],
  },
];

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "code"; code: string; language?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string };
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "modern-web-architecture-2026",
    title: "Modern web architecture choices for growing businesses",
    excerpt:
      "How to pick stacks that ship fast today without locking you into expensive rewrites tomorrow.",
    category: "Engineering",
    date: "2026-03-12",
    readTime: "6 min",
    author: { name: "Gaurav Jain", role: "Founder" },
    content: [
      {
        type: "paragraph",
        text: "Every founder eventually asks the same question: which stack will actually hold up as the business grows? The honest answer is that there is no universally \"correct\" stack — only the right stack for your team's stage, budget, and delivery timeline.",
      },
      {
        type: "heading",
        text: "Start with constraints, not trends",
      },
      {
        type: "paragraph",
        text: "Before picking a framework, we map three constraints: how fast the first version needs to ship, how many engineers will maintain it in year two, and where the traffic is expected to concentrate. Those three answers eliminate most of the debate before it starts.",
      },
      {
        type: "list",
        items: [
          "Time-to-first-release beats theoretical scalability for an MVP",
          "Boring, well-documented tools reduce onboarding time for new hires",
          "Infrastructure should scale independently from application logic",
          "Rewrites are expensive — architecture decisions should default to reversible ones",
        ],
      },
      {
        type: "quote",
        text: "The best architecture is the one your team can operate confidently at 2am during an incident — not the one that looked impressive in a proposal deck.",
      },
      {
        type: "heading",
        text: "Where Next.js earns its place",
      },
      {
        type: "paragraph",
        text: "For most product-led businesses we work with, a React-based framework like Next.js hits the sweet spot: server rendering for SEO-sensitive pages, static generation for marketing content, and a single codebase that scales from a five-page marketing site to a full application shell.",
      },
      {
        type: "code",
        language: "ts",
        code: "export async function generateStaticParams() {\n  return posts.map((post) => ({ slug: post.slug }));\n}",
      },
      {
        type: "paragraph",
        text: "Whether you are shipping a first storefront, modernizing a legacy stack, or building a mobile workflow for field teams, the same principles apply: reduce ambiguity, protect performance, and keep the experience human.",
      },
    ],
  },
  {
    slug: "mobile-retention-patterns",
    title: "Mobile retention patterns that actually move the needle",
    excerpt:
      "UX and product tactics we use to keep users returning — beyond push notifications.",
    category: "Product",
    date: "2026-02-04",
    readTime: "5 min",
    author: { name: "Rinku Saini", role: "Sr. UI/UX Designer" },
    content: [
      {
        type: "paragraph",
        text: "Push notifications get the credit, but they are rarely the reason users come back. Retention is decided in the first three sessions — by whether the product proves its value before the novelty wears off.",
      },
      {
        type: "heading",
        text: "Design for the second session, not just the first",
      },
      {
        type: "paragraph",
        text: "Most onboarding flows are optimized for a good first impression and stop there. We design explicitly for the moment a user opens the app a second time — making sure there is a reason to stay, not just a reason to have downloaded it.",
      },
      {
        type: "list",
        items: [
          "Surface a personal, saved, or in-progress state on re-open",
          "Replace generic empty states with a single clear next action",
          "Time re-engagement prompts to real usage patterns, not fixed schedules",
          "Track day-1, day-7, and day-30 retention separately — they fail for different reasons",
        ],
      },
      {
        type: "quote",
        text: "A notification can bring someone back once. Only a product that respects their time brings them back on their own.",
      },
      {
        type: "paragraph",
        text: "If this resonates with a challenge on your roadmap, we would love to talk through options and a practical delivery plan.",
      },
    ],
  },
  {
    slug: "seo-for-product-sites",
    title: "SEO for product companies: technical foundations",
    excerpt:
      "A practical checklist for Core Web Vitals, structured content, and crawlable architecture.",
    category: "Growth",
    date: "2026-01-18",
    readTime: "7 min",
    author: { name: "Mahesh Verma", role: "Business Development Manager" },
    content: [
      {
        type: "paragraph",
        text: "Technical SEO is often treated as a launch-week checklist instead of an architectural decision. For product companies, that mindset quietly caps organic growth for years.",
      },
      {
        type: "heading",
        text: "The foundations that compound",
      },
      {
        type: "paragraph",
        text: "Core Web Vitals, crawlable routing, and structured content are not one-off tasks — they are properties of how the site is built. Get them right in the architecture and every future page inherits the benefit automatically.",
      },
      {
        type: "list",
        items: [
          "Server-render or statically generate any page that needs to rank",
          "Keep Largest Contentful Paint under 2.5s on real mobile hardware, not just desktop Lighthouse",
          "Use semantic headings and structured data so crawlers understand hierarchy, not just text",
          "Treat sitemaps and canonical URLs as generated artifacts, not hand-maintained files",
        ],
      },
      {
        type: "quote",
        text: "Rankings follow architecture. Fix the foundation and the content team stops fighting the platform.",
      },
      {
        type: "paragraph",
        text: "Whether you are shipping a first storefront, modernizing a legacy stack, or building a mobile workflow for field teams, the same principles apply: reduce ambiguity, protect performance, and keep the experience human.",
      },
    ],
  },
  {
    slug: "design-systems-that-scale",
    title: "Design systems that scale with your engineering team",
    excerpt:
      "Why tokens, components, and documentation matter more than another one-off landing page.",
    category: "Design",
    date: "2025-12-09",
    readTime: "4 min",
    author: { name: "Vimal Kumavat", role: "Business Analyst" },
    content: [
      {
        type: "paragraph",
        text: "A design system is not a component library — it is a shared decision-making layer between design and engineering. Teams that treat it as a Figma file usually rebuild it from scratch within a year.",
      },
      {
        type: "heading",
        text: "Tokens before components",
      },
      {
        type: "paragraph",
        text: "Color, spacing, and typography tokens are the layer that actually scales. Components change shape constantly as products evolve; tokens are what keep those changing components visually consistent without a full redesign.",
      },
      {
        type: "list",
        items: [
          "Define tokens as CSS variables so theming and dark mode stay centralized",
          "Document intent, not just values — why an accent color exists, not just its hex code",
          "Version the system separately from the product so teams can adopt changes deliberately",
        ],
      },
      {
        type: "quote",
        text: "Why tokens, components, and documentation matter more than another one-off landing page: they are what let ten engineers ship in one voice.",
      },
      {
        type: "paragraph",
        text: "At OUTSTRIP, we treat every engagement as a product partnership — not a ticket queue. That means clarifying outcomes early, choosing architecture that matches the stage of the business, and measuring success after launch.",
      },
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Clarify goals, users, constraints, and success metrics before a line of code.",
  },
  {
    step: "02",
    title: "Design",
    description: "Shape information architecture, interfaces, and prototypes stakeholders can feel.",
  },
  {
    step: "03",
    title: "Build",
    description: "Engineer secure, maintainable software with iterative demos and quality gates.",
  },
  {
    step: "04",
    title: "Launch & grow",
    description: "Ship, measure, optimize — then keep improving with support and growth loops.",
  },
];

export const growthPartners = [
  {
    name: "YGI Group",
    short: "YGI",
    logo: "/images/about/client1.png",
    category: "Client Partner",
  },
  {
    name: "QMI Solutions",
    short: "QMI",
    logo: "/images/about/client2.png",
    category: "Client Partner",
  },
  {
    name: "REKAS",
    short: "REKAS",
    logo: "/images/about/client3.png",
    category: "Client Partner",
  },
  {
    name: "BKJ's",
    short: "BKJ's",
    logo: "/images/about/client4.png",
    category: "Client Partner",
  },
];

export const faqs = [
  {
    question: "What services does OUTSTRIP provide?",
    answer:
      "Web and mobile app development, e-commerce, UI/UX design, digital marketing, and hosting/cloud infrastructure — most engagements combine two or more of these under one team.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused MVP usually ships in 6–10 weeks. Larger platforms run 3–6 months, scoped into milestones so you see working software early and often — not just at the end.",
  },
  {
    question: "Can I hire a dedicated developer or team?",
    answer:
      "Yes. Choose a dedicated team embedded in your roadmap, a fixed-scope build with a set price and timeline, or hourly staff augmentation added to your existing team. See Hire Developers for details.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Every engagement includes a post-launch support window, and we offer ongoing maintenance and growth retainers for clients who want a long-term partner rather than a one-off vendor.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "Laravel, Next.js, Magento, WordPress, Salesforce, and native/cross-platform mobile stacks, backed by AWS and Google Cloud infrastructure — matched to what's right for your product, not a fixed template.",
  },
  {
    question: "Is my project information kept confidential?",
    answer:
      "Yes. We work under NDA on request and follow ISO/IEC 27001:2013-aligned information-security practices across every engagement.",
  },
];

