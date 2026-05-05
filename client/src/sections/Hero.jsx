import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Starfield from "../components/Starfield";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-8 pt-20 text-white md:min-h-[120vh] md:px-8 md:pt-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden md:h-[120vh]">
        <Starfield count={260} />
        <video
          src="/globe.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-y-0 left-0 h-full w-full origin-bottom scale-125 object-cover object-bottom brightness-50 md:left-[12.5%] md:w-[75%] md:origin-center md:scale-100 md:object-center"
          aria-hidden="true"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative z-10 text-center md:absolute md:left-8 md:top-4 md:text-left"
      >
        <h1 className="text-balance text-[clamp(3rem,14vw,8.6rem)] font-semibold leading-[1.1] text-slate-100 md:text-[clamp(3.8rem,10vw,8.6rem)] md:tracking-wider md:leading-[0.9]">
          <span className="md:block md:whitespace-nowrap">Architecting the </span>
          <span className="md:mt-4 md:block md:whitespace-nowrap">Modern Web</span>
        </h1>
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 pt-32 md:min-h-[120vh] md:items-stretch md:justify-end md:gap-0 md:pt-4">
        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
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
            className="flex flex-col items-center gap-6 md:items-start md:gap-8"
          >
            <div className="relative w-full max-w-[20rem] border border-emerald-400/30 bg-transparent px-4 py-3 text-center sm:max-w-[22rem] md:max-w-xl md:px-8 md:py-2 md:text-left">
              <span aria-hidden="true" className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-emerald-400 md:h-4 md:w-4" />
              <span aria-hidden="true" className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-emerald-400 md:h-4 md:w-4" />
              <span aria-hidden="true" className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-emerald-400 md:h-4 md:w-4" />
              <span aria-hidden="true" className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-emerald-400 md:h-4 md:w-4" />
              <p className="text-sm leading-relaxed text-slate-100 sm:text-base md:max-w-lg md:text-[1.55rem]">
                Hi, I&apos;m Winfred Nkatha. I specialize in modern web technologies, turning complex ideas into fast, reliable, and maintainable applications.
              </p>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-none bg-emerald-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Download Resume
              <FaDownload className="text-xs" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;