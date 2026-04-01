import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const techStack = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
];

const FeaturedProject = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto -mt-10 mb-20 px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-linear-to-br from-[#1a0826]/80 to-[#2d0a4b]/80 rounded-3xl shadow-2xl border border-purple-900/40 p-8 md:p-14 flex flex-col md:flex-row gap-10 items-center backdrop-blur-xl"
      >
        {/* Project Mockup */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[320px] h-55 md:w-105 md:h-70 bg-linear-to-tr from-purple-700/60 to-indigo-700/40 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border border-purple-500/20">
            {/* Replace with real image */}
            <span className="text-purple-200 text-lg font-semibold">Project Mockup</span>
          </div>
        </div>
        {/* Project Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">AI-Powered Analytics Dashboard</h2>
          <p className="text-purple-200 text-base md:text-lg mb-2">A real-time analytics platform leveraging AI to deliver actionable insights for businesses, with a focus on speed, scalability, and user experience.</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-purple-800/60 text-purple-200 text-xs font-medium border border-purple-600/30">
                {tech}
              </span>
            ))}
          </div>
          <div className="bg-black/30 rounded-xl p-4 border border-purple-900/30 mb-2">
            <div className="mb-1 text-purple-400 font-semibold">Problem</div>
            <div className="text-white text-sm mb-2">Manual reporting was slow and error-prone, limiting business agility.</div>
            <div className="mb-1 text-green-400 font-semibold">Solution</div>
            <div className="text-white text-sm mb-2">Automated data pipelines and AI-driven dashboards for instant, reliable insights.</div>
            <div className="mb-1 text-blue-400 font-semibold">Impact</div>
            <div className="text-white text-sm">Reduced reporting time by 40%. Enabled data-driven decisions, saving 200+ hours annually.</div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
              Live Demo <FaExternalLinkAlt className="text-sm" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg border border-purple-500 text-purple-200 font-semibold bg-black/40 flex items-center gap-2 hover:bg-purple-900/30 hover:text-white transition-colors">
              GitHub <FaGithub className="text-lg" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
