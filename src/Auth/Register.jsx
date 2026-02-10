
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from "axios";
import bg from "../assets/registerbg.jpeg"; // Your register background image

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrmsg("");
    setIsLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.VITE_REGISTER_API,
        {
          name: username,
          email: email,
          password: password,
        }
      );

      if (res.data.success === true) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setErrmsg("Registration failed. Please try again.");
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Craft Your Glow</h1>
          <p className="text-gray-600 italic">"Join our community and save lives"</p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          <AnimatePresence>
            {errmsg && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm"
              >
                <AlertCircle size={18} />
                {errmsg}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 outline-none rounded-xl focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 outline-none rounded-xl focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 outline-none rounded-xl focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-xl font-bold shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Signup
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 space-y-4">
          <p className="text-center text-gray-600 font-semibold">
            Already member?{" "}
            <Link to="/login" className="text-pink-900 font-bold hover:underline">
              Login
            </Link>
          </p>

          <div className="flex justify-center items-center text-sm pt-4 border-t border-gray-100">
            <Link to="/" className="text-gray-400 hover:text-gray-900 flex items-center gap-1">
              Back to home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;