import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Tools from './components/Tools';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with lerp for superior smoothness
    const lenis = new Lenis({
      lerp: 0.08, // Slightly lower lerp for a more "expensive" weighted feel
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      smoothWheel: true,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Precise frame-by-frame synchronization
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Handle internal link navigation smoothly
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href');
        const element = document.querySelector(id!);
        if (element) {
          // Fix: Cast Element to HTMLElement to satisfy Lenis.scrollTo type requirements (HTMLElement | string | number)
          lenis.scrollTo(element as HTMLElement, { offset: 0, duration: 1.5 });
        }
      }
    };

    window.addEventListener('click', handleAnchorClick);

    // Periodic refresh to catch late-loading elements (fonts/images)
    const refreshTimer = setInterval(() => ScrollTrigger.refresh(), 2000);

    return () => {
      clearInterval(refreshTimer);
      window.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return (
    <div className="relative selection:bg-white selection:text-black">
      <CustomCursor />

      {/* Navigation - Minimal and Immersive */}
      <nav className="fixed top-0 left-0 w-full p-6 lg:p-10 z-[500] mix-blend-difference flex justify-between items-center">
        <div className="font-bebas text-3xl text-white tracking-tighter">MBM</div>
        <div className="flex gap-10 items-center">
          <div className="hidden md:flex gap-10 text-[10px] font-mono text-white/50 uppercase tracking-widest">
            <a href="#projects" className="hover:text-white transition-colors">Works</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="group cursor-pointer">
            <div className="w-8 h-[2px] bg-white mb-2 transition-transform group-hover:scale-x-75"></div>
            <div className="w-8 h-[2px] bg-white translate-x-2 transition-transform group-hover:translate-x-0"></div>
          </div>
        </div>
      </nav>

      <main>
        <div id="home">
          <Hero />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="tools">
          <Tools />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;