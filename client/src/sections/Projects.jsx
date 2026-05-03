import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCss3Alt, FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import assignmentPreview from "../assets/projects/Assignment.png";
import commitPreview from "../assets/projects/commit.png";
import crochetPreview from "../assets/projects/crochet.png";
import cropPreview from "../assets/projects/crop.png";
import html5Logo from "../assets/html5.png";
import mongodbLogo from "../assets/mongodb.svg";
import unsaidPreview from "../assets/projects/unsaid.png";
import resumePreview from "../assets/projects/resume.png";
import {
  SiChartdotjs,
  SiExpress,
  SiGooglegemini,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVite,
  SiPython,
} from "react-icons/si";

const projectsData = [
  {
    title: "Assignment Hub : Assignment Distribution Platform",
    description: "A MERN platform where teachers upload assignments and students access them using unique codes.",
    image: assignmentPreview,
    imageAlt: "Assignment Hub preview",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    impact: "Improved assignment access for students and streamlined distribution for teachers.",
    live: "https://assignment-hub-eight.vercel.app",
    github: "https://github.com/Winney360/Assignment-hub.git",
    categories: ["Full Stack"],
    accent: "from-[#5b5ef7] via-[#7e4cff] to-[#c08dff]",
  },
  {
    title: "DailyCommit : Daily Consistency Tracker",
    description: "A productivity app that enables users to track daily commits and improve habit consistency.",
    image: commitPreview,
    imageAlt: "DailyCommit preview",
    tech: ["React", "Node.js", "Tailwind CSS", "MongoDB","JavaScript"],
    impact: "Improved user consistency and habit-building.",
    live: "https://daily-commit-theta.vercel.app/",
    github: "https://github.com/Winney360/dailyCommit.git",
    categories: ["Full Stack"],
    accent: "from-[#32204d] via-[#4a2a73] to-[#8a63be]",
  },
  {
    title: "Crochet Portfolio & Management Platform",
    description: "A responsive website designed to showcase crochet designs and enhance the client’s online presence.",
    image: crochetPreview,
    imageAlt: "Crochet Portfolio preview",
    tech: ["React", "Vite", "Tailwind CSS", "Express", "JavaScript", "MongoDB"],
    impact: "Improved visibility and streamlined content and staff management.",
    live: "https://shikuku-crochet.vercel.app/",
    github: "https://github.com/Winney360/Crochet.git",
    categories: ["Frontend","Full Stack"],
    accent: "from-[#f5efff] via-[#e7d8ff] to-[#c9a5ff]",
  },
  {
    title: "CropConnect : Agriculture Platform",
    description: "A platform designed to connect farmers with markets and improve access to agricultural resources.",
    image: cropPreview,
    imageAlt: "CropConnect preview",
    tech: ["React", "MongoDB", "Tailwind CSS"],
    impact: "Improved market access and streamlined communication between farmers and buyers.",
    live: "https://agri-flow-ten.vercel.app/",
    github: "https://github.com/Winney360/AgriFlow.git",
    categories: ["Full Stack"],
    accent: "from-[#6456df] via-[#8d6cfb] to-[#c0a7ff]",
  },
  {
    title: "UNSAID : Emotional Translation Platform",
    description: "An AI-powered platform that translates raw emotions into clear, respectful communication to help users express themselves effectively.",
    image: unsaidPreview,
    imageAlt: "UNSAID preview",
    tech: ["React", "Node.js", "gemini-1.5-pro", "Tailwind CSS", "MongoDB"],
    impact: "Improved emotional clarity and enabled safer, more structured communication.",
    live: "https://unsaid-green.vercel.app/",
    github: "https://github.com/Winney360/Unsaid.git",
    categories: ["AI"],
    accent: "from-[#eee4ff] via-[#d8c2ff] to-[#ad8cef]",
  },
  {
    title: "Resume Matcher : AI Resume Matching System",
    description: "An AI-powered system that matches resumes to job descriptions based on semantic similarity and relevance.",
    image: resumePreview,
    imageAlt: "Resume Matcher preview",
    tech: ["HTML5","CSS3",  "python", "TensorFlow"],
    impact: "Enhanced hiring efficiency through intelligent resume-to-job matching.",
    live: "https://www.loom.com/share/89ffd0ec4ac24f2f9fb45f3b6225fb99?sid=743ae42e-4231-4e82-bd04-f2be17f53eb4",
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
  TypeScript: SiTypescript,
  "Chart.js": SiChartdotjs,
  JavaScript: SiJavascript,
  CSS3: FaCss3Alt,
  python: SiPython,
  TensorFlow: SiTensorflow,
  "gemini-1.5-pro": SiGooglegemini,
  "google-generative-ai": SiGooglegemini,
  Vite: SiVite,
  "Next.js": SiNextdotjs,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
};

const techIconColors = {
  React: "text-[#61dafb]",
  "Node.js": "text-[#68a063]",
  Express: "text-[#cbd5e1]",
  MongoDB: "text-[#47a248]",
  "Tailwind CSS": "text-[#38bdf8]",
  TypeScript: "text-[#3178c6]",
  "Chart.js": "text-[#ff6384]",
  JavaScript: "text-[#facc15]",
  CSS3: "text-[#1572b6]",
  python: "text-[#3776ab]",
  TensorFlow: "text-[#ff6f00]",
  "gemini-1.5-pro": "text-[#8ab4f8]",
  "google-generative-ai": "text-[#8ab4f8]",
  Vite: "text-[#f9c74f]",
  "Next.js": "text-[#f5f5f5]",
  Supabase: "text-[#3ecf8e]",
  PostgreSQL: "text-[#336791]",
  Redis: "text-[#dc382d]",
};

const techAssetIcons = {
  HTML: html5Logo,
  HTML5: html5Logo,
  MongoDB: mongodbLogo,
};

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? projectsData
      : projectsData.filter((p) => {
          const assignedCategories = p.categories || (p.category ? [p.category] : []);
          return assignedCategories.includes(selected);
        });

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-4 py-18 md:px-8"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500 md:text-sm"
      >
        [ PROJECTS ]
      </motion.h2>
      {/* Filter Buttons */}
      <div className="mb-9 flex flex-nowrap gap-1.5 sm:flex-wrap sm:gap-2.5">
        {categories.map((cat) => {
          const isActive = selected === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelected(cat)}
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
      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
            className="group relative flex h-full flex-col overflow-hidden border border-emerald-400/30 bg-black transition-transform duration-300 hover:-translate-y-1"
          >
            <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-20 h-4 w-4 border-l-2 border-t-2 border-emerald-400 md:h-5 md:w-5" />
            <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-20 h-4 w-4 border-r-2 border-t-2 border-emerald-400 md:h-5 md:w-5" />
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-20 h-4 w-4 border-b-2 border-l-2 border-emerald-400 md:h-5 md:w-5" />
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-20 h-4 w-4 border-b-2 border-r-2 border-emerald-400 md:h-5 md:w-5" />
            {/* Card preview */}
            <div className={`relative h-40 overflow-hidden ${project.image ? "bg-black/30" : `bg-linear-to-br ${project.accent}`}`}>
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
            <div className="flex min-h-66 flex-1 flex-col gap-3 p-4 pt-3">
              <h3 className="line-clamp-2 min-h-12 text-base font-semibold text-slate-400 transition-colors group-hover:text-slate-300">{project.title}</h3>
              <p className="line-clamp-2 min-h-10 text-sm text-slate-300">{project.description}</p>

              <div className="flex min-h-7 flex-wrap content-start items-center gap-3">
                {project.tech.map((tech) => (
                  (() => {
                    const assetIcon = techAssetIcons[tech];
                    const Icon = techIcons[tech] || FaGithub;
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
                        ) : (
                          <Icon className={`text-xl ${iconColorClass}`} />
                        )}
                        <span className="sr-only">{tech}</span>
                      </span>
                    );
                  })()
                ))}
              </div>

              <p className="-mt-1 line-clamp-2 min-h-9 text-xs text-slate-400">{project.impact}</p>

              <div className="mt-auto flex gap-2 pt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-none border bg-emerald-500 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Live Demo <FaExternalLinkAlt className="text-[10px]" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-none border bg-emerald-500 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  GitHub Repo <FaGithub className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
