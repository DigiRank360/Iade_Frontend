import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Quote,
  Users,
  MessageSquare,
  ArrowRight,
  Send,
  X,
  User,
  Briefcase,
  ThumbsUp,
  Calendar,
  TrendingUp,
  Heart,
  Share2,
} from "lucide-react";
import EnrollCTA from "../EnrollCTA";

// =========================================================
// REVIEWS DATA
// =========================================================

const REVIEWS = [
  {
    id: 1,
    name: "Mohd Saad",
    role: "Graphic Designing",
    avatar: "MS",
    rating: 5,
    text: "IADE is a really good institute for graphic design. The teaching quality is excellent, and the faculty members are very understanding. They explain every concept clearly and make sure to cover all the doubts without any hesitation.",
    date: "Jan 2025",
    emoji: "🎨",
  },
  {
    id: 2,
    name: "Priya Krishnan",
    role: "Digital Marketing",
    avatar: "PK",
    rating: 5,
    text: "IADE's Digital Marketing course helped me understand real-world strategies and tools. The hands-on projects made learning practical, and I feel confident applying these skills professionally.",
    date: "Dec 2024",
    emoji: "📊",
  },
  {
    id: 3,
    name: "Amitesh Singh",
    role: "Designing Course",
    avatar: "AS",
    rating: 5,
    text: "One of the best centres for the designing course. The practical approach and real-world projects helped me build a strong portfolio. The faculty is always available to guide and support.",
    date: "Nov 2024",
    emoji: "✏️",
  },
  {
    id: 4,
    name: "Abhay Dubey",
    role: "Digital Marketing",
    avatar: "AD",
    rating: 5,
    text: "If you're searching for the best digital marketing institute in Bhopal, you can blindly trust these people having vast knowledge and support system provided to the students.",
    date: "Oct 2024",
    emoji: "🚀",
  },
  {
    id: 5,
    name: "Palak Raghuwanshi",
    role: "Graphic Designing",
    avatar: "PR",
    rating: 5,
    text: "The academy provides good training in design tools and basics. The staff is also good — they provide internships on real projects. The hands-on experience helped me build confidence.",
    date: "Sep 2024",
    emoji: "💡",
  },
  {
    id: 6,
    name: "Akash Pandey",
    role: "Graphics Design",
    avatar: "AP",
    rating: 5,
    text: "This academy is the best place to learn graphics design. The teaching style is super clear, practical, and easy to understand. We actually work on real projects that help build confidence.",
    date: "Aug 2024",
    emoji: "🌟",
  },
  {
    id: 7,
    name: "Sakshi Deshmukh",
    role: "Graphics Designing",
    avatar: "SD",
    rating: 5,
    text: "IADE Institute is without any doubt the best Graphic designing training institute in Bhopal. The classes are interactive, and the trainers ensure every student understands the concepts clearly.",
    date: "Jul 2024",
    emoji: "🎯",
  },
  {
    id: 8,
    name: "Honey Lodhi",
    role: "Digital Marketing",
    avatar: "HL",
    rating: 5,
    text: "I picked up useful skills and practical tips. Would be even better with more recorded sessions for revision. Overall, a great learning experience with excellent trainers.",
    date: "Jun 2024",
    emoji: "🔥",
  },
  {
    id: 9,
    name: "Mukesh Kumre",
    role: "Graphics Design",
    avatar: "MK",
    rating: 5,
    text: "Strong trainers and practical tasks. Pricing is fair — would recommend if they add more weekend batches. The learning environment is very supportive and encouraging.",
    date: "May 2024",
    emoji: "💎",
  },
];

// =========================================================
// STATS DATA
// =========================================================

const STATS = [
  {
    icon: Users,
    value: "500+",
    label: "Students Trained",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
  {
    icon: MessageSquare,
    value: "150+",
    label: "Reviews",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Satisfaction Rate",
  },
];

// =========================================================
// REVIEW PAGE
// =========================================================

const Review = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // =========================================================
  // PAGE VISIBILITY
  // =========================================================

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      document.querySelectorAll(".review-card").forEach((el) => {
        el.classList.add("is-visible");
      });

      document.querySelectorAll(".card-scale").forEach((el) => {
        el.classList.add("is-visible");
      });

      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // =========================================================
  // INPUT HANDLER
  // =========================================================

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.text) {
      setSubmitStatus("error");
      setSubmitMessage("Please fill out all required fields.");
      return;
    }

    setSubmitStatus("success");
    setSubmitMessage(
      "Thank you! Your review has been submitted successfully."
    );

    setTimeout(() => {
      setIsModalOpen(false);

      setFormData({
        name: "",
        role: "",
        text: "",
      });

      setSubmitMessage("");
      setSubmitStatus("");
    }, 1500);
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitMessage("");
    setSubmitStatus("");
  };

  // =========================================================
  // STAR RENDER
  // =========================================================

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-white/20"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <main
      className={`
        relative
        min-h-screen
        overflow-x-hidden
        bg-[#050505]
        text-white
        font-body
        selection:bg-red-600
        selection:text-white
        ${isVisible ? "opacity-100" : "opacity-0"}
        transition-opacity
        duration-500
      `}
    >
      {/* =====================================================
          PREMIUM STATIC BACKGROUND
      ====================================================== */}

      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Top Blood Red Ambient Glow */}
        <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-red-950/30 blur-[150px]" />

        {/* Left Ambient Glow */}
        <div className="absolute top-[30%] -left-52 w-[500px] h-[500px] rounded-full bg-red-950/20 blur-[150px]" />

        {/* Right Ambient Glow */}
        <div className="absolute bottom-[10%] -right-52 w-[500px] h-[500px] rounded-full bg-red-950/20 blur-[150px]" />

        {/* Center Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(127,29,29,0.12),transparent_42%)]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Top Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.55)_100%)]" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* =====================================================
          PREMIUM HERO SECTION
      ====================================================== */}

      <section className="relative min-h-[62vh] flex items-center justify-center px-6 sm:px-10 py-24 overflow-hidden z-10">
        {/* Hero Red Accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] sm:w-[700px] h-px bg-gradient-to-r from-transparent via-red-600/70 to-transparent"
          aria-hidden="true"
        />

        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-red-900/10 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Eyebrow */}

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm mb-7">
            <Quote className="w-4 h-4 text-red-500" />

            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-red-500 font-semibold">
              Real Stories • Real Impact
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.02]">
            What Our{" "}
            <span className="relative inline-block text-red-500">
              Students
            </span>{" "}
            Say
          </h1>

          {/* Accent */}

          <div className="mx-auto mt-6 w-16 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          {/* Description */}

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Hear from IADE learners who have developed practical skills,
            built confidence, and taken meaningful steps toward their
            professional careers.
          </p>

          {/* Buttons */}

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                document
                  .getElementById("reviews-section")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="
                group
                inline-flex
                items-center
                gap-2
                px-7
                py-3.5
                bg-red-600
                hover:bg-red-700
                text-white
                font-bold
                uppercase
                text-[10px]
                sm:text-xs
                tracking-[0.15em]
                rounded-xl
                transition-all
                duration-300
                shadow-[0_10px_35px_rgba(220,38,38,0.18)]
                hover:-translate-y-0.5
              "
            >
              <span>See Reviews</span>

              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="
                inline-flex
                items-center
                gap-2
                px-7
                py-3.5
                bg-white/[0.04]
                backdrop-blur-sm
                border
                border-white/10
                text-white
                font-bold
                uppercase
                text-[10px]
                sm:text-xs
                tracking-[0.15em]
                rounded-xl
                transition-all
                duration-300
                hover:bg-white/[0.08]
                hover:border-white/20
                hover:-translate-y-0.5
              "
            >
              <Send className="w-4 h-4" />

              <span>Write Review</span>
            </button>
          </div>

          {/* Scroll Indicator */}

          <div className="mt-14 flex flex-col items-center gap-2 text-gray-500">
            <span className="text-[9px] font-mono uppercase tracking-[0.25em]">
              Explore Experiences
            </span>

            <div className="w-5 h-8 rounded-full border border-white/15 flex justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-red-500" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS SECTION
      ====================================================== */}

      <section className="relative py-14 sm:py-16 px-6 sm:px-10 border-y border-white/[0.06] bg-white/[0.015] z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="
                    card-scale
                    group
                    relative
                    bg-white/[0.025]
                    backdrop-blur-sm
                    p-5
                    sm:p-7
                    rounded-2xl
                    border
                    border-white/[0.08]
                    text-center
                    transition-all
                    duration-500
                    hover:border-red-500/30
                    hover:-translate-y-1
                    overflow-hidden
                  "
                >
                  {/* Hover Glow */}

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top Line */}

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-red-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-xl bg-red-500/[0.08] border border-red-500/10 mb-4">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>

                    <p className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                      {stat.value}
                    </p>

                    <p className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-[0.12em] mt-1.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          REVIEWS GRID
      ====================================================== */}

      <section
        id="reviews-section"
        className="relative py-20 sm:py-28 px-6 sm:px-10 z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}

          <div className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/[0.08] border border-red-600/15 mb-4">
              <Heart className="w-3.5 h-3.5 text-red-500" />

              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-red-500 font-semibold">
                Student Experiences
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              What Our{" "}
              <span className="text-red-500">
                Students
              </span>{" "}
              Love
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Honest feedback from learners who have experienced IADE's
              practical and industry-focused approach.
            </p>
          </div>

          {/* Cards */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {REVIEWS.map((review, index) => (
              <div
                key={review.id}
                className="
                  review-card
                  group
                  relative
                  bg-white/[0.025]
                  backdrop-blur-md
                  p-6
                  sm:p-7
                  rounded-2xl
                  border
                  border-white/[0.08]
                  transition-all
                  duration-500
                  hover:border-red-500/30
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  hover:-translate-y-1.5
                  overflow-hidden
                "
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background */}

                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Top Accent */}

                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote Icon */}

                <Quote className="absolute top-5 right-5 w-8 h-8 text-white/[0.035] group-hover:text-red-500/10 transition-colors duration-500" />

                {/* Header */}

                <div className="relative z-10 flex items-center gap-4 mb-4">
                  <div
                    className="
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-full
                      bg-gradient-to-br
                      from-red-500/20
                      to-red-950/30
                      border
                      border-red-500/20
                      flex
                      items-center
                      justify-center
                      font-black
                      text-red-500
                      text-sm
                      sm:text-base
                      flex-shrink-0
                      transition-all
                      duration-500
                      group-hover:border-red-500/50
                      group-hover:scale-105
                    "
                  >
                    {review.avatar}
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-white text-sm group-hover:text-red-500 transition-colors duration-300">
                      {review.name}
                    </h4>

                    <p className="text-[10px] text-gray-500 font-mono tracking-wider uppercase mt-0.5">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}

                <div className="relative z-10">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}

                <p className="text-sm text-gray-400 leading-relaxed mt-4 relative z-10 group-hover:text-gray-300 transition-colors duration-300 line-clamp-4">
                  "{review.text}"
                </p>

                {/* Footer */}

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  <span className="text-[10px] text-gray-500 font-mono tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />

                    {review.date}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <ThumbsUp className="w-3.5 h-3.5 text-red-500/50 group-hover:text-red-500 transition-colors" />

                    <span className="text-[10px] text-gray-500">
                      12
                    </span>
                  </div>
                </div>

                {/* Hover Actions */}

                <div
                  className={`
                    absolute
                    bottom-20
                    left-0
                    right-0
                    flex
                    justify-center
                    gap-2
                    transition-all
                    duration-500
                    ${
                      hoveredCard === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3 pointer-events-none"
                    }
                  `}
                >
                  <button
                    type="button"
                    className="p-2 rounded-full bg-black/70 border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500/40 transition-all"
                    aria-label="Like review"
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    className="p-2 rounded-full bg-black/70 border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500/40 transition-all"
                    aria-label="Share review"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    className="p-2 rounded-full bg-black/70 border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500/40 transition-all"
                    aria-label="Comment on review"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL HIGHLIGHT
      ====================================================== */}

      <section className="relative px-6 sm:px-10 py-20 z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className="
              relative
              bg-gradient-to-br
              from-red-950/30
              via-white/[0.025]
              to-black
              rounded-3xl
              p-8
              sm:p-12
              border
              border-white/[0.08]
              overflow-hidden
            "
          >
            {/* Static Glow */}

            <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-red-900/20 blur-[110px] pointer-events-none" />

            <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-red-950/20 blur-[110px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-red-500/30 mx-auto mb-5" />

              <h3 className="text-xl sm:text-2xl font-black text-white leading-relaxed max-w-2xl mx-auto">
                "IADE didn't just teach me skills — they transformed my
                entire career perspective."
              </h3>

              <p className="mt-5 text-gray-500 font-mono text-xs sm:text-sm tracking-wider">
                — Anonymous Student
              </p>

              <div className="mt-6 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENROLL CTA
      ====================================================== */}

      <EnrollCTA />

      {/* =====================================================
          REVIEW MODAL
      ====================================================== */}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div
            className="
              modal-overlay
              relative
              w-full
              max-w-lg
              bg-[#080808]
              border
              border-white/10
              rounded-2xl
              p-6
              sm:p-8
              shadow-[0_30px_100px_rgba(0,0,0,0.65)]
              overflow-hidden
            "
          >
            {/* Modal Glow */}

            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-red-900/20 blur-[90px]" />

            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-red-950/20 blur-[90px]" />

            {/* Close */}

            <button
              onClick={closeModal}
              type="button"
              className="
                absolute
                top-4
                right-4
                p-2
                rounded-full
                text-gray-500
                hover:text-white
                hover:bg-white/[0.05]
                transition-all
              "
              aria-label="Close review form"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              {/* Modal Header */}

              <div className="mb-7">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-red-500 fill-red-500" />

                  <h3 className="text-xl font-black text-white">
                    Write a Review
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Share your experience and help future students make an
                  informed decision.
                </p>
              </div>

              {/* Form */}

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* Name */}

                  <div>
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1.5">
                      Your Name *
                    </label>

                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-red-500 transition-colors" />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="
                          w-full
                          pl-10
                          pr-4
                          py-3
                          rounded-xl
                          bg-white/[0.03]
                          border
                          border-white/10
                          text-white
                          placeholder:text-gray-600
                          focus:border-red-500/40
                          focus:bg-white/[0.05]
                          focus:outline-none
                          transition-all
                          text-sm
                        "
                      />
                    </div>
                  </div>

                  {/* Role */}

                  <div>
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1.5">
                      Role / Course
                    </label>

                    <div className="relative group">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-red-500 transition-colors" />

                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="e.g. Digital Marketing Student"
                        className="
                          w-full
                          pl-10
                          pr-4
                          py-3
                          rounded-xl
                          bg-white/[0.03]
                          border
                          border-white/10
                          text-white
                          placeholder:text-gray-600
                          focus:border-red-500/40
                          focus:bg-white/[0.05]
                          focus:outline-none
                          transition-all
                          text-sm
                        "
                      />
                    </div>
                  </div>

                  {/* Review */}

                  <div>
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1.5">
                      Your Review *
                    </label>

                    <div className="relative group">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500 group-focus-within:text-red-500 transition-colors" />

                      <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleInputChange}
                        placeholder="Share your experience with IADE..."
                        rows={4}
                        className="
                          w-full
                          pl-10
                          pr-4
                          py-3
                          rounded-xl
                          bg-white/[0.03]
                          border
                          border-white/10
                          text-white
                          placeholder:text-gray-600
                          focus:border-red-500/40
                          focus:bg-white/[0.05]
                          focus:outline-none
                          transition-all
                          resize-none
                          text-sm
                        "
                      />
                    </div>
                  </div>

                  {/* Submit Message */}

                  {submitMessage && (
                    <p
                      className={`
                        text-xs
                        sm:text-sm
                        text-center
                        ${
                          submitStatus === "success"
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      `}
                    >
                      {submitMessage}
                    </p>
                  )}

                  {/* Submit Button */}

                  <button
                    type="submit"
                    className="
                      w-full
                      py-3.5
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      font-bold
                      uppercase
                      text-xs
                      tracking-widest
                      rounded-xl
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      shadow-[0_10px_35px_rgba(220,38,38,0.15)]
                      group
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          PAGE ANIMATION STYLES
      ====================================================== */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(20px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(0.2, 0.9, 0.3, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-scale {
          opacity: 0;
          transform: scale(0.96);
          transition:
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.2, 0.9, 0.3, 1);
        }

        .card-scale.is-visible {
          opacity: 1;
          transform: scale(1);
        }

        .review-card {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.2, 0.9, 0.3, 1);
        }

        .review-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .review-card:nth-child(1) {
          transition-delay: 0.05s;
        }

        .review-card:nth-child(2) {
          transition-delay: 0.1s;
        }

        .review-card:nth-child(3) {
          transition-delay: 0.15s;
        }

        .review-card:nth-child(4) {
          transition-delay: 0.2s;
        }

        .review-card:nth-child(5) {
          transition-delay: 0.25s;
        }

        .review-card:nth-child(6) {
          transition-delay: 0.3s;
        }

        .review-card:nth-child(7) {
          transition-delay: 0.35s;
        }

        .review-card:nth-child(8) {
          transition-delay: 0.4s;
        }

        .review-card:nth-child(9) {
          transition-delay: 0.45s;
        }

        .modal-overlay {
          animation: modalIn 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @media (max-width: 768px) {
          .review-card {
            transition-delay: 0s !important;
          }

          .review-card.is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .card-scale.is-visible {
            opacity: 1 !important;
            transform: scale(1) !important;
          }

          .reveal.is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .review-card,
          .card-scale,
          .reveal,
          .modal-overlay {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Review;