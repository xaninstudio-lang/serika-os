import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center bg-[#030303] overflow-hidden px-8 md:px-20">
      
      {/* 1. RED UI MOTION BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Breathing Red Core */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-5%] w-[50%] h-[60%] bg-red-900/30 blur-[150px] rounded-full"
        />
        {/* Floating Secondary Pulse */}
        <motion.div 
          animate={{ 
            y: [0, -50, 0],
            opacity: [0.05, 0.15, 0.05] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[5%] left-[5%] w-[40%] h-[40%] bg-zinc-800/40 blur-[120px] rounded-full"
        />
        <div className="absolute inset-0 bg-grain opacity-[0.04]" />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* 2. LEFT SIDE: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] tracking-[1em] text-red-500 font-sans uppercase mb-10 block font-medium">
            Personal Identity
          </span>
          
          <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-serif text-white uppercase tracking-[0.12em] leading-[0.85] mb-12">
            XAN<span className="text-red-700">—</span><br/>SERIKA
          </h1>
          
          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-red-800" />
            <p className="text-[11px] leading-relaxed text-white/40 uppercase tracking-[0.4em] font-sans italic">
              Playful. Elegant. Dominant.
            </p>
          </div>
        </motion.div>

        {/* 3. RIGHT SIDE: Image with Luxury Border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* THE LUXURY BORDER SYSTEM */}
          <div className="relative p-3 group">
            {/* Outer thin glowing line */}
            <div className="absolute inset-0 border border-white/5 scale-105 group-hover:scale-110 transition-transform duration-700" />
            
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-red-600/50" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-red-600/50" />

            {/* Main Image Container */}
            <div className="relative overflow-hidden border border-white/10 bg-[#0A0A0A]">
               <img 
                src="/hero 1.png" 
                alt="Xan-Serika" 
                className="w-full max-w-[420px] h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Luxury Glass Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-950/10 via-transparent to-white/5 pointer-events-none" />
            </div>
          </div>

          {/* Floating Label for the image */}
          <div className="absolute -right-8 bottom-20 rotate-90 origin-left">
            <span className="text-[9px] tracking-[0.8em] text-white/20 uppercase whitespace-nowrap">
              Auth. Series 01
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;