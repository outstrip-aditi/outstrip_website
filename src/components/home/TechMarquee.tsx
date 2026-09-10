"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import {
  FaLaravel,
  FaReact,
  FaAndroid,
  FaApple,
  FaWordpress,
  FaSearch,
  FaCloud,
  FaSalesforce,
  FaCode,
  FaPaintBrush,
  FaShoppingBag,
} from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";

const techItems = [
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "#FF2D20",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#07111f",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Android",
    icon: FaAndroid,
    color: "#3DDC84",
  },
  {
    name: "iOS",
    icon: FaApple,
    color: "#07111f",
  },
  {
    name: "Magento",
    icon: FaShoppingBag,
    color: "#EE672F",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    color: "#21759B",
  },
  {
    name: "SEO",
    icon: FaSearch,
    color: "#F9A825",
  },
  {
    name: "UI/UX",
    icon: FaPaintBrush,
    color: "#FF61F6",
  },
  {
    name: "Cloud",
    icon: FaCloud,
    color: "#00AEEF",
  },
  {
    name: "Salesforce",
    icon: FaSalesforce,
    color: "#00A1E0",
  },
  {
    name: "Development",
    icon: FaCode,
    color: "#6C63FF",
  },
];

function TechItem({
  item,
}: {
  item: (typeof techItems)[number];
}) {
  const Icon = item.icon;

  return (
    <div
      className="
        group
        flex
        shrink-0
        items-center
        gap-3
        rounded-full
        border
        border-black/[0.08]
        bg-white/75
        px-5
        py-3
        shadow-[0_8px_30px_rgba(7,17,31,0.05)]
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-accent/30
        hover:bg-white
        hover:shadow-[0_15px_35px_rgba(7,17,31,0.1)]
      "
    >
      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#eef2f6]
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        <Icon
          className="h-[18px] w-[18px]"
          style={{
            color: item.color,
          }}
        />
      </span>

      <span
        className="
          whitespace-nowrap
          text-sm
          font-semibold
          tracking-tight
          text-ink/70
          transition-colors
          duration-300
          group-hover:text-ink
        "
      >
        {item.name}
      </span>

      <span className="ml-1 h-1.5 w-1.5 rounded-full bg-accent/40 transition-all duration-300 group-hover:bg-accent" />
    </div>
  );
}

export function TechMarquee() {
  const topTrackRef =
    useRef<HTMLDivElement>(null);

  const bottomTrackRef =
    useRef<HTMLDivElement>(null);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const reduced =
    usePrefersReducedMotion();

  useEffect(() => {
    const topTrack =
      topTrackRef.current;

    const bottomTrack =
      bottomTrackRef.current;

    const container =
      containerRef.current;

    if (
      reduced ||
      !topTrack ||
      !bottomTrack ||
      !container
    ) {
      return;
    }

    const animationFrame =
      requestAnimationFrame(() => {
        const topWidth =
          topTrack.scrollWidth / 2;

        const bottomWidth =
          bottomTrack.scrollWidth / 2;

        if (
          !topWidth ||
          !bottomWidth
        ) {
          return;
        }

        /*
         * Row 1:
         * Left -> Right visual movement
         */
        const topTween = gsap.to(
          topTrack,
          {
            x: topWidth,
            duration: 32,
            ease: "none",
            repeat: -1,
          },
        );

        /*
         * Row 2:
         * Right -> Left visual movement
         */
        const bottomTween = gsap.to(
          bottomTrack,
          {
            x: -bottomWidth,
            duration: 36,
            ease: "none",
            repeat: -1,
          },
        );

        /*
         * Pause both rows on hover.
         */
        const handleMouseEnter =
          () => {
            topTween.timeScale(0);
            bottomTween.timeScale(0);
          };

        const handleMouseLeave =
          () => {
            topTween.timeScale(1);
            bottomTween.timeScale(1);
          };

        container.addEventListener(
          "mouseenter",
          handleMouseEnter,
        );

        container.addEventListener(
          "mouseleave",
          handleMouseLeave,
        );

        (
          container as HTMLDivElement & {
            __cleanupMarquee?: () => void;
          }
        ).__cleanupMarquee = () => {
          topTween.kill();
          bottomTween.kill();

          container.removeEventListener(
            "mouseenter",
            handleMouseEnter,
          );

          container.removeEventListener(
            "mouseleave",
            handleMouseLeave,
          );
        };
      });

    return () => {
      cancelAnimationFrame(
        animationFrame,
      );

      (
        container as HTMLDivElement & {
          __cleanupMarquee?: () => void;
        }
      ).__cleanupMarquee?.();
    };
  }, [reduced]);


  const rowOne = [
    ...techItems,
    ...techItems,
  ];

  const rowTwo = [
    ...techItems,
    ...techItems,
  ];

  return (
    <section
      className=" section-pad relative overflow-hidden pb-20 pt-18 md:pb-28 md:pt-20
      "
    >
      <div className="section-pad container-wide relative">
{/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[10%]
            top-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-accent/[0.07]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            bottom-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-blue-400/[0.06]
            blur-[100px]
          "
        />
      </div>

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(7,17,31,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(7,17,31,0.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "60px 60px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      {/* Heading */}
      <div
        className="
          container-wide
          relative
          z-10
          px-5
          text-center
          sm:px-8
        "
      >
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-accent/20
            bg-white/70
            px-4
            py-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-accent-deep
            shadow-sm
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          Technologies We Excel In
        </span>

        <h2
          className="
            mt-5
            font-display
            text-3xl
            font-semibold
            tracking-tight
            text-ink
            sm:text-4xl
            md:text-5xl
          "
        >
          Powered by the right
          <span className="text-gradient">
            {" "}
            technology
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-6
            text-muted
            sm:text-base
          "
        >
          We use modern technologies and
          proven frameworks to build
          scalable, secure, and
          high-performance digital products.
        </p>
      </div>

      {/* Marquee */}
      <div
        ref={containerRef}
        className="
          relative
          z-10
          mt-14
          space-y-4
          overflow-hidden
          py-3
        "
      >
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#eef2f6] to-transparent sm:w-26 lg:w-36"
        />

        {/* Right fade */}
        <div
          className=" pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#eef2f6] to-transparent sm:w-26 lg:w-36"
        />
        <div className="relative overflow-hidden">
          <div
            ref={topTrackRef}
            className="
              flex
              w-max
              -translate-x-1/2
              items-center
              gap-4
              px-2
              will-change-transform
              sm:gap-5
            "
          >
            {rowOne.map(
              (item, index) => (
                <TechItem
                  key={`top-${item.name}-${index}`}
                  item={item}
                />
              ),
            )}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={bottomTrackRef}
            className="
              flex
              w-max
              items-center
              gap-4
              px-2
              will-change-transform
              sm:gap-5
            "
          >
            {rowTwo.map(
              (item, index) => (
                <TechItem
                  key={`bottom-${item.name}-${index}`}
                  item={item}
                />
              ),
            )}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="
          container-wide
          relative
          z-10
          mt-12
          px-5
          sm:px-8
        "
      >
        <div className="flex items-center justify-center gap-3">
          <span className="h-[2px] w-10 bg-border sm:w-20" />

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-muted
            "
          >
            Modern stack · Proven results
          </span>

          <span className="h-[2px] w-10 bg-border sm:w-20" />
        </div>
      </div>
      </div>
    </section>
  );
}