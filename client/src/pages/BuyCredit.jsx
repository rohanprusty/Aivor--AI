import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import Pricing from "../components/pricing/Pricing";
import BackgroundAnimation from "../components/layout/BackgroundAnimation";

const BuyCredit = () => {
  const { user, setShowLogin } = useContext(AppContext);

  return (
    <div className="relative min-h-screen text-gray-100 font-sans mt-20 pb-20 overflow-hidden">
      {/* Absolute Background because BuyCredit is mounted alongside Navbar and Footer */}
      <BackgroundAnimation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="text-center mb-10"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold tracking-widest text-[#a855f7] uppercase">
              SELECT PLAN
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Choose the <span className="gradient-text gradient-text-purple">Right Plan</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Unlock the full potential of AVIOR AI with our premium subscriptions.
          </p>
        </motion.div>
        
        <Pricing />
      </div>
    </div>
  );
};

export default BuyCredit;
