import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const experience = [
  {
    role: "Website Development Trainee",
    company: "eMobilis Technology Training Institute",
    date: "Oct '26 - Present",
    logo: "/eMobilis.png",
    description:
      "Participating in a practical website development program focused on building modern web applications using frontend technologies, responsive design principles, and software development practices.",
  },
  {
    role: "AI & Programming Intern",
    company: "Samsung Innovation Campus (SIC) - JKUAT",
    date: "Mar '26 2026 - Present",
    logo: "/sic.png",
    description:
      "Completing industry-focused training in Python, AI, and machine learning through hands-on projects and real-world software development.",
  },
  {
    role: "Team lead / Backend Engineer",
    company: "Guild Code",
    date: "Feb '26 2026 - Present",
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
      "Developed UI/UX skills, focusing on user-centered design and modern interface principles.",
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
    company: "Power Learning Project (PLP)",
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

const Step = ({ exp, index, total, prefersReducedMotion }) => {
  const ref = useRef(null);
  const isActive = useInView(ref, { margin: "-38% 0px -38% 0px" });

  const indent = `calc(${index} * var(--step))`;
  const previousIndent = `calc(${Math.max(index - 1, 0)} * var(--step))`;
  const cardOffset = `calc(${index} * var(--step) + var(--gap))`;

  const lineColor = isActive
    ? "rgba(52, 211, 153, 0.85)"
    : "rgba(52, 211, 153, 0.28)";

  return (
    <li ref={ref} className="relative pb-10 md:pb-14">
      {/* Tread */}
      <motion.span
        aria-hidden="true"
        className="absolute top-0 h-px origin-left"
        style={{
          left: previousIndent,
          width:
            index === 0 ? "var(--gap)" : "calc(var(--step) + var(--gap))",
        }}
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        whileInView={prefersReducedMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
        animate={{ backgroundColor: lineColor }}
      />

      {/* Riser */}
      <motion.span
        aria-hidden="true"
        className="absolute top-0 h-full w-px origin-top"
        style={{ left: indent }}
        initial={prefersReducedMotion ? false : { scaleY: 0 }}
        whileInView={prefersReducedMotion ? undefined : { scaleY: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        animate={{ backgroundColor: lineColor }}
      />

      <div style={{ marginLeft: cardOffset }} className="max-w-[38rem]">
        <motion.article
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={`relative border p-5 transition-colors duration-500 md:p-6 ${
            isActive
              ? "border-emerald-400/45 bg-emerald-400/[0.03]"
              : "border-white/10 bg-black"
          }`}
        >
          {isActive && (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-emerald-400"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-emerald-400"
              />
            </>
          )}

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="h-full w-full rounded-md object-cover"
                />
              ) : (
                <span className="text-[11px] font-bold tracking-wide text-slate-700">
                  {getInitials(exp.company)}
                </span>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span
                  className={`font-mono text-[10px] tracking-[0.25em] transition-colors duration-500 ${
                    isActive ? "text-emerald-300" : "text-slate-600"
                  }`}
                >
                  {String(total - index).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500">
                  {exp.date}
                </span>
              </div>

              <h3 className="mt-1.5 text-base font-semibold text-slate-100 md:text-lg">
                {exp.role}
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">{exp.company}</p>
              <p className="mt-2.5 text-sm leading-6 text-slate-300">
                {exp.description}
              </p>
            </div>
          </div>
        </motion.article>
      </div>

      {index === total - 1 && (
        <div
          className="absolute bottom-0 flex items-center"
          style={{ left: indent }}
        >
          <span className="relative flex h-2 w-2 -translate-x-1/2 items-center justify-center">
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400/50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </span>
          <span className="ml-2.5 h-px w-5 bg-gradient-to-r from-emerald-400/80 to-emerald-400/20" />
          <span className="ml-2 inline-flex items-center gap-1 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-400/80 md:text-[10px]">
            <span className="text-emerald-500/60">//</span>
            <span>Where it all started</span>
            <span className="inline-block animate-pulse font-bold text-emerald-400">_</span>
          </span>
          <span className="ml-3 hidden h-px w-16 bg-gradient-to-r from-emerald-400/30 to-transparent sm:inline-block" />
        </div>
      )}
    </li>
  );
};

const Experience = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="w-full bg-black">
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-10 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500 md:text-sm"
        >
          [ EXPERIENCE / JOURNEY ]
        </motion.h2>

        <ol className="relative list-none [--gap:1.25rem] [--step:0px] md:[--gap:1.75rem] md:[--step:3rem]">
          {experience.map((exp, idx) => (
            <Step
              key={exp.role + exp.company}
              exp={exp}
              index={idx}
              total={experience.length}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
