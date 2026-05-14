import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MIN_DISPLAY_MS = 3000;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <style>{loaderStyles}</style>

          <div className="cooking-stage">
            <div className="cooking-bubble" />
            <div className="cooking-bubble" />
            <div className="cooking-bubble" />
            <div className="cooking-bubble" />
            <div className="cooking-bubble" />
            <div className="cooking-area">
              <div className="cooking-sides">
                <div className="cooking-pan" />
                <div className="cooking-handle" />
              </div>
              <div className="cooking-pancake">
                <div className="cooking-pastry" />
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-baseline gap-1 text-emerald-500">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] md:text-sm">
              Cooking
            </span>
            <span className="flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.18,
                  }}
                  className="text-xs font-semibold md:text-sm"
                >
                  .
                </motion.span>
              ))}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const loaderStyles = `
.cooking-stage {
  position: relative;
  width: 40vh;
  height: 40vh;
  max-width: 320px;
  max-height: 320px;
  overflow: hidden;
}

.cooking-area {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background-color: transparent;
  transform-origin: 15% 60%;
  animation: cooking-flip 2.1s ease-in-out infinite;
}

.cooking-sides {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 15% 60%;
  animation: cooking-switchSide 2.1s ease-in-out infinite;
}

.cooking-handle {
  position: absolute;
  bottom: 18%;
  right: 80%;
  width: 35%;
  height: 20%;
  background-color: transparent;
  border-top: 0.6vh solid #cbd5e1;
  border-left: 0.6vh solid transparent;
  border-radius: 100%;
  transform: rotate(20deg) rotateX(0deg) scale(1.3, 0.9);
}

.cooking-pan {
  position: absolute;
  bottom: 20%;
  right: 30%;
  width: 50%;
  height: 8%;
  background-color: #cbd5e1;
  border-radius: 0 0 1.4em 1.4em;
  transform-origin: -15% 0;
}

.cooking-pancake {
  position: absolute;
  top: 24%;
  width: 100%;
  height: 100%;
  transform: rotateX(85deg);
  animation: cooking-jump 2.1s ease-in-out infinite;
}

.cooking-pastry {
  position: absolute;
  bottom: 26%;
  right: 37%;
  width: 40%;
  height: 45%;
  background-color: #ffffff;
  box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.4);
  border-radius: 100%;
  transform-origin: -20% 0;
  animation: cooking-fly 2.1s ease-in-out infinite;
}

.cooking-bubble {
  position: absolute;
  border-radius: 100%;
  box-shadow: 0 0 0.4vh rgba(255, 255, 255, 0.5);
  opacity: 0;
}

.cooking-bubble:nth-child(1) {
  margin-top: 2.5vh;
  left: 58%;
  width: 1.8vh;
  height: 1.8vh;
  background-color: rgba(255, 255, 255, 0.55);
  animation: cooking-bubble 2s cubic-bezier(0.53, 0.16, 0.39, 0.96) infinite;
}

.cooking-bubble:nth-child(2) {
  margin-top: 3vh;
  left: 52%;
  width: 1.5vh;
  height: 1.5vh;
  background-color: rgba(255, 255, 255, 0.5);
  animation: cooking-bubble 2s ease-in-out 0.35s infinite;
}

.cooking-bubble:nth-child(3) {
  margin-top: 1.8vh;
  left: 50%;
  width: 1.2vh;
  height: 1.2vh;
  background-color: rgba(255, 255, 255, 0.45);
  animation: cooking-bubble 1.5s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.55s infinite;
}

.cooking-bubble:nth-child(4) {
  margin-top: 2.7vh;
  left: 56%;
  width: 1vh;
  height: 1vh;
  background-color: rgba(255, 255, 255, 0.4);
  animation: cooking-bubble 1.8s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.55s infinite;
}

.cooking-bubble:nth-child(5) {
  margin-top: 2.7vh;
  left: 63%;
  width: 0.9vh;
  height: 0.9vh;
  background-color: rgba(255, 255, 255, 0.35);
  animation: cooking-bubble 1.6s ease-in-out 1s infinite;
}

@keyframes cooking-flip {
  0% { transform: rotate(0deg); }
  5% { transform: rotate(-27deg); }
  30%, 50% { transform: rotate(0deg); }
  55% { transform: rotate(27deg); }
  83.3% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

@keyframes cooking-switchSide {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(0deg); }
}

@keyframes cooking-jump {
  0% { top: 24%; transform: rotateX(85deg); }
  25% { top: 10%; transform: rotateX(0deg); }
  50% { top: 30%; transform: rotateX(85deg); }
  75% { transform: rotateX(0deg); }
  100% { transform: rotateX(85deg); }
}

@keyframes cooking-fly {
  0% { bottom: 26%; transform: rotate(0deg); }
  10% { bottom: 40%; }
  50% { bottom: 26%; transform: rotate(-190deg); }
  80% { bottom: 40%; }
  100% { bottom: 26%; transform: rotate(0deg); }
}

@keyframes cooking-bubble {
  0% { transform: scale(0.15, 0.15); top: 80%; opacity: 0; }
  50% { transform: scale(1.1, 1.1); opacity: 1; }
  100% { transform: scale(0.33, 0.33); top: 60%; opacity: 0; }
}
`;

export default Loader;
