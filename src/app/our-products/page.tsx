import type { Metadata } from "next";
import {
    FiCloud,
    FiShield,
    FiFolder,
    FiRefreshCw,
    FiLock,
    FiUsers,
} from "react-icons/fi";
import { siteConfig } from "@/lib/data";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProductShowcase } from "@/components/products/ProductShowcase";

export const metadata: Metadata = {
    title: "Our Products",
    description:
        "OUTSTRIP's suite of software products — Accounting Software, Office Management, DSC Signature Tool, and GST Software — built for accounting and compliance teams.",
    alternates: { canonical: `${siteConfig.url}/our-products` },
};

const features = [
    {
        icon: FiCloud,
        title: "Cloud-based access",
        description: "Work from anywhere — every product runs in the browser, no local installs required.",
    },
    {
        icon: FiShield,
        title: "Compliance-first design",
        description: "Built around real GST and statutory filing workflows, not generic form builders.",
    },
    {
        icon: FiFolder,
        title: "Centralized records",
        description: "Client data, filings, and documents kept organized in one accessible place.",
    },
    {
        icon: FiLock,
        title: "Secure by default",
        description: "Authenticated access and DSC-based signing keep sensitive filings protected.",
    },
    {
        icon: FiRefreshCw,
        title: "Real-time updates",
        description: "Changes reflect instantly across your team, with nothing to manually sync.",
    },
    {
        icon: FiUsers,
        title: "Built for teams",
        description: "Designed for accounting firms and offices managing many clients at once.",
    },
];

const steps = [
    {
        step: "01",
        title: "Pick your product",
        description: "Choose the tool that matches your workflow — accounting, office management, GST, or DSC signing.",
    },
    {
        step: "02",
        title: "Sign in securely",
        description: "Log in to your dashboard and pick up where your team left off, from any device.",
    },
    {
        step: "03",
        title: "Manage & stay compliant",
        description: "Handle filings, records, and approvals with confidence — backed by a system built for compliance.",
    },
];

export default function OurProductsPage() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Our Products"
                title="Software that keeps accounting & compliance work moving"
                description="OUTSTRIP builds and maintains a focused suite of products for finance, compliance, and office operations — live tools, used every day, not concepts on a slide."
            >
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <MagneticButton href="#products">Explore products</MagneticButton>
                    <MagneticButton href="/contact" variant="secondary">
                        Talk to us
                    </MagneticButton>
                </div>
            </PageHero>

            {/* PRODUCT SHOWCASE */}
            <section
                id="products"
                className="scroll-mt-28 section-pad py-16 md:py-20"
            >
                <div className="container-wide">
                    <Reveal>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 inline-flex items-center gap-2">
                                <span className="h-px w-8 bg-accent/50" />

                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
                                    Our Products
                                </span>
                                <span className="h-px w-8 bg-accent/50" />
                            </div>

                            <h2 className="font-display max-w-xl text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">
                                Products built to simplify
                                <span className="text-accent-deep"> everyday work</span>
                            </h2>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="mx-auto mt-12 max-w-6xl">
                            <ProductShowcase />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* KEY FEATURES */}
            <section className="section-pad border-t border-border py-16 md:py-20">
                <div className="container-wide">
                    <Reveal>
                        <SectionHeading
                            eyebrow="Key features"
                            title="What every OUTSTRIP product shares"
                            description="A consistent foundation across the suite, so switching between tools never feels like switching platforms."
                        />
                    </Reveal>

                    <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                data-stagger-item
                                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_50px_-28px_rgba(7,17,31,0.35)]"
                            >
                                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.07] text-accent-deep transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/[0.12]">
                                    <feature.icon className="h-5 w-5" strokeWidth={1.5} />
                                </span>
                                <h3 className="font-display mt-4 text-lg font-semibold text-ink">{feature.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                            </div>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="section-pad relative overflow-hidden border-t border-white/10 bg-ink py-18 text-white md:py-20">
                <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/8 blur-[120px]" />
                <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

                <div className="container-wide relative">
                    <Reveal>
                        <SectionHeading
                            light
                            eyebrow="How it works"
                            title="From sign-in to filed, in three steps"
                            description="Every product in the suite follows the same simple path."
                        />
                    </Reveal>

                    <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-3">
                        {steps.map((item) => (
                            <div
                                key={item.step}
                                data-stagger-item
                                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
                            >
                                <span className="font-display text-3xl text-accent-bright">{item.step}</span>
                                <h3 className="font-display mt-4 text-lg font-semibold text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
                            </div>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            <ProcessSection
                title="Ready to see the products in action?"
                description="Sign in to any product above, or talk to us about rolling the full suite out across your team."
                buttonText="Contact us"
                buttonHref="/contact"
            />
        </PageShell>
    );
}
