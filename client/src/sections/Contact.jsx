import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub className="text-white text-xl" />,
    label: "GitHub",
    url: "https://github.com/Winney360",
  },
  {
    icon: <FaLinkedin className="text-blue-400 text-xl" />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/winfred-nkatha-858023261",
  },
  {
    icon: <FaWhatsapp className="text-green-400 text-xl" />,
    label: "WhatsApp",
    url: "https://wa.me/254791995578",
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
    <section id="contact" className="relative mx-auto overflow-hidden border border-white/10 bg-linear-to-r from-[#140d22] via-[#1b0f2d] to-[#2a1244] px-4 py-20 shadow-[0_24px_80px_rgba(10,6,20,0.75)] md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/5 to-transparent" />
        <div className="absolute left-1/3 top-8 h-72 w-72 rounded-full bg-[#7e22ce]/20 blur-[100px]" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-[#9333ea]/15 blur-[120px]" />
      </div>

      <div className="relative grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="p-6 md:p-8 lg:p-10"
        >
          <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b58cff]">
            Contact
          </div>
          <h2 className="mt-2 max-w-md text-3xl font-semibold leading-[1.05] text-white md:text-[2.75rem]">
            Let’s build something impactful together.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70 md:text-base">
            Let&apos;s build something impactful.
          </p>

          <div className="mt-8 space-y-4 text-sm text-white/80">
            <a href="mailto:nkathawinnie94@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white">
              <FaEnvelope className="text-[#c9b3ff]" />
              <span>alexcen.github.com</span>
            </a>

            <div className="flex items-center gap-4 pt-1 text-white/75">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-white/70">
              <span className="inline-flex h-5 w-5 items-center justify-center border border-white/15 text-[10px] text-[#c9b3ff]">
                ⓘ
              </span>
              <span>Calendly booking (optional)</span>
            </div>
          </div>
        </motion.div>

        <div className="bg-[#120b1f]/55 p-6 md:p-8 lg:p-10">
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="mb-2 block text-sm text-white/90" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="h-11 w-full border border-white/10 bg-black/45 px-4 text-sm text-white placeholder-white/35 outline-none transition focus:border-[#b58cff]/60 focus:ring-2 focus:ring-[#b58cff]/25"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/90" htmlFor="email">
                Email <span className="text-[#d9c4ff]">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="h-11 w-full border border-white/10 bg-black/45 px-4 text-sm text-white placeholder-white/35 outline-none transition focus:border-[#b58cff]/60 focus:ring-2 focus:ring-[#b58cff]/25"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/90" htmlFor="message">
                Messags
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full resize-none border border-white/10 bg-black/45 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition focus:border-[#b58cff]/60 focus:ring-2 focus:ring-[#b58cff]/25"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="h-11 w-full bg-linear-to-r from-[#7c3aed] to-[#a855f7] text-sm font-medium text-white shadow-[0_10px_28px_rgba(124,58,237,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Contact"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
