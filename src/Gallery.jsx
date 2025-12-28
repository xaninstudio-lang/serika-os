import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { id: 1, src: '/gallery-1.png', span: 'col-span-1 row-span-2', label: 'Midnight Gala' },
    { id: 2, src: '/gallery-2.png', span: 'col-span-1 row-span-1', label: 'City Sentinel' },
    { id: 3, src: '/gallery-3.png', span: 'col-span-1 row-span-1', label: 'Azure Horizon' },
    { id: 4, src: '/gallery-4.png', span: 'col-span-1 row-span-2', label: 'Shadow Blade' },
    { id: 5, src: '/gallery-5.png', span: 'col-span-1 row-span-1', label: 'Sweet Moment' },
    { id: 6, src: '/gallery-6.png', span: 'col-span-1 row-span-1', label: 'Al Fresco Afternoons' },
    { id: 7, src: '/gallery-7.png', span: 'md:col-span-2 lg:col-span-1 row-span-1', label: 'Chibi Cheer' }, // The new anchor
  ];

  return (
    <section id="gallery" className="relative min-h-screen w-full bg-[#030303] py-40 px-8 md:px-20 overflow-hidden border-t border-white/[0.02]">
      
      {/* Background Element */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/10 to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-24 text-center md:text-left">
        <div className="flex items-center gap-6 mb-6 justify-center md:justify-start">
          <div className="h-[1px] w-12 bg-red-600" />
          <span className="text-[10px] tracking-[1.2em] text-red-600 uppercase font-bold">Archive // 03</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">
          Moments<span className="text-white/20 not-italic uppercase font-sans text-4xl md:text-5xl tracking-[0.2em] ml-4">& Memories</span>
        </h2>
      </div>

      {/* Staggered Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[320px]">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative group overflow-hidden bg-[#0a0a0a] ${img.span}`}
          >
            {/* Red Aura Border */}
            <div className="absolute inset-0 border border-red-600/0 group-hover:border-red-600/40 transition-all duration-700 z-20 pointer-events-none shadow-[inset_0_0_50px_rgba(220,38,38,0)] group-hover:shadow-[inset_0_0_50px_rgba(220,38,38,0.15)]" />
            
            {/* Image */}
            <img 
              src={img.src} 
              alt={img.label}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] ease-out scale-100 group-hover:scale-110"
            />

            {/* Hover Data Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
              <div className="absolute bottom-8 left-8 overflow-hidden">
                <motion.p 
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  className="text-[9px] tracking-[0.6em] text-red-500 uppercase mb-2 font-bold"
                >
                  Index_0{img.id}
                </motion.p>
                <motion.h4 
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  className="text-2xl font-serif text-white italic"
                >
                  {img.label}
                </motion.h4>
              </div>
            </div>

            {/* Aesthetic Corner Decal */}
            <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="w-6 h-6 border-t border-r border-red-600/60" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Watermark */}
      <div className="absolute -bottom-20 left-10 pointer-events-none opacity-[0.03]">
        <h2 className="text-[15rem] font-serif italic text-white leading-none">Serika</h2>
      </div>
    </section>
  );
};

export default Gallery;