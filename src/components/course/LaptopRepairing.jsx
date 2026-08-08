import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle2, Phone, Mail, FileText,
  Award, Users, Briefcase, Zap, Wrench,
  BookOpen, Quote, Target, MapPin,
  ChevronDown, TrendingUp, Sparkles, Cpu,
  HardDrive, MemoryStick, Battery, Settings2,
  Keyboard, ScanLine, Laptop, Smartphone,
  Globe2, GripVertical, ShieldCheck
} from 'lucide-react';

const LaptopRepairing = () => {
  // --- Skill readiness gauge ---
  const [isVisible, setIsVisible] = useState(false);
  const [readiness, setReadiness] = useState(0);
  const rafRef = useRef(null);

  // --- Diagnostic tabs ---
  const [activeTab, setActiveTab] = useState(0);

  // --- Enrolling status ---
  const [enrolling, setEnrolling] = useState(false);

  // --- Accordion (curriculum) ---
  const [openModule, setOpenModule] = useState(0);

  const TABS = [
    {
      name: "Hardware Check",
      blocks: [
        { icon: Battery, label: "Battery Health" },
        { icon: MemoryStick, label: "RAM Test" },
        { icon: HardDrive, label: "SSD / HDD Check" }
      ]
    },
    {
      name: "Software Check",
      blocks: [
        { icon: Laptop, label: "OS Boot Test" },
        { icon: Settings2, label: "Driver Check" },
        { icon: ShieldCheck, label: "Virus Scan" }
      ]
    },
    {
      name: "Motherboard Check",
      blocks: [
        { icon: Cpu, label: "Power Circuit" },
        { icon: ScanLine, label: "Chip-Level Scan" },
        { icon: Keyboard, label: "Display Output" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.id === 'stats-widget') setIsVisible(true);
            if (entry.target.id === 'hero-builder') setTimeout(() => setEnrolling(true), 900);
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
    const target = 99;
    const duration = 1800;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setReadiness(Math.floor(eased * target));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setReadiness(target);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);

  const COURSE_INFO = [
    { label: "Course", value: "Laptop Repairing", icon: Wrench },
    { label: "Location", value: "Bhopal, MP", icon: MapPin },
    { label: "Level", value: "Beginner → Advanced", icon: TrendingUp },
    { label: "Format", value: "Practical + Live Repair", icon: Target }
  ];

  const MARQUEE_ITEMS = [
    "Laptop Repairing Course", "Motherboard Repair Course", "Laptop Technician Course",
    "Mobile & Laptop Repairing Course", "Laptop Repair Training", "Certificate on Completion"
  ];

  const WHY_CHOOSE = [
    { icon: Wrench, title: "Practical Training, Not Just Theory", desc: "Work on real laptops and hardware components in every class, so you build real repair skills — not just notes.", metric: "Hands-on" },
    { icon: Settings2, title: "Expert Technical Guidance", desc: "Learn from experienced technicians who walk you through diagnostics, troubleshooting, and repair step by step.", metric: "Expert" },
    { icon: Briefcase, title: "Career & Business Support", desc: "Get guidance for jobs, service centre roles, freelancing, or starting your own laptop repair shop.", metric: "Career" }
  ];

  const MODULES = [
    {
      num: "01",
      title: "Basic Laptop Knowledge",
      intro: "Every laptop technician course at IADE starts from the fundamentals — no experience required.",
      tags: ["Hardware", "Fundamentals"],
      bullets: ["Parts of a laptop and how they work together", "Opening and assembling a laptop safely", "Understanding RAM, SSD, hard disk, and motherboard"]
    },
    {
      num: "02",
      title: "Laptop Repair Training",
      intro: "This is the core of our computer laptop repairing course — real faults, real fixes.",
      tags: ["Repair", "Troubleshooting"],
      bullets: ["Fixing slow laptops and performance issues", "Solving charging and battery problems", "Keyboard and screen replacement", "Software installation, formatting, and troubleshooting"]
    },
    {
      num: "03",
      title: "Motherboard Repair Course",
      intro: "Go deeper with our dedicated motherboard repair course module and stand out as a skilled laptop technician.",
      tags: ["Motherboard", "Chip-Level"],
      bullets: ["Understanding common motherboard problems", "Basic chip-level troubleshooting", "Power and display issue diagnosis"]
    }
  ];

  const COURSE_MODULES = [
    { icon: Cpu, title: "Laptop Hardware Fundamentals", desc: "Components, internal architecture, tools and safety practices." },
    { icon: Wrench, title: "Assembly & Disassembly", desc: "Step-by-step opening, part replacement, and cable handling." },
    { icon: ScanLine, title: "Fault Diagnosis & Troubleshooting", desc: "Power issues, boot problems, heating and performance faults." },
    { icon: Keyboard, title: "Display, Keyboard & Peripherals", desc: "Screen issues, keyboard replacement, touchpad and port repairs." },
    { icon: Settings2, title: "Software & OS Support", desc: "Windows installation, driver setup, virus removal, optimisation." },
    { icon: Briefcase, title: "Practical Repair & Career Guidance", desc: "Live repair practice, service workflow, pricing, career support." }
  ];

  const WHO_IS_THIS_FOR = ["Beginners", "Students", "Job Seekers", "Freelancers"];

  const CAREERS = [
    { icon: Laptop, text: "Laptop Repair Technician" },
    { icon: Cpu, text: "Computer Hardware Technician" },
    { icon: Briefcase, text: "Service Centre Executive" },
    { icon: Settings2, text: "Technical Support Engineer" },
    { icon: Globe2, text: "Freelance Repair Expert" },
    { icon: Award, text: "Owner, Laptop Repair Shop" }
  ];

  const MOBILE_PATH_BULLETS = [
    "Shared diagnostic and soldering fundamentals",
    "Broader service-centre and freelance opportunities",
    "One certificate, two in-demand skill sets"
  ];

  const TRUSTED = [
    "Live practical laptop repairing training sessions",
    "Hands-on practice with real laptops and hardware parts",
    "Training by experienced laptop repair technicians",
    "Latest laptop repair techniques & troubleshooting methods",
    "Career-focused curriculum with real repair assignments",
    "Dedicated student support and technical guidance"
  ];

  const FAQS = [
    { q: "Do I need prior experience?", a: "No prior technical background is required. We start from laptop hardware basics and build up to advanced, motherboard-level repair skills." },
    { q: "Is a certificate provided?", a: "Yes, you'll receive an industry-recognized certificate after successfully completing the course." },
    { q: "Is the training practical?", a: "Yes, every class is hands-on — you'll work on real laptops and real hardware faults, not just theory." },
    { q: "Do you offer placement support?", a: "Yes, we guide you toward jobs, service centre roles, freelancing, or starting your own laptop repair shop." }
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

        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 28s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        .chev { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1); }
        .chev.open { transform: rotate(180deg); }

        .group-row { transition: background 0.3s ease, border-color 0.3s ease; }
        .group-row:hover { background: rgba(255,255,255,0.03); }
        .tag-chip { opacity: 0; transform: translateX(8px); transition: all 0.35s ease; }
        .group-row:hover .tag-chip { opacity: 1; transform: translateX(0); }
        .tag-chip:nth-child(2) { transition-delay: 0.06s; }

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

        .gauge-fill { transition: width 0.3s linear; }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .marquee-track { animation: none !important; }
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
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted">Live Batches Running · Bhopal Workshop</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-white/10 rounded-full px-3 py-1">Bhopal</span>
        </div>

        {/* ===== HERO: DIAGNOSTIC PANEL MOCKUP ===== */}
        <section id="hero-builder" className="reveal mb-6">
          <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            {/* diagnostic toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-brand">
                  <Cpu className="w-3.5 h-3.5" />
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
                <span className={`w-1.5 h-1.5 rounded-full ${enrolling ? 'bg-brand publish-dot' : 'bg-white/20'}`} />
                <span className={enrolling ? 'text-brand font-bold' : 'text-muted'}>{enrolling ? 'Enrolling' : 'Diagnostic Check'}</span>
              </div>
            </div>

            {/* diagnostic checklist canvas */}
            <div className="px-5 md:px-7 pt-5 pb-3 space-y-2 min-h-[104px]">
              {TABS[activeTab].blocks.map((block, bi) => (
                <div key={bi} className="block-row flex items-center gap-3 border border-white/10 rounded-lg px-3 py-2.5">
                  <GripVertical className="grip w-3.5 h-3.5 text-muted flex-shrink-0" />
                  <block.icon className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                  <span className="text-xs font-mono text-muted flex-1">{block.label}</span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-brand border border-brand/30 rounded-full px-2 py-0.5">Pass</span>
                </div>
              ))}
            </div>

            {/* skill readiness gauge */}
            <div id="stats-widget" className="px-5 md:px-7 pb-4">
              <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted mb-1.5">
                <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-brand" /> Skill Readiness</span>
                <span className="text-brand font-bold tabular-nums">{readiness}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="gauge-fill h-full bg-brand rounded-full" style={{ width: `${readiness}%` }} />
              </div>
            </div>

            {/* content below diagnostic panel */}
            <div className="px-5 md:px-7 pb-6 md:pb-8 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="text-brand font-bold">#LRC-2026</span>•<span>Diagnostic Check</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-paper uppercase tracking-tight leading-[1.05] mb-4">
                Best <span className="text-brand">Laptop Repairing</span> Institute in Bhopal
              </h1>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-3">
                IADE (Indian Academy of Digital Education) is Central India's best institute offering a
                laptop repairing course in Bhopal — built for students, job seekers, entrepreneurs, and
                working professionals who want a real career in computer hardware and laptop repair.
              </p>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                No technical background needed. You'll train on real laptops, real faults, and real
                tools — from basic hardware to motherboard-level troubleshooting.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brandDark text-paper font-bold rounded-lg transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Reserve Your Seat
                </a>
                <a href="https://theiade.in/pdf.pdf" className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                  <FileText className="w-4 h-4" /> View Syllabus
                </a>
              </div>

              {/* course info strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {COURSE_INFO.map((info, i) => (
                  <div key={i} className="border border-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-muted mb-1">
                      <info.icon className="w-3 h-3 text-brand" /> {info.label}
                    </div>
                    <p className="text-paper text-xs font-bold">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== COURSE NAME MARQUEE (full-bleed) ===== */}
        <div className="reveal relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mb-20 border-y border-white/5 py-3">
          <div className="marquee-track flex gap-3 w-max">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="text-[11px] font-mono uppercase tracking-wide text-muted border border-white/10 rounded-full px-3 py-1.5 flex-shrink-0 flex items-center gap-1.5">
                <Wrench className="w-3 h-3" /> {item}
              </span>
            ))}
          </div>
        </div>

        {/* ===== WHY CHOOSE IADE ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Why IADE
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Why Choose Our <span className="text-brand">Laptop Repairing Course</span> in Bhopal
          </h2>
          <p className="text-muted text-sm mb-8">If you're searching for a laptop repairing course near me or the best institute for laptop repairing course, here's what makes IADE Bhopal's one-stop solution.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {WHY_CHOOSE.map((c, i) => (
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

        {/* ===== CURRICULUM (accordion) ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Curriculum
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            What You'll Learn in Our <span className="text-brand">Laptop Repairing Course</span>
          </h2>
          <p className="text-muted text-sm mb-8">A practical, industry-oriented laptop repair training program — from basic laptop knowledge to motherboard-level diagnosis.</p>
          <div className="border border-white/10 rounded-xl overflow-hidden divide-y divide-white/5">
            {MODULES.map((g, i) => {
              const open = openModule === i;
              return (
                <div key={i} className="group-row">
                  <button
                    onClick={() => setOpenModule(open ? -1 : i)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-mono text-sm font-bold text-brand/40 flex-shrink-0 min-w-[28px]">{g.num}</span>
                    <span className="font-bold text-paper text-sm flex-1">{g.title}</span>
                    <div className="hidden md:flex gap-2 mr-2">
                      {g.tags.map((t, ti) => (
                        <span key={ti} className="tag-chip text-[9px] font-mono uppercase tracking-wide text-brand border border-brand/30 rounded-full px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                    <ChevronDown className={`chev w-4 h-4 text-muted flex-shrink-0 ${open ? 'open' : ''}`} />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400 ease-out"
                    style={{ maxHeight: open ? '200px' : '0px' }}
                  >
                    <div className="px-5 pb-4 pl-[52px]">
                      <p className="text-muted text-xs leading-relaxed mb-2">{g.intro}</p>
                      <ul className="space-y-1.5">
                        {g.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-muted text-xs leading-relaxed">
                            <CheckCircle2 className="w-3 h-3 text-brand flex-shrink-0 mt-0.5" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== COURSE STRUCTURE ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Settings2 className="w-3.5 h-3.5" /> Course Structure
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Course <span className="text-brand">Modules</span>
          </h2>
          <p className="text-muted text-sm mb-8">Six structured modules take you from laptop repairing basics to independent, confident repair work.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {COURSE_MODULES.map((c, i) => (
              <div key={i} className="ad-card bg-surface border border-white/5 rounded-xl p-6 text-brand">
                <c.icon className="w-6 h-6 mb-4" />
                <h4 className="font-bold text-paper text-sm uppercase tracking-wide mb-1">{c.title}</h4>
                <p className="text-muted text-xs leading-relaxed">{c.desc}</p>
                <div className="rank-bar mt-4" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== ENROLL NOW ===== */}
        <section className="reveal mb-24 relative overflow-hidden rounded-2xl border border-brand/30 bg-surface p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted mb-4">
              <Wrench className="w-3.5 h-3.5 text-brand" /> Enroll Now
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
              Limited Seats <span className="text-brand">Per Batch</span>
            </h2>
            <p className="text-muted text-sm max-w-md mb-6">Secure your spot in Bhopal's most practical laptop repairing course today.</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brandDark text-paper font-bold rounded-lg transition-colors text-sm">
                <Phone className="w-4 h-4" /> Reserve on WhatsApp
              </a>
              <a href="mailto:admissions@theiade.in" className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                <Mail className="w-4 h-4" /> Email Admissions
              </a>
              <a href="tel:+918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>

            {/* who is this for */}
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted mb-3">
              <Users className="w-3.5 h-3.5 text-brand" /> Who Is This For?
            </div>
            <div className="flex flex-wrap gap-2">
              {WHO_IS_THIS_FOR.map((w, i) => (
                <span key={i} className="text-[11px] font-mono uppercase tracking-wide text-paper border border-white/10 rounded-full px-3 py-1.5">{w}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CAREER OPPORTUNITIES ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <Briefcase className="w-3.5 h-3.5" /> After This Course
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Career Opportunities After <span className="text-brand">Laptop Repair Training</span>
          </h2>
          <p className="text-muted text-sm mb-8">Skilled laptop technicians are always in demand. Here's where our laptop repairing course graduates go next.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {CAREERS.map((item, i) => (
              <div key={i} className="bullet-row border border-white/5 rounded-lg p-4 flex items-center gap-3">
                <item.icon className="bullet-icon w-4 h-4 text-brand flex-shrink-0" />
                <span className="text-[11px] font-medium text-muted">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== MOBILE + LAPTOP CAREER PATH ===== */}
        <section className="reveal mb-24">
          <div className="ad-card bg-surface border border-white/5 rounded-xl p-6 md:p-8 text-brand">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted mb-4">
              <Smartphone className="w-3.5 h-3.5 text-brand" /> Career Path
            </div>
            <h4 className="font-bold text-paper text-lg md:text-xl uppercase tracking-wide mb-2">Mobile and Laptop Repairing Course</h4>
            <p className="text-muted text-sm leading-relaxed mb-5 max-w-2xl">
              Combine your laptop repair training with mobile repair fundamentals for wider service
              opportunities in Bhopal and beyond.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {MOBILE_PATH_BULLETS.map((b, i) => (
                <div key={i} className="flex items-start gap-2 border border-white/5 rounded-lg p-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-muted text-xs leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
            <div className="rank-bar mt-5" />
          </div>
        </section>

        {/* ===== TRUSTED IN BHOPAL ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Trusted In Bhopal
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            Why We Are a Trusted <span className="text-brand">Laptop Repairing Institute</span> in Bhopal
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {TRUSTED.map((item, i) => (
              <div key={i} className="bullet-row border border-white/5 rounded-lg p-4 flex items-center gap-3">
                <Zap className="bullet-icon w-4 h-4 text-brand flex-shrink-0" />
                <span className="text-[11px] font-medium text-muted">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ FLIP CARDS ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-8">
            <Quote className="w-3.5 h-3.5" /> Questions
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
              <Cpu className="w-3.5 h-3.5 text-brand" /> Enrollment Open
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-paper uppercase tracking-tight mb-3">
              Start Your <span className="text-brand">Laptop Repair Career</span>
            </h2>
            <p className="text-muted text-sm max-w-md mb-6">
              Join Bhopal's best laptop repairing institute and start fixing real hardware from day one.
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
                <Phone className="w-4 h-4" /> Enroll Now <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://theiade.in/pdf.pdf" className="magnetic inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-paper font-black rounded-xl uppercase tracking-widest text-sm hover:border-brand/50 transition-colors">
                <FileText className="w-4 h-4" /> View Syllabus
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default LaptopRepairing;