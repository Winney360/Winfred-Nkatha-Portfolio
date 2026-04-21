import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";
import Switch from "../components/Switch";
import ThreeDButton from "../components/ThreeDButton";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-[45vh] overflow-hidden bg-black px-8 pb-0 pt-6 min-[1200px]:min-h-screen">
      <div className="fixed inset-x-0 top-0 z-50">
        <nav className="w-full border-b border-violet-300/15 bg-[#1a0a3e]/70 px-8 py-3 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span
              className="inline-block w-44 leading-none text-[1.55rem] text-violet-200 lg:w-52 lg:text-[1.75rem]"
              style={{
                fontFamily: '"Edwardian Script ITC", "Snell Roundhand", "Brush Script MT", "Segoe Script", cursive',
                fontStyle: "italic",
                letterSpacing: "0.04em",
                transform: "scaleX(1.2)",
                transformOrigin: "left center",
                textShadow:
                  "0 0 10px rgba(168, 85, 247, 0.65), 0 0 24px rgba(168, 85, 247, 0.55), 0 0 42px rgba(147, 51, 234, 0.45)",
              }}
            >
              Winnie
            </span>

            <div className="ml-auto flex items-center gap-8">
              <ul className="flex items-center gap-8 text-[15px] text-violet-200/85">
                <li><a href="#about" className="transition-colors hover:text-white">About</a></li>
                <li><a href="#projects" className="transition-colors hover:text-white">Projects</a></li>
                <li><a href="#skills" className="transition-colors hover:text-white">Skills</a></li>
                <li><a href="#experience" className="transition-colors hover:text-white">Experience</a></li>
              </ul>

              <div className="block">
                <ThreeDButton href="#contact" size="sm">
                  Contact Me
                </ThreeDButton>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="hidden"
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
              className="mt-3 rounded-lg border border-violet-300/20 bg-[#12072c]/95 p-3 hidden"
            >
              <ul className="space-y-2 text-sm text-violet-100/90">
                <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-violet-500/15">About</a></li>
                <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-violet-500/15">Projects</a></li>
                <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-violet-500/15">Skills</a></li>
                <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-violet-500/15">Experience</a></li>
              </ul>
              <ThreeDButton href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-3" fullWidth>
                Contact Me
              </ThreeDButton>
            </motion.div>
          )}
        </nav>
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 block">
        <div className="absolute -top-32 left-1/3 h-128 w-lg rounded-full bg-[#6b21a8]/30 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-160 w-160 rounded-full bg-[#7e22ce]/25 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 h-112 w-md rounded-full bg-[#a855f7]/20 blur-[100px]" />
        {/* Top-left subtle purple glow */}
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#a855f7]/25 blur-[100px] opacity-60" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-auto h-[82%] hidden">
        <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover object-bottom opacity-65" />
        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/60 to-black/85" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-8 w-full pt-8 ml-4 lg:ml-5 lg:mt-10 lg:pt-12">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="z-10 w-3/4"
            >
              <h1 className="text-balance text-[3.8rem] font-bold leading-[1.1] text-white lg:text-[4rem]">
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

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-violet-200/80">
                I build fast, scalable, and visually polished web applications using React, JavaScript, and AI integration—turning ideas into seamless, user-centered digital experiences.
              </p>

              <div className="mt-10 flex items-center gap-2 sm:gap-4">
                <ThreeDButton href="#projects" className="whitespace-nowrap" size="md">
                  View My Work
                </ThreeDButton>
                <div className="flex justify-center">
                  <Switch />
                </div>
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
              className="pointer-events-none absolute bottom-0 right-0 z-0 block h-[76vh] w-[48%] -mr-8 lg:-bottom-20 lg:h-[88vh] lg:w-1/2 lg:-mr-16"
            >
              {/* Image subtle purple glow */}
              <div className="absolute -inset-16 rounded-2xl bg-[#a855f7]/35 blur-[80px] opacity-40" />
              <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#9333ea]/25 blur-[90px]" />
              
              {/* Transparent PNG image only */}
              <motion.img
                src={heroImage}
                alt="3D Glowing Mesh Portfolio"
                className="relative h-full w-full bg-transparent object-contain object-bottom-right"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
      </div>
    </section>
  );
};

export default Hero;
