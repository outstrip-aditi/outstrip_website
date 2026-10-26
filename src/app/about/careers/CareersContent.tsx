"use client";

import { useState } from "react";
import {
    FiArrowRight,
    FiBriefcase,
    FiChevronDown,
    FiClock,
    FiUsers,
} from "react-icons/fi";

import { careers } from "@/lib/data";
import { PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";

const workModels = [
    {
        icon: FiBriefcase,
        title: "Full Time",
        description:
            "Hiring developers for a complete project that includes daily work reports and providing daily status of development.",
    },
    {
        icon: FiUsers,
        title: "Part Time",
        description:
            "Hiring a developer for 4 hours, best for upgrades and web design with daily work reports of development.",
    },
    {
        icon: FiClock,
        title: "Hourly",
        description:
            "Customize the number of hours your enterprise requires and the services that you would like to hire for.",
    },
];

export default function CareersContent() {
    const [openJob, setOpenJob] = useState<string | null>(null);

    const toggleJob = (jobId: string) => {
        setOpenJob((current) => (current === jobId ? null : jobId));
    };

    return (
        <PageShell>
            <section className="relative overflow-hidden border-t border-border bg-surface-soft pb-10 pt-24 md:pb-10 md:pt-34">
                <div className="container-wide relative">
                    <Reveal>
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mb-5 flex items-center justify-center gap-3">
                                <span className="h-px w-10 bg-accent" />
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                                    We are hiring heroes
                                </span>
                                <span className="h-px w-10 bg-accent" />
                            </div>

                            <h2 className="font-display text-xl font-bold leading-[0.98] tracking-[-0.05em] text-ink sm:text-3xl md:text-4xl">
                                Find the way you want to
                                <span className="block text-gradient">
                                    work with us.
                                </span>
                            </h2>

                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">
                                Whether you want a full-time role, flexible hours, or a focused
                                engagement, there&apos;s a place for your skills at OUTSTRIP.
                            </p>
                        </div>
                    </Reveal>

                    <StaggerChildren className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
                        {workModels.map((model, index) => {
                            const Icon = model.icon;

                            return (
                                <Reveal key={model.title} delay={index * 0.08}>
                                    <article
                                        data-stagger-item
                                        className="group relative h-full overflow-hidden border border-border bg-surface p-5 text-center shadow-[0_20px_60px_-35px_rgba(7,17,31,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_30px_70px_-30px_rgba(13,159,138,0.25)]"
                                    >
                                        <span className="absolute right-5 top-5 text-[10px] font-bold tracking-[0.2em] text-ink/15">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">
                                            {model.title}
                                        </h3>

                                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">
                                            {model.description}
                                        </p>

                                        <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-gradient-to-r from-accent-deep via-accent to-accent-bright transition-all duration-700 group-hover:w-full" />
                                    </article>
                                </Reveal>
                            );
                        })}
                    </StaggerChildren>
                </div>
            </section>

            {/* CURRENT OPPORTUNITIES */}
            <section
                id="opportunities"
                className="section-pad border-t border-border py-18 md:py-20"
            >
                <div className="container-wide">
                    <Reveal>
                        <SectionHeading
                            eyebrow="Open roles"
                            title="Current opportunities"
                            description="Find a role that matches your skills and let's build something exceptional together."
                        />
                    </Reveal>

                    {careers?.length > 0 ? (
                        <StaggerChildren className="mt-10 space-y-4">
                            {careers.map((job, index) => {
                                const isOpen = openJob === job.id;

                                return (
                                    <Reveal key={job.id} delay={index * 0.05}>
                                        <article
                                            data-stagger-item
                                            className={`overflow-hidden border border-border bg-surface transition-all duration-500 ${isOpen
                                                ? "border-accent/30 shadow-[0_25px_70px_-30px_rgba(13,159,138,0.28)]"
                                                : "hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_25px_30px_-30px_rgba(13,159,138,0.25)]"
                                                }`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => toggleJob(job.id)}
                                                aria-expanded={isOpen}
                                                className="flex w-full cursor-pointer items-center justify-between gap-5 p-6 text-left md:p-8"
                                            >
                                                <div className="min-w-0 flex-1">
                                                    {/* META */}
                                                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                                                        <span>{job.department}</span>
                                                        <span>·</span>
                                                        <span>{job.type}</span>
                                                        <span>·</span>
                                                        <span>{job.location}</span>
                                                    </div>

                                                    <div className="mt-3 flex flex-wrap items-center gap-3">
                                                        <h3 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                                                            {job.title}
                                                        </h3>

                                                        {job.yearsExperience && (
                                                            <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-accent-deep">
                                                                {job.yearsExperience}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {!isOpen && (
                                                        <p className="max-w-3xl text-sm leading-6 text-muted">
                                                            {job.summary}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="flex gap-5 items-center">
                                                    <MagneticButton
                                                        href={`mailto:info@outstripinfotech.com?subject=Application%20—%20${encodeURIComponent(
                                                            job.title
                                                        )}`}
                                                        variant="primary"
                                                        size="sm"
                                                    >
                                                        Apply
                                                        <FiArrowRight className="h-4 w-4" />
                                                    </MagneticButton>

                                                    <span
                                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                                                            ? "border-accent bg-accent text-white"
                                                            : "border-border bg-surface-soft text-ink hover:border-accent hover:bg-accent hover:text-white"
                                                            }`}
                                                    >
                                                        <FiChevronDown className={`h-4 w-4 transition-transform duration-500 ${isOpen ? "rotate-180" : "" }`} />
                                                    </span>
                                                </div>
                                            </button>

                                            {/*  EXPANDED CONTENT  */}
                                            <div
                                                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen
                                                    ? "grid-rows-[1fr]"
                                                    : "grid-rows-[0fr]"
                                                    }`}
                                            >
                                                <div className="min-h-0 overflow-hidden">
                                                    <div className="border-t border-border bg-white px-6 py-7 md:px-8 md:py-9">
                                                        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
                                                            <div>
                                                                <div>
                                                                    <div className="flex items-center gap-3">
                                                                        <span className="h-px w-8 bg-accent" />
                                                                        <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-deep">
                                                                            Job Summary
                                                                        </h4>
                                                                    </div>

                                                                    <p className="mt-2 text-sm leading-5 text-muted">
                                                                        {job.summary}
                                                                    </p>
                                                                </div>

                                                                {/* KEY RESPONSIBILITIES */}
                                                                <div className="mt-8">
                                                                    <div className="flex items-center gap-3">
                                                                        <span className="h-px w-8 bg-accent" />
                                                                        <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-deep">
                                                                            Key Responsibilities
                                                                        </h4>
                                                                    </div>

                                                                    <ul className="mt-4 space-y-3">
                                                                        {job.responsibilities?.map(
                                                                            (responsibility: string) => (
                                                                                <li
                                                                                    key={responsibility}
                                                                                    className="flex items-start gap-3 text-sm leading-5 text-muted"
                                                                                >
                                                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                                                                    <span>{responsibility}</span>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                {/* REQUIREMENTS */}
                                                                <div>
                                                                    <div className="flex items-center gap-3">
                                                                        <span className="h-px w-8 bg-accent" />
                                                                        <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent-deep">
                                                                            Requirements
                                                                        </h4>
                                                                    </div>

                                                                    <ul className="mt-4 space-y-3">
                                                                        {job.requirements?.map(
                                                                            (requirement: string) => (
                                                                                <li
                                                                                    key={requirement}
                                                                                    className="flex items-start gap-3 text-sm leading-5 text-muted"
                                                                                >
                                                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                                                                    <span>{requirement}</span>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>

                                                                <div className="mt-8">
                                                                    <div className="flex items-center gap-4">
                                                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
                                                                            <FiBriefcase className="h-6 w-6" />
                                                                        </div>

                                                                        <div>
                                                                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                                                                                Years Experience
                                                                            </p>

                                                                            <p className="mt-1 font-display text-lg font-semibold text-ink">
                                                                                {job.yearsExperience || "Not specified"}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* APPLY */}
                                                                <div className="mt-7">
                                                                    <MagneticButton
                                                                        href={`mailto:info@outstripinfotech.com?subject=Application%20—%20${encodeURIComponent(
                                                                            job.title
                                                                        )}`}
                                                                        variant="primary"
                                                                        size="sm"
                                                                    >
                                                                        Apply for this role
                                                                        <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                                    </MagneticButton>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Reveal>
                                );
                            })}
                        </StaggerChildren>
                    ) : (
                        <Reveal>
                            <div className="mt-10 rounded-2xl border border-border bg-surface px-6 py-12 text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                                    <FiBriefcase className="h-5 w-5" />
                                </div>

                                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                                    No open positions right now
                                </h3>

                                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
                                    We&apos;re always interested in meeting talented people.
                                    Send us your résumé and we&apos;ll keep you in mind for
                                    future opportunities.
                                </p>

                                <div className="mt-6">
                                    <MagneticButton
                                        href="mailto:info@outstripinfotech.com?subject=Career%20Inquiry"
                                        variant="primary"
                                    >
                                        Send your résumé
                                        <FiArrowRight className="h-4 w-4" />
                                    </MagneticButton>
                                </div>
                            </div>
                        </Reveal>
                    )}
                </div>
            </section>
        </PageShell>
    );
}