import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Testinomals from "@/components/Testinomals";

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <HeroSection/>
      <FeaturedCourses/>
      <Pricing/>
      <Testinomals/>
    </main>
  );
}
