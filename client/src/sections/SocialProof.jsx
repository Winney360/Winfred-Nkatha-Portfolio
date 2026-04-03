import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";

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

const githubDarkTheme = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const SocialProof = () => {
  const githubStartYear = 2025;
  const currentYear = new Date().getFullYear();
  const availableYears = Array.from(
    { length: Math.max(0, currentYear - githubStartYear + 1) },
    (_, index) => currentYear - index
  );
  const yearOptions = ["last", ...availableYears];
  const [selectedYear, setSelectedYear] = useState(currentYear);

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
          className="rounded-2xl border border-[#30363d] bg-[#0d1117] p-5 shadow-[0_10px_35px_rgba(2,8,23,.45)]"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="text-[#c9d1d9] text-sm font-semibold">Contribution graph</h3>

            <div className="flex items-center gap-2">
              <label htmlFor="github-year" className="text-[11px] text-[#8b949e]">
                Year
              </label>
              <select
                id="github-year"
                value={selectedYear}
                onChange={(e) =>
                  setSelectedYear(e.target.value === "last" ? "last" : Number(e.target.value))
                }
                className="h-7 rounded-md border border-[#30363d] bg-[#010409] px-2 text-[11px] text-[#c9d1d9] outline-none focus:border-[#58a6ff]"
              >
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year === "last" ? "Last 12 months" : year}
                  </option>
                ))}
              </select>
              <FaGithub className="text-[#8b949e] text-base" />
            </div>
          </div>

          <div className="mb-4 rounded-lg border border-[#30363d] bg-[#0d1117] px-3 pt-3 pb-2 overflow-hidden text-[#8b949e] [&_svg]:w-full [&_svg]:h-auto [&_text]:fill-[#8b949e]">
            <GitHubCalendar
              username={githubUsername}
              year={selectedYear}
              colorScheme="dark"
              theme={githubDarkTheme}
              blockSize={10}
              blockMargin={3}
              fontSize={11}
              showColorLegend={false}
              showMonthLabels={true}
              showTotalCount={true}
              style={{ color: "#8b949e" }}
              labels={{
                totalCount:
                  selectedYear === "last"
                    ? "{{count}} contributions in the last year"
                    : "{{count}} contributions in {{year}}",
              }}
            />

            <div className="mt-1 flex items-center justify-end gap-1 text-[10px] leading-none text-[#7d8590]">
              <span className="mr-0.5">Less</span>
              {githubDarkTheme.dark.map((color) => (
                <span
                  key={color}
                  className="h-[9px] w-[9px] rounded-[2px]"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span className="ml-0.5">More</span>
            </div>
          </div>

          <div className="mt-2 rounded-lg border border-[#30363d] bg-[#010409] px-3 py-2 text-xs text-[#8b949e]">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#c9d1d9] transition-colors"
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
