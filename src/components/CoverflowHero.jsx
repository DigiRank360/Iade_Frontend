import { Link } from "react-router-dom";

export default function CoverflowHero() {
  const HERO_VIDEO = "/f2.mp4"; 

  return (
    <section className="relative w-full overflow-hidden bg-ink pt-20 sm:pt-24 pb-6 text-paper min-h-[85vh] flex flex-col justify-center">
      <style>{`
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroVideoReveal {
          from { opacity: 0; transform: translateY(28px) scale(1.02); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .hero-reveal {
          opacity: 0;
          animation: heroReveal 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-reveal-delay {
          animation-delay: 180ms;
        }

        .hero-video-reveal {
          opacity: 0;
          animation: heroVideoReveal 1400ms 320ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-video-reveal {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>
      
      {/* =====================================================
          TOP RED GRADIENT GLOW
      ====================================================== */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-brand/30 via-brand/10 to-transparent blur-2xl opacity-80 z-10"
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT (TEXT & BUTTONS)
      ====================================================== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 pt-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="hero-reveal text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-[1px] bg-brand" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-brand">
                Welcome to Indian Academy Of Digital Education
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-black leading-[0.95] tracking-tight uppercase">
              <span className="text-paper">Learn Digital</span>
              <br />
              <span className="text-paper">Marketing.</span>
              <br />
              <span className="text-paper">Build Skills.</span>
              <br />
              <span className="text-brand">Get Hired.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-brand font-medium">
              Learn practical skills. Build your career. Get ready for the future of digital work.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="hero-reveal hero-reveal-delay lg:pt-8">
            <p className="max-w-xl text-sm sm:text-base md:text-lg leading-[1.65] text-paper/70">
              At Indian Academy Of Digital Education, we help students build practical digital skills, gain industry-ready experience, and prepare for future-ready careers.
              <br /><br />
              Whether you want to master digital marketing, SEO, Google Ads, social media, web development, design, video editing, or technical skills, our programs are designed to help you learn with real-world applications.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.28em] font-bold">
              <span className="text-paper/70">Skills</span>
              <span className="text-brand">•</span>
              <span className="text-paper/70">Career</span>
              <span className="text-brand">•</span>
              <span className="text-paper/70">Growth</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:bg-brandDark hover:-translate-y-0.5"
              >
                Let's Talk
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-6 py-3 text-xs font-bold uppercase tracking-wider text-paper backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
              >
                Explore Courses
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          FULL WIDTH VIDEO WITH CENTERED OVERLAY
      ====================================================== */}
      <div className="relative w-full z-20 mt-4 overflow-hidden">
        {/* VIDEO ELEMENT */}
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-reveal block w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[600px] object-cover object-center shadow-2xl shadow-black/70"
          aria-label="IADE course introduction video"
        />

        {/* DARK READABILITY GRADIENT OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-10" />

        {/* PERFECTLY CENTERED COMPACT CONTENT */}
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          
          {/* Subtle Ambient Glow behind text */}
          <div className="absolute w-[220px] sm:w-[380px] h-[60px] sm:h-[100px] bg-brand/25 blur-[60px] sm:blur-[90px] rounded-full -z-10" />

          {/* MAIN BRANDING WORDMARK */}
          <h1 className="text-[15vw] sm:text-[8vw] md:text-[7vw] leading-none font-display font-black uppercase tracking-tight select-none drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]">
            <span className="text-paper">I</span>
            <span className="text-brand">A</span>
            <span className="text-paper">D</span>
            <span className="text-brandDark">E</span>
          </h1>

          {/* TAGLINE */}
          <p className="mt-1 sm:mt-2 text-[9px] sm:text-xs md:text-sm font-body tracking-[0.25em] sm:tracking-[0.3em] font-semibold uppercase text-paper/90 drop-shadow">
            <span>Academy of </span>
            <span className="text-brand font-bold">Digital Education</span>
          </p>

          {/* LOCATION */}
          <p className="mt-1 text-[8px] sm:text-[10px] font-body uppercase tracking-[0.35em] text-paper/60">
            Bhopal
          </p>

        </div>
      </div>

    </section>
  );
}