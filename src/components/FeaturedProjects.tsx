"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function FeaturedProjects() {
    // Only featured top 4 for homepage
    const projects = projectsData.slice(0, 4);

    return (
        <section className="bg-black text-[#e6dcc8] pt-48 pb-32 px-4 md:px-0 relative z-10 w-full overflow-hidden">
            {/* Top Accent Row */}
            <div className="absolute top-12 left-0 w-full px-6 md:px-12 flex justify-between items-center text-xs md:text-sm font-manrope font-bold tracking-[0.3em] uppercase text-[#e6dcc8]">
                <span>03</span>
                <span>// PROJECTS</span>
                <span>2026</span>
            </div>

            <div className="w-full max-w-[96vw] mx-auto relative z-10">
                <div className="flex flex-col items-center justify-center border-b border-[#e6dcc8]/20 pb-8 md:pb-12 mb-16 px-4 md:px-0 gap-6 w-full text-center">
                    <h2 className="text-6xl md:text-8xl lg:text-[9rem] leading-none flex flex-wrap items-baseline justify-center gap-4 w-full px-2">
                        <span className="font-garamond italic text-[#e6dcc8] capitalize">Latest</span>
                        <span className="font-europa-dembol font-light text-[#d82828] capitalize">Projects</span>
                    </h2>
                    <Link href="/projects" className="flex items-center gap-2 hover:text-[#d82828] transition-colors uppercase font-archivo font-medium tracking-[0.2em] text-sm text-[#e6dcc8] mt-4">
                        All Projects <MoveRight size={20} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((proj, idx) => (
                        <Link href={`/projects/${proj.slug}`} key={idx} className="group relative block w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#0a0a0a] mb-6 shadow-xl">
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
                                <span className="bg-[#d52727] text-white text-[10px] md:text-xs font-bold font-manrope uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    {proj.category}
                                </span>
                            </div>

                            {/* Bottom Content Area */}
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-10 flex flex-col justify-end">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-archivo-black font-black text-white tracking-tight mb-2 group-hover:text-[#E31E24] transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-gray-300 font-manrope text-sm md:text-base font-medium mb-6">
                                    {proj.shortDescription}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 pointer-events-none">
                                    <span className="bg-[#d52727] text-white px-5 py-2.5 rounded-full text-xs font-bold font-manrope uppercase tracking-widest transition-colors flex items-center gap-2">
                                        View Case Study <MoveRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:hidden">
                    <Link href="/projects" className="flex items-center gap-2 bg-[#e6dcc8]/5 hover:bg-[#e6dcc8]/10 px-8 py-4 rounded-full transition-colors uppercase font-manrope tracking-widest text-sm font-bold">
                        View All Projects <MoveRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
