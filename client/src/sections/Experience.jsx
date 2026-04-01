import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "Frontend Engineer (TeamX)",
    company: "TeamX",
    date: "Jan '24 – 2026",
    achievements: [
      "Improved performance by 35% across core product.",
      "Led UI redesign adopted by 10k+ users.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "StartupHub",
    date: "Sep '23 – Dec '23",
    achievements: [
      "Automated onboarding, saving 100+ hours annually.",
      "Built analytics dashboard used by leadership.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Freelance",
    date: "Mar '22 – Jul '23",
    achievements: [
      "Designed scalable UI for SaaS, 5k+ active users.",
      "Reduced bug reports by 50% via improved QA.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
      >
        Experience / Journey
      </motion.h2>
      <div className="relative border-l-2 border-purple-900/40 pl-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
            className="mb-12 relative"
          >
            <div className="absolute -left-5 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-700 to-indigo-700 flex items-center justify-center shadow-lg border-2 border-purple-900/60">
              <FaBriefcase className="text-white text-lg" />
            </div>
            <div className="bg-gradient-to-br from-[#1a0826]/80 to-[#2d0a4b]/80 rounded-2xl border border-purple-900/40 shadow-lg p-7 ml-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="text-lg font-semibold text-white">{exp.role}</div>
                <div className="text-purple-300 text-sm font-medium mt-1 md:mt-0">{exp.date}</div>
              </div>
              <div className="text-purple-400 text-sm mb-2">{exp.company}</div>
              <ul className="list-disc pl-5 text-purple-200 text-sm space-y-1">
                {exp.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
