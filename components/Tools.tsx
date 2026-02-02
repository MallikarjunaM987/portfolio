
import React, { useRef, useEffect } from 'react';
import { Icons } from './TechIcons';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Tools: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the connecting line to draw itself
            // Increased strokeDasharray to 4000 to ensure it covers the full path length
            gsap.fromTo(pathRef.current,
                { strokeDasharray: 4000, strokeDashoffset: 4000 },
                {
                    strokeDashoffset: 0,
                    duration: 2.5,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        end: "bottom bottom",
                        scrub: 1.5
                    }
                }
            );

            // Animate circles popping in
            gsap.from(".tool-node", {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center+=100",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const tools = [
        { icon: Icons.React, name: "React" },
        { icon: Icons.Next, name: "Next.js" },
        { icon: Icons.TypeScript, name: "TypeScript" },
        { icon: Icons.Tailwind, name: "Tailwind" },
        { icon: Icons.GSAP, name: "GSAP" },
        // Row 2
        { icon: Icons.Framer, name: "Framer" },
        { icon: Icons.Firebase, name: "Firebase" },
        { icon: Icons.Python, name: "Python" },
        { icon: Icons.Design, name: "Figma" },
        { icon: Icons.Accessibility, name: "A11y" },
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 lg:px-20 bg-[#0a0a0a] relative overflow-hidden min-h-screen flex flex-col items-center">

            <div className="flex items-center gap-6 mb-24 relative z-10">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <span className="font-bebas text-xl text-white">MM</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-syne font-bold text-white uppercase tracking-tight">
                    Tools I Use
                </h2>
            </div>

            <div className="relative w-full max-w-5xl mx-auto">
                {/* 
                    SVG Path Layer 
                    1200 width. 
                    Grid Cols centers: 120, 360, 600, 840, 1080.
                */}
                <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0 hidden lg:block">
                    <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path
                            ref={pathRef}
                            d="M 120 100 
                               L 1080 100 
                               C 1180 100, 1180 350, 1080 350 
                               L 120 350"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        {/* 
                           Path Logic:
                           Row 1: 120 (React) -> 1080 (GSAP)
                           Curve: Righthand turn down
                           Row 2: 1080 (A11y?) No, Row 2 is LTR in grid, but snake path is R->L.
                                  So 1080 is Rightmost item (A11y).
                                  120 is Leftmost item (Framer).
                                  Path goes 1080 -> 120.
                        */}
                    </svg>
                </div>

                {/* Nodes Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-y-24 gap-x-12 relative z-10 w-full">
                    {tools.map((tool, index) => (
                        <div
                            key={tool.name}
                            className="tool-node flex flex-col items-center justify-center gap-4 relative"
                        >
                            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#111] border border-white/10 flex items-center justify-center relative group hover:border-[#9929EA] transition-colors duration-300 shadow-2xl shadow-black/50">
                                <div className="absolute inset-0 bg-[#9929EA]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                <tool.icon className="w-12 h-12 text-white/60 group-hover:text-[#9929EA] transition-colors relative z-10" />
                            </div>
                            <span className="text-sm font-mono uppercase tracking-widest text-white/50">{tool.name}</span>
                        </div>
                    ))}
                </div>

                {/* Mobile Path (Vertical) - Hidden on desktop */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/10 lg:hidden -z-10"></div>
            </div>
        </section>
    );
};

export default Tools;
