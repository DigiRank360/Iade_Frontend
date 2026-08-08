import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle2, Phone, FileText,
  Award, Users, Briefcase, Zap, TrendingUp,
  BookOpen, Quote, Target, MessageCircle,
  Sparkles, Video, PlayCircle, RotateCcw,
  Layers, GraduationCap, GripVertical
} from 'lucide-react';

const OnlineClass = () => {
  // --- Typewriter headline ---
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const FULL_WORD = 'Life';

  // --- Counting stats ---
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, satisfaction: 0, trainers: 0 });
  const rafRef = useRef(null);

  // --- Live class tabs ---
  const [activeTab, setActiveTab] = useState(0);

  // --- Live status ---
  const [isLive, setIsLive] = useState(false);

  const TABS = [
    {
      name: "Live Class",
      blocks: [
        { icon: Video, label: "Live Mentor Session" },
        { icon: MessageCircle, label: "Doubt Clearing" },
        { icon: Users, label: "Batch Discussion" }
      ]
    },
    {
      name: "Recorded",
      blocks: [
        { icon: PlayCircle, label: "Recorded Lecture" },
        { icon: BookOpen, label: "Lesson Notes" },
        { icon: RotateCcw, label: "Revisit Anytime" }
      ]
    },
    {
      name: "Assignments",
      blocks: [
        { icon: FileText, label: "Practical Task" },
        { icon: Layers, label: "Real Project" },
        { icon: Award, label: "Certification" }
      ]
    }
  ];

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTyped(FULL_WORD.slice(0, i));
      if (i >= FULL_WORD.length) clearInterval(typeInterval);
    }, 180);
    const cursorInterval = setInterval(() => setShowCursor((c) => !c), 500);
    return () => { clearInterval(typeInterval); clearInterval(cursorInterval); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.id === 'stats-widget') setIsVisible(true);
            if (entry.target.id === 'hero-builder') setTimeout(() => setIsLive(true), 900);
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
    const targets = { students: 500, satisfaction: 95, trainers: 25 };
    const duration = 2400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounts({
        students: Math.floor(eased * targets.students),
        satisfaction: Math.floor(eased * targets.satisfaction),
        trainers: Math.floor(eased * targets.trainers)
      });
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setCounts(targets);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);

  const METRICS = [
    { label: "Students Trained Online", value: counts.students, suffix: "+", icon: Users },
    { label: "Satisfaction Rate", value: counts.satisfaction, suffix: "%", icon: Award },
    { label: "Expert Trainers", value: counts.trainers, suffix: "+", icon: GraduationCap }
  ];

  const WHY_ONLINE = [
    { icon: TrendingUp, title: "Industry-Driven Curriculum", desc: "Our courses are designed as per current market requirements, ensuring you learn exactly what companies are hiring for.", metric: "Market-Fit" },
    { icon: Users, title: "Small Batch Learning", desc: "Limited students per batch for personalized attention, better interaction, and faster doubt resolution.", metric: "Personal" },
    { icon: Briefcase, title: "Career Guidance & Placement Support", desc: "From portfolio building to interview preparation, we support you at every step of your career journey.", metric: "Career" }
  ];

  const PROCESS = [
    { num: "01", title: "Enroll in Your Preferred Course" },
    { num: "02", title: "Attend Live Online Classes" },
    { num: "03", title: "Complete Assignments & Projects" },
    { num: "04", title: "Build Your Portfolio" },
    { num: "05", title: "Get Certified & Career Support" }
  ];

  const FEATURES = [
    { num: "01", icon: Video, title: "Live Interactive Sessions", desc: "Learn directly from experienced mentors in real-time classes." },
    { num: "02", icon: PlayCircle, title: "Recorded Class Access", desc: "Revisit lessons anytime, anywhere—never miss important concepts." },
    { num: "03", icon: Layers, title: "Hands-On Assignments & Projects", desc: "Work on real-world tasks that strengthen your practical skills." },
    { num: "04", icon: Award, title: "Certification Upon Completion", desc: "Get an industry-recognized certificate to showcase your expertise." },
    { num: "05", icon: MessageCircle, title: "Mentor Support & Doubt Clearing", desc: "Dedicated guidance throughout the course duration." }
  ];

  const WHY_TRUST = [
    "Live interactive classes with industry experts",
    "Practical assignments and real-world projects",
    "Recorded sessions for flexible learning",
    "Career-focused curriculum and placement support",
    "Small batch size for personalized attention",
    "Industry-recognized certification"
  ];

  const FAQS = [
    { q: "Are the classes live or recorded?", a: "Classes are live and interactive. Recordings are provided for revision." },
    { q: "Will I get placement support?", a: "Yes, we offer career guidance, portfolio assistance, and placement support." },
    { q: "Can I attend classes from my mobile?", a: "Yes, classes can be attended via laptop, tablet, or smartphone." },
    { q: "Is there a certificate after completion?", a: "Yes, you'll receive an industry-recognized certificate upon successful completion." }
  ];

  return (
    <div className="bg-ink text-paper font-body min-h-screen overflow-x-hidden relative selection:bg-brand selection:text-paper">
      <style>{`
        .reveal { opacity: 0; transform: translateY(36px); transition: all 0.7s cubic-bezier(0.16,1,0.3,1); }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }

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

        .chev { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1); }

        .bullet-row { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, background 0.3s ease; }
        .bullet-row:hover { transform: translateX(6px); border-color: rgba(200,16,46,0.4); background: rgba(0,0,0,0.35); }
        .bullet-row .bullet-icon { transition: transform 0.3s ease, color 0.3s ease; }
        .bullet-row:hover .bullet-icon { transform: scale(1.15); }

        .flip-outer { perspective: 1200px; }
        .flip-inner { position: relative; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); transform-style: preserve-3d; }
        .flip-outer:hover .flip-inner { transform: rotateY(180deg); }
        .flip-face { backface-visibility: hidden; }
        .flip-front { position: relative; }
        .flip-back { position: absolute; inset: 0; transform: rotateY(180deg); }

        .magnetic { position: relative; }
        .magnetic::before {
          content: ''; position: absolute; left: 50%; bottom: 6px; width: 0%; height: 2px;
          background: currentColor; transform: translateX(-50%); transition: width 0.35s ease;
        }
        .magnetic:hover::before { width: 60%; }

        .builder-tab { transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease; }
        .builder-tab.active { color: #C8102E; border-color: #C8102E; background: rgba(200,16,46,0.08); }

        .block-row { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, background 0.3s ease; }
        .block-row:hover { transform: translateX(4px); border-color: rgba(200,16,46,0.4); background: rgba(200,16,46,0.05); }
        .grip { opacity: 0.25; transition: opacity 0.3s ease; }
        .block-row:hover .grip { opacity: 0.7; }

        @keyframes pulse-dot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
        .publish-dot { animation: pulse-dot 1.5s ease-in-out infinite; }

        .process-node { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, background 0.3s ease; }
        .process-node:hover { transform: translateX(6px); border-color: rgba(200,16,46,0.5); background: rgba(200,16,46,0.05); }

        .cursor-blink { display: inline-block; width: 2px; }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
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
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-white/10 rounded-full px-3 py-1">Online</span>
        </div>

        {/* ===== HERO: LIVE CLASS MOCKUP ===== */}
        <section id="hero-builder" className="reveal mb-6">
          <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            {/* class toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-brand">
                  <Video className="w-3.5 h-3.5" />
                </div>
                <div className="flex gap-1.5">
                  {TABS.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`builder-tab text-[11px] font-mono px-3 py-1 rounded-md border border-transparent text-muted ${activeTab === i ? 'active' : ''}`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest">
                <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-brand publish-dot' : 'bg-white/20'}`} />
                <span className={isLive ? 'text-brand font-bold' : 'text-muted'}>{isLive ? 'Live Now' : 'Connecting…'}</span>
              </div>
            </div>

            {/* class canvas */}
            <div className="px-5 md:px-7 pt-5 pb-3 space-y-2 min-h-[104px]">
              {TABS[activeTab].blocks.map((block, bi) => (
                <div key={bi} className="block-row flex items-center gap-3 border border-white/10 rounded-lg px-3 py-2.5">
                  <GripVertical className="grip w-3.5 h-3.5 text-muted flex-shrink-0" />
                  <block.icon className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                  <span className="text-xs font-mono text-muted">{block.label}</span>
                </div>
              ))}
            </div>

            {/* content below class canvas */}
            <div className="px-5 md:px-7 pb-6 md:pb-8 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="text-brand font-bold">Live</span>•<span className="text-brand font-bold">Mentored</span>•<span>Certified</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-paper uppercase tracking-tight leading-[1.05] mb-4">
                Online Classes <span className="block">That Fit Your <span className="text-brand">{typed}<span className="cursor-blink" style={{ opacity: showCursor ? 1 : 0 }}>|</span></span></span>
              </h1>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-3">
                Learn in-demand digital skills from industry experts—without putting your career or
                studies on pause.
              </p>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                Live mentor-led sessions, practical assignments, recorded classes, and recognized
                certification—all delivered through a structured, job-oriented learning path.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brandDark text-paper font-bold rounded-lg transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Join Online Batch
                </a>
                <a href="https://theiade.in/contact.php" className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                  <MessageCircle className="w-4 h-4" /> Free Counseling
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section id="stats-widget" className="reveal mb-24 mt-10">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Online Impact
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

        {/* ===== WHY ONLINE ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Why Online
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Why Online <span className="text-brand">at IADE</span>
          </h2>
          <p className="text-muted text-sm mb-8">Learn from anywhere with a structured, job-oriented learning path.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {WHY_ONLINE.map((c, i) => (
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

        {/* ===== PROCESS (numbered timeline) ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Target className="w-3.5 h-3.5" /> Process
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            How Online Learning <span className="text-brand">Works at IADE</span>
          </h2>
          <div className="relative pl-8 md:pl-10 border-l border-white/10 space-y-3">
            {PROCESS.map((step, i) => (
              <div key={i} className="process-node relative border border-white/5 rounded-lg px-5 py-4 flex items-center gap-4">
                <span className="absolute -left-[42px] md:-left-[50px] w-7 h-7 rounded-full bg-ink border border-brand/40 flex items-center justify-center text-brand font-mono text-[11px] font-bold">{step.num}</span>
                <span className="font-bold text-paper text-sm">{step.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Features
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            What You Get With <span className="text-brand">IADE Online Classes</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="ad-card bg-surface border border-white/5 rounded-xl p-6 text-brand flex gap-4">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-brand/40">{f.num}</span>
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-paper text-sm uppercase tracking-wide mb-1">{f.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY TRUST US ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <Award className="w-3.5 h-3.5" /> Why Trust Us
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            Why IADE Is the <span className="text-brand">Best Choice</span> for Online Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {WHY_TRUST.map((item, i) => (
              <div key={i} className="bullet-row border border-white/5 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle2 className="bullet-icon w-4 h-4 text-brand flex-shrink-0" />
                <span className="text-[11px] font-medium text-muted">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ FLIP CARDS ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-8">
            <Quote className="w-3.5 h-3.5" /> FAQ
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8 -mt-4">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="flip-outer h-32">
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

        {/* ===== CTA ===== */}
        <section className="reveal relative overflow-hidden rounded-2xl border border-brand/30 bg-surface p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted mb-4">
              <Video className="w-3.5 h-3.5 text-brand" /> Batches Open
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-paper uppercase tracking-tight mb-3">
              Start Learning <span className="text-brand">From Anywhere</span>
            </h2>
            <p className="text-muted text-sm max-w-md mb-6">
              Join a live online batch at IADE and build in-demand digital skills on your own schedule.
            </p>
            <div className="max-w-sm mb-7">
              <div className="flex justify-between text-[10px] font-mono text-muted mb-1.5">
                <span>Seats filling</span><span>70%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-brand rounded-full" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brandDark text-paper font-black rounded-xl uppercase tracking-widest text-sm transition-colors">
                <Phone className="w-4 h-4" /> Join Online Batch <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://theiade.in/contact.php" className="magnetic inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-paper font-black rounded-xl uppercase tracking-widest text-sm hover:border-brand/50 transition-colors">
                <MessageCircle className="w-4 h-4" /> Free Counseling
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default OnlineClass;