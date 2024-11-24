import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <HeroSection/>
      <FeaturedCourses/>
    </main>
  );
}
