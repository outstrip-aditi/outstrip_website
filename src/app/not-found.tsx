import Link from "next/link";
import { PageShell } from "@/components/layout/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <PageShell>
      <section className="section-pad flex min-h-[70vh] flex-col items-start justify-center mesh-bg pt-28">
        <div className="container-wide">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">404</p>
          <h1 className="font-display mt-4 text-5xl text-ink md:text-7xl">Page not found</h1>
          <p className="mt-4 max-w-md text-muted">
            That route doesn’t exist — or it moved. Head home or explore services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="/">Back home</MagneticButton>
            <Link href="/services" className="inline-flex items-center text-sm font-semibold text-accent-deep">
              Services →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
