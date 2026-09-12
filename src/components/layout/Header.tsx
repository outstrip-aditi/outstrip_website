"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { headerNavLinks, services, siteConfig } from "@/lib/data";
import { legacyServiceCategoryAnchor } from "@/lib/services";
import { images } from "@/lib/images";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ServicesMegaMenu } from "@/components/layout/ServicesMegaMenu";
import { aboutItems, AboutMegaMenu } from "@/components/layout/AboutMegaMenu";
import { IndustriesMegaMenu } from "@/components/layout/IndustriesMegaMenu";
import { industries } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const reduced = useReducedMotion();

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="section-pad container-wide flex h-16 items-center justify-between md:h-20">
          {/* <Link href="/" className="group relative z-50 flex items-baseline gap-1">
            <span className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
              OUTSTRIP
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition group-hover:scale-125" />
          </Link> */}

          <Link href="/" className="group relative z-50 flex items-center">
            <img
              src="/images/logo.png"
              alt="Outstrip"
              className="h-9 w-52 object-contain md:h-12 transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {headerNavLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              if (link.href === "/services") {
                return <ServicesMegaMenu key={link.href} active={active} />;
              }

              if (link.href === "/about") {
                return <AboutMegaMenu key={link.href} active={active} />;
              }

              if (link.href === "/industries") {
                return <IndustriesMegaMenu key={link.href} active={active} />;
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-2 py-2 text-sm font-medium transition-colors",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId={reduced ? undefined : "nav-underline"}
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-accent"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <MagneticButton variant="primary" href="/contact">
              Start a project
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "h-0.5 w-6 origin-center bg-ink transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span className={cn("h-0.5 w-6 bg-ink transition", open && "opacity-0")} />
            <span
              className={cn(
                "h-0.5 w-6 origin-center bg-ink transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-background lg:hidden"
          >
            <div className="section-pad flex h-full flex-col justify-center pt-20">
              <nav className="flex max-h-[70vh] flex-col gap-2 overflow-y-auto">
                {headerNavLinks.map((link, i) => {
                  if (link.href === "/about") {
                    const activeAbout =
                      pathname === link.href || pathname.startsWith(`${link.href}/`);

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <button
                          type="button"
                          onClick={() => setMobileAboutOpen((v) => !v)}
                          aria-expanded={mobileAboutOpen}
                          className={cn(
                            "font-display flex w-full items-center justify-between gap-3 py-2 text-4xl tracking-tight",
                            activeAbout ? "text-accent-deep" : "text-ink",
                          )}
                        >
                          {link.label}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={cn(
                              "h-6 w-6 shrink-0 transition-transform duration-300",
                              mobileAboutOpen && "rotate-180",
                            )}
                          >
                            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileAboutOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="py-3 pl-1">
                                <div className="relative mb-4 h-36 w-full overflow-hidden rounded-lg">
                                  <Image
                                    src={images.aboutUs.src}
                                    alt={images.aboutUs.alt}
                                    fill
                                    sizes="90vw"
                                    className="object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
                                </div>
                                <ul className="flex flex-col gap-1">
                                  {aboutItems.map((item) => (
                                    <li key={item.href}>
                                      <Link
                                        href={item.href}
                                        className="block py-1.5 text-base text-muted transition hover:text-accent-deep"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  if (link.href === "/services") {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          aria-expanded={mobileServicesOpen}
                          className={cn(
                            "font-display flex w-full items-center justify-between gap-3 py-2 text-4xl tracking-tight",
                            pathname === link.href ? "text-accent-deep" : "text-ink",
                          )}
                        >
                          {link.label}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={cn(
                              "h-6 w-6 shrink-0 transition-transform duration-300",
                              mobileServicesOpen && "rotate-180",
                            )}
                          >
                            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <ul className="flex flex-col gap-1 py-2 pl-1">
                                {services.map((service) => (
                                  <li key={service.slug}>
                                    <Link
                                      href={`/services#${legacyServiceCategoryAnchor[service.slug] ?? service.slug}`}
                                      className="block py-1.5 text-base text-muted transition hover:text-accent-deep"
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  if (link.href === "/industries") {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <button
                          type="button"
                          onClick={() => setMobileIndustriesOpen((v) => !v)}
                          aria-expanded={mobileIndustriesOpen}
                          className={cn(
                            "font-display flex w-full items-center justify-between gap-3 py-2 text-4xl tracking-tight",
                            pathname === link.href ? "text-accent-deep" : "text-ink",
                          )}
                        >
                          {link.label}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={cn(
                              "h-6 w-6 shrink-0 transition-transform duration-300",
                              mobileIndustriesOpen && "rotate-180",
                            )}
                          >
                            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileIndustriesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <ul className="grid grid-cols-2 gap-1 py-2 pl-1">
                                {industries.map((industry) => (
                                  <li key={industry.slug}>
                                    <Link
                                      href={`/industries/${industry.slug}`}
                                      className="block py-1.5 text-base text-muted transition hover:text-accent-deep"
                                    >
                                      {industry.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "font-display block py-2 text-4xl tracking-tight",
                          pathname === link.href ? "text-accent-deep" : "text-ink",
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <p className="mt-10 text-sm text-muted">{siteConfig.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
