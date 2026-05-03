import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <nav className="w-full border-b border-emerald-400/15 bg-black/70 px-4 py-2 backdrop-blur-md md:px-8 md:py-3">
        <div className="flex items-center justify-between">
          <span
            className="inline-block w-32 leading-none text-[1.25rem] text-emerald-100 md:w-44 md:text-[1.55rem] lg:w-52 lg:text-[1.75rem]"
            style={{
              fontFamily: '"Edwardian Script ITC", "Snell Roundhand", "Brush Script MT", "Segoe Script", cursive',
              fontStyle: "italic",
              letterSpacing: "0.04em",
              transform: "scaleX(1.2)",
              transformOrigin: "left center",
              textShadow:
                "0 0 10px rgba(163, 230, 53, 0.45), 0 0 24px rgba(163, 230, 53, 0.35), 0 0 42px rgba(34, 197, 94, 0.2)",
            }}
          >
            Winfred
          </span>

          <div className="ml-auto flex items-center gap-8">
            <ul className="hidden items-center gap-8 text-[15px] text-slate-100 md:flex">
              <li><a href="#about" className="transition-colors hover:text-slate-300">ABOUT</a></li>
              <li><a href="#projects" className="transition-colors hover:text-slate-300">PROJECTS</a></li>
              <li><a href="#skills" className="transition-colors hover:text-slate-300">SKILLS</a></li>
              <li><a href="#experience" className="transition-colors hover:text-slate-300">EXPERIENCE</a></li>
            </ul>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center rounded-none border  bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                LET'S TALK
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-emerald-400/20 bg-emerald-400/10 text-emerald-100 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ${
                    isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 block h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ${
                    isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-3 rounded-lg border border-emerald-400/15 bg-black/95 p-3 md:hidden"
          >
            <ul className="space-y-1 text-sm text-emerald-100/90">
              {NAV_LINKS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.22, ease: "easeOut" }}
                  >
                    <motion.a
                      href={`#${item.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      whileTap={{ scale: 0.97 }}
                      className={`block rounded-md px-2.5 py-2 transition-colors duration-200 ${
                        isActive
                          ? "bg-emerald-400/20 text-white"
                          : "hover:bg-emerald-400/10 active:bg-emerald-400/20"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  </motion.li>
                );
              })}
            </ul>
            <div className="mt-3 flex justify-center">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center rounded-none border border-lime-400/35 bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5 hover:bg-lime-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
