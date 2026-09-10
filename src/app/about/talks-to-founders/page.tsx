import type { Metadata } from "next";
import Image from "next/image";
import {
  FiArrowRight,
  FiCheck,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";
import { PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SelectInput } from "@/components/ui/SelectInput";

const projectTypeOptions = [
  { label: "Web Development", value: "web" },
  { label: "Mobile App", value: "mobile" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "SaaS Product", value: "saas" },
  { label: "UI/UX Design", value: "uiux" },
  { label: "Other", value: "other" },
];

export const metadata: Metadata = {
  title: "Talk to Founders",
  description: `Talk directly with the founders of ${siteConfig.name} about your project, idea, or business challenge.`,
};

const founders = [
  {
    name: "Gaurav Jain",
    role: "Co-Founder & Solution Architect",
    designation: "Full-Stack Web Developer · Software Consultant",
    experience: "10+ Years Experience",
    image: images.ourStory,
    description:
      "Leads technology strategy and product development, helping businesses turn complex requirements into scalable, maintainable software solutions.",
    skills: [
      "Laravel",
      "Node.js",
      "ReactJS",
      "MySQL",
      "MongoDB",
      "Solution Architecture",
    ],
    whatsapp: "https://wa.me/919999999999",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@outstrip.com",
  },
  {
    name: "Saarubah Jain",
    role: "Co-Founder & App Specialist",
    designation: "React Native · Web & Mobile Products",
    experience: "12+ Years Experience",
    image: images.ourStory,
    description:
      "Specialises in high-performance web and mobile applications, leading projects from concept to launch and delivering scalable, user-focused digital products.",
    skills: [
      "React Native",
      "React.js",
      "Laravel",
      "PHP",
      "MySQL",
      "Mobile Apps",
    ],
    whatsapp: "https://wa.me/919999999999",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@outstrip.com",
  },
];

export default function TalkToFoundersPage() {
  return (
    <PageShell>
      <section className="relative min-h-screen overflow-hidden bg-background py-20 md:py-24 lg:py-28">

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent-bright/5 blur-3xl" />

        <div className="container-wide relative">

          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-accent/15 bg-accent/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                Software Enquiry
              </span>

              <h1 className="mt-5 font-display text-2xl font-bold leading-[1] tracking-[-0.05em] text-ink sm:text-3xl md:text-4xl">
                Let&apos;s Build{" "}
                <span className="text-gradient">Something Great</span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                Submit a project enquiry or connect directly with one of our
                founders — whichever works best for you.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-[1.12fr_0.94fr_0.94fr]">
            <Reveal>
              <div className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-[0_20px_60px_-35px_rgba(7,17,31,0.35)] sm:p-6">

                <div>
                  <h2 className="font-display text-lg font-bold tracking-tight text-ink">
                    Tell us about your project
                  </h2>

                  <p className="mt-1 text-xs text-muted">
                    We&apos;ll respond within 24 hours, usually much sooner.
                  </p>
                </div>

                <form className="mt-4 flex flex-1 flex-col">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      className="h-9 w-full rounded-lg border border-accent/15 bg-background px-3 text-xs text-ink outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/10"
                    />

                    {/* Email */}
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="h-9 w-full rounded-lg border border-accent/15 bg-background px-3 text-xs text-ink outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/10"
                    />

                    {/* Phone */}
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      className="h-9 w-full rounded-lg border border-accent/15 bg-background px-3 text-xs text-ink outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/10"
                    />

                    {/* Company */}
                    <input
                      type="text"
                      placeholder="Company / Startup"
                      className="h-9 w-full rounded-lg border border-accent/15 bg-background px-3 text-xs text-ink outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/10"
                    />

                    {/* Project type */}
                    <SelectInput
                      name="projectType"
                      required
                      options={projectTypeOptions}
                      placeholder="Type of Project *"
                    />

                    {/* Message */}
                    <textarea
                      rows={4}
                      placeholder="Describe your idea or project... *"
                      required
                      className="w-full resize-none rounded-lg border border-accent/15 bg-background px-3 py-2.5 text-xs text-ink outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/10"
                    />

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-auto flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 text-xs font-bold text-white shadow-[0_12px_30px_-12px_rgba(13,159,138,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep"
                  >
                    Send Enquiry
                    <FiArrowRight className="h-4 w-4" />
                  </button>

                </form>
              </div>
            </Reveal>

            {founders.map((founder, index) => (
              <Reveal key={founder.name} delay={0.08 + index * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-[0_20px_60px_-35px_rgba(7,17,31,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(13,159,138,0.3)]">

                  {/* Founder Image */}
                  <div className="relative mx-auto mt-5 h-20 w-20 overflow-hidden rounded-full border-2 border-accent/20 bg-surface-soft p-0.5 shadow-lg">
                    <Image
                      src={founder.image.src}
                      alt={founder.name}
                      fill
                      sizes="80px"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Founder content */}
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-3 text-center">

                    <h2 className="font-display text-lg font-bold tracking-tight text-ink">
                      {founder.name}
                    </h2>

                    <p className="mt-1 text-xs font-semibold text-accent">
                      {founder.role}
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-muted">
                      {founder.designation}
                    </p>

                    {/* Experience */}
                    <div className="mt-3 rounded-full bg-accent/10 px-3 py-1.5 text-[10px] font-semibold text-accent">
                      {founder.experience}
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-left text-xs leading-5 text-muted">
                      {founder.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {founder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-accent/10 bg-accent/5 px-2.5 py-1 text-[9px] font-medium text-accent-deep"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto space-y-2 pt-5">
                      <a
                        href={founder.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-accent text-xs font-bold text-white transition-all duration-300 hover:bg-accent-deep"
                      >
                        <FiMessageCircle className="h-4 w-4" />
                        WhatsApp {founder.name.split(" ")[0]}
                      </a>

                      {/* LinkedIn */}
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-ink text-xs font-bold text-white transition-all duration-300 hover:bg-ink-soft"
                      >
                        <FiLinkedin className="h-4 w-4" />
                        LinkedIn — {founder.name.split(" ")[0]}
                      </a>

                      {/* Email */}
                      <a
                        href={founder.email}
                        className="flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-accent/20 bg-background text-xs font-semibold text-accent-deep transition-all duration-300 hover:border-accent hover:bg-accent/5"
                      >
                        <FiMail className="h-4 w-4" />
                        Email {founder.name.split(" ")[0]}
                      </a>

                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-1 w-0 bg-gradient-to-r from-accent-deep via-accent to-accent-bright transition-all duration-700 group-hover:w-full" />
                </div>
              </Reveal>
            ))}

          </div>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-muted">

              <span className="flex items-center gap-2">
                <FiCheck className="h-3.5 w-3.5 text-accent" />
                Founder-led conversation
              </span>

              <span className="hidden h-3 w-px bg-border sm:block" />

              <span className="flex items-center gap-2">
                <FiCheck className="h-3.5 w-3.5 text-accent" />
                No unnecessary sales pitch
              </span>

              <span className="hidden h-3 w-px bg-border sm:block" />

              <span className="flex items-center gap-2">
                <FiCheck className="h-3.5 w-3.5 text-accent" />
                Quick response
              </span>

            </div>
          </Reveal>

        </div>

      </section>
    </PageShell>
  );
}