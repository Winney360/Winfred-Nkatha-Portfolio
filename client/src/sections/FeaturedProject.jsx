import React from "react";
import { motion } from "framer-motion";
import featuredImg from "../assets/featured.png";

const FeaturedProject = () => {
  return (
    <section className="relative z-10 mt-0 mb-0 w-full bg-black px-4 pb-12 pt-10 md:px-8 min-[768px]:max-[1199px]:pb-12 min-[768px]:max-[1199px]:pt-8 min-[1200px]:max-[1399px]:min-h-[70vh] min-[1200px]:max-[1399px]:pb-14 min-[1200px]:max-[1399px]:pt-10 min-[1400px]:min-h-screen min-[1400px]:pb-28 min-[1400px]:pt-14">
      <div className="mx-auto mb-4 mt-0 w-full max-w-7xl md:ml-4 md:mr-0">
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500 md:text-sm">[ FEATURED PROJECT ]</h2>
        <p className="text-slate-100 text-sm mt-4 md:mt-5">A modern, responsive crochet website designed to showcase crochet designs and enhance the client’s online presence, making their work accessible to a wider audience.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-7xl overflow-hidden border border-emerald-400/30 bg-black shadow-2xl md:ml-4"
      >
        <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-20 h-5 w-5 border-l-2 border-t-2 border-emerald-400 md:h-7 md:w-7" />
        <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-20 h-5 w-5 border-r-2 border-t-2 border-emerald-400 md:h-7 md:w-7" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-20 h-5 w-5 border-b-2 border-l-2 border-emerald-400 md:h-7 md:w-7" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-20 h-5 w-5 border-b-2 border-r-2 border-emerald-400 md:h-7 md:w-7" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-gray-400/25 via-gray-400/10 to-transparent blur-2xl" />
        <div className="pointer-events-none absolute right-8 top-4 h-28 w-28 rounded-full bg-emerald-400/20 blur-[70px]" />
        <div>
          <img
            src={featuredImg}
            alt="Project dashboard preview"
            className="block w-full h-auto"
          />
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
