"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";
import { serviceImages } from "@/lib/images";
import { cn } from "@/lib/utils";
import { registerGSAP } from "@/lib/gsap";

type ServiceCategory = {
  title: string;
  icon?: string;
  links: {
    label: string;
    href: string;
  }[];
  imageKey: keyof typeof serviceImages;
};

const megaServices: ServiceCategory[] = [
  {
    title: "Web Development",
    links: [
      { label: "WordPress", href: "/services/wordpress" },
      { label: "ASP.NET", href: "/services/asp-net" },
      {
        label: "Desktop applications",
        href: "/services/desktop-applications",
      },
      { label: "PHP", href: "/services/php" },
      { label: "Angular JS", href: "/services/angular-js" },
      { label: "Salesforce", href: "/services/salesforce" },
      { label: "React js", href: "/services/react-js" },
      { label: "CodeIgniter", href: "/services/codeigniter" },
      { label: "Laravel", href: "/services/laravel" },
    ],
    imageKey: "web-development",
  },

  {
    title: "E-commerce",
    links: [
      { label: "Magento", href: "/services/magento" },
      { label: "WooCommerce", href: "/services/woocommerce" },
      { label: "Open Cart", href: "/services/open-cart" },
    ],
    imageKey: "ecommerce",
  },

  {
    title: "Hosting",
    links: [
      { label: "Hosting", href: "/services/hosting" },
      { label: "Servers & Cloud", href: "/services/servers-cloud" },
      { label: "Domains & SSL", href: "/services/domains-ssl" },
      {
        label: "Email & SMS Solutions",
        href: "/services/email-sms-solutions",
      },
    ],
    imageKey: "hosting-cloud",
  },

  {
    title: "Mobile Application",
    links: [
      {
        label: "Android App Development",
        href: "/services/android-app-development",
      },
      {
        label: "IOS Development",
        href: "/services/ios-development",
      },
    ],
    imageKey: "mobile-apps",
  },

  {
    title: "Web Design",
    links: [
      { label: "Website Design", href: "/services/website-design" },
      {
        label: "Custom Website Design",
        href: "/services/custom-website-design",
      },
      {
        label: "Responsive Web Design",
        href: "/services/responsive-web-design",
      },
    ],
    imageKey: "ui-ux-design",
  },

  {
    title: "Digital Marketing",
    links: [
      { label: "SEO", href: "/services/seo" },
      { label: "SMO", href: "/services/smo" },
      { label: "PPC", href: "/services/ppc" },
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
      },
    ],
    imageKey: "digital-marketing",
  },
];

export function ServicesMegaMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const [activeService, setActiveService] = useState(
    megaServices[0],
  );

  const panelRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    registerGSAP();
  }, []);


  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) return;

    if (open) {
      gsap.killTweensOf(panel);

      gsap.set(panel, {
        display: "block",
      });

      gsap.fromTo(
        panel,
        {
          opacity: 0,
          y: -12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        panel.querySelectorAll("[data-mega-item]"),
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.035,
          delay: 0.05,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(panel, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(panel, {
            display: "none",
          });
        },
      });
    }
  }, [open]);

  /*
   * Change preview image
   */
  const handleServiceHover = (service: ServiceCategory) => {
    if (service.title === activeService.title) return;

    setActiveService(service);

    const image = imageRef.current;

    if (!image) return;

    gsap.killTweensOf(image);

    gsap.fromTo(
      image,
      {
        opacity: 0,
        scale: 1.06,
        x: 15,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.45,
        ease: "power3.out",
      },
    );
  };

  const scheduleClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 160);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <Link
        href="/services"
        onFocus={() => setOpen(true)}
        className={cn(
          "relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
          active
            ? "text-ink"
            : "text-muted hover:text-ink",
        )}
      >
        Services

        <FiChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            open && "rotate-180",
          )}
        />

        {active && (
          <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-accent" />
        )}
      </Link>

      {/* Mega Menu */}
      <div
        ref={panelRef}
        className="fixed left-1/2 top-[74px] z-[999] hidden w-[min(1180px,calc(100vw-32px))] -translate-x-1/2 pt-3 opacity-0"
      >
        <div
          className="
            overflow-hidden rounded-lg border border-border bg-surface 
            shadow-[0_35px_100px_-35px_rgba(7,17,31,0.45)]
          "
        >
          <div className="grid grid-cols-[1fr_300px]">
            <div className="p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-deep">
                    Our Services
                  </p>

                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                    Technology that moves business forward.
                  </h3>
                </div>

                <Link
                  href="/services"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    text-xs
                    font-semibold
                    text-muted
                    transition-colors
                    hover:text-accent-deep
                  "
                >
                  View all
                  <FiArrowUpRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              </div>

              {/* 4-Column Grid Layout */}
              <div className="grid grid-cols-4 gap-x-6 gap-y-8">
                {/* Column 1: Web Development (index 0) */}
                <div
                  data-mega-item
                  onMouseEnter={() => handleServiceHover(megaServices[0])}
                  className="min-w-0"
                >
                  <div
                    className={cn(
                      "mb-3 flex items-center gap-2",
                      activeService.title === megaServices[0].title
                        ? "text-accent-deep"
                        : "text-ink",
                    )}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-[10px] font-bold text-accent-deep">
                      01
                    </span>

                    <span className="text-sm font-semibold">
                      {megaServices[0].title}
                    </span>
                  </div>

                  <div className="ml-9 space-y-1">
                    {megaServices[0].links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        data-mega-item
                        onMouseEnter={() => handleServiceHover(megaServices[0])}
                        className="group/link flex items-center gap-1.5 py-0.5 text-[12px] leading-6 text-muted transition-all duration-200 hover:translate-x-1 hover:text-accent-deep"
                      >
                        <span className="h-1 w-1 rounded-full bg-transparent transition-colors group-hover/link:bg-accent" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: E-commerce + Hosting (index 1, 2) */}
                <div className="space-y-8">
                  {megaServices.slice(1, 3).map((service, idx) => {
                    const isActive = activeService.title === service.title;
                    const index = idx + 2; // 02, 03

                    return (
                      <div
                        key={service.title}
                        data-mega-item
                        onMouseEnter={() => handleServiceHover(service)}
                        className="min-w-0"
                      >
                        <div
                          className={cn(
                            "mb-3 flex items-center gap-2",
                            isActive ? "text-accent-deep" : "text-ink",
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold",
                              isActive
                                ? "border-accent/40 bg-accent/10 text-accent-deep"
                                : "border-border bg-surface-soft text-muted",
                            )}
                          >
                            {String(index).padStart(2, "0")}
                          </span>

                          <span className="truncate text-sm font-semibold">
                            {service.title}
                          </span>
                        </div>

                        <div className="ml-9 space-y-1">
                          {service.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              data-mega-item
                              onMouseEnter={() => handleServiceHover(service)}
                              className="group/link flex items-center gap-1.5 py-0.5 text-[12px] leading-6 text-muted transition-all duration-200 hover:translate-x-1 hover:text-accent-deep"
                            >
                              <span className="h-1 w-1 rounded-full bg-transparent transition-colors group-hover/link:bg-accent" />
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Column 3: Mobile Application + Web Design (index 3, 4) */}
                <div className="space-y-8">
                  {megaServices.slice(3, 5).map((service, idx) => {
                    const isActive = activeService.title === service.title;
                    const index = idx + 4; // 04, 05

                    return (
                      <div
                        key={service.title}
                        data-mega-item
                        onMouseEnter={() => handleServiceHover(service)}
                        className="min-w-0"
                      >
                        <div
                          className={cn(
                            "mb-3 flex items-center gap-2",
                            isActive ? "text-accent-deep" : "text-ink",
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold",
                              isActive
                                ? "border-accent/40 bg-accent/10 text-accent-deep"
                                : "border-border bg-surface-soft text-muted",
                            )}
                          >
                            {String(index).padStart(2, "0")}
                          </span>

                          <span className="truncate text-sm font-semibold">
                            {service.title}
                          </span>
                        </div>

                        <div className="ml-9 space-y-1">
                          {service.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              data-mega-item
                              onMouseEnter={() => handleServiceHover(service)}
                              className="group/link flex items-center gap-1.5 py-0.5 text-[12px] leading-6 text-muted transition-all duration-200 hover:translate-x-1 hover:text-accent-deep"
                            >
                              <span className="h-1 w-1 rounded-full bg-transparent transition-colors group-hover/link:bg-accent" />
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Column 4: Digital Marketing (index 5) */}
                <div
                  data-mega-item
                  onMouseEnter={() => handleServiceHover(megaServices[5])}
                  className="min-w-0"
                >
                  <div
                    className={cn(
                      "mb-3 flex items-center gap-2",
                      activeService.title === megaServices[5].title
                        ? "text-accent-deep"
                        : "text-ink",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold",
                        activeService.title === megaServices[5].title
                          ? "border-accent/40 bg-accent/10 text-accent-deep"
                          : "border-border bg-surface-soft text-muted",
                      )}
                    >
                      06
                    </span>

                    <span className="truncate text-sm font-semibold">
                      {megaServices[5].title}
                    </span>
                  </div>

                  <div className="ml-9 space-y-1">
                    {megaServices[5].links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        data-mega-item
                        onMouseEnter={() => handleServiceHover(megaServices[5])}
                        className="group/link flex items-center gap-1.5 py-0.5 text-[12px] leading-6 text-muted transition-all duration-200 hover:translate-x-1 hover:text-accent-deep"
                      >
                        <span className="h-1 w-1 rounded-full bg-transparent transition-colors group-hover/link:bg-accent" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Panel */}
            <div className="relative overflow-hidden bg-ink">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[90px]" />
              <div
                ref={imageRef}
                className="absolute inset-0"
              >
                <Image
                  src={serviceImages[activeService.imageKey].src}
                  alt={serviceImages[activeService.imageKey].alt}
                  fill
                  sizes="360px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-20
                    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
                    bg-[size:32px_32px]
                  "
                />
              </div>

              {/* Image content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-bright">
                  Featured Service
                </span>

                <h4 className="mt-2 font-display text-2xl font-semibold text-white">
                  {activeService.title}
                </h4>

                <div className="mt-4 h-[2px] w-12 bg-accent transition-all duration-500" />

                <Link
                  href="/services"
                  className="
                    group
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white/80
                    transition-colors
                    hover:text-accent-bright
                  "
                >
                  Explore service

                  <FiArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}