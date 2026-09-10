import type { Metadata } from "next";
import Image from "next/image";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight, FiHeart, FiUsers, FiZap } from "react-icons/fi";

import { team, siteConfig, leadership } from "@/lib/data";
import { images, teamPhotos, teamMoments, teamEvents } from "@/lib/images";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";
import LeadershipCard from "@/components/about/LeadershipCard";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the specialists behind ${siteConfig.name} — designers, engineers, and strategists shipping products for global clients.`,
};

const momentSpans = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
];

type Photo = { src: string; alt: string; };

type Member = { name: string; role: string; image: Photo; };

function TeamCard({
  member,
  photo,
  index,
  featured = false,
}: {
  member: Member;
  photo: Photo;
  index: number;
  featured?: boolean;
}) {
  return (
    <TiltCard
      data-stagger-item
      className={featured ? "sm:col-span-2 sm:row-span-2" : ""}
      max={6}
    >
      <article className="relative overflow-hidden border border-border bg-surface shadow-[0_20px_60px_-32px_rgba(7,17,31,0.3)] transition-shadow duration-500 group-hover/tilt:shadow-[0_30px_80px_-20px_rgba(13,159,138,0.35)]">
        <div
          className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/5]"
            }`}
        >
          <Image
            src={photo.src}
            alt={`${member.name} — ${member.role}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover/tilt:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover/tilt:translate-y-0 group-hover/tilt:opacity-100">
            <FiArrowRight className="h-4 w-4 -rotate-45" />
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-xl font-semibold tracking-tight text-white">
              {member.name}
            </h3>

            <p className="mt-1 text-sm font-medium text-accent-bright">
              {member.role}
            </p>
          </div>
        </div>

        <div className="h-1 w-0 bg-gradient-to-r from-accent-deep via-accent to-accent-bright transition-all duration-700 group-hover/tilt:w-full" />
      </article>
    </TiltCard>
  );
}

function GalleryTile({
  photo,
  index,
  className,
}: {
  photo: Photo;
  index: number;
  className?: string;
}) {
  return (
    <Reveal delay={(index % 8) * 0.05} className={className}>
      <div className="group relative h-full w-full overflow-hidden border border-border bg-surface-soft shadow-[0_16px_44px_-28px_rgba(7,17,31,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(13,159,138,0.32)]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg">
            <FiArrowRight className="h-4 w-4 -rotate-45" />
          </span>
        </span>
      </div>
    </Reveal>
  );
}

export default function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Team"
        title="Meet the brilliant minds behind outstrip"
        description="A handpicked collective of designers, engineers, and strategists who bring bold ideas to life — the people behind every product we ship."
      />

      {/* ===== THE LEADERSHIP ===== */}
      <section className="section-pad overflow-hidden bg-background py-20 md:py-20 lg:py-24">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                THE LEADERSHIP
              </p>

              <h2 className="font-display text-3xl font-bold leading-[0.95] tracking-[-0.05em] text-ink sm:text-5xl md:text-4xl lg:text-5xl">
                Visionaries driving
                <span className="block text-gradient">
                  innovation & growth.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                The people setting the vision and standard for how OUTSTRIP builds.
              </p>
            </div>
          </Reveal>

          <StaggerChildren className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-2 sm:grid-cols-2 md:mt-16">
            {leadership.map((member, index) => {
              const photo = teamPhotos[index % teamPhotos.length];
              return (
                <div key={member.name} data-stagger-item>
                  <LeadershipCard
                    member={member}
                    photo={photo}
                    index={index}
                  />
                </div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CULTURE / LIFE AT OUTSTRIP */}
      <section
        id="culture"
        className="relative overflow-hidden border-t border-border bg-surface-soft py-20 md:py-28"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-ink/5 blur-3xl" />

        <div className="container-wide relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <Reveal>
              <div className="group relative">
                <div className="absolute -top-5 left-6 z-20 rounded-full border border-white/20 bg-ink px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-xl">
                  Inside outstrip
                </div>

                <div className="relative h-[300px] overflow-hidden bg-ink shadow-[0_35px_100px_-35px_rgba(7,17,31,0.45)] md:h-[380px]">
                  <Image
                    src={images.office.src}
                    alt={images.office.alt}
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink/20 via-transparent to-accent/10" />

                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-8">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                        Our culture
                      </p>

                      <p className="mt-2 max-w-xs text-lg font-medium leading-snug text-white md:text-xl">
                        Great work starts with great people.
                      </p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-ink">
                      <FiArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Floating stats card */}
                <div className="absolute -bottom-7 -right-4 hidden w-60 rounded-lg border border-border bg-white p-5 shadow-[0_20px_50px_-20px_rgba(7,17,31,0.3)] sm:block md:-right-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                      <FiUsers className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xl font-semibold tracking-tight text-ink">
                        01
                      </p>
                      <p className="text-xs text-ink/50">
                        Team first
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 h-[2px] bg-border" />

                  <p className="mt-3 text-xs leading-relaxed text-ink/60">
                    Small teams. Sharp thinking. Meaningful outcomes.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="max-w-xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-accent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                    Culture
                  </span>
                </div>
                <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink md:text-5xl lg:text-6xl">
                  Life at{" "}
                  <span className="text-gradient">outstrip.</span>
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-ink/60 md:text-lg">
                  Every engagement is staffed with people who care about the
                  outcome — not headcount. That&apos;s how we keep delivery fast
                  without sacrificing craft.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <MagneticButton
                    href="/about/careers"
                    variant="primary"
                    className="group"
                  >
                    Join the team
                    <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </MagneticButton>

                  <MagneticButton
                    href="#moments"
                    variant="secondary"
                    className="group"
                  >
                    Explore culture
                    <FiArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
                  </MagneticButton>
                </div>

                {/* Small bottom note */}
                <div className="mt-8 flex items-center gap-3 text-xs text-ink/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Built around people, not hierarchy.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== OUR SPECIALISTS ===== */}
      <section className="section-pad border-t border-border py-16 md:py-24">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Meet the Talent"
              title="Our Specialists"
              description="Senior practitioners across engineering, design, and strategy — embedded in every engagement."
            />
          </Reveal>

          <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                photo={member.image}
                index={index}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* MOMENTS (gallery) */}
      <section id="moments" className="section-pad border-t border-border py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <SectionHeading eyebrow="Gallery" title="Moments" align="center" className="mx-auto" />
          </Reveal>

          <div
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-5"
            style={{ gridAutoRows: "9rem" }}
          >
            {teamMoments.map((photo, idx) => (
              <GalleryTile
                key={photo.alt + idx}
                photo={photo}
                index={idx}
                className={momentSpans[idx % momentSpans.length]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS (gallery)  */}
      <section className="relative overflow-hidden border-t border-border bg-surface-soft py-20 md:py-28">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-ink/5 blur-3xl" />

        <div className="container-wide relative">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-accent" />

                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
                    Gallery
                  </span>
                </div>

                <h2 className="font-display text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-ink sm:text-4xl md:text-5xl">
                  Moments that
                  <span className="block text-gradient">
                    bring us together.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-ink/60 sm:text-base">
                  From team celebrations to industry events, these are the moments
                  that make working together memorable.
                </p>
              </div>

              {/* Counter */}
              <div className="hidden shrink-0 md:block">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink/40">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>Our Events</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Events carousel */}
          <div className="relative mt-12 md:mt-16">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-soft to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-soft to-transparent" />

            <div className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6">
              {teamEvents.map((photo, idx) => (
                <Reveal
                  key={`${photo.alt}-${idx}`}
                  delay={idx * 0.06}
                  className="w-[84%] flex-shrink-0 snap-start sm:w-[52%] lg:w-[36%]"
                >
                  <div className="group relative overflow-hidden border border-border bg-surface shadow-[0_20px_60px_-30px_rgba(7,17,31,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-25px_rgba(13,159,138,0.25)]">
                    <div className="relative h-[220px] overflow-hidden sm:h-[250px] lg:h-[280px]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 36vw, (min-width: 640px) 52vw, 84vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                      <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white backdrop-blur-md">
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <FiArrowUpRight className="h-4 w-4" />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                          Outstrip Events
                        </p>

                        <h3 className="mt-2 text-lg font-semibold leading-tight text-white">
                          {photo.alt}
                        </h3>
                      </div>
                    </div>
                    <div className="h-1 w-0 bg-gradient-to-r from-accent-deep via-accent to-accent-bright transition-all duration-700 group-hover:w-full" />
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-border" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/35">
                Swipe to explore
              </span>
              <FiArrowRight className="h-3.5 w-3.5 text-ink/35" />
              <span className="h-[2px] w-8 bg-border" />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
