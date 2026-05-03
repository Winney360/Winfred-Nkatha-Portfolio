import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Starfield from "../components/Starfield";

const Hero = () => {
  return (
    <section className="relative min-h-[120vh] overflow-hidden bg-black px-4 pb-8 pt-5 text-white md:px-8 md:pt-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[120vh] overflow-hidden">
        <Starfield count={260} />
        <video
          src="/globe.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-y-0 left-[12.5%] h-full w-[75%] object-cover object-center brightness-50"
          aria-hidden="true"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="absolute left-4 top-2 z-10 text-left md:left-8 md:top-4"
      >
        <h1 className="text-balance text-[clamp(2.9rem,13vw,8.6rem)] font-semibold leading-[0.95] tracking-wider text-slate-100 md:max-w-5xl md:text-[clamp(3.8rem,10vw,8.6rem)] md:leading-[0.9]">
          <span className="block whitespace-nowrap">Architecting the</span>
          <span className="mt-2 block whitespace-nowrap md:mt-4">Modern Web</span>
        </h1>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[120vh] max-w-7xl flex-col justify-end pt-2 md:pt-4">
        <div className="flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex items-center gap-3 text-sm font-medium tracking-wide text-emerald-300/90"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(163,230,53,0.8)]" />
            <span>Available for new projects</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="flex flex-col items-start gap-6 md:gap-8"
          >
            <div className="relative max-w-[18rem] border border-emerald-400/30 bg-transparent px-4 py-1 text-left sm:max-w-[20rem] md:max-w-xl md:px-8 md:py-2">
              <span aria-hidden="true" className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-emerald-400 md:h-4 md:w-4" />
              <span aria-hidden="true" className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-emerald-400 md:h-4 md:w-4" />
              <span aria-hidden="true" className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-emerald-400 md:h-4 md:w-4" />
              <span aria-hidden="true" className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-emerald-400 md:h-4 md:w-4" />
              <p className="text-[0.45rem] leading-relaxed text-slate-100 sm:text-[1rem] md:max-w-lg md:text-[1.55rem]">
                Hi, I&apos;m Winfred Nkatha. I specialize in modern web technologies, turning complex ideas into fast, reliable, and maintainable applications.
              </p>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-none bg-emerald-500 px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              View Projects
              <FaArrowRight className="text-base" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;