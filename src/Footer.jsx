import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030303] py-28 px-8 md:px-20 border-t border-white/[0.02] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-red-950/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16">
        
        {/* Left: Linear Branding Block */}
        <div className="space-y-8">
          <button 
          onClick={scrollToTop}
           className="group flex flex-col items-start transition-all duration-500"
          >             
        <div className="flex items-center gap-6">
         <motion.img 
         src="/S-.png" 
         alt="Serika Mark" 
         className="h-12 md:h-16 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0"
         animate={{ opacity: [0.4, 0.7, 0.4] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         />

    {/* XK + Serika_OS */}
    <div className="flex items-baseline gap-2">
      <span className="text-3xl md:text-5xl font-serif text-white italic tracking-tight group-hover:text-red-600 transition-colors duration-700 leading-none">
        XK
      </span>

      <span className="text-[11px] md:text-[12px] uppercase font-light tracking-[0.45em] text-white/45 group-hover:text-red-500/60 transition-colors duration-700">
  Serika_OS
</span>

    </div>
  </div>
</button>

          
          <p className="text-[12px] text-white/30 tracking-widest leading-loose max-w-sm ml-1">
            Designed for high-performance aesthetics. <br />
            Built for the vision of Xanin Kaizo.
          </p>
        </div>

        {/* Right: Metadata & Exit */}
        <div className="text-right space-y-6">
          <div className="flex gap-10 justify-end">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.6em]">2025 Archive</span>
            <span className="text-[10px] text-white/20 uppercase tracking-[0.6em]">All Rights Reserved</span>
          </div>
          
          <motion.div 
            whileHover={{ x: -10 }}
            className="group cursor-pointer flex items-center justify-end gap-6"
            onClick={scrollToTop}
          >
            <span className="text-[11px] text-red-600 uppercase tracking-[1.2em] font-bold group-hover:text-white transition-all duration-500">
              Back to Start
            </span>
            <div className="h-[2px] w-12 bg-red-600 group-hover:w-20 transition-all duration-700 shadow-[0_0_15px_rgba(220,38,38,0.6)]" />
          </motion.div>
        </div>
      </div>

      {/* Experimental Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-white/10 uppercase tracking-[1em]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
          <span>Status: Operational</span>
        </div>
        <span className="hidden lg:block">Location: Hemayetpur, Dhaka // Digital Space</span>
        <span>Version: 1.0.4</span>
      </div>
    </footer>
  );
};

export default Footer;