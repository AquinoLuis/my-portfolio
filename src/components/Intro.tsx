"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    const container = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef1 = useRef<HTMLHeadingElement>(null);
    const textRef2 = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        // Parallax effect on image
        gsap.fromTo(imageRef.current, 
            { y: 60, scale: 0.95, opacity: 0 },
            { 
                y: -30, 
                scale: 1,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 90%",
                    end: "bottom top",
                    scrub: 1 // smooth scrubbing
                }
            }
        );

        // Staggered text entrance
        gsap.fromTo([textRef1.current, textRef2.current], 
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 65%",
                }
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="bg-black text-[#e6dcc8] py-12 md:py-16 px-4 md:px-12 xl:px-32 relative z-10 w-full flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 md:gap-8">

                {/* Top: Portrait Image */}
                <div
                    ref={imageRef}
                    className="relative w-80 h-96 md:w-96 md:h-[30rem] lg:w-[32rem] lg:h-[38rem] rounded-3xl overflow-hidden shadow-2xl border border-[#e6dcc8]/10"
                >
                    <Image
                        src="/assets/Formal Photo 1.jpg"
                        alt="Portrait of Luis Aquino"
                        fill
                        className="object-cover object-top"
                    />
                </div>

                {/* Middle: Heading */}
                <h2
                    ref={textRef1}
                    className="text-3xl md:text-4xl lg:text-[2.75rem] font-archivo-black font-bold leading-tight md:leading-tight max-w-4xl tracking-tight mt-4 opacity-0"
                >
                    Hey! I'm <span className="text-[#d52727] font-black">Luis</span>, an aspiring Front-End Developer.
                </h2>

                {/* Bottom: Bio Paragraph */}
                <p
                    ref={textRef2}
                    className="text-xs md:text-sm font-archivo font-medium text-[#e6dcc8] leading-relaxed max-w-3xl opacity-0"
                >
                    I transform bold ideas into seamless, scalable, and dynamic user interfaces. Passionate about building highly interactive and premium web applications, my goal is to deliver digital experiences that captivate and perform perfectly.
                </p>

            </div>
        </section>
    );
}
