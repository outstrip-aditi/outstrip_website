import type { TechCategory } from "./industries";
import type { ServicePoint, ServiceProcessStep, ServiceFaq } from "./services";

export type DeveloperCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  experience: string;
  skills: string[];
  icon: string;
};

export const developerCategories: DeveloperCategory[] = [
  {
    slug: "frontend",
    title: "Frontend Developers",
    tagline: "Interfaces that feel instant",
    description:
      "Engineers who turn design systems into fast, accessible, pixel-accurate interfaces at scale.",
    experience: "3–8 yrs experience",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: "monitor",
  },
  {
    slug: "backend",
    title: "Backend Developers",
    tagline: "APIs and systems that hold up",
    description:
      "Server-side engineers building secure, well-modeled APIs and data layers that scale with traffic.",
    experience: "3–10 yrs experience",
    skills: ["Node.js", "Laravel", "PHP", "PostgreSQL"],
    icon: "layers",
  },
  {
    slug: "full-stack",
    title: "Full-Stack Developers",
    tagline: "End-to-end product ownership",
    description:
      "Generalists who move fluidly across the stack — ideal for lean teams shipping fast.",
    experience: "4–10 yrs experience",
    skills: ["Next.js", "Node.js", "GraphQL", "AWS"],
    icon: "grid",
  },
  {
    slug: "mobile",
    title: "Mobile App Developers",
    tagline: "Native-feeling apps, cross-platform speed",
    description:
      "iOS, Android, and cross-platform engineers building apps users open every day.",
    experience: "3–8 yrs experience",
    skills: ["React Native", "Flutter", "Swift", "Kotlin"],
    icon: "phone",
  },
  {
    slug: "ui-ux",
    title: "UI/UX Designers",
    tagline: "Research-led, conversion-focused design",
    description:
      "Product designers who validate decisions with research and ship systems, not one-off screens.",
    experience: "3–7 yrs experience",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    icon: "star",
  },
  {
    slug: "qa-devops",
    title: "QA & DevOps Engineers",
    tagline: "Ship fast without breaking things",
    description:
      "Test automation and infrastructure engineers keeping releases fast, stable, and observable.",
    experience: "3–9 yrs experience",
    skills: ["Cypress", "Docker", "Kubernetes", "GitHub Actions"],
    icon: "shield",
  },
];

export const hireTechStack: TechCategory[] = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { name: "React", description: "Component-driven UI for dashboards and storefronts." },
      { name: "Next.js", description: "Server-rendered, SEO-ready React applications." },
      { name: "TypeScript", description: "Type-safe code across every layer of the app." },
      { name: "Tailwind CSS", description: "Consistent, responsive styling at speed." },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", description: "Event-driven APIs and real-time services." },
      { name: "Laravel", description: "Rapid, secure PHP application development." },
      { name: "Python", description: "Data-heavy services, scripting, and automation." },
      { name: "GraphQL", description: "Flexible, typed data fetching for complex UIs." },
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    items: [
      { name: "React Native", description: "Shared codebase across iOS and Android." },
      { name: "Flutter", description: "High-performance, pixel-consistent cross-platform apps." },
      { name: "Swift", description: "Native iOS apps with full platform capability." },
      { name: "Kotlin", description: "Native Android apps built the modern way." },
    ],
  },
  {
    key: "database-cloud",
    label: "Database & Cloud",
    items: [
      { name: "PostgreSQL", description: "Reliable, relational data at any scale." },
      { name: "MongoDB", description: "Flexible document storage for fast-moving products." },
      { name: "AWS", description: "Production infrastructure that scales with demand." },
      { name: "Docker", description: "Consistent environments from laptop to production." },
    ],
  },
  {
    key: "quality-tools",
    label: "Quality & Tools",
    items: [
      { name: "Jest", description: "Unit and integration test coverage that matters." },
      { name: "Cypress", description: "End-to-end confidence before every release." },
      { name: "GitHub Actions", description: "Automated CI/CD from commit to deploy." },
      { name: "Postman", description: "API contracts documented and verified." },
    ],
  },
];

export const whyHireUs: ServicePoint[] = [
  {
    title: "Vetted for real production experience",
    description:
      "Every engineer clears a technical screen, a live pairing session, and a communication check before ever reaching you — not just a resume review.",
  },
  {
    title: "Start in days, not months",
    description: "Skip the recruiting cycle and get a shortlist within days of sharing your requirements.",
  },
  {
    title: "Embedded in your workflow",
    description: "Your hires work your hours, join your standups, and report directly into your roadmap.",
  },
  {
    title: "Flexible engagement models",
    description: "Scale a dedicated team up or down, or bring on one senior engineer — you choose the shape.",
  },
  {
    title: "14+ years shipping software",
    description: "Backed by an engineering org that has delivered 400+ production products since 2007.",
  },
];

export const hiringProcess: ServiceProcessStep[] = [
  {
    step: "01",
    title: "Share your requirements",
    description: "Tell us the role, stack, and seniority you need — a 15-minute call is enough to start.",
  },
  {
    step: "02",
    title: "Get a curated shortlist",
    description: "Receive 2–3 pre-vetted profiles matched to your stack within days, not weeks.",
  },
  {
    step: "03",
    title: "Interview & select",
    description: "Talk to your shortlist directly and choose the engineer who fits your team best.",
  },
  {
    step: "04",
    title: "Onboard & start building",
    description: "Your developer joins your tools and standups, ready to ship inside the first week.",
  },
];

export type DeveloperProfile = {
  initials: string;
  role: string;
  level: string;
  stack: string[];
  highlight: string;
  availability: string;
};

export const developerShowcase: DeveloperProfile[] = [
  {
    initials: "RK",
    role: "Senior Frontend Developer",
    level: "7 yrs experience",
    stack: ["React", "Next.js", "TypeScript"],
    highlight: "Led the rebuild of a multi-currency storefront checkout flow.",
    availability: "Available in 1 week",
  },
  {
    initials: "AS",
    role: "Backend Engineer",
    level: "6 yrs experience",
    stack: ["Node.js", "PostgreSQL", "AWS"],
    highlight: "Designed the API layer behind a healthcare scheduling platform.",
    availability: "Available in 2 weeks",
  },
  {
    initials: "MP",
    role: "Full-Stack Developer",
    level: "8 yrs experience",
    stack: ["Next.js", "GraphQL", "Docker"],
    highlight: "Owns delivery end-to-end for two long-running client roadmaps.",
    availability: "Available in 1 week",
  },
  {
    initials: "TJ",
    role: "Mobile App Developer",
    level: "5 yrs experience",
    stack: ["React Native", "Kotlin", "Swift"],
    highlight: "Shipped a live-tracking logistics app used by 3 fleet operators.",
    availability: "Available in 2 weeks",
  },
  {
    initials: "NV",
    role: "UI/UX Designer",
    level: "6 yrs experience",
    stack: ["Figma", "Design Systems", "Prototyping"],
    highlight: "Built the design system now used across every OUTSTRIP client build.",
    availability: "Available in 1 week",
  },
  {
    initials: "SD",
    role: "DevOps Engineer",
    level: "6 yrs experience",
    stack: ["Docker", "Kubernetes", "GitHub Actions"],
    highlight: "Cut deployment time from 40 minutes to under 5 across three products.",
    availability: "Available in 3 weeks",
  },
];

export const hireFaqs: ServiceFaq[] = [
  {
    question: "How fast can I get a developer started?",
    answer:
      "Most clients receive a curated shortlist within 3–5 business days of sharing requirements, and can have an engineer onboarded within a week or two of selecting a candidate.",
  },
  {
    question: "How are developers vetted?",
    answer:
      "Every engineer goes through a technical screen, a live pairing exercise on real code, and a communication and reliability check before being shortlisted to clients.",
  },
  {
    question: "Can I switch or scale the team later?",
    answer:
      "Yes. Engagement models are built to flex — add engineers as scope grows, or scale down between milestones, without renegotiating a new contract.",
  },
  {
    question: "Do developers work in my time zone?",
    answer:
      "Yes, dedicated team and staff augmentation engagements are staffed to overlap with your working hours and join your standups directly.",
  },
  {
    question: "What does it cost to hire a developer?",
    answer:
      "Pricing depends on the engagement model and seniority — dedicated teams and hourly staff augmentation are billed monthly, while fixed-scope builds are quoted per project. Talk to us for a rate card.",
  },
  {
    question: "What happens if a developer isn't the right fit?",
    answer:
      "We manage a replacement at no extra cost during the trial window, so you're never locked into a mismatch.",
  },
];
