import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
      >
        About
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-linear-to-br from-[#1a0826]/80 to-[#2d0a4b]/80 rounded-2xl border border-purple-900/40 shadow-lg p-10 md:p-14 backdrop-blur-xl"
      >
        <p className="text-purple-200 text-lg md:text-xl mb-6 text-center">
          I’m a high-end Silicon Valley developer and frontend designer. I build intuitive, scalable, and beautifully designed digital experiences for the modern web.
        </p>
        <ul className="text-purple-300 text-base md:text-lg space-y-3 list-disc list-inside">
          <li>Engineering mindset & product-driven development.</li>
          <li>Experience in frontend, backend, and full-stack projects.</li>
          <li>Focus on performance, UX, and scalability.</li>
          <li>Proven track record: delivered 5+ real-world applications.</li>
          <li>Passionate about solving real business problems with code.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
