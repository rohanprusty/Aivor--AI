import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import Astronaut from "./Astronaut";
import PlaneAnimation from "./PlaneAnimation";
import BackgroundAnimation from "../layout/BackgroundAnimation";

const Hero = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const handleGenerate = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className="relative pt-10 pb-20 sm:pt-20 sm:pb-24 lg:pb-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-screen">

      <BackgroundAnimation />
      <Astronaut />
      <PlaneAnimation />

      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 relative z-10 w-full">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-lg mb-8 shadow-lg shadow-purple-500/10"
        >
          <div className="flex items-center gap-1 text-xs font-semibold tracking-wide text-purple-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            ✨ Powered by Advanced AI — Now Live
          </div>
        </motion.div>

        {/* Main Heading Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Turn imagination into <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">images</span> with AI
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed font-sans"
        >
          Generate stunning AI visuals in seconds using <span className="text-white font-medium">AVIOR AI</span>. Just describe your vision and watch it come to life.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20 w-full sm:w-auto"
        >
          <button
            onClick={handleGenerate}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.6)] group"
          >
            Generate Images <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 group backdrop-blur-sm shadow-xl"
          >
            Explore Gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-20 text-center mx-auto"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">10M+</h3>
            <p className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wider">Images Generated</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">500K+</h3>
            <p className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wider">Active Users</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">99.9%</h3>
            <p className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wider">Uptime</p>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;