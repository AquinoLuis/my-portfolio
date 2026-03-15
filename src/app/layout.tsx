import type { Metadata } from "next";
import { Archivo, Archivo_Black, Manrope, Playfair_Display, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Luis Aquino | Front-End Developer & UI/UX Designer",
  description: "Portfolio of Luis Aquino, showcasing highly interactive frontend applications, modern UI/UX design, and dynamic React projects.",
  keywords: [
    "Luis Aquino",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "Web Developer Philippines",
    "Portfolio"
  ],
  authors: [{ name: "Luis Aquino" }],
  creator: "Luis Aquino",
  openGraph: {
    title: "Luis Aquino | Front-End Developer",
    description: "Portfolio of Luis Aquino, showcasing dynamic React side-projects and frontend skills.",
    url: "https://luisaquino.com",
    siteName: "Luis Aquino Portfolio",
    images: [
      {
        url: "/assets/DONCHE.png", // Fallback OG image
        width: 1200,
        height: 630,
        alt: "Luis Aquino Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/Red Logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth overflow-x-clip w-full">
      <body className={`${archivoBlack.variable} ${archivo.variable} ${manrope.variable} ${playfair.variable} ${syne.variable} antialiased overflow-x-clip w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <SmoothScroll>
            <main>{children}</main>
          </SmoothScroll>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
