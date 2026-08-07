import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MockScreen from "./MockScreen.jsx";
import { useReducedMotion } from "../utils/useReducedMotion.js";

const PANELS = [
  { kicker: "Full Stack Web Development", title: "Build Real Apps", tone: "light", img: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" },
  { kicker: "SEO · GEO + AEO", title: "Rank On Search & AI", tone: "dark", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop" },
  { kicker: "Digital Marketing", title: "Master Class", tone: "light", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop" },
  { kicker: "Google Ads", title: "Adds On Google", tone: "dark" }, // center slot
  { kicker: "Placement", title: "100% Support", tone: "light", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop" },
  { kicker: "Graphic Design", title: "Design With Intent", tone: "dark", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop" },
  { kicker: "Video Editing", title: "Cut. Grade. Ship.", tone: "light", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop" },
  { kicker: "Laptop Repairing course", title: "Chip level Engineer", tone: "dark", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop" },
];

export default function CoverflowHero() {
  const [progress, setProgress] = useState(0);

  const dragging = useRef(false);
  const startX = useRef(0);
  const lastProgress = useRef(0);
  const animRef = useRef(null);
  const reduced = useReducedMotion();

  // Infinite Auto Loop
  useEffect(() => {
    if (reduced) return;

    let lastTime = performance.now();
    const speed = 0.0003; 

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!dragging.current) {
        setProgress((prev) => (prev + delta * speed) % PANELS.length);
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [reduced]);

  // Pointer/Touch Controls
  const onPointerDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
    lastProgress.current = progress;
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const deltaX = e.clientX - startX.current;
    const newProgress = lastProgress.current - deltaX / 300;
    const total = PANELS.length;
    setProgress(((newProgress % total) + total) % total);
  };

  const endDrag = () => {
    dragging.current = false;
  };

  return (
    <section className="relative w-full overflow-hidden bg-ink pt-24 sm:pt-28 pb-12 text-paper">
      
      {/* 🩸 TOP BLOOD RED SHADOW / GLOW ONLY */}
      <div 
        className="pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-brand/40 via-brand/10 to-transparent z-0 blur-2xl opacity-80"
        aria-hidden="true"
      />
      {/* Top Edge Glow Strip */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-24 bg-brand/30 blur-[80px] z-0 rounded-full"
        aria-hidden="true"
      />

      {/* Animated IADE Wordmark CSS */}
      <style>{`
        @keyframes iadeBrandEntrance {
          0% {
            opacity: 0;
            transform: scale(0.6) translateY(20px);
            filter: blur(12px);
          }
          60% {
            opacity: 1;
            transform: scale(1.08) translateY(-5px);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-iade-brand {
          animation: iadeBrandEntrance 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Coverflow Stage */}
      <div
        className="relative z-10 h-[68vh] sm:h-[75vh] min-h-[480px] select-none touch-pan-y cursor-grab active:cursor-grabbing"
        style={{ perspective: "1800px" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {PANELS.map((p, i) => {
            const count = PANELS.length;
            
            let offset = (i - progress) % count;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const abs = Math.abs(offset);
            const rotateY = Math.max(-55, Math.min(55, offset * -22));
            
            const translateX = offset * 260; 
            const translateZ = -abs * 180;
            const scale = Math.max(0.55, 1 - abs * 0.14);
            const opacity = Math.max(0, 1 - abs * 0.28);

            const isCenter = p.tone === "center" && abs < 0.5;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "clamp(220px, 28vw, 380px)",
                  height: "clamp(300px, 38vw, 500px)",
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  filter: `brightness(${1 - abs * 0.15})`,
                  zIndex: Math.round(50 - abs * 10),
                  pointerEvents: "none",
                  willChange: "transform, opacity",
                }}
              >
                {!isCenter && (
                  <div className="group relative w-full h-full overflow-hidden shadow-2xl shadow-black/80 border border-white/15 bg-neutral-950">
                    {/* Background Panel Image */}
                    {p.img && (
                      <img
                        src={p.img}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-opacity duration-300"
                        loading="lazy"
                      />
                    )}

                    {/* Content Screen */}
                    <div className="relative z-10 w-full h-full">
                      <MockScreen kicker={p.kicker} title={p.title} tone={p.tone} />
                    </div>

                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 pointer-events-none" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Wordmark Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
          
          {/* 🩸 H1 with minimal red glow text shadow */}
          <h1 className="animate-iade-brand relative text-[18vw] sm:text-[10vw] leading-none font-display font-black uppercase tracking-tight select-none drop-shadow-[0_0_12px_rgba(200,16,46,0.65)]">
            {/* Letter I - Pure White */}
            <span className="text-paper">I</span>

            {/* Letter A with Black Graduation Cap on top */}
            <span className="relative inline-block">
              {/* Graduation Cap */}
              <svg
                viewBox="0 0 100 60"
                className="absolute left-1/2 -translate-x-1/2 -top-[0.24em] w-[0.7em] h-auto drop-shadow-[0_0_8px_rgba(200,16,46,0.7)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="50,2 98,22 50,42 2,22" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
                <polygon points="50,42 78,30 78,44 50,54 22,44 22,30" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="88" y1="22" x2="88" y2="46" stroke="#000000" strokeWidth="4" />
                <circle cx="88" cy="49" r="5" fill="#C8102E" />
              </svg>
              {/* Red Letter A */}
              <span className="text-brand">A</span>
            </span>

            {/* Letter D - Pure White */}
            <span className="text-paper">D</span>

            {/* Letter E - Dark Crimson / Maroon Red */}
            <span className="text-brandDark">E</span>
          </h1>

          {/* Tagline matching logo layout with subtle red drop-shadow */}
          <p className="mt-3 text-xs sm:text-sm font-body tracking-[0.2em] font-bold drop-shadow-[0_0_8px_rgba(200,16,46,0.5)]">
            <span className="text-paper">Academy of </span>
            <span className="text-brand">Digital Education</span>
          </p>

          {/* Subline */}
          <p className="mt-1 text-[10px] sm:text-xs font-body uppercase tracking-[0.3em] text-paper/70 font-medium">
            Bhopal
          </p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="relative z-20 flex items-center justify-center gap-2 pb-10">
        {PANELS.map((_, i) => {
          const currentActive = Math.round(progress) % PANELS.length;
          const isActive = currentActive === i;
          return (
            <button
              key={i}
              onClick={() => setProgress(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive ? "w-6 bg-paper shadow-sm shadow-white" : "w-1.5 bg-paper/30"
              }`}
            />
          );
        })}
      </div>

      <div className="relative z-10 border-t border-white/10" />
    </section>
  );
}