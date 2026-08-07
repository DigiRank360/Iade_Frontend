import { useEffect, useState } from "react";
import { useReducedMotion } from "../utils/useReducedMotion.js";

const WORD = [
  { char: "I", color: "text-paper" },
  { char: "A", color: "text-brand" },
  { char: "D", color: "text-paper" },
  { char: "E", color: "text-brand" },
];

const LETTER_STEP = 380;      // Smoother delay between each letter pop
const GROW_DURATION = 650;    // Smooth expand timing
const SHRINK_DURATION = 550;  // Smooth retract timing

export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState("counting"); // counting -> sequence -> expanding
  const [activeLetter, setActiveLetter] = useState(-1);
  const [poppedLetters, setPoppedLetters] = useState([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    let raf;
    const start = performance.now();
    const duration = 2000;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      const currentPct = Math.round(eased * 100);
      setPct(currentPct);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("sequence");
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, onDone]);

  useEffect(() => {
    if (phase !== "sequence") return;

    const timers = [];

    WORD.forEach((_, i) => {
      const startAt = i * LETTER_STEP;
      timers.push(
        setTimeout(() => {
          setActiveLetter(i);
          setPoppedLetters((prev) => [...prev, i]);
        }, startAt)
      );
      if (i < WORD.length - 1) {
        timers.push(
          setTimeout(() => {
            setActiveLetter((curr) => (curr === i ? -1 : curr));
          }, startAt + GROW_DURATION)
        );
      }
    });

    const lastLetterIndex = WORD.length - 1;
    const lastGrowComplete = lastLetterIndex * LETTER_STEP + GROW_DURATION;

    timers.push(
      setTimeout(() => {
        setPhase("expanding");
      }, lastGrowComplete + 300)
    );

    timers.push(
      setTimeout(() => {
        onDone();
      }, lastGrowComplete + 300 + 1000)
    );

    return () => timers.forEach(clearTimeout);
  }, [phase]);

  if (reduced) return null;

  const isExpanding = phase === "expanding";

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExpanding
          ? "opacity-0 pointer-events-none scale-105 blur-lg"
          : "opacity-100 scale-100 blur-0"
      }`}
      aria-hidden={pct >= 100}
    >
      <style>{`
        @keyframes iadeLetterIn {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
      `}</style>

      {/* Ambient Red Glow Backdrop */}
      <div
        className={`absolute w-[35vw] h-[35vw] max-w-[350px] bg-brand/20 rounded-full blur-[120px] pointer-events-none transition-opacity duration-[1000ms] ease-out ${
          isExpanding ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dynamic Glow Spot that tracks active letter */}
      <div
        className="absolute w-[30vw] h-[30vw] max-w-[300px] rounded-full bg-brand/30 blur-[100px] pointer-events-none"
        style={{
          opacity: activeLetter >= 0 && !isExpanding ? 1 : 0,
          transition: "opacity 400ms ease-out, transform 400ms cubic-bezier(0.16,1,0.3,1)",
          transform: `translateX(${(activeLetter - 1.5) * 60}px)`,
        }}
      />

      {/* Main Text */}
      <div className="flex gap-2 sm:gap-4 relative items-center justify-center">
        {WORD.map((item, i) => {
          const isActive = activeLetter === i;
          const hasPopped = poppedLetters.includes(i);
          const scaleValue = isActive ? 2.1 : 1; // Controlled non-breaking scale factor

          return (
            <span
              key={i}
              className={`text-[25vw] sm:text-[14vw] font-display font-black tracking-tight leading-none inline-block drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] ${item.color}`}
              style={{
                animation:
                  phase === "counting"
                    ? `iadeLetterIn 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards ${i * 100}ms`
                    : undefined,
                opacity: phase === "counting" ? 0 : 1,
                transform: hasPopped ? `scale(${scaleValue})` : "scale(1)",
                filter: isActive 
                  ? "drop-shadow(0 0 25px rgba(200,16,46,0.6)) brightness(1.2)" 
                  : "drop-shadow(0 0 0px rgba(0,0,0,0)) brightness(1)",
                transition: hasPopped
                  ? `transform ${
                      isActive ? GROW_DURATION : SHRINK_DURATION
                    }ms cubic-bezier(0.34, 1.56, 0.64, 1), filter ${
                      isActive ? GROW_DURATION : SHRINK_DURATION
                    }ms ease-out`
                  : undefined,
                zIndex: isActive ? 10 : 1,
                transformOrigin: "center center",
                willChange: "transform, filter",
              }}
            >
              {item.char}
            </span>
          );
        })}
      </div>

      {/* Smooth Progress Bar & Counter */}
      <div
        className={`flex flex-col items-center mt-12 transition-all duration-[500ms] ease-out ${
          phase !== "counting" ? "opacity-0 translate-y-4 scale-110" : "opacity-100 translate-y-0 scale-130"
        }`}
      >
        <div className="relative w-[50vw] max-w-xs h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-brandDark via-brand to-rose-400 rounded-full shadow-[0_0_12px_#C8102E]"
            style={{ width: `${pct}%`, transition: "width 120ms ease-out" }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between w-[50vw] max-w-xs text-[10px] sm:text-xs font-mono text-muted tracking-[0.25em]">
          <span>ACADEMY</span>
          <span className="text-paper font-bold">{String(pct).padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}