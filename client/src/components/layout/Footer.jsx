import React from 'react';
import { Instagram, Linkedin, Star, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20 bg-black/40 backdrop-blur-md pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Star fill="white" className="text-white w-full h-full" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide text-white">AVIOR AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering creators with cutting-edge AI technology to transform imagination into stunning visuals.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#gallery" className="hover:text-purple-400 transition-colors">Gallery</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/r_o_h_a_n_prusty/?hl=en" className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rohan-prusty-7b9485311/" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-500 hover:scale-110 transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-full">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">© 2026 AVIOR AI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-sm text-gray-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
