import SideNav from "../components/SideNav";
import Hero from "../sections/Hero";
import BlogTeaser from "../sections/BlogTeaser";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <SideNav />
      <Hero />
      <BlogTeaser />
      <Projects />
      <Certifications />
      <Experience />
      <Skills />
      <Footer />
    </>
  );
}