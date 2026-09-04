import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle2, Phone, FileText,
  Award, Users, Briefcase, TrendingUp,
  BookOpen, Quote, Target, Calendar,
  MessageCircle, Sparkles, Send, GripVertical
} from 'lucide-react';

import Brochure from "./../../assets/Brochure.pdf";


const DigitalMA = () => {
  // --- Typewriter tagline ---
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const FULL_TAGLINE = 'Learn • Practice • Place';

  // --- Counting stats ---
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, rate: 0, partners: 0, satisfaction: 0 });
  const rafRef = useRef(null);

  // --- Placement funnel tabs ---
  const [activeTab, setActiveTab] = useState(0);

  // --- Placement status ---
  const [placed, setPlaced] = useState(false);

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = Brochure;
    link.download = "Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const TABS = [
    {
      name: "Applications",
      blocks: [
        { icon: FileText, label: "Resume Submitted" },
        { icon: Send, label: "Application Sent" },
        { icon: Users, label: "Recruiter Review" }
      ]
    },
    {
      name: "Interviews",
      blocks: [
        { icon: Calendar, label: "Interview Scheduled" },
        { icon: MessageCircle, label: "Mock Interview" },
        { icon: CheckCircle2, label: "Round Cleared" }
      ]
    },
    {
      name: "Offers",
      blocks: [
        { icon: Award, label: "Offer Received" },
        { icon: Briefcase, label: "Job Confirmed" },
        { icon: TrendingUp, label: "Career Growth" }
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
            if (entry.target.id === 'hero-builder') setTimeout(() => setPlaced(true), 900);
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
    const targets = { students: 400, rate: 90, partners: 50, satisfaction: 98 };
    const duration = 2400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounts({
        students: Math.floor(eased * targets.students),
        rate: Math.floor(eased * targets.rate),
        partners: Math.floor(eased * targets.partners),
        satisfaction: Math.floor(eased * targets.satisfaction)
      });
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setCounts(targets);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);

  const METRICS = [
    { label: "Students Placed", value: counts.students, suffix: "+", icon: Users },
    { label: "Placement Rate", value: counts.rate, suffix: "%", icon: TrendingUp },
    { label: "Hiring Partners", value: counts.partners, suffix: "+", icon: Briefcase },
    { label: "Satisfaction", value: counts.satisfaction, suffix: "%", icon: Award }
  ];

  const PROCESS = [
    { num: "01", title: "Enroll & Learn" },
    { num: "02", title: "Build Portfolio" },
    { num: "03", title: "Resume & Interview Prep" },
    { num: "04", title: "Apply & Get Hired" },
    { num: "05", title: "Career Growth Support" }
  ];

  const SERVICES = [
    { icon: FileText, title: "Resume Building", desc: "Professional resume writing and portfolio creation to showcase your skills effectively.", metric: "Portfolio" },
    { icon: MessageCircle, title: "Interview Preparation", desc: "Mock interviews, communication skills, and confidence-building sessions with experts.", metric: "Confidence" },
    { icon: Briefcase, title: "Job Assistance", desc: "Dedicated placement support with our network of 50+ hiring partners.", metric: "50+ Partners" },
    { icon: Target, title: "Internship Support", desc: "Real-world internship opportunities to gain practical experience and build confidence.", metric: "Real-World" }
  ];

  const PARTNERS = [
    "Digirank360", "Beangate IT Solutions", "Narmada Academy", "I Service Innovation",
    "Growth Digital Marketing", "Shree Ram Advertising", "URL Digital Marketing",
    "Mazex Media", "Bansal College", "Millennium Institute"
  ];

  const TESTIMONIALS = [
    { name: "Anurag Sharma", track: "Graphics Designing · Bhopal", quote: "The placement team guided me at every step. IADE helped me build my portfolio and prepared me for interviews.", company: "Siya Ram Graphics And Painters", role: "Graphic Designer" },
    { name: "Vijendra Hada", track: "Digital Marketing · Bhopal", quote: "Live projects gave me hands-on experience. IADE's practical approach made me job-ready from day one.", company: "Digirank360", role: "SEO Executive" },
    { name: "Jivyani Thawani", track: "Digital Marketing · Bhopal", quote: "IADE's placement team is very supportive. They helped me find the right opportunity and prepared me well.", company: "Freelancer", role: "SEO Executive" },
    { name: "Meenal Chandwani", track: "Digital Marketing · Bhopal", quote: "Strong fundamentals and interview preparation helped me land my first job. Highly recommend IADE.", company: "Digirank360", role: "Social Media Executive" },
    { name: "Surendra Kumar", track: "Graphics Designing · Bhopal", quote: "The placement team helped me land a great role. IADE's practical training and portfolio support were excellent.", company: "Beangate IT Solutions Pvt. Ltd.", role: "Graphic Designer" },
    { name: "Shivam Dehariya", track: "Digital Marketing · Bhopal", quote: "Mock interviews boosted my confidence. IADE's career guidance sessions were extremely helpful.", company: "Narmada Academy", role: "Social Media Manager" }
  ];

  const WHY_TRUST = [
    "100% placement assistance",
    "Industry-focused training",
    "Live projects and practical exposure",
    "Resume building and interview preparation",
    "50+ hiring partners network",
    "Dedicated career support team"
  ];

  const FAQS = [
    { q: "Do you provide 100% placement support?", a: "Yes, we offer 100% placement assistance with resume building, interview preparation, and job support." },
    { q: "Which companies hire from IADE?", a: "We have a network of 50+ hiring partners including Digirank360, Beangate IT Solutions, Narmada Academy, and more." },
    { q: "Do you provide internship opportunities?", a: "Yes, we offer real-world internship opportunities to help you gain practical experience." },
    { q: "Is there any placement guarantee?", a: "We provide dedicated placement support and career guidance to help you secure a job in your chosen field." }
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
        .marquee-track { animation: marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

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
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted">Placement Assistance</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-white/10 rounded-full px-3 py-1">Bhopal</span>
        </div>

        {/* ===== HERO: PLACEMENT FUNNEL MOCKUP ===== */}
        <section id="hero-builder" className="reveal mb-6">
          <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            {/* funnel toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-brand">
                  <Briefcase className="w-3.5 h-3.5" />
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
                <span className={`w-1.5 h-1.5 rounded-full ${placed ? 'bg-brand publish-dot' : 'bg-white/20'}`} />
                <span className={placed ? 'text-brand font-bold' : 'text-muted'}>{placed ? 'Placed!' : 'Tracking…'}</span>
              </div>
            </div>

            {/* funnel canvas */}
            <div className="px-5 md:px-7 pt-5 pb-3 space-y-2 min-h-[104px]">
              {TABS[activeTab].blocks.map((block, bi) => (
                <div key={bi} className="block-row flex items-center gap-3 border border-white/10 rounded-lg px-3 py-2.5">
                  <GripVertical className="grip w-3.5 h-3.5 text-muted flex-shrink-0" />
                  <block.icon className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                  <span className="text-xs font-mono text-muted">{block.label}</span>
                </div>
              ))}
            </div>

            {/* content below funnel */}
            <div className="px-5 md:px-7 pb-6 md:pb-8 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="text-brand font-bold">{typed}</span><span className="cursor-blink" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-paper uppercase tracking-tight leading-[1.05] mb-4">
                Digital Marketing <span className="text-brand">Placement</span> Assistance
              </h1>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-3">
                Industry-focused training, real projects & strong placement support. Thousands of
                students have launched their careers with IADE.
              </p>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                Get 100% placement assistance with resume building, interview preparation, and job
                support for digital marketing careers.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brandDark text-paper font-bold rounded-lg transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Apply Now
                </a>
                <a onClick={downloadBrochure} className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                  <FileText className="w-4 h-4" /> Download Brochure
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section id="stats-widget" className="reveal mb-24 mt-10">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Placement Impact
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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

        {/* ===== PROCESS (numbered timeline) ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Target className="w-3.5 h-3.5" /> Process
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Our <span className="text-brand">Placement Process</span>
          </h2>
          <p className="text-muted text-sm mb-8">From training to job offer — we support you at every step.</p>
          <div className="relative pl-8 md:pl-10 border-l border-white/10 space-y-3">
            {PROCESS.map((step, i) => (
              <div key={i} className="process-node relative border border-white/5 rounded-lg px-5 py-4 flex items-center gap-4">
                <span className="absolute -left-[42px] md:-left-[50px] w-7 h-7 rounded-full bg-ink border border-brand/40 flex items-center justify-center text-brand font-mono text-[11px] font-bold">{step.num}</span>
                <span className="font-bold text-paper text-sm">{step.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHAT WE OFFER ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> What We Offer
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Our <span className="text-brand">Placement Support Services</span>
          </h2>
          <p className="text-muted text-sm mb-8">End-to-end career support to help you land your dream job.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {SERVICES.map((c, i) => (
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

        {/* ===== HIRING PARTNERS MARQUEE (full-bleed) ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <Briefcase className="w-3.5 h-3.5" /> Our Partners
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-6">
            Our <span className="text-brand">Hiring Partners</span>
          </h2>
        </section>
        <div className="reveal relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mb-24 border-y border-white/5 py-3 -mt-16">
          <div className="marquee-track flex gap-3 w-max">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <span key={i} className="text-[11px] font-mono uppercase tracking-wide text-muted border border-white/10 rounded-full px-3 py-1.5 flex-shrink-0 flex items-center gap-1.5">
                <Briefcase className="w-3 h-3" /> {partner}
              </span>
            ))}
          </div>
        </div>

        {/* ===== TESTIMONIALS ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-6">
            <Quote className="w-3.5 h-3.5" /> Testimonials
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Student <span className="text-brand">Placement Stories</span>
          </h2>
          <p className="text-muted text-sm mb-8">Real students. Real careers. Real success.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="ad-card bg-surface border border-white/5 rounded-xl p-6 text-brand flex flex-col">
                <Quote className="w-5 h-5 mb-3" />
                <p className="text-muted text-xs leading-relaxed mb-4 flex-1">{t.quote}</p>
                <div className="border-t border-white/5 pt-3">
                  <p className="font-bold text-paper text-sm">{t.name}</p>
                  <p className="text-[10px] text-muted uppercase tracking-wide mb-2">{t.track}</p>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-brand border border-brand/30 rounded-full px-2 py-1 w-fit">
                    <Briefcase className="w-3 h-3" /> {t.role} · {t.company}
                  </div>
                </div>
                <div className="rank-bar mt-4" />
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
            Why Choose IADE for <span className="text-brand">Placement Assistance</span>
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
            <BookOpen className="w-3.5 h-3.5" /> FAQ
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
              <Briefcase className="w-3.5 h-3.5 text-brand" /> Applications Open
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-paper uppercase tracking-tight mb-3">
              Launch Your <span className="text-brand">Digital Marketing Career</span>
            </h2>
            <p className="text-muted text-sm max-w-md mb-6">
              Join IADE and get 100% placement assistance from training to job offer.
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
                <Phone className="w-4 h-4" /> Apply Now <ArrowRight className="w-4 h-4" />
              </a>
              <a onClick={downloadBrochure} className="magnetic inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-paper font-black rounded-xl uppercase tracking-widest text-sm hover:border-brand/50 transition-colors">
                <FileText className="w-4 h-4" /> Download Brochure
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DigitalMA;