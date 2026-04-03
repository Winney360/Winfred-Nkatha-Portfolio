import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const testimonials = [
  {
    name: "Alex Johnson",
    quote:
      "Seamless delivery and technical depth. The product quality was above our expectations from day one.",
  },
  {
    name: "Ava Chen",
    quote:
      "Strong ownership, clear communication, and clean execution. The implementation was reliable and fast.",
  },
];

const githubUsername = "Winney360";
const githubGraphUrl = `https://ghchart.rshah.org/${githubUsername}`;

const SocialProof = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-white mb-10"
      >
        Social Proof
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-900/95 to-[#081326] p-5 shadow-[0_10px_35px_rgba(2,8,23,.45)]"
        >
          {testimonials.map((t, idx) => (
            <div key={t.name}>
              <div className="text-amber-300 text-xs tracking-[0.18em] mb-2">★★★★★</div>
              <p className="text-slate-200/90 text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-3 flex items-center gap-2 text-slate-300 text-xs">
                <span className="h-6 w-6 rounded-full bg-slate-700" />
                <span>{t.name}</span>
              </div>
              {idx !== testimonials.length - 1 && <div className="my-4 h-px bg-slate-700/60" />}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-900/95 to-[#081326] p-5 shadow-[0_10px_35px_rgba(2,8,23,.45)]"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-100 text-sm font-semibold">Contribution graphs</h3>
            <FaGithub className="text-slate-300 text-base" />
          </div>

          <div className="mb-4 rounded-lg border border-slate-700/70 bg-slate-950/40 p-2">
            <img
              src={githubGraphUrl}
              alt={`${githubUsername} GitHub contribution graph`}
              className="w-full rounded-md"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Less</span>
            <span>More</span>
          </div>

          <div className="mt-5 rounded-lg border border-slate-700/70 bg-slate-950/50 px-3 py-2 text-xs text-slate-300">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-slate-100 transition-colors"
            >
              <FaGithub className="text-sm" />
              View full profile activity
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
