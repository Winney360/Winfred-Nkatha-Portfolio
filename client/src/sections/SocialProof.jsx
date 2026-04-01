import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "CTO, StartupHub",
    quote:
      "A rare blend of engineering precision and design sense. Delivered our analytics dashboard ahead of schedule and exceeded all expectations.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    title: "Lead Designer, TeamX",
    quote:
      "Transformed our product’s UI/UX. Collaboration was seamless and the results were world-class.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    title: "Mentor & Senior Engineer",
    quote:
      "Consistently delivers high-impact solutions. A true problem solver with a passion for quality.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const githubStats = {
  contributions: "1,200+ commits in 2025",
  stars: "350+ repo stars",
  followers: "500+ followers",
};

const SocialProof = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
      >
        Social Proof
      </motion.h2>
      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
            className="bg-linear-to-br from-[#1a0826]/80 to-[#2d0a4b]/80 rounded-2xl border border-purple-900/40 shadow-lg p-8 flex flex-col items-center text-center backdrop-blur-xl"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4 border-2 border-purple-700 object-cover"
            />
            <div className="text-white font-semibold text-lg mb-1">{t.name}</div>
            <div className="text-purple-400 text-xs mb-2">{t.title}</div>
            <div className="text-purple-200 text-sm italic">“{t.quote}”</div>
          </motion.div>
        ))}
      </div>
      {/* GitHub Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-center gap-8"
      >
        <div className="flex items-center gap-3 bg-black/40 border border-purple-900/40 rounded-xl px-6 py-4 shadow-md">
          <FaGithub className="text-white text-2xl" />
          <div className="text-purple-200 text-sm font-medium">{githubStats.contributions}</div>
        </div>
        <div className="flex items-center gap-3 bg-black/40 border border-purple-900/40 rounded-xl px-6 py-4 shadow-md">
          <FaGithub className="text-white text-2xl" />
          <div className="text-purple-200 text-sm font-medium">{githubStats.stars}</div>
        </div>
        <div className="flex items-center gap-3 bg-black/40 border border-purple-900/40 rounded-xl px-6 py-4 shadow-md">
          <FaGithub className="text-white text-2xl" />
          <div className="text-purple-200 text-sm font-medium">{githubStats.followers}</div>
        </div>
      </motion.div>
    </section>
  );
};

export default SocialProof;
