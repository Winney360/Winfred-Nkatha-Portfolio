import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiVercel, SiVisualstudiocode } from "react-icons/si";

const skills = [
  {
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    name: "React",
    proof: "Built 4 production apps",
  },
  {
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    name: "Tailwind CSS",
    proof: "Designed 5+ scalable UIs",
  },
  {
    icon: <SiJavascript className="text-yellow-300 text-3xl" />,
    name: "JavaScript",
    proof: "5 years experience, 10+ projects",
  },
  {
    icon: <FaNodeJs className="text-green-400 text-3xl" />,
    name: "Node.js",
    proof: "Developed REST APIs with auth",
  },
  {
    icon: <SiExpress className="text-gray-200 text-3xl" />,
    name: "Express",
    proof: "Built scalable backend services",
  },
  {
    icon: <SiMongodb className="text-green-500 text-3xl" />,
    name: "MongoDB",
    proof: "Designed performant schemas",
  },
  {
    icon: <FaFigma className="text-pink-400 text-3xl" />,
    name: "Figma",
    proof: "Designed full UI systems",
  },
  {
    icon: <SiVisualstudiocode className="text-blue-400 text-3xl" />,
    name: "VS Code",
    proof: "Daily driver for all projects",
  },
  {
    icon: <FaGithub className="text-white text-3xl" />,
    name: "GitHub",
    proof: "1000+ commits, open source",
  },
  {
    icon: <SiVercel className="text-white text-3xl" />,
    name: "Vercel",
    proof: "Deployed 10+ apps",
  },
];

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: idx * 0.07, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center bg-gradient-to-br from-[#1a0826]/80 to-[#2d0a4b]/80 rounded-2xl border border-purple-900/40 shadow-lg p-7 hover:scale-105 hover:shadow-purple-700/30 transition-transform backdrop-blur-xl"
          >
            <div className="mb-3">{skill.icon}</div>
            <div className="text-lg font-semibold text-white mb-1">{skill.name}</div>
            <div className="text-purple-200 text-xs text-center">{skill.proof}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
