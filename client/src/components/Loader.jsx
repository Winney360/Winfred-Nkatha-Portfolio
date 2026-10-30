import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MIN_DISPLAY_MS = 3000;
const CURTAIN_DURATION_MS = 1300;

const EASE_CURTAIN = [0.87, 0, 0.13, 1];
const EASE_OUT = [0.22, 1, 0.36, 1];

const WavyDots = ({ prefersReducedMotion }) => (
  <span className="flex items-end gap-1.5" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"
        animate={prefersReducedMotion ? { y: 0 } : { y: [0, -6, 0] }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: 1.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.11,
              }
        }
      />
    ))}
  </span>
);

const Loader = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let openTimer;
    let unmountTimer;

    const finish = () => {
      const remaining = Math.max(0, MIN_DISPLAY_MS - (Date.now() - start));

      openTimer = setTimeout(() => {
        setIsOpening(true);
        unmountTimer = setTimeout(
          () => setIsLoading(false),
          prefersReducedMotion ? 250 : CURTAIN_DURATION_MS
        );
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(openTimer);
      clearTimeout(unmountTimer);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  const curtainTransition = {
    duration: prefersReducedMotion ? 0 : CURTAIN_DURATION_MS / 1000,
    ease: prefersReducedMotion ? "linear" : EASE_CURTAIN,
  };

  const textIn = (fromX, delay) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, x: fromX },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 1.1,
      delay: prefersReducedMotion ? 0 : delay,
      ease: EASE_OUT,
    },
  });

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden bg-black"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading portfolio</span>

      {/* Left curtain */}
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{ x: isOpening ? "-100%" : "0%" }}
        transition={curtainTransition}
        className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-black will-change-transform"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 34px, rgba(0,0,0,0.5) 58px)",
          }}
        />
        <div className="absolute inset-y-0 right-0 w-px bg-emerald-400/70" />

        <div className="absolute inset-y-0 right-0 flex items-center pr-[3vw] md:pr-[4vw]">
          <motion.span
            {...textIn(-70, 0.15)}
            className="block text-[clamp(1.5rem,5.5vw,4.5rem)] font-semibold leading-none tracking-[-0.03em] text-slate-100"
          >
            WINFRED
          </motion.span>
        </div>
      </motion.div>

      {/* Right curtain */}
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{ x: isOpening ? "100%" : "0%" }}
        transition={{ ...curtainTransition, delay: prefersReducedMotion ? 0 : 0.05 }}
        className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-black will-change-transform"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.5) 0px, rgba(255,255,255,0) 24px, rgba(255,255,255,0) 56px, rgba(255,255,255,0.025) 58px)",
          }}
        />
        <div className="absolute inset-y-0 left-0 w-px bg-emerald-400/70" />

        <div className="absolute inset-y-0 left-0 flex items-center pl-[3vw] md:pl-[4vw]">
          <motion.span
            {...textIn(70, 0.28)}
            className="block text-[clamp(1.5rem,5.5vw,4.5rem)] font-semibold leading-none tracking-[-0.03em] text-slate-100"
          >
            NKATHA
          </motion.span>
        </div>
      </motion.div>

      {/* Loading cue */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[13vh] flex flex-col items-center gap-4"
        animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 8 : 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeOut" }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-slate-500 md:text-[10px]">
          Cooking something
        </span>

        <WavyDots prefersReducedMotion={prefersReducedMotion} />
      </motion.div>
    </div>
  );
};

export default Loader;
