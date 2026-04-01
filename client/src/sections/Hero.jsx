import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#41206f] via-[#2d1659] to-[#170935] px-4 pb-12 pt-20 md:px-8 md:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/3 h-[18rem] w-[18rem] rounded-full bg-[#a76bff]/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-[24rem] w-[24rem] rounded-full bg-[#7e36ef]/25 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl rounded-[22px] border border-violet-200/20 bg-[#09031a]/88 p-4 shadow-[0_32px_90px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-5">
        <div className="rounded-[18px] border border-violet-200/15 bg-[#070214]/92 px-5 pb-6 pt-4 md:px-8 md:pb-8 md:pt-5">
          <div className="flex items-center justify-between rounded-xl border border-violet-300/12 bg-[#12082a]/65 px-4 py-2">
            <span className="text-xs font-semibold tracking-wide text-violet-100 md:text-sm">Developer</span>

            <ul className="hidden items-center gap-6 text-[11px] text-violet-200/90 md:flex">
              <li>
                <a href="#about" className="transition-colors hover:text-white">About</a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#skills" className="transition-colors hover:text-white">Skills</a>
              </li>
              <li>
                <a href="#experience" className="transition-colors hover:text-white">Experience</a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">Contact</a>
              </li>
            </ul>

            <a
              href="#contact"
              className="rounded-lg border border-violet-200/20 bg-linear-to-r from-[#d8c4ff] to-[#b492ff] px-3 py-1.5 text-[11px] font-semibold text-[#190f37] shadow-md shadow-violet-950/25"
            >
              Contact Me
            </a>
          </div>

          <div className="grid items-end gap-8 pt-8 lg:grid-cols-[1.04fr_0.96fr] lg:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-[34rem]"
            >
              <h1 className="text-balance text-[2.2rem] font-black leading-[1.03] text-white md:text-[3.6rem]">
                Hi, I&apos;m <span className="text-[#aa84ff]">[Developer Name]</span>.
                <br />
                Frontend-Focused Full
                <br />
                Stack Developer.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-violet-200/80 md:text-base">
                Crafting intuitive, scalable, and beautifully designed digital experiences for the modern web.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="rounded-lg border border-violet-100/15 bg-linear-to-r from-[#e9dcff] to-[#cdb3ff] px-5 py-2.5 text-xs font-semibold text-[#1f1144] shadow-lg shadow-violet-900/40 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-lg border border-violet-300/35 bg-[#130a2d]/55 px-5 py-2.5 text-xs font-semibold text-violet-100 transition-colors duration-300 hover:bg-violet-500/15"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              className="relative h-[18.5rem] w-full overflow-hidden rounded-2xl border border-violet-300/15 bg-linear-to-br from-[#0c0420] to-[#0a0317] md:h-[22rem]"
            >
              <div className="absolute -bottom-20 -right-16 h-[21rem] w-[21rem] rounded-full bg-[#bc82ff]/25 blur-3xl" />
              <div className="absolute -top-12 -left-8 h-44 w-44 rounded-full bg-[#8758ff]/16 blur-2xl" />

              <svg viewBox="0 0 520 380" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="meshStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f4e6ff" stopOpacity="0.86" />
                    <stop offset="100%" stopColor="#a24fff" stopOpacity="0.84" />
                  </linearGradient>
                  <radialGradient id="meshFill" cx="70%" cy="76%" r="65%">
                    <stop offset="0%" stopColor="#c887ff" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#0c0520" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <path
                  d="M522 315C489 264 428 241 372 234C318 228 270 233 225 210C190 193 157 158 127 166C96 174 66 224 74 264C82 304 130 336 185 350C246 366 314 364 373 354C426 345 489 330 522 315Z"
                  fill="url(#meshFill)"
                />

                {Array.from({ length: 31 }).map((_, i) => {
                  const y = 194 + i * 7;
                  return (
                    <path
                      key={`wave-${i}`}
                      d={`M96 ${y} C 174 ${y - 42} 255 ${y + 30} 332 ${y - 5} C 376 ${y - 24} 432 ${y + 22} 474 ${y - 1}`}
                      fill="none"
                      stroke="url(#meshStroke)"
                      strokeOpacity={0.14 + i * 0.02}
                      strokeWidth="1"
                    />
                  );
                })}

                {Array.from({ length: 35 }).map((_, i) => {
                  const x = 94 + i * 11;
                  return (
                    <path
                      key={`cross-${i}`}
                      d={`M${x} 190 C ${x - 8} 230 ${x + 12} 270 ${x - 6} 316`}
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
            className="mt-6 inline-flex items-center gap-2.5 text-[11px] tracking-wide text-violet-200/70"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-violet-300/35 bg-violet-600/10 text-[10px] text-violet-100">
              ▸
            </span>
            <span>Sleekest aesthetics</span>
            <span className="h-1 w-1 rounded-full bg-violet-300/60" />
            <span>Amazing portfolio animation</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
