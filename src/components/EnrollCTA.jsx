import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function EnrollCTA() {
  return (
    <section className="relative px-6 sm:px-10 py-24 max-w-7xl mx-auto font-body overflow-hidden">
      
      {/* =====================================================
          BACKGROUND AMBIENT RED GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          sm:w-[800px]
          h-[250px]
          bg-brand/20
          rounded-full
          blur-[120px]
          opacity-70
          animate-pulse
        "
      />

      {/* =====================================================
          CTA CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
          py-12
          border-y
          border-white/10
          bg-transparent
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="text-center md:text-left">

          {/* Eyebrow */}
          <span
            className="
              text-xs
              font-mono
              uppercase
              tracking-[0.2em]
              text-brand
              font-bold
              flex
              items-center
              justify-center
              md:justify-start
              gap-2
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />

            START YOUR JOURNEY
          </span>

          {/* Heading */}
          <h2
            className="
              text-3xl
              sm:text-5xl
              font-display
              font-black
              text-paper
              uppercase
              tracking-tight
              mt-3
              max-w-3xl
            "
          >
            Ready to build a career-ready skill?
          </h2>

          {/* Description */}
          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-muted
              max-w-xl
              leading-relaxed
            "
          >
            Join Bhopal’s premier academy. Learn through
            practical training, live projects, expert
            mentorship, and industry-focused programs
            designed to prepare you for real career opportunities.
          </p>

        </div>

        {/* =================================================
            ACTION BUTTONS
        ================================================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            gap-4
            shrink-0
            w-full
            md:w-auto
          "
        >

          {/* Enroll Now */}
          <Link
            to="/contact"
            className="
              group
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-2
              bg-brand
              hover:bg-brandDark
              text-paper
              px-8
              py-4
              text-xs
              font-mono
              uppercase
              tracking-widest
              font-bold
              transition-all
              duration-300
              shadow-[0_0_25px_rgba(200,16,46,0.4)]
              hover:shadow-[0_0_35px_rgba(200,16,46,0.6)]
              hover:scale-105
            "
          >
            <span>Enroll Now</span>

            <ArrowUpRight
              className="
                w-4
                h-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>

          {/* Book Demo */}
          <Link
            to="/contact"
            className="
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              bg-white/5
              hover:bg-white/10
              text-paper
              border
              border-white/15
              px-8
              py-4
              text-xs
              font-mono
              uppercase
              tracking-widest
              font-semibold
              transition-all
              duration-300
              hover:border-brand/40
              hover:-translate-y-0.5
            "
          >
            Book Demo
          </Link>

        </div>

      </div>
    </section>
  );
}