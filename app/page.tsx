import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />
      <Experience />
      <Skills />

      <Projects />

      <Certificates />

      <Achievements />

      <Contact />
    </>
  );
}
