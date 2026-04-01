import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

const Hero = () => {

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 pb-12 pt-20 md:px-8 md:pt-24">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-[32rem] w-[32rem] rounded-full bg-[#6b21a8]/30 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-[#7e22ce]/25 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 h-[28rem] w-[28rem] rounded-full bg-[#a855f7]/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl rounded-[28px] border border-violet-200/15 bg-[#05001a]/90 p-6 shadow-[0_40px_120px_rgba(168,85,247,0.15)] backdrop-blur-xl md:p-8">
        <div className="rounded-[24px] border border-violet-200/12 bg-[#0a0420]/95 px-6 pb-8 pt-6 md:px-10 md:pb-12 md:pt-8">
          {/* Navigation Strip */}
          <div className="flex items-center justify-between rounded-2xl border border-violet-300/10 bg-[#1a0a3e]/60 px-6 py-3 backdrop-blur-md">
            <span className="text-xs font-bold tracking-wider text-violet-100 md:text-sm">Developer</span>

            <ul className="hidden items-center gap-8 text-[12px] text-violet-200/85 md:flex">
              <li>
                <a href="#about" className="transition-colors hover:text-violet-300">About</a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-violet-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="transition-colors hover:text-violet-300">Skills</a>
              </li>
              <li>
                <a href="#experience" className="transition-colors hover:text-violet-300">Experience</a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-violet-300">Contact</a>
              </li>
            </ul>

            <a
              href="#contact"
              className="rounded-xl border border-violet-200/20 bg-linear-to-r from-[#e9dcff] to-[#c9b0ff] px-4 py-2 text-[11px] font-bold text-[#1f0f47] shadow-lg shadow-violet-600/30 transition-all duration-300 hover:shadow-violet-500/50 hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Main Content Grid */}
          <div className="relative grid items-center gap-12 pt-12 lg:grid-cols-2 lg:pt-16">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-[38rem] z-10"
            >
              <h1 className="text-balance text-[2.4rem] font-black leading-[1.1] text-white md:text-[3.8rem] lg:text-[4rem]">
                Hi, I&apos;m <span className="bg-linear-to-r from-[#e9dcff] to-[#c887ff] bg-clip-text text-transparent">Winfred Nkatha</span>.
                <br />
                Frontend-Focused Full
                <br />
                Stack Developer.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-violet-200/80 md:text-base">
                Crafting intuitive, scalable, and beautifully designed digital experiences for the modern web. I specialize in building fast, responsive applications with modern technologies.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group rounded-xl border border-violet-100/20 bg-linear-to-r from-[#e9dcff] to-[#d0b5ff] px-7 py-3 text-sm font-bold text-[#1f0f47] shadow-lg shadow-violet-700/40 transition-all duration-300 hover:shadow-violet-500/60 hover:-translate-y-1"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-violet-400/40 bg-violet-600/20 px-7 py-3 text-sm font-bold text-violet-100 transition-all duration-300 hover:bg-violet-600/35 hover:text-white hover:border-violet-300/60"
                >
                  Get In Touch
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex items-center gap-3 text-[11px] tracking-wide text-violet-300/70"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>5+ Years Experience</span>
                <div className="h-1 w-1 rounded-full bg-violet-400/60" />
                <span>10+ Projects Shipped</span>
              </motion.div>
            </motion.div>

            {/* Right: Hero Reference Image with Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative h-[28rem] w-full md:h-[32rem] lg:h-[36rem]"
            >
              {/* Multi-layer glow effect */}
              <div className="absolute -inset-12 rounded-3xl bg-linear-to-br from-[#d8b4fe]/40 via-[#c084fc]/25 to-[#7e22ce]/10 blur-[100px] opacity-60" />
              <div className="absolute top-1/3 -right-16 h-[28rem] w-[28rem] rounded-full bg-[#d084ff]/30 blur-[100px]" />
              
              {/* Image with rounded corners */}
              <motion.img
                src={heroImage}
                alt="3D Glowing Mesh Portfolio"
                className="relative h-full w-full rounded-2xl object-cover shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
