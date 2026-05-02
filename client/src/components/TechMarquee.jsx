import { motion } from "framer-motion";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const techs = [
  { name: "React", Icon: SiReact },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Vite", Icon: SiVite },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Git", Icon: SiGit },
];

const TechMarquee = () => {
  const items = [...techs, ...techs];

  return (
    <div className="relative w-full overflow-hidden border-y border-green-400/15 bg-black">
      <motion.div
        className="flex w-max gap-14 py-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {items.map(({ name, Icon }, idx) => (
          <div
            key={`${name}-${idx}`}
            className="flex shrink-0 items-center gap-3 text-slate-400 transition-colors hover:text-green-400"
          >
            <Icon className="text-2xl" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em]">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

export default TechMarquee;
