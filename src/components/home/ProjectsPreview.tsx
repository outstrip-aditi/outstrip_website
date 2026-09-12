import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ProjectsPreview() {
  const featured = projects.slice(0, 5);

  return (
    <section className="bg-white section-pad relative overflow-hidden pb-20 pt-18 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="section-pad container-wide relative">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Building Digital Excellence"
              description="Transforming ideas into impactful digital experiences across industries"
            />

            <MagneticButton
              href="/projects"
              variant="primary"
              size="md"
              className="shrink-0 self-start md:self-auto"
            >
              Explore all projects
              <FiExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>
          </div>
        </Reveal>

        {/* Projects Grid*/}
        <div className="max-w-7xl mx-auto">
          <StaggerChildren className="mt-14 grid gap-4 md:grid-cols-12">
            {featured.map((project, i) => {
              let layout = "md:col-span-4";
              let height = "min-h-[320px] md:min-h-[280px]";

              if (i === 0) {
                layout = "md:col-span-7";
                height = "min-h-[380px] md:min-h-[240px]";
              } else if (i === 1) {
                layout = "md:col-span-5";
                height = "min-h-[380px] md:min-h-[240px]";
              } else if (i === 2 || i === 3) {
                layout = "md:col-span-4";
                height = "min-h-[300px] md:min-h-[240px]";
              }

              return (
                <Link
                  key={`${project.slug}-${project.category}`}
                  href={`/projects`}
                  data-stagger-item
                  className={`group relative overflow-hidden ${layout} ${height} transition-all duration-700 ease-out hover:scale-[1.02]`}
                >
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={
                      i === 0
                        ? "(min-width: 768px) 66vw, 100vw"
                        : i === 1
                          ? "(min-width: 768px) 33vw, 100vw"
                          : "(min-width: 768px) 50vw, 100vw"
                    }
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    priority={i === 0}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(180deg, 
                      rgba(7,17,31,0.1) 0%, 
                      rgba(7,17,31,0.3) 40%, 
                      rgba(7,17,31,0.85) 70%, 
                      rgba(7,17,31,0.95) 100%)`,
                    }}
                  />

                  {/* Color Accent Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}40, transparent)`,
                    }}
                  />

                  {/* Top Info */}
                  <div className="absolute left-6 right-6 top-6 z-10 flex items-center justify-between">
                    <span className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/90">
                      {project.category}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center bg-white/10 backdrop-blur-md text-white/60 text-xs font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent-bright">
                          {project.year}
                        </span>
                        <span className="h-1 w-1 bg-white/30" />
                        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
                          {project.outcome}
                        </span>
                      </div>

                      <div className="flex items-end justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-display font-bold text-white transition-all duration-500 group-hover:text-accent-bright ${i === 0 ? "text-xl md:text-2xl lg:text-3xl" : "text-2xl md:text-3xl"
                              }`}
                          >
                            {project.title}
                          </h3>

                          <p className={`mt-2 leading-relaxed text-white/60 transition-opacity duration-500 group-hover:text-white/80 ${i === 0 ? "text-sm md:text-base max-w-xl" : "text-sm max-w-md"
                            }`}>
                            {project.summary}
                          </p>
                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white/10 backdrop-blur-sm text-white opacity-0 transition-all duration-500 group-hover:opacity-100 hover:bg-accent hover:text-ink">
                          <FiArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute -inset-full h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                </Link>
              );
            })}
          </StaggerChildren>
        </div>

      </div>
    </section>
  );
}