import { ArrowDown, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { COURSES } from "../utils/data.js";

export default function Courses() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink pt-28 pb-24 font-body">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main Red Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[500px] rounded-full bg-brand/10 blur-[150px]" />

        {/* Left Glow */}
        <div className="absolute top-[35%] -left-48 w-[500px] h-[500px] rounded-full bg-red-950/25 blur-[140px]" />

        {/* Right Glow */}
        <div className="absolute top-[55%] -right-48 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[140px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] rounded-full bg-brand/5 blur-[120px]" />

        {/* Subtle Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </div>

      {/* =========================================================
          HERO / HEADER
      ========================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left Content */}
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-brand" />
              </span>

              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                IADE Learning Programs
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-display font-black text-paper uppercase tracking-tight leading-[0.9]">
              Build Skills.
              <br />
              <span className="text-brand">Build Your Career.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-sm sm:text-base lg:text-lg text-muted leading-relaxed">
              Explore practical, industry-focused digital marketing programs
              designed to help you develop real-world skills, build a strong
              portfolio, and prepare for modern marketing careers.
            </p>

            {/* Quick Points */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Practical Learning",
                "Industry-Relevant Skills",
                "Live Project Exposure",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-paper/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <div
              className="
                relative
                w-full
                sm:w-fit
                min-w-[230px]
                p-5
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                shadow-2xl
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-brand" />
                </div>

                <div>
                  <p className="text-2xl font-display font-black text-paper">
                    {String(COURSES.length).padStart(2, "0")}+
                  </p>

                  <p className="text-[9px] font-mono uppercase tracking-[0.16em] text-muted">
                    Learning Programs
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px bg-white/10" />

              <p className="mt-4 text-[11px] leading-relaxed text-muted">
                Choose a program based on your career goals, skill level, and
                professional interests.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* =========================================================
          COURSE INTRO
      ========================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 mt-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-brand" />

              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                Explore Our Curriculum
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-paper uppercase tracking-tight leading-tight">
              Choose Your
              <span className="text-brand"> Learning Path.</span>
            </h2>

            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xl">
              From foundational concepts to advanced marketing strategies,
              find a program that matches the skills you want to build.
            </p>
          </div>

          {/* Course Count */}
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted">
            <span className="w-8 h-px bg-brand" />

            <span>
              {COURSES.length} Programs Available
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSES GRID
      ========================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {COURSES.map((course, index) => (
            <div
              key={course.slug}
              className="relative group"
            >
              {/* Card Ambient Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-2
                  rounded-3xl
                  bg-brand/10
                  blur-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* Card */}
              <div className="relative h-full">
                <CourseCard course={course} />

                {/* Course Number */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    top-3
                    left-3
                    z-20
                    w-8
                    h-8
                    rounded-lg
                    bg-black/50
                    backdrop-blur-md
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  "
                >
                  <span className="text-[9px] font-mono text-brand tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 mt-20">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-surface/70
            backdrop-blur-xl
            px-6
            py-10
            sm:px-10
            sm:py-12
          "
        >
          {/* CTA Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-brand/15 blur-[100px]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand font-semibold">
                Not Sure Where To Start?
              </span>

              <h3 className="mt-2 text-2xl sm:text-3xl font-display font-black text-paper uppercase tracking-tight">
                Find The Right Program For Your Goals.
              </h3>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                Explore the curriculum or speak with our team to understand
                which learning path fits your career objectives.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                group
                shrink-0
                inline-flex
                items-center
                justify-center
                gap-3
                px-6
                py-3.5
                rounded-xl
                bg-brand
                hover:bg-brandDark
                text-paper
                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]
                transition-all
                duration-300
                shadow-[0_12px_30px_rgba(200,16,46,0.20)]
                hover:-translate-y-1
              "
            >
              Talk To Our Team

              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-12">
        <ArrowDown className="w-4 h-4 text-white/20 animate-bounce" />
      </div>
    </main>
  );
}