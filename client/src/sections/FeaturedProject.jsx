import React from "react";
import { motion } from "framer-motion";
import featuredImg from "../assets/featured.png";

const FeaturedProject = () => {
  return (
    <section className="relative z-10 mt-0 mb-0 w-full bg-black px-4 pb-12 pt-10 md:px-8 min-[768px]:max-[1199px]:pb-12 min-[768px]:max-[1199px]:pt-8 min-[1200px]:max-[1399px]:min-h-[70vh] min-[1200px]:max-[1399px]:pb-14 min-[1200px]:max-[1399px]:pt-10 min-[1400px]:min-h-screen min-[1400px]:pb-28 min-[1400px]:pt-14">
      <div className="mx-auto mb-4 mt-0 w-full max-w-7xl md:ml-4 md:mr-0">
        <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight ">Featured Project : Crochet Website</h2>
        <p className="text-slate-300/90 text-sm mt-1 ">A modern, responsive website designed to showcase crochet designs and enhance the client’s online presence, making their work accessible to a wider audience.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-7xl rounded-2xl overflow-hidden border border-indigo-700/40 bg-linear-to-b from-[#090a16] to-[#05060f] shadow-2xl md:ml-4"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-violet-400/25 via-violet-400/10 to-transparent blur-2xl" />
        <div className="pointer-events-none absolute right-8 top-4 h-28 w-28 rounded-full bg-violet-400/20 blur-[70px]" />
        <div className="pt-6 md:pt-10 ">
          <div className="px-4 md:px-8">
            <div className="rounded-t-2xl rounded-b-none overflow-hidden border border-white/10 mb-0 mt-6 md:ml-10 md:mr-10 md:mt-10">
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
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">A modern, responsive website designed to showcase crochet designs and enhance the client’s online presence, making their work accessible to a wider audience.</p>
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-wide">The Solution</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">A React-based responsive website built to display crochet designs in a clean, visually appealing layout, along with an admin panel for managing staff and content.</p>
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-wide">Measurable Impact</h3>
              <div className="text-slate-300 text-sm mt-2 leading-relaxed space-y-1">
                <p>- Increased online visibility and user engagement</p>
                <p>- Improved usability and interaction with the platform</p>
                <p>- Reduced staff workload through the admin panel</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
