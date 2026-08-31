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
import { COURSES, STATS } from "../utils/data.js";

import sliderImg1 from "./../assets/slider1.png";
import sliderImg2 from "./../assets/slider2.png";
import sliderImg3 from "./../assets/slider3.png";

import kusal from "./../assets/trainer/kusal.png";
import chetna from "./../assets/trainer/chetna.png";
import hari from "./../assets/trainer/hari.png";
import pratiksha from "./../assets/trainer/pratiksha.png";
import pragati from "./../assets/trainer/pragati.png";

// Slider Images
const SLIDER_IMAGES = [sliderImg1, sliderImg2, sliderImg3];

// Marquee Images
const MARQUEE_IMAGES = [kusal, chetna, hari, pratiksha, pragati];

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
    <main className="relative bg-ink text-paper selection:bg-brand selection:text-paper font-body overflow-x-hidden w-full">
      {/* =========================================================
          GLOBAL BACKGROUND GLOWS
      ========================================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[350px] sm:w-[520px] h-[350px] sm:h-[520px] rounded-full bg-brand/20 blur-[120px] sm:blur-[150px] opacity-70" />
        <div className="absolute top-[12%] -right-56 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-red-950/60 blur-[140px] sm:blur-[170px] opacity-80" />
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[850px] h-[250px] sm:h-[350px] rounded-full bg-brand/10 blur-[120px] sm:blur-[150px] opacity-60" />
        <div className="absolute top-[58%] -left-72 w-[350px] sm:w-[520px] h-[350px] sm:h-[520px] rounded-full bg-red-900/30 blur-[130px] sm:blur-[160px] opacity-60" />
        <div className="absolute -bottom-40 -right-40 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-brand/15 blur-[120px] sm:blur-[150px] opacity-70" />
      </div>

      {/* =========================================================
          PAGE CONTENT
      ========================================================== */}
      <div className="relative z-10">
        <style>{`
          @keyframes customMarquee {
            0% { transform: translate3d(0%, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-custom-marquee {
            animation: customMarquee 28s linear infinite;
          }
          .animate-custom-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* HERO SECTION */}
        <CoverflowHero />

        {/* SKILL RAIL SECTION */}
        <section className="px-4 sm:px-6 lg:px-10 py-8 sm:py-10 max-w-7xl mx-auto">
          <p className="mb-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted text-center sm:text-left">
            Explore Key Disciplines — Drag to View
          </p>
          <SkillRail />
        </section>

        {/* THREE VALUE PROPOSITIONS */}
        <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
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
              className="group relative bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-brand/40 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="absolute -right-2 -top-4 text-6xl sm:text-7xl font-display font-black text-white/[0.03] group-hover:text-brand/10 transition-colors duration-500 select-none">
                {num}
              </span>

              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted group-hover:border-brand/30 group-hover:text-paper transition-colors duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                    {tag}
                  </span>
                  <span className="text-xs font-mono text-muted/60 group-hover:text-brand transition-colors duration-300">
                    //{num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black uppercase text-paper tracking-tight group-hover:text-brand transition-all duration-300">
                  {title}
                </h3>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted leading-relaxed group-hover:text-paper/90 transition-colors duration-300">
                  {body}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-brand transition-colors duration-300">
                <span>Explore Impact</span>
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* ABOUT IADE SECTION */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto space-y-16 sm:space-y-24 font-body">
          {/* SECTION 1 — ABOUT IADE */}
          <div className="relative z-10 grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-4 sm:mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-brand" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                  About IADE
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-paper uppercase tracking-tight leading-[0.95]">
                Where Skills <br /> Become{" "}
                <span className="text-brand">Careers.</span>
              </h2>

              <p className="mt-5 sm:mt-7 text-sm sm:text-base lg:text-lg text-paper/80 leading-relaxed max-w-xl">
                Indian Academy of Digital Education (IADE) is a career-focused
                digital marketing institute built to bridge the gap between
                classroom learning and real-world marketing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 sm:mt-7 max-w-xl">
                {[
                  "Practical, industry-led curriculum",
                  "Live projects & campaign exposure",
                  "Expert mentorship & guidance",
                  "Career & portfolio focused learning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-paper/80">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-9">
                <Link
                  to="/courses"
                  className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-xl bg-brand hover:bg-brandDark text-paper font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.15em] transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  Explore Our Programs
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE SLIDER */}
            <div className="md:col-span-6 relative group mt-4 md:mt-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/3] rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                {SLIDER_IMAGES.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`IADE Training Environment ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
                      idx === currentSlide
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-100"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Top Label */}
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-paper">
                      IADE Training Environment
                    </span>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand mb-0.5">
                      Learn. Practice. Execute.
                    </p>
                    <h3 className="text-base sm:text-xl font-display font-bold uppercase tracking-tight text-paper">
                      Built Around Real-World Skills
                    </h3>
                  </div>
                  <div className="shrink-0 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] font-mono text-paper">
                      {String(currentSlide + 1).padStart(2, "0")} / {String(SLIDER_IMAGES.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-paper flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-brand"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-paper flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-brand"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 2 — TRAINING EXPERIENCE */}
          <div className="relative z-10 grid md:grid-cols-12 gap-8 lg:gap-16 items-center pt-12 sm:pt-16 border-t border-white/10">
            <div className="md:col-span-6 relative group">
              <div
                onClick={() => setIsVideoOpen(true)}
                className="relative w-full aspect-[16/10] sm:aspect-[3/3] rounded-2xl border border-white/10 bg-surface overflow-hidden cursor-pointer shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000"
                  alt="IADE practical training preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand text-paper flex items-center justify-center pl-1 shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
                  </div>
                  <span className="mt-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] text-paper bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                    Watch Classroom Preview
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                The IADE Experience
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-black text-paper uppercase tracking-tight">
                Learn What the <br />
                <span className="text-brand">Industry Actually Uses.</span>
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed">
                Go beyond theory. Our training is structured around tools, workflows, and execution strategies used by agency teams every day.
              </p>

              <div className="mt-6 space-y-3 sm:space-y-4">
                {[
                  { title: "Practical Campaign Training", desc: "Understand how real campaigns are planned, launched, and optimized." },
                  { title: "Portfolio-Driven Projects", desc: "Build meaningful project work that demonstrates real skills." },
                  { title: "Expert Mentorship", desc: "Get direct feedback on strategy, execution, and career growth." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.02]">
                    <div className="w-6 h-6 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-paper">{item.title}</h4>
                      <p className="mt-0.5 text-[11px] sm:text-xs text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 3 — STATS */}
          <div className="relative z-10 pt-12 sm:pt-16 border-t border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {STATS.map(([value, label]) => (
                <div key={label} className="group relative bg-surface/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 overflow-hidden transition-all hover:-translate-y-1">
                  <p className="text-3xl sm:text-5xl font-display font-black text-paper tracking-tight group-hover:text-brand transition-colors">
                    {value}
                  </p>
                  <p className="mt-2 text-[10px] sm:text-xs font-mono text-muted uppercase tracking-[0.12em]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO MODAL POPUP */}
        {isVideoOpen && (
          <div
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-ink border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 text-paper hover:bg-brand transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="IADE Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* COURSES SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-10 py-16 sm:py-24 max-w-7xl mx-auto font-body overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-4">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                  Our Programs
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-paper uppercase tracking-tight">
                Learn Skills. <br />
                <span className="text-brand">Build Careers.</span>
              </h2>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-paper text-[11px] font-mono uppercase tracking-[0.15em] hover:border-brand/40 hover:bg-brand/10 hover:text-brand transition-all w-fit"
            >
              View All Courses
              <ArrowUpRight className="w-4 h-4 text-brand" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-10 sm:mt-12 relative z-10">
            {COURSES.slice(0, 6).map((course, idx) => (
              <div
                key={course.slug || course.title}
                className="group relative bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-[0.2em] text-brand font-semibold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {course.badge && (
                      <span className="text-[9px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-muted">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-paper uppercase tracking-tight group-hover:text-brand transition-colors">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                    {course.description || course.shortDesc || "Practical, hands-on training with industry mentors."}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-paper/80">
                    {course.duration || "Self-Paced / Offline"}
                  </span>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-paper group-hover:bg-brand group-hover:border-brand transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TEACHERS MARQUEE SECTION */}
        <section className="relative py-16 sm:py-24 bg-surface/40 border-y border-white/10 font-body overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4 mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-brand font-bold mb-3">
              Faculty & Mentors
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-paper uppercase tracking-tight">
              Learn From <span className="text-brand">Industry Experts.</span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden z-10 py-4">
            <div className="flex w-max animate-custom-marquee will-change-transform">
              {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((imgSrc, index) => (
                <div key={index} className="px-3 sm:px-4 shrink-0">
                  <div className="group relative w-36 sm:w-48 h-48 sm:h-60 rounded-2xl overflow-hidden border border-white/10 bg-surface/80">
                    <img
                      src={imgSrc}
                      alt={`IADE Mentor ${index + 1}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <p className="text-[8px] sm:text-[9px] font-mono uppercase text-brand font-semibold">
                        Industry Mentor
                      </p>
                      <h3 className="text-xs sm:text-sm font-display font-bold uppercase text-paper">
                        IADE Faculty
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-10 py-16 sm:py-24 max-w-7xl mx-auto font-body">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold mb-2">
              STUDENT REVIEWS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-paper uppercase tracking-tight">
              What Our Alumni Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              { name: "Priya Sharma", role: "Digital Marketing", review: "IADE ne mujhe practical projects ke through real experience diya. Confidence kaafi badh gaya." },
              { name: "Rahul Verma", role: "Performance Marketing", review: "Live campaigns par kaam karne ka opportunity mila. Learning experience excellent raha." },
              { name: "Anjali Singh", role: "SEO & Content", review: "SEO aur Google Ads ko practically seekha. Faculty doubts properly clear karti hai." },
            ].map((rev, i) => (
              <div key={i} className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-paper/90 italic leading-relaxed">
                  "{rev.review}"
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-display font-bold text-paper uppercase">{rev.name}</h4>
                  <p className="text-[10px] font-mono text-muted">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <EnrollCTA />
      </div>
    </main>
  );
}