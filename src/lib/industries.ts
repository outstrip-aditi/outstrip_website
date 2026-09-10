export type IndustryStat = {
  value: number;
  suffix: string;
  label: string;
};

export type IndustryPoint = {
  title: string;
  description: string;
};

export type ProvideItem = {
  title: string;
  description: string;
  icon: string;
};

export type TechItem = {
  name: string;
  description: string;
};

export type TechCategory = {
  key: string;
  label: string;
  items: TechItem[];
};

export type ShowcaseItem = {
  title: string;
  tag: string;
  description: string;
};

export type IndustryAbout = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  points: {
    title: string;
    description: string;
  }[];
};

export type Industry = {
  slug: string;
  title: string;
  tagline: string;
  headline: string;
  description: string;
  intro: string;
  aboutImage: string;
  about: IndustryAbout;
  icon: string;
  stats: IndustryStat[];
  challenges: IndustryPoint[];
  solutions: IndustryPoint[];
  features: string[];
  whatWeProvide: ProvideItem[];
  techStack: TechCategory[];
  showcase: ShowcaseItem[];
};

export const industries: Industry[] = [
  {
    slug: "edtech",
    title: "EdTech",
    aboutImage: "/images/industries/education.png",
    about: {
      eyebrow: "Industry Overview",
      title: "Transforming the way people learn",
      description:
        "EdTech businesses need more than a simple learning platform. They need digital experiences that keep students engaged, help educators work smarter, and give institutions complete visibility into learning outcomes.",
      intro:
        "We create scalable learning ecosystems covering LMS platforms, online classrooms, assessments, student management, attendance, analytics, and certification — all designed around the real needs of modern education.",
      points: [
        {
          title: "Engaging Learning Experiences",
          description:
            "Create intuitive learning journeys that help students stay motivated and complete their courses.",
        },
        {
          title: "Connected Education Ecosystem",
          description:
            "Bring students, teachers, administrators, content, assessments, and analytics together in one platform.",
        },
        {
          title: "Built to Scale",
          description:
            "Handle growing learners, courses, content, and peak exam traffic without compromising performance.",
        },
      ],
    },
    tagline: "Learning platforms that scale",
    headline: "Digital learning experiences students actually finish",
    description: "Learning platforms and content experiences that engage students and institutions.",
    intro:
      "We build LMS platforms, cohort-based courses, and assessment tools that keep learners engaged from enrollment through certification — and hold up when everyone logs in at once.",
    icon: "edtech",
    stats: [
      { value: 40, suffix: "+", label: "Learning platforms shipped" },
      { value: 12000, suffix: "+", label: "Active learners supported" },
      { value: 98, suffix: "%", label: "Uptime during peak exam season" },
      { value: 35, suffix: "%", label: "Avg. lift in course completion" },
    ],
    challenges: [
      { title: "Learner drop-off", description: "Generic course flows lose students before they reach certification." },
      { title: "Content at scale", description: "Video, quizzes, and cohorts need infrastructure that doesn't buckle under peak enrollment." },
      { title: "Fragmented progress data", description: "Instructors lack real-time visibility into where learners struggle." },
    ],
    solutions: [
      { title: "Adaptive learning paths", description: "Personalized sequencing that adjusts to pace and performance." },
      { title: "Scalable content delivery", description: "CDN-backed video and asset pipelines built for exam-week traffic." },
      { title: "Instructor analytics", description: "Dashboards surfacing engagement and at-risk learners in real time." },
      { title: "Engagement & retention", description: "Personalized notifications, progress nudges, and learning insights that keep students moving toward completion.", },
    ],
    features: [
      "Cohort & self-paced learning modes",
      "Auto-graded assessments & quizzes",
      "Certificates & progress tracking",
      "Live class & virtual classroom integration",
      "Student & teacher role-based portals",
      "Attendance & participation management",
      "Learning analytics & performance dashboards",
      "Course content & curriculum management",
    ],
    whatWeProvide: [
      { title: "Learning Management System", description: "Course authoring, content libraries, and structured curricula for institutions of any size.", icon: "book" },
      { title: "Student & Teacher Portals", description: "Role-based dashboards for coursework, grading, communication, and resources.", icon: "users" },
      { title: "Online Exams & Auto-Grading", description: "Proctored assessments with instant, rubric-based grading at scale.", icon: "check" },
      { title: "Attendance Management", description: "Automated attendance tracking across classrooms, cohorts, and live sessions.", icon: "clipboard" },
      { title: "Student Ranking & Analytics", description: "Performance leaderboards and progress analytics for learners and faculty.", icon: "chart" },
      { title: "Live Classes & E-Learning", description: "Virtual classrooms, recorded lectures, and self-paced modules in one platform.", icon: "video" },
    ],
    techStack: [
      {
        key: "frontend", label: "Frontend", items: [
          { name: "React", description: "Component-driven interfaces for dashboards and course players." },
          { name: "Next.js", description: "Fast, SEO-ready pages for course catalogs and marketing." },
          { name: "TailwindCSS", description: "Consistent, responsive styling across every screen." },
          { name: "TypeScript", description: "Type-safe logic across grading, quizzes, and progress tracking." },
        ]
      },
      {
        key: "backend", label: "Backend", items: [
          { name: "Node.js", description: "Real-time services for live classes and notifications." },
          { name: "Laravel", description: "Robust APIs for grading, enrollment, and content workflows." },
          { name: "GraphQL", description: "Flexible data fetching across student and instructor apps." },
          { name: "Socket.io", description: "Live classroom presence, chat, and instant notifications." },
        ]
      },
      {
        key: "database", label: "Database", items: [
          { name: "PostgreSQL", description: "Reliable storage for grades, enrollment, and progress records." },
          { name: "MongoDB", description: "Flexible schemas for course content and quiz structures." },
          { name: "Redis", description: "Caching and session state for high-concurrency exam windows." },
          { name: "Firebase", description: "Realtime sync for live quizzes and classroom presence." },
        ]
      },
      {
        key: "mobile", label: "Mobile", items: [
          { name: "React Native", description: "Cross-platform apps for learners on the go." },
          { name: "Flutter", description: "Native-feel mobile experiences for student portals." },
          { name: "iOS", description: "Polished native touches for Apple learners and educators." },
          { name: "Android", description: "Optimized learning apps for the widest device reach." },
        ]
      },
      {
        key: "cloud", label: "Cloud & DevOps", items: [
          { name: "AWS", description: "Scalable hosting and storage for video and course assets." },
          { name: "Docker", description: "Consistent environments from development to production." },
          { name: "Vercel", description: "Instant deploys and previews for fast-moving content teams." },
          { name: "GitHub Actions", description: "Automated testing and deployment on every release." },
        ]
      },
      {
        key: "integrations", label: "Integrations & Tools", items: [
          { name: "Zoom", description: "Live class and virtual classroom video integration." },
          { name: "Stripe", description: "Course purchases, subscriptions, and institutional billing." },
          { name: "Sentry", description: "Real-time error tracking across student-facing apps." },
          { name: "Postman", description: "API testing and documentation for integration partners." },
        ]
      },
    ],
    showcase: [
      { title: "Cohort-Based Course Platform", tag: "LMS", description: "Structured, instructor-led programs with milestones and peer cohorts." },
      { title: "School ERP & Attendance Suite", tag: "Operations", description: "Unified academic and administrative management for institutions." },
      { title: "Proctored Online Exam System", tag: "Assessment", description: "Secure, timed exams with anti-cheating safeguards and analytics." },
      { title: "Corporate Training Portal", tag: "L&D", description: "Onboarding and upskilling tracks with certification tracking." },
      { title: "K-12 Parent-Teacher App", tag: "Engagement", description: "Real-time progress updates and communication for families." },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    aboutImage: "/images/industries/healthcare.png",
    about: {
      eyebrow: "Healthcare Technology",
      title: "Technology that puts better care first",
      description:
        "Healthcare organizations need secure and reliable digital systems that simplify complex workflows while keeping patient experiences simple.",
      intro:
        "We build connected healthcare platforms for patients, doctors, clinics, hospitals, pharmacies, and care teams — from appointment scheduling and patient management to telehealth and health-tech integrations.",
      points: [
        {
          title: "Patient-Centered Experiences",
          description:
            "Make appointments, consultations, records, and communication easier for patients.",
        },
        {
          title: "Connected Care Operations",
          description:
            "Connect clinical, administrative, billing, pharmacy, and communication workflows.",
        },
        {
          title: "Secure & Reliable",
          description:
            "Build healthcare applications with strong access control, data protection, and reliable infrastructure.",
        },
      ],
    },
    tagline: "Care experiences patients trust",
    headline: "Secure, responsive healthcare software",
    description: "Secure, responsive digital experiences optimized for care providers and patients.",
    intro:
      "From patient scheduling to telehealth, we build compliant digital experiences that reduce friction for patients and free up time for care teams.",
    icon: "healthcare",
    stats: [
      { value: 25, suffix: "+", label: "Healthcare products delivered" },
      { value: 45, suffix: "%", label: "Fewer no-shows after launch" },
      { value: 2, suffix: "×", label: "Faster appointment booking" },
      { value: 99, suffix: "%", label: "Platform uptime" },
    ],
    challenges: [
      { title: "Compliance pressure", description: "Patient data demands rigorous security without slowing down care teams." },
      { title: "Booking friction", description: "Clunky scheduling pushes patients back to the phone." },
      { title: "Disconnected records", description: "Staff lose time reconciling data across siloed systems." },
    ],
    solutions: [
      { title: "Secure patient portals", description: "Encrypted, role-based access to records, scheduling, and messaging." },
      { title: "Smart scheduling", description: "Automated reminders and waitlists that cut no-shows." },
      { title: "Telehealth integration", description: "Reliable video consults built into the existing patient journey." },
      { title: "Connected care workflows", description: "Bring patients, providers, appointments, records, and communication into one streamlined digital workflow.", },
    ],
    features: [
      "Role-based patient & staff access",
      "Online appointment scheduling",
      "Automated SMS & appointment reminders",
      "Telehealth & video consultation",
      "Patient records & care management",
      "Billing, insurance & payment integration",
      "Audit logs & activity tracking",
      "Healthcare system & device integrations",
    ],
    whatWeProvide: [
      { title: "Patient Management System", description: "Centralized records, history, and care plans accessible across departments.", icon: "activity" },
      { title: "Appointment & Scheduling", description: "Self-service booking, automated reminders, and provider calendars.", icon: "calendar" },
      { title: "Telehealth & Video Consults", description: "HIPAA-conscious video visits integrated into the patient journey.", icon: "video" },
      { title: "Hospital & Clinic Management", description: "EHR/EMR workflows spanning admissions, billing, and discharge.", icon: "shield" },
      { title: "Pharmacy & Billing Integration", description: "Connected prescriptions, invoicing, and insurance claims.", icon: "package" },
      { title: "Health-Tech Integrations", description: "Wearables, labs, and HL7/FHIR-ready data exchange.", icon: "wifi" },
    ],
    techStack: [
      {
        key: "frontend", label: "Frontend", items: [
          { name: "React", description: "Accessible, responsive interfaces for patient portals." },
          { name: "Next.js", description: "Fast-loading pages for provider directories and intake." },
          { name: "TypeScript", description: "Type-safe forms for sensitive clinical data entry." },
          { name: "TailwindCSS", description: "Calm, accessible styling tuned for every age group." },
        ]
      },
      {
        key: "backend", label: "Backend", items: [
          { name: "Laravel", description: "Structured APIs for records, billing, and scheduling logic." },
          { name: "Node.js", description: "Real-time services for queues, alerts, and messaging." },
          { name: "PHP", description: "Battle-tested logic for legacy hospital system integrations." },
          { name: "Express", description: "Lightweight services for scheduling and notification APIs." },
        ]
      },
      {
        key: "database", label: "Database", items: [
          { name: "PostgreSQL", description: "ACID-compliant storage for patient and clinical records." },
          { name: "MongoDB", description: "Flexible storage for device and monitoring data streams." },
          { name: "Redis", description: "Session and queue management for scheduling systems." },
          { name: "SQLite", description: "Lightweight embedded storage for offline clinic tools." },
        ]
      },
      {
        key: "mobile", label: "Mobile", items: [
          { name: "React Native", description: "Cross-platform apps for patients and care teams." },
          { name: "Swift", description: "Native iOS experiences for provider-facing tools." },
          { name: "Kotlin", description: "Native Android builds for field and home-care staff." },
          { name: "Android", description: "Reliable apps for community health workers in the field." },
        ]
      },
      {
        key: "cloud", label: "Cloud & DevOps", items: [
          { name: "AWS", description: "Compliant hosting with encryption at rest and in transit." },
          { name: "Docker", description: "Isolated, auditable deployment environments." },
          { name: "Kubernetes", description: "Resilient orchestration for uptime-critical services." },
          { name: "Azure", description: "Healthcare-grade cloud for hybrid hospital deployments." },
        ]
      },
      {
        key: "integrations", label: "Integrations & Tools", items: [
          { name: "Twilio", description: "Video visits, SMS reminders, and telehealth infrastructure." },
          { name: "WebRTC", description: "Low-latency, peer-to-peer video for virtual consultations." },
          { name: "Sentry", description: "Proactive monitoring for care-critical application flows." },
          { name: "Postman", description: "Testing and documentation for HL7/FHIR-style integrations." },
        ]
      },
    ],
    showcase: [
      { title: "Patient Portal & EHR", tag: "Records", description: "Unified access to history, results, and care plans." },
      { title: "Telemedicine Consult App", tag: "Telehealth", description: "Video visits with integrated notes and prescriptions." },
      { title: "Hospital Management System", tag: "Operations", description: "Admissions, bed management, and department coordination." },
      { title: "Pharmacy Ordering Platform", tag: "Pharmacy", description: "Prescription fulfillment with insurance and billing sync." },
      { title: "Remote Patient Monitoring", tag: "Health-Tech", description: "Wearable and device data streamed to care teams in real time." },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce",
    aboutImage: "/images/industries/e-commerce.png",
    about: {
      eyebrow: "E-Commerce Technology",
      title: "Digital commerce experiences built to convert",
      description:
        "Modern commerce businesses need fast storefronts, frictionless checkout, accurate inventory, and connected customer experiences across every sales channel.",
      intro:
        "We build complete commerce ecosystems covering custom storefronts, marketplaces, payments, inventory, order management, personalization, and mobile shopping experiences — helping brands turn traffic into repeat revenue.",
      points: [
        {
          title: "Conversion-First Experiences",
          description:
            "Create fast, intuitive shopping journeys that reduce friction from product discovery to checkout.",
        },
        {
          title: "Connected Commerce Operations",
          description:
            "Bring products, inventory, orders, payments, marketplaces, and customer data together in one ecosystem.",
        },
        {
          title: "Ready for Growth",
          description:
            "Build flexible commerce infrastructure that can scale with products, customers, campaigns, and peak traffic.",
        },
      ],
    },
    tagline: "Storefronts built to convert",
    headline: "Revenue-ready commerce platforms",
    description: "Own your channel — or sell on Amazon and social — with storefronts built to drive online revenue.",
    intro:
      "We design and engineer storefronts, checkout flows, and inventory systems that turn browsers into repeat buyers, on every channel you sell through.",
    icon: "ecommerce",
    stats: [
      { value: 60, suffix: "+", label: "Storefronts launched" },
      { value: 38, suffix: "%", label: "Avg. lift in checkout completion" },
      { value: 22, suffix: "%", label: "Faster page loads" },
      { value: 19, suffix: "%", label: "Increase in average order value" },
    ],
    challenges: [
      { title: "Cart abandonment", description: "Slow, confusing checkout flows lose sales at the last step." },
      { title: "Inventory drift", description: "Disconnected systems cause overselling and stockouts." },
      { title: "Seasonal traffic spikes", description: "Platforms buckle during sales events and campaigns." },
    ],
    solutions: [
      { title: "Conversion-focused checkout", description: "Streamlined flows with fewer steps and clearer trust signals." },
      { title: "Real-time inventory sync", description: "A single source of truth across channels and warehouses." },
      { title: "Performance-first builds", description: "Fast, resilient storefronts that hold up under peak load." },
      { title: "Personalized shopping journeys", description: "Use customer behavior, product data, and intelligent recommendations to create more relevant shopping experiences.", },
    ],
    features: [
      "Multi-currency & multi-region commerce",
      "Real-time inventory synchronization",
      "Custom checkout & payment flows",
      "Marketplace integrations",
      "Multi-vendor seller management",
      "Order & fulfillment management",
      "Personalized product recommendations",
      "Customer accounts, offers & loyalty",
    ],
    whatWeProvide: [
      { title: "Custom Storefronts", description: "Branded, high-performance shopping experiences built to convert.", icon: "cart" },
      { title: "Multi-Vendor Marketplaces", description: "Vendor onboarding, commissions, and unified order management.", icon: "grid" },
      { title: "Inventory & Order Management", description: "Real-time stock sync across warehouses, stores, and channels.", icon: "package" },
      { title: "Payment Gateway Integration", description: "Secure, localized checkout with the payment methods buyers expect.", icon: "card" },
      { title: "Marketplace Integrations", description: "Amazon, Instagram, and social commerce sync from one dashboard.", icon: "layers" },
      { title: "Personalized Recommendations", description: "Search and merchandising tuned to boost average order value.", icon: "trending" },
    ],
    techStack: [
      {
        key: "frontend", label: "Frontend", items: [
          { name: "Next.js", description: "SEO-optimized, fast-loading storefronts." },
          { name: "React", description: "Reusable UI for product, cart, and checkout flows." },
          { name: "TailwindCSS", description: "On-brand styling that ships quickly and consistently." },
          { name: "Redux", description: "Predictable cart and checkout state across the funnel." },
        ]
      },
      {
        key: "backend", label: "Backend", items: [
          { name: "Node.js", description: "High-throughput APIs for catalog and order processing." },
          { name: "Magento", description: "Enterprise-grade commerce logic for complex catalogs." },
          { name: "PHP", description: "Proven foundation for large-scale storefront platforms." },
          { name: "GraphQL", description: "Efficient product and inventory data across storefronts." },
        ]
      },
      {
        key: "database", label: "Database", items: [
          { name: "MySQL", description: "Reliable relational storage for orders and catalogs." },
          { name: "Redis", description: "Cart, session, and cache layer for fast browsing." },
          { name: "Elasticsearch", description: "Fast, relevant product search and filtering." },
          { name: "MongoDB", description: "Flexible storage for reviews, wishlists, and catalogs." },
        ]
      },
      {
        key: "mobile", label: "Mobile", items: [
          { name: "React Native", description: "Shared codebase for iOS and Android shopping apps." },
          { name: "Flutter", description: "Smooth, native-feel mobile commerce experiences." },
          { name: "iOS", description: "Native checkout polish for Apple Pay shoppers." },
          { name: "Android", description: "Optimized commerce apps for the broadest device reach." },
        ]
      },
      {
        key: "cloud", label: "Cloud", items: [
          { name: "AWS", description: "Elastic infrastructure for traffic spikes and sales events." },
          { name: "Docker", description: "Consistent deployment across staging and production." },
          { name: "Cloudflare", description: "Edge caching and protection for storefront traffic." },
          { name: "Vercel", description: "Instant previews and deploys for storefront experiments." },
        ]
      },
      {
        key: "payments", label: "Payments & Integrations", items: [
          { name: "Stripe", description: "Global payments with fraud protection built in." },
          { name: "PayPal", description: "Trusted checkout option for buyer confidence." },
          { name: "Shopify", description: "Rapid storefront launches with a rich app ecosystem." },
          { name: "Algolia", description: "Instant, typo-tolerant product search and discovery." },
        ]
      },
    ],
    showcase: [
      { title: "D2C Storefront", tag: "Retail", description: "Branded shopping experience optimized for repeat purchases." },
      { title: "Multi-Vendor Marketplace", tag: "Marketplace", description: "Vendor management with commissions and payouts built in." },
      { title: "Amazon Seller Tools", tag: "Marketplace", description: "Listing, pricing, and fulfillment sync for marketplace sellers." },
      { title: "Subscription Commerce", tag: "Recurring", description: "Recurring billing and box-style subscription management." },
      { title: "Social Commerce Storefront", tag: "Social", description: "Shoppable content synced across Instagram and TikTok." },
    ],
  },
  {
    slug: "tours-travel",
    title: "Tours & Travel",
    aboutImage: "/images/industries/travels.png",
    about: {
      eyebrow: "Travel Technology",
      title: "Turning travel discovery into memorable journeys",
      description:
        "Travel businesses need digital experiences that inspire confidence, simplify complex itineraries, and make every step from discovery to booking feel effortless.",
      intro:
        "We build travel platforms covering destination discovery, itinerary planning, bookings, payments, reviews, agent portals, and loyalty — combining rich content with high-performance booking experiences.",
      points: [
        {
          title: "Inspiring Discovery",
          description:
            "Create immersive destination experiences that help travelers discover, compare, and confidently choose their next trip.",
        },
        {
          title: "Frictionless Booking",
          description:
            "Simplify complex multi-traveler and multi-leg booking journeys with clear flows and instant confirmations.",
        },
        {
          title: "Built for Seasonal Growth",
          description:
            "Handle changing demand, high-intent traffic, and seasonal booking peaks with scalable infrastructure.",
        },
      ],
    },
    tagline: "Booking journeys people complete",
    headline: "Travel experiences worth booking",
    description: "Travel destination discovery and booking journeys that turn browsing into confirmed trips.",
    intro:
      "We build discovery, booking, and itinerary tools that turn browsing into confirmed trips — with content that ranks and flows that convert.",
    icon: "tours-travel",
    stats: [
      { value: 18, suffix: "+", label: "Travel platforms delivered" },
      { value: 61, suffix: "%", label: "Organic traffic growth" },
      { value: 3, suffix: "×", label: "More completed bookings" },
      { value: 40, suffix: "%", label: "Lower support inquiries" },
    ],
    challenges: [
      { title: "Complex itineraries", description: "Multi-leg trips are hard to browse, compare, and book confidently." },
      { title: "SEO-dependent discovery", description: "Destination content must rank to drive organic bookings." },
      { title: "Seasonal demand swings", description: "Traffic and booking volume vary sharply by season." },
    ],
    solutions: [
      { title: "Immersive destination storytelling", description: "Rich visuals and content that build booking confidence." },
      { title: "SEO-first architecture", description: "Crawlable, fast pages that rank for high-intent searches." },
      { title: "Flexible booking flows", description: "Multi-leg, multi-traveler booking without friction." },
      { title: "Automated traveler communication", description: "Keep travelers informed with automated confirmations, reminders, itinerary updates, and post-trip communication.", },
    ],
    features: [
      "Dynamic itinerary builder",
      "SEO-optimized destination pages",
      "Multi-currency booking",
      "Multi-traveler booking workflows",
      "Travel agent & B2B portals",
      "Review & rating integration",
      "Loyalty & rewards management",
      "Booking, payment & confirmation automation",
    ],
    whatWeProvide: [
      { title: "Destination Discovery Platform", description: "Rich, visual content hubs that inspire and inform trip planning.", icon: "map" },
      { title: "Multi-Leg Itinerary Builder", description: "Drag-and-drop trip planning across flights, stays, and activities.", icon: "layers" },
      { title: "Booking & Payment Engine", description: "Multi-currency, multi-traveler booking with instant confirmation.", icon: "card" },
      { title: "Travel Agent / B2B Portal", description: "Bulk booking, commissions, and white-label tools for partners.", icon: "users" },
      { title: "Reviews & Ratings", description: "Trust-building traveler feedback woven into every listing.", icon: "star" },
      { title: "Loyalty & Rewards", description: "Points, tiers, and perks that bring travelers back.", icon: "gift" },
    ],
    techStack: [
      {
        key: "frontend", label: "Frontend", items: [
          { name: "Next.js", description: "SEO-first rendering for destination and listing pages." },
          { name: "React", description: "Interactive itinerary builders and search filters." },
          { name: "TailwindCSS", description: "Visually rich, responsive layouts across devices." },
          { name: "TypeScript", description: "Type-safe pricing, availability, and booking logic." },
        ]
      },
      {
        key: "backend", label: "Backend", items: [
          { name: "Node.js", description: "Booking orchestration across flights, stays, and activities." },
          { name: "GraphQL", description: "Efficient data fetching for complex, nested itineraries." },
          { name: "Express", description: "Lightweight services for search and pricing APIs." },
          { name: "PHP", description: "Reliable logic for supplier and agent integrations." },
        ]
      },
      {
        key: "database", label: "Database", items: [
          { name: "PostgreSQL", description: "Reliable storage for bookings, pricing, and availability." },
          { name: "Redis", description: "Fast caching for high-traffic destination searches." },
          { name: "MongoDB", description: "Flexible storage for itineraries and traveler content." },
          { name: "Elasticsearch", description: "Fast, faceted search across destinations and packages." },
        ]
      },
      {
        key: "mobile", label: "Mobile", items: [
          { name: "React Native", description: "Cross-platform trip planning and booking on the go." },
          { name: "Flutter", description: "Native-feel apps for itinerary tracking and check-ins." },
          { name: "iOS", description: "Native wallet and pass integrations for travelers." },
          { name: "Android", description: "Offline-ready apps for travelers on the move." },
        ]
      },
      {
        key: "cloud", label: "Cloud", items: [
          { name: "AWS", description: "Scalable infrastructure for seasonal demand spikes." },
          { name: "Docker", description: "Consistent environments across booking services." },
          { name: "Vercel", description: "Fast previews and deploys for content-heavy pages." },
          { name: "Cloudflare", description: "Edge caching for image-heavy destination content." },
        ]
      },
      {
        key: "integrations", label: "Integrations & Tools", items: [
          { name: "Google Maps", description: "Destination mapping and location-aware discovery." },
          { name: "Mapbox", description: "Custom, branded map experiences for itineraries." },
          { name: "Stripe", description: "Multi-currency payments for global travelers." },
          { name: "Algolia", description: "Instant search across destinations and packages." },
        ]
      },
    ],
    showcase: [
      { title: "OTA Booking Platform", tag: "Booking", description: "End-to-end online travel agency experience." },
      { title: "Tour Package Marketplace", tag: "Marketplace", description: "Curated packages from multiple tour operators." },
      { title: "Travel Agent CRM", tag: "B2B", description: "Lead, itinerary, and commission tracking for agents." },
      { title: "Destination Content Hub", tag: "Content", description: "SEO-driven guides that convert readers into bookers." },
      { title: "Group & Corporate Travel Portal", tag: "Corporate", description: "Bulk booking and approval workflows for organizations." },
    ],
  },
  {
    slug: "media",
    title: "Media",
    aboutImage: "/images/industries/media.png",
    about: {
      eyebrow: "Media Technology",
      title: "Digital experiences designed to hold attention",
      description:
        "Media businesses compete for attention across publishing, video, audio, and social channels, making speed, personalization, and reliable content delivery essential.",
      intro:
        "We build modern media ecosystems covering headless publishing, streaming, subscriptions, recommendations, monetization, and analytics — giving content teams the flexibility to move fast while audiences get seamless experiences.",
      points: [
        {
          title: "Faster Content Experiences",
          description:
            "Help editorial and content teams publish quickly through flexible, scalable digital platforms.",
        },
        {
          title: "Personalized Engagement",
          description:
            "Use content discovery and recommendation experiences to keep readers and viewers coming back.",
        },
        {
          title: "Flexible Monetization",
          description:
            "Support subscriptions, paywalls, advertising, and creator revenue models without compromising user experience.",
        },
      ],
    },
    tagline: "Content platforms built to hold attention",
    headline: "Publishing & streaming experiences that scale",
    description: "Publishing and streaming platforms engineered for speed, content velocity, and audience growth.",
    intro:
      "We build content platforms — from publishing tools to streaming experiences — engineered for speed, editorial velocity, and audience growth.",
    icon: "media",
    stats: [
      { value: 10, suffix: "+", label: "Media platforms delivered" },
      { value: 2, suffix: "×", label: "Faster content publishing" },
      { value: 99, suffix: "%", label: "Streaming uptime" },
      { value: 45, suffix: "%", label: "Lower page load time" },
    ],
    challenges: [
      { title: "Content velocity", description: "Editorial teams need to publish fast without breaking the platform." },
      { title: "Audience retention", description: "Generic feeds fail to keep readers and viewers coming back." },
      { title: "Monetization complexity", description: "Ads, subscriptions, and paywalls must coexist without hurting UX." },
    ],
    solutions: [
      { title: "Headless content architecture", description: "Editorial teams publish independently of engineering release cycles." },
      { title: "Personalized feeds", description: "Recommendation logic that keeps audiences engaged longer." },
      { title: "Flexible monetization", description: "Subscriptions, ads, and paywalls integrated without friction." },
      { title: "Audience growth & retention", description: "Turn audience behavior into actionable insights that improve engagement, retention, and long-term revenue.", },
    ],
    features: [
      "Headless CMS integration",
      "Adaptive video & audio streaming",
      "Subscription & paywall management",
      "Real-time audience analytics",
      "Personalized content recommendations",
      "Advertising & monetization tools",
      "Content scheduling & publishing workflows",
      "Multi-platform content delivery",
    ],
    whatWeProvide: [
      { title: "Headless CMS & Publishing", description: "Editorial workflows decoupled from engineering release cycles.", icon: "book" },
      { title: "Video & Audio Streaming", description: "Adaptive bitrate streaming for on-demand and live content.", icon: "video" },
      { title: "Subscription & Paywall Management", description: "Metered access, tiers, and billing built for retention.", icon: "card" },
      { title: "Ad Management & Monetization", description: "Programmatic and direct ad placements without hurting UX.", icon: "trending" },
      { title: "Content Recommendation Engine", description: "Personalized feeds that keep audiences coming back.", icon: "star" },
      { title: "Real-Time Analytics Dashboard", description: "Engagement, retention, and revenue insight in one view.", icon: "chart" },
    ],
    techStack: [
      {
        key: "frontend", label: "Frontend", items: [
          { name: "Next.js", description: "Fast, SEO-friendly rendering for articles and video pages." },
          { name: "React", description: "Rich, interactive players and reading experiences." },
          { name: "TypeScript", description: "Reliable, maintainable code across large editorial teams." },
          { name: "TailwindCSS", description: "Consistent, on-brand styling across publishing surfaces." },
        ]
      },
      {
        key: "backend", label: "Backend", items: [
          { name: "Node.js", description: "Real-time services for live streaming and comments." },
          { name: "GraphQL", description: "Flexible content delivery across web, mobile, and TV apps." },
          { name: "Express", description: "Lightweight APIs for feeds, comments, and moderation." },
          { name: "Socket.io", description: "Live chat and real-time audience interaction." },
        ]
      },
      {
        key: "database", label: "Database", items: [
          { name: "MongoDB", description: "Flexible storage for varied content types and metadata." },
          { name: "Redis", description: "Caching for high-traffic articles and trending feeds." },
          { name: "Elasticsearch", description: "Fast full-text search across large content archives." },
          { name: "PostgreSQL", description: "Reliable storage for subscriptions and billing records." },
        ]
      },
      {
        key: "mobile", label: "Mobile", items: [
          { name: "React Native", description: "Shared codebase for reading and viewing apps." },
          { name: "Android", description: "Native Android streaming and offline playback." },
          { name: "iOS", description: "Native playback and push notifications for readers." },
          { name: "Flutter", description: "Cross-platform apps for lightweight publishing brands." },
        ]
      },
      {
        key: "cloud", label: "Cloud & Delivery", items: [
          { name: "AWS", description: "Video transcoding, storage, and global delivery." },
          { name: "Cloudflare", description: "CDN performance and protection at the edge." },
          { name: "Docker", description: "Consistent environments for editorial services." },
          { name: "Vercel", description: "Instant previews for editorial and marketing pages." },
        ]
      },
      {
        key: "integrations", label: "Integrations & Tools", items: [
          { name: "Stripe", description: "Subscription billing and paywall payments." },
          { name: "Sentry", description: "Real-time error monitoring across playback and reading." },
          { name: "FFmpeg", description: "Video and audio transcoding for every format and device." },
          { name: "Postman", description: "API testing for syndication and partner integrations." },
        ]
      },
    ],
    showcase: [
      { title: "OTT Streaming Platform", tag: "Video", description: "On-demand and live streaming with adaptive playback." },
      { title: "Digital Publishing Portal", tag: "Publishing", description: "Headless CMS-powered news and magazine experience." },
      { title: "Podcast & Audio Platform", tag: "Audio", description: "Hosting, distribution, and listener analytics." },
      { title: "News Aggregator App", tag: "Content", description: "Personalized feeds pulled from multiple sources." },
      { title: "Creator Monetization Suite", tag: "Revenue", description: "Tipping, subscriptions, and ad revenue sharing for creators." },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    aboutImage: "/images/industries/real_Estate.png",
    about: {
      eyebrow: "Real Estate Technology",
      title: "Making property discovery simple and effective",
      description:
        "Real estate platforms need more than property listings. Buyers, renters, agents, and property managers need fast search, rich media, qualified leads, and connected workflows.",
      intro:
        "We build digital real estate ecosystems covering property discovery, map search, virtual tours, agent CRM, lead management, finance tools, and property operations — designed to make every interaction easier.",
      points: [
        {
          title: "Smarter Property Discovery",
          description:
            "Make it easy for buyers and renters to find relevant properties through fast search, maps, filters, and saved alerts.",
        },
        {
          title: "Better Lead Management",
          description:
            "Connect inquiries, appointments, agents, and sales pipelines so teams can focus on qualified opportunities.",
        },
        {
          title: "Rich Property Experiences",
          description:
            "Deliver fast galleries, virtual tours, 3D walkthroughs, and detailed property information across every device.",
        },
      ],
    },
    tagline: "Listings that convert lookers into leads",
    headline: "Property platforms built to convert",
    description: "Property discovery and listing platforms that look sharp on every device.",
    intro:
      "We build listing, discovery, and lead-management tools that make property search feel effortless — for buyers, renters, and agents alike.",
    icon: "real-estate",
    stats: [
      { value: 14, suffix: "+", label: "Real estate platforms delivered" },
      { value: 33, suffix: "%", label: "More qualified leads" },
      { value: 2, suffix: "×", label: "Faster listing search" },
      { value: 28, suffix: "%", label: "Higher inquiry-to-tour rate" },
    ],
    challenges: [
      { title: "Slow, cluttered search", description: "Buyers abandon listings platforms that are hard to filter and browse." },
      { title: "Lead quality", description: "Generic contact forms produce low-intent, hard-to-convert leads." },
      { title: "Media-heavy listings", description: "High-resolution photos and virtual tours need to load fast." },
    ],
    solutions: [
      { title: "Fast, filterable search", description: "Map-based discovery with instant filtering and saved searches." },
      { title: "Qualified lead capture", description: "Contextual forms and scheduling that surface serious buyers." },
      { title: "Optimized media delivery", description: "Fast-loading galleries and virtual tours on every device." },
      { title: "Automated property engagement", description: "Keep buyers, renters, and agents engaged with instant alerts, follow-ups, appointment reminders, and personalized property recommendations.", },
    ],
    features: [
      "Map-based property search",
      "Advanced property filters",
      "Virtual tours & 3D walkthroughs",
      "Saved searches & property alerts",
      "Agent & lead CRM integration",
      "Mortgage & investment calculators",
      "Property management workflows",
      "Property analytics & market insights",
    ],
    whatWeProvide: [
      { title: "Property Listing Platform", description: "Rich, searchable listings with fast-loading media galleries.", icon: "home" },
      { title: "Map-Based Search & Filters", description: "Interactive maps with instant filtering by price, type, and location.", icon: "map" },
      { title: "Virtual Tours & 3D Walkthroughs", description: "Immersive property previews that reduce unnecessary site visits.", icon: "camera" },
      { title: "Agent & Lead CRM", description: "Pipeline tracking from inquiry through closed deal.", icon: "users" },
      { title: "Mortgage & Finance Calculators", description: "Built-in affordability tools that qualify serious buyers.", icon: "card" },
      { title: "Property Management Portal", description: "Rent collection, maintenance requests, and tenant communication.", icon: "key" },
    ],
    techStack: [
      {
        key: "frontend", label: "Frontend", items: [
          { name: "Next.js", description: "Fast, image-heavy listing pages that still rank well." },
          { name: "React", description: "Interactive maps, filters, and comparison tools." },
          { name: "TailwindCSS", description: "Polished, consistent UI across listings and dashboards." },
          { name: "TypeScript", description: "Type-safe listing, pricing, and lead-capture logic." },
        ]
      },
      {
        key: "backend", label: "Backend", items: [
          { name: "Laravel", description: "Structured APIs for listings, leads, and CRM data." },
          { name: "Node.js", description: "Real-time updates for saved searches and alerts." },
          { name: "PHP", description: "Proven logic for MLS and listing-syndication integrations." },
          { name: "GraphQL", description: "Efficient data fetching across listings and agent tools." },
        ]
      },
      {
        key: "database", label: "Database", items: [
          { name: "PostgreSQL", description: "Geospatial-ready storage for listings and search." },
          { name: "Redis", description: "Fast caching for high-traffic map and search queries." },
          { name: "MySQL", description: "Reliable relational storage for CRM and lead records." },
          { name: "MongoDB", description: "Flexible storage for property media and metadata." },
        ]
      },
      {
        key: "mobile", label: "Mobile", items: [
          { name: "React Native", description: "On-the-go browsing and saved search alerts." },
          { name: "iOS", description: "Native touches for agent-facing tools." },
          { name: "Android", description: "Reliable listing apps for the broadest buyer reach." },
          { name: "Flutter", description: "Cross-platform apps for agent and broker portals." },
        ]
      },
      {
        key: "cloud", label: "Cloud", items: [
          { name: "AWS", description: "Scalable media storage and delivery for listing photos." },
          { name: "Cloudflare", description: "Fast, protected image and video delivery." },
          { name: "Docker", description: "Consistent environments for listing and CRM services." },
          { name: "Vercel", description: "Instant previews for listing and marketing pages." },
        ]
      },
      {
        key: "integrations", label: "Integrations & Tools", items: [
          { name: "Google Maps", description: "Neighborhood, commute, and location-based search." },
          { name: "Mapbox", description: "Custom-styled maps for listing discovery." },
          { name: "Cloudinary", description: "Optimized delivery for photos and virtual tours." },
          { name: "Stripe", description: "Deposits, application fees, and rent payments." },
        ]
      },
    ],
    showcase: [
      { title: "Listings Marketplace", tag: "Search", description: "Map-based discovery with saved searches and alerts." },
      { title: "Agent CRM & Lead Portal", tag: "CRM", description: "Pipeline management from lead to closed sale." },
      { title: "Rental Management System", tag: "Property Mgmt", description: "Rent collection, leases, and maintenance tracking." },
      { title: "Virtual Tour Platform", tag: "Media", description: "3D walkthroughs embedded directly in listings." },
      { title: "Investment Analytics Dashboard", tag: "Analytics", description: "ROI and market trend insight for property investors." },
    ],
  },
  {
    slug: "foodtech",
    title: "FoodTech",
    aboutImage: "/images/industries/foodteach.png",
    about: {
      eyebrow: "FoodTech Technology",
      title: "Technology that keeps food operations moving",
      description:
        "Food and delivery businesses operate in a high-pressure environment where every second matters. Digital systems need to stay fast, accurate, and connected during peak hours.",
      intro:
        "We build food-tech ecosystems covering online ordering, delivery, kitchen operations, loyalty, inventory, and multi-channel aggregation — helping restaurants and food brands serve customers faster.",
      points: [
        {
          title: "Faster Ordering Experiences",
          description:
            "Create simple ordering journeys that help customers discover menus, customize orders, pay, and track deliveries.",
        },
        {
          title: "Connected Kitchen Operations",
          description:
            "Connect orders, kitchen displays, inventory, riders, and delivery partners in real time.",
        },
        {
          title: "Peak-Hour Reliability",
          description:
            "Build resilient systems that continue performing when order volumes spike during lunch, dinner, and campaigns.",
        },
      ],
    },
    tagline: "Ordering & delivery that keeps kitchens moving",
    headline: "Ordering systems built for real kitchens",
    description: "Ordering, delivery, and cloud-kitchen systems that keep kitchens moving.",
    intro:
      "We build ordering, delivery, and cloud-kitchen systems that keep orders flowing and kitchens efficient — even during the dinner rush.",
    icon: "foodtech",
    stats: [
      { value: 12, suffix: "+", label: "Food & delivery platforms built" },
      { value: 27, suffix: "%", label: "Fewer order errors" },
      { value: 2, suffix: "×", label: "Faster order-to-kitchen time" },
      { value: 99, suffix: "%", label: "Order uptime at peak hours" },
    ],
    challenges: [
      { title: "Rush-hour load", description: "Order volume spikes fast — platforms need to keep up without errors." },
      { title: "Multi-channel ordering", description: "Web, app, and delivery-partner orders must reconcile in real time." },
      { title: "Kitchen coordination", description: "Orders need to reach the right station without manual re-entry." },
    ],
    solutions: [
      { title: "Real-time order routing", description: "Orders sync instantly from any channel straight to the kitchen display." },
      { title: "Resilient peak-hour infrastructure", description: "Built to hold steady through lunch and dinner rushes." },
      { title: "Unified order management", description: "One dashboard across web, app, and delivery partners." },
      { title: "Customer retention & growth", description: "Use loyalty, personalized offers, and customer insights to increase repeat orders and build long-term relationships.", },
    ],
    features: [
      "Live order tracking",
      "Kitchen display system integration",
      "Multi-channel order synchronization",
      "Delivery partner API integration",
      "Online ordering & menu management",
      "Real-time delivery & rider tracking",
      "Loyalty, offers & rewards",
      "Cloud kitchen & multi-brand management",
    ],
    whatWeProvide: [
      { title: "Online Ordering System", description: "Branded web and app ordering with real-time menu management.", icon: "cart" },
      { title: "Delivery & Logistics Management", description: "Live rider tracking, routing, and delivery-time estimates.", icon: "truck" },
      { title: "Kitchen Display System", description: "Orders routed instantly to the right station, no re-entry.", icon: "monitor" },
      { title: "Cloud Kitchen Management", description: "Multi-brand menu and inventory control from one dashboard.", icon: "grid" },
      { title: "Loyalty & Rewards", description: "Points, offers, and repeat-order incentives built in.", icon: "gift" },
      { title: "Multi-Channel Order Aggregation", description: "Web, app, and delivery-partner orders unified in real time.", icon: "layers" },
    ],
    techStack: [
      {
        key: "frontend", label: "Frontend", items: [
          { name: "React", description: "Fast, responsive ordering flows for web and kiosk." },
          { name: "Next.js", description: "Quick-loading menu and restaurant pages." },
          { name: "TailwindCSS", description: "Consistent, on-brand styling across ordering apps." },
          { name: "Redux", description: "Predictable cart and order state during checkout." },
        ]
      },
      {
        key: "backend", label: "Backend", items: [
          { name: "Node.js", description: "Real-time order routing and kitchen display sync." },
          { name: "Socket.io", description: "Live order status updates across web and mobile." },
          { name: "Express", description: "Lightweight APIs for menus, orders, and delivery." },
          { name: "GraphQL", description: "Efficient data fetching across multi-brand menus." },
        ]
      },
      {
        key: "database", label: "Database", items: [
          { name: "PostgreSQL", description: "Reliable order, menu, and inventory records." },
          { name: "Redis", description: "Fast queueing for peak-hour order bursts." },
          { name: "MongoDB", description: "Flexible storage for menus and delivery zone data." },
          { name: "Elasticsearch", description: "Fast restaurant and dish search and discovery." },
        ]
      },
      {
        key: "mobile", label: "Mobile", items: [
          { name: "React Native", description: "Customer and rider apps from a shared codebase." },
          { name: "Android", description: "Native rider apps optimized for low-end devices." },
          { name: "iOS", description: "Polished ordering experience for iPhone customers." },
          { name: "Flutter", description: "Cross-platform apps for multi-brand cloud kitchens." },
        ]
      },
      {
        key: "cloud", label: "Cloud", items: [
          { name: "AWS", description: "Elastic infrastructure for lunch and dinner rush traffic." },
          { name: "Docker", description: "Consistent environments across ordering services." },
          { name: "Cloudflare", description: "Fast, protected delivery for menu images and assets." },
          { name: "Vercel", description: "Instant previews for menu and marketing pages." },
        ]
      },
      {
        key: "integrations", label: "Integrations & Tools", items: [
          { name: "Stripe", description: "Fast, reliable checkout for every order." },
          { name: "Twilio", description: "Order status SMS and delivery notifications." },
          { name: "Google Maps", description: "Live rider tracking and delivery-time estimates." },
          { name: "Razorpay", description: "Localized payment methods for regional ordering." },
        ]
      },
    ],
    showcase: [
      { title: "Restaurant Ordering App", tag: "Ordering", description: "Branded ordering experience with live menu updates." },
      { title: "Cloud Kitchen Platform", tag: "Operations", description: "Multi-brand kitchen and inventory management." },
      { title: "Delivery Partner Dashboard", tag: "Logistics", description: "Rider assignment, routing, and live tracking." },
      { title: "Table Reservation System", tag: "Dine-In", description: "Booking, waitlists, and table management for restaurants." },
      { title: "Multi-Brand Aggregator", tag: "Aggregation", description: "Unified ordering across delivery partners and channels." },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getRelatedIndustries(industry: Industry, limit = 3): Industry[] {
  return industries.filter((i) => i.slug !== industry.slug).slice(0, limit);
}
