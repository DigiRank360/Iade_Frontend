import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COURSES } from "../utils/data.js";
import { useReducedMotion } from "../utils/useReducedMotion.js";

export default function SkillRail() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });
  const reduced = useReducedMotion();

  // Infinite seamless loop ke liye duplicated items
  const items = [...COURSES, ...COURSES];

  // Smooth Auto-Scrolling Loop
  useEffect(() => {
    if (reduced) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 0.8;

    const scroll = () => {
      if (!isPaused && !dragging) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, dragging, reduced]);

  // Pointer/Drag Handlers
  const onPointerDown = (e) => {
    setDragging(true);
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragState.current.startX;
    let newScrollLeft = dragState.current.scrollLeft - dx;

    const halfWidth = containerRef.current.scrollWidth / 2;
    if (newScrollLeft >= halfWidth) {
      newScrollLeft -= halfWidth;
      dragState.current.startX = e.clientX;
      dragState.current.scrollLeft = newScrollLeft;
    } else if (newScrollLeft < 0) {
      newScrollLeft += halfWidth;
      dragState.current.startX = e.clientX;
      dragState.current.scrollLeft = newScrollLeft;
    }

    containerRef.current.scrollLeft = newScrollLeft;
  };

  const onPointerUp = (e) => {
    setDragging(false);
    try {
      containerRef.current.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture fails
    }
  };

  return (
    <section className="relative w-full py-10 bg-ink overflow-hidden font-body">
      {/* --- Ambient Red Background Glow --- */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-brandDark/30 rounded-full blur-[100px] pointer-events-none" />

      {/* --- Minimal Side Fade Overlays (Edges tight karne ke liye w-8 kar diya) --- */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-ink to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-ink to-transparent z-20 pointer-events-none" />

      {/* --- Scrolling Rail (Removed px-8 to eliminate side margins) --- */}
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none py-4 relative z-10"
        style={{ scrollBehavior: "auto" }}
      >
        {items.map((c, i) => (
          <Link
            to={`/courses/${c.slug}`}
            key={`${c.id}-${i}`}
            className="group shrink-0 w-[210px] sm:w-[250px] select-none"
            draggable={false}
          >
            <div className="relative aspect-[2/3] rounded-xl bg-surface/80 backdrop-blur-md overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-brand group-hover:shadow-[0_10px_30px_-10px_rgba(200,16,46,0.4)]">

            <img 
                src={c.image} 
                alt={c.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              {/* Card Red Tint */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-brandDark/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Tag & ID */}
              <div className="relative z-10 p-5 flex justify-between items-center">
                <span className="font-mono text-[11px] tracking-widest text-text-paper/80 ">
                  {c.id}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-brand border border-brand/30 text-text-paper  group-hover:transition-all duration-300">
                  {c.tag}
                </span>
              </div>

              {/* Bottom Title */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 bg-gradient-to-t from-surface via-surface/80 to-transparent pt-12">
                <p className="text-lg sm:text-xl font-display font-bold text-paper leading-tight group-hover:text-white transition-colors">
                  {c.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}