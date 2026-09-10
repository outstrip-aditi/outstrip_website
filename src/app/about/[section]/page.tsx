import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    FiArrowRight,
    FiArrowUpRight,
} from "react-icons/fi";

import {
    industries,
    stats,
    team,
} from "@/lib/data";

import {
    images,
    teamPhotos,
} from "@/lib/images";

import {
    PageShell,
} from "@/components/layout/PageHero";

import {
    Reveal,
} from "@/components/ui/Reveal";

import {
    SectionHeading,
} from "@/components/ui/SectionHeading";

import {
    StaggerChildren,
} from "@/components/ui/StaggerChildren";

import {
    AnimatedCounter,
} from "@/components/ui/AnimatedCounter";

import {
    MagneticButton,
} from "@/components/ui/MagneticButton";

import {
    aboutSections,
    missionPoints,
    storyPoints,
    culturePoints,
} from "@/lib/aboutData";
import { IndustryExpertiseContent } from "@/components/about/IndustryExpertiseContent";

type Props = {
    params: Promise<{
        section: string;
    }>;
};

const pageContent: Record<
    string,
    {
        eyebrow: string;
        title: string;
        description: string;
        image: {
            src: string;
            alt: string;
        };
    }
> = {
    mission: {
        eyebrow: "Our Mission",
        title: "Make technology feel simpler.",
        description:
            "We turn complex business requirements into digital products that are clear, useful, scalable, and built around real people.",
        image: images.missionVision,
    },

    story: {
        eyebrow: "Our Story",
        title:
            "Built through experience, curiosity, and constant improvement.",
        description:
            "Our journey has been shaped by ambitious ideas, challenging projects, and a commitment to dependable digital products.",
        image: images.ourStory,
    },

    "industry-expertise": {
        eyebrow: "Industry Expertise",
        title: "Technology shaped around real businesses.",
        description:
            "We combine technical capability with an understanding of how businesses actually operate.",
        image: images.aboutUs,
    },

    culture: {
        eyebrow: "Our Culture",
        title: "Curious people doing meaningful work.",
        description:
            "Our culture is built around ownership, learning, collaboration, and a shared commitment to better work.",
        image: images.ourTeam,
    },

    community: {
        eyebrow: "Community",
        title: "We are powered by tech minds.",
        description:
            "Developers, designers, strategists, and technology enthusiasts learning, sharing, and building together.",
        image: images.missionVision,
    },

    work: {
        eyebrow: "Our Work",
        title:
            "Digital products built for measurable impact.",
        description:
            "We design and engineer websites, applications, software platforms, and digital experiences that help businesses move forward.",
        image: images.aboutUs,
    },

    "top-developers": {
        eyebrow: "Work with Top Developers",
        title:
            "Bring your next digital idea to life.",
        description:
            "Work with a multidisciplinary team of developers, designers, strategists, and technology specialists.",
        image: images.ourTeam,
    },
};

export async function generateStaticParams() {
    return aboutSections.map((section) => ({
        section: section.slug,
    }));
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { section } = await params;

    const content = pageContent[section];

    return {
        title: content?.eyebrow ?? "About",
        description:
            content?.description ??
            "Learn more about OUTSTRIP.",
    };
}

export default async function AboutSectionPage({
    params,
}: Props) {
    const { section } = await params;

    const content = pageContent[section];

    if (!content) {
        return null;
    }

    const currentIndex = aboutSections.findIndex(
        (item) => item.slug === section,
    );

    const previous =
        currentIndex > 0
            ? aboutSections[currentIndex - 1]
            : null;

    const next =
        currentIndex < aboutSections.length - 1
            ? aboutSections[currentIndex + 1]
            : null;

    return (
        <PageShell>

            <section className="section-pad relative overflow-hidden bg-ink py-24 text-white md:py-32 lg:py-40">
                <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:70px_70px]" />

                <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-accent/[0.1] blur-[140px]" />

                <div className="container-wide relative z-10">
                    <Reveal>
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-accent-bright"
                        >
                            <FiArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1" />

                            Back to about
                        </Link>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="mt-10 max-w-5xl">
                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent-bright">
                                {content.eyebrow}
                            </p>

                            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[82px]">
                                {content.title}
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
                                {content.description}
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>


            <section className="section-pad py-20 md:py-28">
                <div className="container-wide">
                    <Reveal>
                        <div className="group relative aspect-[21/9] overflow-hidden bg-surface">
                            <Image
                                src={content.image.src}
                                alt={content.image.alt}
                                fill
                                sizes="100vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

                            <div className="absolute bottom-7 left-7 md:bottom-10 md:left-10">
                                <p className="font-display text-2xl text-white md:text-4xl">
                                    {content.eyebrow}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>


            {section === "mission" && (
                <section className="section-pad pb-24 md:pb-32">
                    <div className="container-wide">
                        <Reveal>
                            <SectionHeading
                                eyebrow="How we work"
                                title="Technology should remove friction, not create it."
                                description="Our approach is based on understanding first, designing with purpose, engineering carefully, and delivering with ownership."
                            />
                        </Reveal>

                        <StaggerChildren className="mt-14 grid gap-x-10 sm:grid-cols-2">
                            {missionPoints.map((item, index) => (
                                <article
                                    key={item.title}
                                    data-stagger-item
                                    className="group border-t border-border py-8 transition-transform duration-500 hover:-translate-y-1"
                                >
                                    <span className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </StaggerChildren>
                    </div>
                </section>
            )}

            {section === "story" && (
                <section className="section-pad pb-24 md:pb-32">
                    <div className="container-wide">
                        <Reveal>
                            <SectionHeading
                                eyebrow="The journey"
                                title="Every stage has shaped who we are today."
                                description="Our story is a continuous process of learning, building, improving, and creating stronger partnerships."
                            />
                        </Reveal>

                        <div className="relative mt-14">
                            <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-border md:block" />

                            <div className="space-y-10">
                                {storyPoints.map((item, index) => (
                                    <Reveal
                                        key={item.title}
                                        delay={index * 0.06}
                                    >
                                        <div className="grid gap-5 md:grid-cols-[70px_1fr]">
                                            <div className="relative z-10 flex h-8 w-8 items-center justify-center bg-accent text-[10px] font-bold text-ink">
                                                {item.year}
                                            </div>

                                            <div className="border-b border-border pb-8">
                                                <h3 className="font-display text-2xl font-semibold text-ink">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}


            {section === "industry-expertise" && (
                <IndustryExpertiseContent />
            )}

            {section === "culture" && (
                <section className="section-pad pb-24 md:pb-32">
                    <div className="container-wide">
                        <Reveal>
                            <SectionHeading
                                eyebrow="Inside our culture"
                                title="The environment behind the work."
                                description="Great products come from teams that trust each other, stay curious, and care about what they create."
                            />
                        </Reveal>

                        <StaggerChildren className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {culturePoints.map((item, index) => (
                                <article
                                    key={item.title}
                                    data-stagger-item
                                    className="group border-t border-border pt-7 transition-transform duration-500 hover:-translate-y-2"
                                >
                                    <span className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-7 font-display text-xl font-semibold text-ink">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-muted">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </StaggerChildren>
                    </div>
                </section>
            )}


            {section === "community" && (
                <section className="section-pad pb-24 md:pb-32">
                    <div className="container-wide">
                        <Reveal>
                            <div className="max-w-4xl">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-deep">
                                    Tech minds
                                </p>

                                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
                                    Knowledge becomes more powerful when it is shared.
                                </h2>

                                <p className="mt-6 text-base leading-8 text-muted">
                                    Our community brings together people who enjoy exploring
                                    technology, solving problems, and helping each other grow.
                                </p>
                            </div>
                        </Reveal>

                        <div className="mt-14 grid gap-3 sm:grid-cols-2">
                            {[
                                "Developers learning new technologies",
                                "Designers solving experience problems",
                                "Strategists connecting technology with business",
                                "Teams sharing knowledge and ideas",
                            ].map((item, index) => (
                                <Reveal
                                    key={item}
                                    delay={index * 0.05}
                                >
                                    <div className="group flex items-center gap-5 border-t border-border py-6 transition-transform duration-300 hover:translate-x-2">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-ink text-xs font-semibold text-white">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-sm font-medium text-ink">
                                            {item}
                                        </span>

                                        <FiArrowRight className="ml-auto h-4 w-4 text-muted transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            {section === "work" && (
                <section className="section-pad pb-24 md:pb-32">
                    <div className="container-wide">
                        <Reveal>
                            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                                <SectionHeading
                                    eyebrow="Our Work"
                                    title="From ideas to dependable digital products."
                                    description="Our work spans product strategy, UX, engineering, websites, mobile applications, custom software, and platforms."
                                />

                                <MagneticButton
                                    href="/projects"
                                    variant="secondary"
                                    size="sm"
                                >
                                    View projects
                                    <FiArrowUpRight className="h-4 w-4" />
                                </MagneticButton>
                            </div>
                        </Reveal>

                        <div className="mt-14 grid gap-4 md:grid-cols-2">
                            {[
                                "Web & digital products",
                                "Mobile applications",
                                "Custom software",
                                "E-commerce platforms",
                            ].map((item, index) => (
                                <Reveal
                                    key={item}
                                    delay={index * 0.06}
                                >
                                    <Link
                                        href="/projects"
                                        className="group flex min-h-[190px] items-end justify-between bg-surface-soft p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-ink"
                                    >
                                        <div>
                                            <span className="text-[10px] tracking-[0.2em] text-accent">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <h3 className="mt-5 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-white">
                                                {item}
                                            </h3>
                                        </div>

                                        <FiArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-accent-bright" />
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            {section === "top-developers" && (
                <section className="section-pad pb-24 md:pb-32">
                    <div className="container-wide">
                        <Reveal>
                            <div className="max-w-4xl">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-deep">
                                    Work with Top Developers
                                </p>

                                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
                                    Bring your challenge.
                                    <br />

                                    <span className="text-gradient">
                                        We&apos;ll bring the right team.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                                    Whether you are starting something new, improving an existing
                                    product, or scaling a platform, our multidisciplinary team can
                                    help you move forward.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-3">
                                    <MagneticButton
                                        href="/contact"
                                        variant="primary"
                                        size="lg"
                                    >
                                        Setup a call with us
                                        <FiArrowUpRight className="h-4 w-4" />
                                    </MagneticButton>

                                    <MagneticButton
                                        href="/about/team"
                                        variant="secondary"
                                        size="lg"
                                    >
                                        Meet our developers
                                    </MagneticButton>
                                </div>
                            </div>
                        </Reveal>

                        <StaggerChildren className="mt-16 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                            {team.slice(0, 6).map((member, index) => {
                                const photo =
                                    teamPhotos[index % teamPhotos.length];

                                return (
                                    <article
                                        key={member.name}
                                        data-stagger-item
                                        className="group"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={photo.src}
                                                alt={`${member.name} — ${member.role}`}
                                                fill
                                                sizes="(min-width: 1024px) 33vw, 100vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="border-b border-border py-5">
                                            <h3 className="font-display text-lg font-semibold text-ink">
                                                {member.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-muted">
                                                {member.role}
                                            </p>
                                        </div>
                                    </article>
                                );
                            })}
                        </StaggerChildren>
                    </div>
                </section>
            )}


            <section className="section-pad bg-ink py-20 text-white md:py-24">
                <div className="container-wide">
                    <Reveal>
                        <SectionHeading
                            light
                            eyebrow="Our impact"
                            title="Built on experience."
                        />
                    </Reveal>

                    <div className="mt-12 grid grid-cols-2 border-l border-white/10 md:grid-cols-4">
                        {stats.slice(0, 4).map((stat, index) => (
                            <Reveal key={stat.label}>
                                <div className="border-b border-r border-white/10 px-6 py-7 md:border-b-0">
                                    <span className="text-[10px] tracking-[0.2em] text-accent-bright/60">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="mt-5 font-display text-4xl font-semibold">
                                        <AnimatedCounter
                                            value={stat.value}
                                            suffix={stat.suffix}
                                        />
                                    </p>

                                    <p className="mt-2 text-xs text-white/45">
                                        {stat.label}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-pad py-16 md:py-20">
                <div className="container-wide">
                    <div className="grid gap-8 md:grid-cols-2">
                        {previous ? (
                            <Link
                                href={`/about/${previous.slug}`}
                                className="group border-t border-border py-6"
                            >
                                <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
                                    Previous
                                </span>

                                <div className="mt-3 flex items-center justify-between">
                                    <span className="font-display text-xl text-ink">
                                        {previous.eyebrow}
                                    </span>

                                    <FiArrowRight className="h-4 w-4 rotate-180 text-muted transition-transform group-hover:-translate-x-1" />
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}

                        {next && (
                            <Link
                                href={`/about/${next.slug}`}
                                className="group border-t border-border py-6 text-right"
                            >
                                <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
                                    Next
                                </span>

                                <div className="mt-3 flex items-center justify-end gap-5">
                                    <span className="font-display text-xl text-ink">
                                        {next.eyebrow}
                                    </span>

                                    <FiArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            <section className="section-pad bg-surface-soft py-20 md:py-28">
                <div className="container-wide">
                    <Reveal>
                        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-deep">
                                    Let&apos;s work together
                                </p>

                                <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-ink md:text-5xl">
                                    Have a challenge worth solving?
                                </h2>
                            </div>

                            <MagneticButton
                                href="/contact"
                                variant="primary"
                                size="lg"
                            >
                                Setup a call with us
                                <FiArrowUpRight className="h-4 w-4" />
                            </MagneticButton>
                        </div>
                    </Reveal>
                </div>
            </section>
        </PageShell>
    );
}