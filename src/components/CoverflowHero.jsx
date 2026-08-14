import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MockScreen from "./MockScreen.jsx";
import { useReducedMotion } from "../utils/useReducedMotion.js";

const PANELS = [
  {
    kicker: "Full Stack Web Development",
    title: "Build Real Apps",
    tone: "light",
    img: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=900&auto=format&fit=crop&q=60",
  },
  {
    kicker: "SEO · GEO + AEO",
    title: "Rank On Search & AI",
    tone: "dark",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
  },
  {
    kicker: "Digital Marketing",
    title: "Master Class",
    tone: "light",
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop",
  },
  {
    kicker: "Google Ads",
    title: "Ads On Google",
    tone: "dark",
  },
  {
    kicker: "Placement",
    title: "100% Support",
    tone: "light",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop",
  },
  {
    kicker: "Graphic Design",
    title: "Design With Intent",
    tone: "dark",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop",
  },
  {
    kicker: "Video Editing",
    title: "Cut. Grade. Ship.",
    tone: "light",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop",
  },
  {
    kicker: "Laptop Repairing Course",
    title: "Chip Level Engineer",
    tone: "dark",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop",
  },
];

export default function CoverflowHero() {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const dragging = useRef(false);
  const startX = useRef(0);
  const lastProgress = useRef(0);
  const animRef = useRef(null);

  const reduced = useReducedMotion();

  /* =====================================================
     RESPONSIVE SCREEN SIZE
  ====================================================== */

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  /* =====================================================
     AUTO LOOP
  ====================================================== */

  useEffect(() => {
    if (reduced) return;

    let lastTime = performance.now();

    const speed = 0.00022;

    const animate = (time) => {
      const delta = time - lastTime;

      lastTime = time;

      if (!dragging.current) {
        setProgress(
          (prev) => (prev + delta * speed) % PANELS.length
        );
      }

      animRef.current =
        requestAnimationFrame(animate);
    };

    animRef.current =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, [reduced]);

  /* =====================================================
     DRAG / TOUCH CONTROLS
  ====================================================== */

  const onPointerDown = (e) => {
    dragging.current = true;

    startX.current = e.clientX;

    lastProgress.current = progress;
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;

    const deltaX =
      e.clientX - startX.current;

    /*
      Slightly stronger swipe sensitivity on mobile
      while keeping desktop behavior unchanged.
    */

    const sensitivity = isMobile
      ? 250
      : 320;

    const newProgress =
      lastProgress.current -
      deltaX / sensitivity;

    const total = PANELS.length;

    setProgress(
      ((newProgress % total) + total) % total
    );
  };

  const endDrag = () => {
    dragging.current = false;
  };

  /* =====================================================
     COVERFLOW SETTINGS
  ====================================================== */

  const cardWidth = isMobile
    ? "clamp(205px, 65vw, 280px)"
    : "clamp(220px, 28vw, 380px)";

  const cardHeight = isMobile
    ? "clamp(290px, 88vw, 390px)"
    : "clamp(300px, 38vw, 500px)";

  return (
    <section className="relative w-full overflow-hidden bg-ink pt-24 sm:pt-28 pb-8 text-paper">

      {/* =====================================================
          TOP RED GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          right-0
          h-56
          bg-gradient-to-b
          from-brand/30
          via-brand/10
          to-transparent
          blur-2xl
          opacity-80
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[65vw]
          h-28
          bg-brand/15
          blur-[90px]
          rounded-full
        "
        aria-hidden="true"
      />

      {/* =====================================================
          HERO INTRO
      ====================================================== */}

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 pt-6 sm:pt-8">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="text-left">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">

              <span className="block w-8 h-[1px] bg-brand" />

              <span
                className="
                  text-[8px]
                  sm:text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  sm:tracking-[0.25em]
                  text-brand
                "
              >
                Welcome to Indian Academy Of Digital Education
              </span>

            </div>

            {/* Main Heading */}
            <h2
              className="
                font-display
                text-3xl
                sm:text-3xl
                md:text-5xl
                lg:text-[3.5rem]
                xl:text-[4rem]
                font-black
                leading-[0.95]
                tracking-tight
                uppercase
              "
            >
              <span className="text-paper">
                Learn Digital
              </span>

              <br />

              <span className="text-paper">
                Marketing.
              </span>

              <br />

              <span className="text-paper">
                Build Skills.
              </span>

              <br />

              <span className="text-brand">
                Get Hired.
              </span>
            </h2>

            {/* Supporting Statement */}
            <p
              className="
                mt-6
                max-w-lg
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-brand
                font-medium
              "
            >
              Learn practical skills. Build your career.
              Get ready for the future of digital work.
            </p>

          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="lg:pt-10">

            {/* Description */}
            <p
              className="
                max-w-xl
                text-sm
                sm:text-base
                md:text-lg
                leading-[1.65]
                text-paper/55
              "
            >
              At Indian Academy Of Digital Education, we help
              students build practical digital skills, gain
              industry-ready experience, and prepare for
              future-ready careers.

              {" "}

              Whether you want to master digital marketing,
              SEO, Google Ads, social media, web development,
              design, video editing, or technical skills,
              our programs are designed to help you learn
              with real-world applications.
            </p>

            {/* Skill / Career / Growth */}
            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                text-[9px]
                sm:text-[10px]
                uppercase
                tracking-[0.28em]
                font-bold
              "
            >
              <span className="text-paper/50">
                Skills
              </span>

              <span className="text-brand">
                •
              </span>

              <span className="text-paper/50">
                Career
              </span>

              <span className="text-brand">
                •
              </span>

              <span className="text-paper/50">
                Growth
              </span>
            </div>

            {/* Buttons */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-3
              "
            >

              {/* Let's Talk */}
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-brand
                  px-6
                  py-3
                  text-[10px]
                  sm:text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                  shadow-lg
                  shadow-brand/20
                  transition-all
                  duration-300
                  hover:bg-brandDark
                  hover:-translate-y-0.5
                "
              >
                Let's Talk
              </Link>

              {/* Explore Courses */}
              <Link
                to="/courses"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-white/15
                  bg-white/[0.04]
                  px-6
                  py-3
                  text-[10px]
                  sm:text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-paper
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:border-white/25
                  hover:-translate-y-0.5
                "
              >
                Explore Courses
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          COVERFLOW STAGE
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-7
          sm:mt-9
          h-[430px]
          sm:h-[58vh]
          sm:min-h-[400px]
          select-none
          touch-pan-y
          cursor-grab
          active:cursor-grabbing
        "
        style={{
          perspective: "1800px",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >

        {/* ===================================================
            COVERFLOW TRACK
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >

          {PANELS.map((panel, index) => {

            const count = PANELS.length;

            let offset =
              (index - progress) % count;

            if (offset > count / 2) {
              offset -= count;
            }

            if (offset < -count / 2) {
              offset += count;
            }

            const abs = Math.abs(offset);

            /*
              ================================================
              RESPONSIVE COVERFLOW
              ================================================

              Desktop:
                Horizontal = 270px
                Depth      = 190px
                Rotation   = 20deg

              Mobile:
                Horizontal = 145px
                Depth      = 100px
                Rotation   = 16deg

              This keeps the same visual structure while
              preventing cards from disappearing outside
              the mobile viewport.
            */

            const translateX = isMobile
              ? offset * 145
              : offset * 270;

            const translateZ = isMobile
              ? -abs * 100
              : -abs * 190;

            const rotateY = isMobile
              ? Math.max(
                  -36,
                  Math.min(36, offset * -16)
                )
              : Math.max(
                  -50,
                  Math.min(50, offset * -20)
                );

            const scale = isMobile
              ? Math.max(
                  0.68,
                  1 - abs * 0.10
                )
              : Math.max(
                  0.58,
                  1 - abs * 0.13
                );

            const opacity = isMobile
              ? Math.max(
                  0.18,
                  1 - abs * 0.25
                )
              : Math.max(
                  0,
                  1 - abs * 0.3
                );

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  width: cardWidth,
                  height: cardHeight,

                  transform: `
                    translateX(${translateX}px)
                    translateZ(${translateZ}px)
                    rotateY(${rotateY}deg)
                    scale(${scale})
                  `,

                  opacity,

                  filter: `
                    brightness(${1 - abs * 0.12})
                  `,

                  zIndex:
                    Math.round(50 - abs * 10),

                  pointerEvents: "none",

                  willChange:
                    "transform, opacity",
                }}
              >

                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className="
                    group
                    relative
                    w-full
                    h-full
                    overflow-hidden
                    bg-neutral-950
                    border
                    border-white/10
                    shadow-2xl
                    shadow-black/60
                  "
                >

                  {/* Background Image */}
                  {panel.img && (
                    <img
                      src={panel.img}
                      alt={panel.title}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        opacity-45
                      "
                      loading="lazy"
                    />
                  )}

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/25" />

                  {/* Mock Screen */}
                  <div className="relative z-10 w-full h-full">
                    <MockScreen
                      kicker={panel.kicker}
                      title={panel.title}
                      tone={panel.tone}
                    />
                  </div>

                  {/* Bottom Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-transparent
                      to-white/[0.04]
                      pointer-events-none
                    "
                  />

                </div>

              </div>
            );
          })}

        </div>

        {/* =====================================================
            CENTER IADE WORDMARK
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            items-center
            justify-center
            pointer-events-none
            px-4
            text-center
          "
        >

          <h1
            className="
              text-[17vw]
              sm:text-[9vw]
              leading-none
              font-display
              font-black
              uppercase
              tracking-tight
              select-none
            "
          >
            {/* I */}
            <span className="text-black">
              I
            </span>

            {/* A */}
            <span className="text-brand">
              A
            </span>

            {/* D */}
            <span className="text-black">
              D
            </span>

            {/* E */}
            <span className="text-brandDark">
              E
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="
              mt-2
              sm:mt-3
              text-[8px]
              sm:text-xs
              font-body
              tracking-[0.18em]
              sm:tracking-[0.2em]
              font-semibold
              uppercase
            "
          >
            <span className="text-paper">
              Academy of{" "}
            </span>

            <span className="text-brand">
              Digital Education
            </span>
          </p>

          {/* Location */}
          <p
            className="
              mt-1
              text-[8px]
              sm:text-[10px]
              font-body
              uppercase
              tracking-[0.3em]
              sm:tracking-[0.35em]
              text-paper/50
            "
          >
            Bhopal
          </p>

        </div>

      </div>

      {/* =====================================================
          SLIDER INDICATORS
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          items-center
          justify-center
          gap-2
          pb-6
        "
      >

        {PANELS.map((_, index) => {

          const currentActive =
            Math.round(progress) %
            PANELS.length;

          const isActive =
            currentActive === index;

          return (
            <button
              key={index}
              onClick={() => setProgress(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-1
                rounded-full
                transition-all
                duration-300
                ${
                  isActive
                    ? "w-6 bg-paper"
                    : "w-1.5 bg-paper/25 hover:bg-paper/50"
                }
              `}
            />
          );
        })}

      </div>

      {/* =====================================================
          DIVIDER
      ====================================================== */}

      <div className="relative z-10 border-t border-white/[0.06]" />

    </section>
  );
}