import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhatIDo from "@/components/WhatIDo";
import HowIWork from "@/components/HowIWork";
import SkillsAndTools from "@/components/SkillsAndTools";
import AboutMe from "@/components/AboutMe";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090a0f] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <FeaturedProjects />
        <WhatIDo />
        <HowIWork />
        <SkillsAndTools />
        <AboutMe />
        <FinalCTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
