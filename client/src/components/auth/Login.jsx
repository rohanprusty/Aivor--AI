import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { X, Mail, Lock, User } from "lucide-react";

const Login = () => {
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const [state, setState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          toast.success("Login successful");
        } else {  
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          toast.success("Registration successful");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/60 flex justify-center items-center p-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#0f0f16] border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.2)] p-10 rounded-3xl w-full max-w-md text-gray-300 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20"></div>

        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors z-10 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10">
          <h1 className="text-center text-white text-3xl font-display font-bold mb-2">
            {state === "Login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-center text-gray-400 mb-8">
            {state === "Login" ? "Sign in to continue your creative journey" : "Join us to start creating amazing AI art"}
          </p>

          <div className="space-y-4">
            {state !== "Login" && (
              <div className="bg-white/5 border border-white/10 px-5 py-3 flex items-center gap-3 rounded-xl focus-within:border-purple-500 focus-within:bg-white/10 transition-colors">
                <User className="w-5 h-5 text-gray-400" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
            )}

            <div className="bg-white/5 border border-white/10 px-5 py-3 flex items-center gap-3 rounded-xl focus-within:border-purple-500 focus-within:bg-white/10 transition-colors">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="bg-white/5 border border-white/10 px-5 py-3 flex items-center gap-3 rounded-xl focus-within:border-purple-500 focus-within:bg-white/10 transition-colors">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div className="flex justify-between items-center my-4">
            <p className="text-sm text-purple-400 hover:text-purple-300 cursor-pointer transition-colors">
              Forgot password?
            </p>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)] mt-4">
            {state === "Login" ? "Sign In" : "Sign Up"}
          </button>

          <p className="mt-8 text-center text-sm text-gray-400">
            {state === "Login" ? "Don't have an account? " : "Already have an account? "}
            <span
              onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}
              className="text-purple-400 hover:text-purple-300 font-medium cursor-pointer transition-colors"
            >
              {state === "Login" ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </motion.form>
    </div>
  );
};

export default Login;
