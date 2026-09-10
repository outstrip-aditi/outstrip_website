import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { siteConfig } from "@/lib/data";
import { serviceCategories, getServicesByCategory } from "@/lib/services";
import { PageHero, PageShell } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, e-commerce, hosting, mobile apps, web design, and digital marketing services from OUTSTRIP — every service has a dedicated page.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="End-to-end digital capability, service by service"
        description="Whether you need a storefront, a mobile product, a growth engine, or all three — explore each service in depth and see exactly how we deliver it."
      >
        <div className="mt-8">
          <MagneticButton href="/contact">Discuss your project</MagneticButton>
        </div>
      </PageHero>

      <section className="section-pad pb-24 md:pb-32">
        <div className="container-wide space-y-20 md:space-y-24">
          {serviceCategories.map((category, index) => {
            const categoryServices = getServicesByCategory(category.slug);

            return (
              <div
                key={category.slug}
                id={category.slug}
                className="scroll-mt-28 border-t border-border pt-12"
              >
                <Reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
                    {String(index + 1).padStart(2, "0")} · {category.title}
                  </p>
                  <SectionHeading
                    className="mt-3"
                    title={category.title}
                    description={category.description}
                  />
                </Reveal>

                <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      data-stagger-item
                      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_50px_-28px_rgba(7,17,31,0.35)]"
                    >
                      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent-deep">
                          {service.shortTitle}
                        </h3>
                        <FiArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-deep" />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{service.tagline}</p>
                    </Link>
                  ))}
                </StaggerChildren>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
