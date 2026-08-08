import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle2, Phone, FileText,
  Award, Users, Briefcase, Zap, Laptop,
  Shield, BookOpen, Quote, BarChart3, Target,
  ChevronDown, TrendingUp, Sparkles, Facebook, Instagram,
  Heart, MessageCircle, Share2, Megaphone, MoreHorizontal
} from 'lucide-react';

const SocialMM = () => {
  // --- Counting stats ---
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, placement: 0, campaigns: 0 });
  const rafRef = useRef(null);

  // --- Engagement bar (decorative, ticks up like stats) ---
  const [engaged, setEngaged] = useState(false);
  const [engagement, setEngagement] = useState({ likes: 0, comments: 0, shares: 0 });

  // --- Accordion (curriculum) ---
  const [openModule, setOpenModule] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.id === 'stats-widget') setIsVisible(true);
            if (entry.target.id === 'hero-post') setEngaged(true);
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
    const targets = { students: 400, placement: 90, campaigns: 40 };
    const duration = 2400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounts({
        students: Math.floor(eased * targets.students),
        placement: Math.floor(eased * targets.placement),
        campaigns: Math.floor(eased * targets.campaigns)
      });
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setCounts(targets);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);

  useEffect(() => {
    if (!engaged) return;
    const targets = { likes: 1284, comments: 96, shares: 214 };
    const duration = 1800;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setEngagement({
        likes: Math.floor(eased * targets.likes),
        comments: Math.floor(eased * targets.comments),
        shares: Math.floor(eased * targets.shares)
      });
      if (p < 1) raf = requestAnimationFrame(tick);
      else setEngagement(targets);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [engaged]);

  const METRICS = [
    { label: "Students Trained", value: counts.students, suffix: "+", icon: Users },
    { label: "Placement Rate", value: counts.placement, suffix: "%", icon: Award },
    { label: "Live Campaigns", value: counts.campaigns, suffix: "+", icon: Megaphone }
  ];

  const HASHTAGS = [
    "#MetaAds", "#FacebookAds", "#InstagramAds", "#SMM", "#LeadGen",
    "#Retargeting", "#AdCopy", "#PixelSetup", "#AudienceTargeting", "#BrandGrowth"
  ];

  const WHY_CHOOSE = [
    { icon: Laptop, title: "Hands-on Live Projects", desc: "Run live Meta Ads campaigns and build a strong portfolio.", metric: "Live" },
    { icon: Target, title: "Live Expert Mentorship", desc: "Learn directly from experienced social media marketing professionals.", metric: "1-on-1" },
    { icon: Shield, title: "Placement Support", desc: "Resume building, interview preparation & internship assistance.", metric: "Career" }
  ];

  const MODULES = [
    { num: "01", title: "Foundations of Social Media Marketing", desc: "Meta ecosystem overview, ad objectives & funnel strategy.", tags: ["Meta Ecosystem", "Funnel"] },
    { num: "02", title: "Meta Ads Account Setup", desc: "Business Manager, Ad Account structure & Pixel integration.", tags: ["Business Manager", "Pixel"] },
    { num: "03", title: "Audience Targeting & Research", desc: "Custom audiences, lookalike audiences & interest targeting.", tags: ["Lookalike", "Custom Audience"] },
    { num: "04", title: "Meta Ads Campaign Types", desc: "Traffic, Lead Generation, Sales & Engagement campaigns.", tags: ["Lead Gen", "Sales"] },
    { num: "05", title: "Creative Strategy & Ad Copywriting", desc: "High-converting creatives, headlines, hooks & A/B testing.", tags: ["Ad Copy", "A/B Test"] },
    { num: "06", title: "Budgeting, Bidding & Scaling", desc: "Cost control, bidding strategies & campaign scaling.", tags: ["Bidding", "Scaling"] },
    { num: "07", title: "Retargeting & Funnel Optimization", desc: "Warm audience targeting, remarketing & conversions.", tags: ["Retargeting", "CRO"] },
    { num: "08", title: "Analytics, Reporting & Optimization", desc: "Insights, KPIs, performance tracking & ROI improvement.", tags: ["KPIs", "ROI"] }
  ];

  const WHO_CAN_JOIN = [
    "School and college students",
    "Working professionals upgrading their skills",
    "Entrepreneurs and business owners",
    "Freelancers and content creators",
    "Anyone who wants to become a Social Media Marketer",
    "Those looking for a Meta Ads course near me"
  ];

  const CAREERS = [
    { icon: Users, title: "Social Media Manager", desc: "Manage and grow brand presence on Facebook, Instagram, and other platforms." },
    { icon: Target, title: "Meta Ads Specialist", desc: "Create and optimize high-performing ad campaigns for businesses and agencies." },
    { icon: BarChart3, title: "Digital Marketing Executive", desc: "Lead digital marketing strategies and drive business growth through social media." }
  ];

  const WHY_LEARN = [
    "High demand for social media professionals",
    "Work in diverse industries — agencies, brands, startups",
    "Build a career in the fastest-growing digital field",
    "Freelance opportunities with global clients",
    "Learn to create high-converting ad campaigns",
    "Join the best Meta Ads institute in Bhopal"
  ];

  const FAQS = [
    { q: "Who can join this course?", a: "Beginners, working professionals, and entrepreneurs. No prior experience required." },
    { q: "Do I get certification?", a: "Yes, you'll receive an industry-recognized certificate after successfully completing the course." },
    { q: "Is placement support available?", a: "Yes, we provide resume building, interview preparation, and placement assistance." },
    { q: "Will I work on live campaigns?", a: "Yes, you'll work on real Meta Ads campaigns and build a strong portfolio." }
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

        .social-icon { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), color 0.3s ease; }
        .social-icon:hover { transform: translateY(-3px) scale(1.1); color: #C8102E; }

        .engage-item { transition: transform 0.25s ease, color 0.25s ease; }
        .engage-item:hover { transform: scale(1.08); color: #C8102E; }

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

        {/* ===== HERO: SPONSORED POST MOCKUP ===== */}
        <section id="hero-post" className="reveal mb-6">
          <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            {/* post header */}
            <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-brand font-black text-xs">IA</div>
                <div>
                  <p className="text-xs font-bold text-paper leading-tight">IADE Academy</p>
                  <p className="text-[10px] text-muted leading-tight">Sponsored</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="w-4 h-4 text-muted social-icon" />
                <Instagram className="w-4 h-4 text-muted social-icon" />
                <MoreHorizontal className="w-4 h-4 text-muted" />
              </div>
            </div>

            {/* post body */}
            <div className="px-5 md:px-7 py-6 md:py-8">
              <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="text-brand font-bold">Facebook</span>•<span className="text-brand font-bold">Instagram</span>•<span>Meta Ads</span>•<span>SMM</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-paper uppercase tracking-tight leading-[1.05] mb-4">
                Social Media Marketing <span className="text-brand">(Meta Ads)</span> Course
              </h1>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-3">
                IADE offers a results-driven Social Media Marketing program designed to help you master
                Meta Ads (Facebook & Instagram Advertising) with real-world campaign experience. As a
                trusted Meta Ads course provider in Bhopal, we focus on practical training that delivers
                measurable growth.
              </p>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                Recognized as the best Meta Ads institute in Bhopal, our course helps students, marketers,
                and entrepreneurs create high-performing ad campaigns that generate leads, sales, and
                brand visibility across digital platforms.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a href="https://wa.me/918319578939" className="magnetic inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brandDark text-paper font-bold rounded-lg transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Reserve Your Seat
                </a>
                <a href="https://theiade.in/pdf.pdf" className="magnetic inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-paper font-bold rounded-lg hover:border-brand/50 transition-colors text-sm">
                  <FileText className="w-4 h-4" /> View Syllabus
                </a>
              </div>

              {/* engagement bar */}
              <div className="flex items-center gap-6 pt-5 border-t border-white/5">
                <div className="engage-item flex items-center gap-1.5 text-muted text-xs font-mono">
                  <Heart className="w-4 h-4" /> {engagement.likes}
                </div>
                <div className="engage-item flex items-center gap-1.5 text-muted text-xs font-mono">
                  <MessageCircle className="w-4 h-4" /> {engagement.comments}
                </div>
                <div className="engage-item flex items-center gap-1.5 text-muted text-xs font-mono">
                  <Share2 className="w-4 h-4" /> {engagement.shares}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HASHTAG MARQUEE (full-bleed) ===== */}
        <div className="reveal relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mb-20 border-y border-white/5 py-3">
          <div className="marquee-track flex gap-3 w-max">
            {[...HASHTAGS, ...HASHTAGS].map((tag, i) => (
              <span key={i} className="text-[11px] font-mono uppercase tracking-wide text-muted border border-white/10 rounded-full px-3 py-1.5 flex-shrink-0">
                {tag}
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
            Why Choose Our <span className="text-brand">SMM Course</span> in Bhopal
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
          <p className="text-muted text-sm mb-8">A job-ready curriculum built for performance marketing success.</p>
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
            Who Can Join This <span className="text-brand">SMM Course</span>
          </h2>
          <p className="text-muted text-sm mb-8">No prior experience needed — if you're eager to learn, this course is for you.</p>
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
          <p className="text-muted text-sm mb-8">After completing our SMM course in Bhopal, you can build a successful career in:</p>
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
            Why Learn <span className="text-brand">Social Media Marketing</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {WHY_LEARN.map((item, i) => (
              <div key={i} className="bullet-row border border-white/5 rounded-lg p-4 flex items-center gap-3">
                <Sparkles className="bullet-icon w-4 h-4 text-brand flex-shrink-0" />
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
              <Zap className="w-3.5 h-3.5 text-brand" /> Enrollment Open
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-paper uppercase tracking-tight mb-3">
              Launch Your <span className="text-brand">Social Media Career</span>
            </h2>
            <p className="text-muted text-sm max-w-md mb-6">
              Join Bhopal's best Meta Ads institute and start running real campaigns for real brands.
            </p>
            <div className="max-w-sm mb-7">
              <div className="flex justify-between text-[10px] font-mono text-muted mb-1.5">
                <span>Seats filling</span><span>82%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[82%] bg-brand rounded-full" />
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

export default SocialMM;