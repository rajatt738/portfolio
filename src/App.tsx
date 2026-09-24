import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Education from '@/sections/Education';
import Certifications from '@/sections/Certifications';
import Contact from '@/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen dark:bg-dark-900 bg-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
