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

const PaystackIcon = (props) => (
  <svg
    viewBox="0 2.5 25 25"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M22.32 2.663H1.306C.594 2.663 0 3.263 0 3.985v2.37c0 .74.594 1.324 1.307 1.324h21.012c.73 0 1.307-.602 1.324-1.323V4.002c0-.738-.594-1.34-1.323-1.34zm0 13.192H1.306a1.3 1.3 0 00-.924.388 1.33 1.33 0 00-.383.935v2.37c0 .74.594 1.323 1.307 1.323h21.012c.73 0 1.307-.584 1.324-1.322v-2.371c0-.739-.594-1.323-1.323-1.323zm-9.183 6.58H1.307c-.347 0-.68.139-.924.387a1.33 1.33 0 00-.383.935v2.37c0 .74.594 1.323 1.307 1.323H13.12c.73 0 1.307-.6 1.307-1.322v-2.371a1.29 1.29 0 00-1.29-1.323zM23.643 9.258H1.307c-.347 0-.68.14-.924.387a1.33 1.33 0 00-.383.936v2.37c0 .739.594 1.323 1.307 1.323h22.32c.73 0 1.306-.601 1.306-1.323v-2.37a1.301 1.301 0 00-1.29-1.323z" />
  </svg>
);

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
  { name: "Paystack", Icon: PaystackIcon },
];

const TechMarquee = () => {
  const items = [...techs, ...techs];

  return (
    <div className="relative w-full overflow-hidden border-y border-emerald-300/20 bg-black">
      <motion.div
        className="flex w-max gap-14 py-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {items.map((tech, idx) => {
          const IconComponent = tech.Icon;
          return (
            <div
              key={`${tech.name}-${idx}`}
              className="flex shrink-0 items-center gap-3 text-emerald-500 transition-colors hover:text-emerald-300"
            >
              <IconComponent className="text-2xl" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

export default TechMarquee;
