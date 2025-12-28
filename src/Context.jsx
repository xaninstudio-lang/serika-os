import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Context = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const capabilities = [
    {
      title: "Interface Intuition",
      desc: "Directly interfacing with neural digital layers to predict and execute design workflows.",
      // Mapping to the holographic screen she is touching
      coords: { top: '30%', left: '15%' }
    },
    {
      title: "Creative Optimization",
      desc: "Refining visual aesthetics through real-time adjustment of ambient aura and UI logic.",
      // Mapping to her gaze/expression
      coords: { top: '22%', left: '48%' }
    },
    {
      title: "Digital Custodian",
      desc: "Managing the background environment and workspace parameters for Xanin Kaizo.",
      // Mapping to the background office screens
      coords: { top: '30%', left: '75%' }
    },
    {
      title: "Aura Calibration",
      desc: "Balancing playful mischief with professional support to maintain site equilibrium.",
      // Mapping to her core/outfit center
      coords: { top: '50%', left: '45%' }
    }
  ];

  return (
    <section id="companion" className="relative min-h-screen w-full bg-[#030303] py-40 px-8 md:px-20 overflow-hidden">
      
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] tracking-[1.5em] text-red-600 uppercase font-bold mb-4">Context // Dossier // 06</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white italic">Operational Role</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: CAPABILITY SELECTOR */}
          <div className="space-y-10 z-10 order-2 lg:order-1">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group cursor-crosshair border-l border-white/5 pl-8 py-2 hover:border-red-600/50 transition-colors duration-500"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className={`text-[9px] font-mono transition-colors duration-500 ${hoveredIndex === index ? 'text-red-500' : 'text-white/20'}`}>
                    ID_{index + 1}
                  </span>
                  <h4 className={`text-xl md:text-2xl font-serif italic transition-all duration-500 ${hoveredIndex === index ? 'text-white translate-x-3' : 'text-white/30'}`}>
                    {item.title}
                  </h4>
                </div>
                <p className={`text-[13px] leading-relaxed max-w-sm transition-all duration-700 ${hoveredIndex === index ? 'text-white/60' : 'text-white/0 opacity-0 h-0 overflow-hidden'}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: THE INTERACTIVE SCANNER (USING CONTEXT.JPG) */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[480px] aspect-[4/5] bg-[#050505] p-2 border border-white/5">
              
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src="/context.jpg" 
                  alt="Serika Interface" 
                  className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out ${hoveredIndex !== null ? 'opacity-30 grayscale-[0.5]' : 'opacity-80'}`}
                />
              </div>

              {/* DYNAMIC TARGETING UI */}
              <AnimatePresence>
                {hoveredIndex !== null && (
                  <>
                    {/* Floating Target Bracket */}
                    <motion.div
                      initial={{ opacity: 0, scale: 3 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      style={{ 
                        top: capabilities[hoveredIndex].coords.top, 
                        left: capabilities[hoveredIndex].coords.left 
                      }}
                      className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 z-30"
                    >
                      {/* Corner Brackets */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-600" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-600" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-600" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-600" />
                      
                      {/* Inner Pulse */}
                      <div className="absolute inset-0 bg-red-600/10 animate-pulse" />
                    </motion.div>

                    {/* Laser Horizontal Line */}
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      className="absolute h-[1px] bg-red-600/30 z-20 pointer-events-none"
                      style={{ top: capabilities[hoveredIndex].coords.top }}
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Technical Status Overlay */}
              <div className="absolute bottom-6 left-6 z-30 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                  <span className="text-[8px] text-white/40 tracking-[0.3em] font-mono uppercase">Live_Sync_Active</span>
                </div>
                <span className="text-[8px] text-white/20 tracking-[0.3em] font-mono uppercase ml-4">Unit: XAN-Serika // Ver. 1.0.4</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Context;