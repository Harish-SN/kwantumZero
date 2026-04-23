import SideNav from "../components/SideNav";
import Hero from "../sections/Hero";
import Certifications from "../sections/Certifications";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import BlogTeaser from "../sections/BlogTeaser";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <SideNav />
      <Hero />
      <Certifications />
      <Experience />
      <Projects />
      <Skills />
      <BlogTeaser />
      <Footer />
    </>
  );
}