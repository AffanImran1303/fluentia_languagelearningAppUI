import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <HeroSection/>
      <FeaturedCourses/>
      <Pricing/>
    </main>
  );
}
