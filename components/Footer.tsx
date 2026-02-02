
import React from 'react';
import MagneticButton from './MagneticButton';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 lg:px-20 bg-[#0a0a0a] text-white border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-bebas text-4xl">MM Portfolio &copy; 2026</div>

        <div className="text-white/30 text-xs font-mono">
          Designed with Passion by Mallikarjuna
        </div>
      </div>
    </footer>
  );
};

export default Footer;
