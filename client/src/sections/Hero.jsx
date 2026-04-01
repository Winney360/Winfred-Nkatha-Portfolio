import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

const Hero = () => {

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 pb-12 pt-5 md:px-8 md:pt-6">
      <div className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 md:px-8 md:pt-6">
        <nav className="rounded-xl border border-violet-300/15 bg-[#1a0a3e]/55 px-4 py-2 backdrop-blur-md md:px-6 md:py-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-violet-100 md:text-sm">Developer</span>

            <ul className="hidden items-center gap-6 text-[10px] text-violet-200/85 md:flex">
              <li><a href="#about" className="transition-colors hover:text-white">About</a></li>
              <li><a href="#projects" className="transition-colors hover:text-white">Projects</a></li>
              <li><a href="#skills" className="transition-colors hover:text-white">Skills</a></li>
              <li><a href="#experience" className="transition-colors hover:text-white">Experience</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
            </ul>

            <a
              href="#contact"
              className="rounded-lg border border-violet-200/20 bg-linear-to-r from-[#e9dcff] to-[#c9b0ff] px-3 py-1.5 text-[10px] font-semibold text-[#1f0f47] shadow-md shadow-violet-900/25"
            >
              Contact Me
            </a>
          </div>
        </nav>
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-[32rem] w-[32rem] rounded-full bg-[#6b21a8]/30 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-[#7e22ce]/25 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 h-[28rem] w-[28rem] rounded-full bg-[#a855f7]/20 blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full pt-14 lg:pt-16">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="z-10 max-w-[38rem] pr-20 md:pr-40 lg:pr-56"
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

            {/* Bottom-right hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="pointer-events-none absolute -bottom-12 -right-10 z-0 h-[16rem] w-[16rem] md:-bottom-16 md:-right-14 md:h-[20rem] md:w-[20rem] lg:-bottom-20 lg:-right-16 lg:h-[24rem] lg:w-[24rem]"
            >
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
