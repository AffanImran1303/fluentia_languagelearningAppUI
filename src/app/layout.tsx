import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Fluentia",
  description: "An online language learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`antialiased text-[#3e477a]`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
