import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-[#070710] text-gray-100 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <ToastContainer position="bottom-right" theme="dark" />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/pricing" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
