import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Gallery from './Gallery';
import Reactions from './Reactions';
import Integration from './Integration';
import Context from './Context';
import Footer from './Footer';
import Cursor from './Cursor';
import LoadingScreen from './LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-sans selection:bg-red-600/30 overflow-x-hidden">
      
      {/* 1. Global Effects */}
      <Cursor />

      {/* 2. System Boot Sequence */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          /* 3. Main System Interface */
          <motion.div 
            key="main-interface"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
          >
            <Navbar />
            
            <main>
              {/* Note: Ensure these components have the matching lowercase IDs for the Navbar */}
              <section id="hero">
                <Hero />
              </section>

              <section id="layouts">
                <About />
              </section>

              <section id="experiments">
                <Gallery />
              </section>

              <section id="motion">
                <Reactions />
              </section>

              <section id="integration">
                <Integration />
              </section>

              <section id="companion">
                <Context />
              </section>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;