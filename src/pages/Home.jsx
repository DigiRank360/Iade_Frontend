import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import CoverflowHero from "../components/CoverflowHero.jsx";
import EnrollCTA from "../components/EnrollCTA.jsx";
import SkillRail from "../components/SkillRail.jsx";
import { COURSES, TESTIMONIALS, STATS } from "../utils/data.js";
import sliderImg1 from "./../assets/slider1.png";
import sliderImg2 from "./../assets/slider2.png";
import sliderImg3 from "./../assets/slider3.png";

import kusal from './../assets/trainer/kusal.png';
import chetna from './../assets/trainer/chetna.png';
import hari from './../assets/trainer/hari.png';
import pratiksha from './../assets/trainer/pratiksha.png';
import pragati from './../assets/trainer/pragati.png';

// Slider Images
const SLIDER_IMAGES = [sliderImg1, sliderImg2, sliderImg3];

// Marquee Images
const MARQUEE_IMAGES = [
  kusal,
  chetna,
  hari,
  pratiksha,
  pragati,
];
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Auto Slider Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length
    );

  return (
    <main className="relative bg-ink text-paper selection:bg-brand selection:text-paper font-body overflow-x-hidden">
      {/* =========================================================
          GLOBAL CINEMATIC BLOOD RED BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top Left Blood Red Glow */}
        <div
          className="
            absolute
            -top-40
            -left-40
            w-[520px]
            h-[520px]
            rounded-full
            bg-brand/20
            blur-[150px]
            opacity-70
          "
        />

        {/* Top Right Deep Red Glow */}
        <div
          className="
            absolute
            top-[12%]
            -right-56
            w-[600px]
            h-[600px]
            rounded-full
            bg-red-950/60
            blur-[170px]
            opacity-80
          "
        />

        {/* Center Atmospheric Red Shadow */}
        <div
          className="
            absolute
            top-[42%]
            left-1/2
            -translate-x-1/2
            w-[850px]
            h-[350px]
            rounded-full
            bg-brand/10
            blur-[150px]
            opacity-60
          "
        />

        {/* Left Middle Red Glow */}
        <div
          className="
            absolute
            top-[58%]
            -left-72
            w-[520px]
            h-[520px]
            rounded-full
            bg-red-900/30
            blur-[160px]
            opacity-60
          "
        />

        {/* Bottom Right Blood Red Glow */}
        <div
          className="
            absolute
            -bottom-40
            -right-40
            w-[550px]
            h-[550px]
            rounded-full
            bg-brand/15
            blur-[150px]
            opacity-70
          "
        />

        {/* Bottom Center Glow */}
        <div
          className="
            absolute
            bottom-[8%]
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[260px]
            rounded-full
            bg-red-950/40
            blur-[150px]
            opacity-50
          "
        />

        {/* Subtle Top Radial Light */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(200,16,46,0.10),transparent_38%)]
          "
        />

        {/* Subtle Center Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(0,0,0,0.22)_75%,rgba(0,0,0,0.45)_100%)]
          "
        />
      </div>

      {/* =========================================================
          PAGE CONTENT
      ========================================================== */}
      <div className="relative z-10">
        {/* KEYFRAMES FOR CONTINUOUS SMOOTH MARQUEE */}
        <style>{`
          @keyframes customMarquee {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .animate-custom-marquee {
            animation: customMarquee 25s linear infinite;
          }

          .animate-custom-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* =========================================================
            HERO SECTION
        ========================================================== */}
        <CoverflowHero />

        {/* =========================================================
            SKILL RAIL SECTION
        ========================================================== */}
        <section className="px-6 sm:px-10 py-10 max-w-7xl mx-auto">
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted">
            Explore Key Disciplines — Drag to View
          </p>

          <SkillRail />
        </section>

        {/* =========================================================
            THREE VALUE PROPOSITIONS
        ========================================================== */}
        <section className="relative z-10 grid sm:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 sm:px-10 py-16">
          {[
            {
              num: "01",
              tag: "Live Projects",
              title: "Practical First",
              body: "Work on live client briefs, real budget campaigns, and portfolio-ready assignments—zero boring slides.",
            },
            {
              num: "02",
              tag: "Academy",
              title: "We Are IADE",
              body: "Bhopal’s premier digital education hub built for next-gen marketers, designers, and developers.",
            },
            {
              num: "03",
              tag: "Career Focus",
              title: "Placement Support",
              body: "100% dedicated job guidance, resume optimization, and mock interview prep with industry mentors.",
            },
          ].map(({ num, tag, title, body }) => (
            <div
              key={title}
              className="
                group
                relative
                bg-surface/90
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                p-8
                sm:p-10
                overflow-hidden
                transition-all
                duration-500
                hover:border-brand/40
                hover:-translate-y-1.5
                shadow-xl
                hover:shadow-[0_10px_30px_rgba(200,16,46,0.15)]
                flex
                flex-col
                justify-between
              "
            >
              {/* Top Animated Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Ambient Background Glow */}
              <div className="pointer-events-none absolute -right-10 -bottom-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/15 transition-all duration-500" />

              {/* Watermark Number */}
              <span className="absolute -right-2 -top-4 text-7xl font-display font-black text-white/[0.03] group-hover:text-brand/10 transition-colors duration-500 select-none">
                {num}
              </span>

              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted group-hover:border-brand/30 group-hover:text-paper transition-colors duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                    {tag}
                  </span>

                  <span className="text-xs font-mono text-muted/60 group-hover:text-brand transition-colors duration-300">
                    //{num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-paper tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-paper group-hover:to-brand transition-all duration-300">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed group-hover:text-paper/90 transition-colors duration-300">
                  {body}
                </p>
              </div>

              {/* Bottom Indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-brand transition-colors duration-300">
                <span>Explore Impact</span>

                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* =========================================================
            ABOUT IADE SECTION
        ========================================================== */}
        <section className="relative py-24 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden space-y-24 font-body">
          {/* =========================================================
              AMBIENT BACKGROUND
          ========================================================= */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-brand/5 blur-[150px]" />

            <div className="absolute top-[45%] -left-40 w-[420px] h-[420px] rounded-full bg-red-950/20 blur-[130px]" />

            <div className="absolute bottom-[8%] -right-40 w-[420px] h-[420px] rounded-full bg-brand/10 blur-[140px]" />
          </div>

          {/* =========================================================
              SECTION 1 — ABOUT IADE
          ========================================================= */}
          <div className="relative z-10 grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* ================= LEFT CONTENT ================= */}
            <div className="md:col-span-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-brand" />
                </span>

                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                  About IADE
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-paper uppercase tracking-tight leading-[0.95]">
                Where Skills
                <br />
                Become <span className="text-brand">Careers.</span>
              </h2>

              {/* Intro */}
              <p className="mt-7 text-base sm:text-lg text-paper/80 leading-relaxed max-w-xl">
                Indian Academy of Digital Education (IADE) is a
                career-focused digital marketing institute built to bridge the gap
                between classroom learning and real-world marketing.
              </p>

              <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-xl">
                Our training combines practical assignments, live campaign
                strategies, expert mentorship, and portfolio-driven learning across
                SEO, paid advertising, social media, content, analytics, and
                performance marketing.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7 max-w-xl">
                {[
                  "Practical, industry-led curriculum",
                  "Live projects & campaign exposure",
                  "Expert mentorship & guidance",
                  "Career & portfolio focused learning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-paper/80"
                  >
                    <span className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Link
                  to="/courses"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-3.5
                    rounded-xl
                    bg-brand
                    hover:bg-brandDark
                    text-paper
                    font-bold
                    uppercase
                    text-[11px]
                    tracking-[0.15em]
                    transition-all
                    duration-300
                    shadow-[0_12px_30px_rgba(200,16,46,0.20)]
                    hover:shadow-[0_16px_40px_rgba(200,16,46,0.30)]
                    hover:-translate-y-1
                  "
                >
                  Explore Our Programs

                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* ================= RIGHT IMAGE SLIDER ================= */}
            <div className="md:col-span-6 relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-brand/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative w-full aspect-[3/3] rounded-[1.5rem] border border-white/10 bg-surface/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                
                {/* Images */}
                {SLIDER_IMAGES.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`IADE Training Environment ${idx + 1}`}
                    className={`
                      absolute inset-0
                      w-full h-full
                      object-cover
                      transition-all
                      duration-1000
                      ease-out
                      ${
                        idx === currentSlide
                          ? "opacity-100 scale-105"
                          : "opacity-0 scale-100"
                      }
                    `}
                  />
                ))}

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Top Label */}
                <div className="absolute top-5 left-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />

                    <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-paper">
                      IADE Training Environment
                    </span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand mb-1">
                      Learn. Practice. Execute.
                    </p>

                    <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight text-paper">
                      Built Around Real-World Skills
                    </h3>
                  </div>

                  {/* Slide Counter */}
                  <div className="shrink-0 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] font-mono text-paper">
                      {String(currentSlide + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[10px] font-mono text-white/30 mx-1">
                      /
                    </span>

                    <span className="text-[10px] font-mono text-white/50">
                      {String(SLIDER_IMAGES.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Previous */}
                <button
                  onClick={prevSlide}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-10
                    h-10
                    rounded-full
                    bg-black/60
                    backdrop-blur-md
                    border
                    border-white/10
                    text-paper
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    hover:bg-brand
                    hover:border-brand
                  "
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next */}
                <button
                  onClick={nextSlide}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    w-10
                    h-10
                    rounded-full
                    bg-black/60
                    backdrop-blur-md
                    border
                    border-white/10
                    text-paper
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    hover:bg-brand
                    hover:border-brand
                  "
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-5 right-5 flex items-center gap-1.5">
                  {SLIDER_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          idx === currentSlide
                            ? "w-7 bg-brand"
                            : "w-1.5 bg-white/40 hover:bg-white/70"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              SECTION 2 — TRAINING EXPERIENCE
          ========================================================= */}
          <div className="relative z-10 grid md:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-white/10">

            {/* ================= VIDEO ================= */}
            <div className="md:col-span-6 relative group">
              <div
                onClick={() => setIsVideoOpen(true)}
                className="
                  relative
                  w-full
                  aspect-[3/3]
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-surface
                  overflow-hidden
                  cursor-pointer
                  shadow-2xl
                "
              >
                <img
                  src="https://media.istockphoto.com/id/2221089954/photo/female-it-specialist-attending-virtual-conference-call.webp?a=1&b=1&s=612x612&w=0&k=20&c=NA-u08VQqUMK9yzuwMSnc7rklly1c7Dn-znPuhYkGlg="
                  alt="IADE practical digital marketing training session"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/65 group-hover:bg-black/45 transition-colors duration-500" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand/90 backdrop-blur-md border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-paper animate-pulse" />

                    <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-paper">
                      Training Preview
                    </span>
                  </div>
                </div>

                {/* Play */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      bg-brand
                      text-paper
                      flex
                      items-center
                      justify-center
                      pl-1
                      shadow-[0_15px_50px_rgba(200,16,46,0.35)]
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-paper
                      group-hover:text-brand
                    "
                  >
                    <Play className="w-7 h-7 fill-current" />
                  </div>

                  <span className="mt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-paper bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                    Watch Classroom Preview
                  </span>
                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand mb-1">
                    Practical Learning
                  </p>

                  <p className="text-base sm:text-lg font-display font-bold uppercase tracking-tight text-paper">
                    From Strategy to Execution
                  </p>
                </div>
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="md:col-span-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                The IADE Learning Experience
              </span>

              <h3 className="mt-3 text-2xl sm:text-2xl lg:text-3xl font-display font-black text-paper uppercase tracking-tight leading-[1]">
                Learn What the
                <br />
                <span className="text-brand">Industry Actually Uses.</span>
              </h3>

              <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed max-w-xl">
                Go beyond theory. Our training is structured around the tools,
                workflows, and decision-making skills used by digital marketing
                teams every day.
              </p>

              {/* Feature List */}
              <div className="mt-7 space-y-4">
                {[
                  {
                    title: "Practical Campaign Training",
                    desc: "Understand how real campaigns are planned, launched, monitored, and optimized.",
                  },
                  {
                    title: "Portfolio-Driven Projects",
                    desc: "Build meaningful project work that demonstrates your skills beyond a certificate.",
                  },
                  {
                    title: "Expert Mentorship",
                    desc: "Get guidance on strategy, execution, career direction, and professional growth.",
                  },
                  {
                    title: "Career-Focused Preparation",
                    desc: "Develop the confidence and practical knowledge required for digital marketing roles.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="
                      group
                      flex
                      items-start
                      gap-4
                      p-3
                      rounded-xl
                      border
                      border-transparent
                      hover:border-white/10
                      hover:bg-white/[0.02]
                      transition-all
                      duration-300
                    "
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-brand" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-paper">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-6
                    py-3.5
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    hover:bg-brand
                    hover:border-brand
                    text-paper
                    font-bold
                    uppercase
                    text-[10px]
                    tracking-[0.15em]
                    transition-all
                    duration-300
                  "
                >
                  Watch Full Training

                  <Play className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================
              SECTION 3 — STATS
          ========================================================= */}
          <div className="relative z-10 pt-16 border-t border-white/10">
            
            {/* Stats Intro */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                  IADE By The Numbers
                </span>

                <h3 className="mt-2 text-2xl sm:text-3xl font-display font-black text-paper uppercase tracking-tight">
                  Built For <span className="text-brand">Career Growth.</span>
                </h3>
              </div>

              <p className="max-w-md text-xs sm:text-sm text-muted leading-relaxed sm:text-right">
                A learning environment focused on practical skills, industry
                exposure, and long-term professional development.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
              {STATS.map(([value, label]) => (
                <div
                  key={label}
                  className="
                    group
                    relative
                    bg-surface/80
                    backdrop-blur-md
                    p-5
                    sm:p-7
                    rounded-2xl
                    border
                    border-white/10
                    overflow-hidden
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-brand/40
                    hover:shadow-[0_20px_45px_rgba(200,16,46,0.10)]
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      -right-10
                      -top-10
                      w-28
                      h-28
                      rounded-full
                      bg-brand/5
                      blur-2xl
                      transition-all
                      duration-500
                      group-hover:bg-brand/20
                      group-hover:scale-125
                    "
                  />

                  {/* Number */}
                  <p
                    className="
                      relative
                      text-3xl
                      sm:text-5xl
                      font-display
                      font-black
                      text-paper
                      tracking-tight
                      transition-colors
                      duration-300
                      group-hover:text-brand
                    "
                  >
                    {value}
                  </p>

                  {/* Label */}
                  <p
                    className="
                      relative
                      mt-2
                      text-[10px]
                      sm:text-xs
                      font-mono
                      text-muted
                      uppercase
                      tracking-[0.12em]
                      leading-relaxed
                      transition-colors
                      duration-300
                      group-hover:text-paper/80
                    "
                  >
                    {label}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-[2px]
                      bg-brand
                      scale-x-0
                      origin-left
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            VIDEO MODAL POPUP
        ========================================================== */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-ink border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 text-paper hover:bg-brand transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src=""
                  title="IADE Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            COURSES SECTION
        ========================================================== */}
          <section className="relative px-6 sm:px-10 py-24 max-w-7xl mx-auto font-body overflow-hidden">
            {/* ================= SECTION HEADER ================= */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-10 border-b border-white/10">
              <div className="max-w-2xl">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>

                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                    Our Programs
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-paper uppercase tracking-tight leading-[0.95]">
                  Learn Skills.
                  <br />
                  <span className="text-brand">Build Careers.</span>
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
                  Industry-focused courses designed to help you master practical
                  skills, work on real projects, and become career-ready.
                </p>
              </div>

              {/* View All Button */}
              <Link
                to="/courses"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  w-fit
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-paper
                  text-[11px]
                  font-mono
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  hover:border-brand/40
                  hover:bg-brand/10
                  hover:text-brand
                "
              >
                <span>View All Courses</span>

                <ArrowUpRight
                  className="
                    w-4
                    h-4
                    text-brand
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </div>

            {/* ================= COURSES GRID ================= */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-12 relative z-10">
              {COURSES.slice(0, 6).map((course, idx) => {
                const formattedIndex = String(idx + 1).padStart(2, "0");

                return (
                  <div
                    key={course.slug || course.title}
                    className="
                      group
                      relative
                      min-h-[350px]
                      bg-surface/80
                      backdrop-blur-xl
                      border
                      border-white/10
                      rounded-2xl
                      p-7
                      sm:p-8
                      flex
                      flex-col
                      justify-between
                      overflow-hidden
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-brand/40
                      hover:shadow-[0_20px_50px_rgba(200,16,46,0.12)]
                    "
                  >
                    {/* ================= CARD GLOW ================= */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -top-24
                        -right-24
                        w-56
                        h-56
                        rounded-full
                        bg-brand/5
                        blur-[70px]
                        transition-all
                        duration-500
                        group-hover:bg-brand/20
                        group-hover:scale-125
                      "
                    />

                    {/* Bottom Glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -bottom-24
                        -left-24
                        w-48
                        h-48
                        rounded-full
                        bg-red-950/20
                        blur-[70px]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* ================= TOP CARD ================= */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        {/* Course Number */}
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono tracking-[0.2em] text-brand font-semibold">
                            {formattedIndex}
                          </span>

                          <span className="w-8 h-px bg-white/10 group-hover:bg-brand/40 transition-colors duration-300" />
                        </div>

                        {/* Badge */}
                        {course.badge ? (
                          <span
                            className="
                              text-[9px]
                              font-mono
                              uppercase
                              tracking-[0.15em]
                              px-2.5
                              py-1.5
                              rounded-md
                              bg-white/[0.04]
                              border
                              border-white/10
                              text-muted
                              transition-all
                              duration-300
                              group-hover:border-brand/30
                              group-hover:text-brand
                            "
                          >
                            {course.badge}
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-white/20">
                            IADE
                          </span>
                        )}
                      </div>

                      {/* Course Title */}
                      <h3
                        className="
                          text-xl
                          sm:text-2xl
                          font-display
                          font-bold
                          text-paper
                          uppercase
                          tracking-tight
                          leading-tight
                          transition-colors
                          duration-300
                          group-hover:text-brand
                        "
                      >
                        {course.title}
                      </h3>

                      {/* Course Description */}
                      <p
                        className="
                          mt-4
                          text-sm
                          text-muted
                          leading-relaxed
                          line-clamp-3
                          transition-colors
                          duration-300
                          group-hover:text-paper/70
                        "
                      >
                        {course.description ||
                          course.shortDesc ||
                          "Master industry-standard tools and real-world strategies through practical, hands-on training."}
                      </p>
                    </div>

                    {/* ================= BOTTOM CARD ================= */}
                    <div className="relative z-10 mt-10">
                      {/* Divider */}
                      <div className="h-px w-full bg-white/10 group-hover:bg-brand/20 transition-colors duration-300" />

                      <div className="flex items-center justify-between pt-5">
                        {/* Duration */}
                        <div>
                          <span className="block text-[9px] font-mono uppercase tracking-[0.15em] text-muted/60 mb-1">
                            Course Format
                          </span>

                          <span className="text-[11px] font-mono uppercase tracking-wider text-paper/80">
                            {course.duration || "Self-Paced / Offline"}
                          </span>
                        </div>

                        {/* Explore Button */}
                        <Link
                          to={`/courses/${course.slug}`}
                          aria-label={`Explore ${course.title}`}
                          className="
                            relative
                            w-11
                            h-11
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            flex
                            items-center
                            justify-center
                            text-paper
                            overflow-hidden
                            transition-all
                            duration-300
                            group-hover:bg-brand
                            group-hover:border-brand
                            group-hover:scale-110
                            group-hover:rotate-3
                          "
                        >
                          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>

                    {/* ================= HOVER BORDER LINE ================= */}
                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        bottom-0
                        h-[2px]
                        bg-brand
                        scale-x-0
                        origin-left
                        transition-transform
                        duration-500
                        group-hover:scale-x-100
                      "
                    />
                  </div>
                );
              })}
            </div>

            {/* ================= BOTTOM MICRO CTA ================= */}
            <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />

                <p className="text-xs sm:text-sm text-muted">
                  Practical training • Live projects • Career-focused learning
                </p>
              </div>

              <Link
                to="/courses"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  font-mono
                  uppercase
                  tracking-[0.15em]
                  text-paper
                  hover:text-brand
                  transition-colors
                "
              >
                Explore Programs

                <ArrowRight className="w-3.5 h-3.5 text-brand transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </section>

        {/* =========================================================
            TEACHERS MARQUEE SECTION
        ========================================================== */}
        <section className="relative py-24 bg-surface/40 border-y border-white/10 font-body overflow-hidden">
          {/* ================= BACKGROUND GLOW ================= */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand/10 rounded-full blur-[130px]" />

            <div className="absolute -top-32 left-10 w-72 h-72 bg-red-950/30 rounded-full blur-[120px]" />

            <div className="absolute -bottom-40 right-10 w-80 h-80 bg-brand/10 rounded-full blur-[130px]" />
          </div>

          {/* ================= SECTION HEADER ================= */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-6 mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>

              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-brand font-bold">
                Faculty & Mentors
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-paper uppercase tracking-tight leading-[0.95]">
              Learn From
              <br />
              <span className="text-brand">Industry Experts.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base text-muted max-w-xl leading-relaxed">
              Learn directly from experienced professionals who bring real-world
              campaigns, strategies, and agency expertise into every classroom.
            </p>
          </div>

          {/* ================= FACULTY MARQUEE ================= */}
          <div className="relative w-full overflow-hidden z-10 py-6">
            {/* Left Fade */}
            <div
              className="
                absolute
                top-0
                bottom-0
                left-0
                w-24
                sm:w-48
                bg-gradient-to-r
                from-ink
                via-ink/80
                to-transparent
                z-30
                pointer-events-none
              "
            />

            {/* Right Fade */}
            <div
              className="
                absolute
                top-0
                bottom-0
                right-0
                w-24
                sm:w-48
                bg-gradient-to-l
                from-ink
                via-ink/80
                to-transparent
                z-30
                pointer-events-none
              "
            />

            {/* Marquee */}
            <div className="flex w-max animate-custom-marquee will-change-transform hover:[animation-play-state:paused]">
              {[
                ...MARQUEE_IMAGES,
                ...MARQUEE_IMAGES,
                ...MARQUEE_IMAGES,
                ...MARQUEE_IMAGES,
              ].map((imgSrc, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-6 shrink-0"
                >
                  {/* ================= FACULTY CARD ================= */}
                  <div
                    className="
                      group
                      relative
                      w-44
                      h-56
                      sm:w-52
                      sm:h-64
                      rounded-2xl
                      overflow-hidden
                      border
                      border-white/10
                      bg-surface/80
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-3
                      hover:border-brand/50
                      hover:shadow-[0_20px_50px_rgba(200,16,46,0.18)]
                    "
                  >
                    {/* Image */}
                    <div className="absolute inset-0">
                      <img
                        src={imgSrc}
                        alt={`IADE Industry Mentor ${index + 1}`}
                        className="
                          w-full
                          h-full
                          object-cover
                          grayscale
                          transition-all
                          duration-700
                          group-hover:grayscale-0
                          group-hover:scale-110
                        "
                      />

                      {/* Dark Overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black
                          via-black/30
                          to-transparent
                        "
                      />

                      {/* Red Hover Overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-brand/10
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                        "
                      />
                    </div>

                    {/* Number */}
                    <span
                      className="
                        absolute
                        top-4
                        left-4
                        text-[10px]
                        font-mono
                        tracking-[0.2em]
                        text-white/60
                        group-hover:text-brand
                        transition-colors
                        duration-300
                      "
                    >
                      // {String((index % MARQUEE_IMAGES.length) + 1).padStart(2, "0")}
                    </span>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" />

                        <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-brand font-semibold">
                          Industry Mentor
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-display font-bold uppercase tracking-wide text-paper">
                        IADE Faculty
                      </h3>

                      <p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-white/50">
                        Digital & Creative
                      </p>
                    </div>

                    {/* Bottom Red Accent */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-[2px]
                        bg-brand
                        scale-x-0
                        origin-left
                        transition-transform
                        duration-500
                        group-hover:scale-x-100
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= BOTTOM STATEMENT ================= */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 mt-14">
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-between
                gap-5
                px-6
                py-5
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-md
              "
            >
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-9 h-9 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-brand" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-paper">
                    Learn From Experience
                  </p>

                  <p className="mt-0.5 text-[11px] text-muted">
                    Practical knowledge from professionals working in the industry.
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand">
                Real Skills. Real Mentors.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            REVIEWS SECTION
        ========================================================== */}
        <section className="relative px-6 sm:px-10 py-24 max-w-7xl mx-auto font-body overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Section Heading */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand" />

              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
                STUDENT REVIEWS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black text-paper uppercase tracking-tight">
              What Our Alumni Say
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              Real feedback from students and working professionals who
              transformed their careers with IADE.
            </p>
          </div>

          {/* Reviews Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 relative z-10">

            {/* Review 01 */}
            <div
              className="
                group relative
                bg-surface
                border border-white/10
                rounded-2xl
                p-7 sm:p-8
                flex flex-col justify-between
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-2
                hover:border-brand/40
                hover:shadow-2xl
                hover:shadow-brand/10
              "
            >
              <div
                className="
                  absolute -top-24 -right-24
                  w-48 h-48
                  rounded-full
                  bg-brand/10
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-brand text-sm transition-transform duration-300 group-hover:scale-110"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="text-4xl font-display font-black text-white/10 leading-none group-hover:text-brand/30 transition-colors duration-300">
                    “
                  </span>
                </div>

                <p className="text-sm sm:text-[15px] text-paper/90 leading-7 italic">
                  "IADE ne mujhe sirf Digital Marketing nahi sikhayi, balki practical
                  projects ke through real industry experience bhi diya. Course complete
                  karne ke baad mujhe apne career ko lekar kaafi confidence mila."
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-display font-bold text-paper uppercase tracking-wide truncate group-hover:text-brand transition-colors duration-300">
                        Priya Sharma
                      </h4>

                      <span
                        className="shrink-0 w-5 h-5 rounded-full bg-brand flex items-center justify-center text-[9px] text-paper font-bold"
                        title="Verified Student Review"
                      >
                        ✓
                      </span>
                    </div>

                    <p className="text-xs font-mono text-muted mt-1 truncate">
                      Digital Marketing Student
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-mono text-white/20 group-hover:text-brand/50 transition-colors">
                    01
                  </span>
                </div>
              </div>
            </div>

            {/* Review 02 */}
            <div
              className="
                group relative
                bg-surface
                border border-white/10
                rounded-2xl
                p-7 sm:p-8
                flex flex-col justify-between
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-2
                hover:border-brand/40
                hover:shadow-2xl
                hover:shadow-brand/10
              "
            >
              <div
                className="
                  absolute -top-24 -right-24
                  w-48 h-48
                  rounded-full
                  bg-brand/10
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-brand text-sm transition-transform duration-300 group-hover:scale-110"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="text-4xl font-display font-black text-white/10 leading-none group-hover:text-brand/30 transition-colors duration-300">
                    “
                  </span>
                </div>

                <p className="text-sm sm:text-[15px] text-paper/90 leading-7 italic">
                  "IADE ka sabse best part practical learning hai. Trainers concepts ko
                  simple way mein explain karte hain aur live campaigns par kaam karne
                  ka opportunity bhi milta hai. Overall learning experience excellent raha."
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-display font-bold text-paper uppercase tracking-wide truncate group-hover:text-brand transition-colors duration-300">
                        Rahul Verma
                      </h4>

                      <span
                        className="shrink-0 w-5 h-5 rounded-full bg-brand flex items-center justify-center text-[9px] text-paper font-bold"
                        title="Verified Student Review"
                      >
                        ✓
                      </span>
                    </div>

                    <p className="text-xs font-mono text-muted mt-1 truncate">
                      Performance Marketing Student
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-mono text-white/20 group-hover:text-brand/50 transition-colors">
                    02
                  </span>
                </div>
              </div>
            </div>

            {/* Review 03 */}
            <div
              className="
                group relative
                bg-surface
                border border-white/10
                rounded-2xl
                p-7 sm:p-8
                flex flex-col justify-between
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-2
                hover:border-brand/40
                hover:shadow-2xl
                hover:shadow-brand/10
              "
            >
              <div
                className="
                  absolute -top-24 -right-24
                  w-48 h-48
                  rounded-full
                  bg-brand/10
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-brand text-sm transition-transform duration-300 group-hover:scale-110"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="text-4xl font-display font-black text-white/10 leading-none group-hover:text-brand/30 transition-colors duration-300">
                    “
                  </span>
                </div>

                <p className="text-sm sm:text-[15px] text-paper/90 leading-7 italic">
                  "Maine IADE join kiya aur meri expectations se bhi better experience
                  raha. SEO, Google Ads aur Social Media Marketing ko practically learn
                  kiya. Faculty supportive hai aur doubts ko properly clear karte hain."
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-display font-bold text-paper uppercase tracking-wide truncate group-hover:text-brand transition-colors duration-300">
                        Anjali Singh
                      </h4>

                      <span
                        className="shrink-0 w-5 h-5 rounded-full bg-brand flex items-center justify-center text-[9px] text-paper font-bold"
                        title="Verified Student Review"
                      >
                        ✓
                      </span>
                    </div>

                    <p className="text-xs font-mono text-muted mt-1 truncate">
                      SEO & Digital Marketing Student
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-mono text-white/20 group-hover:text-brand/50 transition-colors">
                    03
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <EnrollCTA />

      </div>
    </main>
  );
}