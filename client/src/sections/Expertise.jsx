import React from "react";
import { motion } from "framer-motion";
import Starfield from "../components/Starfield";
import cursorLogo from "../assets/cursor.png";
import vscodeIcon from "../assets/vscode.png";
import figmaLogo from "../assets/figma-logo.svg";
import githubLogo from "../assets/github.png";
import html5Logo from "../assets/html5.png";
import mongodbLogo from "../assets/mongodb.svg";
import mysqlLogo from "../assets/mysql.png";
import postmanLogo from "../assets/postman.png";
import {
  SiAngular,
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
  { label: "Angular", icon: SiAngular, pos: "top-[30px] left-[167px]", color: "text-[#dd0031]" },
  { label: "MySQL", icon: mysqlLogo, pos: "top-[99px] left-[274px]", isImage: true },
  { label: "Postman", icon: postmanLogo, pos: "top-[210px] left-[267px]", isImage: true },
  { label: "Cursor", icon: cursorLogo, pos: "top-[269px] left-[167px]", isImage: true },
  { label: "GitHub", icon: githubLogo, pos: "top-[210px] left-[58px]", isImage: true },
  { label: "HTML5", icon: html5Logo, pos: "top-[100px] left-[59px]", isImage: true },
];

const Skills = () => {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 md:px-8" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500 md:text-sm">[ TECHNICAL EXPERTISE ]</h2>

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-center md:gap-4">
          <div className="space-y-4 pr-6 md:pr-0">
            {Object.entries(groupedSkills).map(([groupName, items]) => (
              <div key={groupName}>
                <h3 className="mb-2 text-[20px] font-medium text-white">{groupName}</h3>
                <div className="grid grid-cols-3 gap-1.5 md:flex md:flex-wrap md:gap-10">
                  {items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group relative flex aspect-square w-full max-w-22 flex-col items-center justify-center border border-emerald-400/30 bg-black p-1.5 transition-transform duration-300 hover:-translate-y-0.5 md:h-30 md:w-30 md:max-w-none md:flex-none md:p-2"
                      >
                        <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-20 h-2.5 w-2.5 border-r-2 border-t-2 border-emerald-400 md:h-3 md:w-3" />
                        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-emerald-400 md:h-3 md:w-3" />
                        {skill.isImage ? (
                          <img src={skill.icon} alt={skill.name} className="mb-1 h-6 w-6 object-contain md:h-8 md:w-8" />
                        ) : (
                          <Icon className={`mb-1 text-[1.25rem] md:text-[1.75rem] ${skill.color}`} />
                        )}
                        <p className="text-[10px] leading-tight text-slate-100 md:text-[11px]">{skill.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto w-full max-w-96 pt-1 pr-6 sm:pr-3 md:pr-0 md:mx-0 md:justify-self-start lg:-ml-40">
            <div className="relative mx-auto h-96 w-105 origin-center -translate-x-8 scale-100 sm:-translate-x-6 sm:scale-110 md:translate-x-0 lg:scale-115">
              <Starfield count={70} />
              <div className="absolute left-1/2 top-1/2 h-61 w-61 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/45" />
              <div className="absolute left-1/2 top-1/2 h-30 w-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/65 bg-black" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-[14px] font-bold leading-none text-white">Intermediate</p>
              </div>

              {clusterNodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.label}
                    className={`absolute ${node.pos} flex h-22 w-22 flex-col items-center justify-center border border-emerald-400/28 bg-black text-center [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]`}
                  >
                    {node.isImage ? (
                      <img src={node.icon} alt={node.label} className="mb-1 h-5 w-5 object-contain" />
                    ) : (
                      <Icon className={`mb-1 text-[15px] ${node.color}`} />
                    )}
                    <p className="text-[10px] text-slate-200">{node.label}</p>
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
