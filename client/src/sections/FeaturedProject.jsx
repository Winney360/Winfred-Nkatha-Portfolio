import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import guildPreview from "../assets/projects/guild.png";

const FeaturedProject = () => {
  return (
    <section className="relative z-10 mb-0 mt-0 w-full bg-black px-4 pb-16 pt-10 md:px-8 md:pb-20 md:pt-12">
      <div className="mx-auto mb-4 mt-0 w-full max-w-7xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500 md:text-sm">
          [ FEATURED PROJECT ]
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-100 md:mt-5">
          A full-stack community platform where developers, designers, and data
          enthusiasts find collaborators, run projects, and keep events in one
          place.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-7xl overflow-hidden border border-emerald-400/30 bg-black"
      >
        <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-20 h-5 w-5 border-l-2 border-t-2 border-emerald-400 md:h-7 md:w-7" />
        <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-20 h-5 w-5 border-r-2 border-t-2 border-emerald-400 md:h-7 md:w-7" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-20 h-5 w-5 border-b-2 border-l-2 border-emerald-400 md:h-7 md:w-7" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-20 h-5 w-5 border-b-2 border-r-2 border-emerald-400 md:h-7 md:w-7" />

        <div>
          <img
            src={guildPreview}
            alt="Guild Code Community Hub dashboard"
            className="block h-auto w-full"
          />

          <div className="grid w-full grid-cols-1 border-t border-white/20 bg-black/25 md:grid-cols-3 md:divide-x md:divide-white/20">
            <div className="p-4 md:p-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-white md:text-sm">
                The Problem
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Members were coordinating projects and events across scattered
                group chats and spreadsheets. There was no shared place to see
                who was working on what, who could manage what, or when things
                were happening.
              </p>
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-white md:text-sm">
                The Solution
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                A MERN platform with role-based access, project workspaces,
                event coordination, and member profiles — a React and TypeScript
                front end on an Express and MongoDB API, styled with Tailwind
                CSS.
              </p>
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-white md:text-sm">
                Key Features
              </h3>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-300">
                <li>- Role-based access for admins, project leads, and members</li>
                <li>- Project workspaces so teams collaborate in one place</li>
                <li>- Event coordination alongside the project work</li>
                <li>- Responsive interface built with Tailwind CSS</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-white/20 p-4 md:p-5">
            <a
              href="https://guild-code-community.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-emerald-500 bg-emerald-500 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              View Live <FaExternalLinkAlt className="text-[10px]" />
            </a>
            <a
              href="https://github.com/Winney360/Guild_Code_Community_Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-white/20 bg-transparent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200 transition-colors hover:border-emerald-400/60 hover:text-white"
            >
              Source Code <FaGithub className="text-sm" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
