import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeManagement from "@/components/PracticeManagement";
import OurScale from "@/components/OurScale";
import BuiltInAI from "@/components/BuiltInAI";
import EmrStreamlines from "@/components/EmrStreamlines";
import BuiltForEverySize from "@/components/BuiltForEverySize";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
