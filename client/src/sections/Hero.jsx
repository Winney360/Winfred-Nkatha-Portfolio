import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black px-4 pb-6 pt-5 md:min-h-screen md:px-8 md:pb-12 md:pt-6">
      <div className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 md:px-8 md:pt-6">
        <nav className="relative rounded-xl border border-violet-300/15 bg-[#1a0a3e]/55 px-4 py-2 backdrop-blur-md md:px-6 md:py-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-violet-100 md:text-sm">Developer</span>

            <div className="ml-auto flex items-center gap-8">
              <ul className="hidden items-center gap-8 text-[15px] text-violet-200/85 md:flex">
                <li><a href="#about" className="transition-colors hover:text-white">About</a></li>
                <li><a href="#projects" className="transition-colors hover:text-white">Projects</a></li>
                <li><a href="#skills" className="transition-colors hover:text-white">Skills</a></li>
                <li><a href="#experience" className="transition-colors hover:text-white">Experience</a></li>
                <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
              </ul>

              <a
                href="#contact"
                className="hidden rounded-lg border border-violet-200/20 bg-linear-to-r from-[#e9dcff] to-[#c9b0ff] px-3 py-1.5 text-[10px] font-semibold text-[#1f0f47] shadow-md shadow-violet-900/25 md:inline-flex"
              >
                Contact Me
              </a>

              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-violet-300/25 bg-violet-500/10 text-violet-100 md:hidden"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <span className="relative block h-3.5 w-4">
                  <span
                    className={`absolute left-0 top-0 block h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ${
                      isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 block h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3 block h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ${
                      isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-3 rounded-lg border border-violet-300/20 bg-[#12072c]/95 p-3 md:hidden"
            >
              <ul className="space-y-2 text-sm text-violet-100/90">
                <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-violet-500/15">About</a></li>
                <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-violet-500/15">Projects</a></li>
                <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-violet-500/15">Skills</a></li>
                <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-violet-500/15">Experience</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-violet-500/15">Contact</a></li>
              </ul>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-violet-200/20 bg-linear-to-r from-[#e9dcff] to-[#c9b0ff] px-3 py-2 text-xs font-semibold text-[#1f0f47] shadow-md shadow-violet-900/25"
              >
                Contact Me
              </a>
            </motion.div>
          )}
        </nav>
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute -top-32 left-1/3 h-128 w-lg rounded-full bg-[#6b21a8]/30 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-160 w-160 rounded-full bg-[#7e22ce]/25 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 h-112 w-md rounded-full bg-[#a855f7]/20 blur-[100px]" />
        {/* Top-left subtle purple glow */}
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#a855f7]/25 blur-[100px] opacity-60" />
      </div>

      <div className="pointer-events-none absolute inset-0 md:hidden">
        <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover object-center opacity-65" />
        <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/60 to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-12 w-full pt-14 ml-5 lg:pt-16 md:mt-15">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="z-10 w-full lg:w-3/4"
            >
              <h1 className="text-balance text-[2.4rem] font-bold leading-[1.1] text-white md:text-[3.8rem] lg:text-[4rem]">
                Hi, I&apos;m <motion.span 
                  className="text-[#9143d9] font-semibold"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #9143d9, #d946ef, #9143d9)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(217, 70, 239, 0.6)",
                    filter: "drop-shadow(0 0 20px rgba(217, 70, 239, 0.5))"
                  }}
                  animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Winfred Nkatha
                </motion.span>.
                <br />
                Frontend-Focused Full
                <br />
                Stack Developer.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-violet-200/80 md:text-base">
                I build fast, scalable, and visually polished web applications using React, JavaScript, and AI integration—turning ideas into seamless, user-centered digital experiences.
              </p>

              <div className="mt-10 flex items-center gap-2 sm:gap-4">
                <a
                  href="#projects"
                  className="group whitespace-nowrap rounded-xl border border-violet-100/20 bg-linear-to-r from-[#e9dcff] to-[#d0b5ff] px-4 py-2.5 text-xs font-bold text-[#1f0f47] shadow-lg shadow-violet-700/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/60 sm:px-7 sm:py-3 sm:text-sm"
                >
                  View My Work
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="whitespace-nowrap rounded-xl border border-violet-400/40 bg-violet-600/20 px-4 py-2.5 text-xs font-bold text-violet-100 transition-all duration-300 hover:border-violet-300/60 hover:bg-violet-600/35 hover:text-white sm:px-7 sm:py-3 sm:text-sm"
                >
                  Download Resume
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex items-center gap-3 text-[11px] tracking-wide text-violet-300/70"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>1+ Year Hands-on Experience</span>
                <div className="h-1 w-1 rounded-full bg-violet-400/60" />
                <span>7+ Projects Shipped</span>
              </motion.div>
            </motion.div>

            {/* Bottom-right hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-96 w-96 md:block md:-bottom-48 md:h-screen md:w-1/2 md:-mr-16 lg:-bottom-64 lg:h-screen lg:w-1/2 lg:-mr-20"
            >
              {/* Image subtle purple glow */}
              <div className="absolute -inset-16 rounded-2xl bg-[#a855f7]/35 blur-[80px] opacity-40" />
              <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#9333ea]/25 blur-[90px]" />
              
              {/* Transparent PNG image only */}
              <motion.img
                src={heroImage}
                alt="3D Glowing Mesh Portfolio"
                className="relative h-full w-full bg-transparent object-contain"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
      </div>
    </section>
  );
};

export default Hero;
