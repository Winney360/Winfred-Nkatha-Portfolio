import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "Frontend Engineer",
    company: "Company Name",
    date: "Jan '24 – 2026",
    logo: "",
    description:
      "Built polished product experiences, improved front-end performance, and collaborated closely with design and product teams.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "StartupHub",
    date: "Sep '23 – Dec '23",
    logo: "",
    description:
      "Shipped internal tooling, streamlined onboarding flows, and delivered analytics views used by the team.",
  },
  {
    role: "Frontend Engineer",
    company: "Freelance",
    date: "Mar '22 – Jul '23",
    logo: "",
    description:
      "Designed and delivered client-facing interfaces with a focus on clarity, responsiveness, and polish.",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const Experience = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 text-3xl font-bold text-white md:text-4xl"
      >
        Experience / Journey
      </motion.h2>
      <div className="relative overflow-hidden rounded-[28px] border border-[#43305f]/70 bg-linear-to-br from-[#0b0714] via-[#100a1c] to-[#0d0817] px-4 py-10 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.55)] md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(145,115,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(95,63,180,0.18),transparent_30%)]" />
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
            <div className="h-full w-px bg-linear-to-b from-[#6f5ce7]/10 via-[#8a75ff]/65 to-[#6f5ce7]/10" />
          </div>

          <div className="space-y-10 md:space-y-12">
            {experience.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ delay: idx * 0.08, duration: 0.65, ease: "easeOut" }}
                  className="relative grid items-center gap-4 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:gap-6"
                >
                  <div className={`order-2 md:order-none ${isLeft ? "md:col-start-1 md:justify-self-end md:text-right" : "md:col-start-3 md:justify-self-start"}`}>
                    <div className="mx-auto max-w-md">
                      <div className={`mb-3 flex items-center gap-3 ${isLeft ? "justify-start md:flex-row-reverse" : "justify-start"}`}>
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                          {exp.logo ? (
                            <img src={exp.logo} alt={exp.company} className="h-full w-full rounded-md object-contain p-1.5" />
                          ) : (
                            <span className="text-[11px] font-bold tracking-wide text-slate-700">
                              {getInitials(exp.company)}
                            </span>
                          )}
                        </div>
                        <div className={`${isLeft ? "text-right" : "text-left"}`}>
                          <div className="text-[11px] font-medium tracking-[0.2em] text-[#b19cff]">{exp.date}</div>
                          <h3 className="mt-1 text-lg font-semibold text-white md:text-[1.05rem]">{exp.role}</h3>
                          <div className="mt-1 text-xs text-[#9f8bc3]">{exp.company}</div>
                        </div>
                      </div>
                      <p className={`max-w-sm text-sm leading-6 text-[#a89bc7] ${isLeft ? "ml-auto text-right" : "text-left"}`}>
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative order-1 mx-auto flex h-14 w-14 items-center justify-center md:order-none md:col-start-2">
                    <span className="absolute h-3 w-3 rounded-full bg-[#a58cff] shadow-[0_0_0_8px_rgba(165,140,255,0.12)]" />
                  </div>

                  <div className={`hidden md:block ${isLeft ? "md:col-start-3" : "md:col-start-1"}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
