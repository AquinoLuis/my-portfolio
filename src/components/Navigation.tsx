"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Download, Github, Linkedin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), []);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-6 flex items-center justify-between bg-black/20 backdrop-blur-md border-b border-[#e6dcc8]/5">
                {/* 1. Left (Logo) */}
                <div className="pointer-events-auto flex w-1/2 lg:w-1/4 justify-start items-center">
                    <Link href="/" onClick={handleHomeClick} className="inline-block lg:ml-8 origin-left flex items-center">
                        <Image src="/assets/Red Logo.png" alt="Luis Logo" width={300} height={100} className="w-auto h-8 md:h-10 lg:h-12 object-contain" priority />
                    </Link>
                </div>

                {/* 2. Center-Left (Location & Title) */}
                <div className="hidden lg:flex flex-col items-start w-1/3 xl:w-5/12 justify-center pointer-events-auto pl-4 xl:pl-8">
                    <span className="text-[9px] md:text-[10px] uppercase text-[#e6dcc8] tracking-[0.2em] mb-1">Based in Philippines</span>
                    <span className="text-xs md:text-sm text-[#e6dcc8] font-manrope font-semibold">Front-End Developer</span>
                </div>

                {/* 3. Center-Right (Socials) */}
                <div className="hidden lg:flex flex-col items-start w-1/4 justify-center pointer-events-auto pl-8 xl:pl-16">
                    <span className="text-[9px] md:text-[10px] text-[#e6dcc8] uppercase mb-1 tracking-[0.2em]">Social media</span>
                    <div className="flex items-center gap-2 text-[#e6dcc8] font-bold tracking-widest text-xs md:text-sm">
                        <a href="https://github.com/AquinoLuis" target="_blank" rel="noreferrer" className="hover:text-[#E31E24] transition-colors">GH</a>
                        <span className="opacity-50">/</span>
                        <a href="https://www.linkedin.com/in/aquino-luis-gabriel-44626b316/" target="_blank" rel="noreferrer" className="hover:text-[#E31E24] transition-colors">LI</a>
                        <span className="opacity-50">/</span>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#E31E24] transition-colors">X</a>
                    </div>
                </div>

                {/* 4. Far Right (Menu) */}
                <div className="flex items-center flex-1 justify-end pointer-events-auto">
                    <button
                        onClick={toggleMenu}
                        className="rounded-full bg-black/50 border border-[#e6dcc8]/20 px-6 py-2 md:py-3 flex items-center gap-3 transition-colors hover:bg-[#e6dcc8]/10"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isOpen ? (
                            <X size={16} className="text-[#e6dcc8]" />
                        ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#e6dcc8]" />
                        )}
                        <span className="text-xs md:text-sm font-bold tracking-widest text-[#e6dcc8] uppercase mt-0.5">MENU</span>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-2xl text-[#e6dcc8] flex flex-col justify-center items-center"
                    >
                        {/* Top Right: CLOSE button */}
                        <div className="absolute top-6 right-6 md:top-8 md:right-10 pointer-events-auto">
                            <button
                                onClick={toggleMenu}
                                className="flex items-center gap-3 hover:opacity-70 transition-opacity"
                            >
                                <X size={20} className="text-[#E31E24]" />
                                <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#e6dcc8] uppercase">CLOSE</span>
                            </button>
                        </div>

                        {/* Center Links */}
                        <div className="flex flex-col items-center gap-4 md:gap-8 overflow-y-auto w-full px-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => {
                                            if (link.href === "/") {
                                                handleHomeClick(e);
                                            } else {
                                                toggleMenu();
                                            }
                                        }}
                                        className="group relative block overflow-hidden uppercase text-5xl md:text-7xl lg:text-[7rem] font-archivo-black font-black leading-none h-[1em]"
                                    >
                                        <div className="relative flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                                            <span className="text-[#e6dcc8] tracking-tight">{link.name}</span>
                                            <span className="text-[#E31E24] tracking-tight">{link.name}</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Left: Contact */}
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-col items-start gap-1 font-manrope">
                            <span className="text-[10px] md:text-xs text-gray-400 tracking-[0.2em] font-bold mb-1">// CONTACT //</span>
                            <a href="tel:+63 9763926401" className="text-xs md:text-sm text-[#e6dcc8] font-semibold hover:text-[#E31E24] transition-colors">+63 976 392 6401</a>
                            <a href="mailto:thisisgab23@gmail.com" className="text-xs md:text-sm text-[#e6dcc8] font-semibold hover:text-[#E31E24] transition-colors">thisisgab23@gmail.com</a>
                        </div>

                        {/* Bottom Right: Localization */}
                        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col items-end gap-1 font-manrope text-right">
                            <span className="text-[10px] md:text-xs text-gray-400 tracking-[0.2em] font-bold mb-1">// LOCALIZATION //</span>
                            <span className="text-xs md:text-sm text-[#e6dcc8] font-semibold">Philippines, Pampanga</span>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}
