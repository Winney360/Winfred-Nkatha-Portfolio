import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/";

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
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="relative mx-auto overflow-hidden border border-white/10 bg-black px-6 pt-6 pb-14 md:px-8 md:pt-8 md:pb-20">
      <div className="relative grid gap-4 md:grid-cols-[1.05fr_0.95fr] md:gap-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="p-5 pt-2 md:p-8 md:pt-3 lg:p-10 lg:pt-4"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500 md:text-sm">
            [ CONTACT ]
          </h2>
          <h2 className="mt-6 max-w-md text-base font-semibold leading-[1.05] text-white md:mt-8 md:text-[2.75rem]">
            Let’s build something impactful together.
          </h2>
          

          <div className="mt-7 space-y-4 text-sm text-white/80 md:mt-8">
            <a href="mailto:nkathawinnie94@gmail.com" className="hidden items-center gap-3 break-all transition-colors hover:text-white md:flex">
              <FaEnvelope className="text-[#a7f3d0]" />
              <span>nkathawinnie94@gmail.com</span>
            </a>

            <div className="flex flex-nowrap items-center gap-1.5 text-white/75 md:hidden">
              <a
                href="mailto:nkathawinnie94@gmail.com"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-transform hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope className="text-[#a7f3d0] text-xl" />
              </a>

              {socialLinks.map((link) => (
                <a
                  key={`mobile-${link.label}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#a7f3d0] transition-transform hover:scale-110"
                aria-label="Book Calendly"
              >
                <span className="text-base">ⓘ</span>
              </a>
            </div>

            <div className="hidden items-center gap-3 pt-1 text-white/75 md:flex md:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-sm text-white/70 transition-colors hover:text-white md:inline-flex"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center border border-white/15 text-[10px] text-[#a7f3d0]">
                ⓘ
              </span>
              <span>Book a Calendly meeting</span>
            </a>
          </div>
        </motion.div>

        <div className="bg-[#020805]/55 p-5 md:p-8 lg:p-10">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            onSubmit={handleSubmit}
            ref={formRef}
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
                className="h-12 w-full border border-white/10 bg-black/45 px-4 text-sm text-white placeholder-white/35 outline-none transition focus:border-[#86efac]/60 focus:ring-2 focus:ring-[#86efac]/25 md:h-11"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/90" htmlFor="email">
                Email <span className="text-[#86efac]">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="h-12 w-full border border-white/10 bg-black/45 px-4 text-sm text-white placeholder-white/35 outline-none transition focus:border-[#86efac]/60 focus:ring-2 focus:ring-[#86efac]/25 md:h-11"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/90" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full resize-none border border-white/10 bg-black/45 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition focus:border-[#86efac]/60 focus:ring-2 focus:ring-[#86efac]/25"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center rounded-none border bg-emerald-500 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5 hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-emerald-500"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : status === "error" ? "Try again" : "Contact"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
