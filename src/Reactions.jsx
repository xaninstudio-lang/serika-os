import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Reactions = () => {
  const [activeState, setActiveState] = useState(0);
  
  // Parallax Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const states = [
    { id: 0, title: "Neutral", label: "System: Default", dialogue: "Awaiting your command, Xanin. Everything is optimized.", image: "/react-1.png" },
    { id: 1, title: "Mischievous", label: "System: Tease Mode", dialogue: "Are you actually working, or just staring at me again?", image: "/react-2.png" },
    { id: 2, title: "Processing", label: "System: Creative Focus", dialogue: "I've cleared the digital noise. Focus on the vision.", image: "/react-3.png" },
    { id: 3, title: "Idle", label: "System: Rest Mode", dialogue: "Even virtual assistants need a moment of silence.", image: "/react-4.png" }
  ];

  return (
    <section id="reactions" className="relative min-h-screen w-full bg-[#030303] py-40 px-8 md:px-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="lg:col-span-5 space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-[12px] tracking-[1.2em] text-red-600 uppercase font-bold mb-6">Neural Interface // 04</h2>
            <h3 className="text-6xl md:text-8xl font-serif text-white italic leading-none">Emotional Engine</h3>
          </motion.div>

          <div className="flex flex-col gap-8">
            {states.map((state, index) => (
              <button key={state.id} onMouseEnter={() => setActiveState(index)} className="group flex items-center gap-8 text-left">
                <div className={`h-[2px] transition-all duration-700 ${activeState === index ? 'w-16 bg-red-600 shadow-[0_0_20px_rgba(220,38,38,1)]' : 'w-6 bg-white/10'}`} />
                <span className={`text-sm uppercase tracking-[0.5em] transition-all duration-500 ${activeState === index ? 'text-white font-bold' : 'text-white/20'}`}>
                  {state.title}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-16 border-t border-white/5 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeState} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                <span className="text-[10px] text-red-600 tracking-[0.4em] uppercase font-bold">{states[activeState].label}</span>
                <p className="text-2xl md:text-4xl font-serif text-white/80 italic leading-tight">"{states[activeState].dialogue}"</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: THE INTERACTIVE IMAGE WITH THE RED BORDER */}
        <div className="lg:col-span-7 perspective-[1200px]">
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[500px] ml-auto group"
          >
            {/* THE RED AURA BORDER - Reactive & Glowing */}
            <div className="absolute -inset-[3px] rounded-sm bg-red-600 opacity-20 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]" />
            <div className="absolute -inset-[15px] border border-red-600/10 scale-100 group-hover:scale-105 transition-all duration-1000 pointer-events-none" />
            
            {/* Image Container */}
            <div className="relative bg-[#080808] p-[2px] overflow-hidden">
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeState}
                    src={states[activeState].image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-contain z-10"
                  />
                </AnimatePresence>
                
                {/* Vignette & Scanline */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-30 pointer-events-none" />
              </div>
            </div>

            {/* Corner UI Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-red-600 z-40" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-red-600 z-40" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Reactions;