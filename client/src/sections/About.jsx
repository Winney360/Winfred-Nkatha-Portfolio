import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 md:px-8" id="about">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-[#7e22ce]/20 blur-[90px]" />
        <div className="absolute -bottom-16 right-10 h-80 w-80 rounded-full bg-[#9333ea]/15 blur-[110px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-white md:text-4xl">About</h2>
            <p className="mt-2 text-lg text-violet-100/95 md:text-xl">
              A High-end Silicon Valley developer and frontend designer.
            </p>

            <div className="mt-7 space-y-4 text-sm leading-relaxed text-violet-200/85 md:text-base">
              <p>
                I am obsessed with excellence in modern frontend development,
                design systems, and high-performance user interfaces.
              </p>
              <p>
                My engineering mindset and product-focused approach let me solve
                complex problems while keeping every interaction polished,
                accessible, and conversion-oriented.
              </p>
              <p>
                I blend frontend craftsmanship with backend awareness so products
                remain scalable, maintainable, and fast in real-world use.
              </p>
              <p>
                I help teams ship experiences users trust, enjoy, and return to.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-[320px] md:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl border border-violet-300/15 bg-linear-to-b from-[#2a0d4b] via-[#1a0a34] to-[#0f0820] shadow-[0_20px_60px_rgba(124,58,237,0.45)]">
              <div className="absolute inset-0 bg-radial from-violet-400/25 via-violet-500/10 to-transparent" />
              <div className="absolute -right-12 top-1/4 h-36 w-36 rounded-full bg-violet-400/20 blur-[70px]" />
              <img
                src={aboutImage}
                alt="Developer portrait"
                className="relative z-10 h-[360px] w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
