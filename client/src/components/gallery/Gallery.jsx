import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    gradient: 'from-[#4F00B8] to-[#9200EA]',
    icon: '🐉',
    name: 'Cosmic Dragon',
    genre: 'Fantasy',
    delay: 0.1
  },
  {
    gradient: 'from-[#006A6A] to-[#123E8A]',
    icon: '🏢',
    name: 'Neon City',
    genre: 'Cyberpunk',
    delay: 0.2
  },
  {
    gradient: 'from-[#800060] to-[#510080]',
    icon: '🌌',
    name: 'Dreamscape',
    genre: 'Surreal',
    delay: 0.3
  },
  {
    gradient: 'from-[#1a1a2e] to-[#16213e]',
    icon: '🤖',
    name: 'Iron Titan',
    genre: 'Sci-Fi',
    delay: 0.4
  },
  {
    gradient: 'from-[#0f3443] to-[#34e89e]',
    icon: '🌿',
    name: 'Elven Forest',
    genre: 'Fantasy',
    delay: 0.5
  },
  {
    gradient: 'from-[#8E2DE2] to-[#4A00E0]',
    icon: '✨',
    name: 'Astral City',
    genre: 'Concept Art',
    delay: 0.6
  }
];

const Gallery = () => {
  const tokens = useMemo(() => {
    return [...Array(5)].map(() => ({
      top: `${Math.random() * 80 + 10}%`,
      width: `${Math.random() * 20 + 20}px`,
      height: `${Math.random() * 20 + 20}px`,
      durationX: 15 + Math.random() * 15,
      delayX: Math.random() * 10,
      durationY: 4 + Math.random() * 3,
    }));
  }, []);

  return (
    <div id="gallery" className="relative py-24">
      {/* Floating Glowing Tokens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {tokens.map((token, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] opacity-40 shadow-[0_0_30px_10px_rgba(168,85,247,0.6)] blur-[6px]"
            initial={{
              left: "-10%",
              top: token.top,
              width: token.width,
              height: token.height,
            }}
            animate={{
              left: "110%",
              y: [0, -50, 50, 0],
            }}
            transition={{
              left: {
                duration: token.durationX,
                repeat: Infinity,
                ease: "linear",
                delay: token.delayX,
              },
              y: {
                duration: token.durationY,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          />
        ))}
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Created by <span className="gradient-text">AVIOR AI</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Explore what's possible with AI-powered image generation
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ 
              opacity: { duration: 0.5, delay: item.delay },
              scale: { duration: 0.5, delay: item.delay },
              type: "spring", stiffness: 300, damping: 20 
            }}
            className={`relative group h-[300px] rounded-[30px] overflow-hidden bg-gradient-to-br ${item.gradient} cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] border border-transparent hover:border-purple-400/60 transition-[border,box-shadow] duration-300 flex items-center justify-center`}
          >
            {/* Background brightening overlay */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
            
            {/* The Tiny Image representation in the center */}
            <div 
              className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-3xl shadow-xl z-10 transition-transform duration-300 group-hover:-translate-y-8"
            >
              {item.icon}
            </div>

            {/* Revealing text on hover */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center justify-end opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10 pointer-events-none">
              <h3 className="text-xl font-bold text-white tracking-wide">{item.name}</h3>
              <p className="text-sm text-purple-200 mt-1 font-semibold">{item.genre}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
