import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight, X, ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users, Award, Briefcase } from "lucide-react";
import StatBlock from "../components/StatBlock.jsx";
import { STATS } from "../utils/data.js";

// Slider Images
const HERO_SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Auto Slider Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDER_IMAGES.length) % HERO_SLIDER_IMAGES.length);

  return (
    <section className="relative pt-28 pb-24 px-6 sm:px-10 max-w-7xl mx-auto font-body overflow-hidden space-y-28">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ================= SECTION 1: LEFT TEXT | RIGHT SWIPE IMAGE SLIDER ================= */}
      <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE: Heading & Hero Intro Text */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 w-fit mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
              ABOUT IADE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-paper uppercase tracking-tight leading-[1.15]">
            Best Digital Marketing Institute in <span className="text-brand">Bhopal</span>
          </h1>

          <p className="mt-6 text-muted leading-relaxed text-base sm:text-lg font-normal">
            IADE is Central India's leading digital academy providing end-to-end practical skill sets. We bridge the gap between classroom theory and real agency work through client-driven live projects.
          </p>

          <p className="mt-4 text-muted leading-relaxed text-sm sm:text-base">
            Master high-demand skills in <strong className="text-paper">SEO, Performance Marketing, Social Media Strategy</strong>, and <strong className="text-paper">Brand Building</strong> under 1-on-1 expert mentorship.
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#enroll"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brandDark text-paper font-semibold uppercase text-xs tracking-widest transition-all shadow-lg shadow-brand/20 hover:scale-105"
            >
              Explore Programs <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface hover:bg-white/10 border border-white/10 text-paper font-semibold uppercase text-xs tracking-widest transition-all hover:border-brand/40"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Sharp Image Swipe Slider */}
        <div className="md:col-span-6 relative group">
          <div className="relative w-full aspect-[4/3] rounded-none border border-white/10 bg-surface shadow-2xl overflow-hidden">
            {HERO_SLIDER_IMAGES.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`IADE Campus Experience ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-paper border border-white/10">
              Interactive Practical Campus
            </div>

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/80 text-paper border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/80 text-paper border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
              {HERO_SLIDER_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 transition-all ${
                    idx === currentSlide ? "w-6 bg-brand" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ================= SECTION 2: LEFT WATCH DEMO VIDEO | RIGHT TEXT CONTENT ================= */}
      <div className="grid md:grid-cols-12 gap-12 items-center relative z-10 pt-12 border-t border-white/10">
        
        {/* LEFT SIDE: Watch Demo Video Player Box */}
        <div className="md:col-span-6 relative">
          <div
            onClick={() => setIsVideoOpen(true)}
            className="group relative w-full aspect-[4/3] rounded-none border border-white/10 bg-surface cursor-pointer shadow-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
              alt="Watch Live Demo Class"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />

            <div className="absolute top-4 left-4 bg-brand px-3.5 py-1.5 rounded-none border border-white/20 text-xs font-mono tracking-wider text-paper uppercase flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-paper animate-pulse" />
              Watch Demo
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-brand text-paper flex items-center justify-center pl-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-paper group-hover:text-brand shadow-2xl">
                <Play className="w-7 h-7 fill-current" />
              </div>
              <span className="text-xs font-mono tracking-widest text-paper uppercase bg-black/70 px-3 py-1 backdrop-blur-sm border border-white/10">
                Preview Classroom Session
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Curriculum Highlights & Video Explanation */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold mb-2">
            EXPERIENCE THE TRAINING
          </span>
          
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-paper uppercase tracking-tight">
            See How We Train Professional Marketers
          </h2>

          <p className="mt-4 text-muted leading-relaxed">
            Watch our actual classroom training session to see how we teach live campaign setup, budget optimization, and lead generation step-by-step.
          </p>

          {/* Key Value Points */}
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
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface border border-brand/50 hover:bg-brand text-paper font-semibold uppercase text-xs tracking-widest transition-all"
            >
              Watch Full Video <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>

      </div>

      {/* ================= SECTION 3: ANIMATED STATS CARDS ================= */}
      <div className="pt-12 border-t border-white/10 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map(([value, label], idx) => (
            <div
              key={label}
              className="group relative bg-surface p-6 sm:p-8 border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-brand/60 hover:shadow-2xl hover:shadow-brand/10"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-brand/10 rounded-full blur-xl group-hover:bg-brand/25 transition-all duration-500" />

              {/* Number Value with Scale Animation */}
              <p className="text-3xl sm:text-5xl font-display font-black text-paper tracking-tight group-hover:text-brand transition-colors duration-300 group-hover:scale-105 origin-left">
                {value}
              </p>

              {/* Label */}
              <p className="mt-2 text-xs sm:text-sm font-mono text-muted uppercase tracking-wider group-hover:text-paper transition-colors duration-300">
                {label}
              </p>

              {/* Bottom Animated Brand Border Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL POPUP */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-ink border border-white/10 rounded-none overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-black/80 text-paper hover:bg-brand transition-colors"
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
    </section>
  );
}