import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaCss3Alt, FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import assignmentPreview from "../assets/projects/Assignment.png";
import commitPreview from "../assets/projects/commit.png";
import crochetPreview from "../assets/projects/crochet.png";
import cropPreview from "../assets/projects/crop.png";
import html5Logo from "../assets/html5.png";
import mongodbLogo from "../assets/mongodb.svg";
import resumePreview from "../assets/projects/resume.png";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiTailwindcss,
  SiTensorflow,
  SiVite,
} from "react-icons/si";

const projectsData = [
  {
    title: "Crochet Portfolio & Management Platform",
    description:
      "A responsive website designed to showcase crochet designs and enhance the client’s online presence.",
    image: crochetPreview,
    imageAlt: "Crochet Portfolio preview",
    tech: ["React", "Vite", "Tailwind CSS", "Express", "JavaScript", "MongoDB"],
    highlight:
      "An admin panel lets staff publish designs and update content without touching code.",
    live: "https://shikuku-crochet.vercel.app/",
    github: "https://github.com/Winney360/Crochet.git",
    categories: ["Frontend", "Full Stack"],
    accent: "from-[#f5efff] via-[#e7d8ff] to-[#c9a5ff]",
  },
  {
    title: "Assignment Hub : Assignment Distribution Platform",
    description:
      "A MERN platform where teachers upload assignments and students access them using unique codes.",
    image: assignmentPreview,
    imageAlt: "Assignment Hub preview",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlight:
      "Teachers upload an assignment once; students open it with a unique code.",
    live: "https://assignment-hub-eight.vercel.app",
    github: "https://github.com/Winney360/Assignment-hub.git",
    categories: ["Full Stack"],
    accent: "from-[#5b5ef7] via-[#7e4cff] to-[#c08dff]",
  },
  {
    title: "DailyCommit : Daily Consistency Tracker",
    description:
      "A productivity app that enables users to track daily commits and improve habit consistency.",
    image: commitPreview,
    imageAlt: "DailyCommit preview",
    tech: ["React", "Node.js", "Tailwind CSS", "MongoDB", "JavaScript"],
    highlight:
      "A running record of daily commits makes consistency visible over time.",
    live: "https://daily-commit-theta.vercel.app/",
    github: "https://github.com/Winney360/dailyCommit.git",
    categories: ["Full Stack"],
    accent: "from-[#32204d] via-[#4a2a73] to-[#8a63be]",
  },
  {
    title: "CropConnect : Agriculture Platform",
    description:
      "A platform designed to connect farmers with markets and improve access to agricultural resources.",
    image: cropPreview,
    imageAlt: "CropConnect preview",
    tech: ["React", "MongoDB", "Tailwind CSS"],
    highlight:
      "Farmers and buyers meet in one marketplace instead of scattered channels.",
    live: "https://agri-flow-ten.vercel.app/",
    github: "https://github.com/Winney360/AgriFlow.git",
    categories: ["Full Stack"],
    accent: "from-[#6456df] via-[#8d6cfb] to-[#c0a7ff]",
  },
  {
    title: "Resume Matcher : AI Resume Matching System",
    description:
      "An AI-powered system that matches resumes to job descriptions based on semantic similarity and relevance.",
    image: resumePreview,
    imageAlt: "Resume Matcher preview",
    tech: ["HTML5", "CSS3", "Python", "TensorFlow"],
    highlight:
      "Ranks resumes against a job description by semantic similarity, not just keywords.",
    live: "https://www.loom.com/share/89ffd0ec4ac24f2f9fb45f3b6225fb99?sid=743ae42e-4231-4e82-bd04-f2be17f53eb4",
    liveLabel: "Watch Demo",
    github: "https://github.com/ireneiroha/Building_AI_Powered_Job_Description_and_Resume_Matching_System.git",
    categories: ["AI"],
    accent: "from-[#2a1d40] via-[#3b255e] to-[#7d5fc2]",
  },
];

const categories = ["All", "Frontend", "Full Stack", "AI"];

const techIcons = {
  React: FaReact,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  CSS3: FaCss3Alt,
  Python: SiPython,
  TensorFlow: SiTensorflow,
  Vite: SiVite,
};

const techIconColors = {
  React: "text-[#61dafb]",
  "Node.js": "text-[#68a063]",
  Express: "text-[#cbd5e1]",
  MongoDB: "text-[#47a248]",
  "Tailwind CSS": "text-[#38bdf8]",
  JavaScript: "text-[#facc15]",
  CSS3: "text-[#1572b6]",
  Python: "text-[#3776ab]",
  TensorFlow: "text-[#ff6f00]",
  Vite: "text-[#f9c74f]",
};

const techAssetIcons = {
  HTML: html5Logo,
  HTML5: html5Logo,
  MongoDB: mongodbLogo,
};

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const prefersReducedMotion = useReducedMotion();

  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const scrollRange = useMotionValue(0);
  const [hasScroll, setHasScroll] = useState(false);

  const filtered =
    selected === "All"
      ? projectsData
      : projectsData.filter((p) => {
          const assignedCategories = p.categories || (p.category ? [p.category] : []);
          return assignedCategories.includes(selected);
        });

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current && trackRef.current.parentElement) {
        const trackWidth = trackRef.current.scrollWidth;
        const contentWidth = trackRef.current.parentElement.clientWidth;
        const distance = Math.max(0, trackWidth - contentWidth);
        scrollRange.set(distance);
        setHasScroll(distance > 20);
      }
    };

    updateScrollRange();
    const timer = setTimeout(updateScrollRange, 80);

    let ro;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      ro = new ResizeObserver(() => updateScrollRange());
      ro.observe(trackRef.current);
      if (trackRef.current.parentElement) {
        ro.observe(trackRef.current.parentElement);
      }
    }

    window.addEventListener("resize", updateScrollRange);
    return () => {
      clearTimeout(timer);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", updateScrollRange);
    };
  }, [filtered, selected, scrollRange]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    [scrollYProgress, scrollRange],
    ([progress, range]) => -progress * range
  );

  const handleCategoryClick = (cat) => {
    if (selected === cat) return;
    if (targetRef.current && hasScroll) {
      const rect = targetRef.current.getBoundingClientRect();
      if (rect.top < 0) {
        const targetTop = rect.top + window.scrollY;
        window.scrollTo({ top: targetTop, behavior: "instant" });
      }
    }
    setSelected(cat);
  };

  const scrollByDirection = (direction) => {
    const step = window.innerHeight * 0.6;
    window.scrollBy({ top: direction * step, behavior: "smooth" });
  };

  const isScrollActive = !prefersReducedMotion && hasScroll;
  const sectionHeight = isScrollActive
    ? `${Math.min(320, 160 + filtered.length * 30)}vh`
    : "auto";

  return (
    <section
      ref={targetRef}
      id="projects"
      style={{ height: sectionHeight }}
      className="relative bg-black px-4 md:px-8"
    >
      <div
        className={`flex flex-col justify-center overflow-hidden ${
          isScrollActive
            ? "sticky top-0 h-screen py-6 md:py-8"
            : "relative min-h-[70vh] py-16 md:py-24"
        }`}
      >
        {/* Header & Filter Controls */}
        <div className="mx-auto mb-4 w-full max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-4 text-right text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500 md:text-sm"
          >
            [ PROJECTS ]
          </motion.h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-end gap-1.5 sm:gap-2.5">
            {categories.map((cat) => {
              const isActive = selected === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  className={`inline-flex items-center rounded-none border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-transform hover:-translate-y-0.5 ${
                    isActive
                      ? "bg-emerald-500 text-black hover:bg-emerald-300"
                      : "border-emerald-400/40 bg-transparent text-emerald-300 hover:bg-emerald-500/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Line of Cards */}
        <div className="w-full overflow-hidden">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              ref={trackRef}
              style={{ x: isScrollActive ? x : 0 }}
              className={`flex items-stretch gap-5 will-change-transform ${
                !isScrollActive ? "justify-center" : ""
              } ${prefersReducedMotion ? "overflow-x-auto pb-4" : ""}`}
            >
              {filtered.map((project) => (
                <article
                  key={project.title}
                  className="group relative flex h-[420px] w-[280px] shrink-0 flex-col overflow-hidden border border-emerald-400/30 bg-black transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 sm:h-[440px] sm:w-[330px] md:h-[450px] md:w-[370px]"
                >
                  {/* Cyberpunk corner accents */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 z-20 h-4 w-4 border-l-2 border-t-2 border-emerald-400 md:h-5 md:w-5"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 z-20 h-4 w-4 border-r-2 border-t-2 border-emerald-400 md:h-5 md:w-5"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 z-20 h-4 w-4 border-b-2 border-l-2 border-emerald-400 md:h-5 md:w-5"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 right-0 z-20 h-4 w-4 border-b-2 border-r-2 border-emerald-400 md:h-5 md:w-5"
                  />

                  {/* Card preview */}
                  <div
                    className={`relative h-36 shrink-0 overflow-hidden sm:h-40 ${
                      project.image ? "bg-black/30" : `bg-linear-to-br ${project.accent}`
                    }`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt || `${project.title} preview`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.42),transparent_24%),radial-gradient(circle_at_75%_80%,rgba(80,35,170,0.28),transparent_38%)]" />
                        <div className="absolute left-3 right-3 top-3 rounded-lg border border-black/20 bg-black/35 p-2 backdrop-blur-sm">
                          <div className="mb-2 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-2 rounded bg-white/50" />
                            <div className="h-2 w-10/12 rounded bg-white/35" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5">
                          <div className="h-10 rounded-md border border-white/20 bg-black/30" />
                          <div className="h-10 rounded-md border border-white/20 bg-black/25" />
                          <div className="h-10 rounded-md border border-white/20 bg-black/20" />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-4 pt-3">
                    <div>
                      <h3 className="line-clamp-2 min-h-11 text-sm font-semibold leading-snug text-slate-100 transition-colors group-hover:text-white sm:text-base">
                        {project.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs text-slate-400 sm:text-sm">
                        {project.description}
                      </p>

                      <div className="my-2.5 flex min-h-7 flex-wrap content-start items-center gap-3">
                        {project.tech.map((tech) => {
                          const assetIcon = techAssetIcons[tech];
                          const Icon = techIcons[tech];
                          const iconColorClass = techIconColors[tech] || "text-emerald-100";

                          return (
                            <span
                              key={tech}
                              title={tech}
                              aria-label={tech}
                              className="inline-flex items-center"
                            >
                              {assetIcon ? (
                                <img src={assetIcon} alt="" className="h-5 w-5 object-contain" />
                              ) : Icon ? (
                                <Icon className={`text-xl ${iconColorClass}`} />
                              ) : (
                                <span className="text-[10px] uppercase tracking-wide text-slate-400">
                                  {tech}
                                </span>
                              )}
                              <span className="sr-only">{tech}</span>
                            </span>
                          );
                        })}
                      </div>

                      <p className="flex min-h-9 gap-1.5 text-xs leading-5 text-slate-300">
                        <span aria-hidden="true" className="text-emerald-400/70">
                          →
                        </span>
                        <span className="line-clamp-2">{project.highlight}</span>
                      </p>
                    </div>

                    <div className="mt-auto flex gap-2 border-t border-emerald-400/10 pt-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-none border border-emerald-500 bg-emerald-500 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
                      >
                        {project.liveLabel || "Live Demo"} <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-none border border-white/20 bg-transparent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200 transition-colors hover:border-emerald-400/60 hover:text-white"
                      >
                        GitHub <FaGithub className="text-sm" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Interactive Reel Bar */}
        {isScrollActive && (
          <div className="mx-auto mt-4 w-full max-w-7xl">
            <div className="flex items-center justify-between border-t border-emerald-400/15 pt-3">
              le

              <div className="flex items-center gap-3">
                {/* Progress bar */}
                <div className="relative h-1 w-24 overflow-hidden rounded-full bg-white/10 sm:w-40">
                  <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="h-full w-full origin-left bg-gradient-to-r from-emerald-500 to-emerald-300"
                  />
                </div>

                {/* Step arrow controls */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => scrollByDirection(-1)}
                    aria-label="Previous project in reel"
                    className="inline-flex h-6 w-6 items-center justify-center border border-emerald-400/30 text-xs text-emerald-300 transition-colors hover:border-emerald-400 hover:bg-emerald-400/10"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollByDirection(1)}
                    aria-label="Next project in reel"
                    className="inline-flex h-6 w-6 items-center justify-center border border-emerald-400/30 text-xs text-emerald-300 transition-colors hover:border-emerald-400 hover:bg-emerald-400/10"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
