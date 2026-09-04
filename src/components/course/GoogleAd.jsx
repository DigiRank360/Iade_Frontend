import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle2, Phone, FileText,
  Award, Users, Briefcase, Zap, Laptop,
  Shield, BookOpen, Quote, Search, BarChart3, Target,
  ChevronDown, TrendingUp, MousePointerClick, Sparkles
} from 'lucide-react';
import Brochure from "./../../assets/Brochure.pdf";


const GoogleAd = () => {
  // --- Counting stats ---
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, placement: 0, projects: 0 });
  const statsRef = useRef(null);
  const rafRef = useRef(null);

  // --- Typewriter search query ---
  const QUERY = "google ads course in bhopal";
  const [typed, setTyped] = useState('');
  const [showResult, setShowResult] = useState(false);

  // --- Accordion (ad groups) ---
  const [openModule, setOpenModule] = useState(0);

  // --- Quality score meter hover ---
  const [hoveredTrust, setHoveredTrust] = useState(null);


  const downloadBrochure = () => {
  const link = document.createElement("a");
  link.href = Brochure;
  link.download = "Brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  useEffect(() => {
    let i = 0;
    const type = setInterval(() => {
      i += 1;
      setTyped(QUERY.slice(0, i));
      if (i >= QUERY.length) {
        clearInterval(type);
        setTimeout(() => setShowResult(true), 350);
      }
    }, 55);
    return () => clearInterval(type);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.id === 'stats-widget') setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const targets = { students: 500, placement: 92, projects: 45 };
    const duration = 2400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounts({
        students: Math.floor(eased * targets.students),
        placement: Math.floor(eased * targets.placement),
        projects: Math.floor(eased * targets.projects)
      });
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setCounts(targets);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);

  const METRICS = [
    { label: "Students Trained", value: counts.students, suffix: "+", icon: Users },
    { label: "Placement Rate", value: counts.placement, suffix: "%", icon: Award },
    { label: "Live Projects", value: counts.projects, suffix: "+", icon: Briefcase }
  ];

  const KEYWORDS = [
    "Search Ads", "Display Network", "Video Campaigns", "Performance Max",
    "Keyword Research", "Conversion Tracking", "GA4 Setup", "Landing Pages",
    "A/B Testing", "Remarketing", "Shopping Ads", "Quality Score"
  ];

  const CAMPAIGN_TYPES = [
    { icon: Laptop, title: "Live Campaign Setup", desc: "Set up and manage real Google Ads campaigns with actual ad budgets from day one.", metric: "Hands-on" },
    { icon: Target, title: "Expert Mentorship", desc: "Get 1-on-1 guidance from certified Google Ads professionals working in top agencies.", metric: "1-on-1" },
    { icon: BarChart3, title: "ROI Tracking", desc: "Master conversion tracking, GA4 integration, and optimize campaigns for maximum ROI.", metric: "Data-led" }
  ];

  const AD_GROUPS = [
    { num: "01", title: "Foundations", desc: "Funnels, audience targeting, positioning & metrics.", tags: ["Funnels", "Positioning"] },
    { num: "02", title: "Keyword Strategy", desc: "Search intent, keyword research & account structure.", tags: ["Search Intent", "SKAGs"] },
    { num: "03", title: "Campaign Mastery", desc: "Search, Display, Video & Performance Max campaigns.", tags: ["PMax", "Display"] },
    { num: "04", title: "Ad Creatives", desc: "Copywriting, extensions, A/B testing & optimization.", tags: ["Copywriting", "A/B Tests"] },
    { num: "05", title: "Landing Page UX", desc: "High-converting landing pages & CRO strategies.", tags: ["CRO", "UX"] },
    { num: "06", title: "Analytics & Reporting", desc: "GA4, conversion setup, tracking & insights.", tags: ["GA4", "Reporting"] }
  ];

  const QUALITY_POINTS = [
    "Live interactive Google Ads training sessions",
    "Practical learning with real ad campaign setup",
    "Training by certified Google Ads industry experts",
    "In-depth coverage of Search, Display, Video & Shopping Ads",
    "Career-focused curriculum with hands-on assignments",
    "Dedicated student support with performance tracking"
  ];

  const FAQS = [
    { q: "Prerequisites?", a: "No prior experience required. Beginners are welcome." },
    { q: "Certification?", a: "Yes, industry-recognized certification after course completion." },
    { q: "Projects?", a: "Hands-on experience with real Google Ads campaigns." },
    { q: "Placement Support?", a: "Resume building, interview preparation & placement assistance." }
  ];

  return (
    <div className="bg-ink text-paper font-body min-h-screen overflow-x-hidden relative selection:bg-brand selection:text-paper">
      <style>{`
        .reveal { opacity: 0; transform: translateY(36px); transition: all 0.7s cubic-bezier(0.16,1,0.3,1); }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }

        /* Signature: scan-line sweep on hover */
        .ad-card { position: relative; overflow: hidden; transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease, box-shadow 0.35s ease; }
        .ad-card::after {
          content: ''; position: absolute; top: 0; left: -110%; width: 40%; height: 100%;
          background: linear-gradient(100deg, transparent, rgba(200,16,46,0.16), transparent);
          transition: left 0.6s ease;
        }
        .ad-card:hover::after { left: 130%; }
        .ad-card:hover { transform: translateY(-4px); border-color: rgba(200,16,46,0.5); box-shadow: 0 14px 40px -14px rgba(200,16,46,0.35); }

        .rank-bar { height: 2px; width: 0%; background: currentColor; transition: width 0.4s cubic-bezier(0.16,1,0.3,1); }
        .ad-card:hover .rank-bar { width: 100%; }

        /* Marquee */
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 26s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        /* Typewriter caret */
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .caret { animation: blink 1s step-end infinite; }

        /* Accordion chevron */
        .chev { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1); }
        .chev.open { transform: rotate(180deg); }

        /* Ad group row hover slide */
        .group-row { transition: background 0.3s ease, border-color 0.3s ease; }
        .group-row:hover { background: rgba(255,255,255,0.03); }
        .tag-chip { opacity: 0; transform: translateX(8px); transition: all 0.35s ease; }
        .group-row:hover .tag-chip { opacity: 1; transform: translateX(0); }
        .tag-chip:nth-child(2) { transition-delay: 0.06s; }

        /* Quality meter fill */
        .meter-fill { height: 100%; width: 6%; background: linear-gradient(90deg, rgba(200,16,46,0.5), #C8102E); transition: width 0.6s cubic-bezier(0.16,1,0.3,1); }
        .quality-item:hover .meter-fill { width: 100%; }
        .quality-item { transition: border-color 0.3s ease, background 0.3s ease; }
        .quality-item:hover { border-color: rgba(200,16,46,0.4); background: rgba(0,0,0,0.35); }

        /* FAQ flip */
        .flip-outer { perspective: 1200px; }
        .flip-inner { position: relative; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); transform-style: preserve-3d; }
        .flip-outer:hover .flip-inner { transform: rotateY(180deg); }
        .flip-face { backface-visibility: hidden; }
        .flip-front { position: relative; }
        .flip-back { position: absolute; inset: 0; transform: rotateY(180deg); }

        /* Magnetic CTA underline */
        .magnetic { position: relative; }
        .magnetic::before {
          content: ''; position: absolute; left: 50%; bottom: 6px; width: 0%; height: 2px;
          background: currentColor; transform: translateX(-50%); transition: width 0.35s ease;
        }
        .magnetic:hover::before { width: 60%; }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .marquee-track { animation: none !important; }
          .caret { animation: none !important; }
          .flip-inner { transition: none !important; }
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-14 pt-28 md:pt-32 pb-28">

        {/* ===== EYEBROW ===== */}
        <div className="reveal flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted">IADE Academy</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-white/10 rounded-full px-3 py-1">Bhopal</span>
        </div>

        {/* ===== HERO: FAKE SERP ===== */}
        <section className="reveal mb-6">
          {/* browser chrome */}
          <div className="bg-surface rounded-t-xl border border-white/10 border-b-0 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            </div>
            <div className="flex-1 bg-black/40 rounded-full px-4 py-1.5 flex items-center gap-2 border border-white/5">
              <Search className="w-3.5 h-3.5 text-muted flex-shrink-0" />
              <span className="text-xs font-mono text-paper">
                {typed}<span className="caret">|</span>
              </span>
            </div>
          </div>

          {/* SERP result card */}
          <div className="bg-surface/60 border border-white/10 rounded-b-xl p-6 md:p-8">
            <div className={`transition-all duration-700 ${showResult ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-brand border border-brand/40 rounded px-1.5 py-0.5">Ad</span>
                <span className="text-xs text-muted font-mono">iade-academy.com/google-ads</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-paper uppercase tracking-tight leading-[1.05] mb-3">
                Google Ads <span className="text-brand">Masterclass</span>
              </h1>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-xl">
                Bhopal's #1 practical Google Ads training. Learn to plan, launch and optimize
                campaigns that actually drive sales — with a real ad budget, not a simulation.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brandDark text-paper font-bold rounded-lg transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Reserve Your Seat
                </a>
                <a onClick={downloadBrochure} className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                  <FileText className="w-4 h-4" /> View Syllabus
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== KEYWORD MARQUEE (full-bleed, breaks out of the container) ===== */}
        <div className="reveal relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mb-20 border-y border-white/5 py-3">
          <div className="marquee-track flex gap-3 w-max">
            {[...KEYWORDS, ...KEYWORDS].map((kw, i) => (
              <span key={i} className="text-[11px] font-mono uppercase tracking-wide text-muted border border-white/10 rounded-full px-3 py-1.5 flex-shrink-0">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* ===== STATS / CAMPAIGN METRICS WIDGET ===== */}
        <section id="stats-widget" className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Campaign Performance
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {METRICS.map((m, i) => (
              <div key={i} className="ad-card bg-surface border border-white/5 rounded-xl p-5 text-center text-brand">
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center text-brand mx-auto mb-3">
                  <m.icon className="w-4 h-4" />
                </div>
                <p className="text-2xl md:text-3xl font-black text-paper tabular-nums">{m.value}{m.suffix}</p>
                <p className="text-[10px] text-muted uppercase tracking-wider mt-1 font-bold">{m.label}</p>
                <div className="rank-bar mt-3 mx-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== CAMPAIGN TYPES (features) ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <MousePointerClick className="w-3.5 h-3.5" /> Choose Your Focus
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            Build Your <span className="text-brand">PPC Career</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {CAMPAIGN_TYPES.map((c, i) => (
              <div key={i} className="ad-card bg-surface border border-white/5 rounded-xl p-6 text-brand">
                <div className="flex items-center justify-between mb-4">
                  <c.icon className="w-6 h-6" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-muted border border-white/10 rounded-full px-2 py-0.5">{c.metric}</span>
                </div>
                <h4 className="font-bold text-paper text-sm uppercase tracking-wide mb-1">{c.title}</h4>
                <p className="text-muted text-xs leading-relaxed">{c.desc}</p>
                <div className="rank-bar mt-4" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== CURRICULUM AS AD GROUPS (accordion) ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Campaign Structure
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            Six <span className="text-brand">Ad Groups</span> to Mastery
          </h2>
          <div className="border border-white/10 rounded-xl overflow-hidden divide-y divide-white/5">
            {AD_GROUPS.map((g, i) => {
              const open = openModule === i;
              return (
                <div key={i} className="group-row">
                  <button
                    onClick={() => setOpenModule(open ? -1 : i)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-mono text-sm font-bold text-brand/40 flex-shrink-0 min-w-[28px]">{g.num}</span>
                    <span className="font-bold text-paper text-sm flex-1">{g.title}</span>
                    <div className="hidden sm:flex gap-2 mr-2">
                      {g.tags.map((t, ti) => (
                        <span key={ti} className="tag-chip text-[9px] font-mono uppercase tracking-wide text-brand border border-brand/30 rounded-full px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                    <ChevronDown className={`chev w-4 h-4 text-muted flex-shrink-0 ${open ? 'open' : ''}`} />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400 ease-out"
                    style={{ maxHeight: open ? '80px' : '0px' }}
                  >
                    <p className="text-muted text-xs px-5 pb-4 pl-[52px] leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== QUALITY SCORE / TRUST ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <Shield className="w-3.5 h-3.5" /> Quality Score
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            Bhopal's Choice for <span className="text-brand">Google Ads</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {QUALITY_POINTS.map((item, i) => (
              <div
                key={i}
                className="quality-item border border-white/5 rounded-lg p-4"
                onMouseEnter={() => setHoveredTrust(i)}
                onMouseLeave={() => setHoveredTrust(null)}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                  <span className="text-[11px] font-medium text-muted">{item}</span>
                </div>
                <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="meter-fill rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ FLIP CARDS ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-8">
            <Quote className="w-3.5 h-3.5" /> Quick Answers
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="flip-outer h-28">
                <div className="flip-inner w-full h-full">
                  <div className="flip-face flip-front absolute inset-0 bg-surface border border-white/10 rounded-xl p-5 flex flex-col justify-center">
                    <Sparkles className="w-4 h-4 text-brand mb-2" />
                    <h5 className="font-bold text-paper text-sm">{faq.q}</h5>
                    <span className="text-[10px] text-muted mt-1 uppercase tracking-wide">Hover to reveal</span>
                  </div>
                  <div className="flip-face flip-back bg-brand/10 border border-brand/30 rounded-xl p-5 flex items-center">
                    <p className="text-paper text-xs leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PUBLISH CAMPAIGN CTA ===== */}
        <section className="reveal relative overflow-hidden rounded-2xl border border-brand/30 bg-surface p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted mb-4">
              <Zap className="w-3.5 h-3.5 text-brand" /> Campaign Status: Ready to Publish
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-paper uppercase tracking-tight mb-3">
              Launch Your <span className="text-brand">Ad Career</span>
            </h2>
            <p className="text-muted text-sm max-w-md mb-6">
              Enroll today and start running high-ROI campaigns for real businesses.
            </p>
            {/* decorative budget bar */}
            <div className="max-w-sm mb-7">
              <div className="flex justify-between text-[10px] font-mono text-muted mb-1.5">
                <span>Seats filling</span><span>78%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-brand rounded-full" />
              </div>
            </div>
            <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brandDark text-paper font-black rounded-xl uppercase tracking-widest text-sm transition-colors">
              <Phone className="w-4 h-4" /> Enroll Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GoogleAd;