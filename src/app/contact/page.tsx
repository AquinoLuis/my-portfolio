"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import Button from "@/components/Button";

export default function ContactPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            // Configured EmailJS API credentials
            emailjs.sendForm(
                'service_6x75wq8',
                'template_en4wnf6',
                form.current,
                '6anw13oYZmZYGErKQ'
            )
                .then((result) => {
                    console.log(result.text);
                    setIsSubmitted(true);
                    form.current?.reset();

                    // Hide the success message after 4 seconds
                    setTimeout(() => {
                        setIsSubmitted(false);
                    }, 4000);
                }, (error) => {
                    console.log("EmailJS Error: ", error.text);
                    alert("Something went wrong sending the message. Please try again.");
                });
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
    };



    return (
        <div className="relative min-h-screen bg-[#050000] text-[#e6dcc8] flex flex-col justify-center pt-32 pb-24 px-4 md:px-12 xl:px-32">

            {/* Universal Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/assets/pc bg.jpg"
                    alt="Contact Background"
                    fill
                    className="object-cover object-center opacity-30 mix-blend-luminosity fixed w-full h-full"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent fixed pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/95 fixed pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-[1400px] w-full mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                {/* Left Side: Huge CTA & Info */}
                <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col justify-center">
                    <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-[7rem] font-archivo-black font-black tracking-tighter leading-[0.9] mb-16">
                        <span className="text-[#e6dcc8]">Let's work</span><br />
                        <span className="text-[#E31E24]">together !</span>
                    </motion.h1>

                    <motion.div variants={item} className="flex flex-col gap-3 font-manrope">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">// CONTACT INFO //</span>
                        <a href="tel:+639763926401" className="text-xl md:text-2xl font-semibold tracking-wide hover:text-[#E31E24] transition-colors w-max">
                            +63 976 392 6401
                        </a>
                        <a href="mailto:thisisgab23@gmail.com" className="text-xl md:text-2xl font-semibold tracking-wide hover:text-[#E31E24] transition-colors w-max">
                            thisisgab23@gmail.com
                        </a>

                        <div className="w-fit mt-6">
                            <Button href="/assets/Resume.pdf" variant="secondary">
                                Download Full Resume
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Contact Form block */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-[#0A0A0A]/80 backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-[2rem] w-full max-w-2xl ml-auto"
                >
                    <form ref={form} onSubmit={handleSubmit} className="space-y-8 font-manrope relative">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="block text-xs md:text-sm tracking-wider text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-[#050505] rounded-xl px-5 py-4 text-[#e6dcc8] focus:outline-none focus:ring-1 focus:ring-[#E31E24]/50 transition-shadow border border-white/5"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs md:text-sm tracking-wider text-gray-400 mb-2">Address Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-[#050505] rounded-xl px-5 py-4 text-[#e6dcc8] focus:outline-none focus:ring-1 focus:ring-[#E31E24]/50 transition-shadow border border-white/5"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-xs md:text-sm tracking-wider text-gray-400 mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="title"
                                required
                                className="w-full bg-[#050505] rounded-xl px-5 py-4 text-[#e6dcc8] focus:outline-none focus:ring-1 focus:ring-[#E31E24]/50 transition-shadow border border-white/5"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs md:text-sm tracking-wider text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-[#050505] rounded-xl px-5 py-4 text-[#e6dcc8] focus:outline-none focus:ring-1 focus:ring-[#E31E24]/50 transition-shadow border border-white/5 resize-none"
                            ></textarea>
                        </div>

                        <div className="mt-4 w-max">
                            <Button type="submit" variant="primary">
                                Send Message
                            </Button>
                        </div>

                        {/* Success Notification */}
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute bottom-[-70px] left-0 flex items-center gap-3 bg-[#111] border border-green-500/30 text-green-400 px-6 py-3 rounded-xl shadow-2xl"
                                >
                                    <CheckCircle2 size={20} />
                                    <span className="text-sm font-manrope font-semibold">Message sent successfully!</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
