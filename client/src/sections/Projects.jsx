import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform leveraging AI for actionable insights.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    impact: "Reduced reporting time by 40% and enabled data-driven decisions.",
    live: "#",
    github: "#",
    category: "Full Stack",
  },
  {
    title: "Modern SaaS Landing Page",
    description: "High-converting, responsive landing page for SaaS startups.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    impact: "Increased signups by 25% through optimized UX.",
    live: "#",
    github: "#",
    category: "Frontend",
  },
  {
    title: "AI Chatbot Assistant",
    description: "Conversational AI assistant for customer support automation.",
    tech: ["React", "Node.js", "OpenAI API"],
    impact: "Automated 60% of support queries, saving 100+ hours/month.",
    live: "#",
    github: "#",
    category: "AI",
  },
  // Add more projects as needed
];

const categories = ["All", "Frontend", "Full Stack", "AI"];

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selected);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
      >
        Projects
      </motion.h2>
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full font-medium border transition-colors text-sm shadow-md backdrop-blur-md
              ${selected === cat
                ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white border-purple-700"
                : "bg-black/40 text-purple-200 border-purple-700/30 hover:bg-purple-900/30 hover:text-white"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
            className="relative group bg-linear-to-br from-[#1a0826]/80 to-[#2d0a4b]/80 rounded-2xl border border-purple-900/40 shadow-xl overflow-hidden hover:shadow-purple-700/30 transition-shadow"
          >
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center z-10">
              <div className="flex gap-3 mb-3">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
                  Live Demo <FaExternalLinkAlt className="text-sm" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-purple-500 text-purple-200 font-semibold bg-black/40 flex items-center gap-2 hover:bg-purple-900/30 hover:text-white transition-colors">
                  GitHub <FaGithub className="text-lg" />
                </a>
              </div>
              <div className="text-purple-200 text-xs text-center px-4">{project.impact}</div>
            </div>
            {/* Card Content */}
            <div className="p-7 flex flex-col gap-3 min-h-65">
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-purple-200 text-sm mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 rounded-full bg-purple-800/60 text-purple-200 text-xs font-medium border border-purple-600/30">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-purple-400 text-xs font-medium mt-auto">{project.category}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
