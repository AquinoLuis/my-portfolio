"use client";

import { useRef } from "react";
import { Star, Zap, Moon, Plus } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    const charsPart1 = [
        { char: 'P', class: '' },
        { char: 'o', class: '' },
        { char: 'r', class: 'mx-[0.02em]' },
        { char: 't', class: 'mx-[0.02em]' },
    ];
    const charsPart2 = [
        { char: 'f', class: 'mx-[0.02em]' },
        { char: 'o', class: '' },
        { char: 'l', class: '' },
        { char: 'i', class: '' },
        { char: 'o', class: '' },
    ];

    const h2Words = [
        { word: 'elevating', class: 'font-playfair italic text-[#e6dcc8] lowercase' },
        { word: 'your', class: 'font-playfair italic text-[#e6dcc8] lowercase' },
        { word: 'digital', class: 'font-archivo-black font-black text-[#d52727] tracking-tight' },
        { word: 'presence.', class: 'font-archivo-black font-black text-[#d52727] tracking-tight' }
    ];

    useGSAP(() => {
        // ScrollTrigger Parallax Overlay
        gsap.to(".hero-overlay", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "450px top",
                scrub: true
            }
        });

        // Entrance Timeline Hooked to DOMContentLoaded / Mount
        const tl = gsap.timeline({ delay: 0.1 });

        // 1. Top Pill Entrance
        tl.fromTo(".hero-pill", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        // 2. Phase 1: Letters 1-4 ('Port') Reveal
        tl.fromTo(".hero-char-1", 
            { scale: 0, opacity: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                duration: 1.2, 
                stagger: 0.05, 
                ease: "expo.out" 
            }, 
            "-=0.4"
        );

        // 3. Asset Pop-in (Simultaneous with 'Port')
        tl.fromTo(".hero-asset", 
            { scale: 0, opacity: 0, rotation:-45 },
            {
                scale: 1,
                opacity: 0.8,
                rotation: 0,
                duration: 0.8,
                ease: "back.out(2)",
                stagger: 0.15
            }, 
            "<0.2"
        );

        // 4. Phase 2: Letters 5-9 ('folio') Transformative Spin
        tl.fromTo(".hero-char-2", 
            { scale: 0, opacity: 0, rotationY: -360 },
            { 
                scale: 1, 
                opacity: 1, 
                rotationY: 0,
                duration: 1.2, 
                stagger: 0.08, 
                ease: "expo.out",
                transformOrigin: "center center"
            }, 
            "<0.4"
        );

        // 5. H2 Words Assembly (Simultaneous with 'folio')
        tl.fromTo(".hero-word", 
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "circ.out"
            }, 
            "<"
        );

        // 6. Subtitle & Buttons Stagger
        tl.fromTo([".hero-subtitle", ".hero-buttons"], 
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }, 
            "-=0.4"
        );

        // 7. Phase 3: Infinite Floating Loop for Assets (Yoyo)
        gsap.to(".hero-asset", {
            y: "-=20",
            rotation: "random(-15, 15)",
            duration: 6,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            stagger: {
                each: 0.5,
                from: "random"
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen m-0 p-0 border-0 flex items-center justify-center overflow-hidden">
            {/* Background Video (z-0) */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                <video
                    src="/assets/coding.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Dynamic Dark Overlay (z-10) */}
            <div
                className="hero-overlay fixed inset-0 bg-black z-10 pointer-events-none opacity-50"
            />

            {/* Hero Text (z-20) */}
            <div className="relative z-20 flex flex-col items-center justify-center px-4 w-full h-full pt-16 mt-0">
                
                {/* Decorative Floating Assets (-z-10 local bounds to stay under CTA buttons) */}
                <Star className="hero-asset absolute top-[15%] left-[10%] md:top-[20%] md:left-[15%] text-[#e6dcc8] w-8 h-8 md:w-16 md:h-16 opacity-0 -z-10" fill="currentColor" />
                <Zap className="hero-asset absolute bottom-[25%] right-[10%] md:bottom-[30%] md:right-[20%] text-[#d52727] w-10 h-10 md:w-20 md:h-20 opacity-0 -z-10" fill="currentColor" />
                <Moon className="hero-asset absolute top-[12%] right-[15%] md:top-[25%] md:right-[15%] text-[#e6dcc8] w-12 h-12 md:w-14 md:h-14 opacity-0 -z-10" fill="currentColor" />
                <Plus className="hero-asset absolute bottom-[20%] left-[15%] md:bottom-[25%] md:left-[20%] text-[#d52727] w-10 h-10 md:w-14 md:h-14 opacity-0 -z-10" />

                {/* 1. Top Pill */}
                <div className="hero-pill mb-6 md:mb-8 px-4 md:px-6 py-2 rounded-full bg-black/40 border border-[#e6dcc8]/10 backdrop-blur-md opacity-0">
                    <span className="text-xs md:text-sm font-manrope uppercase tracking-[0.15em] md:tracking-widest text-[#e6dcc8] font-bold text-center block">
                        Crafting modern web experiences
                    </span>
                </div>

                {/* 2. Main Huge Text with perspective for GSAP 3D Spin */}
                <h1 className="flex flex-nowrap whitespace-nowrap items-center justify-center text-[13vw] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] font-syne font-black text-[#e6dcc8] leading-[0.85] tracking-tighter text-center overflow-hidden pb-4 [perspective:1000px]">
                    {charsPart1.map((item, i) => (
                        <span key={`p1-${i}`} className={`hero-char-1 inline-block opacity-0 ${item.class}`}>{item.char}</span>
                    ))}
                    {charsPart2.map((item, i) => (
                        <span key={`p2-${i}`} className={`hero-char-2 inline-block opacity-0 ${item.class}`}>{item.char}</span>
                    ))}
                </h1>

                {/* 3. Mixed Accent Line (H2 Words) */}
                <h2 className="mt-4 md:mt-0 flex flex-wrap items-baseline justify-center gap-x-2 md:gap-x-4 text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                    {h2Words.map((item, i) => (
                        <span key={`h2-${i}`} className={`hero-word inline-block opacity-0 ${item.class}`}>
                            {item.word}
                        </span>
                    ))}
                </h2>

                {/* 4. Subtitle */}
                <p className="hero-subtitle mt-6 md:mt-8 text-xs sm:text-sm md:text-base font-manrope font-normal text-[#e6dcc8] tracking-[0.1em] sm:tracking-[0.2em] uppercase text-center max-w-[90vw] opacity-0">
                    Front-End Developer | UI/UX Enthusiast
                </p>

                {/* 5. Buttons */}
                <div className="hero-buttons mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0 relative z-10 opacity-0">
                    <Button href="/projects" variant="primary" className="w-full sm:w-auto justify-between">
                        View Portfolio
                    </Button>
                    <Button href="/contact" variant="secondary" className="w-full sm:w-auto justify-between bg-black/20 backdrop-blur-md">
                        Get in Touch
                    </Button>
                </div>
            </div>
        </section>
    );
}
