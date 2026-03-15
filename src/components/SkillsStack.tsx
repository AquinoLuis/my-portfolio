"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
    {
        id: 1,
        title: "Web Developer",
        description: "Architecting scalable Single Page Applications and semantic, responsive layouts with modern frameworks to deliver seamless digital experiences.",
        image: "/assets/webdeveloper.jpg",
        tags: ["React", "Next.js", "Tailwind"]
    },
    {
        id: 2,
        title: "Graphic Artist",
        description: "Creating beautiful, user-centric interfaces, compiling comprehensive design systems, and crafting compelling visual brand identities.",
        image: "/assets/graphicartist.jpg",
        tags: ["Photoshop", "Illustrator", "Figma"]
    },
    {
        id: 3,
        title: "Video Editor",
        description: "Editing and producing high-quality cinematic video content, complete with dynamic motion graphics and precise color grading.",
        image: "/assets/videoeditor.jpg",
        tags: ["Premiere Pro", "After Effects", "DaVinci"]
    },
    {
        id: 4,
        title: "AI Animator",
        description: "Leveraging cutting-edge generative AI tools to prototype, design, and animate stunning, surreal visual assets and concept art.",
        image: "/assets/aianimator.jpg",
        tags: ["Midjourney", "Stable Diffusion", "Runway"]
    }
];

export default function SkillsStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Natural sticky scroll without shrinking
        let ctx = gsap.context(() => {
            // GSAP tween removed as per user request to keep 100% original size
            // Native sticky top-32 will automatically create the non-shrinking stack.
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-black w-full py-24 md:py-32 px-4 md:px-12 relative z-10 min-h-screen">
            {/* Top Accent Row */}
            <div className="absolute top-12 left-0 w-full px-6 md:px-12 flex justify-between items-center text-xs md:text-sm font-manrope font-bold tracking-[0.3em] uppercase text-[#e6dcc8]">
                <span>02</span>
                <span>// EXPERTISE</span>
                <span>2026</span>
            </div>

            <div className="w-full max-w-[96vw] mx-auto flex flex-col items-center">

                {/* Section Header */}
                <div className="flex flex-col items-center justify-center w-full mb-16 md:mb-24 mt-8 md:mt-12 border-b border-[#e6dcc8]/20 pb-8 md:pb-12 px-4 md:px-0 gap-6 text-center">
                    <h2 className="text-6xl md:text-8xl lg:text-[9rem] leading-none flex flex-wrap items-baseline justify-center gap-4 w-full px-2">
                        <span className="font-garamond italic text-[#e6dcc8] capitalize">My</span>
                        <span className="font-europa-dembol font-light text-[#d82828] capitalize">Expertise</span>
                    </h2>
                    <Link href="/about" className="flex items-center gap-2 hover:text-[#d82828] transition-colors uppercase font-archivo font-medium tracking-[0.2em] text-sm text-[#e6dcc8] mt-4">
                        All Skills <MoveRight size={20} />
                    </Link>
                </div>

                <div className="w-full relative flex flex-col gap-16 pb-32 z-10">

                    {/* Massive Centered Red Glow Blob */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[#d52727]/25 rounded-full blur-[180px] pointer-events-none z-0"
                    />

                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className={`relative sticky top-32 w-full items-stretch flex flex-col lg:flex-row rounded-[2.5rem] border border-white/10 border-t-white/20 bg-black/40 backdrop-blur-[60px] shadow-2xl overflow-hidden origin-top lg:min-h-[600px]`}
                            style={{ zIndex: index * 10 + 20 }}
                        >
                            {/* Left Content Column */}
                            <div className="w-full lg:w-[45%] p-10 md:p-14 lg:p-16 flex flex-col justify-between h-full">
                                {/* Top: Badge */}
                                <div>
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#d52727] flex flex-shrink-0 items-center justify-center text-[#e6dcc8] text-lg md:text-xl font-bold shadow-lg shadow-[#d52727]/20">
                                        {skill.id}
                                    </div>
                                </div>

                                {/* Middle: Lowered Text */}
                                <div className="flex flex-col items-start mt-auto mb-8 pt-12 md:pt-16">
                                    <h3 className="text-4xl md:text-5xl lg:text-[3.8rem] leading-none font-archivo-black font-black text-[#e6dcc8] mb-6 tracking-tight">
                                        {skill.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-400 font-archivo font-medium leading-relaxed max-w-md">
                                        {skill.description}
                                    </p>
                                </div>

                                {/* Bottom: Tags */}
                                <div className="flex flex-wrap items-center gap-3">
                                    {skill.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-5 py-2 rounded-full bg-[#e6dcc8] text-black text-xs md:text-sm font-archivo font-bold tracking-wide"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Image Column */}
                            <div className="w-full lg:w-[55%] p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                                <div className="relative w-full h-[300px] lg:h-full lg:max-h-[500px] flex-grow rounded-2xl overflow-hidden shadow-2xl my-auto">
                                    <Image
                                        src={skill.image}
                                        alt={skill.title}
                                        fill
                                        className="object-cover object-center"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
