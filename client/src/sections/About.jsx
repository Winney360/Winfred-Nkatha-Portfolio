import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 md:px-8" id="about">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <div className="grid items-start gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <div className="md:order-1">
            <h2 className="mb-8 text-left text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500 md:mb-10 md:text-sm">[ ABOUT ]</h2>
            <div className="relative mx-auto w-full max-w-[320px] overflow-hidden border border-emerald-400/30 bg-neutral-800">
              <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-20 h-4 w-4 border-l-2 border-t-2 border-emerald-400 md:h-6 md:w-6" />
              <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-20 h-4 w-4 border-r-2 border-t-2 border-emerald-400 md:h-6 md:w-6" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-20 h-4 w-4 border-b-2 border-l-2 border-emerald-400 md:h-6 md:w-6" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-20 h-4 w-4 border-b-2 border-r-2 border-emerald-400 md:h-6 md:w-6" />
              <img
                src={aboutImage}
                alt="Developer portrait"
                className="h-80 w-full object-cover object-center md:h-90"
              />
            </div>
          </div>

          <div className="md:order-2 md:pt-12">
            <p className="text-lg text-emerald-300 md:text-xl">
              Full-Stack Developer specializing in frontend engineering and scalable web applications.
            </p>

            <div className="mt-7 space-y-4 text-sm leading-relaxed text-slate-100 md:text-base">
              <p>
                I design and build responsive, high-performance web applications using
                React, Node.js, and modern web technologies, with a strong focus on user
                experience and clean, maintainable code.
              </p>
              <p>
                I combine frontend development with backend understanding to build systems
                that are scalable, efficient, and production-ready.
              </p>
              <p>
                My experience includes building full-stack applications, contributing to
                community-driven platforms, and working in collaborative team environments
                where I take ownership of features and delivery.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
