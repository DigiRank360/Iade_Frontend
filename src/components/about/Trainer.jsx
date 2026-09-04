import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Star,
  Clock,
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
  Quote,
  ArrowUp,
  ChevronDown,
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
} from 'lucide-react';

import EnrollCTA from '../EnrollCTA';
import kusal from '../../assets/trainer/kusal.png';
import chetna from '../../assets/trainer/chetna.png';
import pratiksha from '../../assets/trainer/pratiksha.png';
import hari from '../../assets/trainer/hari.png';
import pragati from '../../assets/trainer/pragati.png';
import sahil from '../../assets/trainer/Sahil.jpeg';

/* =========================================================
   TRAINERS
========================================================= */

const TRAINERS = [
  {
    id: 1,
    name: 'Pragati Warkade',
    role: 'Academic Counsellor',
    specialty: 'Career Mentor',
    image: pragati,
    qualification: 'MSC- Botany (RDVV Jabalpur) / PGDCA (MCU)',
    experience: '3+ Years',
    expertise: [
      'Career Guidance',
      'Academic Planning',
      'Student Mentoring',
    ],
    quote:
      'Every student has unique potential. My goal is to help them discover and nurture it.',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 2,
    name: 'Pratiksha Waghmare',
    role: 'SEO Specialist',
    specialty: 'SEO Mentor',
    image: pratiksha,
    qualification:
      'MBA in DM, Google Digital Garage Certified, Advanced SEO Certified',
    experience: '5+ Years',
    expertise: ['SEO Strategy', 'Content Marketing', 'Analytics'],
    quote:
      'Search engines evolve, but the core principle remains: create value for users.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Hariom Hude',
    role: 'PPC Specialist',
    specialty: 'Ads Mentor',
    image: hari,
    qualification:
      'MBA in Marketing and Retail Management, Certified in PPC',
    experience: '4+ Years',
    expertise: ['Google Ads', 'Campaign Optimization', 'ROI Analysis'],
    quote:
      'A well-optimized ad campaign is like a precision tool — it delivers exactly what you need.',
    social: {
      linkedin: '#',
      facebook: '#',
    },
  },
  {
    id: 4,
    name: 'Khushal Rajput',
    role: 'Photoshop Specialist',
    specialty: 'Graphic Designer Mentor',
     image: kusal,
    qualification: 'Graphic Certified Trainer, MBA',
    experience: '4+ Years',
    expertise: ['Photoshop', 'Visual Design', 'Brand Identity'],
    quote:
      'Design is not just what it looks like — it is how it works and makes people feel.',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 5,
    name: 'Chetna Malviya',
    role: 'Illustrator Specialist',
    specialty: 'Graphic Designer Mentor',
    image: chetna,
    qualification: 'Diploma in Graphic Designing Course, Mumbai',
    experience: '8+ Years',
    expertise: ['Illustration', 'Vector Art', 'Creative Direction'],
    quote:
      'Every illustration tells a story. I teach my students to tell stories that connect.',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 6,
    name: 'Sahil Ali',
    role: 'WordPress & Full Stack Developer',
    specialty: 'WP & Full Stack Developer Mentor',
    image: sahil,
    qualification: 'B-Tech, WordPress Certified, Full Stack Certified',
    experience: '2+ Years',
    expertise: ['WordPress', 'Node.js','React', 'Full Stack Development'],
    quote:
      'Code is poetry. I help my students write beautiful, functional code.',
    social: {
      linkedin: '#',
      github: 'http://github.com/sahil786a'
    },
  },
];

/* =========================================================
   STATS
========================================================= */

const STATS = [
  {
    icon: Users,
    value: '6+',
    label: 'Expert Trainers',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Certifications',
  },
  {
    icon: Clock,
    value: '4+',
    label: 'Avg Experience',
  },
  {
    icon: Star,
    value: '98%',
    label: 'Student Satisfaction',
  },
];

/* =========================================================
   COURSES
========================================================= */

const COURSE_CATEGORIES = [
  {
    icon: BarChart3,
    name: 'Digital Marketing',
    desc: 'SEO, Social Media, Content',
  },
  {
    icon: TrendingUp,
    name: 'SEO & Analytics',
    desc: 'GEO, AEO, Data Analysis',
  },
  {
    icon: Code,
    name: 'Web Development',
    desc: 'Full Stack, WordPress',
  },
  {
    icon: Palette,
    name: 'Graphic Design',
    desc: 'Photoshop, Illustrator',
  },
  {
    icon: Video,
    name: 'Video Editing',
    desc: 'Premiere Pro, After Effects',
  },
  {
    icon: Target,
    name: 'Paid Ads',
    desc: 'Google Ads, Social Ads',
  },
];

/* =========================================================
   ACHIEVEMENTS
========================================================= */

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    value: '500+',
    label: 'Students Trained',
  },
  {
    icon: Building2,
    value: '50+',
    label: 'Partner Companies',
  },
  {
    icon: Users,
    value: '100%',
    label: 'Placement Support',
  },
  {
    icon: BookMarked,
    value: '20+',
    label: 'Live Projects',
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    role: 'Digital Marketing Alumnus',
    quote:
      'IADE transformed my career. The practical training and expert mentors made all the difference.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Priya Patel',
    role: 'Graphic Design Graduate',
    quote:
      'The hands-on projects and industry exposure at IADE prepared me for real-world challenges.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Amit Kumar',
    role: 'Full Stack Developer',
    quote:
      'From zero to job-ready in 6 months. The mentorship and curriculum at IADE is unmatched.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Sneha Reddy',
    role: 'SEO Specialist',
    quote:
      'The SEO training at IADE gave me practical skills that helped me land my dream job.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const WHY_CHOOSE_US = [
  {
    icon: Rocket,
    title: 'Industry Experts',
    desc: 'Learn from professionals with real-world experience.',
  },
  {
    icon: Target,
    title: 'Practical Training',
    desc: 'Hands-on projects and live client work.',
  },
  {
    icon: Shield,
    title: 'Placement Support',
    desc: 'Career guidance and job assistance.',
  },
  {
    icon: Award,
    title: 'Certified Courses',
    desc: 'Industry-recognized certifications.',
  },
];

/* =========================================================
   WHAT WE OFFER
========================================================= */

const WHAT_WE_OFFER = [
  {
    icon: Laptop,
    title: 'Live Projects',
    desc: 'Work on real client campaigns.',
  },
  {
    icon: Users,
    title: 'Expert Mentors',
    desc: '1-on-1 guidance from industry experts.',
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    desc: 'Weekend and evening batches available.',
  },
  {
    icon: Globe,
    title: 'Online & Offline',
    desc: 'Learn from anywhere.',
  },
];

/* =========================================================
   EXPERTISE ICONS
========================================================= */

const expertiseIcons = {
  'SEO Strategy': TrendingUp,
  'Content Marketing': Layers,
  Analytics: BarChart3,
  'Google Ads': Target,
  'Campaign Optimization': Zap,
  'ROI Analysis': Shield,
  Photoshop: Palette,
  'Visual Design': Layers,
  'Brand Identity': Code,
  Illustration: Palette,
  'Vector Art': Layers,
  'Creative Direction': Target,
  WordPress: Code,
  React: Code,
  'Full Stack Development': Layers,
  'Career Guidance': Target,
  'Academic Planning': Shield,
  'Student Mentoring': Users,
};

/* =========================================================
   SOCIAL ICON
========================================================= */

const SocialIcon = ({ type }) => {
  const icons = {
    linkedin: Linkedin,
    instagram: Instagram,
    twitter: Twitter,
    facebook: Facebook,
    github: Github,
  };

  const Icon = icons[type];

  if (!Icon) return null;

  return (
    <Icon className="h-4 w-4" strokeWidth={1.8} />
  );
};

/* =========================================================
   COMPONENT
========================================================= */

const Trainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRefs = useRef([]);
  const observerRef = useRef(null);

  /* ---------------------------------------------------------
     SCROLL TOP
  --------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ---------------------------------------------------------
     INTERSECTION OBSERVER
  --------------------------------------------------------- */

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index);

          if (!Number.isNaN(index)) {
            setActiveIndex(index);
          }

          entry.target.classList.add('is-visible');

          const children =
            entry.target.querySelectorAll('.reveal-item');

          children.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.add('reveal-visible');
            }, childIndex * 80);
          });
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  /* ---------------------------------------------------------
     SCROLL TO TOP
  --------------------------------------------------------- */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /* ---------------------------------------------------------
     SCROLL TO SECTION
  --------------------------------------------------------- */

  const scrollToSection = (index) => {
    const section = sectionRefs.current[index];

    if (!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="min-h-screen overflow-x-hidden bg-ink font-body text-paper selection:bg-brand selection:text-paper">

      {/* =====================================================
          CUSTOM ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        @keyframes slowRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .hero-reveal {
          opacity: 0;
          animation: heroReveal 0.8s ease-out forwards;
        }

        .section-reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(.2,.8,.2,1);
        }

        .section-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-item {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.6s ease,
            transform 0.6s cubic-bezier(.2,.8,.2,1);
        }

        .reveal-item.reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .trainer-photo {
          opacity: 0;
          transform: scale(.96);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .is-visible .trainer-photo {
          opacity: 1;
          transform: scale(1);
        }

        .trainer-details {
          opacity: 0;
          transform: translateX(28px);
          transition:
            opacity .8s ease .15s,
            transform .8s cubic-bezier(.2,.8,.2,1) .15s;
        }

        .is-visible .trainer-details {
          opacity: 1;
          transform: translateX(0);
        }

        .marquee-track {
          animation: marquee 32s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .floating-orb {
          animation: float 8s ease-in-out infinite;
        }

        .rotate-slow {
          animation: slowRotate 24s linear infinite;
        }

        @media (max-width: 768px) {
          .trainer-photo,
          .trainer-details {
            opacity: 1;
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-white/[0.06] px-6 py-24 sm:px-10"
        style={{
          background:
            'radial-gradient(circle at 70% 35%, rgba(200,16,46,.12), transparent 32%), radial-gradient(circle at 20% 80%, rgba(200,16,46,.06), transparent 28%), #050505',
        }}
      >
        {/* Background grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Glow */}

        <div className="floating-orb absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/[0.07] blur-3xl" />

        <div
          className="floating-orb absolute -bottom-48 -left-40 h-[480px] w-[480px] rounded-full bg-brand/[0.05] blur-3xl"
          style={{ animationDelay: '2s' }}
        />

        {/* Decorative ring */}

        <div className="rotate-slow pointer-events-none absolute right-[8%] top-[15%] hidden h-40 w-40 rounded-full border border-brand/10 lg:block">
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-brand" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">

          <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.07] px-4 py-2">
            <Sparkles
              className="h-4 w-4 text-brand"
              strokeWidth={1.8}
            />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs">
              Meet Our Expert Team
            </span>
          </div>

          <h1
            className="hero-reveal mt-7 font-display text-5xl font-black uppercase leading-[.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
            style={{ animationDelay: '120ms' }}
          >
            Learn From
            <br />

            <span className="text-brand">
              Industry Experts
            </span>
          </h1>

          <p
            className="hero-reveal mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted sm:text-base"
            style={{ animationDelay: '240ms' }}
          >
            Meet the mentors behind IADE — experienced professionals
            who bring practical knowledge, industry insights and
            real-world project experience into every classroom.
          </p>

          <div
            className="hero-reveal mt-9 flex flex-wrap justify-center gap-3"
            style={{ animationDelay: '360ms' }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-paper shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brandDark hover:shadow-brand/30"
            >
              Talk To Our Team

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <button
              type="button"
              onClick={() => scrollToSection(1)}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-paper backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[0.06]"
            >
              Explore Trainers

              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>

          <div
            className="hero-reveal mx-auto mt-14 flex max-w-xl items-center justify-center gap-5 text-muted"
            style={{ animationDelay: '480ms' }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <span className="font-mono text-[9px] uppercase tracking-[0.22em]">
              Experience • Skills • Results
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        data-index="0"
        className="section-reveal border-b border-white/[0.06] bg-surface/20 px-6 py-14 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4">

            {STATS.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className={`group relative p-6 text-center transition-colors duration-300 hover:bg-brand/[0.04] sm:p-8 ${
                    index !== STATS.length - 1
                      ? 'border-b border-white/[0.06] sm:border-b-0 sm:border-r'
                      : ''
                  } ${
                    index === 0
                      ? 'border-r'
                      : ''
                  }`}
                >
                  <Icon
                    className="mx-auto mb-4 h-5 w-5 text-brand transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.7}
                  />

                  <div className="font-display text-3xl font-black tracking-tight text-paper sm:text-4xl">
                    {stat.value}
                  </div>

                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted sm:text-[10px]">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRAINERS
      ===================================================== */}

      {TRAINERS.map((trainer, index) => {
        const sectionIndex = index + 1;
        const reverse = index % 2 !== 0;

        return (
          <section
            key={trainer.id}
            ref={(el) => (sectionRefs.current[sectionIndex] = el)}
            data-index={sectionIndex}
            className="section-reveal relative overflow-hidden border-b border-white/[0.06] px-6 py-20 sm:px-10 sm:py-28"
          >
            {/* Background accent */}

            <div
              className={`pointer-events-none absolute top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-brand/[0.035] blur-3xl ${
                reverse ? '-left-64' : '-right-64'
              }`}
            />

            <div className="relative z-10 mx-auto max-w-6xl">

              <div
                className={`grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >

                {/* IMAGE */}

                <div className="trainer-photo">
                  <div className="relative mx-auto max-w-xl">

                    {/* Number */}

                    <div className="absolute -left-3 -top-3 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-ink font-mono text-xs font-bold text-brand shadow-xl shadow-black/30 sm:-left-4 sm:-top-4">
                      {String(trainer.id).padStart(2, '0')}
                    </div>

                    {/* Image */}

                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/40">

                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        loading="lazy"
                        className="h-[420px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] sm:h-[520px]"
                      />

                      {/* Specialty */}

                      <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between gap-4">
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">
                            Specialization
                          </span>

                          <p className="mt-1 text-sm font-semibold text-white">
                            {trainer.specialty}
                          </p>
                        </div>

                        <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md sm:flex">
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      {/* Social */}

                      <div className="absolute right-5 top-5 z-20 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {Object.entries(trainer.social).map(
                          ([network, url]) => (
                            <a
                              key={network}
                              href={url}
                              onClick={(e) => {
                                if (url === '#') {
                                  e.preventDefault();
                                }
                              }}
                              aria-label={network}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-brand hover:bg-brand"
                            >
                              <SocialIcon type={network} />
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* DETAILS */}

                <div className="trainer-details">

                  <div className="reveal-item mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.06] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />

                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
                      {trainer.specialty}
                    </span>
                  </div>

                  <h2 className="reveal-item font-display text-4xl font-black uppercase leading-none tracking-[-0.03em] text-paper sm:text-5xl lg:text-6xl">
                    {trainer.name}
                  </h2>

                  <p className="reveal-item mt-3 text-base font-semibold text-brand sm:text-lg">
                    {trainer.role}
                  </p>

                  {/* Quote */}

                  <div className="reveal-item mt-7 border-l-2 border-brand/40 pl-5">
                    <Quote
                      className="mb-2 h-5 w-5 text-brand/60"
                      strokeWidth={1.5}
                    />

                    <p className="max-w-xl text-sm italic leading-7 text-muted sm:text-[15px]">
                      “{trainer.quote}”
                    </p>
                  </div>

                  {/* Qualification */}

                  <div className="reveal-item mt-7 rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/15">
                    <div className="flex gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/[0.08]">
                        <GraduationCap
                          className="h-5 w-5 text-brand"
                          strokeWidth={1.7}
                        />
                      </div>

                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                          Qualification
                        </span>

                        <p className="mt-1 text-sm leading-6 text-paper/80">
                          {trainer.qualification}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}

                  <div className="reveal-item mt-6">

                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                      Areas of Expertise
                    </span>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {trainer.expertise.map((skill) => {
                        const Icon =
                          expertiseIcons[skill] || Zap;

                        return (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-[11px] font-medium text-paper/70 transition-all duration-300 hover:border-brand/30 hover:bg-brand/[0.05] hover:text-brand"
                          >
                            <Icon
                              className="h-3 w-3 text-brand"
                              strokeWidth={1.8}
                            />

                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Experience */}

                  <div className="reveal-item mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-6">

                    <Briefcase
                      className="h-4 w-4 text-brand"
                      strokeWidth={1.7}
                    />

                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                      Industry Experience
                    </span>

                    <span className="text-sm font-semibold text-paper">
                      {trainer.experience}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* =====================================================
          COURSES
      ===================================================== */}

      <section
        ref={(el) =>
          (sectionRefs.current[TRAINERS.length + 1] = el)
        }
        data-index={TRAINERS.length + 1}
        className="section-reveal border-b border-white/[0.06] bg-surface/20 px-6 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.06] px-3 py-1.5">
              <BookOpen
                className="h-3.5 w-3.5 text-brand"
                strokeWidth={1.7}
              />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
                Our Courses
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-black uppercase tracking-[-0.03em] text-paper sm:text-5xl">
              Skills That
              <span className="text-brand"> Matter</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-muted">
              Industry-aligned programs built around practical skills,
              modern tools and career-focused learning.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {COURSE_CATEGORIES.map((course) => {
              const Icon = course.icon;

              return (
                <div
                  key={course.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-brand/[0.035]"
                >
                  <div className="relative z-10 flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/15 bg-brand/[0.07]">
                      <Icon
                        className="h-5 w-5 text-brand"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-paper">
                        {course.name}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-muted">
                        {course.desc}
                      </p>
                    </div>

                    <ArrowRight className="ml-auto mt-1 h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section
        ref={(el) =>
          (sectionRefs.current[TRAINERS.length + 2] = el)
        }
        data-index={TRAINERS.length + 2}
        className="section-reveal px-6 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand">
                Our Achievements
              </span>

              <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.03em] text-paper sm:text-5xl">
                Built Around
                <span className="text-brand"> Results</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted">
              Our focus is simple — practical learning, measurable
              growth and stronger career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4">

            {ACHIEVEMENTS.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`group p-6 sm:p-8 ${
                    index !== ACHIEVEMENTS.length - 1
                      ? 'border-b border-white/[0.06] sm:border-b-0 sm:border-r'
                      : ''
                  } ${
                    index === 0
                      ? 'border-r'
                      : ''
                  }`}
                >
                  <Icon
                    className="h-6 w-6 text-brand transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.6}
                  />

                  <div className="mt-5 font-display text-3xl font-black text-paper sm:text-4xl">
                    {item.value}
                  </div>

                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY IADE
      ===================================================== */}

      <section
        ref={(el) =>
          (sectionRefs.current[TRAINERS.length + 3] = el)
        }
        data-index={TRAINERS.length + 3}
        className="section-reveal border-y border-white/[0.06] bg-surface/20 px-6 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand">
              Why Choose IADE
            </span>

            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.03em] text-paper sm:text-5xl">
              More Than
              <span className="text-brand"> Training</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/[0.07]">
                    <Icon
                      className="h-5 w-5 text-brand"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold text-paper transition-colors group-hover:text-brand">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE OFFER
      ===================================================== */}

      <section
        ref={(el) =>
          (sectionRefs.current[TRAINERS.length + 4] = el)
        }
        data-index={TRAINERS.length + 4}
        className="section-reveal px-6 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand">
              Student Experience
            </span>

            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.03em] text-paper sm:text-5xl">
              Everything You
              <span className="text-brand"> Need</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {WHAT_WE_OFFER.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
                >
                  <span className="font-mono text-[9px] text-white/20">
                    0{index + 1}
                  </span>

                  <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/[0.07]">
                    <Icon
                      className="h-5 w-5 text-brand"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold text-paper group-hover:text-brand">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section
        ref={(el) =>
          (sectionRefs.current[TRAINERS.length + 5] = el)
        }
        data-index={TRAINERS.length + 5}
        className="section-reveal border-y border-white/[0.06] bg-surface/20 px-6 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand">
              Student Reviews
            </span>

            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.03em] text-paper sm:text-5xl">
              Voices of Our
              <span className="text-brand"> Students</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-3.5 w-3.5 fill-brand text-brand"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-paper/75">
                  “{testimonial.quote}”
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-5">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full border border-brand/20 object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-paper">
                      {testimonial.name}
                    </h4>

                    <p className="mt-0.5 text-[10px] text-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRAINER MARQUEE
      ===================================================== */}

      <section className="overflow-hidden border-b border-white/[0.06] bg-black/20 py-5">

        <div className="marquee-track flex w-max">

          {[...Array(2)].map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-center"
            >
              {TRAINERS.map((trainer) => (
                <div
                  key={`${groupIndex}-${trainer.id}`}
                  className="mx-8 flex items-center gap-3 sm:mx-12"
                >
                  <div className="h-8 w-8 overflow-hidden rounded-full border border-brand/20">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="whitespace-nowrap text-xs font-semibold text-paper">
                      {trainer.name}
                    </p>

                    <p className="whitespace-nowrap font-mono text-[8px] uppercase tracking-wider text-muted">
                      {trainer.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <EnrollCTA />

      {/* =====================================================
          SCROLL TO TOP
      ===================================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-brand text-paper shadow-xl shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brandDark ${
          showScrollTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-5 opacity-0'
        }`}
      >
        <ArrowUp
          className="h-4 w-4"
          strokeWidth={2}
        />
      </button>

      {/* =====================================================
          SECTION INDICATOR
      ===================================================== */}

      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-2">

        {Array.from({
          length: TRAINERS.length + 6,
        }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollToSection(index)}
            aria-label={`Go to section ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'w-5 bg-brand shadow-[0_0_12px_rgba(200,16,46,.5)]'
                : 'w-1.5 bg-white/20 hover:bg-brand/60'
            }`}
          />
        ))}
      </div>
    </main>
  );
};

export default Trainer;