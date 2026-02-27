import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import ParticleBackground from "@/components/ParticleBackground";
import { cn } from "@/lib/utils";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: "Roni Dey | Full-Stack Developer",
  description: "Portfolio of Roni Dey, a Full-Stack Developer specializing in Next.js, React, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          anton.variable,
          robotoFlex.variable,
          "antialiased selection:bg-primary selection:text-primary-foreground"
        )}
        suppressHydrationWarning
      >
        <Preloader />
        <CustomCursor />
        <ScrollProgressIndicator />
        <ParticleBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
