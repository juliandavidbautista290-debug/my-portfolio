import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import Stats from "./sections/Stats";
import CursorGlow from "./components/CursorGlow";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Experience from "./sections/Experience";
import Reveal from "./components/Reveal";

import BackgroundOrbs from "./components/BackgroundOrbs";
import MouseParallax from "./components/MouseParallax";
import NoiseOverlay from "./components/NoiseOverlay";
import Certificates from "./sections/Certificates";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {

  useEffect(() => {

    AOS.init({
      duration: 1200,
      once: false,
    });

  }, []);

  useEffect(() => {

    const unlock = () => {

      const audio = new Audio("/sounds/complete.mp3");

      audio.volume = 0;

      audio.play().catch(() => {});

    };

    window.addEventListener("click", unlock);
    window.addEventListener("scroll", unlock);

    return () => {

      window.removeEventListener("click", unlock);
      window.removeEventListener("scroll", unlock);

    };

  }, []);

  return (
    <>

      <AnimatedBackground />
      <NoiseOverlay />
      <MouseParallax />
      <BackgroundOrbs />
      <CursorGlow />

      <ScrollProgress />
      <Loader />
      <CustomCursor />

      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <Stats />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Certificates />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />

      <ToastContainer />

    </>
  );
}

export default App;