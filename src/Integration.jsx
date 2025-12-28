import React from 'react';
import { motion } from 'framer-motion';

const Integration = () => {
  const tools = [
    { name: "Neural Link", val: "STABLE", color: "bg-red-500" },
    { name: "Visual Engine", val: "ACTIVE", color: "bg-white" },
    { name: "Logic Gate", val: "SYNCED", color: "bg-red-900" },
    { name: "Aura Buffer", val: "CALM", color: "bg-red-600" }
  ];

  return (
    <section id="integration" className="relative min-h-screen w-full bg-[#030303] flex items-center justify-center py-40 overflow-hidden">
      
      {/* BACKGROUND EFFECTS: AURA FARMING */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-8 md:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT: TEXT & DATA */}
        <div className="space-y-12">
          <div>
            <h2 className="text-[10px] tracking-[1.5em] text-red-600 uppercase font-bold mb-4">Neural Synapse // 05</h2>
            <h3 className="text-6xl md:text-8xl font-serif text-white italic leading-none">Aura <br/> Integration</h3>
          </div>

          <div className="space-y-6 max-w-sm">
            {tools.map((tool, i) => (
              <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2 group cursor-none">
                <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] group-hover:text-red-500 transition-colors duration-500">{tool.name}</span>
                <span className="text-xs font-mono text-white/60 tracking-tighter italic">{tool.val}</span>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-white/30 font-light leading-relaxed tracking-wide italic">
            "Architecture is nothing without atmosphere. I ensure every node in your ecosystem vibrates at the exact frequency of Xan-Serika."
          </p>
        </div>

        {/* RIGHT: THE "AURA CORE" MOTION COMPONENT */}
        <div className="relative flex items-center justify-center">
          {/* Rotating Rings */}
          {[1, 2, 3].map((ring, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 10 + (i * 5), repeat: Infinity, ease: "linear" }}
              className="absolute border border-white/[0.03] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]"
              style={{ width: 200 + (i * 100), height: 200 + (i * 100) }}
            />
          ))}

          {/* Central Pulsing Core */}
          <motion.div 
            animate={{ 
              boxShadow: ["0 0 40px rgba(220,38,38,0.2)", "0 0 80px rgba(220,38,38,0.5)", "0 0 40px rgba(220,38,38,0.2)"],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-40 h-40 bg-[#080808] border border-red-600/30 rounded-full flex items-center justify-center relative z-20 group"
          >
            <div className="w-12 h-12 border border-red-600/50 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-red-600/5 rounded-full animate-ping" />
          </motion.div>

          {/* Floating Data Bits */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-0 right-1/4 text-[8px] font-mono text-red-500 tracking-widest"
          >
            DATA_STREAM: SUCCESS
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Integration;