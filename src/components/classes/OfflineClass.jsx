import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle2, Phone, MessageCircle,
  Award, Users, Briefcase, Zap, TrendingUp,
  BookOpen, Quote, Target, Wrench,
  Sparkles, Building2, Layers, Handshake,
  GraduationCap, GripVertical
} from 'lucide-react';

const OfflineClass = () => {
  // --- Typewriter tagline ---
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const FULL_TAGLINE = 'Learn • Practice • Grow';

  // --- Counting stats ---
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, satisfaction: 0, trainers: 0 });
  const rafRef = useRef(null);

  // --- Campus session tabs ---
  const [activeTab, setActiveTab] = useState(0);

  // --- Session status ---
  const [inSession, setInSession] = useState(false);

  const TABS = [
    {
      name: "Classroom",
      blocks: [
        { icon: Users, label: "Mentor Lecture" },
        { icon: MessageCircle, label: "Live Doubt Solving" },
        { icon: BookOpen, label: "Classroom Notes" }
      ]
    },
    {
      name: "Practical Lab",
      blocks: [
        { icon: Wrench, label: "Hands-on Practice" },
        { icon: Building2, label: "Live Tools & Software" },
        { icon: Target, label: "Real-World Exercise" }
      ]
    },
    {
      name: "Project Work",
      blocks: [
        { icon: Layers, label: "Live Project" },
        { icon: Handshake, label: "Peer Collaboration" },
        { icon: Award, label: "Certification" }
      ]
    }
  ];

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTyped(FULL_TAGLINE.slice(0, i));
      if (i >= FULL_TAGLINE.length) clearInterval(typeInterval);
    }, 70);
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
            if (entry.target.id === 'hero-builder') setTimeout(() => setInSession(true), 900);
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
    const targets = { students: 600, satisfaction: 96, trainers: 30 };
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
    { label: "Students Trained Offline", value: counts.students, suffix: "+", icon: Users },
    { label: "Satisfaction Rate", value: counts.satisfaction, suffix: "%", icon: Award },
    { label: "Expert Trainers", value: counts.trainers, suffix: "+", icon: GraduationCap }
  ];

  const WHY_OFFLINE = [
    { icon: Users, title: "Classroom Learning", desc: "Learn directly from experienced mentors through face-to-face sessions that encourage interaction, discussion, and real-time feedback.", metric: "Face-to-Face" },
    { icon: Wrench, title: "Practical Labs", desc: "Get hands-on practice in fully equipped labs with live tools, software, and real-world exercises.", metric: "Hands-on" },
    { icon: Target, title: "Discipline & Focus", desc: "Structured schedules and a classroom environment help you stay consistent, focused, and motivated throughout your learning journey.", metric: "Structured" }
  ];

  const PROCESS = [
    { num: "01", title: "Visit IADE Campus" },
    { num: "02", title: "Choose Your Course" },
    { num: "03", title: "Attend Classroom Sessions" },
    { num: "04", title: "Practice in Labs & Projects" },
    { num: "05", title: "Get Certified & Placement Support" }
  ];

  const EXPERIENCE = [
    { num: "01", icon: Users, title: "In-Person Mentor Guidance", desc: "Direct support, instant doubt-solving, and personalized attention." },
    { num: "02", icon: Layers, title: "Hands-On Projects & Assignments", desc: "Practice what you learn through industry-relevant tasks and live projects." },
    { num: "03", icon: Building2, title: "Fully Equipped Learning Environment", desc: "Modern classrooms, lab access, and professional learning setup." },
    { num: "04", icon: Handshake, title: "Peer Learning & Collaboration", desc: "Learn alongside like-minded students and grow together." },
    { num: "05", icon: Award, title: "Certification After Completion", desc: "Receive a recognized certificate that adds value to your resume." }
  ];

  const WHY_TRUST = [
    "Face-to-face learning with expert mentors",
    "Hands-on practical labs and live projects",
    "Structured classroom environment for better focus",
    "Career-focused curriculum and placement support",
    "Peer learning and collaboration opportunities",
    "Industry-recognized certification"
  ];

  const FAQS = [
    { q: "Are offline classes better than online?", a: "Offline classes are ideal for students who prefer face-to-face learning and hands-on lab practice." },
    { q: "Do you provide placement support?", a: "Yes, we offer complete career guidance and placement assistance." },
    { q: "Can I visit the campus before enrolling?", a: "Absolutely. Campus visits are encouraged before enrollment." },
    { q: "What courses are available offline?", a: "Digital Marketing, Graphic Design, Web Development, Video Editing, and more." }
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
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-white/10 rounded-full px-3 py-1">Bhopal Campus</span>
        </div>

        {/* ===== HERO: CAMPUS SESSION MOCKUP ===== */}
        <section id="hero-builder" className="reveal mb-6">
          <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            {/* session toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-brand">
                  <Building2 className="w-3.5 h-3.5" />
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
                <span className={`w-1.5 h-1.5 rounded-full ${inSession ? 'bg-brand publish-dot' : 'bg-white/20'}`} />
                <span className={inSession ? 'text-brand font-bold' : 'text-muted'}>{inSession ? 'In Session' : 'Scheduling…'}</span>
              </div>
            </div>

            {/* session canvas */}
            <div className="px-5 md:px-7 pt-5 pb-3 space-y-2 min-h-[104px]">
              {TABS[activeTab].blocks.map((block, bi) => (
                <div key={bi} className="block-row flex items-center gap-3 border border-white/10 rounded-lg px-3 py-2.5">
                  <GripVertical className="grip w-3.5 h-3.5 text-muted flex-shrink-0" />
                  <block.icon className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                  <span className="text-xs font-mono text-muted">{block.label}</span>
                </div>
              ))}
            </div>

            {/* content below session canvas */}
            <div className="px-5 md:px-7 pb-6 md:pb-8 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="text-brand font-bold">{typed}</span><span className="cursor-blink" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-paper uppercase tracking-tight leading-[1.05] mb-4">
                Offline Classes.
                <span className="block">Learn <span className="text-brand">Hands-On</span> at IADE</span>
              </h1>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-3">
                Experience classroom-based learning with expert mentors, practical labs, face-to-face
                guidance, and complete career support—designed to help you master skills faster and
                smarter.
              </p>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                Join IADE's offline classes in Bhopal and get hands-on training with live projects,
                certification, and placement support.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brandDark text-paper font-bold rounded-lg transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Visit Campus / Enroll Now
                </a>
                <a href="https://theiade.in/contact.php" className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                  <MessageCircle className="w-4 h-4" /> Book Free Counseling
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section id="stats-widget" className="reveal mb-24 mt-10">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Campus Impact
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

        {/* ===== WHY OFFLINE ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Why Offline
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Why Offline Classes <span className="text-brand">at IADE</span>
          </h2>
          <p className="text-muted text-sm mb-8">Learn in a structured classroom environment with expert mentors and hands-on practice.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {WHY_OFFLINE.map((c, i) => (
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
            How Learning Works <span className="text-brand">at IADE (Offline)</span>
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

        {/* ===== EXPERIENCE ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Experience
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            What You'll Experience <span className="text-brand">at IADE Campus</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {EXPERIENCE.map((f, i) => (
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
            Why IADE Is the <span className="text-brand">Best Choice</span> for Offline Learning
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
            Offline Classes — <span className="text-brand">FAQs</span>
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
              <Building2 className="w-3.5 h-3.5 text-brand" /> Campus Open
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-paper uppercase tracking-tight mb-3">
              Start Learning <span className="text-brand">Hands-On</span>
            </h2>
            <p className="text-muted text-sm max-w-md mb-6">
              Visit IADE's Bhopal campus and start your hands-on, mentor-led learning journey today.
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
                <Phone className="w-4 h-4" /> Visit Campus / Enroll Now <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://theiade.in/contact.php" className="magnetic inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-paper font-black rounded-xl uppercase tracking-widest text-sm hover:border-brand/50 transition-colors">
                <MessageCircle className="w-4 h-4" /> Book Free Counseling
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default OfflineClass;