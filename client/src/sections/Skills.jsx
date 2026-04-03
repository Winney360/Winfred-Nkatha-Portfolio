import React from "react";
import { motion } from "framer-motion";
import claudeLogo from "../assets/claude.png";
import cursorLogo from "../assets/cursor.png";
import vscodeIcon from "../assets/vscode.png";
import figmaLogo from "../assets/figma-logo.svg";
import githubLogo from "../assets/github.png";
import html5Logo from "../assets/html5.png";
import mongodbLogo from "../assets/mongodb.svg";
import mysqlLogo from "../assets/mysql.png";
import postmanLogo from "../assets/postman.png";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const groupedSkills = {
  Frontend: [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Tailwind CSS v4", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
    { name: "Express", icon: SiExpress, color: "text-slate-200" },
    { name: "MongoDB", icon: mongodbLogo, color: "text-green-500", isImage: true },
  ],
  Tools: [
    { name: "Git", icon: SiGit, color: "text-orange-400" },
    { name: "Figma", icon: figmaLogo, color: "text-pink-400", isImage: true },
    { name: "VS Code", icon: vscodeIcon, color: "text-blue-400", isImage: true },
  ],
};

const clusterNodes = [
  { label: "Claude", icon: claudeLogo, pos: "top-[10px] left-[103px]", isImage: true },
  { label: "MySQL", icon: mysqlLogo, pos: "top-[52px] left-[174px]", isImage: true },
  { label: "Postman", icon: postmanLogo, pos: "top-[129px] left-[174px]", isImage: true },
  { label: "Cursor", icon: cursorLogo, pos: "top-[172px] left-[103px]", isImage: true },
  { label: "GitHub", icon: githubLogo, pos: "top-[129px] left-[32px]", isImage: true },
  { label: "HTML5", icon: html5Logo, pos: "top-[52px] left-[32px]", isImage: true },
];

const Skills = () => {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 md:px-8" id="skills">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-[#7e22ce]/20 blur-[90px]" />
        <div className="absolute -bottom-16 right-10 h-80 w-80 rounded-full bg-[#9333ea]/15 blur-[110px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">Skills</h2>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div className="space-y-4">
            {Object.entries(groupedSkills).map(([groupName, items]) => (
              <div key={groupName}>
                <h3 className="mb-2 text-[20px] font-medium text-white">{groupName}</h3>
                <div className="grid grid-cols-3 gap-3">
                  {items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group flex h-[7.5rem] w-[7.5rem] flex-col items-center justify-center rounded-xl border border-indigo-200/15 bg-[#111733]/80 p-2 shadow-lg shadow-black/20 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        {skill.isImage ? (
                          <img src={skill.icon} alt={skill.name} className="mb-1 h-8 w-8 object-contain" />
                        ) : (
                          <Icon className={`mb-1 text-[1.75rem] ${skill.color}`} />
                        )}
                        <p className="text-[11px] leading-tight text-slate-100">{skill.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto w-full max-w-[320px] pt-2">
            <div className="relative mx-auto h-65 w-65">
              <div className="absolute left-1/2 top-1/2 h-49.5 w-49.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/18" />
              <div className="absolute left-1/2 top-1/2 h-21 w-21 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/35 bg-[#141b3f]/95 shadow-[0_0_35px_rgba(168,85,247,0.45)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-[22px] font-bold leading-none text-white">85%</p>
              </div>

              {clusterNodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.label}
                    className={`absolute ${node.pos} flex h-19 w-19 flex-col items-center justify-center border border-violet-300/22 bg-[#121737]/85 text-center shadow-md shadow-black/30 backdrop-blur-sm [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]`}
                  >
                    {node.isImage ? (
                      <img src={node.icon} alt={node.label} className="mb-1 h-4 w-4 object-contain" />
                    ) : (
                      <Icon className={`mb-1 text-[15px] ${node.color}`} />
                    )}
                    <p className="text-[9px] text-slate-200">{node.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
