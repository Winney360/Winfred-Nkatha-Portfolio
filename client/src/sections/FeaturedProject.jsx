import React from "react";
import { motion } from "framer-motion";

const FeaturedProject = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto -mt-10 mb-20 px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="rounded-2xl overflow-hidden border border-indigo-700/40 bg-gradient-to-b from-[#090a16] to-[#05060f] shadow-2xl"
      >
        <div className="px-6 md:px-8 pt-6 md:pt-8 pb-5">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">Featured Project Case Study</h2>
          <p className="text-slate-300/90 text-sm mt-1">Breakdown snippet with realistic application to case study.</p>

          <div className="mt-5 rounded-xl border border-indigo-500/30 bg-[#0b0d1b] p-2 md:p-3">
            <div className="rounded-lg overflow-hidden border border-white/10">
              <img
                src="https://via.placeholder.com/1200x700/0f172a/e2e8f0?text=Your+Project+Screenshot"
                alt="Project dashboard preview"
                className="w-full h-[220px] md:h-[320px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10 bg-black/35">
          <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-wide">The Problem</h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">Reducing financial reporting complexity for small businesses.</p>
          </div>

          <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-white/10">
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
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
