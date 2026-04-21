import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Specializations from "@/components/Specializations";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/portfolio";

const Index = () => {
  useEffect(() => {
    document.title = `${siteConfig.name} | ${siteConfig.role}`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="page-shell">
        <div className="page-grid" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Specializations />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
