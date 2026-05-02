import { useMemo } from "react";

const Starfield = ({ count = 160, className = "" }) => {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.7 + 0.15,
        twinkleDelay: Math.random() * 5,
        twinkleDuration: 2.4 + Math.random() * 4,
      })),
    [count]
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: `${star.twinkleDuration}s`,
            boxShadow: star.size > 1.4 ? `0 0 ${star.size * 2}px rgba(255,255,255,0.5)` : undefined,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
