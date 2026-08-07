import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Star, 
  Clock, 
  CheckCircle2,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Facebook,
  ArrowRight,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Quote,
  ArrowUp,
  ChevronDown,
  Play,
  Zap,
  TrendingUp,
  Shield,
  Target,
  Layers,
  Code,
  Palette,
  BarChart3
} from 'lucide-react';

// Trainer Data with expanded info
const TRAINERS = [
  {
    id: 1,
    name: "Pragati Warkade",
    role: "Academic Counsellor",
    specialty: "Career Mentor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    qualification: "MSC- Botany (RDVV Jabalpur) / PGDCA (MCU)",
    experience: "3+ Years",
    color: "brand",
    expertise: ["Career Guidance", "Academic Planning", "Student Mentoring"],
    quote: "Every student has unique potential. My goal is to help them discover and nurture it.",
    social: { linkedin: "#", instagram: "#" }
  },
  {
    id: 2,
    name: "Anya Sen",
    role: "SEO Specialist",
    specialty: "SEO Mentor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    qualification: "MBA in DM, Google Digital Garage Certified, Advanced SEO Certified",
    experience: "5+ Years",
    color: "teal",
    expertise: ["SEO Strategy", "Content Marketing", "Analytics"],
    quote: "Search engines evolve, but the core principle remains: create value for users.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: 3,
    name: "Hariom Hude",
    role: "PPC Specialist",
    specialty: "Ads Mentor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    qualification: "MBA in Marketing and Retail Management, Certified in PPC",
    experience: "4+ Years",
    color: "ink",
    expertise: ["Google Ads", "Campaign Optimization", "ROI Analysis"],
    quote: "A well-optimized ad campaign is like a precision tool — it delivers exactly what you need.",
    social: { linkedin: "#", facebook: "#" }
  },
  {
    id: 4,
    name: "Khushal Rajput",
    role: "Photoshop Specialist",
    specialty: "Graphic Designer Mentor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    qualification: "Graphic Certified Trainer, MBA",
    experience: "4+ Years",
    color: "brand",
    expertise: ["Photoshop", "Visual Design", "Brand Identity"],
    quote: "Design is not just what it looks like — it's how it works and makes people feel.",
    social: { linkedin: "#", instagram: "#" }
  },
  {
    id: 5,
    name: "Chetna Malviya",
    role: "Illustrator Specialist",
    specialty: "Graphic Designer Mentor",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    qualification: "Diploma in Graphic Designing Course, Mumbai",
    experience: "8+ Years",
    color: "teal",
    expertise: ["Illustration", "Vector Art", "Creative Direction"],
    quote: "Every illustration tells a story. I teach my students to tell stories that connect.",
    social: { linkedin: "#", instagram: "#" }
  },
  {
    id: 6,
    name: "Ankit Prajapati",
    role: "WordPress & Full Stack Developer",
    specialty: "WP & Full Stack Developer Mentor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    qualification: "B-Tech, WordPress Certified, Full Stack Certified",
    experience: "2+ Years",
    color: "ink",
    expertise: ["WordPress", "React", "Full Stack Development"],
    quote: "Code is poetry. I help my students write beautiful, functional code.",
    social: { linkedin: "#", github: "#" }
  }
];

// Stats data
const STATS = [
  { icon: Users, value: "6+", label: "Expert Trainers" },
  { icon: Award, value: "15+", label: "Certifications" },
  { icon: Clock, value: "4+", label: "Avg Experience" },
  { icon: Star, value: "98%", label: "Student Satisfaction" }
];

// Expertise icons mapping
const expertiseIcons = {
  "SEO Strategy": BarChart3,
  "Content Marketing": Layers,
  "Analytics": TrendingUp,
  "Google Ads": Target,
  "Campaign Optimization": Zap,
  "ROI Analysis": Shield,
  "Photoshop": Palette,
  "Visual Design": Layers,
  "Brand Identity": Code,
  "Illustration": Palette,
  "Vector Art": Layers,
  "Creative Direction": Target,
  "WordPress": Code,
  "React": Code,
  "Full Stack Development": Layers,
  "Career Guidance": Target,
  "Academic Planning": Shield,
  "Student Mentoring": Users
};

const Trainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef([]);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const observerRef = useRef(null);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll handler for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index)) setActiveIndex(index);
            entry.target.classList.add('is-visible');
            
            // Add staggered animation to children
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('stagger-visible');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    // Observe stats section
    if (statsRef.current) {
      observerRef.current.observe(statsRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      brand: {
        bg: 'bg-brand/10',
        border: 'border-brand/30',
        text: 'text-brand',
        hover: 'hover:border-brand/50 hover:shadow-brand/20',
        glow: 'shadow-brand/20',
        badge: 'bg-brand',
        gradient: 'from-brand to-brandDark',
        light: 'bg-brand/5',
        ring: 'ring-brand/30'
      },
      teal: {
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/30',
        text: 'text-teal-500',
        hover: 'hover:border-teal-500/50 hover:shadow-teal-500/20',
        glow: 'shadow-teal-500/20',
        badge: 'bg-teal-500',
        gradient: 'from-teal-500 to-teal-600',
        light: 'bg-teal-500/5',
        ring: 'ring-teal-500/30'
      },
      ink: {
        bg: 'bg-ink/10',
        border: 'border-ink/30',
        text: 'text-ink',
        hover: 'hover:border-ink/50 hover:shadow-ink/20',
        glow: 'shadow-ink/20',
        badge: 'bg-ink',
        gradient: 'from-ink to-ink-soft',
        light: 'bg-ink/5',
        ring: 'ring-ink/30'
      }
    };
    return colors[color] || colors.brand;
  };

  return (
    <main className="bg-ink text-paper selection:bg-brand selection:text-paper font-body overflow-x-hidden">
      
      {/* KEYFRAMES FOR ALL ANIMATIONS */}
      <style>{`
        /* Floating Shapes */
        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(5deg) scale(1.05); }
          66% { transform: translateY(10px) rotate(-5deg) scale(0.95); }
        }
        
        /* Pulse Glow */
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        
        /* Shimmer */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        /* Slide In From Left */
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-80px) rotate(-3deg); }
          to { opacity: 1; transform: translateX(0) rotate(0); }
        }
        
        /* Slide In From Right */
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(80px) rotate(3deg); }
          to { opacity: 1; transform: translateX(0) rotate(0); }
        }
        
        /* Scale In With Bounce */
        @keyframes scaleInBounce {
          0% { opacity: 0; transform: scale(0.5) rotate(-5deg); }
          60% { opacity: 1; transform: scale(1.05) rotate(1deg); }
          100% { transform: scale(1) rotate(0); }
        }
        
        /* Fade In Up */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Flip In */
        @keyframes flipIn {
          from { opacity: 0; transform: perspective(600px) rotateY(-90deg); }
          to { opacity: 1; transform: perspective(600px) rotateY(0); }
        }
        
        /* Glitch Text */
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-1px, -1px); }
          80% { transform: translate(1px, 2px); }
          100% { transform: translate(0); }
        }
        
        /* Ripple */
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        /* Float Icon */
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.1); }
        }
        
        /* Spin Slow */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Typewriter */
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        /* Blink Cursor */
        @keyframes blinkCursor {
          0%, 100% { border-color: transparent; }
          50% { border-color: #C8102E; }
        }
        
        /* Reveal Animations */
        .trainer-section {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.9s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .trainer-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stagger-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .stagger-item.stagger-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Section specific animations */
        .trainer-section:nth-child(odd) .trainer-image-wrap {
          animation: slideInLeft 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }
        .trainer-section:nth-child(even) .trainer-image-wrap {
          animation: slideInRight 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }
        .trainer-section .trainer-info-wrap {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        .trainer-section.is-visible .trainer-info-wrap {
          opacity: 1;
        }
        
        /* Stats Animation */
        .stats-grid .stat-item {
          opacity: 0;
          transform: scale(0.8) rotate(-5deg);
          transition: all 0.6s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .stats-grid.is-visible .stat-item {
          opacity: 1;
          transform: scale(1) rotate(0);
        }
        .stats-grid.is-visible .stat-item:nth-child(1) { transition-delay: 0s; }
        .stats-grid.is-visible .stat-item:nth-child(2) { transition-delay: 0.15s; }
        .stats-grid.is-visible .stat-item:nth-child(3) { transition-delay: 0.3s; }
        .stats-grid.is-visible .stat-item:nth-child(4) { transition-delay: 0.45s; }
        
        /* Expert Tags Animation */
        .expert-tag {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .stagger-visible .expert-tag {
          opacity: 1;
          transform: scale(1);
        }
        .expert-tag:nth-child(1) { transition-delay: 0.1s; }
        .expert-tag:nth-child(2) { transition-delay: 0.2s; }
        .expert-tag:nth-child(3) { transition-delay: 0.3s; }
        
        /* Section Indicator Dots */
        .section-indicator .dot {
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .section-indicator .dot:hover {
          transform: scale(1.4);
        }
        .section-indicator .dot.active {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        /* Scroll to top button */
        .scroll-top-btn {
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .scroll-top-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        /* Parallax shapes */
        .parallax-shape {
          transition: transform 0.1s ease-out;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .trainer-section:nth-child(odd) .trainer-image-wrap,
          .trainer-section:nth-child(even) .trainer-image-wrap {
            animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
          }
        }
      `}</style>

      {/* HERO SECTION WITH PARALLAX */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%)'
        }}
      >
        {/* Parallax Background Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="parallax-shape absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-brand/10 animate-float"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          />
          <div 
            className="parallax-shape absolute bottom-[-150px] left-[-80px] w-[400px] h-[400px] rounded-full bg-brand/5 animate-float"
            style={{ animationDelay: '2s', transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
          />
          <div 
            className="parallax-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/5 blur-3xl animate-pulse-glow"
            style={{ transform: `translate(${mousePosition.x * 0.2 - 300}px, ${mousePosition.y * 0.2 - 300}px)` }}
          />
          
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6 animate-[fadeInUp_0.6s_ease-out]">
            <Sparkles className="w-3.5 h-3.5 text-brand animate-[spinSlow_4s_linear_infinite]" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
              Meet Our Expert Team
            </span>
          </div>

          {/* Main Heading with Glitch Effect */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-paper uppercase tracking-tight leading-[1.05]">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">Our</span>
            <span className="inline-block text-brand relative mx-2 animate-[fadeInUp_0.8s_ease-out_0.2s]">
              <span className="relative inline-block hover:animate-[glitch_0.3s_ease-in-out]">
                Expert
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-brand/30 rounded-full -z-10" />
              </span>
            </span>
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.4s]">Trainers</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.6s]">
            Real‑world mentors with industry experience, dedicated to transforming 
            careers through practical training and live project guidance.
          </p>

          {/* Animated CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s]">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brandDark text-paper font-bold uppercase text-xs tracking-widest rounded-xl transition-all shadow-lg shadow-brand/20 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,16,46,0.4)]"
            >
              <span>Meet Our Team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => scrollToSection(0)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface/50 backdrop-blur-sm border border-white/10 text-paper font-bold uppercase text-xs tracking-widest rounded-xl transition-all hover:bg-white/10 hover:scale-105"
            >
              <span>View Trainers</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeInUp_1s_ease-out_1s] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex flex-col items-center gap-2 text-muted text-xs font-mono tracking-wider">
              <span>Scroll to explore</span>
              <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-brand animate-[pulseGlow_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section 
        ref={statsRef}
        className="relative py-16 px-6 sm:px-10 border-y border-white/5 bg-surface/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="stats-grid grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="stat-item group relative bg-surface/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 text-center transition-all duration-500 hover:border-brand/40 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-full bg-brand/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <p className="text-3xl sm:text-4xl font-display font-black text-paper group-hover:text-brand transition-colors duration-300">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm font-mono text-muted uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION INDICATOR */}
      <div className="section-indicator fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2.5">
        {TRAINERS.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`dot w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-brand scale-125 shadow-[0_0_20px_rgba(200,16,46,0.5)] active' 
                : 'bg-surface/50 hover:bg-brand/50'
            }`}
            aria-label={`Go to trainer ${index + 1}`}
          />
        ))}
      </div>

      {/* TRAINER SECTIONS */}
      {TRAINERS.map((trainer, index) => {
        const colors = getColorClasses(trainer.color);
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={trainer.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-index={index}
            className="trainer-section min-h-screen flex items-center py-20 sm:py-28 px-6 sm:px-10 relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Floating shapes */}
              <div 
                className={`absolute top-[-200px] ${isEven ? 'right-[-150px]' : 'left-[-150px]'} w-[500px] h-[500px] rounded-full ${colors.light} animate-float`}
                style={{ animationDuration: `${12 + index * 2}s` }}
              />
              <div 
                className={`absolute bottom-[-100px] ${isEven ? 'left-[-80px]' : 'right-[-80px]'} w-[300px] h-[300px] rounded-full ${colors.light} animate-float`}
                style={{ animationDuration: `${14 + index * 2}s`, animationDelay: '3s' }}
              />
              
              {/* Gradient orb */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full ${colors.light} blur-3xl opacity-30 animate-pulse-glow`} />
              
              {/* Shimmer line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${colors.bg} animate-shimmer`} />
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${colors.bg} animate-shimmer`} style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
                
                {/* Image Column */}
                <div className="trainer-image-wrap relative group">
                  {/* Number Badge with Ripple */}
                  <div className={`absolute top-4 left-4 z-10 ${colors.badge} text-white w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-lg shadow-xl border-2 border-paper`}>
                    {String(trainer.id).padStart(2, '0')}
                    <span className="absolute inset-0 rounded-full border-2 border-brand animate-[ripple_2s_ease-out_infinite]" />
                  </div>

                  {/* Main Image Container */}
                  <div className={`relative rounded-2xl overflow-hidden border-2 border-white/10 ${colors.hover} transition-all duration-500 shadow-2xl ${colors.glow}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent z-10" />
                    
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Role Float with animation */}
                    <div className={`absolute bottom-6 right-6 z-10 px-4 py-2 rounded-full bg-paper/90 backdrop-blur-sm ${colors.text} font-mono text-xs font-bold uppercase tracking-wider shadow-lg border border-white/20 animate-[floatIcon_3s_ease-in-out_infinite]`}>
                      {trainer.specialty}
                    </div>

                    {/* Hover Social Overlay */}
                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent flex items-end justify-center pb-10">
                      <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {Object.entries(trainer.social).map(([platform, url]) => {
                          const IconMap = {
                            linkedin: Linkedin,
                            instagram: Instagram,
                            twitter: Twitter,
                            facebook: Facebook,
                            github: Github
                          };
                          const Icon = IconMap[platform];
                          return Icon ? (
                            <a 
                              key={platform}
                              href={url} 
                              className="w-11 h-11 rounded-full bg-paper/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-paper hover:bg-brand hover:border-brand transition-all duration-300 hover:scale-110 hover:rotate-6"
                            >
                              <Icon className="w-4 h-4" />
                            </a>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Column */}
                <div className="trainer-info-wrap space-y-5">
                  {/* Tag */}
                  <div className="stagger-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper/5 border border-white/10">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.text} animate-pulse`} />
                    <span className={`text-xs font-mono uppercase tracking-wider ${colors.text} font-semibold`}>
                      {trainer.specialty}
                    </span>
                  </div>

                  {/* Name with typewriter effect */}
                  <h2 className="stagger-item text-3xl sm:text-4xl lg:text-5xl font-display font-black text-paper uppercase tracking-tight leading-[1.1]">
                    {trainer.name}
                  </h2>

                  {/* Role */}
                  <p className={`stagger-item text-lg sm:text-xl font-semibold ${colors.text}`}>
                    {trainer.role}
                  </p>

                  {/* Quote */}
                  <div className="stagger-item flex items-start gap-3 p-4 rounded-xl bg-surface/30 border border-white/5">
                    <Quote className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5 opacity-50`} />
                    <p className="text-sm text-muted italic leading-relaxed">
                      "{trainer.quote}"
                    </p>
                  </div>

                  {/* Qualification Box */}
                  <div className="stagger-item p-4 sm:p-5 rounded-xl bg-surface/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <GraduationCap className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`} />
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-muted">Qualification</span>
                        <p className="text-sm text-paper/90 leading-relaxed">{trainer.qualification}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="stagger-item flex flex-wrap gap-2">
                    {trainer.expertise.map((skill, i) => {
                      const Icon = expertiseIcons[skill] || Zap;
                      return (
                        <span 
                          key={i}
                          className={`expert-tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border text-xs font-medium ${colors.text}`}
                        >
                          <Icon className="w-3 h-3" />
                          {skill}
                        </span>
                      );
                    })}
                  </div>

                  {/* Meta */}
                  <div className="stagger-item flex flex-wrap items-center gap-4 pt-2">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${colors.bg} ${colors.border} border`}>
                      <Briefcase className={`w-4 h-4 ${colors.text}`} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">{trainer.experience} Experience</span>
                    </div>
                    
                    <div className="flex gap-2">
                      {Object.entries(trainer.social).map(([platform, url]) => {
                        const IconMap = {
                          linkedin: Linkedin,
                          instagram: Instagram,
                          twitter: Twitter,
                          facebook: Facebook,
                          github: Github
                        };
                        const Icon = IconMap[platform];
                        return Icon ? (
                          <a 
                            key={platform}
                            href={url} 
                            className={`w-9 h-9 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} hover:bg-brand hover:text-paper hover:border-brand transition-all duration-300 hover:scale-110`}
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* BOTTOM CTA SECTION */}
      <section className="relative px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand/20 rounded-full blur-[120px] animate-pulse-glow" />
        </div>

        <div className="relative z-10 bg-gradient-to-br from-brand via-brandDark to-ink rounded-3xl p-8 sm:p-12 text-center border border-white/10 shadow-2xl shadow-brand/10 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }} />
            <div className="absolute -top-1/2 -right-1/2 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-[spinSlow_20s_linear_infinite]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <Zap className="w-3.5 h-3.5 text-brand-200 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/80">
                Limited Seats Available
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-paper uppercase tracking-tight">
              Ready to Learn from <span className="text-brand-200">Industry Experts</span>?
            </h2>
            <p className="mt-3 text-paper/80 max-w-lg mx-auto text-sm sm:text-base">
              Join IADE and get mentored by professionals who have real-world experience 
              in their fields.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-paper text-ink font-bold uppercase text-xs tracking-widest rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-paper font-bold uppercase text-xs tracking-widest rounded-xl transition-all hover:bg-white/20 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Book Free Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brand hover:bg-brandDark text-paper shadow-lg shadow-brand/30 transition-all duration-300 hover:scale-110 flex items-center justify-center ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 bg-surface/30 mt-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-paper font-display font-black text-lg">
                  I
                </div>
                <div>
                  <h4 className="font-display font-bold text-paper">IADE</h4>
                  <span className="text-xs text-muted font-mono tracking-wider">Academy of Digital Education</span>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Bhopal's Leading Digital Marketing &amp; Graphic Design Institute.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-brand hover:border-brand transition-all hover:scale-110">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-brand hover:border-brand transition-all hover:scale-110">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-brand hover:border-brand transition-all hover:scale-110">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-display font-bold text-paper mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-muted hover:text-brand transition-colors hover:translate-x-1 inline-block">Home</Link></li>
                <li><Link to="/about" className="text-muted hover:text-brand transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
                <li><Link to="/courses" className="text-muted hover:text-brand transition-colors hover:translate-x-1 inline-block">All Courses</Link></li>
                <li><Link to="/contact" className="text-muted hover:text-brand transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h5 className="font-display font-bold text-paper mb-4">Our Courses</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/courses/digital-marketing" className="text-muted hover:text-brand transition-colors hover:translate-x-1 inline-block">Digital Marketing</Link></li>
                <li><Link to="/courses/seo" className="text-muted hover:text-brand transition-colors hover:translate-x-1 inline-block">SEO (GEO + AEO)</Link></li>
                <li><Link to="/courses/graphic-designing" className="text-muted hover:text-brand transition-colors hover:translate-x-1 inline-block">Graphic Designing</Link></li>
                <li><Link to="/courses/video-editing" className="text-muted hover:text-brand transition-colors hover:translate-x-1 inline-block">Video Editing</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-display font-bold text-paper mb-4">Get In Touch</h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-muted hover:text-paper transition-colors group">
                  <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>Plot No-52, 201-A, Near City Bank, MP Nagar Zone-1, Bhopal</span>
                </li>
                <li className="flex items-center gap-3 text-muted hover:text-paper transition-colors group">
                  <Mail className="w-4 h-4 text-brand shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:iadeeducations@gmail.com" className="hover:text-brand transition-colors">iadeeducations@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 text-muted hover:text-paper transition-colors group">
                  <Phone className="w-4 h-4 text-brand shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+918319578939" className="hover:text-brand transition-colors">+91 83195 78939</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-muted font-mono tracking-wider">
              &copy; 2026 IADE — Indian Academy of Digital Education, Bhopal. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
};

export default Trainer;