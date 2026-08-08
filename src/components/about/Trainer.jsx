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
  BarChart3,
  BookOpen,
  Video,
  Rocket,
  Trophy,
  Building2,
  BookMarked,
  Globe,
  Laptop,
  Calendar,
  UserPlus
} from 'lucide-react';

// Trainer Data
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
    color: "brand",
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
    color: "brand",
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
    color: "brand",
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
    color: "brand",
    expertise: ["WordPress", "React", "Full Stack Development"],
    quote: "Code is poetry. I help my students write beautiful, functional code.",
    social: { linkedin: "#", github: "#" }
  }
];

// Stats
const STATS = [
  { icon: Users, value: "6+", label: "Expert Trainers" },
  { icon: Award, value: "15+", label: "Certifications" },
  { icon: Clock, value: "4+", label: "Avg Experience" },
  { icon: Star, value: "98%", label: "Student Satisfaction" }
];

// Course Categories
const COURSE_CATEGORIES = [
  { icon: BarChart3, name: "Digital Marketing", color: "brand", desc: "SEO, Social Media, Content" },
  { icon: TrendingUp, name: "SEO & Analytics", color: "brand", desc: "GEO, AEO, Data Analysis" },
  { icon: Code, name: "Web Development", color: "brand", desc: "Full Stack, WordPress" },
  { icon: Palette, name: "Graphic Design", color: "brand", desc: "Photoshop, Illustrator" },
  { icon: Video, name: "Video Editing", color: "brand", desc: "Premiere Pro, After Effects" },
  { icon: Target, name: "Paid Ads", color: "brand", desc: "Google Ads, Social Ads" }
];

// Achievements
const ACHIEVEMENTS = [
  { icon: Trophy, value: "500+", label: "Students Trained" },
  { icon: Building2, value: "50+", label: "Partner Companies" },
  { icon: Users, value: "100%", label: "Placement Support" },
  { icon: BookMarked, value: "20+", label: "Live Projects" }
];

// Testimonials
const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Digital Marketing Alumnus",
    quote: "IADE transformed my career. The practical training and expert mentors made all the difference.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Priya Patel",
    role: "Graphic Design Graduate",
    quote: "The hands-on projects and industry exposure at IADE prepared me for real-world challenges.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Amit Kumar",
    role: "Full Stack Developer",
    quote: "From zero to job-ready in 6 months. The mentorship and curriculum at IADE is unmatched.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Sneha Reddy",
    role: "SEO Specialist",
    quote: "The SEO training at IADE gave me practical skills that helped me land my dream job.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
  }
];

// Why Choose Us
const WHY_CHOOSE_US = [
  { icon: Rocket, title: "Industry Experts", desc: "Learn from professionals with real-world experience" },
  { icon: Target, title: "Practical Training", desc: "Hands-on projects and live client work" },
  { icon: Shield, title: "100% Placement Support", desc: "Career guidance and job assistance" },
  { icon: Award, title: "Certified Courses", desc: "Industry-recognized certifications" }
];

// What We Offer
const WHAT_WE_OFFER = [
  { icon: Laptop, title: "Live Projects", desc: "Work on real client campaigns" },
  { icon: Users, title: "Expert Mentors", desc: "1-on-1 guidance from industry experts" },
  { icon: Calendar, title: "Flexible Schedule", desc: "Weekend and evening batches available" },
  { icon: Globe, title: "Online & Offline", desc: "Learn from anywhere" }
];

const expertiseIcons = {
  "SEO Strategy": TrendingUp,
  "Content Marketing": Layers,
  "Analytics": BarChart3,
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
  const observerRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index)) setActiveIndex(index);
            entry.target.classList.add('is-visible');
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('stagger-visible');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

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
      }
    };
    return colors[color] || colors.brand;
  };

  return (
    <main className="bg-ink text-paper selection:bg-brand selection:text-paper font-body overflow-x-hidden">
      
      <style>{`
        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(5deg) scale(1.05); }
          66% { transform: translateY(10px) rotate(-5deg) scale(0.95); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-80px) rotate(-3deg); }
          to { opacity: 1; transform: translateX(0) rotate(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(80px) rotate(3deg); }
          to { opacity: 1; transform: translateX(0) rotate(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.1); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-1px, -1px); }
          80% { transform: translate(1px, 2px); }
          100% { transform: translate(0); }
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .section-reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.9s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .section-reveal.is-visible {
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

        .trainer-image-wrap {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.8s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .is-visible .trainer-image-wrap {
          opacity: 1;
          transform: scale(1);
        }

        .trainer-info-wrap {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s cubic-bezier(0.2, 0.9, 0.3, 1);
          transition-delay: 0.3s;
        }
        .is-visible .trainer-info-wrap {
          opacity: 1;
          transform: translateX(0);
        }

        .card-scale {
          opacity: 0;
          transform: scale(0.8) rotate(-3deg);
          transition: all 0.6s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .is-visible .card-scale {
          opacity: 1;
          transform: scale(1) rotate(0);
        }
        .card-scale:nth-child(1) { transition-delay: 0s; }
        .card-scale:nth-child(2) { transition-delay: 0.1s; }
        .card-scale:nth-child(3) { transition-delay: 0.2s; }
        .card-scale:nth-child(4) { transition-delay: 0.3s; }

        .card-flip {
          opacity: 0;
          transform: perspective(800px) rotateY(30deg) scale(0.9);
          transition: all 0.7s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .is-visible .card-flip {
          opacity: 1;
          transform: perspective(800px) rotateY(0) scale(1);
        }
        .card-flip:nth-child(1) { transition-delay: 0s; }
        .card-flip:nth-child(2) { transition-delay: 0.1s; }
        .card-flip:nth-child(3) { transition-delay: 0.2s; }
        .card-flip:nth-child(4) { transition-delay: 0.3s; }
        .card-flip:nth-child(5) { transition-delay: 0.4s; }
        .card-flip:nth-child(6) { transition-delay: 0.5s; }

        .card-slide-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .is-visible .card-slide-up {
          opacity: 1;
          transform: translateY(0);
        }
        .card-slide-up:nth-child(1) { transition-delay: 0s; }
        .card-slide-up:nth-child(2) { transition-delay: 0.15s; }
        .card-slide-up:nth-child(3) { transition-delay: 0.3s; }
        .card-slide-up:nth-child(4) { transition-delay: 0.45s; }

        .section-indicator .dot {
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .section-indicator .dot:hover {
          transform: scale(1.4);
        }
        .section-indicator .dot.active {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .scroll-top-btn {
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .scroll-top-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .parallax-shape {
          transition: transform 0.1s ease-out;
        }

        .marquee-track {
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .trainer-image-wrap,
          .trainer-info-wrap {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="parallax-shape absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-brand/10 animate-float"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }} />
          <div className="parallax-shape absolute bottom-[-150px] left-[-80px] w-[400px] h-[400px] rounded-full bg-brand/5 animate-float"
            style={{ animationDelay: '2s', transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }} />
          <div className="parallax-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/5 blur-3xl animate-pulse-glow"
            style={{ transform: `translate(${mousePosition.x * 0.2 - 300}px, ${mousePosition.y * 0.2 - 300}px)` }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6 animate-[fadeInUp_0.6s_ease-out]">
            <Sparkles className="w-3.5 h-3.5 text-brand animate-[spinSlow_4s_linear_infinite]" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">Meet Our Expert Team</span>
          </div>

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

          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s]">
            <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brandDark text-paper font-bold uppercase text-xs tracking-widest rounded-xl transition-all shadow-lg shadow-brand/20 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,16,46,0.4)]">
              <span>Meet Our Team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button onClick={() => scrollToSection(1)} className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface/50 backdrop-blur-sm border border-white/10 text-paper font-bold uppercase text-xs tracking-widest rounded-xl transition-all hover:bg-white/10 hover:scale-105">
              <span>View Trainers</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>

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

      {/* STATS */}
      <section ref={(el) => (sectionRefs.current[0] = el)} data-index={0} className="section-reveal py-16 px-6 sm:px-10 border-y border-white/5 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card-scale group relative bg-surface/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 text-center transition-all duration-500 hover:border-brand/40 hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-full bg-brand/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <p className="text-3xl sm:text-4xl font-display font-black text-paper group-hover:text-brand transition-colors duration-300">{stat.value}</p>
                    <p className="text-xs sm:text-sm font-mono text-muted uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      {TRAINERS.map((trainer, index) => {
        const colors = getColorClasses(trainer.color);
        const sectionIndex = index + 1;
        
        return (
          <section key={trainer.id} ref={(el) => (sectionRefs.current[sectionIndex] = el)} data-index={sectionIndex} className="section-reveal min-h-screen flex items-center py-20 sm:py-28 px-6 sm:px-10 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute top-[-200px] ${index % 2 === 0 ? 'right-[-150px]' : 'left-[-150px]'} w-[500px] h-[500px] rounded-full ${colors.light} animate-float`}
                style={{ animationDuration: `${12 + index * 2}s` }} />
              <div className={`absolute bottom-[-100px] ${index % 2 === 0 ? 'left-[-80px]' : 'right-[-80px]'} w-[300px] h-[300px] rounded-full ${colors.light} animate-float`}
                style={{ animationDuration: `${14 + index * 2}s`, animationDelay: '3s' }} />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full ${colors.light} blur-3xl opacity-30 animate-pulse-glow`} />
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${colors.bg} animate-shimmer`} />
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${colors.bg} animate-shimmer`} style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:direction-rtl'}`}>
                <div className="trainer-image-wrap relative group">
                  <div className={`absolute top-4 left-4 z-10 ${colors.badge} text-white w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-lg shadow-xl border-2 border-paper`}>
                    {String(trainer.id).padStart(2, '0')}
                    <span className="absolute inset-0 rounded-full border-2 border-brand animate-[ripple_2s_ease-out_infinite]" />
                  </div>

                  <div className={`relative rounded-2xl overflow-hidden border-2 border-white/10 ${colors.hover} transition-all duration-500 shadow-2xl ${colors.glow}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent z-10" />
                    <img src={trainer.image} alt={trainer.name} className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className={`absolute bottom-6 right-6 z-10 px-4 py-2 rounded-full bg-paper/90 backdrop-blur-sm ${colors.text} font-mono text-xs font-bold uppercase tracking-wider shadow-lg border border-white/20 animate-[floatIcon_3s_ease-in-out_infinite]`}>
                      {trainer.specialty}
                    </div>

                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent flex items-end justify-center pb-10">
                      <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {trainer.social.linkedin && (
                          <a href={trainer.social.linkedin} className="w-11 h-11 rounded-full bg-paper/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-paper hover:bg-brand hover:border-brand transition-all duration-300 hover:scale-110 hover:rotate-6">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {trainer.social.instagram && (
                          <a href={trainer.social.instagram} className="w-11 h-11 rounded-full bg-paper/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-paper hover:bg-brand hover:border-brand transition-all duration-300 hover:scale-110 hover:rotate-6">
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                        {trainer.social.twitter && (
                          <a href={trainer.social.twitter} className="w-11 h-11 rounded-full bg-paper/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-paper hover:bg-brand hover:border-brand transition-all duration-300 hover:scale-110 hover:rotate-6">
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        {trainer.social.facebook && (
                          <a href={trainer.social.facebook} className="w-11 h-11 rounded-full bg-paper/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-paper hover:bg-brand hover:border-brand transition-all duration-300 hover:scale-110 hover:rotate-6">
                            <Facebook className="w-4 h-4" />
                          </a>
                        )}
                        {trainer.social.github && (
                          <a href={trainer.social.github} className="w-11 h-11 rounded-full bg-paper/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-paper hover:bg-brand hover:border-brand transition-all duration-300 hover:scale-110 hover:rotate-6">
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="trainer-info-wrap space-y-5">
                  <div className="stagger-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper/5 border border-white/10">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.text} animate-pulse`} />
                    <span className={`text-xs font-mono uppercase tracking-wider ${colors.text} font-semibold`}>{trainer.specialty}</span>
                  </div>

                  <h2 className="stagger-item text-3xl sm:text-4xl lg:text-5xl font-display font-black text-paper uppercase tracking-tight leading-[1.1]">{trainer.name}</h2>
                  <p className={`stagger-item text-lg sm:text-xl font-semibold ${colors.text}`}>{trainer.role}</p>

                  <div className="stagger-item flex items-start gap-3 p-4 rounded-xl bg-surface/30 border border-white/5">
                    <Quote className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5 opacity-50`} />
                    <p className="text-sm text-muted italic leading-relaxed">"{trainer.quote}"</p>
                  </div>

                  <div className="stagger-item p-4 sm:p-5 rounded-xl bg-surface/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <GraduationCap className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`} />
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-muted">Qualification</span>
                        <p className="text-sm text-paper/90 leading-relaxed">{trainer.qualification}</p>
                      </div>
                    </div>
                  </div>

                  <div className="stagger-item flex flex-wrap gap-2">
                    {trainer.expertise.map((skill, i) => {
                      const Icon = expertiseIcons[skill] || Zap;
                      return (
                        <span key={i} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border text-xs font-medium ${colors.text}`}>
                          <Icon className="w-3 h-3" />
                          {skill}
                        </span>
                      );
                    })}
                  </div>

                  <div className="stagger-item flex flex-wrap items-center gap-4 pt-2">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${colors.bg} ${colors.border} border`}>
                      <Briefcase className={`w-4 h-4 ${colors.text}`} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">{trainer.experience} Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* COURSES */}
      <section ref={(el) => (sectionRefs.current[TRAINERS.length + 1] = el)} data-index={TRAINERS.length + 1} className="section-reveal py-20 px-6 sm:px-10 border-y border-white/5 bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-4">
              <BookOpen className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">Our Courses</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-paper uppercase tracking-tight">
              What We <span className="text-brand">Teach</span>
            </h2>
            <p className="mt-3 text-muted max-w-2xl mx-auto">Industry-aligned courses designed to make you job-ready</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSE_CATEGORIES.map((course, index) => {
              const colors = getColorClasses(course.color);
              const Icon = course.icon;
              return (
                <div key={index} className="card-flip group relative bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center transition-all duration-500 hover:border-brand/40 hover:-translate-y-3 hover:shadow-xl">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-full ${colors.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-paper uppercase tracking-tight group-hover:text-brand transition-colors">{course.name}</h3>
                    <p className="text-sm text-muted mt-2">{course.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section ref={(el) => (sectionRefs.current[TRAINERS.length + 2] = el)} data-index={TRAINERS.length + 2} className="section-reveal py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-4">
              <Trophy className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">Our Achievements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-paper uppercase tracking-tight">
              Making <span className="text-brand">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {ACHIEVEMENTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card-scale group relative bg-surface/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 text-center transition-all duration-500 hover:border-brand/40 hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 text-brand mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-2xl sm:text-3xl font-display font-black text-paper group-hover:text-brand transition-colors">{item.value}</p>
                    <p className="text-xs font-mono text-muted uppercase tracking-wider mt-1">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section ref={(el) => (sectionRefs.current[TRAINERS.length + 3] = el)} data-index={TRAINERS.length + 3} className="section-reveal py-20 px-6 sm:px-10 border-y border-white/5 bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-4">
              <Shield className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-paper uppercase tracking-tight">
              Why <span className="text-brand">IADE</span> Stands Out
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card-slide-up group relative bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:border-brand/40 hover:-translate-y-3 hover:shadow-xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-full bg-brand/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-paper group-hover:text-brand transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted mt-2">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section ref={(el) => (sectionRefs.current[TRAINERS.length + 4] = el)} data-index={TRAINERS.length + 4} className="section-reveal py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-4">
              <Rocket className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-paper uppercase tracking-tight">
              Everything You <span className="text-brand">Need</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_WE_OFFER.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card-flip group relative bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center transition-all duration-500 hover:border-brand/40 hover:-translate-y-3 hover:shadow-xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-full bg-brand/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-paper group-hover:text-brand transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted mt-2">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={(el) => (sectionRefs.current[TRAINERS.length + 5] = el)} data-index={TRAINERS.length + 5} className="section-reveal py-20 px-6 sm:px-10 border-y border-white/5 bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-4">
              <Star className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">Student Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-paper uppercase tracking-tight">
              What Our <span className="text-brand">Students Say</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="card-slide-up group relative bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:border-brand/40 hover:-translate-y-2 hover:shadow-xl">
                <Quote className="w-8 h-8 text-brand/30 mb-4" />
                <p className="text-sm text-paper/90 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand/30" />
                  <div>
                    <h4 className="font-display font-bold text-paper text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-6 border-y border-white/5 bg-surface/30 overflow-hidden">
        <div className="marquee-track flex w-max">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {TRAINERS.map((trainer) => (
                <div key={trainer.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand/30">
                    <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-paper">{trainer.name}</p>
                    <p className="text-xs text-muted">{trainer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand/20 rounded-full blur-[120px] animate-pulse-glow" />
        </div>

        <div className="relative z-10 bg-gradient-to-br from-brand via-brandDark to-ink rounded-3xl p-8 sm:p-12 text-center border border-white/10 shadow-2xl shadow-brand/10 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }} />
            <div className="absolute -top-1/2 -right-1/2 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-[spinSlow_20s_linear_infinite]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <Zap className="w-3.5 h-3.5 text-[#FF7A70] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/80">Limited Seats Available</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-paper uppercase tracking-tight">
              Ready to Learn from <span className="text-[#FF7A70]">Industry Experts</span>?
            </h2>
            <p className="mt-3 text-paper/80 max-w-lg mx-auto text-sm sm:text-base">
              Join IADE and get mentored by professionals who have real-world experience in their fields.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-paper text-ink font-bold uppercase text-xs tracking-widest rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-paper font-bold uppercase text-xs tracking-widest rounded-xl transition-all hover:bg-white/20 hover:scale-105">
                <Phone className="w-4 h-4" />
                <span>Book Free Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brand hover:bg-brandDark text-paper shadow-lg shadow-brand/30 transition-all duration-300 hover:scale-110 flex items-center justify-center ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* SECTION INDICATOR */}
      <div className="section-indicator fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2.5">
        {[...Array(TRAINERS.length + 6)].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`dot w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-brand scale-125 shadow-[0_0_20px_rgba(200,16,46,0.5)] active' 
                : 'bg-surface/50 hover:bg-brand/50'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

    </main>
  );
};

export default Trainer;