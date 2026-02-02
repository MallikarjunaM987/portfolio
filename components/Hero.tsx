
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PERSONAL_INFO } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial set
      gsap.set(".char", { y: 100, opacity: 0 });

      // Text Reveal Animation (Standard Stagger)
      gsap.to(".char", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        delay: 0.2
      });

      // Sub-elements reveal
      gsap.from(".sub-reveal", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out"
      });

      // Parallax Scroll Effect
      gsap.to(".hero-text-container", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block transition-colors duration-300 hover:text-sky-400 cursor-default">
        {char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 lg:px-20 relative overflow-hidden">

      <div className="mt-20 hero-text-container">
        <h1 className="text-[12vw] md:text-[8vw] lg:text-[5.5vw] leading-[0.85] font-syne font-black text-white uppercase overflow-visible text-center lg:text-left">
          <div className="flex flex-wrap justify-center lg:justify-start">
            {/* Name Row 1 */}
            <div className="flex flex-nowrap mb-2 lg:mb-0 mr-4 lg:mr-4">
              {renderText(PERSONAL_INFO.firstName)}
            </div>
            {/* Name Row 2 */}
            <div className="flex flex-nowrap text-outline">
              {renderText(PERSONAL_INFO.lastName)}
            </div>
          </div>
        </h1>
      </div>

      <div className="mt-12 max-w-2xl sub-reveal">
        <p className="text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
          Crafting digital experiences where <span className="text-white">brutalist aesthetics</span> meet <span className="text-white italic">organic motion</span>. Smart India Hackathon finalist & creative technologist.
        </p>
      </div>

      <div className="absolute bottom-10 left-6 lg:left-20 sub-reveal">
        <div className="flex gap-8 items-center">
          <div className="w-12 h-[1px] bg-white/30"></div>
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
