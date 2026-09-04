import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle2, Phone, FileText,
  Award, Users, Briefcase, Zap, Laptop,
  Shield, BookOpen, Quote, BarChart3, Target,
  ChevronDown, TrendingUp, Sparkles, Code2, Terminal,
  Database, Server, GitBranch
} from 'lucide-react';

import Brochure from "./../../assets/Brochure.pdf";


const FullStackDev = () => {
  // --- Counting stats ---
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, placement: 0, projects: 0 });
  const rafRef = useRef(null);

  // --- Code editor tabs ---
  const [activeTab, setActiveTab] = useState(0);

  // --- Terminal build line ---
  const [buildDone, setBuildDone] = useState(false);

  // --- Accordion (curriculum) ---
  const [openModule, setOpenModule] = useState(0);

  const TABS = [
    {
      file: "App.jsx",
      lines: [
        [{ t: "function ", c: "text-brand" }, { t: "App", c: "text-paper" }, { t: "() {", c: "text-muted" }],
        [{ t: "  return ", c: "text-brand" }, { t: "<Header />", c: "text-paper" }],
        [{ t: "}", c: "text-muted" }]
      ]
    },
    {
      file: "server.js",
      lines: [
        [{ t: "app.", c: "text-paper" }, { t: "get", c: "text-brand" }, { t: "('/api/users', ", c: "text-muted" }],
        [{ t: "  (req, res) => res.", c: "text-paper" }, { t: "json", c: "text-brand" }, { t: "(users));", c: "text-muted" }],
        [{ t: "});", c: "text-muted" }]
      ]
    },
    {
      file: "schema.sql",
      lines: [
        [{ t: "CREATE TABLE ", c: "text-brand" }, { t: "users (", c: "text-paper" }],
        [{ t: "  id ", c: "text-paper" }, { t: "SERIAL PRIMARY KEY", c: "text-brand" }, { t: ",", c: "text-muted" }],
        [{ t: ");", c: "text-muted" }]
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
            if (entry.target.id === 'hero-editor') setTimeout(() => setBuildDone(true), 900);
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
    const targets = { students: 350, placement: 88, projects: 60 };
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

  const STACK = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express",
    "MongoDB", "SQL", "REST APIs", "Git", "JWT Auth", "Tailwind CSS"
  ];

  const WHY_CHOOSE = [
    { icon: Laptop, title: "Hands-on Projects", desc: "Work on live development projects and build a strong portfolio.", metric: "Live" },
    { icon: Target, title: "Live Mentorship", desc: "Learn directly from experienced full stack developers.", metric: "1-on-1" },
    { icon: Shield, title: "Placement Support", desc: "Resume building, interview preparation & job assistance.", metric: "Career" }
  ];

  const MODULES = [
    { num: "01", title: "Programming Foundations", desc: "Logic building, problem-solving & core programming concepts.", tags: ["Logic", "DSA Basics"] },
    { num: "02", title: "Front-End Development", desc: "HTML, CSS, JavaScript & responsive UI design.", tags: ["HTML/CSS", "JS"] },
    { num: "03", title: "Advanced Front-End Frameworks", desc: "React.js basics, components & state management.", tags: ["React", "State"] },
    { num: "04", title: "Back-End Development", desc: "Server-side programming, APIs & authentication.", tags: ["APIs", "Auth"] },
    { num: "05", title: "Database Management", desc: "SQL & NoSQL databases, data modeling & queries.", tags: ["SQL", "NoSQL"] },
    { num: "06", title: "Full Stack Integration", desc: "Connecting front-end with back-end & database.", tags: ["Integration", "Deploy"] }
  ];

  const WHO_CAN_JOIN = [
    "School and college students",
    "Job seekers looking for tech careers",
    "Working professionals upgrading their skills",
    "Business owners and entrepreneurs",
    "Anyone who wants to become a Full Stack Developer",
    "Those looking for a full stack development course near me"
  ];

  const CAREERS = [
    { icon: Code2, title: "Full Stack Developer", desc: "Work as a full stack developer in top IT companies and startups." },
    { icon: Server, title: "Back-End Developer", desc: "Specialize in server-side development, APIs, and database management." },
    { icon: Laptop, title: "Front-End Developer", desc: "Build responsive and interactive user interfaces with modern frameworks." }
  ];

  const WHY_LEARN = [
    "High demand for full stack developers in the industry",
    "Work on both front-end and back-end technologies",
    "Build complete web applications from scratch",
    "Lucrative career opportunities in top IT companies",
    "Become a versatile developer with diverse skills",
    "Join the best full stack development institute in Bhopal"
  ];

  const FAQS = [
    { q: "Who can join this course?", a: "Beginners and professionals interested in web development. No prior coding experience needed." },
    { q: "Do I get a certificate?", a: "Yes, you'll receive an industry-recognized certificate after successfully completing the course." },
    { q: "Is placement support available?", a: "Yes, we provide resume building, interview preparation, and placement assistance." },
    { q: "What technologies will I learn?", a: "HTML, CSS, JavaScript, React.js, Node.js, databases, and full stack integration." }
  ];


const downloadBrochure = () => {
  const link = document.createElement("a");
  link.href = Brochure;
  link.download = "Brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};




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

        .code-tab { transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease; }
        .code-tab.active { color: #C8102E; border-color: #C8102E; background: rgba(200,16,46,0.08); }

        @keyframes blink-cursor { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .code-cursor { animation: blink-cursor 1s step-end infinite; }

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
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted">IADE Academy</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-white/10 rounded-full px-3 py-1">Bhopal</span>
        </div>

        {/* ===== HERO: CODE EDITOR MOCKUP ===== */}
        <section id="hero-editor" className="reveal mb-6">
          <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            {/* window chrome */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </div>
              <div className="flex gap-1.5 ml-2">
                {TABS.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`code-tab flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-md border border-transparent text-muted ${activeTab === i ? 'active' : ''}`}
                  >
                    <Code2 className="w-3 h-3" /> {tab.file}
                  </button>
                ))}
              </div>
            </div>

            {/* code area */}
            <div className="px-5 md:px-7 pt-5 pb-3 font-mono text-xs md:text-sm leading-relaxed min-h-[92px]">
              {TABS[activeTab].lines.map((line, li) => (
                <div key={li}>
                  {line.map((seg, si) => (
                    <span key={si} className={seg.c}>{seg.t}</span>
                  ))}
                </div>
              ))}
              <span className="code-cursor text-brand">▍</span>
            </div>

            {/* content below editor */}
            <div className="px-5 md:px-7 pb-6 md:pb-8 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="text-brand font-bold">Frontend</span>•<span className="text-brand font-bold">Backend</span>•<span>Full Stack</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-paper uppercase tracking-tight leading-[1.05] mb-4">
                Full-Stack Web <span className="text-brand">Development</span> Course
              </h1>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-3">
                IADE offers a comprehensive Full Stack Development program designed to build strong
                front-end and back-end development skills through real-world projects. As the best full
                stack development institute in Bhopal, we focus on practical learning, modern technologies,
                and industry-relevant training.
              </p>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                Our course is ideal for students, working professionals, and aspiring developers who want
                to become job-ready full stack developers with hands-on experience and expert mentorship.
              </p>

              <div className="flex flex-wrap gap-3 mb-5">
                <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brandDark text-paper font-bold rounded-lg transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Reserve Your Seat
                </a>
                <a onClick={downloadBrochure} className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                  <FileText className="w-4 h-4" /> View Syllabus
                </a>
              </div>

              {/* terminal build strip */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/5 font-mono text-[11px] text-muted">
                <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
                <span>$ npm run build</span>
                {buildDone && <span className="text-brand font-bold">— ✓ Build successful</span>}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TECH STACK MARQUEE (full-bleed) ===== */}
        <div className="reveal relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mb-20 border-y border-white/5 py-3">
          <div className="marquee-track flex gap-3 w-max">
            {[...STACK, ...STACK].map((tech, i) => (
              <span key={i} className="text-[11px] font-mono uppercase tracking-wide text-muted border border-white/10 rounded-full px-3 py-1.5 flex-shrink-0">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ===== STATS ===== */}
        <section id="stats-widget" className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Course Impact
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

        {/* ===== WHY CHOOSE IADE ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Why Choose IADE
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Why Choose Our <span className="text-brand">Full Stack Course</span> in Bhopal
          </h2>
          <p className="text-muted text-sm mb-8">Industry-aligned training with practical exposure and career support.</p>
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
            What You'll <span className="text-brand">Learn</span>
          </h2>
          <p className="text-muted text-sm mb-8">A career-oriented curriculum covering complete web development.</p>
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
                    style={{ maxHeight: open ? '80px' : '0px' }}
                  >
                    <p className="text-muted text-xs px-5 pb-4 pl-[52px] leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== WHO CAN JOIN ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <Users className="w-3.5 h-3.5" /> Who Can Join
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Who Can Join This <span className="text-brand">Full Stack Course</span>
          </h2>
          <p className="text-muted text-sm mb-8">No prior coding experience needed — if you're eager to learn, this course is for you.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {WHO_CAN_JOIN.map((item, i) => (
              <div key={i} className="bullet-row border border-white/5 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle2 className="bullet-icon w-4 h-4 text-brand flex-shrink-0" />
                <span className="text-[11px] font-medium text-muted">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CAREER OPPORTUNITIES ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Briefcase className="w-3.5 h-3.5" /> Career
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Career Opportunities <span className="text-brand">After This Course</span>
          </h2>
          <p className="text-muted text-sm mb-8">After completing our full stack development course in Bhopal, you can build a successful career in:</p>
          <div className="grid md:grid-cols-3 gap-4">
            {CAREERS.map((c, i) => (
              <div key={i} className="ad-card bg-surface border border-white/5 rounded-xl p-6 text-brand">
                <c.icon className="w-6 h-6 mb-4" />
                <h4 className="font-bold text-paper text-sm uppercase tracking-wide mb-1">{c.title}</h4>
                <p className="text-muted text-xs leading-relaxed">{c.desc}</p>
                <div className="rank-bar mt-4" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY LEARN ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <Zap className="w-3.5 h-3.5" /> Why Learn
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            Why Learn <span className="text-brand">Full Stack Development</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {WHY_LEARN.map((item, i) => (
              <div key={i} className="bullet-row border border-white/5 rounded-lg p-4 flex items-center gap-3">
                <Database className="bullet-icon w-4 h-4 text-brand flex-shrink-0" />
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
              <GitBranch className="w-3.5 h-3.5 text-brand" /> Enrollment Open
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-paper uppercase tracking-tight mb-3">
              Launch Your <span className="text-brand">Developer Career</span>
            </h2>
            <p className="text-muted text-sm max-w-md mb-6">
              Join Bhopal's best full stack development institute and start building real applications.
            </p>
            <div className="max-w-sm mb-7">
              <div className="flex justify-between text-[10px] font-mono text-muted mb-1.5">
                <span>Seats filling</span><span>75%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-brand rounded-full" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brandDark text-paper font-black rounded-xl uppercase tracking-widest text-sm transition-colors">
                <Phone className="w-4 h-4" /> Enroll Now <ArrowRight className="w-4 h-4" />
                  </a>
                  <a onClick={downloadBrochure} className="magnetic inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-paper font-black rounded-xl uppercase tracking-widest text-sm hover:border-brand/50 transition-colors">
                <FileText className="w-4 h-4" /> View Syllabus
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FullStackDev;