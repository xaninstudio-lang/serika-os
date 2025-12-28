import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Gallery', 'Reactions', 'Integration', 'Companion', ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>
        {`
          @keyframes aura-pulse {
            0% { text-shadow: 0 0 10px rgba(220, 38, 38, 0.4); }
            50% { text-shadow: 0 0 25px rgba(220, 38, 38, 0.8), 0 0 10px rgba(220, 38, 38, 0.4); }
            100% { text-shadow: 0 0 10px rgba(220, 38, 38, 0.4); }
          }
          .aura-text {
            animation: aura-pulse 3s infinite ease-in-out;
          }
        `}
      </style>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'py-4 backdrop-blur-xl bg-black/60 border-b border-red-900/20' 
          : 'py-10 bg-transparent'
      }`}>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center relative z-10">
          
          {/* Logo: XK - ALWAYS VISIBLE */}
          <button 
            onClick={scrollToTop}
            className="text-xl font-light tracking-[0.5em] text-white/80 hover:text-red-500 transition-all duration-500 cursor-pointer"
          >
            XK
          </button>

          {/* Navigation Items - HIDDEN ON MOBILE (hidden), VISIBLE ON DESKTOP (md:flex) */}
          <div className="hidden md:flex gap-10 items-center">
            
            {/* XAN: Aura Farmer */}
            <div className="relative group">
              <button 
                onClick={scrollToTop}
                className="aura-text text-[14px] font-semibold uppercase tracking-[0.6em] text-red-600 cursor-pointer pr-6 border-r border-white/10 transition-all duration-500 hover:text-white"
              >
                XAN
              </button>
              <span className="absolute bottom-[-8px] left-0 w-0 h-[1px] bg-red-600 transition-all duration-500 group-hover:w-[calc(100%-1.5rem)]" />
            </div>

            {/* OTHER ITEMS */}
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative text-[9px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all duration-300 py-1"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;