import React, { useState, useEffect } from "react";
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
  Users,
  Award,
  Briefcase,
  Laptop,
  Target,
  TrendingUp
} from "lucide-react";

import kusal from "./../../assets/trainer/kusal.png";
import chetna from "./../../assets/trainer/chetna.png";
import hari from "./../../assets/trainer/hari.png";
import pratiksha from "./../../assets/trainer/pratiksha.png";
import pragati from "./../../assets/trainer/pragati.png";
import sahil from "./../../assets/trainer/Sahil.jpeg";
import Alumni from "./../../assets/images/13.jpeg";
import Alumni2 from "./../../assets/images/23.jpeg";
import Alumni3 from "./../../assets/images/11.jpeg";



// Simulated Data (Since I don't have your external files)
const STATS = [
  ["500+", "Students Trained"],
  ["90%", "Placement Record"],
  ["50+", "Live Projects"],
  ["100%", "Practical Training"]
];

const COURSES = [
  { title: "SEO Mastery", slug: "seo", description: "Technical & Content SEO strategies for top rankings.", duration: "3 Months" },
  { title: "Google Ads", slug: "google-ads", description: "Search, Display & Video campaigns to drive sales.", duration: "2 Months" },
  { title: "Social Media", slug: "social-media", description: "Organic growth & paid ads on Instagram, FB, LinkedIn.", duration: "2 Months" },
  { title: "Analytics & CRO", slug: "analytics", description: "GA4, tracking, and Conversion Rate Optimization.", duration: "1 Month" },
  { title: "Content Strategy", slug: "content", description: "Funnels, positioning, and high-converting copywriting.", duration: "2 Months" },
  { title: "Full Stack Digital", slug: "full-stack", description: "Complete 360-degree digital marketing mastery.", duration: "6 Months" }
];

const TESTIMONIALS = [
  { name: "Rahul Sharma", role: "SEO Specialist", text: "IADE transformed my career. The practical projects helped me get a job within a month!" },
  { name: "Priya S.", role: "Social Media Manager", text: "Best decision I made was joining this academy. Mentors are top-notch." },
  { name: "Amit K.", role: "Business Owner", text: "Applied what I learned in my own business and saw a 3x growth in leads." }
];

const SLIDER_IMAGES = [
  Alumni2,
  Alumni
];

const MARQUEE_IMAGES = [kusal, chetna, hari, pratiksha, pragati,sahil];


export default function DigitalMMC() {
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
    <div className="bg-ink text-paper selection:bg-brand selection:text-paper font-sans min-h-screen overflow-x-hidden">
      
      {/* KEYFRAMES */}
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

        .red-gradient-text {
          background: linear-gradient(to right, #C8102E, #FF4D4D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .premium-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-card:hover {
          transform: translateY(-6px);
          border-color: rgba(200, 16, 46, 0.5);
          box-shadow: 0 20px 50px -12px rgba(200, 16, 46, 0.3);
          background: rgba(255, 255, 255, 0.08);
        }
      `}</style>

      {/* ====== HERO SECTION ====== */}
      <section className="relative py-24 md:py-32 px-6 sm:px-10 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-brand/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Live Training • Bhopal
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.1] text-paper">
              Master <br />
              <span className="red-gradient-text relative inline-block">
                Digital Marketing
              </span>
            </h1>

            <p className="text-lg text-muted/90 max-w-lg leading-relaxed font-light border-l-2 border-brand pl-4">
              Bhopal's definitive digital marketing bootcamp. Master SEO, Google Ads, and Analytics through immersive live projects and ironclad placement support.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/courses"
                className="flex items-center gap-3 px-8 py-4 bg-brand hover:bg-brandDark text-paper font-bold rounded-xl uppercase tracking-widest text-sm transition-all shadow-2xl shadow-brand/30 hover:shadow-brand/60 hover:scale-105"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-3 px-8 py-4 bg-surface/50 border border-white/10 text-paper font-bold rounded-xl uppercase tracking-widest text-sm transition-all hover:border-brand/50 hover:bg-white/5"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative group">
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/10 bg-surface shadow-2xl overflow-hidden">
              {SLIDER_IMAGES.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Slider Controls */}
              <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 text-paper border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 text-paper border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STATS BANNER ====== */}
      <section className="bg-surface/50 border-y border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(([value, label]) => (
            <div key={label} className="text-center md:text-left p-4 rounded-xl bg-black/30 border border-white/5 hover:border-brand/30 transition-colors">
              <p className="text-3xl font-black text-paper tracking-tight">{value}</p>
              <p className="text-xs font-bold text-muted uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== VALUE PROPOSITIONS (3 Cards) ====== */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Practical First", body: "Work on live client briefs, real budget campaigns, and portfolio-ready assignments." },
            { num: "02", title: "We Are IADE", body: "Bhopal's premier digital education hub built for next-gen marketers and developers." },
            { num: "03", title: "Placement Support", body: "100% dedicated job guidance, resume optimization, and mock interview prep." },
          ].map((item) => (
            <div key={item.title} className="premium-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
              <span className="absolute -right-4 -top-4 text-7xl font-black text-white/[0.03] select-none">{item.num}</span>
              <div>
                <h3 className="text-2xl font-black text-paper uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-muted/90 leading-relaxed">{item.body}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between text-xs font-bold uppercase tracking-wider text-brand">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== ABOUT & IMAGE SECTION ====== */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold border-l-2 border-brand pl-2">About IADE</span>
            <h2 className="text-4xl sm:text-5xl font-black text-paper uppercase tracking-tight mt-4 leading-[1.1]">
              Best Digital Marketing <br />
              <span className="red-gradient-text">Institute in Bhopal</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-lg">
              IADE is Central India's premier academy offering industry-focused training in <strong className="text-paper">SEO, Social Media, Google Ads, and Analytics</strong> — built around live projects and expert mentorship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Live Projects", "Expert Mentors", "Placement Guarantee"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-surface/80 px-4 py-2 rounded-full border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-brand" />
                  <span className="text-xs font-bold text-paper uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative aspect-square">
            <img 
              src={Alumni3} 
              alt="About IADE" 
              className="w-full h-full object-cover opacity-90 mix-blend-overlay"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 text-center w-max">
              <p className="text-xs font-mono text-muted">Est. 2020 • 500+ Alumni</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== COURSES GRID ====== */}
      <section className="py-24 px-6 sm:px-10 bg-surface/30 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold border-l-2 border-brand pl-2">Our Courses</span>
              <h2 className="text-3xl sm:text-4xl font-black text-paper uppercase tracking-tight mt-2">Master the <span className="red-gradient-text">Full Stack</span></h2>
            </div>
            <Link to="/courses" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-brand transition-colors hidden sm:inline-block">
              View All <ArrowRight className="inline w-3 h-3 ml-1" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course) => (
              <div key={course.title} className="premium-card p-6 rounded-2xl group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-paper uppercase tracking-tight group-hover:text-brand transition-colors">{course.title}</h3>
                  <span className="text-[10px] font-mono text-muted border border-white/10 px-2 py-1 rounded-md bg-black/30">{course.duration}</span>
                </div>
                <p className="text-sm text-muted/90 leading-relaxed mb-6">{course.description}</p>
                <Link to={`/courses/${course.slug}`} className="inline-flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-wider hover:gap-4 transition-all">
                  Explore <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TEACHERS MARQUEE ====== */}
      <section className="py-20 relative overflow-hidden">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl font-black text-paper uppercase tracking-tight">Mentored by <span className="red-gradient-text">Industry Experts</span></h2>
          <p className="text-sm text-muted mt-2">Learn directly from practitioners with real-world agency experience.</p>
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

      {/* ====== TESTIMONIALS ====== */}
      <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold border-l-2 border-brand pl-2 inline-block">Alumni Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-black text-paper uppercase tracking-tight mt-2">What Our <span className="red-gradient-text">Students Say</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={t.name} className="premium-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-brand">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-sm text-paper/90 leading-relaxed italic">"{t.text}"</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-paper">{t.name}</h4>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== VIDEO MODAL ====== */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 text-paper hover:bg-brand transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                  className="w-full h-full"
                  src="https://player.cloudinary.com/embed/?cloud_name=jmgnlxsa&public_id=WhatsApp_Video_2026-09-03_at_16.09.32"
                  title="IADE Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
            </div>
          </div>
        </div>
      )}

      {/* ====== BOTTOM CTA ====== */}
      <section className="relative px-6 sm:px-10 py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-y border-white/10 bg-transparent">
          <div className="text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ping" />
              Ready to Launch?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-paper uppercase tracking-tight mt-3">
              Build a career-ready skill set.
            </h2>
            <p className="mt-3 text-sm text-muted max-w-xl leading-relaxed">
              Join Bhopal's premier academy. Learn with live client projects and get 100% placement support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand hover:bg-brandDark text-paper px-8 py-4 text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-105 rounded-xl">
              <span>Enroll Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-surface/50 hover:bg-white/10 text-paper border border-white/10 px-8 py-4 text-xs font-mono uppercase tracking-widest font-semibold transition-all hover:border-brand/40 rounded-xl">
              Book Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

