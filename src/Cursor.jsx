import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-Speed Spring Configuration
  // Stiffness at 250 = Instant reaction
  // Damping at 50 = Zero "jiggle", just pure precision
  const springConfig = { damping: 50, stiffness: 250, restDelta: 0.001 };
  
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        left: -200, // Balanced for a larger glow
        top: -200,
      }}
      className="fixed w-[400px] h-[400px] pointer-events-none z-[9999] opacity-30 md:opacity-50"
    >
      {/* The Red Aura Light */}
      <div className="w-full h-full bg-red-600/15 rounded-full blur-[100px]" />
      
      {/* The Precision Core - A tiny dot to show exactly where you aim */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-red-500 rounded-full shadow-[0_0_15px_2px_rgba(220,38,38,0.8)]" />
    </motion.div>
  );
};

export default Cursor;