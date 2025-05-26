// ✅ Updated App.jsx with 60/30/10 color scheme and royal serif font

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { useEffect, useState } from "react";
import Testimonials from "./components/Testimonials";
import Certificates from "./components/Certificates";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="overflow-x-hidden bg-neutral-950 text-neutral-300 antialiased font-serif selection:bg-yellow-300 selection:text-black">
      {/* Background Radial Gradient */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_70%_70%_at_50%_-20%,rgba(120,119,198,0.35),rgba(0,0,0,0.9))]" />
      </div>

      {/* Conditional Navbar */}
      {showNavbar && <Navbar />}

      {/* Main Content Container */}
      <main className="w-full px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Testimonials/>
          <Certificates/>
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;