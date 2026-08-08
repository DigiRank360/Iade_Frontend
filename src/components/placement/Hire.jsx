import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle2, Phone, FileText,
  Award, Users, Briefcase, TrendingUp,
  BookOpen, Quote, Target, Calendar,
  MessageCircle, Sparkles, Send, Mail,
  User, Building2, Search, BarChart,
  Megaphone, PenTool, PieChart, Layers,
  Clock, ThumbsUp, Globe, Star,
  ChevronRight, ExternalLink
} from 'lucide-react';

const Hire = () => {
  // --- Typing animation ---
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const FULL_TAGLINE = 'Skilled • Trained • Ready';

  // --- Counting stats ---
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ placed: 0, partners: 0, hours: 0, fees: 0 });
  const rafRef = useRef(null);

  // --- Form state ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // --- Typing effect ---
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

  // --- Intersection Observer ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.id === 'hire-stats') setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // --- Counter animation ---
  useEffect(() => {
    if (!isVisible) return;
    const targets = { placed: 500, partners: 50, hours: 100, fees: 0 };
    const duration = 2400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounts({
        placed: Math.floor(eased * targets.placed),
        partners: Math.floor(eased * targets.partners),
        hours: Math.floor(eased * targets.hours),
        fees: Math.floor(eased * targets.fees)
      });
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setCounts(targets);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);

  // --- Form handlers ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Add your form submission logic here
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  // --- Data ---
  const METRICS = [
    { label: "Students Placed", value: counts.placed, suffix: "+", icon: Users },
    { label: "Hiring Partners", value: counts.partners, suffix: "+", icon: Briefcase },
    { label: "Training Hours", value: counts.hours, suffix: "+", icon: Clock },
    { label: "Placement Fees", value: "₹0", suffix: "", icon: TrendingUp, noCount: true }
  ];

  const WHY_HIRE = [
    { icon: Award, title: "Extensive Hands-On Experience", desc: "100+ hours of assignments, live campaigns, and real projects." },
    { icon: Target, title: "Job-Ready Freshers", desc: "Trained in SEO, PPC, Social Media, Analytics & AI tools." },
    { icon: TrendingUp, title: "No Placement Fees", desc: "We do not charge companies for hiring through IADE." },
    { icon: Users, title: "End-to-End Hiring Support", desc: "Shortlisting, interviews, coordination & onboarding support." }
  ];

  const JOB_PROFILES = [
    { icon: BarChart, title: "SEO Analyst", skills: "On-page & off-page SEO, keyword research, analytics.", color: "from-blue-500/20 to-blue-600/10" },
    { icon: TrendingUp, title: "PPC Expert", skills: "Google Ads, Meta Ads, campaign optimisation.", color: "from-green-500/20 to-green-600/10" },
    { icon: Megaphone, title: "Social Media Manager", skills: "Content creation, scheduling & brand engagement.", color: "from-purple-500/20 to-purple-600/10" },
    { icon: PenTool, title: "Content Writer", skills: "SEO content writing, blogs, copywriting & storytelling.", color: "from-yellow-500/20 to-yellow-600/10" },
    { icon: PieChart, title: "Marketing Analyst", skills: "Data analysis, reporting, campaign performance tracking.", color: "from-red-500/20 to-red-600/10" },
    { icon: Layers, title: "Graphic Designer", skills: "Visual design, branding, social media creatives & UI/UX.", color: "from-pink-500/20 to-pink-600/10" }
  ];

  const WHY_TRUST = [
    "500+ students trained and placed",
    "Industry-aligned curriculum",
    "Live project experience",
    "50+ hiring partners network",
    "Zero placement fees",
    "End-to-end recruitment support"
  ];

  const ROLES = [
    "SEO Analyst",
    "PPC Expert",
    "Social Media Manager",
    "Content Writer",
    "Marketing Analyst",
    "Graphic Designer"
  ];

  return (
    <div className="bg-ink text-paper font-body min-h-screen overflow-x-hidden relative selection:bg-brand selection:text-paper">
      <style>{`
        .reveal { opacity: 0; transform: translateY(36px); transition: all 0.7s cubic-bezier(0.16,1,0.3,1); }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }

        .ad-card { 
          position: relative; 
          overflow: hidden; 
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease, box-shadow 0.35s ease; 
        }
        .ad-card::after {
          content: ''; 
          position: absolute; 
          top: 0; 
          left: -110%; 
          width: 40%; 
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(200,16,46,0.16), transparent);
          transition: left 0.6s ease;
        }
        .ad-card:hover::after { left: 130%; }
        .ad-card:hover { 
          transform: translateY(-4px); 
          border-color: rgba(200,16,46,0.5); 
          box-shadow: 0 14px 40px -14px rgba(200,16,46,0.35); 
        }

        .rank-bar { 
          height: 2px; 
          width: 0%; 
          background: currentColor; 
          transition: width 0.4s cubic-bezier(0.16,1,0.3,1); 
        }
        .ad-card:hover .rank-bar { width: 100%; }

        .bullet-row { 
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, background 0.3s ease; 
        }
        .bullet-row:hover { 
          transform: translateX(6px); 
          border-color: rgba(200,16,46,0.4); 
          background: rgba(0,0,0,0.35); 
        }
        .bullet-row .bullet-icon { 
          transition: transform 0.3s ease, color 0.3s ease; 
        }
        .bullet-row:hover .bullet-icon { transform: scale(1.15); }

        .magnetic { 
          position: relative; 
        }
        .magnetic::before {
          content: ''; 
          position: absolute; 
          left: 50%; 
          bottom: 6px; 
          width: 0%; 
          height: 2px;
          background: currentColor; 
          transform: translateX(-50%); 
          transition: width 0.35s ease;
        }
        .magnetic:hover::before { width: 60%; }

        .profile-card {
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease;
        }
        .profile-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(200,16,46,0.6);
        }

        .form-input {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .form-input:focus {
          border-color: #C8102E;
          box-shadow: 0 0 0 3px rgba(200,16,46,0.15);
          outline: none;
        }

        .cursor-blink { 
          display: inline-block; 
          width: 2px; 
        }

        @keyframes pulse-dot { 
          0%,100% { opacity: 1; transform: scale(1); } 
          50% { opacity: 0.5; transform: scale(0.8); } 
        }
        .publish-dot { animation: pulse-dot 1.5s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}</style>

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-14 pt-28 md:pt-32 pb-28">

        {/* ===== EYEBROW ===== */}
        <div className="reveal flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted">Recruitment</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-white/10 rounded-full px-3 py-1">Bhopal</span>
        </div>

        {/* ===== HERO ===== */}
        <section className="reveal mb-6">
          <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            {/* Hero Header */}
            <div className="px-5 md:px-7 pt-6 md:pt-8 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="text-brand font-bold">{typed}</span>
                <span className="cursor-blink" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-paper uppercase tracking-tight leading-[1.05] mb-3">
                Hire <span className="text-brand">Job-Ready</span> Freshers<br className="hidden md:block" /> Through IADE
              </h1>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl">
                Connect with skilled, trained, and interview-ready digital marketing freshers through IADE's placement assistance.
              </p>
            </div>

            {/* Hero Content */}
            <div className="px-5 md:px-7 pb-6 md:pb-8 pt-4">
              <div className="flex flex-wrap items-center gap-4 p-4 bg-brand/5 border border-brand/20 rounded-lg mb-6">
                <div className="flex-1 min-w-[200px]">
                  <p className="text-xs text-muted font-medium uppercase tracking-wide">
                    100+ hours of hands-on training, live projects, and industry-recognized certification — making our freshers the best talent for your business.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#hire-form" className="magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brandDark text-paper font-bold rounded-lg transition-colors text-sm">
                    <Users className="w-4 h-4" /> Hire Now
                  </a>
                  <a href="tel:+918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                </div>
              </div>
              <h2 className="text-xl font-bold text-paper uppercase tracking-wide mb-1">
                Hire Freshers Through IADE
              </h2>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section id="hire-stats" className="reveal mb-24 mt-10">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Impact
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {METRICS.map((m, i) => (
              <div key={i} className="ad-card bg-surface border border-white/5 rounded-xl p-5 text-center text-brand">
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center text-brand mx-auto mb-3">
                  <m.icon className="w-4 h-4" />
                </div>
                <p className="text-2xl md:text-3xl font-black text-paper tabular-nums">
                  {m.noCount ? m.value : `${m.value}${m.suffix}`}
                </p>
                <p className="text-[10px] text-muted uppercase tracking-wider mt-1 font-bold">{m.label}</p>
                <div className="rank-bar mt-3 mx-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY HIRE ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <Award className="w-3.5 h-3.5" /> Why Hire
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Why Hire Through <span className="text-brand">IADE</span>
          </h2>
          <p className="text-muted text-sm mb-8">Skilled, trained, and ready to contribute from day one</p>
          <div className="grid md:grid-cols-2 gap-4">
            {WHY_HIRE.map((item, i) => (
              <div key={i} className="ad-card bg-surface border border-white/5 rounded-xl p-6 text-brand">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-paper text-sm uppercase tracking-wide">{item.title}</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed ml-13">{item.desc}</p>
                <div className="rank-bar mt-4" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== JOB PROFILES ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <Briefcase className="w-3.5 h-3.5" /> Profiles
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-2">
            Job Profiles For Which <span className="text-brand">You Can Hire</span>
          </h2>
          <p className="text-muted text-sm mb-8">Skilled freshers ready for these roles</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {JOB_PROFILES.map((job, i) => (
              <div 
                key={i} 
                className={`profile-card bg-surface border border-white/5 rounded-xl p-5 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-50`} />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-3">
                    <job.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-paper text-sm uppercase tracking-wide mb-2">{job.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{job.skills}</p>
                  <div className="mt-3 flex items-center gap-1 text-[10px] text-brand font-mono uppercase tracking-wider">
                    <span>Hire Now</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== HIRE FORM ===== */}
        <section id="hire-form" className="reveal mb-24">
          <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            <div className="px-5 md:px-7 pt-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest mb-2">
                <MessageCircle className="w-3.5 h-3.5" /> Let us Help You in Hiring
              </div>
              <h2 className="text-xl md:text-2xl font-black text-paper uppercase tracking-tight">
                Our placement team will contact you <span className="text-brand">within 24 hours</span>
              </h2>
            </div>

            <div className="px-5 md:px-7 py-6">
              <form onSubmit={handleSubmit} className="max-w-2xl">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-muted mb-1.5">
                      <User className="w-3 h-3 inline mr-1" /> Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input w-full bg-ink border border-white/10 rounded-lg px-4 py-2.5 text-paper text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-muted mb-1.5">
                      <Mail className="w-3 h-3 inline mr-1" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input w-full bg-ink border border-white/10 rounded-lg px-4 py-2.5 text-paper text-sm"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-muted mb-1.5">
                      <Phone className="w-3 h-3 inline mr-1" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input w-full bg-ink border border-white/10 rounded-lg px-4 py-2.5 text-paper text-sm"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-muted mb-1.5">
                      <Building2 className="w-3 h-3 inline mr-1" /> Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input w-full bg-ink border border-white/10 rounded-lg px-4 py-2.5 text-paper text-sm"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-muted mb-1.5">
                    <Search className="w-3 h-3 inline mr-1" /> Whom do you want to Recruit?
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="form-input w-full bg-ink border border-white/10 rounded-lg px-4 py-2.5 text-paper text-sm appearance-none"
                    required
                  >
                    <option value="">Select a role...</option>
                    {ROLES.map((role, i) => (
                      <option key={i} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brandDark text-paper font-black rounded-xl uppercase tracking-widest text-sm transition-colors"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" /> Submitted!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit
                    </>
                  )}
                </button>

                {formSubmitted && (
                  <p className="mt-3 text-xs text-green-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    We'll contact you within 24 hours. Thank you!
                  </p>
                )}
              </form>

              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-6 text-xs text-muted">
                <a href="tel:+918319578939" className="hover:text-brand transition-colors flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> +91 831 957 8939
                </a>
                <a href="mailto:iadeeducations@gmail.com" className="hover:text-brand transition-colors flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" /> iadeeducations@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY TRUST ===== */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
            <Star className="w-3.5 h-3.5" /> Trusted
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-paper uppercase tracking-tight mb-8">
            Why Companies Trust <span className="text-brand">IADE for Hiring</span>
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

        {/* ===== FINAL CTA ===== */}
        <section className="reveal relative overflow-hidden rounded-2xl border border-brand/30 bg-surface p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted mb-4">
              <Users className="w-3.5 h-3.5 text-brand" /> Hire Now
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-paper uppercase tracking-tight mb-3">
              Find Your Next <span className="text-brand">Digital Marketing Star</span>
            </h2>
            <p className="text-muted text-sm max-w-md mb-6">
              Connect with trained, interview-ready freshers through IADE's placement assistance. Zero hiring fees.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#hire-form" className="magnetic inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brandDark text-paper font-black rounded-xl uppercase tracking-widest text-sm transition-colors">
                <Users className="w-4 h-4" /> Hire Now <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+918319578939" className="magnetic inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-paper font-black rounded-xl uppercase tracking-widest text-sm hover:border-brand/50 transition-colors">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Hire;