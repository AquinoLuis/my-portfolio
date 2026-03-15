"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialTitle() {
    const container = useRef<HTMLElement>(null);
    const text1 = useRef<HTMLSpanElement>(null);
    const text2 = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        gsap.fromTo([text1.current, text2.current], 
            { y: 150, opacity: 0, rotateZ: 5 },
            { 
                y: 0, 
                opacity: 1, 
                rotateZ: 0,
                duration: 1.2, 
                stagger: 0.15, 
                ease: "power4.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    // toggleActions: "play none none reverse", // optional if we want it to hide when scrolling back up
                }
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full pt-32 md:pt-40 pb-12 md:pb-16 bg-black overflow-hidden z-10 border-t border-[#e6dcc8]/5">
            {/* Top Accent Row (Pinned to top of this section) */}
            <div className="absolute top-12 left-0 w-full px-6 md:px-12 flex justify-between items-center text-xs md:text-sm font-manrope font-bold tracking-[0.3em] uppercase text-[#e6dcc8]">
                <span>01</span>
                <span>// THE PORTFOLIO</span>
                <span>2026</span>
            </div>

            <div className="w-full max-w-[96vw] mx-auto flex flex-col">
                <div className="flex flex-col items-center justify-center w-full border-b border-[#e6dcc8]/20 pb-8 md:pb-12 px-4 md:px-0 text-center overflow-hidden">
                    {/* Main Title Name Lockup with clipping for the reveal */}
                    <h2 className="text-6xl md:text-8xl lg:text-[9rem] leading-none flex flex-wrap items-baseline justify-center gap-4 w-full">
                        <span ref={text1} className="font-europa-dembol font-light text-[#d82828] uppercase inline-block origin-bottom-left">LUIS</span>
                        <span ref={text2} className="font-europa-dembol font-light text-[#e6dcc8] uppercase inline-block origin-bottom-left">AQUINO</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}
