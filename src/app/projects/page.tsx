"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {

    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "WEBSITE", "UI/UX", "UI"];
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredProjects = projectsData.filter(proj =>
        activeFilter === "All" ? true : proj.category === activeFilter
    );

    useGSAP(() => {
        gsap.fromTo(
            ".gsap-card",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all"
            }
        );
    }, { dependencies: [activeFilter], scope: containerRef });

    return (
        <div className="min-h-screen bg-[#050000] text-[#e6dcc8] pt-32 pb-32 px-4 md:px-12 xl:px-32">
            <div className="max-w-[1400px] mx-auto">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-20"
                >
                    <div className="flex w-full justify-between text-[10px] md:text-xs font-manrope font-bold tracking-[0.3em] text-[#e6dcc8] uppercase mb-8">
                        <span>03</span>
                        <span>// PROJECTS</span>
                        <span>2026</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-center leading-[0.85] tracking-tighter flex items-baseline justify-center gap-4 md:gap-8 flex-wrap">
                        <span className="font-playfair italic text-[#e6dcc8] font-normal tracking-normal capitalize">My</span>
                        <span className="font-archivo-black text-[#E31E24] uppercase">Projects</span>
                    </h1>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-16 font-manrope text-xs md:text-sm font-semibold tracking-wider">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 md:py-3 rounded-full border transition-all duration-300 ${activeFilter === filter
                                    ? "bg-[#E31E24] border-[#E31E24] text-white"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {filteredProjects.map((proj) => (
                        <Link
                            href={`/projects/${proj.slug}`}
                            key={proj.slug}
                            className="gsap-card block group relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#111] shadow-xl"
                        >
                            {/* Background Image */}
                            <Image
                                src={proj.thumbnail}
                                alt={proj.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-70 group-hover:opacity-100"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

                            {/* Top Left Category Pill */}
                            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                                <span className="bg-[#E31E24] text-white text-[10px] md:text-xs font-bold font-manrope uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    {proj.category}
                                </span>
                            </div>

                            {/* Bottom Content Area */}
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-10 flex flex-col justify-end">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-archivo-black font-bold text-white tracking-tight mb-2 group-hover:text-[#E31E24] transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-gray-300 font-manrope text-sm md:text-base font-medium mb-6">
                                    {proj.shortDescription}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 pointer-events-none">
                                    <span className="bg-[#E31E24] text-white px-5 py-2.5 rounded-full text-xs font-bold font-manrope uppercase tracking-widest transition-colors flex items-center gap-2">
                                        View Case Study <MoveRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
