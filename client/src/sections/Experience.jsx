import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "Team lead / Backend Engineer",
    company: "Guild Code",
    date: "Feb '24 2026 - Present",
    logo: "/guild.jpeg",
    description:
      "Leading backend development as a sole backend engineer, building a scalable system for a community platform.",
  },
  {
    role: "UI/UX Student",
    company: "FaithTech Digital Program",
    date: "Feb '26 – April '26",
    logo: "/faith.png",
    description:
      "Currently developing UI/UX skills, focusing on user-centered design and modern interface principles.",
  },
  {
    role: "Leadership Fellow",
    company: "Taifa Teule Experience (TLX)",
    date: "Sep '25 – Dec '25",
    logo: "/tlx.jpeg",
    description:
      "Engaged in a leadership program focused on building leadership capacity, collaboration, and personal growth within a community of emerging leaders",
  },
  {
    role: "Software Development Fellow",
    company: "Taifa Teule Experience (TLX)",
    date: "Sep '25 – Dec '25",
    logo: "/plp.png",
    description:
      "Completed hands-on training in the MERN stack while building full-stack applications and strengthening practical development skills.",
  },
  {
    role: "BSc. Mathematics and Computer Science Student",
    company: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
    date: "Sep '24 – Present",
    logo: "/jkuat.png",
    description:
      "Pursuing a degree in Mathematics and Computer Science, building strong foundations in algorithms, programming, and analytical thinking.",
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
    <section className="w-full bg-linear-to-b from-[#070311] via-[#0b0618] to-[#090413]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 text-3xl font-bold text-white md:text-4xl"
        >
          Experience / Journey
        </motion.h2>
        <div className="relative md:px-10">
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
                  className="relative grid items-start gap-4 md:grid-cols-2 md:gap-x-16"
                >
                  <div className={`order-2 md:order-0 ${isLeft ? "md:col-start-1 md:justify-self-end md:text-right" : "md:col-start-2 md:justify-self-start"}`}>
                    <div className="mx-auto max-w-md">
                      <div className={`mb-3 flex items-center gap-3 ${isLeft ? "justify-start md:flex-row-reverse" : "justify-start"}`}>
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                          {exp.logo ? (
                            <img src={exp.logo} alt={exp.company} className="h-full w-full rounded-md object-cover" />
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

                  <span className="pointer-events-none absolute left-1/2 top-3 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[#a58cff] shadow-[0_0_0_8px_rgba(165,140,255,0.12)] md:block" />
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
