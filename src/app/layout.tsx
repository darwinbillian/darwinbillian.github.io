import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
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
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} font-sans bg-neutral-950 text-neutral-300`}
      >
        {children}
      </body>
    </html>
  );
}
