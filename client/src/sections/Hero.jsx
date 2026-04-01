import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 pb-16 bg-gradient-to-br from-black via-[#1a0826] to-[#2d0a4b] overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000" stopOpacity="0.9" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
        </svg>
      </div>
      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
      >
        I build fast, scalable, and visually exceptional web applications.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="text-lg md:text-2xl text-purple-200 mb-6 font-medium"
      >
        Built 5+ real-world applications. Focused on performance, UX, and scalability.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="flex gap-4 justify-center"
      >
        <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-purple-500/40 transition-transform text-lg">
          View Projects
        </button>
        <button className="px-7 py-3 rounded-xl border border-purple-500 text-purple-200 font-semibold bg-black/40 hover:bg-purple-900/30 hover:text-white transition-colors text-lg">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
