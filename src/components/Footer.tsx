"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

export default function Footer() {
    const pathname = usePathname();

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative z-10 w-full overflow-hidden bg-black text-[#e6dcc8] pt-32 pb-12 flex flex-col items-center border-t border-[#e6dcc8]/5">
            {/* The Massive Red Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[600px] bg-[#E31E24]/20 blur-[160px] pointer-events-none z-0" />

            {/* CTA Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 mb-32 max-w-5xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-archivo-black font-black uppercase tracking-tight leading-none">
                    Ready to <span className="font-playfair italic text-[#E31E24] lowercase">boost</span><br />
                    your digital vision?
                </h2>

                <p className="font-archivo font-medium text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-8 md:mt-10 leading-relaxed">
                    Let’s collaborate to build a presence that stands out. Reach out today to bring your ideas to life.
                </p>

                <Button href="/contact" variant="primary" className="mt-12 justify-center w-full sm:w-auto shadow-2xl shadow-[#E31E24]/20">
                    Work with me
                </Button>
            </div>

            {/* Bottom Info Row */}
            <div className="relative z-10 w-full max-w-[96vw] mx-auto border-t border-[#e6dcc8]/10 pt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 px-4 md:px-0">
                {/* Column 1: Identity */}
                <div className="col-span-2 md:col-span-1 flex flex-col gap-2 font-archivo font-medium text-sm text-gray-400">
                    <span className="font-archivo-black font-black text-xl text-[#e6dcc8] uppercase tracking-wider mb-2">Luis AQUINO</span>
                    <p>&copy; 2026 Luis Aquino. All rights reserved.</p>
                    <p>Designed to elevate.</p>
                </div>

                {/* Column 2: Contact */}
                <div className="flex flex-col gap-3 font-archivo font-medium text-sm text-gray-400">
                    <span className="text-base text-[#e6dcc8] font-bold mb-1">Contact</span>
                    <a href="mailto:thisisgab23@gmail.com" className="hover:text-[#E31E24] transition-colors break-words">thisisgab23@gmail.com</a>
                    <a href="tel:+63 9763926401" className="hover:text-[#E31E24] transition-colors">+63 976 392 6401</a>
                </div>

                {/* Column 3: Socials */}
                <div className="flex flex-col gap-3 font-archivo font-medium text-sm text-gray-400">
                    <span className="text-base text-[#e6dcc8] font-bold mb-1">Socials</span>
                    <a href="https://www.instagram.com/luisaquinooo/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E31E24] transition-colors">Instagram</a>
                    <a href="https://www.tiktok.com/@luisseen?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-[#E31E24] transition-colors">TikTok</a>
                    <a href="https://www.linkedin.com/in/aquino-luis-gabriel-44626b316" target="_blank" rel="noopener noreferrer" className="hover:text-[#E31E24] transition-colors">LinkedIn</a>
                    <a href="https://www.facebook.com/louisegabriel.aquino/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E31E24] transition-colors">Facebook</a>
                </div>

                {/* Column 4: Navigation */}
                <div className="flex flex-col gap-3 font-archivo font-medium text-sm text-gray-400">
                    <span className="text-base text-[#e6dcc8] font-bold mb-1">Pages</span>
                    <Link href="/" onClick={handleHomeClick} className="hover:text-[#E31E24] transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-[#E31E24] transition-colors">About</Link>
                    <Link href="/projects" className="hover:text-[#E31E24] transition-colors">Projects</Link>
                    <Link href="/contact" className="hover:text-[#E31E24] transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
