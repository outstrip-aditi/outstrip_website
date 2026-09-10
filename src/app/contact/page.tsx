import type { Metadata } from "next";
import Image from "next/image";
import {
  FiArrowRight,
  FiClock,
  FiDribbble,
  FiGlobe,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OUTSTRIP InfoTech in Jaipur — start a web, mobile, or growth project.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address);

  return (
    <section className="relative overflow-hidden border-t border-border bg-surface-soft pt-16 md:pt-24 lg:pt-28">

      <div className="container-wide relative">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                Let&apos;s Connect
              </span>
              <span className="h-px w-8 bg-accent" />
            </div>

            <h2 className="font-display text-2xl font-semibold leading-[1] tracking-[-0.05em] text-ink sm:text-3xl md:text-4xl">
              Let&apos;s build something
              <span className="block text-gradient">remarkable together.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted md:text-sm">
              Have a project, idea, or question? Tell us what you&apos;re working
              on and our team will get back to you with the right next step.
            </p>
          </div>
        </Reveal>
      </div>

      <section className="relative overflow-hidden bg-surface-soft max-w-6xl mx-auto mb-20">
        <div className="container-wide relative px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl lg:min-h-[650px]">
            <div className="relative z-10 min-h-[560px] border border-border bg-surface p-6 sm:p-8 md:p-10 lg:ml-[20%] lg:min-h-[610px] lg:px-10 lg:py-12 xl:ml-[25%] xl:px-14">
              <Reveal delay={0.1}>
                <div className="lg:ml-[18%] mt-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-[1px] w-10 bg-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
                      Project inquiry
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-semibold leading-[1.05] tracking-[-0.05em] text-ink sm:text-2xl md:text-3xl">
                    Tell us what you&apos;re <br></br> <span className="text-gradient">working on.</span>
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted md:text-sm">
                    Give us as much or as little detail as you have.
                    We&apos;ll ask the right questions and help you figure
                    out the next step.
                  </p>
                </div>

                <div className="my-5 h-px bg-border lg:ml-[18%]" />

                {/* Contact form */}
                <div className="lg:ml-[18%]">
                  <ContactForm />
                </div>

              </Reveal>
            </div>

            {/* DARK CONTACT CARD */}
            <div className="relative z-30 w-full overflow-hidden bg-ink p-7 text-white md:p-9 lg:absolute lg:left-0 lg:top-10 lg:mt-0 lg:w-[38%] lg:min-h-[600px] lg:p-10 xl:w-[36%]">

              <Reveal>
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-[1px] w-10 bg-accent-bright" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-bright">
                      Get in touch
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.045em] text-white md:text-2xl">
                    Contact Us
                  </h3>

                  <p className="mt-2 max-w-sm text-xs leading-5 text-white/65 md:text-xs">
                    We&apos;d love to hear about your project.
                    Reach out to us through any of the channels below.
                  </p>

                  <div className="mt-6 space-y-6">
                    {/* EMAIL */}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-fulll bg-accent/15 text-accent-bright transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                        <FiMail className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                          Email
                        </p>
                        <p className="mt-1 break-all text-sm text-white transition-colors group-hover:text-accent-bright">
                          {siteConfig.email}
                        </p>
                      </div>
                    </a>

                    {/* PHONE */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-fulll bg-accent/15 text-accent-bright">
                        <FiPhone className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                          Phone
                        </p>
                        <a
                          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                          className="mt-1 block text-sm text-white transition-colors hover:text-accent-bright"
                        >
                          {siteConfig.phone}
                        </a>
                        <a
                          href={`tel:${siteConfig.phoneAlt.replace(/\s/g, "")}`}
                          className="mt-1 block text-xs text-white/55 hover:text-white"
                        >
                          {siteConfig.phoneAlt}
                        </a>
                      </div>
                    </div>

                    {/* STUDIO */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-fulll bg-accent/15 text-accent-bright">
                        <FiMapPin className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                          Studio
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white">
                          {siteConfig.address}
                        </p>
                        <p className="mt-1 text-xs text-white/50">
                          {siteConfig.legalName}
                        </p>
                      </div>
                    </div>

                    {/* AVAILABILITY */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-fulll bg-accent/15 text-accent-bright">
                        <FiClock className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                          Availability
                        </p>
                        <p className="mt-1 text-sm text-white">
                          Monday – Friday
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/50">
                          We&apos;ll get back to you within one business day.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/10 pt-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-bright">
                      Follow Us
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      {/* LinkedIn */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent hover:text-white"
                      >
                        <FiLinkedin className="h-4 w-4" />
                      </a>

                      {/* Twitter / X */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent hover:text-white"
                      >
                        <FiTwitter className="h-4 w-4" />
                      </a>

                      {/* Instagram */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent hover:text-white"
                      >
                        <FiInstagram className="h-4 w-4" />
                      </a>

                      {/* Dribbble */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dribbble"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent hover:text-white"
                      >
                        <FiDribbble className="h-4 w-4" />
                      </a>

                    </div>

                    <p className="mt-3 text-xs leading-5 text-white/45">
                      Let&apos;s build something remarkable together.
                    </p>

                    <div className="mt-1 h-[1px] w-10 rounded-fulll bg-gradient-to-r from-accent-bright to-accent" />

                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                    Find us
                  </span>
                </div>

                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink md:text-4xl">
                  Visit our studio.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                  Come by our Jaipur studio and let&apos;s talk about your next
                  digital product, website, or growth opportunity.
                </p>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent-deep transition hover:text-accent"
              >
                Get directions
                <FiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden border border-border bg-surface shadow-[0_30px_80px_-40px_rgba(7,17,31,0.35)]">
              {/* Map */}
              <div className="relative h-[300px] md:h-[380px]">
                <iframe
                  title="OUTSTRIP InfoTech location"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[15%] transition duration-700 group-hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="pointer-events-none absolute inset-0 border border-black/5" />

                {/* Location card */}
                <div className="absolute bottom-5 left-5 max-w-xs rounded-lg border border-white/20 bg-ink/90 p-4 text-white shadow-xl backdrop-blur-md md:bottom-7 md:left-7">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-fulll bg-accent text-white">
                      <FiMapPin className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold">
                        OUTSTRIP InfoTech
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-white/75">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </section>
  );
}