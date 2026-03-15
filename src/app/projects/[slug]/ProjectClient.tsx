"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveLeft, MoveRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectClientProps {
  project: Project;
  nextProject: Project;
}

export default function ProjectClient({ project, nextProject }: ProjectClientProps) {
  return (
    <div className="bg-[#050000] min-h-screen text-[#e6dcc8] w-full selection:bg-[#E31E24] selection:text-white pt-24 md:pt-32">
        {/* Back Navigation */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[96vw] mx-auto px-4 md:px-0 mb-8 md:mb-12"
        >
            <Link href="/projects" className="inline-flex items-center gap-3 text-gray-400 hover:text-[#E31E24] transition-colors font-manrope font-semibold text-sm tracking-widest uppercase">
                 <MoveLeft size={16} /> Back to Projects
            </Link>
        </motion.div>

        {/* MAIN CONTENT: Sticky Text & Scrolling Gallery */}
        <section className="w-full max-w-[96vw] mx-auto px-4 md:px-0 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 mb-32 relative items-start">
            
            {/* LEFT: Sticky Text Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-5/12 flex flex-col justify-center md:sticky md:top-32 md:h-fit"
            >
                 {/* Top Pill / Category */}
                <div className="mb-6">
                    <span className="bg-[#E31E24] text-white text-[10px] md:text-xs font-bold font-manrope uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg inline-block">
                        {project.category}
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-[6rem] font-archivo-black font-black leading-[0.9] tracking-tight text-[#e6dcc8] mb-6">
                    {project.title}
                </h1>
                
                <p className="font-manrope text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
                    {project.fullDescription}
                </p>

                {/* Primary Action Button */}
                {project.liveLink && (
                    <div className="mb-16">
                        <Button href={project.liveLink} icon={<ArrowUpRight size={18} strokeWidth={3} />}>
                            Visit Live Site
                        </Button>
                    </div>
                )}

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-t border-b border-white/10 font-manrope text-sm">
                     <div className="flex flex-col gap-2">
                        <span className="text-gray-500 font-bold uppercase tracking-widest">Client</span>
                        <span className="text-white font-medium">{project.client}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-gray-500 font-bold uppercase tracking-widest">Role</span>
                        <span className="text-white font-medium">{project.role}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-gray-500 font-bold uppercase tracking-widest">Year</span>
                        <span className="text-white font-medium">{project.year}</span>
                    </div>
                </div>
            </motion.div>

            {/* RIGHT: High-Res Scrolling Mockups Wrapper */}
            <div className="w-full md:w-7/12 flex flex-col gap-8 md:gap-12 lg:gap-16">
                
                {/* 1. Hero Image / Main Mockup */}
                <div className="w-full relative rounded-[2rem] overflow-hidden bg-[#0F0F0F] shadow-2xl block md:hidden">
                     <Image
                        src={project.heroImage}
                        alt={`${project.title} Hero`}
                        width={1200}
                        height={1200}
                        className="object-cover w-full h-auto"
                        priority
                        unoptimized
                     />
                </div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="hidden md:block w-full relative rounded-[2rem] overflow-hidden bg-[#0F0F0F] shadow-2xl"
                >
                     {/* Using a fluid aspect ratio that adjusts based on the image size if possible, or defaulting to a tall display */}
                     <Image
                        src={project.heroImage}
                        alt={`${project.title} Hero`}
                        width={1200}
                        height={1200}
                        className="object-cover w-full h-auto"
                        priority
                        unoptimized
                     />
                </motion.div>

                {/* 2. Gallery Images Stack */}
                {project.gallery && project.gallery.length > 0 && (
                    <>
                        {project.gallery.map((imgSrc, idx) => (
                            <div key={idx} className="w-full relative rounded-[2rem] overflow-hidden bg-[#0F0F0F] shadow-2xl">
                                {/* Use Framer Motion only for Desktop. Mobile uses static layout classes. */}
                                <motion.div 
                                    initial={{ opacity: 1, y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0 }}
                                    className="w-full h-full block md:hidden"
                                >
                                     <Image
                                        src={imgSrc}
                                        alt={`${project.title} Detail ${idx + 1}`}
                                        width={1200}
                                        height={1200}
                                        className="object-cover w-full h-auto"
                                        unoptimized
                                     />
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6 }}
                                    className="hidden md:block w-full h-full"
                                >
                                     <Image
                                        src={imgSrc}
                                        alt={`${project.title} Detail ${idx + 1}`}
                                        width={1200}
                                        height={1200}
                                        className="object-cover w-full h-auto"
                                        unoptimized
                                     />
                                </motion.div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </section>

        {/* CONTINUOUS BROWSING SECTION (Next Project) */}
        <section className="w-full border-t border-white/5 py-32 flex flex-col items-center justify-center text-center px-4">
            <p className="font-manrope text-gray-400 font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-6">
                Next Project
            </p>
            <Link 
                href={`/projects/${nextProject.slug}`} 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex flex-col items-center"
            >
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-archivo-black font-black text-white tracking-tight mb-8 group-hover:text-[#E31E24] transition-colors duration-500">
                    {nextProject.title}
                </h2>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                     <MoveRight size={24} />
                </div>
            </Link>
        </section>
    </div>
  );
}
