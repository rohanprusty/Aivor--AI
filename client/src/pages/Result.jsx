import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import BackgroundAnimation from "../components/layout/BackgroundAnimation";
import { Sparkles, Download, RefreshCw } from "lucide-react";

const Result = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(assets.sample_img_1);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const resultImage = await generateImage(input);
      if (resultImage) {
        setIsImageLoaded(true);
        setImage(resultImage);
      }
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-[90vh] text-gray-100 font-sans mt-20 pb-20 overflow-hidden flex flex-col justify-center items-center">
      <BackgroundAnimation />
      
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl px-4 flex flex-col z-10"
      >
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            AI <span className="gradient-text">Generation</span> Studio
          </h1>
          <p className="text-gray-400">Describe the artwork you want to create.</p>
        </div>

        {/* Display Area */}
        <div className="relative w-full aspect-square max-w-md mx-auto group glass-panel rounded-3xl p-4 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)] bg-white/[0.03]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-black/50 flex items-center justify-center">
            {image ? (
              <img className="object-cover w-full h-full" src={image} alt="Generated AI artwork" />
            ) : (
              <p className="text-gray-500 font-medium">Your image will appear here</p>
            )}
            
            {loading && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Loading progress bar indicator */}
            <span
              className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 ${
                loading ? "w-full transition-all duration-[10s] ease-linear" : "w-0"
              }`}
            ></span>
          </div>
        </div>
        
        {loading && (
          <p className="text-center mt-4 text-purple-400 animate-pulse font-medium text-sm">
            AI is creating your masterpiece...
          </p>
        )}

        {/* Action Controls */}
        <div className="mt-10 mx-auto w-full">
          {!isImageLoaded ? (
            <div className="flex bg-white/[0.05] border border-white/10 text-white text-sm p-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                disabled={loading}
                placeholder="Describe what you want to generate"
                className="flex-1 bg-transparent px-6 py-2 outline-none text-gray-200 placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={loading || !input}
                className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.4)] disabled:opacity-50"
              >
                Generate <Sparkles className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm p-2 mt-4">
              <button
                onClick={() => {
                  setIsImageLoaded(false);
                  setInput('');
                }}
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-medium transition-all backdrop-blur-sm"
              >
                <RefreshCw className="w-4 h-4" /> Generate Another
              </button>
              <a
                href={image}
                download
                className="flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-10 py-3.5 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                <Download className="w-4 h-4" /> Download Result
              </a>
            </div>
          )}
        </div>
      </motion.form>
    </div>
  );
};

export default Result;
