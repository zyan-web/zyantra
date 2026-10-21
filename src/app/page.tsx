import { Audience } from "@/components/Audience";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Founder } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Problems } from "@/components/Problems";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <div id="top" tabIndex={-1} className="outline-none" />
        <Hero />
        <SkillsMarquee />
        <Audience />
        <Services />
        <Projects />
        <Problems />
        <Stats />
        <Founder />
        <Reviews />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
