"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function AboutPage() {
    const certificates = [
        { title: "Legacy Responsive Web Design V8 Certificate", issuer: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/aquinoluis/responsive-web-design" },
        { title: "Back-End Development and APIs V8", issuer: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/aquinoluis/back-end-development-and-apis" },
        { title: "Legacy JavaScript Algorithms and Data Structures V7", issuer: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/aquinoluis/javascript-algorithms-and-data-structures" },
        { title: "Introduction to Graphic Design; Basics of UI/UX", issuer: "Simpli Web", link: "https://simpli-web.app.link/e/nqGzKOzj1Ob" },
        { title: "Website UI/UX Designing using ChatGPT : Become a UI UX designer", issuer: "Simpli Web", link: "https://simpli-web.app.link/e/FD7f4FBj1Ob" },
        { title: "Hubspot SEO II Certified", issuer: "Hubspot Academy", link: "https://app-na2.hubspot.com/academy/achievements/6vsqxxwn/en/1/aquino-luis-gabriel/seo-ii" },
        { title: "SEO Certified", issuer: "Hubspot Academy", link: "https://app-na2.hubspot.com/academy/achievements/jwnfg0dh/en/1/aquino-luis-gabriel/seo" },
        { title: "Digital Advertising Certified", issuer: "Hubspot Academy", link: "https://app-na2.hubspot.com/academy/achievements/l9s6b2q3/en/1/aquino-luis-gabriel/digital-advertising" },
        { title: "Content Marketing Certified", issuer: "Hubspot Academy", link: "https://app-na2.hubspot.com/academy/achievements/m5g674jy/en/1/aquino-luis-gabriel/content-marketing" }
    ];

    return (
        <div className="relative min-h-screen bg-black text-[#e6dcc8] selection:bg-[#E31E24] selection:text-white mt-0">
            {/* Universal Background Image: NEW FACEE.jpg */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/assets/aboutbg.jpg"
                    alt="Luis Aquino"
                    fill
                    className="object-cover object-center opacity-30 md:opacity-40 mix-blend-luminosity fixed w-full h-full"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent fixed opacity-80 md:opacity-100 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/95 fixed pointer-events-none" />
            </div>

            {/* HERO SECTION / ABOUT ME */}
            <section className="relative w-full min-h-screen flex flex-col justify-center pt-32 pb-24 px-4 md:px-12 xl:px-32 border-b border-[#e6dcc8]/10 overflow-hidden z-10">
                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start top-12 md:top-0">
                    {/* Top Accent Row */}
                    <div className="w-full flex justify-between items-center text-[10px] md:text-sm font-manrope font-bold tracking-[0.3em] uppercase text-[#e6dcc8] mb-12 border-b border-white/10 pb-4">
                        <span>01</span>
                        <span>// THE DEVELOPER</span>
                        <span>2026</span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl md:text-[8rem] lg:text-[10rem] font-archivo-black font-black tracking-tighter leading-none mb-8 flex flex-wrap items-baseline gap-4 md:gap-8"
                    >
                        <span className="font-playfair italic text-[#e6dcc8] font-normal tracking-normal capitalize">About</span>
                        <span className="text-[#E31E24] uppercase">Me</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-12 w-full md:w-2/3 lg:w-1/2 mt-8"
                    >
                        <div className="flex items-center gap-4 text-sm md:text-base font-archivo font-bold">
                            <span className="text-[#E31E24]">Luis Aquino</span>
                            <span>//</span>
                            <span className="text-[#e6dcc8]">Front-End Developer</span>
                        </div>

                        <p className="font-manrope text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 text-justify">
                            I combine my passion for design and development to elevate digital experiences. With 4+ years of experience in design and 2+ years in web development, I create modern, visually engaging, and impactful websites that stand out. As an aspiring Front-End Developer, I focus on building clean, purposeful, and responsive web experiences that bring bold ideas to life. So far, I’ve successfully completed 4+ projects, each crafted to capture attention and deliver meaningful results.
                        </p>

                        <div className="flex flex-col gap-8 w-full border-t border-[#e6dcc8]/20 pt-8 mt-4">
                            {/* Mission */}
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full border-b border-[#e6dcc8]/10 pb-8">
                                <span className="w-32 text-sm font-archivo font-bold text-[#e6dcc8] uppercase tracking-wider">My Mission</span>
                                <p className="flex-1 text-sm font-manrope text-gray-400">Put my front-end development and design skills at the service of your brand, to offer modern and responsive web solutions.</p>
                            </div>
                            {/* Vision */}
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full border-b border-[#e6dcc8]/10 pb-8">
                                <span className="w-32 text-sm font-archivo font-bold text-[#e6dcc8] uppercase tracking-wider">My Vision</span>
                                <p className="flex-1 text-sm font-manrope text-gray-400">Build creative digital universes where technology is not just functional, but tells a powerful story through deep interactions.</p>
                            </div>
                            {/* Goal */}
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full pb-4">
                                <span className="w-32 text-sm font-archivo font-bold text-[#e6dcc8] uppercase tracking-wider">My Goal</span>
                                <p className="flex-1 text-sm font-manrope text-gray-400">Transform every project into a unique web experience that captures attention, elevates the brand image, and stands out long-term.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Button href="/contact" variant="secondary">
                                Let's Work Together
                            </Button>

                            <Button href="/assets/Resume.pdf" variant="secondary" icon={<Download size={16} />}>
                                Download Full Resume
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SKILLS & TOOLS SECTION */}
            <section className="relative w-full min-h-[80vh] flex flex-col justify-center py-24 px-4 md:px-12 xl:px-32 border-b border-[#e6dcc8]/10 overflow-hidden z-10">
                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-7xl lg:text-[8rem] font-archivo-black font-black tracking-tight leading-[0.9] text-[#e6dcc8] mb-16">
                            Skills & <br />Tools
                        </h2>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-24">
                            <ul className="space-y-6 font-manrope text-gray-200 font-bold text-lg md:text-xl tracking-wide">
                                <li className="flex items-center gap-4"><span className="w-3 h-3 rounded-full bg-[#E31E24] shadow-[0_0_12px_rgba(227,30,36,0.6)] shrink-0" /> HTML</li>
                                <li className="flex items-center gap-4"><span className="w-3 h-3 rounded-full bg-[#E31E24] shadow-[0_0_12px_rgba(227,30,36,0.6)] shrink-0" /> CSS</li>
                                <li className="flex items-center gap-4"><span className="w-3 h-3 rounded-full bg-[#E31E24] shadow-[0_0_12px_rgba(227,30,36,0.6)] shrink-0" /> JavaScript</li>
                                <li className="flex items-center gap-4"><span className="w-3 h-3 rounded-full bg-[#E31E24] shadow-[0_0_12px_rgba(227,30,36,0.6)] shrink-0" /> React.js</li>
                            </ul>
                            <ul className="space-y-6 font-manrope text-gray-200 font-bold text-lg md:text-xl tracking-wide">
                                <li className="flex items-center gap-4"><span className="w-3 h-3 rounded-full bg-[#E31E24] shadow-[0_0_12px_rgba(227,30,36,0.6)] shrink-0" /> Python</li>
                                <li className="flex items-center gap-4"><span className="w-3 h-3 rounded-full bg-[#E31E24] shadow-[0_0_12px_rgba(227,30,36,0.6)] shrink-0" /> PHP</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-12 md:gap-16 max-w-4xl">
                            {/* Photoshop */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-[#001d34] flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                                    <span className="text-4xl md:text-5xl font-bold text-[#31A8FF] font-sans tracking-tighter">Ps</span>
                                </div>
                                <span className="text-sm font-manrope text-gray-400 font-medium">Photoshop</span>
                            </div>

                            {/* Illustrator */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-[#261000] flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                                    <span className="text-4xl md:text-5xl font-bold text-[#FF9A00] font-sans tracking-tighter">Ai</span>
                                </div>
                                <span className="text-sm font-manrope text-gray-400 font-medium">Illustrator</span>
                            </div>

                            {/* Figma */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-black bg-opacity-50 border border-white/5 flex flex-col items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                                    <div className="flex flex-col items-center w-10">
                                        <div className="flex">
                                            <div className="w-5 h-5 rounded-l-full bg-[#F24E1E]"></div>
                                            <div className="w-5 h-5 rounded-full bg-[#FF7262]"></div>
                                        </div>
                                        <div className="flex">
                                            <div className="w-5 h-5 rounded-l-full bg-[#A259FF]"></div>
                                            <div className="w-5 h-5 rounded-full bg-[#1ABCFE]"></div>
                                        </div>
                                        <div className="w-5 h-5 rounded-l-full rounded-br-full bg-[#0ACF83] self-start"></div>
                                    </div>
                                </div>
                                <span className="text-sm font-manrope text-gray-400 font-medium">Figma</span>
                            </div>

                            {/* CapCut Pro */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-black bg-opacity-50 text-white border border-white/5 flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                                    <span className="text-lg md:text-xl font-black font-sans tracking-tighter uppercase text-white">CapCut</span>
                                </div>
                                <span className="text-sm font-manrope text-gray-400 font-medium">CapCut Pro</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CERTIFICATIONS / STUDIES */}
            <section className="relative w-full py-24 px-4 md:px-12 xl:px-32 bg-black border-b border-[#e6dcc8]/10">
                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 lg:gap-48">
                    <div className="md:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-6xl md:text-7xl lg:text-[8rem] font-archivo-black font-black tracking-tight leading-[0.9] text-[#e6dcc8] mb-16">
                                Education &<br />Certifications
                            </h2>
                        </motion.div>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-10 border-l border-[#e6dcc8]/10 pl-8 md:pl-16 lg:pl-24 max-h-[500px] overflow-y-auto pr-4 md:pr-8 py-4 hide-scrollbar">
                        {certificates.map((cert, index) => (
                            <motion.a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className="relative block group"
                            >
                                <span className={`absolute -left-[37px] md:-left-[69px] top-1.5 w-3 h-3 rounded-full transition-colors duration-300 ${index === 0 ? "bg-[#E31E24] shadow-[0_0_10px_rgba(227,30,36,0.5)]" : "bg-gray-600 group-hover:bg-[#E31E24] group-hover:shadow-[0_0_10px_rgba(227,30,36,0.5)]"}`} />
                                <h4 className="text-xl font-archivo font-bold text-[#e6dcc8] group-hover:text-[#E31E24] transition-colors duration-300">{cert.title}</h4>
                                <p className="font-manrope text-sm text-gray-400 mt-2">{cert.issuer}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
}
