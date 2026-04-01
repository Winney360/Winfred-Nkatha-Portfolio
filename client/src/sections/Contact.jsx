import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub className="text-white text-xl" />,
    label: "GitHub",
    url: "https://github.com/yourusername",
  },
  {
    icon: <FaLinkedin className="text-blue-400 text-xl" />,
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
  },
  {
    icon: <FaWhatsapp className="text-green-400 text-xl" />,
    label: "WhatsApp",
    url: "https://wa.me/1234567890",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate async send
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
      >
        Let’s build something impactful together.
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="bg-linear-to-br from-[#1a0826]/80 to-[#2d0a4b]/80 rounded-2xl border border-purple-900/40 shadow-lg p-8 flex flex-col gap-5 backdrop-blur-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-5 py-3 rounded-lg bg-black/40 border border-purple-700/30 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="px-5 py-3 rounded-lg bg-black/40 border border-purple-700/30 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="px-5 py-3 rounded-lg bg-black/40 border border-purple-700/30 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
        />
        <button
          type="submit"
          className="px-7 py-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-purple-500/40 transition-transform text-lg disabled:opacity-60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
        </button>
      </motion.form>
      <div className="flex flex-col items-center mt-10 gap-2">
        <div className="text-purple-300 text-sm mb-2">Or reach out directly:</div>
        <div className="flex gap-4 mb-2">
          <a href="mailto:developer@email.com" className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors">
            <FaEnvelope className="text-xl" /> developer@email.com
          </a>
        </div>
        <div className="flex gap-6 mt-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
