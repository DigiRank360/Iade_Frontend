import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, CheckCircle2, Phone, FileText, 
  Award, Users, Briefcase, Star, Sparkles, Zap,
  Monitor, TrendingUp, Target, Globe, Search, Play, Laptop,
  Shield, BookOpen, Quote
} from 'lucide-react';

const Seo = () => {
  // --- State for Counters ---
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, placement: 0, projects: 0 });
  const sectionRef = useRef(null);
  const observerRef = useRef(null);
  const animationFrameRef = useRef(null);

  // --- Intersection Observer ---
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.id === 'stats-section' && !isVisible) {
              setIsVisible(true);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.fade-up, .slide-left, .slide-right, .scale-up, .glass-card');
    elements.forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isVisible]);

  // --- 4-SECOND COUNTING ANIMATION ---
  useEffect(() => {
    if (!isVisible) return;

    const targetValues = { students: 500, placement: 92, projects: 45 };
    const duration = 4000; // 4 seconds
    const startTime = performance.now();

    const updateCounts = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        students: Math.floor(easedProgress * targetValues.students),
        placement: Math.floor(easedProgress * targetValues.placement),
        projects: Math.floor(easedProgress * targetValues.projects)
      });

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(updateCounts);
      } else {
        setCounts(targetValues);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateCounts);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isVisible]);

  // --- Data Arrays (Pure Content Match) ---
  const STATS = [
    { value: counts.students, suffix: "+", label: "Students Trained", icon: Users },
    { value: counts.placement, suffix: "%", label: "Placement Rate", icon: Award },
    { value: counts.projects, suffix: "+", label: "Live Projects", icon: Briefcase }
  ];

  const FEATURES = [
    { 
      icon: Laptop, 
      title: "Hands-on Live Projects", 
      desc: "Work on live campaigns and build a job-ready portfolio that employers trust." 
    },
    { 
      icon: Users, 
      title: "Expert Mentorship", 
      desc: "Get trained by experienced professionals from the digital marketing industry." 
    },
    { 
      icon: Briefcase, 
      title: "Career & Placement Support", 
      desc: "Resume building, interview preparation & internship assistance for career growth." 
    }
  ];

  const MODULES = [
    { num: "01", title: "Foundations", desc: "Search ecosystem, funnels, intent & performance measurement" },
    { num: "02", title: "Website & Landing Pages", desc: "SEO-friendly structure, UX, CRO & page optimization" },
    { num: "03", title: "SEO Mastery", desc: "Technical SEO, content optimization & authority building" },
    { num: "04", title: "GEO & AEO Optimization", desc: "AI search visibility, structured data & answer-focused content" },
    { num: "05", title: "Google Ads & Search Visibility", desc: "Search, Display & Video ads with SEO alignment" },
    { num: "06", title: "Analytics, CRO & Reporting", desc: "GA4, GTM, tracking, insights & optimization" }
  ];

  const TRUST_POINTS = [
    "Live interactive SEO training sessions",
    "Hands-on practice with real websites & projects",
    "Training by experienced SEO industry experts",
    "Latest SEO techniques (On-page, Off-page & Technical SEO)",
    "Career-oriented curriculum with practical assignments",
    "Dedicated student support & performance guidance"
  ];

  const FAQS = [
    { q: "Prerequisites?", a: "No, beginners are welcome. Basic computer knowledge is sufficient." },
    { q: "Certification?", a: "Yes, industry-recognized certification after completion." },
    { q: "Projects?", a: "Hands-on work on real SEO, GEO & AEO campaigns." },
    { q: "Placement Support?", a: "Resume building, interview preparation & job assistance." }
  ];

  return (
    <div className="bg-[#000000] text-[#F5F5F5] font-sans overflow-x-hidden relative selection:bg-[#C8102E] selection:text-white">
      
      {/* ==========================================
          CSS ANIMATIONS & APPLE GLASS EFFECT
      ========================================== */}
      <style>{`
        /* ====== SCROLL REVEALS ====== */
        .fade-up { opacity: 0; transform: translateY(50px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .fade-up.is-visible { opacity: 1; transform: translateY(0); }
        
        .slide-left { opacity: 0; transform: translateX(-60px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .slide-left.is-visible { opacity: 1; transform: translateX(0); }

        .slide-right { opacity: 0; transform: translateX(60px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .slide-right.is-visible { opacity: 1; transform: translateX(0); }

        .scale-up { opacity: 0; transform: scale(0.9); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .scale-up.is-visible { opacity: 1; transform: scale(1); }

        /* ====== APPLE STYLE GLASSMORPHISM ====== */
        .glass {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }
        .glass:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(200, 16, 46, 0.3);
          box-shadow: 0 8px 40px rgba(200, 16, 46, 0.15);
          transform: translateY(-8px);
        }

        .glass-card {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ====== HOVER EFFECTS ====== */
        .hover-lift { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .hover-lift:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 12px 40px -8px rgba(200, 16, 46, 0.3); }

        .hover-glow { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .hover-glow:hover { box-shadow: 0 0 30px rgba(200, 16, 46, 0.4); border-color: rgba(200, 16, 46, 0.6); }

        /* ====== MARQUEE ====== */
        @keyframes ticker {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker { animation: ticker 20s linear infinite; }
        .animate-ticker:hover { animation-play-state: paused; }

        /* ====== PULSE RING ====== */
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(200, 16, 46, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(200, 16, 46, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(200, 16, 46, 0); }
        }
        .animate-pulse-ring { animation: pulse-ring 2s cubic-bezier(0.16, 1, 0.3, 1) infinite; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .slide-left, .slide-right, .scale-up, .glass-card {
            opacity: 1 !important; transform: none !important; transition: none !important;
          }
          .animate-ticker, .animate-pulse-ring { animation: none !important; }
        }
      `}</style>

      {/* ====== 1. AMBIENT BACKGROUND GLOWS ====== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C8102E]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-[#C8102E]/5 rounded-full blur-[100px]" />
      </div>

      {/* ==========================================
          MAIN BODY CONTENT
      ========================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 space-y-28">
        
        {/* ====== 2. HERO SECTION ====== */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="slide-left space-y-8">
            
            {/* "Course" Tag with Icon */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[#C8102E] text-xs font-bold uppercase tracking-widest animate-pulse-ring">
              <Search className="w-3 h-3" /> Course
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] text-[#F5F5F5]">
              Certified Search Engine <br />
              <span className="text-[#C8102E]">Optimization Program</span> <br />
              <span className="text-[#8C8C8C] text-4xl sm:text-5xl">(GEO + AEO)</span>
            </h1>

            {/* Monospace Tagline */}
            <div className="flex items-center gap-3 text-sm font-mono text-[#8C8C8C] border-l-2 border-[#C8102E] pl-4">
              <span className="text-[#F5F5F5] font-bold">SEO</span> <span className="text-[#C8102E]">•</span>
              <span>GEO</span> <span className="text-[#C8102E]">•</span>
              <span>AEO</span> <span className="text-[#C8102E]">•</span>
              <span>Analytics</span>
              <span className="text-[#C8102E]">|</span>
            </div>

            <p className="text-[#8C8C8C] leading-relaxed max-w-lg text-base">
              IADE is a trusted SEO course provider in Bhopal, offering industry-focused training designed for real-world success. Learn SEO, Google Ads, Social Media, Content Strategy, Funnels, Automation, and Analytics through live projects guided by experienced mentors.
            </p>

           
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://wa.me/918319578939" className="hover-lift flex items-center gap-3 px-8 py-4 bg-[#C8102E] hover:bg-[#8C0B20] text-white font-bold rounded-xl shadow-2xl shadow-[#C8102E]/30 hover:shadow-[#C8102E]/60">
                <Phone className="w-5 h-5" /> Reserve Your Seat
              </a>
              <a href="#" className="hover-lift flex items-center gap-3 px-8 py-4 glass text-[#F5F5F5] font-bold rounded-xl hover:border-[#C8102E]/50">
                <FileText className="w-5 h-5" /> View Syllabus
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="slide-right relative group">
            <div className="glass rounded-2xl overflow-hidden aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
                alt="SEO Course at IADE" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#000000]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-xl border border-white/10">
                <p className="text-xs font-mono text-[#8C8C8C]">SEO Course at IADE</p>
              </div>
            </div>
          </div>
        </section>

        {/* ====== 3. TICKER MARQUEE ====== */}
        <div className="glass py-6 border-y border-white/5 overflow-hidden rounded-none mx-[-24px] sm:mx-0 sm:rounded-2xl">
          <div className="flex whitespace-nowrap animate-ticker">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-8 text-[#8C8C8C] text-xs font-bold uppercase tracking-widest">
                <span className="text-[#C8102E] text-lg">✦</span> SEO <span className="text-[#C8102E] text-lg">✦</span>
                <span>GEO Optimization</span> <span className="text-[#C8102E] text-lg">✦</span>
                <span>AEO Strategies</span> <span className="text-[#C8102E] text-lg">✦</span>
                <span>Analytics & CRO</span>
              </div>
            ))}
          </div>
        </div>

        {/* ====== 4. ANIMATED STATS RINGS (4 Seconds Counting) ====== */}
        <section id="stats-section" ref={sectionRef} className="flex justify-center gap-12 flex-wrap fade-up">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-32 h-32 rounded-full flex items-center justify-center glass border-2 border-[#C8102E]/30 group-hover:border-[#C8102E] transition-colors relative`}>
                <stat.icon className="w-8 h-8 text-[#C8102E] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="absolute inset-0 rounded-full border-2 border-[#C8102E]/20 animate-pulse"></div>
              </div>
              <div className="text-center mt-4">
                <p className="text-4xl font-black text-white tabular-nums">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-xs text-[#8C8C8C] uppercase tracking-wider font-bold">{stat.label}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ====== 5. WHY CHOOSE US (3 Glass Cards) ====== */}
        <section className="space-y-12">
          <div className="text-center fade-up space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[#C8102E] text-xs font-bold uppercase tracking-widest">
              <Star className="w-3.5 h-3.5" /> Why Choose IADE
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F5F5F5] uppercase tracking-tight">
              Why Choose Our <span className="text-[#C8102E]">Search Engine Optimization</span> Course in Bhopal
            </h2>
            <p className="text-[#8C8C8C] max-w-2xl mx-auto text-sm">Industry-aligned training with practical exposure and career support</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <div key={index} className="glass-card glass p-8 rounded-2xl text-center group" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto glass rounded-2xl flex items-center justify-center text-[#C8102E] mb-4 group-hover:border-[#C8102E]/50 transition-colors">
                  <feature.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xl font-black text-[#F5F5F5] uppercase tracking-wide mb-2">{feature.title}</h4>
                <p className="text-[#8C8C8C] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ====== 6. MODULES SECTION (Timeline Layout) ====== */}
        <section className="space-y-12">
          <div className="text-center fade-up space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[#C8102E] text-xs font-bold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" /> Curriculum
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F5F5F5] uppercase tracking-tight">
              What You'll <span className="text-[#C8102E]">Learn</span>
            </h2>
            <p className="text-[#8C8C8C] max-w-2xl mx-auto text-sm">A future-ready curriculum designed to help you rank across search engines, local results, and AI-powered answers.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((module, index) => (
              <div key={index} className="glass-card glass p-6 rounded-2xl flex items-start gap-4 border-l-4 border-[#C8102E] hover:border-l-8 transition-all" style={{ transitionDelay: `${index * 0.05}s` }}>
                <span className="font-mono text-xl font-bold text-[#C8102E]/40 flex-shrink-0 min-w-[32px]">{module.num}</span>
                <div>
                  <h5 className="font-bold text-[#F5F5F5] text-lg">{module.title}</h5>
                  <p className="text-[#8C8C8C] text-sm mt-1 font-light">{module.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== 7. TRUST SECTION ====== */}
        <section className="fade-up glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C8102E]/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3.5 h-3.5" /> Trusted
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-[#F5F5F5] uppercase tracking-tight mb-8">Why We Are a Trusted SEO Course Provider in Bhopal</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
              {TRUST_POINTS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#8C8C8C] hover:text-[#F5F5F5] transition-colors bg-black/20 p-4 rounded-xl border border-white/5 hover:border-[#C8102E]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#C8102E] flex-shrink-0 hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== 8. FAQ SECTION ====== */}
        <section className="space-y-12">
          <div className="text-center fade-up space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[#C8102E] text-xs font-bold uppercase tracking-widest">
              <Quote className="w-3.5 h-3.5" /> FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F5F5F5] uppercase tracking-tight">
              Frequently Asked <span className="text-[#C8102E]">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {FAQS.map((faq, index) => (
              <div key={index} className="glass-card glass p-6 rounded-2xl hover:border-[#C8102E]/40 transition-all">
                <h5 className="font-bold text-[#F5F5F5] text-lg mb-1">{faq.q}</h5>
                <p className="text-[#8C8C8C] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ====== 9. CTA SECTION ====== */}
        <section className="fade-up relative overflow-hidden rounded-3xl p-12 md:p-16 text-center bg-gradient-to-br from-[#C8102E] via-[#000000] to-[#C8102E] shadow-2xl shadow-[#C8102E]/20">
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          <div className="relative z-10 space-y-4">
            <Zap className="w-12 h-12 text-white/80 mx-auto animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-black text-[#F5F5F5] uppercase tracking-tight">
              Ready to <span className="text-[#C8102E]">Master</span> SEO & AI Search?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-sm">Enroll today and become a certified SEO expert with IADE.</p>
            <a href="https://wa.me/918319578939" className="hover-lift inline-flex items-center gap-2 px-10 py-5 bg-white text-[#C8102E] font-black rounded-xl uppercase tracking-widest text-sm shadow-2xl shadow-white/20">
              <Phone className="w-4 h-4" /> Enroll Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Seo;