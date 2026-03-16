import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4">
      <nav
        className={`w-full max-w-6xl rounded-full transition-all duration-300 ${
          scrolled ? "bg-black/60 backdrop-blur-md shadow-lg border border-white/10" : "bg-transparent"
        } flex items-center justify-between px-6 py-3`}
      >
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform">
            <Star fill="white" className="text-white w-full h-full" />
          </div>
          <span className="font-display font-bold text-lg tracking-wide hidden sm:block">AVIOR AI</span>
        </Link>

        {/* Center Links (hidden on mobile, can make responsive later) */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white transition-colors cursor-pointer">Features</a>
          <a href="#gallery" className="hover:text-white transition-colors cursor-pointer">Gallery</a>
          <Link to="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</Link>
        </div>

        {/* Right Side Tools */}
        <div>
          {user ? (
            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition"
                onClick={() => navigate("/pricing")}
              >
                <Star size={16} fill="gold" stroke="gold" />
                <p className="text-sm font-medium">
                  Credits: {credit}
                </p>
              </button>
              <p className="text-gray-300 hidden md:block text-sm">Hi, {user.name}</p>
              <div className="relative group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                  {user.name?.[0]?.toUpperCase() || 'U'}
                </div>
                <div className="absolute hidden group-hover:block top-full right-0 pt-2 z-10">
                  <div className="bg-black/90 border border-white/10 rounded-lg shadow-xl overflow-hidden min-w-[120px]">
                    <button onClick={logout} className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowLogin(true)}
                className="px-5 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/pricing")}
                className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-5 py-2 text-sm rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
