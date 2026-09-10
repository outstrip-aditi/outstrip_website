"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import overView1 from "../../../public/images/about/overView1.jpg";
import overView2 from "../../../public/images/about/overView2.jpg";
import overView3 from "../../../public/images/about/overView3.jpg";
import overView4 from "../../../public/images/about/overView4.jpg";

const overviewImages = [
    {
        src: overView1,
        alt: "Outstrip team collaborating on digital solutions",
    },
    {
        src: overView2,
        alt: "Developer working on modern technology solutions",
    },
    {
        src: overView3,
        alt: "Outstrip team discussing a project",
    },
    {
        src: overView4,
        alt: "Technology team collaborating together",
    },
];

export function AboutOverviewStack() {
    const stackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const stack = stackRef.current;

        if (!stack) return;

        const cards = Array.from(
            stack.querySelectorAll<HTMLElement>("[data-stack-card]")
        );

        if (!cards.length) return;

        const ctx = gsap.context(() => {
            const positions = [
                {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    zIndex: 40,
                    opacity: 1,
                },
                {
                    x: 12,
                    y: 12,
                    rotation: 2,
                    scale: 0.98,
                    zIndex: 30,
                    opacity: 1,
                },
                {
                    x: -12,
                    y: 22,
                    rotation: -2,
                    scale: 0.96,
                    zIndex: 20,
                    opacity: 1,
                },
                {
                    x: 8,
                    y: 32,
                    rotation: 3,
                    scale: 0.94,
                    zIndex: 10,
                    opacity: 1,
                },
            ];

            cards.forEach((card, index) => {
                const position = positions[index];

                gsap.set(card, {
                    x: position.x,
                    y: position.y,
                    scale: position.scale,
                    rotation: position.rotation,
                    zIndex: position.zIndex,
                    opacity: position.opacity,
                    transformOrigin: "center center",
                });
            });

            /* Main stack animation */
            const moveStack = () => {
                const firstCard = cards.shift();

                if (!firstCard) return;
                gsap.to(firstCard, {
                    x: -170,
                    y: 45,
                    rotation: -8,
                    scale: 0.96,
                    duration: 0.8,
                    ease: "power3.inOut",
                    onComplete: () => {
                        cards.push(firstCard);

                        gsap.set(firstCard, {
                            x: positions[3].x,
                            y: positions[3].y,
                            rotation: positions[3].rotation,
                            scale: positions[3].scale,
                            zIndex: positions[3].zIndex,
                            opacity: 1,
                        });

                        cards.forEach((card, index) => {
                            const position = positions[index];

                            gsap.to(card, {
                                x: position.x,
                                y: position.y,
                                rotation: position.rotation,
                                scale: position.scale,
                                zIndex: position.zIndex,
                                opacity: position.opacity,
                                duration: 0.8,
                                ease: "power3.out",
                            });
                        });

                        
                        gsap.fromTo(
                            firstCard,
                            {
                                x: positions[3].x - 8,
                                y: positions[3].y - 5,
                            },
                            {
                                x: positions[3].x,
                                y: positions[3].y,
                                duration: 0.55,
                                ease: "power2.out",
                            }
                        );
                    },
                });
            };

            const interval = window.setInterval(moveStack, 3000);

            return () => {
                window.clearInterval(interval);
            };
        }, stack);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={stackRef}
            className="relative flex h-[520px] w-full items-center justify-center md:h-[620px]"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[110px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/[0.08]" />

            {/* Card Stack */}
            <div className="relative h-[430px] w-[360px] md:h-[540px] md:w-[450px] " >
                {overviewImages.map((image, index) => (
                    <div
                        key={index}
                        data-stack-card
                        className=" absolute  inset-0 overflow-hidden rounded-lg
                        bg-white will-change-transform"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority={index === 0}
                            sizes="(min-width: 700px) 450px, 360px"
                            className="object-cover"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-white/5" />

                        <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-white/30" />
                    </div>
                ))}
            </div>

            {/* Bottom decorative dots */}
            <div className="pointer-events-none absolute bottom-8 left-4 grid grid-cols-4 gap-2 opacity-50">
                {Array.from({ length: 12 }).map((_, index) => (
                    <span
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                ))}
            </div>

                <div className="pointer-events-none absolute right-5 top-16 h-3 w-3 rounded-full
                    bg-accent shadow-[0_0_24px_rgba(26,224,200,0.7)] "
                />
        </div>
    );
}