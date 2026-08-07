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
  CheckCircle2 
} from "lucide-react";
import CoverflowHero from "../components/CoverflowHero.jsx";
import SkillRail from "../components/SkillRail.jsx";
import { COURSES, TESTIMONIALS, STATS } from "../utils/data.js";
import sliderImg1 from "./../assets/slider1.png";
import sliderImg2 from "./../assets/slider2.png";
import sliderImg3 from "./../assets/slider3.png";

// Slider Images
const SLIDER_IMAGES = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
];

// Marquee Images
const MARQUEE_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);

  return (
    <main className="bg-ink text-paper selection:bg-brand selection:text-paper font-body overflow-x-hidden">
      {/* KEYFRAMES FOR CONTINUOUS SMOOTH MARQUEE */}
      <style>{`
        @keyframes customMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          animation: customMarquee 25s linear infinite;
        }
        .animate-custom-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* HERO SECTION */}
      <CoverflowHero />

      {/* SKILL RAIL SECTION */}
      <section className="px-6 sm:px-10 py-10 max-w-7xl mx-auto">
        <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted">
          Explore Key Disciplines — Drag to View
        </p>
        <SkillRail />
      </section>

      {/* THREE VALUE PROPOSITIONS */}
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
            className="group relative bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-brand/40 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_10px_30px_rgba(200,16,46,0.15)] flex flex-col justify-between"
          >
            {/* Top Animated Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Ambient Background Glow Filter */}
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

      {/* ABOUT IADE SECTION */}
      <section className="relative py-20 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden space-y-24">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[140px] pointer-events-none" />

        {/* SECTION 1: ABOUT TEXT & IMAGE SLIDER */}
        <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column Text */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
                ABOUT IADE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black text-paper uppercase tracking-tight leading-[1.15]">
              Best Digital Marketing Institute in <span className="text-brand">Bhopal</span>
            </h2>

            <p className="mt-6 text-muted leading-relaxed text-base sm:text-lg">
              IADE is Central India's premier academy offering industry-focused training in <strong className="text-paper">SEO, Social Media Marketing, Google Ads, Content Strategy</strong>, and <strong className="text-paper">Analytics</strong> — built around live projects, 1-on-1 expert mentorship, and 100% placement support.
            </p>

            <p className="mt-4 text-muted leading-relaxed text-sm sm:text-base">
              Designed specifically for students, working professionals, and entrepreneurs looking to master real-world agency skills.
            </p>

            <div className="mt-8">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brandDark text-paper font-bold uppercase text-xs tracking-widest transition-all rounded-xl shadow-lg shadow-brand/20 hover:scale-105"
              >
                Explore All Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="md:col-span-6 relative group">
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/10 bg-surface shadow-2xl overflow-hidden">
              {SLIDER_IMAGES.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`IADE Campus ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-widest text-paper border border-white/10">
                Interactive Campus
              </div>

              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 text-paper border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 text-paper border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {SLIDER_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 transition-all rounded-full ${
                      idx === currentSlide ? "w-6 bg-brand" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: DEMO VIDEO & HIGHLIGHTS */}
        <div className="grid md:grid-cols-12 gap-12 items-center relative z-10 pt-16 border-t border-white/10">
          {/* Left Video Thumbnail */}
          <div className="md:col-span-6 relative">
            <div
              onClick={() => setIsVideoOpen(true)}
              className="group relative w-full aspect-[4/3] rounded-2xl border border-white/10 bg-surface cursor-pointer shadow-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                alt="Watch Live Demo Class"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />

              <div className="absolute top-4 left-4 bg-brand/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-xs font-mono tracking-wider text-paper uppercase flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-paper animate-pulse" />
                Watch Demo
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-brand text-paper flex items-center justify-center pl-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-paper group-hover:text-brand shadow-2xl">
                  <Play className="w-7 h-7 fill-current" />
                </div>
                <span className="text-xs font-mono tracking-widest text-paper uppercase bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10">
                  Preview Classroom Session
                </span>
              </div>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold mb-2">
              EXPERIENCE THE TRAINING
            </span>
            
            <h3 className="text-2xl sm:text-4xl font-display font-black text-paper uppercase tracking-tight">
              See How We Train Professional Marketers
            </h3>

            <p className="mt-4 text-muted leading-relaxed">
              Watch our actual classroom training session to see how we teach live campaign setup, budget optimization, and lead generation step-by-step.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "100% Practical Briefs on Active Accounts",
                "Individual Mentorship & Resume Portfolios",
                "Direct Hiring Assistance with 50+ Agency Partners",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-paper/90">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface border border-white/10 hover:border-brand/50 hover:bg-brand text-paper font-bold uppercase text-xs tracking-widest transition-all rounded-xl shadow-lg"
              >
                Watch Full Video <Play className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 3: STATS GRID */}
        <div className="pt-16 border-t border-white/10 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map(([value, label]) => (
              <div
                key={label}
                className="group relative bg-surface/80 p-6 sm:p-8 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 shadow-xl"
              >
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-brand/10 rounded-full blur-xl group-hover:bg-brand/20 transition-all duration-500" />

                <p className="text-3xl sm:text-5xl font-display font-black text-paper tracking-tight group-hover:text-brand transition-colors duration-300">
                  {value}
                </p>

                <p className="mt-2 text-xs sm:text-sm font-mono text-muted uppercase tracking-wider group-hover:text-paper transition-colors duration-300">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL POPUP */}
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
      <section className="relative px-6 sm:px-10 py-24 max-w-7xl mx-auto font-body overflow-hidden">
        <div className="flex items-end justify-between flex-wrap gap-6 border-b border-white/10 pb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand font-semibold">
                TOP CATEGORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-paper uppercase tracking-tight">
              Courses We Teach
            </h2>
          </div>

          <Link
            to="/courses"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-paper hover:text-brand transition-colors py-2.5 px-5 rounded-xl border border-white/10 hover:border-brand/40 bg-surface"
          >
            <span>View All Courses</span>
            <ArrowUpRight className="w-4 h-4 text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 relative z-10">
          {COURSES.slice(0, 6).map((course, idx) => {
            const formattedIndex = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={course.slug || course.title}
                className="group relative bg-surface border border-white/10 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 shadow-xl overflow-hidden"
              >
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/15 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-muted tracking-widest group-hover:text-brand transition-colors">
                      // {formattedIndex}
                    </span>
                    {course.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-paper group-hover:border-brand/30 transition-colors">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-display font-bold text-paper uppercase tracking-tight group-hover:text-brand transition-colors duration-200">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
                    {course.description || course.shortDesc || "Master industry-standard tools and live client strategies with hands-on training."}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">
                    {course.duration || "Self-Paced / Offline"}
                  </span>

                  <Link
                    to={`/courses/${course.slug}`}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-paper group-hover:bg-brand group-hover:border-brand transition-all duration-300"
                    aria-label={`Explore ${course.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TEACHERS MARQUEE SECTION */}
      <section className="relative py-20 bg-surface/50 border-y border-white/10 font-body overflow-hidden">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-6 mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand font-bold">
              FACULTY & MENTORS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-paper uppercase tracking-tight">
            Greatest Teachers <span className="text-brand">Inspire</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-muted max-w-lg leading-relaxed">
            Learn directly from industry practitioners with proven real-world agency experience.
          </p>
        </div>

        {/* Infinite Scrolling Track */}
        <div className="relative w-full overflow-hidden z-10 py-2">
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-ink to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-ink to-transparent z-20 pointer-events-none" />

          <div className="flex w-max animate-custom-marquee will-change-transform">
            {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((imgSrc, index) => (
              <div key={index} className="px-3 sm:px-4 shrink-0">
                <div className="group relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-white/20 p-1.5 bg-surface/80 backdrop-blur-md transition-all duration-300 hover:border-brand hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={imgSrc}
                      alt={`IADE Mentor ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="relative px-6 sm:px-10 py-24 max-w-7xl mx-auto font-body overflow-hidden">
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
            Real feedback from students and working professionals who transformed their careers with IADE.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 relative z-10">
          {TESTIMONIALS.slice(0, 3).map((t, idx) => {
            const userPhoto =
              t.image ||
              t.avatar ||
              `https://images.unsplash.com/photo-${
                [
                  "1534528741775-53994a69daeb",
                  "1507003211169-0a1dd7228f2d",
                  "1517841905240-472988babdf9",
                ][idx % 3]
              }?auto=format&fit=crop&w=200&q=80`;

            return (
              <div
                key={t.name}
                className="group relative bg-surface border border-white/10 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 shadow-xl overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <span key={i} className="text-brand text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-3xl font-display font-black text-white/10 group-hover:text-brand/30 transition-colors leading-none">
                      “
                    </span>
                  </div>

                  <p className="text-sm text-paper/90 leading-relaxed italic">
                    "{t.text || t.review || t.comment}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={userPhoto}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/10 group-hover:border-brand transition-colors"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-brand flex items-center justify-center text-[8px] text-paper font-bold">
                      ✓
                    </span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <h4 className="text-base font-display font-bold text-paper uppercase tracking-wide truncate group-hover:text-brand transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-xs font-mono text-muted truncate">
                      {t.role || t.course || "Digital Marketing Alumnus"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    {/* ENROLL CTA SECTION */}
          <section className="relative px-6 sm:px-10 py-24 max-w-7xl mx-auto font-body overflow-hidden">
            {/* Background Ambient Red Shadow Glow */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[250px] bg-brand/20 rounded-full blur-[120px] opacity-70 animate-pulse" />

            {/* Clean Transparent Layout Container */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-y border-white/10 bg-transparent">
              
              {/* Left Text Content */}
              <div className="text-center md:text-left">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand font-bold flex items-center justify-center md:justify-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
                  // START YOUR JOURNEY
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-black text-paper uppercase tracking-tight mt-3">
                  Ready to build a career-ready skill?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted max-w-xl leading-relaxed">
                  Join Bhopal’s premier academy. Learn with live client projects and get 100% placement support.
                </p>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand hover:bg-brandDark text-paper px-8 py-4 text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-[0_0_25px_rgba(200,16,46,0.4)] hover:shadow-[0_0_35px_rgba(200,16,46,0.6)] hover:scale-105"
                >
                  <span>Enroll Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-paper border border-white/15 px-8 py-4 text-xs font-mono uppercase tracking-widest font-semibold transition-all hover:border-brand/40"
                >
                  Book Demo
                </Link>
              </div>

            </div>
          </section>
    </main>
  );
}