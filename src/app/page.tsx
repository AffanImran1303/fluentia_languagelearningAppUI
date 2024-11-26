import AboutUs from "@/components/AboutUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <HeroSection/>
      <FeaturedCourses/>
      <Pricing/>
      <Testimonials/>
      <AboutUs/>
    </main>
  );
}
