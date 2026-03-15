"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    icon?: React.ReactNode;
}

export default function Button({
    href,
    onClick,
    type = "button",
    children,
    variant = "primary",
    className = "",
    icon = <ArrowRight size={18} strokeWidth={3} />
}: ButtonProps) {
    // Base styles all buttons share
    // `isolate` and `overflow-hidden` ensures the scaling background stays within the button
    const baseStyles = "group isolate relative inline-flex items-center justify-center p-1.5 pr-1.5 pl-6 md:pl-8 rounded-full font-manrope font-bold uppercase tracking-widest border border-[#e6dcc8]/50 overflow-hidden transition-transform hover:scale-[1.02]";
    
    // Background color when not hovered
    // The secondary variant is now "glassy" like the stacking cards
    const variantStyles = variant === "primary" ? "bg-[#e6dcc8] text-black" : "bg-white/5 backdrop-blur-md text-[#e6dcc8]";

    const content = (
        <span className="relative w-full flex items-center justify-center gap-4">
            {/* The Text Layer */}
            <span className="relative z-10 text-xs md:text-sm group-hover:text-white transition-colors duration-1000 whitespace-nowrap">
                {children}
            </span>

            {/* The Icon & Expanding Background Wrapper */}
            <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center z-0">
                {/* 
                    The expanding red circle background.
                    This starts exactly inside the bounding box of the icon and expands symmetrically.
                    Scaled heavily (`scale-[35]`) taking 1 full second (`duration-1000`) for a slow elegant fill.
                    z-[-1] throws it underneath the text in our isolated stacking context.
                */}
                <div className="absolute inset-0 w-full h-full rounded-full bg-[#E31E24] scale-[0.98] group-hover:scale-[35] origin-center transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] z-[-1]" />
                
                {/* The rendering Icon itself */}
                <div className="relative z-10 flex items-center justify-center text-[#e6dcc8] group-hover:text-white group-hover:-rotate-45 transition-transform duration-1000">
                    {icon}
                </div>
            </div>
        </span>
    );

    if (href) {
        // Native linking for PDFs and external sites
        if (href.endsWith('.pdf') || href.startsWith('http')) {
            return (
                <a href={href} target="_blank" rel="noreferrer" className={`${baseStyles} ${variantStyles} ${className}`}>
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
            {content}
        </button>
    );
}
