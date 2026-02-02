import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card) => {
        gsap.fromTo(card,
          {
            y: 100,
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "top center",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] px-6 lg:px-20 py-24">
      <div className="mb-20">
        <h2 className="text-[10vw] lg:text-[6vw] font-syne font-bold text-white leading-none uppercase tracking-tighter flex flex-wrap items-center gap-x-3">
          <span className="inline-flex">
            {'Selected'.split('').map((letter, i) => (
              <span
                key={`selected-${i}`}
                className="inline-block transition-colors duration-200 hover:text-sky-400 cursor-default"
              >
                {letter}
              </span>
            ))}
          </span>
          <span className="text-outline inline-flex">
            {'Works'.split('').map((letter, i) => (
              <span
                key={`works-${i}`}
                className="inline-block transition-colors duration-200 hover:text-white hover:[text-shadow:none] cursor-default"
              >
                {letter}
              </span>
            ))}
          </span>
        </h2>
      </div>

      <div className="flex flex-col gap-12 lg:gap-20">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="project-card group relative bg-[#0a0a0a] rounded-[30px] border border-white/10 overflow-hidden flex flex-col lg:flex-row min-h-[60vh] lg:h-[70vh] transition-all duration-300 hover:border-white/20"
          >
            {/* Gradient Background Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br via-transparent transition-opacity duration-700 pointer-events-none ${project.id === 'smart-student' ? 'from-orange-500/10 to-orange-300/5 opacity-0 group-hover:opacity-100'
              : project.id === 'gaming-platform' ? 'from-sky-500/15 to-blue-400/10 opacity-0 group-hover:opacity-100'
                : project.id === 'ai-brain' ? 'from-[#7E2553]/15 to-[#7E2553]/10 opacity-0 group-hover:opacity-100'
                  : 'from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100'
              }`}></div>
            <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 ${project.id === 'smart-student' ? 'bg-orange-400/15 opacity-0 group-hover:opacity-100'
              : project.id === 'gaming-platform' ? 'bg-sky-400/20 opacity-0 group-hover:opacity-100'
                : project.id === 'ai-brain' ? 'bg-[#7E2553]/20 opacity-0 group-hover:opacity-100'
                  : 'bg-purple-600/20 opacity-0 group-hover:opacity-100'
              }`}></div>
            <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 ${project.id === 'smart-student' ? 'bg-orange-300/10 opacity-0 group-hover:opacity-100'
              : project.id === 'gaming-platform' ? 'bg-blue-300/15 opacity-0 group-hover:opacity-100'
                : project.id === 'ai-brain' ? 'bg-[#7E2553]/15 opacity-0 group-hover:opacity-100'
                  : 'bg-indigo-600/20 opacity-0 group-hover:opacity-100'
              }`}></div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative overflow-hidden h-[50vh] lg:h-full">
              <img
                src={`https://picsum.photos/seed/${project.id}/1200/900`}
                alt={project.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center items-start relative bg-transparent z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-white/70">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className={`text-4xl lg:text-6xl font-syne font-bold uppercase mb-6 transition-all duration-300 ${project.id === 'aether'
                ? 'text-white group-hover:text-white group-hover:[text-shadow:0_0_10px_#FF0000,0_0_20px_#FF0000,0_0_40px_#FF0000,0_0_60px_#FF0000,0_0_80px_#FF0000]'
                : project.id === 'smart-student'
                  ? 'text-white group-hover:text-white group-hover:[text-shadow:0_0_10px_#00ff5b,0_0_20px_#00ff5b,0_0_40px_#00ff5b,0_0_60px_#00ff5b,0_0_80px_#00ff5b]'
                  : project.id === 'gaming-platform'
                    ? 'text-white group-hover:text-white group-hover:[text-shadow:0_0_10px_#FFD700,0_0_20px_#FFD700,0_0_40px_#FFD700,0_0_60px_#FFD700,0_0_80px_#FFD700]'
                    : project.id === 'ai-brain'
                      ? 'text-white group-hover:text-white group-hover:[text-shadow:0_0_10px_#26CCC2,0_0_20px_#26CCC2,0_0_40px_#26CCC2,0_0_60px_#26CCC2,0_0_80px_#26CCC2]'
                      : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50'
                }`}>
                {project.title}
              </h3>

              <p className="text-white/60 text-lg leading-relaxed font-light mb-10 max-w-xl">
                {project.description}
              </p>

              <div className="mt-auto">
                <a
                  href={project.link || "#"}
                  target={project.link ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/btn cursor-pointer"
                >
                  <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover/btn:rotate-[-45deg] transition-transform duration-300">
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-mono uppercase tracking-widest text-white group-hover/btn:translate-x-2 transition-transform duration-300">
                    View Case Study
                  </span>
                </a>
              </div>

              <div className="absolute top-10 right-10 text-white/20 font-mono text-xl hidden lg:block">
                0{index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;