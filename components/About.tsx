import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Icons } from './TechIcons';

const About: React.FC = () => {
  return (
    <section className="py-40 px-6 lg:px-20 bg-white text-black min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Content - Left Side */}
        <div className="space-y-12 order-1 lg:order-1">
          <h2 className="text-[6vw] font-syne font-bold leading-none uppercase">About <br /> The Vision</h2>
          <p className="text-2xl lg:text-3xl leading-snug font-medium max-w-xl">
            {PERSONAL_INFO.summary}
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h4 className="text-xs uppercase font-mono text-black/40 mb-2">Focus</h4>
              <p className="font-medium">User Centricity<br />Performance Optimization<br />Motion Design</p>
            </div>
            <div>
              <h4 className="text-xs uppercase font-mono text-black/40 mb-2">Status</h4>
              <p className="font-medium">Available for<br />Creative Collaborations<br />2026 — Present</p>
            </div>
          </div>
        </div>

        {/* Portrait Image - Right Side */}
        <div className="order-2 lg:order-2">
          <div className="relative w-full max-w-md mx-auto">
            <img
              src="/portrait.png"
              alt="Mallikarjuna Mudhol Portrait"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TooltipIcon: React.FC<{ icon: React.FC<{ className?: string }>, name: string }> = ({ icon: Icon, name }) => {
  return (
    <div className="group relative flex items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer aspect-square">
      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white/70 group-hover:text-white transition-colors" />

      <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 px-3 py-1 bg-white text-black text-xs font-bold rounded-lg whitespace-nowrap pointer-events-none">
        {name}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
      </div>
    </div>
  )
}

export default About;
