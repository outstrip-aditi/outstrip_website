export type ServiceCategorySlug =
  | "web-development"
  | "ecommerce"
  | "hosting"
  | "mobile-application"
  | "web-design"
  | "digital-marketing";

export type ServiceStat = { value: number; suffix: string; label: string };
export type ServicePoint = { title: string; description: string; icon?: string };
export type ServiceProcessStep = { step: string; title: string; description: string };
export type ServiceTech = { name: string; icon: string; description: string };
export type ServiceFaq = { question: string; answer: string };
export type ServiceIndustryLink = { label: string; slug?: string };
export type ServiceOverviewType = {
  number?: string;
  title: string;
  description: string;
  points?: string[];
};

export type ServiceDetail = {
  slug: string;
  category: string;
  categorySlug: ServiceCategorySlug;
  title: string;
  shortTitle: string;
  tagline: string;
  headline: string;
  intro: string;
  description: string;
  heroImageKey: string;
  stats: ServiceStat[];
  overview: {
    title: string;
    types?: ServiceOverviewType[];
    paragraphs: string[];
    heroImage?: string;
  };
  whyChooseUs: ServicePoint[];
  features: string[];
  technologies: ServiceTech[];
  process: ServiceProcessStep[];
  benefits: ServicePoint[];
  useCases: ServicePoint[];
  industriesServed: ServiceIndustryLink[];
  faqs: ServiceFaq[];
  ctaTitle: string;
  ctaDescription: string;
  seo: { title: string; description: string; keywords: string[] };
};

export const serviceCategories: {
  slug: ServiceCategorySlug;
  title: string;
  description: string;
}[] = [
    {
      slug: "web-development",
      title: "Web Development",
      description:
        "Custom platforms, CMS builds, and enterprise applications across the stacks and frameworks your business already runs on.",
    },
    {
      slug: "ecommerce",
      title: "E-commerce",
      description:
        "Revenue-ready storefronts on Magento, WooCommerce, and OpenCart — built to convert and scale through peak demand.",
    },
    {
      slug: "hosting",
      title: "Hosting",
      description:
        "Managed hosting, cloud infrastructure, domains, SSL, and messaging so your products stay online, secure, and reachable.",
    },
    {
      slug: "mobile-application",
      title: "Mobile Application",
      description:
        "Native Android and iOS apps engineered for performance, retention, and a smooth path through app store review.",
    },
    {
      slug: "web-design",
      title: "Web Design",
      description:
        "Research-led design systems and custom, responsive interfaces that make every device feel like the primary one.",
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      description:
        "SEO, SMO, PPC, and social programs engineered for qualified traffic and measurable return — not vanity metrics.",
    },
  ];

export const services: ServiceDetail[] = [
  {
    slug: "wordpress",
    category: "Web Development",
    categorySlug: "web-development",
    title: "WordPress Development",
    shortTitle: "WordPress",
    tagline: "The world's CMS, built the right way",
    headline: "Custom WordPress builds that stay fast, secure, and easy to run",
    intro:
      "We design and build custom WordPress websites, themes, and plugins — from brochure sites to high-traffic publishing platforms and WooCommerce stores — without the plugin bloat that slows most WordPress builds down.",
    description:
      "Custom WordPress theme and plugin development, CMS architecture, performance tuning, and security hardening for businesses that need a site their team can actually manage.",
    heroImageKey: "wordpress",
    stats: [
      { value: 120, suffix: "+", label: "WordPress sites shipped" },
      { value: 99, suffix: "%", label: "Uptime on managed builds" },
      { value: 40, suffix: "%", label: "Avg. page-speed improvement" },
    ],
    overview: {
      title: "WordPress Development",
      paragraphs: [
        "WordPress is a free and open-source content management system (CMS) based on PHP and MySQL. To function, WordPress has to be installed on a web server, which would either be part of an Internet hosting service or a network host in its own right. The first may be an example of a service like WordPress.com outlook and other matters can be running a computer software package WordPress.org. A local computer may be used for single-user testing and learning purposes. Features include a plug-in architecture and a template system.",
        "As of January 2018, WordPress was by more than 29.4% of the top 10 million websites. WordPress is reportedly the most popular website manage-ment or blogging system in use on the Web, supporting more than 60 million websites. WordPress also other application has been used for the domain, such as comprehensive performance system (PDS).",
      ],
      heroImage: "/images/services/wordPress.png",
    },
    whyChooseUs: [
      { title: "Custom-built, not template-stacked", description: "Purpose-built themes and blocks instead of a generic theme buried under plugins.", icon: "layers" },
      { title: "Editor-friendly by design", description: "Clean, guided editing experiences so your content team ships updates independently.", icon: "grid" },
      { title: "Security hardened", description: "Hardened configs, managed updates, and malware monitoring baked into every build.", icon: "shield" },
      { title: "Performance tuned", description: "Caching, image optimization, and query tuning aimed at Core Web Vitals, not just Lighthouse screenshots.", icon: "trending" },
      { title: "Seamless legacy migration", description: "Clean migration from static sites or legacy CMS platforms with redirects and SEO equity preserved.", icon: "map" },
    ],
    features: [
      "Custom theme & block development",
      "Bespoke plugin development",
      "WooCommerce store integration",
      "Headless WordPress (WordPress + Next.js)",
      "Migration from legacy CMS or static sites",
      "Multisite & multilingual setup",
      "Core Web Vitals & speed optimization",
      "Security hardening & ongoing patching",
    ],
    technologies: [
      { name: "WordPress", icon: "wordpress", description: "Core CMS, custom post types, and the block editor." },
      { name: "PHP", icon: "php", description: "Custom plugin and theme logic." },
      { name: "MySQL", icon: "mysql", description: "Content and relational data storage." },
      { name: "WooCommerce", icon: "woocommerce", description: "Commerce layer for product-driven sites." },
      { name: "JavaScript", icon: "javascript", description: "Interactive blocks and admin tooling." },
      { name: "Nginx", icon: "nginx", description: "Caching and performance at the server layer." },
    ],
    process: [
      { step: "01", title: "Content & IA audit", description: "Map content types, editorial workflows, and the pages that actually need to exist." },
      { step: "02", title: "Theme & block design", description: "Build a custom theme and reusable blocks matched to your brand and editing needs." },
      { step: "03", title: "Build & integrate", description: "Develop, connect plugins/WooCommerce, and load-test before launch." },
      { step: "04", title: "Launch & train", description: "Go live, harden security, and train your team on the new admin." },
    ],
    benefits: [
      { title: "Lower total cost of ownership", description: "Fewer plugins and a lean core mean less to break and less to maintain." },
      { title: "Faster editorial velocity", description: "Custom blocks let non-technical teams publish confidently." },
      { title: "Better search visibility", description: "Semantic markup and speed tuning built in from day one." },
      { title: "Room to grow", description: "Headless-ready architecture if you outgrow classic WordPress rendering." },
      { title: "Future-ready architecture", description: "A flexible foundation that can evolve with new content, integrations, and business requirements." },
    ],
    useCases: [
      { title: "Corporate & marketing sites", description: "Fast, on-brand sites your marketing team can update without a developer." },
      { title: "Content & publishing platforms", description: "High-volume editorial workflows with custom taxonomies and layouts." },
      { title: "WooCommerce storefronts", description: "Product catalogs, checkout, and inventory built on a CMS your team knows." },
      { title: "Membership & gated content", description: "Login-gated resources, courses, and subscriber-only content." },
    ],
    industriesServed: [
      { label: "Media & Publishing", slug: "media" },
      { label: "E-commerce", slug: "ecommerce" },
      { label: "EdTech", slug: "edtech" },
      { label: "Real Estate", slug: "real-estate" },
    ],
    faqs: [
      { question: "Do you build on existing themes or from scratch?", answer: "Both — we'll recommend a lean, well-supported starting theme when it saves real time, or build fully custom when your design and performance needs call for it." },
      { question: "Can you migrate our existing WordPress or legacy site?", answer: "Yes. We handle content migration, redirect mapping, and SEO preservation as part of every rebuild." },
      { question: "Will our team be able to edit the site ourselves?", answer: "Yes — we design the admin and block library specifically so your team can update content without a developer on standby." },
      { question: "Do you offer ongoing WordPress maintenance?", answer: "Yes, including core/plugin updates, backups, uptime monitoring, and security patching under a support retainer." },
    ],
    ctaTitle: "Let's build a WordPress site your team can actually run",
    ctaDescription: "Tell us about your content, traffic, and goals — we'll scope a build that stays fast long after launch.",
    seo: {
      title: "WordPress Development Services",
      description: "Custom WordPress theme, plugin, and WooCommerce development — built for speed, security, and editorial teams that ship fast.",
      keywords: ["WordPress development", "custom WordPress theme", "WooCommerce development", "WordPress agency"],
    },
  },
  {
    slug: "asp-net",
    category: "Web Development",
    categorySlug: "web-development",
    title: "ASP.NET Development",
    shortTitle: "ASP.NET",
    tagline: "Enterprise-grade .NET applications",
    headline: "Secure, scalable applications on the .NET stack",
    intro:
      "We design and build ASP.NET Core web applications, APIs, and internal systems for businesses that need enterprise-grade reliability, strong typing, and deep Microsoft-ecosystem integration.",
    description:
      "ASP.NET Core web application and API development — from customer-facing portals to internal enterprise systems — engineered for security, performance, and long-term maintainability.",
    heroImageKey: "asp-net",
    stats: [
      { value: 35, suffix: "+", label: ".NET applications delivered" },
      { value: 99.9, suffix: "%", label: "Uptime on production systems" },
      { value: 10, suffix: "+", label: "Years of .NET delivery" },
    ],
    overview: {
      title: "Applications built on a stack that scales with enterprise demands",
      paragraphs: [
        "ASP.NET Core gives us a strongly typed, high-performance foundation for systems that need to be reliable for years, not just at launch — customer portals, internal tools, and APIs that other systems depend on.",
        "We build clean, layered architectures with proper dependency injection, automated testing, and CI/CD, so the codebase stays maintainable as your team and requirements grow.",
      ],
      heroImage: "/images/services/dotnet.png",
    },
    whyChooseUs: [
      { title: "Enterprise-ready architecture", description: "Layered, testable codebases designed for teams, not solo maintenance.", icon: "layers" },
      { title: "Deep Microsoft ecosystem fit", description: "Clean integration with Azure, Active Directory, SQL Server, and Office 365.", icon: "wifi" },
      { title: "Strong security posture", description: "Built-in authentication, authorization, and input validation from the start.", icon: "shield" },
      { title: "Performance at scale", description: "Async pipelines and caching strategies tuned for high-concurrency workloads.", icon: "trending" },
      { title: "CI/CD-driven delivery", description: "Automated testing and deployment pipelines that catch regressions before they reach production.", icon: "check" },
    ],
    features: [
      "ASP.NET Core MVC & Web API development",
      "Enterprise system & internal tooling builds",
      "SQL Server database design",
      "Azure Active Directory / identity integration",
      "RESTful & gRPC API development",
      "Legacy .NET Framework modernization",
      "Automated testing & CI/CD pipelines",
      "Azure cloud deployment & DevOps",
    ],
    technologies: [
      { name: ".NET", icon: "dotnet", description: "Core framework for web apps, APIs, and services." },
      { name: "MySQL", icon: "mysql", description: "Relational data layer where SQL Server isn't required." },
      { name: "JavaScript", icon: "javascript", description: "Frontend interactivity within Razor or SPA front ends." },
      { name: "TypeScript", icon: "typescript", description: "Typed frontend layers paired with .NET APIs." },
      { name: "Docker", icon: "docker", description: "Containerized deployment for consistent environments." },
      { name: "Git", icon: "git", description: "Version control and branching workflows." },
    ],
    process: [
      { step: "01", title: "Architecture & data modeling", description: "Define the domain model, data layer, and integration points up front." },
      { step: "02", title: "Core build", description: "Implement services, APIs, and business logic with automated test coverage." },
      { step: "03", title: "Integration & hardening", description: "Connect identity, third-party systems, and load-test under realistic traffic." },
      { step: "04", title: "Deploy & operate", description: "Ship via CI/CD, then monitor and support the system in production." },
    ],
    benefits: [
      { title: "Long-term maintainability", description: "Strong typing and layered architecture reduce regressions as the system grows." },
      { title: "Enterprise integration", description: "Fits cleanly into existing Microsoft infrastructure and identity systems." },
      { title: "Predictable performance", description: "Async, cache-aware design built to handle production load." },
      { title: "Lower long-run risk", description: "Automated tests and CI/CD catch issues before they reach users." },
      { title: "Scalable foundation", description: "A robust application structure that can evolve with new features, integrations, and business demands." },
    ],
    useCases: [
      { title: "Customer & partner portals", description: "Secure, role-based access to accounts, orders, or case data." },
      { title: "Internal business systems", description: "Operational tools that replace spreadsheets and manual processes." },
      { title: "Legacy modernization", description: "Migrating older .NET Framework apps to ASP.NET Core." },
      { title: "API platforms", description: "Backend services other applications and partners integrate against." },
    ],
    industriesServed: [
      { label: "Healthcare", slug: "healthcare" },
      { label: "FinTech", slug: "fintech" },
      { label: "Real Estate", slug: "real-estate" },
    ],
    faqs: [
      { question: "Can you modernize an existing .NET Framework application?", answer: "Yes — we assess the current codebase and plan an incremental migration to ASP.NET Core rather than a risky full rewrite." },
      { question: "Do you integrate with Azure and Active Directory?", answer: "Yes, including Azure AD authentication, Azure-hosted deployments, and integration with existing Microsoft infrastructure." },
      { question: "Is ASP.NET Core a good fit for a new project, or only enterprises?", answer: "It suits any project that values strong typing, long-term maintainability, and performance — from internal tools to customer-facing platforms." },
      { question: "Do you provide ongoing support after launch?", answer: "Yes, including monitoring, patching, and feature development under a support agreement." },
    ],
    ctaTitle: "Build your next system on a stack that won't outgrow you",
    ctaDescription: "Tell us about the system you need — we'll scope an ASP.NET Core architecture built to last.",
    seo: {
      title: "ASP.NET Development Services",
      description: "ASP.NET Core web application, API, and enterprise system development built for security, performance, and long-term maintainability.",
      keywords: ["ASP.NET development", ".NET Core development", "enterprise .NET application", "ASP.NET API"],
    },
  },
  {
    slug: "desktop-applications",
    category: "Web Development",
    categorySlug: "web-development",
    title: "Desktop Application Development",
    shortTitle: "Desktop Applications",
    tagline: "Software that lives on the desktop",
    headline: "Desktop applications built for speed and offline reliability",
    intro:
      "We build Windows and cross-platform desktop applications for businesses that need offline reliability, direct hardware access, or performance that a browser tab can't match.",
    description:
      "Custom desktop software development — from internal business tools to point-of-sale and data-heavy applications — built for offline use, speed, and native system integration.",
    heroImageKey: "desktop-applications",
    stats: [
      { value: 25, suffix: "+", label: "Desktop applications delivered" },
      { value: 100, suffix: "%", label: "Offline-capable builds" },
      { value: 15, suffix: "+", label: "Years supporting legacy desktop systems" },
    ],
    overview: {
      title: "When the browser isn't the right runtime",
      paragraphs: [
        "Some workloads still belong on the desktop — point-of-sale systems, manufacturing floor tools, offline-first data entry, or software that needs direct access to local hardware and file systems.",
        "We build these applications with the same engineering discipline as our web products: clean architecture, automated testing, and installers/updaters that make deployment across a fleet of machines simple.",
      ],
      heroImage: "/images/services/desktopApplication.png",
    },
    whyChooseUs: [
      { title: "True offline reliability", description: "Applications that work fully without a network connection, syncing when it's available.", icon: "wifi" },
      { title: "Native performance", description: "Direct access to local hardware, files, and system resources.", icon: "monitor" },
      { title: "Fleet-friendly deployment", description: "Installers and auto-update pipelines built for managing many machines.", icon: "layers" },
      { title: "Legacy modernization", description: "Rebuilding aging desktop tools without disrupting daily operations.", icon: "shield" },
      { title: "Deep hardware integration", description: "Direct integration with scanners, printers, and other peripherals your workflow depends on.", icon: "camera" },
    ],
    features: [
      "Windows desktop application development",
      "Cross-platform builds (Windows/macOS/Linux)",
      "Offline-first data storage & sync",
      "Point-of-sale & inventory tools",
      "Hardware & peripheral integration",
      "Auto-update & installer pipelines",
      "Legacy desktop software modernization",
      "Local database & reporting tools",
    ],
    technologies: [
      { name: ".NET", icon: "dotnet", description: "Windows desktop applications and business tooling." },
      { name: "JavaScript", icon: "javascript", description: "Cross-platform desktop apps via Electron-style shells." },
      { name: "MySQL", icon: "mysql", description: "Local and synced relational data storage." },
      { name: "Git", icon: "git", description: "Version control across long-lived desktop codebases." },
      { name: "Docker", icon: "docker", description: "Build pipelines and companion backend services." },
    ],
    process: [
      { step: "01", title: "Requirements & environment audit", description: "Understand hardware, OS targets, and offline/connectivity needs." },
      { step: "02", title: "Architecture & UI design", description: "Design the data layer, sync strategy, and native interface." },
      { step: "03", title: "Build & test", description: "Develop against target OS versions and real hardware where relevant." },
      { step: "04", title: "Package & deploy", description: "Ship installers, auto-updaters, and rollout support across machines." },
    ],
    benefits: [
      { title: "Works without internet", description: "Business keeps running through outages or unreliable connectivity." },
      { title: "Faster for data-heavy work", description: "Native performance for large datasets and local processing." },
      { title: "Full hardware access", description: "Integrate scanners, printers, and other peripherals directly." },
      { title: "Controlled rollout", description: "Manage versions and updates across an entire fleet of machines." },
      { title: "Seamless system integration", description: "Connect desktop workflows with existing business systems, databases, and operational tools." },
    ],
    useCases: [
      { title: "Point-of-sale systems", description: "Fast, reliable checkout tools that keep working during outages." },
      { title: "Manufacturing & warehouse tools", description: "Floor software with hardware integration and offline resilience." },
      { title: "Internal data & reporting tools", description: "Desktop apps for teams working with large local datasets." },
      { title: "Legacy system replacement", description: "Modern rebuilds of aging desktop software without workflow disruption." },
    ],
    industriesServed: [
      { label: "Real Estate", slug: "real-estate" },
      { label: "FoodTech", slug: "foodtech" },
      { label: "Healthcare", slug: "healthcare" },
    ],
    faqs: [
      { question: "Can the application work fully offline?", answer: "Yes — we design a local-first data layer that syncs when connectivity is available, so the app stays usable without internet." },
      { question: "Do you support both Windows and macOS?", answer: "Yes, we build native Windows applications and cross-platform desktop apps that run on Windows, macOS, and Linux where needed." },
      { question: "Can you integrate with hardware like scanners or printers?", answer: "Yes, we regularly integrate barcode scanners, receipt printers, card readers, and other peripherals." },
      { question: "How do updates get deployed across many machines?", answer: "We build auto-update pipelines and installers so updates roll out centrally without manual reinstalls per machine." },
    ],
    ctaTitle: "Build software that works with or without the internet",
    ctaDescription: "Tell us what your team needs from a desktop tool — we'll scope a build that fits your hardware and workflow.",
    seo: {
      title: "Desktop Application Development Services",
      description: "Custom Windows and cross-platform desktop application development for offline-first, hardware-integrated business software.",
      keywords: ["desktop application development", "Windows software development", "offline desktop app", "custom desktop software"],
    },
  },
  {
    slug: "php",
    category: "Web Development",
    categorySlug: "web-development",
    title: "PHP Development",
    shortTitle: "PHP",
    tagline: "Battle-tested, high-performance backends",
    headline: "PHP applications built for speed and long-term reliability",
    intro:
      "We build custom PHP web applications and APIs — from lean MVPs to complex, high-traffic platforms — using modern PHP practices instead of the legacy patterns that give PHP a bad name.",
    description:
      "Custom PHP application and API development with modern frameworks, clean architecture, and performance tuning built for platforms that need to scale reliably.",
    heroImageKey: "php",
    stats: [
      { value: 90, suffix: "+", label: "PHP projects delivered" },
      { value: 30, suffix: "%", label: "Avg. response time reduction" },
      { value: 14, suffix: "+", label: "Years building on PHP" },
    ],
    overview: {
      title: "Modern PHP, not the PHP of a decade ago",
      paragraphs: [
        "PHP still powers a huge share of the web because it's fast to develop with and easy to host at scale — when it's written well. We build on modern PHP with strict typing, dependency injection, and framework conventions (Laravel, CodeIgniter, or plain PHP where it fits) rather than tangled procedural scripts.",
        "That means clean, testable code, predictable performance under load, and a codebase your next developer can actually understand.",
      ],
      heroImage: "/images/services/php.png",
    },
    whyChooseUs: [
      { title: "Modern PHP practices", description: "Strict typing, PSR standards, and framework conventions — not legacy spaghetti.", icon: "layers" },
      { title: "Framework-flexible", description: "Laravel, CodeIgniter, or lightweight custom PHP, matched to project needs.", icon: "grid" },
      { title: "Performance focused", description: "Query optimization, caching, and profiling built into the process.", icon: "trending" },
      { title: "Secure by default", description: "Input validation, prepared statements, and OWASP-aligned practices throughout.", icon: "shield" },
      { title: "Legacy code, modernized", description: "Refactoring aging PHP codebases into clean, testable applications without a risky rewrite.", icon: "layers" },
    ],
    features: [
      "Custom PHP web application development",
      "RESTful API development",
      "Database design & query optimization",
      "Third-party API & payment gateway integration",
      "Legacy PHP application refactoring",
      "Caching & performance tuning",
      "Automated testing (PHPUnit)",
      "CI/CD & server deployment",
    ],
    technologies: [
      { name: "PHP", icon: "php", description: "Core application language across every project." },
      { name: "Laravel", icon: "laravel", description: "Framework of choice for structured, larger applications." },
      { name: "CodeIgniter", icon: "codeigniter", description: "Lightweight framework for lean, fast-to-ship builds." },
      { name: "MySQL", icon: "mysql", description: "Primary relational database layer." },
      { name: "Redis", icon: "redis", description: "Caching and session storage for high-traffic apps." },
      { name: "Nginx", icon: "nginx", description: "Web server and reverse proxy tuning." },
    ],
    process: [
      { step: "01", title: "Scope & architecture", description: "Define the data model, API surface, and framework fit." },
      { step: "02", title: "Build", description: "Develop with automated tests and code review at every stage." },
      { step: "03", title: "Optimize & harden", description: "Profile performance, tune queries, and lock down security." },
      { step: "04", title: "Deploy & support", description: "Ship via CI/CD and provide ongoing maintenance." },
    ],
    benefits: [
      { title: "Fast to build and host", description: "Mature ecosystem and wide hosting support keep costs predictable." },
      { title: "Scales with the right architecture", description: "Caching and query discipline keep performance stable under growth." },
      { title: "Large talent pool", description: "Easy to find developers to extend the codebase long-term." },
      { title: "Flexible integrations", description: "Well-suited to connecting payment gateways, CRMs, and third-party APIs." },
      { title: "Easy technology continuity", description: "A mature ecosystem makes it easier to maintain, extend, and hand over the application long-term." },
    ],
    useCases: [
      { title: "Business web applications", description: "Internal tools and customer-facing platforms built to scale." },
      { title: "API backends", description: "Services powering mobile apps, integrations, or partner platforms." },
      { title: "Legacy PHP modernization", description: "Refactoring aging codebases into maintainable, tested applications." },
      { title: "Content & booking platforms", description: "Data-driven sites with custom workflows beyond a standard CMS." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Tours & Travel", slug: "tours-travel" },
      { label: "Real Estate", slug: "real-estate" },
    ],
    faqs: [
      { question: "Do you write custom PHP or only build on frameworks?", answer: "Both — we use Laravel or CodeIgniter when the project benefits from structure, and lean custom PHP when a lighter footprint makes more sense." },
      { question: "Can you take over and improve an existing PHP codebase?", answer: "Yes, refactoring and modernizing legacy PHP applications is a regular part of our work." },
      { question: "How do you handle performance at scale?", answer: "Through query optimization, caching layers like Redis, and load testing before launch — not just after issues appear." },
      { question: "Do you handle hosting and deployment too?", answer: "Yes, we can set up and manage hosting, or work within your existing infrastructure and deployment pipeline." },
    ],
    ctaTitle: "Get a PHP backend that scales without the technical debt",
    ctaDescription: "Tell us what you're building or maintaining — we'll scope a build or refactor that holds up under real traffic.",
    seo: {
      title: "PHP Development Services",
      description: "Custom PHP web application and API development with modern frameworks, performance tuning, and secure architecture.",
      keywords: ["PHP development", "PHP web application", "PHP API development", "custom PHP development company"],
    },
  },
  {
    slug: "angular-js",
    category: "Web Development",
    categorySlug: "web-development",
    title: "Angular Development",
    shortTitle: "Angular JS",
    tagline: "Structured, enterprise-scale frontends",
    headline: "Angular applications built for large, evolving teams",
    intro:
      "We build Angular applications for teams that need a strongly opinionated, structured framework — enterprise dashboards, admin systems, and large applications maintained by multiple developers over time.",
    description:
      "Angular application development with TypeScript-first architecture, reusable component libraries, and state management built for complex, long-lived frontends.",
    heroImageKey: "angular-js",
    stats: [
      { value: 20, suffix: "+", label: "Angular applications delivered" },
      { value: 100, suffix: "%", label: "TypeScript-first codebases" },
      { value: 45, suffix: "%", label: "Faster feature delivery after refactor" },
    ],
    overview: {
      title: "Structure that pays off as your application grows",
      paragraphs: [
        "Angular's opinionated structure — modules, services, dependency injection, and strict TypeScript — is exactly what large, multi-developer applications need to stay maintainable. It costs more upfront discipline than a looser framework, and pays that back every time a new engineer joins the team.",
        "We build component libraries, shared services, and RxJS-driven state management so the application scales in complexity without becoming harder to reason about.",
      ],
      heroImage: "/images/services/angularjs.png",
    },
    whyChooseUs: [
      { title: "Enterprise-grade structure", description: "Modular architecture built for teams, not just a single developer.", icon: "layers" },
      { title: "TypeScript throughout", description: "Strong typing end-to-end reduces runtime bugs before they ship.", icon: "grid" },
      { title: "Reusable component systems", description: "Shared UI libraries that keep large applications consistent.", icon: "grid" },
      { title: "Built for long-term teams", description: "Conventions and documentation that make onboarding painless.", icon: "users" },
      { title: "Deliberate state management", description: "RxJS-driven patterns matched to complexity, avoiding unnecessary state libraries.", icon: "layers" },
    ],
    features: [
      "Angular application architecture & setup",
      "Reusable component & design system libraries",
      "RxJS-based state management",
      "Enterprise dashboard & admin panel builds",
      "REST & GraphQL API integration",
      "Unit & integration testing (Jasmine/Karma)",
      "Performance optimization & lazy loading",
      "Legacy AngularJS to Angular migration",
    ],
    technologies: [
      { name: "Angular", icon: "angular", description: "Core framework for structured, scalable frontends." },
      { name: "TypeScript", icon: "typescript", description: "Strict typing across components and services." },
      { name: "JavaScript", icon: "javascript", description: "Supporting tooling and integrations." },
      { name: "GraphQL", icon: "graphql", description: "Flexible data fetching for complex dashboards." },
      { name: "Git", icon: "git", description: "Branching workflows for multi-developer teams." },
      { name: "Docker", icon: "docker", description: "Consistent build and deployment environments." },
    ],
    process: [
      { step: "01", title: "Architecture planning", description: "Define module boundaries, state management, and component structure." },
      { step: "02", title: "Component & service build", description: "Develop reusable components and shared services with test coverage." },
      { step: "03", title: "Integration", description: "Connect APIs, authentication, and real-time data sources." },
      { step: "04", title: "Optimize & ship", description: "Tune bundle size, lazy-load routes, and deploy." },
    ],
    benefits: [
      { title: "Predictable at scale", description: "Strict structure keeps large codebases manageable as they grow." },
      { title: "Easier onboarding", description: "Consistent conventions reduce ramp-up time for new engineers." },
      { title: "Fewer runtime bugs", description: "End-to-end typing catches errors before they reach production." },
      { title: "Long-term maintainability", description: "Modular architecture that ages well across years of development." },
      { title: "Consistent development workflow", description: "Shared patterns and reusable architecture keep large teams aligned as the application evolves." },
    ],
    useCases: [
      { title: "Enterprise dashboards", description: "Data-dense internal tools used daily by large teams." },
      { title: "Admin & back-office systems", description: "Structured interfaces for managing complex operations." },
      { title: "Multi-team applications", description: "Products maintained by several developers over multiple years." },
      { title: "AngularJS migrations", description: "Moving legacy AngularJS applications to modern Angular." },
    ],
    industriesServed: [
      { label: "FinTech", slug: "fintech" },
      { label: "Healthcare", slug: "healthcare" },
      { label: "Real Estate", slug: "real-estate" },
    ],
    faqs: [
      { question: "Is Angular a good fit for a small project?", answer: "It's strongest for larger, longer-lived applications maintained by multiple developers — for smaller projects, we'll usually recommend a lighter framework instead." },
      { question: "Can you migrate our legacy AngularJS application?", answer: "Yes — we plan an incremental migration path to modern Angular rather than a risky big-bang rewrite." },
      { question: "Do you build design systems within Angular?", answer: "Yes, we build reusable component libraries so your product stays visually and structurally consistent as it grows." },
      { question: "How do you handle state management?", answer: "Typically RxJS-based patterns tailored to the app's complexity, avoiding unnecessary libraries where simpler state suffices." },
    ],
    ctaTitle: "Build an Angular application your whole team can maintain",
    ctaDescription: "Tell us about your product and team size — we'll scope an architecture that scales with both.",
    seo: {
      title: "Angular Development Services",
      description: "Angular application development with TypeScript-first architecture, reusable components, and enterprise-grade structure.",
      keywords: ["Angular development", "Angular development company", "enterprise Angular application", "AngularJS migration"],
    },
  },
  {
    slug: "salesforce",
    category: "Web Development",
    categorySlug: "web-development",
    title: "Salesforce Development",
    shortTitle: "Salesforce",
    tagline: "CRM built around how your team sells",
    headline: "Salesforce implementations and customizations that fit your process",
    intro:
      "We implement, customize, and integrate Salesforce so it reflects how your sales, service, and operations teams actually work — instead of forcing your process to fit an out-of-the-box configuration.",
    description:
      "Salesforce implementation, custom development (Apex/Lightning), and third-party integrations built around your existing sales and operations workflows.",
    heroImageKey: "salesforce",
    stats: [
      { value: 30, suffix: "+", label: "Salesforce implementations" },
      { value: 50, suffix: "%", label: "Avg. reduction in manual data entry" },
      { value: 100, suffix: "%", label: "Custom-fit to client workflows" },
    ],
    overview: {
      title: "A CRM configured around your process, not a template",
      paragraphs: [
        "Off-the-shelf Salesforce rarely matches how a specific sales or service team actually operates. We configure objects, workflows, and automation around your real pipeline, then build custom Lightning components or Apex logic for anything standard configuration can't handle.",
        "We also handle the integrations that make Salesforce genuinely useful — connecting it to your website, support tools, marketing platforms, and finance systems so data doesn't have to be re-entered by hand.",
      ],
      heroImage: "/images/services/salesforce.png",
    },
    whyChooseUs: [
      { title: "Process-first configuration", description: "We map your workflow before we touch the platform, not after.", icon: "clipboard" },
      { title: "Custom Apex & Lightning development", description: "Built for the cases standard configuration can't cover.", icon: "layers" },
      { title: "Integration expertise", description: "Connects cleanly to your website, marketing, and finance stack.", icon: "wifi" },
      { title: "Adoption-focused rollout", description: "Training and change management so the team actually uses it.", icon: "users" },
      { title: "Clean data migration", description: "Careful data cleansing and mapping so legacy CRM data doesn't carry old problems into Salesforce.", icon: "check" },
    ],
    features: [
      "Salesforce implementation & configuration",
      "Custom Apex & Lightning Web Components",
      "Sales Cloud & Service Cloud setup",
      "Workflow & process automation",
      "Third-party & website integrations",
      "Data migration & cleansing",
      "Custom reporting & dashboards",
      "User training & adoption support",
    ],
    technologies: [
      { name: "Salesforce", icon: "salesforce", description: "Core CRM platform — Sales Cloud, Service Cloud, and Lightning." },
      { name: "JavaScript", icon: "javascript", description: "Lightning Web Component development." },
      { name: "REST APIs", icon: "api", description: "API integrations with external systems." },
      { name: "MySQL", icon: "mysql", description: "Staging and migration of legacy CRM data." },
      { name: "Git", icon: "git", description: "Version control for Apex and Lightning source." },
    ],
    process: [
      { step: "01", title: "Process mapping", description: "Document how sales, service, and operations teams actually work today." },
      { step: "02", title: "Configuration & build", description: "Configure objects, automation, and any custom Apex/Lightning needed." },
      { step: "03", title: "Integration & migration", description: "Connect third-party systems and migrate existing data cleanly." },
      { step: "04", title: "Rollout & training", description: "Launch with hands-on training so adoption sticks." },
    ],
    benefits: [
      { title: "Less manual data entry", description: "Automation removes repetitive admin work from the sales process." },
      { title: "Accurate pipeline visibility", description: "Reporting that reflects how deals actually move, not a generic template." },
      { title: "Connected systems", description: "Website, support, and finance data flow into one source of truth." },
      { title: "Higher adoption", description: "A CRM built around real workflows gets used, not worked around." },
      { title: "Better decision making", description: "Connected customer and operational data gives teams clearer visibility for faster, informed decisions." },
    ],
    useCases: [
      { title: "Sales pipeline management", description: "Custom stages, forecasting, and quoting matched to your sales motion." },
      { title: "Customer service operations", description: "Case management and SLAs configured in Service Cloud." },
      { title: "Lead & marketing integration", description: "Connecting web forms and marketing tools directly into Salesforce." },
      { title: "Legacy CRM migration", description: "Moving from spreadsheets or another CRM without losing data integrity." },
    ],
    industriesServed: [
      { label: "FinTech", slug: "fintech" },
      { label: "Real Estate", slug: "real-estate" },
      { label: "Healthcare", slug: "healthcare" },
    ],
    faqs: [
      { question: "Do we need Salesforce licenses already, or do you help us choose?", answer: "We can advise on the right edition and licenses for your team size and needs before implementation begins." },
      { question: "Can you customize Salesforce beyond standard configuration?", answer: "Yes, through custom Apex logic and Lightning Web Components for anything point-and-click configuration can't handle." },
      { question: "Do you migrate data from our existing CRM or spreadsheets?", answer: "Yes, including data cleansing and mapping so the migration doesn't just carry old problems into the new system." },
      { question: "Do you provide training after launch?", answer: "Yes, hands-on training for your team is part of every implementation, along with ongoing support options." },
    ],
    ctaTitle: "Get a Salesforce setup your sales team will actually use",
    ctaDescription: "Tell us how your team sells today — we'll configure Salesforce around that, not the other way around.",
    seo: {
      title: "Salesforce Development Services",
      description: "Salesforce implementation, custom Apex/Lightning development, and integrations configured around your sales and service workflows.",
      keywords: ["Salesforce development", "Salesforce implementation", "Salesforce customization", "Salesforce integration"],
    },
  },
  {
    slug: "react-js",
    category: "Web Development",
    categorySlug: "web-development",
    title: "React JS Development",
    shortTitle: "React JS",
    tagline: "Fast, component-driven interfaces",
    headline: "React applications built for speed, reuse, and scale",
    intro:
      "We build single-page applications, dashboards, and product interfaces in React — architected around reusable components, clean state management, and performance that holds up as the product grows.",
    description:
      "React and Next.js application development with component-driven architecture, state management, and performance optimization for SPAs and product interfaces.",
    heroImageKey: "react-js",
    stats: [
      { value: 60, suffix: "+", label: "React applications delivered" },
      { value: 35, suffix: "%", label: "Avg. load-time improvement" },
      { value: 100, suffix: "%", label: "Component-driven builds" },
    ],
    overview: {
      title: "Interfaces built from reusable, testable components",
      paragraphs: [
        "React's component model is what lets a product interface grow without turning into a tangle of one-off code. We build component libraries with clear boundaries, then compose them into pages and flows — so new features reuse existing UI instead of duplicating it.",
        "For SEO-sensitive or content-heavy products we build on Next.js for server rendering and static generation; for pure application interfaces, a client-rendered SPA is often the leaner choice — we pick based on what the product actually needs.",
      ],
      heroImage: "/images/services/react.png",
    },
    whyChooseUs: [
      { title: "Component-first architecture", description: "Reusable, testable components instead of one-off page code.", icon: "grid" },
      { title: "Right rendering strategy", description: "Next.js SSR/SSG or a client SPA, chosen for the product's actual needs.", icon: "layers" },
      { title: "Performance discipline", description: "Code-splitting, memoization, and bundle audits built into delivery.", icon: "trending" },
      { title: "State management done right", description: "Matched to complexity — Context, Zustand, or Redux, not over-engineered by default.", icon: "check" },
      { title: "Test-covered from day one", description: "Jest and React Testing Library coverage built alongside features, not added as an afterthought.", icon: "check" },
    ],
    features: [
      "React & Next.js application development",
      "Reusable component library / design system builds",
      "State management (Context, Redux, Zustand)",
      "REST & GraphQL API integration",
      "Server-side rendering & static generation",
      "Performance optimization & code-splitting",
      "Progressive Web App (PWA) builds",
      "Automated testing (Jest, React Testing Library)",
    ],
    technologies: [
      { name: "React", icon: "react", description: "Core UI library for every component-driven build." },
      { name: "Next.js", icon: "nextjs", description: "Server rendering and static generation for SEO-critical apps." },
      { name: "TypeScript", icon: "typescript", description: "Type-safe components and state." },
      { name: "Redux", icon: "redux", description: "Predictable state management for complex applications." },
      { name: "GraphQL", icon: "graphql", description: "Flexible, typed data fetching." },
      { name: "Tailwind CSS", icon: "tailwindcss", description: "Utility-first styling for fast, consistent UI." },
    ],
    process: [
      { step: "01", title: "Component & data architecture", description: "Plan the component hierarchy, state, and data-fetching strategy." },
      { step: "02", title: "Build core UI", description: "Develop the component library and connect it to real data." },
      { step: "03", title: "Integrate & test", description: "Wire up APIs, write tests, and profile performance." },
      { step: "04", title: "Optimize & ship", description: "Tune bundle size and Core Web Vitals, then deploy." },
    ],
    benefits: [
      { title: "Faster feature delivery", description: "Reusable components mean new features ship faster over time." },
      { title: "Consistent UI", description: "A shared component library keeps the product visually coherent." },
      { title: "Strong performance", description: "Deliberate rendering strategy and code-splitting keep load times low." },
      { title: "SEO-ready when needed", description: "Next.js gives content-heavy pages the crawlability a pure SPA lacks." },
      { title: "Flexible product evolution", description: "Reusable architecture makes it easier to introduce new features without rebuilding existing experiences." },
    ],
    useCases: [
      { title: "Product dashboards", description: "Data-dense, interactive interfaces for SaaS and internal tools." },
      { title: "Marketing sites with SEO needs", description: "Fast, server-rendered pages built on Next.js." },
      { title: "Single-page applications", description: "Highly interactive apps where client rendering is the right call." },
      { title: "Design system implementation", description: "Turning a Figma design system into a real component library." },
    ],
    industriesServed: [
      { label: "FinTech", slug: "fintech" },
      { label: "EdTech", slug: "edtech" },
      { label: "Media & Publishing", slug: "media" },
      { label: "Gaming", slug: "gaming" },
    ],
    faqs: [
      { question: "Should we use Next.js or a plain React SPA?", answer: "It depends on whether SEO and initial load performance matter for your pages — we'll recommend the right approach after understanding your product." },
      { question: "Can you build a design system alongside the application?", answer: "Yes, we regularly build reusable component libraries from Figma designs as part of a React build." },
      { question: "How do you handle state management?", answer: "We match the tool to the complexity — Context for simple cases, Redux or Zustand when the app genuinely needs it, avoiding unnecessary overhead." },
      { question: "Can you take over an existing React codebase?", answer: "Yes, we regularly audit and continue development on existing React and Next.js applications." },
    ],
    ctaTitle: "Build a React product that stays fast as it grows",
    ctaDescription: "Tell us what you're building — we'll architect the component and state strategy to match.",
    seo: {
      title: "React JS Development Services",
      description: "React and Next.js application development with component-driven architecture, state management, and performance optimization.",
      keywords: ["React development", "React JS development company", "Next.js development", "React application development"],
    },
  },
  {
    slug: "codeigniter",
    category: "Web Development",
    categorySlug: "web-development",
    title: "CodeIgniter Development",
    shortTitle: "CodeIgniter",
    tagline: "Lightweight, fast-to-ship PHP",
    headline: "Lean CodeIgniter applications that ship quickly and run efficiently",
    intro:
      "We build web applications on CodeIgniter when speed of delivery and a small server footprint matter more than the heavier conventions of larger frameworks — without sacrificing clean, maintainable code.",
    description:
      "CodeIgniter application development for fast, lightweight web platforms — ideal for MVPs, internal tools, and projects that need to ship quickly on modest hosting.",
    heroImageKey: "codeigniter",
    stats: [
      { value: 40, suffix: "+", label: "CodeIgniter projects delivered" },
      { value: 25, suffix: "%", label: "Faster time-to-launch vs. heavier frameworks" },
      { value: 99, suffix: "%", label: "Uptime on production builds" },
    ],
    overview: {
      title: "A lightweight framework, used deliberately",
      paragraphs: [
        "CodeIgniter's small footprint and minimal configuration make it a strong fit for MVPs, internal tools, and platforms that need to run comfortably on modest hosting without a heavy framework overhead.",
        "We apply the same engineering discipline here as anywhere else — clean MVC structure, input validation, and query optimization — so a lightweight framework doesn't turn into a fragile codebase.",
      ],
      heroImage: "/images/services/codeIgniter.png",
    },
    whyChooseUs: [
      { title: "Fast time-to-launch", description: "Minimal setup overhead means development starts producing results sooner.", icon: "trending" },
      { title: "Lightweight footprint", description: "Runs efficiently on modest hosting without heavy resource demands.", icon: "cloud" },
      { title: "Clean MVC structure", description: "Organized, testable code even within a minimal framework.", icon: "layers" },
      { title: "Cost-efficient to maintain", description: "Simple conventions keep long-term maintenance costs lower.", icon: "check" },
      { title: "Legacy upgrade expertise", description: "Modernizing older CodeIgniter 2/3 applications to current, supported versions.", icon: "layers" },
    ],
    features: [
      "Custom CodeIgniter application development",
      "RESTful API development",
      "Database design & optimization",
      "Third-party API & payment integration",
      "Admin panel & CRUD system builds",
      "Legacy CodeIgniter upgrades",
      "Security hardening",
      "Server deployment & configuration",
    ],
    technologies: [
      { name: "CodeIgniter", icon: "codeigniter", description: "Lightweight MVC framework for fast delivery." },
      { name: "PHP", icon: "php", description: "Core application language." },
      { name: "MySQL", icon: "mysql", description: "Relational database layer." },
      { name: "JavaScript", icon: "javascript", description: "Frontend interactivity where needed." },
      { name: "Nginx", icon: "nginx", description: "Efficient serving on lightweight hosting." },
    ],
    process: [
      { step: "01", title: "Scope & data model", description: "Define the minimum viable structure that meets real requirements." },
      { step: "02", title: "Build", description: "Develop within a clean MVC structure, avoiding unnecessary complexity." },
      { step: "03", title: "Test & harden", description: "Validate inputs, secure endpoints, and test core flows." },
      { step: "04", title: "Deploy", description: "Ship to lightweight, cost-efficient hosting." },
    ],
    benefits: [
      { title: "Ship faster", description: "Less framework overhead means less setup before real work begins." },
      { title: "Lower hosting costs", description: "Runs comfortably on modest infrastructure." },
      { title: "Easy to maintain", description: "Simple, readable structure that's easy to hand off or extend." },
      { title: "Right-sized for the project", description: "No unnecessary complexity for applications that don't need it." },
      { title: "Efficient resource usage", description: "A lightweight architecture delivers solid application performance without unnecessary infrastructure overhead." },
    ],
    useCases: [
      { title: "MVPs & early-stage products", description: "Get a working product in front of users quickly." },
      { title: "Internal admin tools", description: "CRUD-heavy tools for managing day-to-day operations." },
      { title: "Small-to-mid business platforms", description: "Full applications that don't need enterprise-scale overhead." },
      { title: "Legacy CodeIgniter upgrades", description: "Modernizing older CodeIgniter 2/3 apps to current versions." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Real Estate", slug: "real-estate" },
      { label: "FoodTech", slug: "foodtech" },
    ],
    faqs: [
      { question: "Is CodeIgniter still a good choice today?", answer: "For the right project — fast delivery, modest hosting, straightforward requirements — yes. We'll be upfront if your project would be better served by a different framework." },
      { question: "Can you upgrade our old CodeIgniter application?", answer: "Yes, we handle upgrades from CodeIgniter 2/3 to current versions, including compatibility fixes." },
      { question: "How does CodeIgniter compare to Laravel for our project?", answer: "CodeIgniter suits smaller, faster-to-ship projects; Laravel suits larger applications needing more built-in structure. We'll recommend based on your scope." },
      { question: "Do you handle hosting setup as well?", answer: "Yes, we can configure and deploy to your hosting environment as part of the build." },
    ],
    ctaTitle: "Ship a lean, reliable application without the overhead",
    ctaDescription: "Tell us what you need to launch — we'll scope a CodeIgniter build sized to match.",
    seo: {
      title: "CodeIgniter Development Services",
      description: "Lightweight CodeIgniter web application development for fast MVPs, internal tools, and cost-efficient platforms.",
      keywords: ["CodeIgniter development", "CodeIgniter development company", "PHP MVC development", "lightweight web application"],
    },
  },
  {
    slug: "laravel",
    category: "Web Development",
    categorySlug: "web-development",
    title: "Laravel Development",
    shortTitle: "Laravel",
    tagline: "Elegant, production-ready PHP",
    headline: "Laravel applications engineered for scale and clean code",
    intro:
      "Laravel is our default framework for structured PHP applications — expressive syntax, a rich ecosystem, and conventions that keep large codebases maintainable across years of active development.",
    description:
      "Laravel web application and API development with clean architecture, queues, and testing built for platforms that need to scale reliably over time.",
    heroImageKey: "laravel",
    stats: [
      { value: 100, suffix: "+", label: "Laravel applications delivered" },
      { value: 99.9, suffix: "%", label: "Uptime on production systems" },
      { value: 40, suffix: "%", label: "Faster feature delivery vs. legacy PHP" },
    ],
    overview: {
      title: "The framework we reach for by default",
      paragraphs: [
        "Laravel's combination of expressive syntax, built-in tooling (queues, events, Eloquent ORM, testing), and a large, well-documented ecosystem makes it our default choice for structured PHP applications of real complexity.",
        "We build with service-layer architecture, queued jobs for anything slow or asynchronous, and automated tests, so the application stays fast and reliable as usage grows.",
      ],
      heroImage: "/images/services/laravel.png",
    },
    whyChooseUs: [
      { title: "Expressive, maintainable code", description: "Eloquent ORM and clean conventions reduce boilerplate and bugs.", icon: "layers" },
      { title: "Built-in scale tooling", description: "Queues, events, and caching designed into the framework itself.", icon: "trending" },
      { title: "Rich ecosystem", description: "Mature packages for auth, payments, search, and more.", icon: "grid" },
      { title: "Test-driven delivery", description: "Automated test coverage baked into how we build, not bolted on after.", icon: "check" },
      { title: "Multi-tenant SaaS ready", description: "Architecture built for subscription billing, role-based access, and multi-tenant applications.", icon: "layers" },
    ],
    features: [
      "Custom Laravel application development",
      "RESTful & GraphQL API development",
      "Queue-based background job processing",
      "Multi-tenant SaaS architecture",
      "Payment gateway & third-party integrations",
      "Laravel + Vue/React full-stack builds",
      "Automated testing (PHPUnit, Pest)",
      "Server & CI/CD deployment (Forge, Envoyer)",
    ],
    technologies: [
      { name: "Laravel", icon: "laravel", description: "Core framework — Eloquent, queues, events, and testing." },
      { name: "PHP", icon: "php", description: "Underlying application language." },
      { name: "MySQL", icon: "mysql", description: "Primary relational data store." },
      { name: "Redis", icon: "redis", description: "Caching, queues, and session storage." },
      { name: "Vue.js", icon: "vue", description: "Frontend layer for Laravel-driven full-stack apps." },
      { name: "Docker", icon: "docker", description: "Consistent local and production environments." },
    ],
    process: [
      { step: "01", title: "Architecture & data modeling", description: "Design the domain model, service layer, and API surface." },
      { step: "02", title: "Build", description: "Develop features with Eloquent, queues, and test coverage." },
      { step: "03", title: "Integrate & scale-test", description: "Connect third-party services and load-test critical flows." },
      { step: "04", title: "Deploy & support", description: "Ship via CI/CD and provide ongoing maintenance." },
    ],
    benefits: [
      { title: "Fast, structured delivery", description: "Built-in tooling means less time reinventing common patterns." },
      { title: "Reliable under load", description: "Queues and caching keep the app responsive as usage grows." },
      { title: "Lower long-term risk", description: "Automated tests catch regressions before they reach users." },
      { title: "Rich integrations", description: "Mature packages cover auth, payments, search, and more out of the box." },
      { title: "Ready for product growth", description: "A structured foundation makes it easier to add features, integrations, and new business workflows." },
    ],
    useCases: [
      { title: "SaaS platforms", description: "Multi-tenant applications with subscription billing and role-based access." },
      { title: "Business web applications", description: "Internal and customer-facing platforms built to last." },
      { title: "API backends", description: "Services powering mobile apps and third-party integrations." },
      { title: "Marketplace platforms", description: "Multi-vendor systems with commissions and payouts." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "EdTech", slug: "edtech" },
      { label: "FinTech", slug: "fintech" },
      { label: "FoodTech", slug: "foodtech" },
    ],
    faqs: [
      { question: "Why Laravel over other PHP frameworks?", answer: "It gives us the most built-in tooling — queues, events, testing, Eloquent — for structured applications, which reduces custom scaffolding and speeds up delivery." },
      { question: "Can Laravel handle high-traffic applications?", answer: "Yes, with the right caching, queue, and database strategy — which we design in from the start rather than retrofitting later." },
      { question: "Do you build the frontend too, or just the Laravel backend?", answer: "Both — we commonly pair Laravel with Vue or React for a full-stack build, or expose a clean API for a separate frontend team." },
      { question: "Can you take over an existing Laravel project?", answer: "Yes, we regularly audit and continue development on existing Laravel codebases." },
    ],
    ctaTitle: "Build your platform on a framework that scales with you",
    ctaDescription: "Tell us about your product — we'll scope a Laravel architecture built for where you're headed, not just where you are today.",
    seo: {
      title: "Laravel Development Services",
      description: "Laravel web application and API development with clean architecture, queues, and testing built for scale.",
      keywords: ["Laravel development", "Laravel development company", "Laravel API development", "Laravel SaaS development"],
    },
  },

  // ---------------------------------------------------------------------
  // E-COMMERCE
  // ---------------------------------------------------------------------
  {
    slug: "magento",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Magento Development",
    shortTitle: "Magento",
    tagline: "Enterprise commerce at scale",
    headline: "Magento stores built for catalog complexity and high traffic",
    intro:
      "We build and optimize Magento stores for merchants with complex catalogs, multi-store setups, or high-traffic demands that outgrow simpler e-commerce platforms.",
    description:
      "Magento storefront development, customization, and performance optimization for merchants running complex catalogs, multi-store setups, or high-volume traffic.",
    heroImageKey: "magento",
    stats: [
      { value: 35, suffix: "+", label: "Magento stores delivered" },
      { value: 45, suffix: "%", label: "Avg. checkout speed improvement" },
      { value: 99, suffix: "%", label: "Uptime through peak sales events" },
    ],
    overview: {
      title: "Commerce built for scale, not just launch",
      paragraphs: [
        "Magento earns its complexity when a catalog gets large, multiple storefronts need to share inventory, or traffic spikes hard around sales events. We build on that strength — clean custom modules, tuned indexing, and caching that keeps a heavy catalog fast.",
        "We also fix the common Magento pain points: slow admin performance, bloated third-party extensions, and checkout flows that lose customers before they finish paying.",
      ],
      heroImage: "/images/services/e-commerce/magento.png",
    },
    whyChooseUs: [
      { title: "Built for catalog complexity", description: "Multi-store, multi-currency, and large product catalogs handled cleanly.", icon: "layers" },
      { title: "Performance under load", description: "Indexing, caching, and CDN strategy tuned for peak-traffic events.", icon: "trending" },
      { title: "Conversion-focused checkout", description: "Streamlined flows that reduce abandonment at the final step.", icon: "card" },
      { title: "Clean custom modules", description: "Extensions built to Magento standards, not quick hacks that break on upgrade.", icon: "check" },
      { title: "ERP & inventory integration", description: "Clean connections to ERP, warehouse, and accounting systems so data stays in sync.", icon: "layers" },
    ],
    features: [
      "Custom Magento theme development",
      "Custom module & extension development",
      "Multi-store & multi-currency setup",
      "Checkout & conversion optimization",
      "Payment gateway & ERP integrations",
      "Catalog & inventory management",
      "Performance & indexing optimization",
      "Magento 1 to 2 migration",
    ],
    technologies: [
      { name: "Magento", icon: "magento", description: "Core commerce platform for the storefront and admin." },
      { name: "PHP", icon: "php", description: "Custom module and theme logic." },
      { name: "MySQL", icon: "mysql", description: "Product catalog and order data." },
      { name: "Redis", icon: "redis", description: "Caching layer for high-traffic performance." },
      { name: "Docker", icon: "docker", description: "Consistent development and deployment environments." },
    ],
    process: [
      { step: "01", title: "Catalog & traffic audit", description: "Understand product complexity, integrations, and peak-traffic needs." },
      { step: "02", title: "Theme & module build", description: "Develop custom storefront and any required extensions." },
      { step: "03", title: "Integrate & optimize", description: "Connect payments/ERP and tune indexing, caching, and CDN." },
      { step: "04", title: "Launch & scale-test", description: "Load-test before go-live and monitor through peak events." },
    ],
    benefits: [
      { title: "Handles complexity cleanly", description: "Large catalogs and multi-store setups without performance loss." },
      { title: "Holds up under peak load", description: "Built and tested for sale-event traffic, not just average days." },
      { title: "Better conversion", description: "Checkout tuned to reduce drop-off at the final step." },
      { title: "Upgrade-safe customization", description: "Standards-based modules that survive future Magento upgrades." },
      { title: "Business-ready flexibility", description: "A flexible commerce foundation supports complex pricing, catalogs, stores, and evolving business rules." },
    ],
    useCases: [
      { title: "Large product catalogs", description: "Thousands of SKUs with complex attributes and variants." },
      { title: "Multi-store / multi-region retail", description: "Shared inventory across multiple storefronts and currencies." },
      { title: "B2B commerce", description: "Custom pricing, quoting, and account-based ordering." },
      { title: "High-traffic seasonal retail", description: "Stores that need to hold up during major sales events." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "FoodTech", slug: "foodtech" },
      { label: "Real Estate", slug: "real-estate" },
    ],
    faqs: [
      { question: "Is Magento still a good choice in 2026?", answer: "For merchants with complex catalogs, multi-store needs, or high traffic, yes — for smaller stores, WooCommerce or OpenCart is often a better fit, and we'll say so." },
      { question: "Can you migrate us from Magento 1?", answer: "Yes, including data migration, theme rebuild, and extension replacement for Magento 2." },
      { question: "How do you keep the store fast with a large catalog?", answer: "Through indexing strategy, Redis caching, CDN delivery, and query optimization tuned specifically to your catalog size." },
      { question: "Do you handle ERP or inventory system integration?", answer: "Yes, connecting Magento to ERP, warehouse, and accounting systems is a regular part of our Magento work." },
    ],
    ctaTitle: "Get a Magento store that performs under real traffic",
    ctaDescription: "Tell us about your catalog and traffic patterns — we'll scope a build that holds up on your biggest sales day.",
    seo: {
      title: "Magento Development Services",
      description: "Magento storefront development, customization, and performance optimization for complex catalogs and high-traffic stores.",
      keywords: ["Magento development", "Magento development company", "Magento 2 migration", "Magento performance optimization"],
    },
  },
  {
    slug: "woocommerce",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "WooCommerce Development",
    shortTitle: "WooCommerce",
    tagline: "E-commerce on the platform your team knows",
    headline: "WooCommerce stores that are simple to run and easy to grow",
    intro:
      "We build custom WooCommerce stores for merchants who want the flexibility of WordPress with a commerce layer that's simple for their team to manage day to day.",
    description:
      "Custom WooCommerce storefront development, theme and plugin customization, and performance tuning for merchants who want commerce on a CMS their team already knows.",
    heroImageKey: "woocommerce",
    stats: [
      { value: 55, suffix: "+", label: "WooCommerce stores delivered" },
      { value: 38, suffix: "%", label: "Avg. conversion rate lift" },
      { value: 30, suffix: "%", label: "Avg. page-speed improvement" },
    ],
    overview: {
      title: "Commerce that fits inside a CMS your team already runs",
      paragraphs: [
        "WooCommerce is the right call when a merchant wants full content control from WordPress alongside a commerce layer — without the overhead of a dedicated commerce platform. The tradeoff is that a default WooCommerce install can get slow and plugin-heavy fast.",
        "We build lean, custom-themed stores with only the extensions the business actually needs, tuned for speed and a checkout flow designed to convert — not the default WooCommerce experience out of the box.",
      ],
      heroImage: "/images/services/e-commerce/woocommerce.png",
    },
    whyChooseUs: [
      { title: "Lean, purpose-built stores", description: "Custom theming and only the plugins that earn their place.", icon: "layers" },
      { title: "Content + commerce in one place", description: "Full WordPress content control alongside the storefront.", icon: "book" },
      { title: "Conversion-focused checkout", description: "Streamlined flows tuned to reduce cart abandonment.", icon: "card" },
      { title: "Performance tuned", description: "Caching and image optimization aimed at real-world load times.", icon: "trending" },
      { title: "Subscription & recurring billing", description: "Membership and subscription commerce built directly into your WordPress store.", icon: "card" },
    ],
    features: [
      "Custom WooCommerce theme development",
      "Custom plugin & checkout customization",
      "Payment gateway integration",
      "Subscription & recurring billing setup",
      "Inventory & multi-warehouse sync",
      "Speed & Core Web Vitals optimization",
      "Migration from Shopify/other platforms",
      "Marketing & analytics integration",
    ],
    technologies: [
      { name: "WooCommerce", icon: "woocommerce", description: "Core commerce layer on top of WordPress." },
      { name: "WordPress", icon: "wordpress", description: "Content management and site foundation." },
      { name: "PHP", icon: "php", description: "Custom plugin and checkout logic." },
      { name: "MySQL", icon: "mysql", description: "Product, order, and customer data." },
      { name: "Stripe", icon: "stripe", description: "Payment processing integration." },
    ],
    process: [
      { step: "01", title: "Store & catalog planning", description: "Map products, variants, shipping rules, and payment needs." },
      { step: "02", title: "Theme & checkout build", description: "Develop a custom theme and streamlined checkout flow." },
      { step: "03", title: "Integrate & test", description: "Connect payments, shipping, and marketing tools; test end-to-end." },
      { step: "04", title: "Launch & optimize", description: "Go live, then tune speed and conversion based on real usage." },
    ],
    benefits: [
      { title: "Familiar to manage", description: "Your team keeps using the WordPress admin they already know." },
      { title: "Full design flexibility", description: "Not locked into a theme-store's visual constraints." },
      { title: "Better conversion", description: "A checkout built for your products, not a generic default." },
      { title: "Cost-efficient to scale", description: "No mandatory platform fees eating into margins as you grow." },
      { title: "Ownership and flexibility", description: "Full control over your storefront, data, integrations, and customer experience without platform lock-in." },
    ],
    useCases: [
      { title: "Content-driven storefronts", description: "Brands that need strong editorial content alongside products." },
      { title: "Subscription & membership commerce", description: "Recurring billing and gated products in one platform." },
      { title: "Small-to-mid catalog retail", description: "Stores that don't need Magento-level complexity." },
      { title: "Platform migrations", description: "Moving from Shopify or another platform without losing SEO equity." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Media & Publishing", slug: "media" },
      { label: "FoodTech", slug: "foodtech" },
    ],
    faqs: [
      { question: "Is WooCommerce a good fit for a larger catalog?", answer: "It handles mid-sized catalogs well with the right performance tuning — for very large or multi-store catalogs, we may recommend Magento instead." },
      { question: "Can you migrate our store from Shopify?", answer: "Yes, including product, customer, and order data migration with a plan to preserve existing SEO rankings." },
      { question: "Do you set up subscriptions or recurring billing?", answer: "Yes, subscription and membership commerce is a common part of our WooCommerce builds." },
      { question: "How do you keep the store fast?", answer: "Through custom lean theming, careful plugin selection, caching, and image optimization — the same discipline we apply to every WordPress build." },
    ],
    ctaTitle: "Get a WooCommerce store built to convert, not just launch",
    ctaDescription: "Tell us about your products and current setup — we'll scope a lean, fast build around them.",
    seo: {
      title: "WooCommerce Development Services",
      description: "Custom WooCommerce storefront development, checkout optimization, and performance tuning for WordPress-based commerce.",
      keywords: ["WooCommerce development", "WooCommerce development company", "WooCommerce customization", "WooCommerce store optimization"],
    },
  },
  {
    slug: "open-cart",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "OpenCart Development",
    shortTitle: "OpenCart",
    tagline: "Simple, cost-efficient commerce",
    headline: "OpenCart stores that launch fast and cost less to run",
    intro:
      "We build and customize OpenCart stores for merchants who want a straightforward, self-hosted commerce platform without the overhead of larger e-commerce systems.",
    description:
      "OpenCart storefront development, theme and extension customization, and performance tuning for merchants who want lean, cost-efficient commerce.",
    heroImageKey: "open-cart",
    stats: [
      { value: 20, suffix: "+", label: "OpenCart stores delivered" },
      { value: 30, suffix: "%", label: "Lower hosting cost vs. heavier platforms" },
      { value: 99, suffix: "%", label: "Uptime on production stores" },
    ],
    overview: {
      title: "Straightforward commerce, built cleanly",
      paragraphs: [
        "OpenCart is a solid choice for merchants who want full ownership of their store without the licensing costs or complexity of larger platforms. We build custom themes and extensions on top of it, avoiding the marketplace-extension sprawl that slows many OpenCart stores down.",
        "The result is a store that's fast, simple for a small team to manage, and inexpensive to host and maintain.",
      ],
      heroImage: "/images/services/e-commerce/opencart.png",
    },
    whyChooseUs: [
      { title: "Cost-efficient ownership", description: "No recurring platform fees — you own the store outright.", icon: "check" },
      { title: "Fast, lightweight builds", description: "Minimal overhead keeps pages fast on modest hosting.", icon: "trending" },
      { title: "Custom, not marketplace-stacked", description: "Purpose-built extensions instead of a pile of loosely fitted add-ons.", icon: "layers" },
      { title: "Simple to manage", description: "A store your team can run without ongoing developer support.", icon: "grid" },
      { title: "Multi-store flexibility", description: "Run multiple storefronts from a single, self-owned OpenCart installation.", icon: "layers" },
    ],
    features: [
      "Custom OpenCart theme development",
      "Custom extension development",
      "Payment gateway integration",
      "Multi-store setup",
      "Inventory & catalog management",
      "Speed & performance tuning",
      "Migration from other platforms",
      "Security hardening",
    ],
    technologies: [
      { name: "OpenCart", icon: "opencart", description: "Core commerce platform for storefront and admin." },
      { name: "PHP", icon: "php", description: "Custom extension and theme logic." },
      { name: "MySQL", icon: "mysql", description: "Product and order data storage." },
      { name: "JavaScript", icon: "javascript", description: "Storefront interactivity." },
      { name: "Nginx", icon: "nginx", description: "Efficient serving on cost-conscious hosting." },
    ],
    process: [
      { step: "01", title: "Store planning", description: "Define catalog structure, shipping, and payment requirements." },
      { step: "02", title: "Theme & extension build", description: "Develop a custom storefront and any needed extensions." },
      { step: "03", title: "Integrate & test", description: "Connect payments and shipping; test the full purchase flow." },
      { step: "04", title: "Launch", description: "Go live on lean, cost-efficient hosting." },
    ],
    benefits: [
      { title: "Lower running costs", description: "No mandatory platform fees or heavy hosting requirements." },
      { title: "Fast to launch", description: "Simpler platform means a shorter path from scope to go-live." },
      { title: "Easy for small teams", description: "Straightforward admin that doesn't require dedicated technical staff." },
      { title: "Full ownership", description: "You control the codebase and hosting outright." },
      { title: "Simple operational control", description: "An easy-to-manage commerce platform that keeps everyday catalog and order operations straightforward." },
    ],
    useCases: [
      { title: "Small-to-mid catalog stores", description: "Straightforward product ranges without complex variant needs." },
      { title: "Budget-conscious launches", description: "Merchants prioritizing lower setup and running costs." },
      { title: "Regional & niche retailers", description: "Focused stores that don't need enterprise-scale tooling." },
      { title: "Platform migrations", description: "Moving off a costly hosted platform to a self-owned store." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "FoodTech", slug: "foodtech" },
    ],
    faqs: [
      { question: "Is OpenCart a good fit for a growing store?", answer: "It's a strong fit for small-to-mid catalogs — if you expect rapid catalog growth or multi-store complexity, we'll discuss whether Magento or WooCommerce fits better long-term." },
      { question: "Can you customize the checkout and design fully?", answer: "Yes, we build custom themes rather than relying on marketplace templates." },
      { question: "Do you handle payment gateway setup?", answer: "Yes, integrating the payment methods your customers expect is part of every build." },
      { question: "Can you migrate our store from another platform?", answer: "Yes, including product and customer data migration to OpenCart." },
    ],
    ctaTitle: "Launch a lean commerce store without ongoing platform fees",
    ctaDescription: "Tell us about your products — we'll scope an OpenCart build that keeps running costs low.",
    seo: {
      title: "OpenCart Development Services",
      description: "Custom OpenCart storefront development and optimization for cost-efficient, self-hosted e-commerce.",
      keywords: ["OpenCart development", "OpenCart development company", "OpenCart customization", "OpenCart store setup"],
    },
  },

  // ---------------------------------------------------------------------
  // HOSTING
  // ---------------------------------------------------------------------
  {
    slug: "hosting",
    category: "Hosting",
    categorySlug: "hosting",
    title: "Web Hosting Solutions",
    shortTitle: "Hosting",
    tagline: "Infrastructure that stays out of your way",
    headline: "Managed hosting that keeps your product online and fast",
    intro:
      "We provide and manage web hosting matched to what your application actually needs — from shared and VPS hosting to fully managed cloud infrastructure — so uptime and performance aren't left to chance.",
    description:
      "Managed web hosting, server configuration, and ongoing monitoring for websites and applications that need to stay online, fast, and secure.",
    heroImageKey: "hosting",
    stats: [
      { value: 99.9, suffix: "%", label: "Average uptime delivered" },
      { value: 150, suffix: "+", label: "Sites under active hosting management" },
      { value: 24, suffix: "/7", label: "Infrastructure monitoring" },
    ],
    overview: {
      title: "Hosting matched to your application, not a generic plan",
      paragraphs: [
        "The right hosting setup depends on traffic patterns, application architecture, and how much control your team needs — not a one-size-fits-all shared plan. We assess your application and recommend infrastructure that fits, then configure and monitor it on an ongoing basis.",
        "That includes server hardening, backup strategy, and monitoring so issues get caught before they become downtime.",
      ],
      heroImage: "/images/services/hosting/hosting.png",
    },
    whyChooseUs: [
      { title: "Matched to your application", description: "Infrastructure sized to actual traffic and architecture, not guesswork.", icon: "check" },
      { title: "Proactively monitored", description: "Uptime and performance monitoring that catches issues early.", icon: "activity" },
      { title: "Security hardened", description: "Server-level hardening, firewalls, and patching as standard.", icon: "shield" },
      { title: "Backed by real support", description: "A team that responds when something needs attention.", icon: "phone" },
      { title: "Backups you can rely on", description: "Automated backups and disaster recovery planning in place before you ever need them.", icon: "shield" },
    ],
    features: [
      "Shared, VPS, and dedicated hosting setup",
      "Server configuration & hardening",
      "Automated backups & disaster recovery",
      "Uptime & performance monitoring",
      "CDN & caching configuration",
      "SSL certificate management",
      "Migration from existing hosts",
      "24/7 incident response",
    ],
    technologies: [
      { name: "Nginx", icon: "nginx", description: "Web server and reverse proxy configuration." },
      { name: "Docker", icon: "docker", description: "Containerized application deployment." },
      { name: "Cloudflare", icon: "cloudflare", description: "CDN, DNS, and edge security." },
      { name: "MySQL", icon: "mysql", description: "Managed database hosting and tuning." },
      { name: "Redis", icon: "redis", description: "Caching layer for high-traffic sites." },
    ],
    process: [
      { step: "01", title: "Assessment", description: "Review traffic, application architecture, and current hosting pain points." },
      { step: "02", title: "Provision & configure", description: "Set up and harden infrastructure matched to those needs." },
      { step: "03", title: "Migrate", description: "Move the application and data with minimal downtime." },
      { step: "04", title: "Monitor & support", description: "Ongoing monitoring, backups, and incident response." },
    ],
    benefits: [
      { title: "Predictable uptime", description: "Infrastructure sized correctly and monitored proactively." },
      { title: "Faster load times", description: "Server and caching configuration tuned for your application." },
      { title: "Reduced risk", description: "Backups and disaster recovery planning in place before you need them." },
      { title: "One less thing to manage", description: "A team handling infrastructure so yours can focus on the product." },
      { title: "Proactive technical support", description: "Issues are identified and addressed before they become major availability or performance problems." },
    ],
    useCases: [
      { title: "Business & marketing sites", description: "Reliable hosting for websites that represent your brand." },
      { title: "Web applications", description: "Infrastructure tuned for application-specific performance needs." },
      { title: "E-commerce stores", description: "Hosting that holds up through traffic spikes and sales events." },
      { title: "Host migrations", description: "Moving off underperforming or unreliable hosting providers." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Healthcare", slug: "healthcare" },
      { label: "Real Estate", slug: "real-estate" },
    ],
    faqs: [
      { question: "What type of hosting is right for my site?", answer: "It depends on traffic and application needs — we'll assess and recommend shared, VPS, or dedicated/cloud hosting rather than defaulting to the most expensive option." },
      { question: "Can you migrate us from our current host?", answer: "Yes, we handle migrations with a plan to minimize downtime and preserve DNS/SEO continuity." },
      { question: "Do you monitor for downtime?", answer: "Yes, uptime and performance monitoring with alerting is included in managed hosting." },
      { question: "What happens if something goes down?", answer: "Our team responds to incidents directly rather than leaving you to troubleshoot with a generic hosting support queue." },
    ],
    ctaTitle: "Get hosting that's actually managed, not just provisioned",
    ctaDescription: "Tell us about your current setup and traffic — we'll recommend infrastructure that fits.",
    seo: {
      title: "Web Hosting Services",
      description: "Managed web hosting, server configuration, and monitoring for websites and applications that need to stay online and fast.",
      keywords: ["web hosting services", "managed hosting", "VPS hosting", "server management company"],
    },
  },
  {
    slug: "servers-cloud",
    category: "Hosting",
    categorySlug: "hosting",
    title: "Servers & Cloud Infrastructure",
    shortTitle: "Servers & Cloud",
    tagline: "Infrastructure that scales with demand",
    headline: "Cloud infrastructure engineered for reliability and scale",
    intro:
      "We design, provision, and manage cloud server infrastructure for applications that need to scale — with the monitoring, automation, and security practices to keep it reliable as demand grows.",
    description:
      "Cloud server architecture, provisioning, and DevOps for applications that need to scale reliably — including auto-scaling, monitoring, and infrastructure-as-code.",
    heroImageKey: "servers-cloud",
    stats: [
      { value: 99.9, suffix: "%", label: "Uptime across managed infrastructure" },
      { value: 30, suffix: "+", label: "Cloud environments managed" },
      { value: 24, suffix: "/7", label: "Infrastructure monitoring & alerting" },
    ],
    overview: {
      title: "Cloud infrastructure that scales without surprises",
      paragraphs: [
        "As traffic and data grow, infrastructure needs to scale predictably — not through late-night firefighting. We design cloud architectures with auto-scaling, load balancing, and infrastructure-as-code so environments are reproducible and changes are reviewable, not manual and risky.",
        "We support the major cloud providers and tailor the architecture to your application's actual scaling pattern, rather than defaulting to over-provisioned infrastructure.",
      ],
      heroImage: "/images/services/hosting/servers-cloud.png",
    },
    whyChooseUs: [
      { title: "Scales with real demand", description: "Auto-scaling and load balancing designed around your traffic pattern.", icon: "trending" },
      { title: "Infrastructure as code", description: "Reproducible, version-controlled environments instead of manual configuration.", icon: "layers" },
      { title: "Proactive monitoring", description: "Alerting that surfaces problems before users notice them.", icon: "activity" },
      { title: "Cost-aware architecture", description: "Right-sized infrastructure instead of default over-provisioning.", icon: "check" },
      { title: "Container-native orchestration", description: "Docker and Kubernetes workflows built for distributed, scalable application components.", icon: "layers" },
    ],
    features: [
      "Cloud architecture design (AWS, Azure, GCP)",
      "Auto-scaling & load balancing setup",
      "Infrastructure as code (Terraform)",
      "CI/CD pipeline configuration",
      "Container orchestration (Docker, Kubernetes)",
      "Monitoring, logging & alerting",
      "Disaster recovery planning",
      "Cost optimization review",
    ],
    technologies: [
      { name: "Docker", icon: "docker", description: "Containerized application deployment." },
      { name: "Kubernetes", icon: "kubernetes", description: "Container orchestration for scaling workloads." },
      { name: "DigitalOcean", icon: "digitalocean", description: "Cloud infrastructure for right-sized workloads." },
      { name: "Nginx", icon: "nginx", description: "Load balancing and reverse proxy configuration." },
      { name: "Git", icon: "git", description: "Version-controlled infrastructure and deployment pipelines." },
      { name: "Redis", icon: "redis", description: "Distributed caching across scaled environments." },
    ],
    process: [
      { step: "01", title: "Architecture assessment", description: "Review current infrastructure and scaling requirements." },
      { step: "02", title: "Design", description: "Architect a cloud setup matched to real traffic patterns." },
      { step: "03", title: "Provision & automate", description: "Build infrastructure-as-code and CI/CD pipelines." },
      { step: "04", title: "Monitor & optimize", description: "Ongoing monitoring, scaling review, and cost optimization." },
    ],
    benefits: [
      { title: "Handles growth smoothly", description: "Auto-scaling absorbs traffic spikes without manual intervention." },
      { title: "Reproducible environments", description: "Infrastructure-as-code eliminates configuration drift." },
      { title: "Faster incident response", description: "Monitoring and alerting catch issues early." },
      { title: "Controlled cloud spend", description: "Right-sized infrastructure instead of paying for unused capacity." },
      { title: "Deployment confidence", description: "Automated infrastructure and deployment workflows make releases safer, faster, and more repeatable." },
    ],
    useCases: [
      { title: "High-growth applications", description: "Platforms that need infrastructure to scale alongside user growth." },
      { title: "Microservices architectures", description: "Container orchestration for distributed application components." },
      { title: "Data-intensive platforms", description: "Infrastructure tuned for heavy read/write or processing workloads." },
      { title: "DevOps modernization", description: "Moving from manual server management to automated infrastructure." },
    ],
    industriesServed: [
      { label: "FinTech", slug: "fintech" },
      { label: "Gaming", slug: "gaming" },
      { label: "Media & Publishing", slug: "media" },
    ],
    faqs: [
      { question: "Which cloud provider do you recommend?", answer: "It depends on your existing stack, budget, and compliance needs — we'll assess and recommend rather than defaulting to one provider." },
      { question: "Do you set up auto-scaling for traffic spikes?", answer: "Yes, we design scaling policies matched to your actual traffic patterns, tested before you need them in production." },
      { question: "Can you manage our existing cloud infrastructure?", answer: "Yes, we take over management of existing environments, including auditing and improving current configurations." },
      { question: "How do you keep cloud costs under control?", answer: "Through right-sizing, scaling policies, and regular cost optimization reviews rather than static over-provisioning." },
    ],
    ctaTitle: "Get infrastructure that scales before you need it to",
    ctaDescription: "Tell us about your current setup and growth plans — we'll architect cloud infrastructure to match.",
    seo: {
      title: "Cloud & Server Infrastructure Services",
      description: "Cloud server architecture, auto-scaling, and DevOps for applications that need infrastructure to scale reliably.",
      keywords: ["cloud infrastructure services", "server management", "AWS DevOps", "cloud architecture company"],
    },
  },
  {
    slug: "domains-ssl",
    category: "Hosting",
    categorySlug: "hosting",
    title: "Domains & SSL Management",
    shortTitle: "Domains & SSL",
    tagline: "The foundation of trust and reachability",
    headline: "Domain and SSL management that keeps your site secure and reachable",
    intro:
      "We handle domain registration, DNS configuration, and SSL certificate management so your site stays reachable, secure, and free of the browser warnings that erode customer trust.",
    description:
      "Domain registration, DNS management, and SSL certificate setup and renewal — keeping your site secure, trusted, and correctly configured.",
    heroImageKey: "domains-ssl",
    stats: [
      { value: 100, suffix: "%", label: "SSL-secured client sites" },
      { value: 0, suffix: "", label: "Expired-certificate incidents on managed domains" },
      { value: 200, suffix: "+", label: "Domains under active management" },
    ],
    overview: {
      title: "The details that quietly protect your reputation",
      paragraphs: [
        "An expired SSL certificate or a misconfigured DNS record can take a site offline or trigger browser security warnings — small technical details with an outsized impact on customer trust. We manage domains and certificates so these things never become emergencies.",
        "That includes proactive renewal tracking, correct DNS records for email deliverability, and HTTPS configuration that actually passes modern security checks.",
      ],
      heroImage: "/images/services/hosting/domains-ssl.png",
    },
    whyChooseUs: [
      { title: "Nothing expires unexpectedly", description: "Proactive renewal tracking for domains and certificates.", icon: "shield" },
      { title: "Correct DNS from the start", description: "Records configured properly for hosting, email, and CDN.", icon: "wifi" },
      { title: "Builds customer trust", description: "Clean HTTPS configuration with no browser security warnings.", icon: "check" },
      { title: "One point of contact", description: "Handled alongside your hosting instead of a separate vendor.", icon: "phone" },
      { title: "Reliable email deliverability", description: "Correctly configured SPF, DKIM, and DMARC records so your email lands in the inbox.", icon: "message" },
    ],
    features: [
      "Domain registration & transfer",
      "DNS configuration & management",
      "SSL/TLS certificate setup & renewal",
      "Email deliverability (SPF/DKIM/DMARC) setup",
      "Domain security (WHOIS privacy, DNSSEC)",
      "Multi-domain & subdomain management",
      "HTTPS migration & redirect setup",
      "Ongoing renewal monitoring",
    ],
    technologies: [
      { name: "Cloudflare", icon: "cloudflare", description: "DNS management and edge security." },
      { name: "Let's Encrypt", icon: "letsencrypt", description: "Automated SSL certificate issuance and renewal." },
      { name: "GoDaddy", icon: "godaddy", description: "Domain registration and management tooling." },
      { name: "Nginx", icon: "nginx", description: "HTTPS and redirect configuration at the server level." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Review current domains, DNS records, and certificate status." },
      { step: "02", title: "Configure", description: "Set up or correct DNS, SSL, and email authentication records." },
      { step: "03", title: "Secure", description: "Enable HTTPS everywhere and lock down domain security settings." },
      { step: "04", title: "Monitor & renew", description: "Track renewals proactively so nothing lapses unnoticed." },
    ],
    benefits: [
      { title: "No surprise downtime", description: "Renewals tracked and handled before anything expires." },
      { title: "Stronger customer trust", description: "Clean HTTPS with no browser warnings at checkout or sign-up." },
      { title: "Reliable email delivery", description: "Correct SPF/DKIM/DMARC records so email doesn't land in spam." },
      { title: "Simplified management", description: "One team handling domains, DNS, and certificates together." },
      { title: "Proactive security management", description: "Critical domain, DNS, and certificate settings are monitored to reduce avoidable security risks." },
    ],
    useCases: [
      { title: "New site launches", description: "Getting domain, DNS, and SSL configured correctly from day one." },
      { title: "HTTPS migrations", description: "Moving an existing site fully to HTTPS without breaking SEO." },
      { title: "Multi-domain businesses", description: "Managing several domains and subdomains consistently." },
      { title: "Email deliverability fixes", description: "Resolving emails landing in spam due to misconfigured DNS." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "FinTech", slug: "fintech" },
      { label: "Healthcare", slug: "healthcare" },
    ],
    faqs: [
      { question: "Can you transfer our domain from another registrar?", answer: "Yes, we handle domain transfers with minimal downtime and no disruption to your existing DNS records." },
      { question: "Do SSL certificates renew automatically?", answer: "We set up automated renewal wherever possible and monitor manually where it isn't, so certificates never lapse unnoticed." },
      { question: "Can you help our emails stop landing in spam?", answer: "Yes, correcting SPF, DKIM, and DMARC records is one of the most common fixes we make for email deliverability." },
      { question: "Do you manage multiple domains for one business?", answer: "Yes, we regularly manage domain portfolios and subdomain structures for businesses running several properties." },
    ],
    ctaTitle: "Make sure your domains and SSL never become a problem",
    ctaDescription: "Tell us what you're currently managing — we'll audit and take it off your plate.",
    seo: {
      title: "Domain & SSL Management Services",
      description: "Domain registration, DNS configuration, and SSL certificate management to keep your site secure and reachable.",
      keywords: ["domain management services", "SSL certificate setup", "DNS management company", "HTTPS migration"],
    },
  },
  {
    slug: "email-sms-solutions",
    category: "Hosting",
    categorySlug: "hosting",
    title: "Email & SMS Solutions",
    shortTitle: "Email & SMS Solutions",
    tagline: "Messaging infrastructure that actually delivers",
    headline: "Transactional email and SMS infrastructure built for deliverability",
    intro:
      "We set up and manage transactional email and SMS infrastructure — order confirmations, OTPs, alerts, and notifications — engineered for deliverability, not just for sending.",
    description:
      "Transactional email and SMS infrastructure setup, deliverability configuration, and integration with your application for reliable business messaging.",
    heroImageKey: "email-sms-solutions",
    stats: [
      { value: 98, suffix: "%", label: "Avg. inbox delivery rate achieved" },
      { value: 40, suffix: "+", label: "Messaging integrations delivered" },
      { value: 99.9, suffix: "%", label: "Messaging infrastructure uptime" },
    ],
    overview: {
      title: "Messages that actually reach the inbox or the phone",
      paragraphs: [
        "Sending an email or SMS is easy — getting it delivered reliably is the hard part. We configure transactional messaging infrastructure with the authentication, IP reputation, and provider setup that keeps deliverability high, and integrate it cleanly into your application.",
        "This covers everything from OTP and order confirmations to marketing sends and system alerts, routed through providers matched to your volume and reliability needs.",
      ],
      heroImage: "/images/services/hosting/email-sms-solutions.png",
    },
    whyChooseUs: [
      { title: "Deliverability-first setup", description: "Authentication and provider configuration built to reach the inbox.", icon: "check" },
      { title: "Right provider for your volume", description: "Matched to actual sending needs, not a default choice.", icon: "grid" },
      { title: "Clean application integration", description: "Wired directly into your app's transactional flows.", icon: "layers" },
      { title: "Monitored delivery", description: "Bounce, spam, and delivery tracking so issues surface early.", icon: "activity" },
      { title: "On-brand, tested templates", description: "Email and SMS templates designed and managed for consistency across every transactional touchpoint.", icon: "layers" },
    ],
    features: [
      "Transactional email setup (order/OTP/alerts)",
      "SMS gateway integration (OTP, notifications)",
      "Email authentication (SPF/DKIM/DMARC)",
      "Marketing email infrastructure",
      "Delivery & bounce monitoring",
      "Template design & management",
      "Webhook-based event tracking",
      "Provider migration & consolidation",
    ],
    technologies: [
      { name: "Mailchimp", icon: "mailchimp", description: "Marketing email delivery and campaign management." },
      { name: "Twilio", icon: "twilio", description: "SMS and messaging API integration." },
      { name: "Node.js", icon: "nodejs", description: "Backend services powering messaging integrations." },
      { name: "Redis", icon: "redis", description: "Queue infrastructure for reliable message delivery." },
    ],
    process: [
      { step: "01", title: "Audit current messaging", description: "Review existing email/SMS setup and deliverability metrics." },
      { step: "02", title: "Configure infrastructure", description: "Set up providers, authentication records, and templates." },
      { step: "03", title: "Integrate", description: "Connect transactional triggers directly into your application." },
      { step: "04", title: "Monitor & tune", description: "Track deliverability and adjust configuration as needed." },
    ],
    benefits: [
      { title: "Higher delivery rates", description: "Messages that actually reach customers instead of spam folders." },
      { title: "Reliable transactional flows", description: "OTPs and confirmations customers can depend on." },
      { title: "Full visibility", description: "Delivery, bounce, and engagement tracking in one place." },
      { title: "Scales with volume", description: "Infrastructure that holds up as sending volume grows." },
      { title: "Proactive security management", description: "Critical domain, DNS, and certificate settings are monitored to reduce avoidable security risks." },
    ],
    useCases: [
      { title: "OTP & authentication", description: "Reliable one-time passcodes for login and verification." },
      { title: "Order & booking confirmations", description: "Transactional emails and SMS customers actually receive." },
      { title: "System & operational alerts", description: "Time-sensitive notifications for internal and customer-facing events." },
      { title: "Marketing campaigns", description: "Deliverability-tuned infrastructure for promotional sends." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Healthcare", slug: "healthcare" },
      { label: "FinTech", slug: "fintech" },
      { label: "Tours & Travel", slug: "tours-travel" },
    ],
    faqs: [
      { question: "Why are our emails landing in spam?", answer: "Usually missing or misconfigured SPF/DKIM/DMARC records, poor sender reputation, or the wrong provider for your volume — we diagnose and fix the specific cause." },
      { question: "Can you integrate SMS OTP into our existing app?", answer: "Yes, we integrate SMS gateways directly into your authentication and notification flows." },
      { question: "Do you handle both transactional and marketing email?", answer: "Yes, though we typically separate the infrastructure to protect transactional deliverability from marketing sending patterns." },
      { question: "Can you migrate us from our current email provider?", answer: "Yes, including reconfiguring authentication records and application integrations for the new provider." },
    ],
    ctaTitle: "Get messaging your customers actually receive",
    ctaDescription: "Tell us what you're sending today — we'll audit deliverability and fix what's costing you reach.",
    seo: {
      title: "Email & SMS Infrastructure Services",
      description: "Transactional email and SMS infrastructure setup, deliverability configuration, and application integration.",
      keywords: ["transactional email setup", "SMS gateway integration", "email deliverability service", "SPF DKIM DMARC setup"],
    },
  },

  // ---------------------------------------------------------------------
  // MOBILE APPLICATION
  // ---------------------------------------------------------------------
  {
    slug: "android-app-development",
    category: "Mobile Application",
    categorySlug: "mobile-application",
    title: "Android App Development",
    shortTitle: "Android App Development",
    tagline: "Native performance, built for scale",
    headline: "Android applications built for performance and Play Store success",
    intro:
      "We build native and cross-platform Android applications engineered for smooth performance across device fragmentation, clean Play Store submission, and retention that outlasts the first install.",
    description:
      "Native and cross-platform Android application development — architecture, UI, backend integration, and Play Store deployment built for retention and performance.",
    heroImageKey: "android-app-development",
    stats: [
      { value: 45, suffix: "+", label: "Android apps shipped" },
      { value: 4.5, suffix: "★", label: "Avg. Play Store rating on delivered apps" },
      { value: 100, suffix: "%", label: "Play Store submission success rate" },
    ],
    overview: {
      title: "Built for Android's real-world device diversity",
      paragraphs: [
        "Android's biggest engineering challenge is device fragmentation — different screen sizes, OS versions, and hardware capabilities all need to feel equally polished. We build with that reality in mind: adaptive layouts, careful memory management, and testing across representative device tiers, not just flagship phones.",
        "We handle the full lifecycle — architecture, UI, backend/API integration, push notifications, offline support, and Play Store submission — so the app is genuinely ready for real users on day one.",
      ],
      heroImage: "/images/services/mobile-application/android-app.png",
    },
    whyChooseUs: [
      { title: "Built for fragmentation", description: "Tested across device tiers, not just the latest flagship.", icon: "monitor" },
      { title: "Performance-first engineering", description: "Careful memory and battery management for smooth everyday use.", icon: "trending" },
      { title: "Retention-focused UX", description: "Onboarding and engagement patterns designed for the second session, not just the first.", icon: "star" },
      { title: "Clean Play Store submission", description: "Policy-compliant builds that pass review without delays.", icon: "check" },
      { title: "Offline-first architecture", description: "Local data and sync design so the app stays usable through patchy or absent connectivity.", icon: "wifi" },
    ],
    features: [
      "Native Android (Kotlin/Java) development",
      "Cross-platform builds (Flutter/React Native)",
      "Offline-first data & sync architecture",
      "Push notification & deep-linking setup",
      "Backend/API integration",
      "In-app purchases & subscription billing",
      "Play Store optimization & submission",
      "Post-launch monitoring & updates",
    ],
    technologies: [
      { name: "Android", icon: "android", description: "Native platform development with Kotlin." },
      { name: "React", icon: "react", description: "React Native for cross-platform builds where it fits." },
      { name: "TypeScript", icon: "typescript", description: "Typed logic across cross-platform codebases." },
      { name: "Node.js", icon: "nodejs", description: "Backend APIs and services powering the app." },
      { name: "Firebase", icon: "google", description: "Push notifications, analytics, and backend services." },
    ],
    process: [
      { step: "01", title: "Product & architecture planning", description: "Define features, offline needs, and native vs. cross-platform approach." },
      { step: "02", title: "Design & build", description: "Develop UI and core functionality with real device testing throughout." },
      { step: "03", title: "Integrate & QA", description: "Connect backend services and test across device tiers and OS versions." },
      { step: "04", title: "Launch & support", description: "Submit to Play Store and monitor crash/performance data post-launch." },
    ],
    benefits: [
      { title: "Smooth on real devices", description: "Performance tuned for the mid-range phones most users actually own." },
      { title: "Higher retention", description: "Onboarding and engagement designed to bring users back." },
      { title: "Faster store approval", description: "Policy-aware builds that avoid common rejection reasons." },
      { title: "Reliable offline behavior", description: "Apps that stay usable through patchy connectivity." },
      { title: "Device-ready experience", description: "Interfaces and performance are optimized across different screen sizes, devices, and real-world usage conditions." },
    ],
    useCases: [
      { title: "Consumer apps", description: "Retail, delivery, and lifestyle apps built for daily engagement." },
      { title: "Business & field apps", description: "Tools for field teams needing offline reliability." },
      { title: "Marketplace & booking apps", description: "Two-sided platforms connecting buyers and providers." },
      { title: "Enterprise mobile tools", description: "Internal apps extending business systems to mobile." },
    ],
    industriesServed: [
      { label: "FoodTech", slug: "foodtech" },
      { label: "Tours & Travel", slug: "tours-travel" },
      { label: "Healthcare", slug: "healthcare" },
      { label: "Real Estate", slug: "real-estate" },
    ],
    faqs: [
      { question: "Should we build native or cross-platform?", answer: "Depends on your performance needs and whether you also need iOS — we'll recommend after understanding your product and timeline." },
      { question: "Do you handle Play Store submission?", answer: "Yes, including policy compliance review to reduce the chance of rejection or delay." },
      { question: "Can the app work offline?", answer: "Yes, we design offline-first data and sync architecture for apps that need to work without a constant connection." },
      { question: "Do you support the app after launch?", answer: "Yes, including crash monitoring, OS-update compatibility, and ongoing feature development." },
    ],
    ctaTitle: "Build an Android app users actually keep",
    ctaDescription: "Tell us about your product and users — we'll scope an app built for retention, not just launch day.",
    seo: {
      title: "Android App Development Services",
      description: "Native and cross-platform Android application development, engineered for performance, retention, and Play Store success.",
      keywords: ["Android app development", "Android app development company", "Kotlin app development", "React Native Android app"],
    },
  },
  {
    slug: "ios-development",
    category: "Mobile Application",
    categorySlug: "mobile-application",
    title: "iOS App Development",
    shortTitle: "iOS Development",
    tagline: "Polished, App Store-ready experiences",
    headline: "iOS applications built to Apple's standard of polish",
    intro:
      "We build native and cross-platform iOS applications with the interaction polish and performance Apple users expect, engineered for a smooth path through App Store review.",
    description:
      "Native and cross-platform iOS application development — Swift-based builds, backend integration, and App Store submission built for retention and performance.",
    heroImageKey: "ios-development",
    stats: [
      { value: 30, suffix: "+", label: "iOS apps shipped" },
      { value: 4.6, suffix: "★", label: "Avg. App Store rating on delivered apps" },
      { value: 100, suffix: "%", label: "App Store submission success rate" },
    ],
    overview: {
      title: "Built to Apple's standard, not just Apple's guidelines",
      paragraphs: [
        "iOS users notice polish — animation timing, gesture responsiveness, and adherence to Human Interface Guidelines all affect how trustworthy an app feels. We build with that bar in mind, whether the app is native Swift or a well-tuned cross-platform build.",
        "We also manage the parts of iOS development teams often underestimate: App Store review compliance, privacy manifest requirements, and subscription/in-app purchase configuration — so submission doesn't become a bottleneck.",
      ],
      heroImage: "/images/services/mobile-application/ios.png",
    },
    whyChooseUs: [
      { title: "Interaction-level polish", description: "Animation and gesture detail matched to iOS user expectations.", icon: "star" },
      { title: "HIG-compliant design", description: "Interfaces that feel native to the platform, not ported from elsewhere.", icon: "grid" },
      { title: "Review-ready submissions", description: "Privacy and policy compliance handled before submission, not after rejection.", icon: "shield" },
      { title: "Performance tuned", description: "Smooth on current and older supported devices alike.", icon: "trending" },
      { title: "Reliable subscription billing", description: "In-app purchases and subscription billing configured correctly to avoid App Store payment issues.", icon: "card" },
    ],
    features: [
      "Native iOS (Swift/SwiftUI) development",
      "Cross-platform builds (Flutter/React Native)",
      "App Store privacy manifest & compliance",
      "Push notification & deep-linking setup",
      "In-app purchases & subscription billing",
      "Backend/API integration",
      "App Store optimization & submission",
      "Post-launch monitoring & updates",
    ],
    technologies: [
      { name: "iOS", icon: "apple", description: "Native platform development with Swift/SwiftUI." },
      { name: "React", icon: "react", description: "React Native for cross-platform builds where it fits." },
      { name: "TypeScript", icon: "typescript", description: "Typed logic across cross-platform codebases." },
      { name: "Node.js", icon: "nodejs", description: "Backend APIs and services powering the app." },
      { name: "Firebase", icon: "google", description: "Push notifications, analytics, and backend services." },
    ],
    process: [
      { step: "01", title: "Product & architecture planning", description: "Define features and native vs. cross-platform approach for your timeline." },
      { step: "02", title: "Design & build", description: "Develop with HIG-aligned interaction design from the start." },
      { step: "03", title: "Integrate & QA", description: "Connect backend services and test across supported devices." },
      { step: "04", title: "Submit & support", description: "Handle App Store submission and monitor post-launch performance." },
    ],
    benefits: [
      { title: "Feels genuinely native", description: "Interaction polish that matches user expectations on iOS." },
      { title: "Smoother App Store approval", description: "Compliance handled proactively, reducing rejection cycles." },
      { title: "Higher perceived quality", description: "Attention to detail that reflects well on your brand." },
      { title: "Reliable subscription billing", description: "In-app purchases configured correctly the first time." },
      { title: "Native-quality experience", description: "A polished mobile experience designed around platform conventions, performance, and user expectations." },
    ],
    useCases: [
      { title: "Consumer & lifestyle apps", description: "Apps competing on daily engagement and polish." },
      { title: "Subscription products", description: "Apps monetized through App Store subscription billing." },
      { title: "Marketplace & booking apps", description: "Two-sided platforms with a strong iOS user base." },
      { title: "Enterprise mobile tools", description: "Internal apps distributed via managed enterprise deployment." },
    ],
    industriesServed: [
      { label: "FoodTech", slug: "foodtech" },
      { label: "Tours & Travel", slug: "tours-travel" },
      { label: "Healthcare", slug: "healthcare" },
      { label: "FinTech", slug: "fintech" },
    ],
    faqs: [
      { question: "Should we build native Swift or cross-platform?", answer: "Depends on your performance needs, timeline, and whether you also need Android — we'll recommend after scoping the product." },
      { question: "Do you handle App Store submission and compliance?", answer: "Yes, including privacy manifest requirements and policy review to reduce rejection risk." },
      { question: "Can you set up subscriptions or in-app purchases?", answer: "Yes, App Store billing configuration is a standard part of our iOS builds." },
      { question: "Do you support the app after launch?", answer: "Yes, including crash monitoring, iOS-update compatibility, and ongoing feature development." },
    ],
    ctaTitle: "Build an iOS app that feels genuinely native",
    ctaDescription: "Tell us about your product and users — we'll scope an app built to Apple's standard of polish.",
    seo: {
      title: "iOS App Development Services",
      description: "Native and cross-platform iOS application development, built for App Store success, performance, and retention.",
      keywords: ["iOS app development", "iOS app development company", "Swift app development", "App Store development"],
    },
  },

  // ---------------------------------------------------------------------
  // WEB DESIGN
  // ---------------------------------------------------------------------
  {
    slug: "website-design",
    category: "Web Design",
    categorySlug: "web-design",
    title: "Website Design",
    shortTitle: "Website Design",
    tagline: "Design that communicates before it decorates",
    headline: "Website design built around clarity, brand, and conversion",
    intro:
      "We design websites that communicate your value clearly within seconds — grounded in research, structured around user goals, and polished with the visual craft your brand deserves.",
    description:
      "End-to-end website design — research, information architecture, visual design, and prototyping — built to communicate clearly and convert visitors into customers.",
    heroImageKey: "website-design",
    stats: [
      { value: 80, suffix: "+", label: "Websites designed" },
      { value: 42, suffix: "%", label: "Avg. bounce-rate improvement post-redesign" },
      { value: 100, suffix: "%", label: "Custom, research-led design" },
    ],
    overview: {
      title: "Design decisions grounded in what users actually need",
      paragraphs: [
        "A good-looking site that doesn't communicate clearly still fails. We start with research and information architecture — understanding what visitors are trying to accomplish — before moving into visual design, so every layout decision serves a purpose.",
        "We focus on creating a clear visual hierarchy that guides users naturally through the experience. From typography and spacing to color, imagery, and interactive elements, every detail is considered to make important information easy to find and understand.",
        "Our approach balances brand personality with usability. We design interfaces that feel distinctive and modern without allowing visual effects, animations, or decorative elements to get in the way of the user's primary goals.",
        "Responsive behavior is considered from the beginning rather than added at the end. Each layout is designed to adapt smoothly across desktops, tablets, and mobile devices while maintaining consistency, readability, and a comfortable interaction experience.",
      ],
      heroImage: "/images/services/web-design/website-design.png",
    },
    whyChooseUs: [
      { title: "Research before pixels", description: "User and business goals mapped before any visual design begins.", icon: "search" },
      { title: "Clarity-first layouts", description: "Structure that guides visitors instead of just decorating the page.", icon: "grid" },
      { title: "Brand-consistent craft", description: "Typography, color, and imagery aligned to your identity.", icon: "star" },
      { title: "Conversion-aware design", description: "Every key page designed with a clear next action in mind.", icon: "trending" },
      { title: "Design systems built in", description: "Reusable style guides and component patterns that keep future pages consistent.", icon: "grid" },
    ],
    features: [
      "UX research & information architecture",
      "Custom visual design (not templates)",
      "Responsive layout design",
      "Interactive prototyping",
      "Design system & style guide creation",
      "Conversion-focused page design",
      "Accessibility-aware design",
      "Developer handoff & QA support",
    ],
    technologies: [
      { name: "Figma", icon: "figma", description: "Design, prototyping, and developer handoff." },
      { name: "HTML5", icon: "html5", description: "Semantic markup foundation for design implementation." },
      { name: "CSS", icon: "css", description: "Styling systems built for consistency and responsiveness." },
      { name: "Tailwind CSS", icon: "tailwindcss", description: "Utility-first implementation of design systems." },
    ],
    process: [
      { step: "01", title: "Discover & research", description: "Understand your users, goals, brand, and competitors." },
      { step: "02", title: "Structure", description: "Map information architecture and user flows before visuals." },
      { step: "03", title: "Design", description: "Develop the visual language and design every key page." },
      { step: "04", title: "Prototype & handoff", description: "Prototype for validation, then hand off clean specs for development." },
    ],
    benefits: [
      { title: "Clearer communication", description: "Visitors understand what you offer within seconds of landing." },
      { title: "Stronger first impression", description: "Polished, on-brand design that builds instant credibility." },
      { title: "Better conversion", description: "Layouts designed around a clear next action, not just aesthetics." },
      { title: "Easier development", description: "Clean handoff specs reduce back-and-forth during build." },
      {
        title: "Improved user experience",
        description: "Clear navigation, intuitive layouts, and thoughtful interactions make it easier for visitors to find what they need."
      },
    ],
    useCases: [
      { title: "Brand & marketing websites", description: "Sites that need to make a strong first impression fast." },
      { title: "Website redesigns", description: "Modernizing a dated site without losing existing SEO equity." },
      { title: "Product & landing pages", description: "Focused pages designed around a single conversion goal." },
      { title: "Design systems", description: "Reusable design foundations for growing digital products." },
    ],
    industriesServed: [
      { label: "Real Estate", slug: "real-estate" },
      { label: "EdTech", slug: "edtech" },
      { label: "Tours & Travel", slug: "tours-travel" },
    ],
    faqs: [
      { question: "Do you design from scratch or use templates?", answer: "Custom, from scratch — grounded in your brand and user research, not a generic template adapted to fit." },
      { question: "Can you redesign our existing site without losing SEO?", answer: "Yes, we plan redesigns with careful URL and content mapping to preserve existing search rankings." },
      { question: "Do you also build the website, or just design it?", answer: "Both — our design and development teams work together, or we can hand off clean specs to your existing dev team." },
      { question: "How long does a typical website design take?", answer: "A focused marketing site usually takes 3–6 weeks from research to final design, depending on scope and page count." },
    ],
    ctaTitle: "Get a website that communicates before it decorates",
    ctaDescription: "Tell us about your brand and goals — we'll design a site built to earn attention and convert it.",
    seo: {
      title: "Website Design Services",
      description: "Custom website design — research, information architecture, and visual design built for clarity and conversion.",
      keywords: ["website design services", "custom website design company", "UX website design", "website redesign"],
    },
  },
  {
    slug: "custom-website-design",
    category: "Web Design",
    categorySlug: "web-design",
    title: "Custom Website Design",
    shortTitle: "Custom Website Design",
    tagline: "Design built entirely around your brand",
    headline: "Fully custom design for brands that can't run on a template",
    intro:
      "For brands with distinctive positioning or complex product offerings, a template compromises before the first visitor arrives. We design fully custom experiences shaped entirely around your brand, content, and users.",
    description:
      "Fully custom website design — bespoke visual systems, unique interaction patterns, and layouts built specifically around your brand rather than adapted from a template.",
    heroImageKey: "custom-website-design",
    stats: [
      { value: 100, suffix: "%", label: "Fully bespoke design, zero templates" },
      { value: 50, suffix: "+", label: "Custom design systems delivered" },
      { value: 38, suffix: "%", label: "Avg. engagement lift post-launch" },
    ],
    overview: {
      title: "When your brand and product don't fit a template",

      paragraphs: [
        "Templates are built for the average case. When your product has real complexity, your brand has a distinctive point of view, or your competitors all look the same, a fully custom design becomes the differentiator rather than a nice-to-have.",
        "We build the visual system, interaction patterns, and page architecture from a blank canvas — informed by your brand strategy and user research — so nothing about the site feels borrowed.",
        "Every part of the experience is designed around your specific goals, audience, and content. From the first interaction to deeper product journeys, we create layouts that make complex information easier to understand while keeping the experience intuitive and engaging.",
        "The result is a website that feels genuinely yours: differentiated from competitors, aligned with your brand, and built around how your customers actually explore, understand, and interact with your product."
      ],
      heroImage: "/images/services/web-design/custom-website-design.png",
    },
    whyChooseUs: [
      { title: "Zero template compromise", description: "Every layout and interaction pattern designed specifically for you.", icon: "star" },
      { title: "Distinctive visual identity", description: "Design that makes your brand memorable, not interchangeable.", icon: "grid" },
      { title: "Built for complexity", description: "Handles nuanced products and content templates can't accommodate.", icon: "layers" },
      { title: "Strategic, not decorative", description: "Every custom element serves a communication or conversion purpose.", icon: "trending" },
      { title: "Bespoke micro-interactions", description: "Custom animation and interaction details designed specifically for your product, not borrowed from a library.", icon: "star" },
    ],
    features: [
      "Custom visual identity & art direction",
      "Bespoke interaction & micro-animation design",
      "Complex information architecture",
      "Custom illustration & iconography direction",
      "Fully responsive custom layouts",
      "Interactive high-fidelity prototyping",
      "Design system built from scratch",
      "Close collaboration with development for exact fidelity",
    ],
    technologies: [
      { name: "Figma", icon: "figma", description: "Custom design and interactive prototyping." },
      { name: "HTML5", icon: "html5", description: "Semantic foundation for pixel-accurate implementation." },
      { name: "CSS", icon: "css", description: "Custom styling systems beyond standard component libraries." },
      { name: "JavaScript", icon: "javascript", description: "Bespoke interaction and animation implementation." },
    ],
    process: [
      { step: "01", title: "Brand & strategy immersion", description: "Understand brand positioning, audience, and what needs to feel different." },
      { step: "02", title: "Concept exploration", description: "Explore distinctive visual directions before committing to one." },
      { step: "03", title: "Full custom design", description: "Design every page and interaction from a blank canvas." },
      { step: "04", title: "Prototype & build handoff", description: "Validate with interactive prototypes, then hand off for pixel-accurate build." },
    ],
    benefits: [
      { title: "Genuine differentiation", description: "A site that looks and feels like no one else's in your space." },
      { title: "Matches product complexity", description: "Layouts built for what your product actually does." },
      { title: "Stronger brand recall", description: "Distinctive design that visitors remember and associate with you." },
      { title: "Long-term flexibility", description: "A design system built to extend as your product grows." },
      {
        title: "Memorable user experience",
        description: "Unique layouts and interactions create a distinctive experience that helps your brand stand out and stay memorable."
      },
    ],
    useCases: [
      { title: "Category-defining brands", description: "Companies that need design to signal category leadership." },
      { title: "Complex product platforms", description: "Products whose depth a template can't represent." },
      { title: "Agency & creative-led brands", description: "Businesses where design itself is part of the value proposition." },
      { title: "Flagship rebrands", description: "A full website relaunch alongside a broader brand refresh." },
    ],
    industriesServed: [
      { label: "Media & Publishing", slug: "media" },
      { label: "Gaming", slug: "gaming" },
      { label: "Real Estate", slug: "real-estate" },
    ],
    faqs: [
      { question: "How is this different from your standard website design service?", answer: "Custom website design starts from a blank canvas with no template or existing pattern library as a starting point — suited to brands where distinctiveness is the priority." },
      { question: "Does fully custom design take longer?", answer: "Generally yes — expect a longer discovery and concept phase in exchange for a genuinely distinctive result." },
      { question: "Do you handle the development too?", answer: "Yes, or we hand off detailed specs to your development team for pixel-accurate implementation." },
      { question: "Can you work alongside our existing brand guidelines?", answer: "Yes, we design within established brand guidelines when they exist, or help define them where they don't." },
    ],
    ctaTitle: "Get a website that looks like nobody else's",
    ctaDescription: "Tell us about your brand and what needs to feel different — we'll design it from scratch.",
    seo: {
      title: "Custom Website Design Services",
      description: "Fully bespoke website design — custom visual systems and interaction patterns built entirely around your brand.",
      keywords: ["custom website design", "bespoke web design agency", "custom UI design", "brand website design"],
    },
  },
  {
    slug: "responsive-web-design",
    category: "Web Design",
    categorySlug: "web-design",
    title: "Responsive Web Design",
    shortTitle: "Responsive Web Design",
    tagline: "Every device treated as the primary one",
    headline: "Responsive design that feels intentional on every screen",
    intro:
      "We design and build interfaces that adapt deliberately across phones, tablets, and desktops — not a desktop layout that merely survives being squeezed onto a smaller screen.",
    description:
      "Responsive web design and implementation — layouts, typography, and interaction patterns engineered to feel purpose-built at every breakpoint.",
    heroImageKey: "responsive-web-design",
    stats: [
      { value: 100, suffix: "%", label: "Mobile-first design process" },
      { value: 65, suffix: "%", label: "Avg. share of traffic on mobile devices" },
      { value: 35, suffix: "%", label: "Avg. mobile conversion lift post-redesign" },
    ],
    overview: {
      title: "Designed mobile-first, not squeezed down after",
      paragraphs: [
        "With most traffic arriving on mobile for many businesses, a 'responsive' site that just shrinks a desktop layout isn't good enough. We design mobile-first — establishing content hierarchy, touch targets, and navigation for small screens first, then expanding deliberately for larger viewports.",
        "Mobile interactions are designed around real touch behavior. Navigation, tap targets, scrolling patterns, gestures, and feedback are structured to feel natural and effortless, helping users complete their tasks without friction.",
        "As the viewport expands, the experience doesn't simply stretch. Layouts, grids, imagery, and content density are intentionally adapted to make better use of available space while maintaining the same visual language and interaction principles.",
        "The result is a consistent experience across phones, tablets, laptops, and large desktop screens — with each device receiving a layout that feels purpose-built rather than like a smaller or larger version of something else."
      ],
      heroImage: "/images/services/web-design/responsive-web-design.png",
    },
    whyChooseUs: [
      { title: "Mobile-first by process", description: "Small-screen experience designed first, not as an afterthought.", icon: "monitor" },
      { title: "Every breakpoint considered", description: "Deliberate layout decisions at each screen size, not just two extremes.", icon: "grid" },
      { title: "Touch-friendly interaction", description: "Navigation and controls sized and placed for real thumbs.", icon: "check" },
      { title: "Performance-aware", description: "Responsive images and layout choices that keep mobile load times low.", icon: "trending" },
      { title: "Typography that scales cleanly", description: "Type systems tuned for readability from a small phone screen up to a large desktop display.", icon: "book" },
    ],
    features: [
      "Mobile-first design process",
      "Fluid, breakpoint-aware layouts",
      "Touch-optimized navigation & controls",
      "Responsive image & media strategy",
      "Cross-device typography systems",
      "Progressive enhancement approach",
      "Cross-browser & cross-device testing",
      "Performance optimization for mobile",
    ],
    technologies: [
      { name: "CSS", icon: "css", description: "Fluid grid and breakpoint systems." },
      { name: "Tailwind CSS", icon: "tailwindcss", description: "Utility-first responsive implementation." },
      { name: "HTML5", icon: "html5", description: "Semantic, accessible responsive markup." },
      { name: "JavaScript", icon: "javascript", description: "Adaptive interaction behavior across devices." },
      { name: "Figma", icon: "figma", description: "Multi-breakpoint design and prototyping." },
    ],
    process: [
      { step: "01", title: "Content & priority mapping", description: "Determine what matters most at the smallest screen size first." },
      { step: "02", title: "Mobile-first design", description: "Design the core experience for small screens, then scale up." },
      { step: "03", title: "Breakpoint design & build", description: "Design and implement tablet and desktop layouts deliberately." },
      { step: "04", title: "Test across real devices", description: "Validate on actual phones, tablets, and browsers — not just resize a browser window." },
    ],
    benefits: [
      { title: "Better mobile conversion", description: "Interfaces designed for how mobile visitors actually behave." },
      { title: "Consistent brand experience", description: "The site feels intentional, not compromised, on every device." },
      { title: "Wider reach", description: "No visitors excluded by a device size the site wasn't designed for." },
      { title: "Future-proof layouts", description: "Fluid systems that adapt gracefully to new device sizes." },
      {
        title: "Better user accessibility",
        description: "Content and interactions remain easy to read, navigate, and use across different screen sizes and devices."
      },
    ],
    useCases: [
      { title: "Mobile-heavy audiences", description: "Businesses where most traffic already arrives on phones." },
      { title: "E-commerce storefronts", description: "Shopping experiences that need to convert on every screen size." },
      { title: "Content & publishing sites", description: "Reading experiences that stay comfortable at any width." },
      { title: "Legacy site modernization", description: "Fixing sites with poor or bolted-on mobile experiences." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Media & Publishing", slug: "media" },
      { label: "FoodTech", slug: "foodtech" },
    ],
    faqs: [
      { question: "Isn't every modern site already responsive?", answer: "Technically most sites resize, but many still just shrink a desktop layout rather than being designed deliberately for mobile — we design and test for that difference." },
      { question: "Do you test on real devices?", answer: "Yes, across a representative set of real phones, tablets, and browsers, not just simulated browser resizing." },
      { question: "Can you fix a site that already has poor mobile UX?", answer: "Yes, auditing and redesigning the mobile experience of an existing site is a common project for us." },
      { question: "Does responsive design affect page speed?", answer: "It should improve it — we design responsive image and layout strategies specifically to keep mobile load times low." },
    ],
    ctaTitle: "Make every screen size feel like the primary one",
    ctaDescription: "Tell us about your current site and traffic split — we'll design (or fix) it mobile-first.",
    seo: {
      title: "Responsive Web Design Services",
      description: "Mobile-first responsive web design — layouts and interaction patterns engineered for every device and breakpoint.",
      keywords: ["responsive web design", "mobile-first design company", "responsive website development", "mobile UX design"],
    },
  },

  // ---------------------------------------------------------------------
  // DIGITAL MARKETING
  // ---------------------------------------------------------------------
  {
    slug: "seo",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO",
    tagline: "Rankings built on a technical foundation",
    headline: "SEO that combines technical foundations with content that ranks",
    intro:
      "We run SEO programs across technical foundations, on-page optimization, content strategy, and off-page authority — treating rankings as the output of good architecture, not a checklist run once at launch.",
    description:
      "Technical, on-page, and off-page SEO — keyword strategy, site architecture, content optimization, and authority building, backed by clear reporting.",
    heroImageKey: "seo",
    stats: [
      { value: 60, suffix: "+", label: "SEO programs delivered" },
      { value: 140, suffix: "%", label: "Avg. organic traffic growth (12 months)" },
      { value: 90, suffix: "+", label: "Avg. Core Web Vitals score achieved" },
    ],
    overview: {
      title: "Rankings follow architecture, not shortcuts",
      paragraphs: [
        "Now a days all kinds of business are going to be online to boost the revenue even offline business are also required the marketing to get the results. Digital marketing is the effective way to reach world wide targeted customer and can be done via diff. diff. methods .Such as SEO/SMO, PPC, Email marketing etc.",
        "SEO (search engine optimization) is an activity that can make your site quality and increase quantity of traffic to provide organic result for your website. SEO improve your site ranking on search engines like: Google, Yahoo!, Bing etc. SEO provide better traffic quality and quantity to increase your business and attract all users to visit on your site.",
        "SEO provide On-Page and Off-Page marketing that can make organic traffic, better BackLinks, Google Webmaster and Analytics, and sitemap.",
      ],
      heroImage: "/images/services/digital-marketing/seo.png",
    },
    whyChooseUs: [
      { title: "Technical foundation first", description: "Crawlability and Core Web Vitals fixed before content strategy begins.", icon: "layers" },
      { title: "Keyword strategy tied to intent", description: "Targets terms that convert, not just terms with high volume.", icon: "search" },
      { title: "White-hat authority building", description: "Legitimate link and authority strategies, not shortcuts that risk penalties.", icon: "shield" },
      { title: "Clear, honest reporting", description: "Rankings and traffic tied to business outcomes, not vanity dashboards.", icon: "chart" },
      { title: "Content built for intent", description: "Content strategy and optimization mapped directly to keyword and search intent research.", icon: "book" },
    ],
    features: [
      "Technical SEO audits & fixes",
      "Core Web Vitals optimization",
      "Keyword research & content mapping",
      "On-page optimization (titles, meta, schema)",
      "Content strategy & optimization",
      "Off-page authority & link building",
      "Local SEO & Google Business Profile optimization",
      "Monthly performance reporting",
    ],
    technologies: [
      { name: "Google Search Console", icon: "googlesearchconsole", description: "Crawl, index, and search performance monitoring." },
      { name: "Google Analytics", icon: "googleanalytics", description: "Traffic and conversion tracking." },
      { name: "Google Tag Manager", icon: "googletagmanager", description: "Event and conversion tracking implementation." },
      { name: "SEMrush", icon: "semrush", description: "Keyword research and competitive analysis." },
    ],
    process: [
      { step: "01", title: "Technical audit", description: "Diagnose crawlability, indexing, and Core Web Vitals issues." },
      { step: "02", title: "Strategy & keyword mapping", description: "Map high-intent keywords to existing and new content." },
      { step: "03", title: "On-page & content execution", description: "Optimize and create content aligned to search intent." },
      { step: "04", title: "Authority building & reporting", description: "Build legitimate off-page authority and report on real outcomes." },
    ],
    benefits: [
      { title: "Sustainable organic growth", description: "Rankings built on foundations that don't collapse after an algorithm update." },
      { title: "Better qualified traffic", description: "Intent-matched keywords bring visitors likely to convert." },
      { title: "Lower acquisition cost over time", description: "Organic traffic reduces reliance on paid acquisition." },
      { title: "Full visibility", description: "Clear reporting tied to traffic, rankings, and business outcomes." },
      { title: "Compounding channel value", description: "Strong organic foundations continue generating qualified visibility without paying for every visit." },
    ],
    useCases: [
      { title: "New site SEO foundations", description: "Building technical and content foundations before launch." },
      { title: "Organic traffic recovery", description: "Diagnosing and reversing a traffic or ranking decline." },
      { title: "E-commerce SEO", description: "Category and product page optimization for retail search intent." },
      { title: "Local & multi-location SEO", description: "Visibility for businesses competing in specific geographies." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Real Estate", slug: "real-estate" },
      { label: "Tours & Travel", slug: "tours-travel" },
      { label: "Media & Publishing", slug: "media" },
    ],
    faqs: [
      { question: "How long does SEO take to show results?", answer: "Meaningful movement typically starts in 3–4 months, with compounding gains over 6–12 months — we're upfront that SEO is not an overnight channel." },
      { question: "Do you guarantee first-page rankings?", answer: "No — any agency guaranteeing specific rankings is not being honest with you. We commit to sound strategy and transparent reporting on real progress instead." },
      { question: "Do you write content, or just optimize it?", answer: "Both — content strategy and creation are part of the program, mapped to keyword and intent research." },
      { question: "How do you report on performance?", answer: "Monthly reporting tied to organic traffic, rankings, and conversions — not just raw keyword position counts." },
    ],
    ctaTitle: "Build organic growth on a foundation that lasts",
    ctaDescription: "Tell us about your site and goals — we'll audit your technical and content SEO foundations first.",
    seo: {
      title: "SEO Services",
      description: "Technical, on-page, and off-page SEO services — keyword strategy, content optimization, and authority building for sustainable growth.",
      keywords: ["SEO services", "SEO agency", "technical SEO audit", "organic search growth"],
    },
  },
  {
    slug: "smo",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    title: "Social Media Optimization (SMO)",
    shortTitle: "SMO",
    tagline: "Profiles built to convert visitors into followers",
    headline: "Social profile optimization that turns visits into engagement",
    intro:
      "We optimize your social media profiles, content structure, and posting cadence so visitors from search, ads, or referrals convert into engaged followers — the groundwork that makes every other social effort perform better.",
    description:
      "Social Media Optimization — profile setup, content structure, cross-platform consistency, and engagement strategy built to strengthen every other marketing channel.",
    heroImageKey: "smo",
    stats: [
      { value: 50, suffix: "+", label: "Brand profiles optimized" },
      { value: 65, suffix: "%", label: "Avg. profile-to-follow conversion lift" },
      { value: 6, suffix: "+", label: "Platforms actively managed" },
    ],
    overview: {
      title: "The foundation every social campaign builds on",
      paragraphs: [
        "SMO (social media optimization) is an activity that can manage your site on social media and grow-up your presence. SMO improve site ranking on social media like: Facebook, Twitter, LinkedIn etc. SMO provide better traffic quality and quantity to improve your business and attract all users to visit on your site.",
        "SMO provide On-Site and Off-Site marketing that can make organic traffic, better BackLinks, Google Webmaster and Analytics, and sitemap. Between the wider audience and the social network, your business and your brand and Creating affect the customer’s opinion about brand awareness.",
      ],
      types: [
        {
          number: "01",
          title: "On-Site SMO",
          description:
            "RSS feeds, Sharing/ Like buttons, User rating about new product/ service, Polls, Employee engagement initiative etc."
        },
        {
          number: "02",
          title: "Off-Site SMO",
          description:
            " Blogs, Participating in discussions, Joining social networks, Viral advertising, Press Release etc.",
        }
      ],
      heroImage: "/images/services/digital-marketing/smo.png",
    },
    whyChooseUs: [
      { title: "Platform-specific strategy", description: "Content and profile structure tailored to how each platform actually works.", icon: "grid" },
      { title: "Consistent brand presence", description: "Unified visual identity and messaging across every channel.", icon: "star" },
      { title: "Engagement-focused content", description: "Structured to earn shares and interaction, not just impressions.", icon: "trending" },
      { title: "Foundation for paid + organic", description: "Optimized profiles that improve performance of every other channel.", icon: "check" },
      { title: "Built for discoverability", description: "Hashtag and content structuring designed around how each platform's discovery algorithm actually works.", icon: "search" },
    ],
    features: [
      "Profile setup & optimization (bio, CTA, branding)",
      "Content pillar & posting strategy",
      "Cross-platform brand consistency",
      "Hashtag & discoverability strategy",
      "Engagement & community management",
      "Content calendar planning",
      "Performance analytics & reporting",
      "Platform algorithm-aware content structure",
    ],
    technologies: [
      { name: "Instagram", icon: "instagram", description: "Profile and content optimization for visual discovery." },
      { name: "Facebook", icon: "facebook", description: "Page and community management." },
      { name: "Google Analytics", icon: "googleanalytics", description: "Cross-channel traffic and engagement tracking." },
      { name: "Design Tools", icon: "design", description: "Consistent, on-brand content production." },
    ],
    process: [
      { step: "01", title: "Profile audit", description: "Assess current profiles against platform best practices and brand consistency." },
      { step: "02", title: "Optimize & structure", description: "Rebuild bios, CTAs, and content pillars for each platform." },
      { step: "03", title: "Publish & engage", description: "Execute a consistent posting cadence with active community management." },
      { step: "04", title: "Measure & refine", description: "Track engagement and adjust strategy based on real performance." },
    ],
    benefits: [
      { title: "Higher profile conversion", description: "More visitors turn into followers and engaged community members." },
      { title: "Stronger brand consistency", description: "A unified presence across every platform your audience uses." },
      { title: "Better campaign performance", description: "Paid and organic efforts land on profiles built to convert." },
      { title: "Improved discoverability", description: "Structured content that performs better within platform algorithms." },
      { title: "Stronger audience relationships", description: "Consistent content and active engagement turn social reach into an audience that recognizes and trusts your brand." },
    ],
    useCases: [
      { title: "Brand launch or rebrand", description: "Establishing a consistent, optimized social presence from scratch." },
      { title: "Underperforming profiles", description: "Diagnosing and fixing profiles with weak engagement or follow rates." },
      { title: "Multi-platform consistency", description: "Aligning brand presence across several social channels." },
      { title: "Campaign preparation", description: "Optimizing profiles before launching paid social campaigns." },
    ],
    industriesServed: [
      { label: "FoodTech", slug: "foodtech" },
      { label: "Tours & Travel", slug: "tours-travel" },
      { label: "Gaming", slug: "gaming" },
      { label: "Media & Publishing", slug: "media" },
    ],
    faqs: [
      { question: "How is SMO different from social media marketing?", answer: "SMO focuses on optimizing profiles and content structure for organic discoverability and engagement — the foundation that makes broader social media marketing and paid campaigns perform better." },
      { question: "Which platforms do you work on?", answer: "We prioritize the platforms where your actual audience is active, rather than spreading effort thin across every platform by default." },
      { question: "Do you handle community management too?", answer: "Yes, ongoing engagement and response management is part of the service." },
      { question: "How do you measure success?", answer: "Engagement rate, follower growth quality, and how social traffic contributes to broader marketing goals — not just raw follower counts." },
    ],
    ctaTitle: "Turn your social profiles into a real acquisition channel",
    ctaDescription: "Tell us which platforms matter most to your audience — we'll optimize the foundation first.",
    seo: {
      title: "Social Media Optimization (SMO) Services",
      description: "Social media profile optimization and content strategy built to strengthen engagement and every other marketing channel.",
      keywords: ["social media optimization", "SMO services", "social profile optimization", "social media strategy agency"],
    },
  },
  {
    slug: "ppc",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    title: "Pay-Per-Click Advertising (PPC)",
    shortTitle: "PPC",
    tagline: "Paid traffic engineered for ROI",
    headline: "PPC campaigns built around measurable return, not just clicks",
    intro:
      "We run paid search and paid social campaigns engineered around cost-per-acquisition and return on ad spend — with landing pages, tracking, and bid strategy built to make every dollar accountable.",
    description:
      "Paid search and paid social advertising — campaign strategy, landing page alignment, conversion tracking, and ongoing optimization built for measurable ROI.",
    heroImageKey: "ppc",
    stats: [
      { value: 45, suffix: "+", label: "PPC accounts managed" },
      { value: 3.2, suffix: "×", label: "Avg. return on ad spend delivered" },
      { value: 30, suffix: "%", label: "Avg. cost-per-acquisition reduction" },
    ],
    overview: {
      title: "Campaigns accountable to revenue, not impressions",
      paragraphs: [
        "PPC is only as good as what happens after the click. We build campaigns with tight keyword and audience targeting, but we spend just as much attention on landing page alignment and conversion tracking — because a well-targeted ad sending traffic to a weak page still wastes budget.",
        "Every campaign is set up with clear tracking from click to conversion, so budget decisions are based on actual return, not platform-reported clicks.",
      ],
      heroImage: "/images/services/digital-marketing/ppc.png",
    },
    whyChooseUs: [
      { title: "ROI-first campaign structure", description: "Built around cost-per-acquisition and return, not just traffic volume.", icon: "trending" },
      { title: "Landing page alignment", description: "Ad messaging and destination pages built to match, not mismatch.", icon: "grid" },
      { title: "Accurate conversion tracking", description: "Full-funnel tracking so budget decisions rest on real data.", icon: "chart" },
      { title: "Continuous optimization", description: "Bid, audience, and creative testing run as an ongoing process.", icon: "check" },
      { title: "Audience & keyword targeting", description: "Focused targeting helps reach high-intent users while reducing wasted ad spend.", icon: "target", },
    ],
    features: [
      "Google Ads (Search, Display, Shopping) campaigns",
      "Paid social advertising (Meta, Instagram, LinkedIn)",
      "Keyword & audience targeting strategy",
      "Landing page conversion alignment",
      "Conversion tracking & attribution setup",
      "A/B testing (ads & landing pages)",
      "Bid strategy & budget optimization",
      "Transparent performance reporting",
    ],
    technologies: [
      { name: "Google Ads", icon: "googleads", description: "Search, display, and shopping campaign management." },
      { name: "Google Analytics", icon: "googleanalytics", description: "Conversion and funnel tracking." },
      { name: "Google Tag Manager", icon: "googletagmanager", description: "Precise event and conversion tracking implementation." },
      { name: "Facebook", icon: "facebook", description: "Meta Ads campaign management." },
    ],
    process: [
      { step: "01", title: "Strategy & tracking setup", description: "Define targets and implement accurate conversion tracking first." },
      { step: "02", title: "Campaign build", description: "Structure campaigns, targeting, and ad creative aligned to landing pages." },
      { step: "03", title: "Launch & monitor", description: "Launch with close monitoring in the critical early days." },
      { step: "04", title: "Optimize continuously", description: "Ongoing testing and bid optimization based on real conversion data." },
    ],
    benefits: [
      { title: "Measurable return", description: "Every dollar spent is tied to tracked, reportable outcomes." },
      { title: "Lower cost per acquisition", description: "Continuous optimization instead of a set-and-forget campaign." },
      { title: "Faster market feedback", description: "Paid channels validate messaging and offers quickly." },
      { title: "Aligned ad-to-page experience", description: "No wasted spend on mismatched landing pages." },
      { title: "Smarter budget allocation", description: "Campaign data continuously informs where budget should move to improve qualified conversions." },
    ],
    useCases: [
      { title: "Product & service launches", description: "Fast, measurable demand generation for new offerings." },
      { title: "E-commerce sales campaigns", description: "Shopping and remarketing campaigns tied to revenue." },
      { title: "Lead generation", description: "Cost-efficient lead flow for sales-driven businesses." },
      { title: "Account audits & takeovers", description: "Fixing underperforming existing ad accounts." },
    ],
    industriesServed: [
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Real Estate", slug: "real-estate" },
      { label: "FinTech", slug: "fintech" },
      { label: "Tours & Travel", slug: "tours-travel" },
    ],
    faqs: [
      { question: "What budget do we need to start?", answer: "It depends on your industry and goals — we'll recommend a starting budget based on realistic cost-per-click and conversion benchmarks for your space." },
      { question: "How is performance tracked and reported?", answer: "Through full-funnel conversion tracking from click to outcome, reported transparently — not just platform click and impression counts." },
      { question: "Do you also build the landing pages?", answer: "Yes, or we can optimize existing pages to align with campaign messaging for better conversion." },
      { question: "How quickly will we see results?", answer: "Paid campaigns can start driving traffic immediately; meaningful optimization typically shows within 4–6 weeks of data collection." },
    ],
    ctaTitle: "Make every ad dollar accountable to a real outcome",
    ctaDescription: "Tell us about your goals and current campaigns — we'll audit and build a plan tied to ROI.",
    seo: {
      title: "PPC Advertising Services",
      description: "Paid search and paid social advertising management — campaign strategy, tracking, and optimization built for measurable ROI.",
      keywords: ["PPC services", "Google Ads management", "paid social advertising", "PPC agency"],
    },
  },
  {
    slug: "social-media-marketing",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media Marketing",
    tagline: "Content and campaigns built to grow reach",
    headline: "Social media marketing that builds audience and drives action",
    intro:
      "We plan and run social media marketing programs — organic content, community growth, and paid social campaigns — built around consistent brand voice and measurable engagement, not just a content calendar.",
    description:
      "Full social media marketing management — content strategy, creative production, community management, and paid social campaigns tied to real business goals.",
    heroImageKey: "social-media-marketing",
    stats: [
      { value: 55, suffix: "+", label: "Brands managed on social" },
      { value: 90, suffix: "%", label: "Avg. engagement growth (6 months)" },
      { value: 8, suffix: "+", label: "Platforms our team actively runs campaigns on" },
    ],
    overview: {
      title: "A content and campaign engine, not just a posting schedule",
      paragraphs: [
        "Social media marketing works when content, community management, and paid amplification are planned together — not as three disconnected activities. We build a content strategy around your actual audience and business goals, produce the creative, manage the community, and layer in paid campaigns where they extend reach efficiently.",
        "Every program is tied to metrics that matter to the business — engaged reach, qualified traffic, and conversions — not just follower counts.",
      ],
      heroImage: "/images/services/digital-marketing/social-media.png",
    },
    whyChooseUs: [
      { title: "Strategy-led content", description: "Every post ties back to a clear business or audience goal.", icon: "trending" },
      { title: "Active community management", description: "Real engagement with your audience, not just scheduled posting.", icon: "message" },
      { title: "Consistent brand voice", description: "A recognizable tone and visual identity across every platform.", icon: "star" },
      { title: "Paid + organic working together", description: "Campaigns that amplify content already proven to perform.", icon: "check" },
      { title: "Creative built for each platform", description: "Graphics and short-form video adapted to how each platform's audience actually consumes content.", icon: "video" },
    ],
    features: [
      "Content strategy & editorial calendar",
      "Creative production (graphics, short-form video)",
      "Organic posting & scheduling",
      "Community management & engagement",
      "Paid social campaign management",
      "Influencer & partnership coordination",
      "Platform-specific content adaptation",
      "Monthly performance & growth reporting",
    ],
    technologies: [
      { name: "Instagram", icon: "instagram", description: "Content strategy and campaign execution." },
      { name: "Facebook", icon: "facebook", description: "Page management and paid campaigns." },
      { name: "Google Analytics", icon: "googleanalytics", description: "Tracking social-driven traffic and conversions." },
      { name: "Design Tools", icon: "design", description: "Creative production for consistent, on-brand content." },
    ],
    process: [
      { step: "01", title: "Audience & strategy definition", description: "Define target audience, platforms, and content pillars tied to goals." },
      { step: "02", title: "Content production", description: "Produce a consistent stream of on-brand creative content." },
      { step: "03", title: "Publish & engage", description: "Execute the calendar and actively manage community engagement." },
      { step: "04", title: "Amplify & report", description: "Layer in paid campaigns where useful and report on real growth." },
    ],
    benefits: [
      { title: "Consistent brand presence", description: "A recognizable voice and visual identity your audience learns to expect." },
      { title: "Compounding organic growth", description: "Strategy-led content builds audience rather than just filling a calendar." },
      { title: "Efficient paid amplification", description: "Ad spend directed at content already proven to resonate." },
      { title: "Clear business impact", description: "Reporting tied to traffic and conversions, not just vanity metrics." },
    ],
    useCases: [
      { title: "Brand awareness building", description: "Growing recognition and reach for a new or repositioning brand." },
      { title: "Community-driven products", description: "Businesses where an engaged audience directly drives growth." },
      { title: "Product & content promotion", description: "Ongoing amplification of launches, offers, and content." },
      { title: "Full-funnel social programs", description: "Organic and paid social working together toward measurable goals." },
      { title: "Stronger audience relationships", description: "Consistent content and active engagement turn social reach into an audience that recognizes and trusts your brand." },
    ],
    industriesServed: [
      { label: "FoodTech", slug: "foodtech" },
      { label: "Gaming", slug: "gaming" },
      { label: "Tours & Travel", slug: "tours-travel" },
      { label: "Media & Publishing", slug: "media" },
    ],
    faqs: [
      { question: "Which platforms should we focus on?", answer: "Wherever your actual audience spends time — we assess this rather than defaulting to running every platform equally." },
      { question: "Do you produce the content, or just manage posting?", answer: "We handle strategy, creative production, posting, and community management as one connected program." },
      { question: "How do you measure success beyond followers?", answer: "Engaged reach, click-through to your site, and conversions where trackable — follower count is a byproduct, not the goal." },
      { question: "Can you combine this with paid social campaigns?", answer: "Yes, organic and paid social are typically planned together for the best return on both." },
    ],
    ctaTitle: "Build a social presence that grows on purpose",
    ctaDescription: "Tell us about your brand and audience — we'll build a content and campaign plan tied to real goals.",
    seo: {
      title: "Social Media Marketing Services",
      description: "Full social media marketing management — content strategy, creative production, community management, and paid campaigns.",
      keywords: ["social media marketing services", "social media management agency", "content marketing social media", "paid social campaigns"],
    },
  },
];

// Maps the legacy 6-category slugs from `services` in lib/data.ts 
export const legacyServiceCategoryAnchor: Record<string, ServiceCategorySlug> = {
  "web-development": "web-development",
  ecommerce: "ecommerce",
  "mobile-apps": "mobile-application",
  "ui-ux-design": "web-design",
  "digital-marketing": "digital-marketing",
  "hosting-cloud": "hosting",
};

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(categorySlug: ServiceCategorySlug): ServiceDetail[] {
  return services.filter((service) => service.categorySlug === categorySlug);
}





