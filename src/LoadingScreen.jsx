import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [status, setStatus] = useState("INITIALIZING");
  
  useEffect(() => {
    const sequence = [
      { time: 800, text: "ESTABLISHING NEURAL LINK" },
      { time: 1600, text: "CALIBRATING AURA_FLUX" },
      { time: 2400, text: "SYNCHRONIZING WITH KAIZO" },
      { time: 3200, text: "SYSTEM OPERATIONAL" }
    ];

    sequence.forEach((step) => {
      setTimeout(() => setStatus(step.text), step.time);
    });

    setTimeout(onComplete, 4000);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ 
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.1
      }}
      transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 z-[10000] bg-[#030303] flex items-center justify-center overflow-hidden"
    >
      {/* Background: Shimmering Red Void */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.12, 0.05],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/10 rounded-full blur-[140px]"
        />
      </div>

      {/* The Central Mark: Kinetic Scanner */}
      <div className="relative flex items-center justify-center">
        {/* Floating Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.3, 0], 
              scale: [0.8, 1.5, 0.8],
              rotate: i * 45 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut" 
            }}
            className="absolute border border-red-500/30 rounded-full"
            style={{ width: 100 + i * 50, height: 100 + i * 50 }}
          />
        ))}

        {/* The Core Image */}
        <motion.div
          animate={{ 
            opacity: [0.4, 1, 0.4],
            filter: ["drop-shadow(0 0 0px #ff000000)", "drop-shadow(0 0 15px #ff000066)", "drop-shadow(0 0 0px #ff000000)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative z-10"
        >
          <img 
            src="/S-.png" 
            alt="Logo" 
            className="h-16 w-auto brightness-200 grayscale contrast-125"
          />
        </motion.div>
      </div>

      {/* The Status Text: Glitch Aesthetic */}
      <div className="absolute bottom-20 flex flex-col items-center">
        <motion.div 
          key={status}
          initial={{ opacity: 0, letterSpacing: "1em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          exit={{ opacity: 0 }}
          className="text-[9px] md:text-[11px] font-mono text-red-500 tracking-[0.5em] uppercase font-bold text-center"
        >
          {status}
        </motion.div>
        
        {/* Sub-Metadata */}
        <div className="mt-4 flex gap-8 items-center opacity-20">
          <div className="h-[1px] w-12 bg-white" />
          <span className="text-[7px] font-mono text-white tracking-[0.8em]">SERIKA_OS_V1.0.4</span>
          <div className="h-[1px] w-12 bg-white" />
        </div>
      </div>

      {/* Random Data Bursts (Corner Aura) */}
      <div className="absolute top-10 right-10 text-right opacity-10 font-mono text-[8px] tracking-widest leading-loose">
        [ CORE_TEMP: 32C ]<br/>
        [ LINK_STRENGTH: OPTIMAL ]<br/>
        [ KAIZO_DETECTED ]
      </div>
    </motion.div>
  );
};

export default LoadingScreen;