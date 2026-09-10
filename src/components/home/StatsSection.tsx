import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FiArrowUpRight } from "react-icons/fi";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-1/4 h-[420px] w-[420px] rounded-full bg-accent/[0.12] blur-[130px]" />
        <div className="absolute right-[-100px] top-0 h-[360px] w-[360px] rounded-full bg-blue-500/[0.08] blur-[120px]" />
        <div className="absolute bottom-[-180px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="section-pad container-wide relative z-10">
        <Reveal>
          <div className="max-w-2xl">
            <SectionHeading
              light
              eyebrow="By the numbers"
              title="Built to deliver. Proven to perform."
              description="Our experience is measured through the products we ship, the businesses we support, and the long-term partnerships we build."
            />
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label}>
              <div className="group relative min-h-[200px] border-b border-r border-t border-white/10 px-8 py-5 transition-all duration-500 hover:bg-white/[0.035] sm:min-h-[200px] lg:border-b-0 lg:border-t-0">
                <div className="flex items-start justify-between">
                  <span className="font-display text-[11px] font-semibold tracking-[0.2em] text-accent-bright/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-ink">
                    <FiArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Counter */}
                <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:-translate-y-1 md:text-6xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>

                <p className="mt-3 max-w-[180px] text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/75">
                  {stat.label}
                </p>
                
              </div>
            </Reveal>
          ))}
        </div>

        
      </div>
    </section>
  );
}