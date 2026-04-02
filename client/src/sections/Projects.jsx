import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiChartdotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const projectsData = [
  {
    title: "Project Nebula: AI-Powered Platform",
    description: "Smart analytics workspace with live KPI tracking and trend detection.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    impact: "Reduced reporting time by 40% and enabled data-driven decisions.",
    live: "#",
    github: "#",
    category: "Full Stack",
    accent: "from-[#5b5ef7] via-[#7e4cff] to-[#c08dff]",
  },
  {
    title: "Signal Vista: SaaS Control Center",
    description: "Enterprise dashboard UI with account management and growth insights.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    impact: "Improved operator efficiency by 28% with cleaner data visualization.",
    live: "#",
    github: "#",
    category: "Full Stack",
    accent: "from-[#30384f] via-[#424866] to-[#8188b1]",
  },
  {
    title: "Flow Ledger: Finance Workspace",
    description: "Clean transaction and report interface with role-based admin tools.",
    tech: ["React", "Vite", "Tailwind CSS"],
    impact: "Cut monthly close cycle by 2 days with process automation.",
    live: "#",
    github: "#",
    category: "Frontend",
    accent: "from-[#f4f5fc] via-[#dbe2ff] to-[#b7c8ff]",
  },
  {
    title: "Pulse CRM: AI-Powered Platform",
    description: "Pipeline management suite with scoring, reminders, and collaboration.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    impact: "Raised lead conversion by 19% through predictive recommendations.",
    live: "#",
    github: "#",
    category: "Frontend",
    accent: "from-[#6456df] via-[#8d6cfb] to-[#c0a7ff]",
  },
  {
    title: "Nimbus Market: AI Campaign Studio",
    description: "Marketing command center for campaign setup and performance tracking.",
    tech: ["React", "Node.js", "PostgreSQL"],
    impact: "Reduced campaign setup time by 35% for growth teams.",
    live: "#",
    github: "#",
    category: "AI",
    accent: "from-[#e8ebf6] via-[#cfd7ed] to-[#9faecf]",
  },
  {
    title: "Orbit Ops: Workflow Console",
    description: "Operational cockpit with queue monitoring and alert triage workflows.",
    tech: ["React", "Express", "Redis"],
    impact: "Dropped critical incident response times by 42%.",
    live: "#",
    github: "#",
    category: "AI",
    accent: "from-[#2d3148] via-[#3d4261] to-[#7e86ba]",
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
  Vite: "text-[#f9c74f]",
  "Next.js": "text-[#f5f5f5]",
  Supabase: "text-[#3ecf8e]",
  PostgreSQL: "text-[#336791]",
  Redis: "text-[#dc382d]",
};

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selected);

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
      <div className="mb-9 flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors
              ${selected === cat
                ? "border-indigo-300/35 bg-[#5c56e8] text-white"
                : "border-white/15 bg-[#171a2f]/90 text-slate-300 hover:bg-[#232744] hover:text-white"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
            className="group overflow-hidden rounded-2xl border border-indigo-200/15 bg-[#0d1022]/95 shadow-[0_10px_25px_rgba(3,8,25,0.45)] transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Card preview */}
            <div className="relative p-3 pb-0">
              <div className={`relative h-40 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.accent}`}>
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
              </div>
            </div>

            {/* Card Content */}
            <div className="flex min-h-[16.5rem] flex-col gap-3 p-4 pt-3">
              <h3 className="line-clamp-2 text-base font-semibold text-white">{project.title}</h3>
              <p className="line-clamp-2 text-sm text-slate-300">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  (() => {
                    const Icon = techIcons[tech] || FaGithub;
                    const iconColorClass = techIconColors[tech] || "text-indigo-100";
                    return (
                      <span
                        key={tech}
                        title={tech}
                        aria-label={tech}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-indigo-200/15 bg-indigo-500/10 text-indigo-100"
                      >
                        <Icon className={`text-sm ${iconColorClass}`} />
                        <span className="sr-only">{tech}</span>
                      </span>
                    );
                  })()
                ))}
              </div>

              <p className="line-clamp-2 text-xs text-slate-400">{project.impact}</p>

              <div className="mt-auto flex gap-2 pt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#5c56e8] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#6b66ee]"
                >
                  Live Demo <FaExternalLinkAlt className="text-[10px]" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 transition-colors hover:bg-white/10"
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
