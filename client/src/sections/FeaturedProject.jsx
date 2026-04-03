import React from "react";
import { motion } from "framer-motion";
import featuredImg from "../assets/featured.png";

const FeaturedProject = () => {
  return (
    <section className="relative w-full min-h-screen mt-0 mb-0 px-4 md:px-8 pb-15 md:pb-28 z-10 bg-linear-to-b from-[#0a0d1f] to-[#060812]">
      <div className="mb-4 mt-0 ml-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">Featured Project Case Study</h2>
        <p className="text-slate-300/90 text-sm mt-1 ">Breakdown snippet with realistic application to case study.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative ml-4  rounded-2xl overflow-hidden border border-indigo-700/40 bg-linear-to-b from-[#090a16] to-[#05060f] shadow-2xl"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-violet-400/25 via-violet-400/10 to-transparent blur-2xl" />
        <div className="pointer-events-none absolute right-8 top-4 h-28 w-28 rounded-full bg-violet-400/20 blur-[70px]" />
        <div className="pt-8 md:pt-10 ">
          <div className="px-6 md:px-8">
            <div className="rounded-t-2xl rounded-b-none overflow-hidden border border-white/10 mb-0 ml-10 mr-10 mt-10">
              <img
                src={featuredImg}
                alt="Project dashboard preview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-white/20 bg-black/25 md:divide-x md:divide-white/20">
            <div className="p-4 md:p-5">
            <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-wide">The Problem</h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">Reducing financial reporting complexity for small businesses.</p>
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-wide">The Solution</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">React + Node.js dashboard with interactive charts.</p>
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-wide">Measurable Impact</h3>
              <div className="text-slate-300 text-sm mt-2 leading-relaxed space-y-1">
                <p>- Reduced lead time by 40%</p>
                <p>- Automated reporting saving 10 hours/week</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
