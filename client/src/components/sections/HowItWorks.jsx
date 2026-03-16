import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Zap, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <PenTool className="text-pink-400 w-6 h-6" />,
    iconBg: 'bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.3)]',
    title: 'Describe Your Vision',
    description: 'Type a phrase, sentence, or paragraph describing the image you want to create. Be as creative as you like.',
  },
  {
    number: '02',
    icon: <Zap className="text-teal-400 w-6 h-6" fill="currentColor" />,
    iconBg: 'bg-teal-500/10 shadow-[0_0_15px_rgba(45,212,191,0.3)]',
    title: 'AI Generates Images',
    description: 'Our advanced AI engine transforms your text into high-quality, unique images in seconds. Pure magic.',
  },
  {
    number: '03',
    icon: <Download className="text-purple-400 w-6 h-6" />,
    iconBg: 'bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    title: 'Download or Share',
    description: 'Instantly download your creation in full resolution or share it directly from our platform with the world.',
  },
];

const HowItWorks = () => {
  return (
    <div id="features" className="py-24 flex flex-col items-center">
      {/* Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm mb-6"
      >
        <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">
          HOW IT WORKS
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-4"
      >
        Three steps to <span className="gradient-text gradient-text-purple">visual magic</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 text-lg mb-16 text-center max-w-2xl"
      >
        Transform words into stunning visuals effortlessly
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="relative glass-panel rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 group overflow-hidden"
          >
            {/* Background Number */}
            <div className="absolute top-6 right-6 text-7xl font-display font-bold text-white/[0.03] select-none group-hover:text-purple-500/[0.05] transition-colors">
              {step.number}
            </div>

            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${step.iconBg}`}>
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-4 tracking-wide z-10 relative">
              {step.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm z-10 relative">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
