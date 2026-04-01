import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#3a1f65] via-[#26114a] to-[#14072f] px-4 pb-14 pt-28 md:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[#9f66ff]/25 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-[#7b2bf5]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl rounded-3xl border border-violet-300/20 bg-[#070314]/88 px-8 pb-10 pt-14 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur md:px-14 md:pb-12 md:pt-16">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-300/60 to-transparent" />

        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-balance text-4xl font-black leading-[1.02] text-white md:text-6xl">
              Hi, I&apos;m <span className="text-[#b794ff]">[Developer Name]</span>.
              <br />
              Frontend-Focused Full
              <br />
              Stack Developer.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-violet-200/85 md:text-lg">
              Crafting intuitive, scalable, and beautifully designed digital experiences for the modern web.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-xl border border-violet-200/20 bg-linear-to-r from-[#ebe2ff] to-[#d4c1ff] px-6 py-3 text-sm font-semibold text-[#1e1242] shadow-lg shadow-violet-900/30 transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-violet-300/30 bg-transparent px-6 py-3 text-sm font-semibold text-violet-100 transition-colors duration-300 hover:bg-violet-500/15"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="relative h-[290px] w-full overflow-hidden rounded-2xl border border-violet-400/15 bg-linear-to-br from-[#0d0520] to-[#0a0318] md:h-[360px]"
          >
            <div className="absolute -bottom-16 -right-16 h-[330px] w-[330px] rounded-full bg-[#c085ff]/22 blur-3xl" />
            <div className="absolute -top-12 -left-8 h-40 w-40 rounded-full bg-[#8758ff]/14 blur-2xl" />

            <svg viewBox="0 0 520 380" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="meshStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#efd9ff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#9d4dff" stopOpacity="0.85" />
                </linearGradient>
                <radialGradient id="meshFill" cx="68%" cy="74%" r="65%">
                  <stop offset="0%" stopColor="#c887ff" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#0d0620" stopOpacity="0" />
                </radialGradient>
              </defs>

              <path
                d="M522 315C489 264 428 241 372 234C318 228 270 233 225 210C190 193 157 158 127 166C96 174 66 224 74 264C82 304 130 336 185 350C246 366 314 364 373 354C426 345 489 330 522 315Z"
                fill="url(#meshFill)"
              />

              {Array.from({ length: 30 }).map((_, i) => {
                const y = 200 + i * 7;
                return (
                  <path
                    key={`wave-${i}`}
                    d={`M100 ${y} C 175 ${y - 42} 255 ${y + 30} 330 ${y - 6} C 375 ${y - 24} 430 ${y + 22} 470 ${y - 2}`}
                    fill="none"
                    stroke="url(#meshStroke)"
                    strokeOpacity={0.15 + i * 0.02}
                    strokeWidth="1.05"
                  />
                );
              })}

              {Array.from({ length: 34 }).map((_, i) => {
                const x = 98 + i * 11;
                return (
                  <path
                    key={`cross-${i}`}
                    d={`M${x} 194 C ${x - 9} 230 ${x + 12} 270 ${x - 6} 312`}
                    fill="none"
                    stroke="url(#meshStroke)"
                    strokeOpacity="0.28"
                    strokeWidth="0.9"
                  />
                );
              })}
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 inline-flex items-center gap-3 text-xs tracking-wide text-violet-200/70"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-violet-300/30 bg-violet-600/10 text-[10px] text-violet-100">
            ▸
          </span>
          <span>Sleekest aesthetics</span>
          <span className="h-1 w-1 rounded-full bg-violet-300/60" />
          <span>Amazing portfolio animation</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
