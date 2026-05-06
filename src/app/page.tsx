import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import PracticeManagement from "@/sections/PracticeManagement";
import OurScale from "@/sections/OurScale";
import BuiltInAI from "@/sections/BuiltInAI";
import EmrStreamlines from "@/sections/EmrStreamlines";
import BuiltForEverySize from "@/sections/BuiltForEverySize";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";

export default function Home() {
  // No global page pattern — every section now renders its own contained
  // grid + radial wash via SectionBg, so they don't collide at boundaries.
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PracticeManagement />
      <OurScale />
      <BuiltInAI />
      <EmrStreamlines />
      <BuiltForEverySize />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
