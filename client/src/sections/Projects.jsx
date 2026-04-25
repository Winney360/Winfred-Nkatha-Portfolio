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
import ThreeDButton from "../components/ThreeDButton";

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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-12 h-72 w-72 rounded-full bg-[#7e22ce]/20 blur-[90px]" />
        <div className="absolute -bottom-20 right-8 h-80 w-80 rounded-full bg-[#9333ea]/15 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-5 text-3xl font-bold tracking-tight text-white md:text-4xl"
      >
        Projects
      </motion.h2>
      {/* Filter Buttons */}
      <div className="mb-9 flex flex-nowrap gap-1.5 sm:flex-wrap sm:gap-2.5">
        {categories.map((cat) => (
          <ThreeDButton
            key={cat}
            onClick={() => setSelected(cat)}
            size="xs"
            active={selected === cat}
            className="filter-btn"
          >
            {cat}
          </ThreeDButton>
        ))}
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
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-violet-300/20 bg-[#070314] shadow-[0_10px_25px_rgba(17,7,34,0.55)] transition-transform duration-300 hover:-translate-y-1 md:bg-[#100722]"
          >
            {/* Card preview */}
            <div className="relative p-3 pb-0">
              <div className={`relative h-40 overflow-hidden rounded-xl border border-white/10 ${project.image ? "bg-black/30" : `bg-linear-to-br ${project.accent}`}`}>
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
            </div>

            {/* Card Content */}
            <div className="flex min-h-66 flex-1 flex-col gap-3 p-4 pt-3">
              <h3 className="line-clamp-2 min-h-12 text-base font-semibold text-white">{project.title}</h3>
              <p className="line-clamp-2 min-h-10 text-sm text-slate-300">{project.description}</p>

              <div className="flex min-h-7 flex-wrap content-start gap-1.5">
                {project.tech.map((tech) => (
                  (() => {
                    const assetIcon = techAssetIcons[tech];
                    const Icon = techIcons[tech] || FaGithub;
                    const iconColorClass = techIconColors[tech] || "text-violet-100";
                    return (
                      <span
                        key={tech}
                        title={tech}
                        aria-label={tech}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-violet-300/20 bg-violet-500/15 text-violet-100"
                      >
                        {assetIcon ? (
                          <img src={assetIcon} alt="" className="h-4 w-4 object-contain" />
                        ) : (
                          <Icon className={`text-sm ${iconColorClass}`} />
                        )}
                        <span className="sr-only">{tech}</span>
                      </span>
                    );
                  })()
                ))}
              </div>

              <p className="-mt-1 line-clamp-2 min-h-9 text-xs text-slate-400">{project.impact}</p>

              <div className="mt-auto flex gap-2 pt-2">
                <ThreeDButton
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xs"
                  className="pair"
                >
                  Live Demo <FaExternalLinkAlt className="text-[10px]" />
                </ThreeDButton>
                <ThreeDButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xs"
                  className="pair"
                >
                  GitHub Repo <FaGithub className="text-sm" />
                </ThreeDButton>
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
