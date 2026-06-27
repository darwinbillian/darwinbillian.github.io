import Contacts from "@/components/Contacts";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darwin Billiano | Software Developer",
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} font-sans bg-neutral-950 text-neutral-300`}
      >
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <div className="flex flex-col items-center px-16">
      <div className="w-full max-w-5xl flex py-16">
        <p className="flex-1">&copy; 2026 Darwin Billiano</p>
        <Contacts />
      </div>
    </div>
  );
}
