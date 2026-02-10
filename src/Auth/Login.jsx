import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from "axios";
import bg from "../assets/loginbackend.jpeg"; // Your background image

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setError("");
    setIsLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.VITE_LOGIN_API,
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success === true) {
        localStorage.setItem("token", res.data.token);
        navigate("/allproducts");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bg})` }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600 italic">"Welcome back, we’ve missed your glow!"</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm"
              >
                <AlertCircle size={18} />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 outline-none rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 outline-none rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-900 hover:bg-red-700 text-white py-3 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Sign In
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 space-y-4">
          <p className="text-center text-sm text-gray-600">
            New to Aurora?{" "}
            <Link to="/register" className="text-blue-900 font-bold hover:underline">
              Sign up for free
            </Link>
          </p>

          <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-100">
            <Link to="#" className="text-gray-400 hover:text-red-600">Forgot password?</Link>
            <Link to="/" className="text-gray-400 hover:text-gray-900 flex items-center gap-1">
              Back to home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;