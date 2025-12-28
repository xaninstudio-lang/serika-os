import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen w-full bg-[#030303] py-40 px-8 md:px-20 overflow-hidden">
      
      {/* Background Red Glow */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[600px] bg-red-950/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-red-600" />
            <h2 className="text-[10px] tracking-[1em] text-red-600 uppercase font-bold">
              Character Profile // 02
            </h2>
          </div>

          <div className="mb-14">
            <h3 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">
              Playful Energy,
            </h3>
            <h3 className="text-4xl md:text-6xl font-serif text-white/20 uppercase tracking-widest">
              Dominant Presence.
            </h3>
          </div>

          <p className="text-[13px] leading-[2] text-white/40 max-w-lg mb-12 tracking-wide font-sans">
            Xan-Serika is more than a mascot; she operates at the core of this digital space 
            as a virtual assistant for <span className="text-white/80">Xanin Kaizo</span>, 
            blending modern aesthetics with confident, creative energy. At 20, she moves 
            effortlessly between <span className="text-red-500/50 italic">chaos and support.</span>
          </p>

          <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/5">
            <div>
              <span className="text-[9px] text-red-600 uppercase tracking-widest block mb-2">Aura</span>
              <p className="text-xs text-white/80 uppercase tracking-widest">Teasing / Elegant</p>
            </div>
            <div>
              <span className="text-[9px] text-red-600 uppercase tracking-widest block mb-2">Instinct</span>
              <p className="text-xs text-white/80 uppercase tracking-widest">Designer / Model</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: THE IMAGE (482x984) WITH RED AURA BORDER */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative flex justify-center lg:justify-end pr-10"
        >
          {/* THE RED AURA BORDER */}
          <div className="relative p-[1px] bg-red-900/20 shadow-[0_0_40px_rgba(153,27,27,0.2)]">
            <div className="absolute inset-0 border border-red-600/30 scale-105 pointer-events-none" />
            
            {/* IMAGE CONTAINER */}
            <div 
              className="relative bg-[#050505] overflow-hidden"
              style={{ 
                width: '380px', 
                height: '775px', // Maintaining the 482x984 ratio visually
              }}
            >
              <img 
                src="/about.png" 
                alt="Serika"
                className="w-full h-full object-contain" // FIXED: No more zoom, shows full image
              />

              {/* Text: XAN-Serika (Bottom Side) */}
              <div className="absolute bottom-4 left-6">
                 <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-sans">
                  XAN-Serika
                </span>
              </div>
            </div>

            {/* Text: XAN-Serika (Left Vertical Side) */}
            <div className="absolute -left-12 top-1/2 -rotate-90 origin-center">
              <span className="text-[10px] tracking-[1em] text-red-600 uppercase font-bold whitespace-nowrap opacity-60">
                XAN-Serika
              </span>
            </div>
          </div>

          {/* Luxury Corner Decal */}
          <div className="absolute -top-6 -right-6 w-16 h-16 border-t border-r border-red-600/40" />
        </motion.div>

      </div>
    </section>
  );
};

export default About;