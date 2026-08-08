import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote,
  Users,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  Send,
  X,
  User,
  Briefcase,
  MessageSquare,
  ThumbsUp,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Zap,
  StarHalf,
  Heart,
  Rocket,
  Shield,
  Target,
  Layers,
  Gem,
  Crown,
  Compass,
  Lightbulb,
  Smile,
  Coffee,
  Sun,
  Moon,
  Cloud,
  Flame,
  Gift,
  Music,
  Camera,
  PenTool,
  Share2
} from 'lucide-react';

// Reviews Data
const REVIEWS = [
  {
    id: 1,
    name: "Mohd Saad",
    role: "Graphic Designing",
    avatar: "MS",
    rating: 5,
    text: "IADE is a really good institute for graphic design. The teaching quality is excellent, and the faculty members are very understanding. They explain every concept clearly and make sure to cover all the doubts without any hesitation.",
    date: "Jan 2025",
    emoji: "🎨"
  },
  {
    id: 2,
    name: "Priya Krishnan",
    role: "Digital Marketing",
    avatar: "PK",
    rating: 5,
    text: "IADE's Digital Marketing course helped me understand real-world strategies and tools. The hands-on projects made learning practical, and I feel confident applying these skills professionally.",
    date: "Dec 2024",
    emoji: "📊"
  },
  {
    id: 3,
    name: "Amitesh Singh",
    role: "Designing Course",
    avatar: "AS",
    rating: 5,
    text: "One of the best centres for the designing course. The practical approach and real-world projects helped me build a strong portfolio. The faculty is always available to guide and support.",
    date: "Nov 2024",
    emoji: "✏️"
  },
  {
    id: 4,
    name: "Abhay Dubey",
    role: "Digital Marketing",
    avatar: "AD",
    rating: 5,
    text: "If you're searching for the best digital marketing institute in Bhopal, you can blindly trust these people having vast knowledge and support system provided to the students.",
    date: "Oct 2024",
    emoji: "🚀"
  },
  {
    id: 5,
    name: "Palak Raghuwanshi",
    role: "Graphic Designing",
    avatar: "PR",
    rating: 5,
    text: "The academy provides good training in design tools and basics. The staff is also good — they provide internships on real projects. The hands-on experience helped me build confidence.",
    date: "Sep 2024",
    emoji: "💡"
  },
  {
    id: 6,
    name: "Akash Pandey",
    role: "Graphics Design",
    avatar: "AP",
    rating: 5,
    text: "This academy is the best place to learn graphics design. The teaching style is super clear, practical, and easy to understand. We actually work on real projects that help build confidence.",
    date: "Aug 2024",
    emoji: "🌟"
  },
  {
    id: 7,
    name: "Sakshi Deshmukh",
    role: "Graphics Designing",
    avatar: "SD",
    rating: 5,
    text: "IADE Institute is without any doubt the best Graphic designing training institute in Bhopal. The classes are interactive, and the trainers ensure every student understands the concepts clearly.",
    date: "Jul 2024",
    emoji: "🎯"
  },
  {
    id: 8,
    name: "Honey Lodhi",
    role: "Digital Marketing",
    avatar: "HL",
    rating: 5,
    text: "I picked up useful skills and practical tips. Would be even better with more recorded sessions for revision. Overall, a great learning experience with excellent trainers.",
    date: "Jun 2024",
    emoji: "🔥"
  },
  {
    id: 9,
    name: "Mukesh Kumre",
    role: "Graphics Design",
    avatar: "MK",
    rating: 5,
    text: "Strong trainers and practical tasks. Pricing is fair — would recommend if they add more weekend batches. The learning environment is very supportive and encouraging.",
    date: "May 2024",
    emoji: "💎"
  }
];

// Stats Data
const STATS = [
  { icon: Users, value: "500+", label: "Students Trained", color: "brand" },
  { icon: Star, value: "4.9", label: "Average Rating", color: "yellow" },
  { icon: MessageSquare, value: "150+", label: "Reviews", color: "teal" },
  { icon: TrendingUp, value: "98%", label: "Satisfaction Rate", color: "green" }
];

// Floating Emojis for background
const FLOATING_EMOJIS = ["⭐", "✨", "💫", "🌟", "🎯", "🚀", "💡", "🎨", "📊", "🔥", "💎", "🌈"];

const Review = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', role: '', text: '' });
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Force visibility on mount
  useEffect(() => {
    setIsVisible(true);
    
    // Also add is-visible class to all review cards after mount
    setTimeout(() => {
      document.querySelectorAll('.review-card').forEach((el) => {
        el.classList.add('is-visible');
      });
      document.querySelectorAll('.card-scale').forEach((el) => {
        el.classList.add('is-visible');
      });
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-visible');
      });
    }, 100);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill out all fields.');
      return;
    }

    setSubmitStatus('success');
    setSubmitMessage('Thank you! Your review has been submitted.');

    setTimeout(() => {
      setIsModalOpen(false);
      setFormData({ name: '', role: '', text: '' });
      setSubmitMessage('');
      setSubmitStatus('');
    }, 1500);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 transition-all duration-300 ${
              i < rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-white/20'
            }`} 
          />
        ))}
      </div>
    );
  };

  const getColorClasses = (color) => {
    const colors = {
      brand: {
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        text: 'text-red-500',
        hover: 'hover:border-red-500/40',
        glow: 'shadow-red-500/20'
      },
      yellow: {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        text: 'text-yellow-400',
        hover: 'hover:border-yellow-400/40',
        glow: 'shadow-yellow-400/20'
      },
      teal: {
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/30',
        text: 'text-teal-400',
        hover: 'hover:border-teal-400/40',
        glow: 'shadow-teal-400/20'
      },
      green: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400',
        hover: 'hover:border-green-400/40',
        glow: 'shadow-green-400/20'
      }
    };
    return colors[color] || colors.brand;
  };

  return (
    <main className="bg-black text-white selection:bg-red-600 selection:text-white font-body min-h-screen overflow-x-hidden">
      
      <style>{`
        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          33% { transform: translateY(-25px) rotate(5deg) scale(1.05); }
          66% { transform: translateY(15px) rotate(-5deg) scale(0.95); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.9) translateY(30px) rotate(-3deg); }
          to { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
        }
        @keyframes floatEmoji {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-15px) rotate(10deg) scale(1.1); }
          50% { transform: translateY(-30px) rotate(-10deg) scale(0.9); }
          75% { transform: translateY(-15px) rotate(5deg) scale(1.05); }
        }
        @keyframes floatEmoji2 {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(-8deg) scale(1.1); }
          66% { transform: translateY(-40px) rotate(8deg) scale(0.95); }
        }

        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-scale {
          opacity: 0;
          transform: scale(0.8) rotate(-3deg);
          transition: all 0.6s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .card-scale.is-visible {
          opacity: 1;
          transform: scale(1) rotate(0);
        }

        .review-card {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 0.7s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .review-card.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .review-card:hover {
          transform: translateY(-8px) scale(1.01) !important;
          border-color: rgba(239, 68, 68, 0.4);
        }

        .modal-overlay {
          animation: modalIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .floating-emoji {
          animation: floatEmoji 6s ease-in-out infinite;
          position: absolute;
          pointer-events: none;
          opacity: 0.15;
          font-size: 2rem;
        }

        .floating-emoji:nth-child(even) {
          animation: floatEmoji2 8s ease-in-out infinite;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Force visible on load */
        .review-card.is-visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
        .card-scale.is-visible {
          opacity: 1 !important;
          transform: scale(1) rotate(0) !important;
        }
        .reveal.is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @media (max-width: 768px) {
          .review-card:nth-child(1) { transition-delay: 0s; }
          .review-card:nth-child(2) { transition-delay: 0.05s; }
          .review-card:nth-child(3) { transition-delay: 0.1s; }
          .review-card:nth-child(4) { transition-delay: 0.15s; }
          .review-card:nth-child(5) { transition-delay: 0.2s; }
          .review-card:nth-child(6) { transition-delay: 0.25s; }
        }
      `}</style>

      {/* Floating Emojis Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {FLOATING_EMOJIS.map((emoji, i) => (
          <div
            key={i}
            className="floating-emoji"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${1.5 + Math.random() * 2}rem`,
              opacity: 0.05 + Math.random() * 0.1
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 sm:px-10 py-16 overflow-hidden z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-red-600/10 animate-float"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-[-150px] left-[-80px] w-[400px] h-[400px] rounded-full bg-red-600/5 animate-float"
            style={{ animationDelay: '2s', transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-red-600/5 blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6 animate-[fadeInUp_0.6s_ease-out]">
            <Quote className="w-4 h-4 text-red-500 animate-[spinSlow_8s_linear_infinite]" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">Real Stories • Real Impact</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05]">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">What Our</span>
            <span className="inline-block text-red-500 relative mx-3 animate-[fadeInUp_0.8s_ease-out_0.2s]">
              <span className="relative inline-block hover:scale-105 transition-transform duration-300">
                Students
                <span className="absolute -bottom-3 left-0 right-0 h-2 rounded-full -z-10 animate-[pulseGlow_3s_ease-in-out_infinite]" />
              </span>
            </span>
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.4s]">Say</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.6s]">
            Hear from real IADE learners — honest experiences, real outcomes, and career transformations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s]">
            <button
              onClick={() => {
                document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl transition-all shadow-lg shadow-red-600/20 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
            >
              <span>See Reviews</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold uppercase text-xs tracking-widest rounded-xl transition-all hover:bg-white/10 hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Write Review</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeInUp_1s_ease-out_1s] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex flex-col items-center gap-2 text-gray-500 text-xs font-mono tracking-wider">
              <span>Scroll to explore</span>
              <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-red-500 animate-[pulseGlow_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STATS SECTION ====== */}
      <section className="stats-section reveal py-16 px-6 sm:px-10 border-y border-white/5 bg-white/5 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              const colors = getColorClasses(stat.color);
              return (
                <div key={index} className={`card-scale group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 text-center transition-all duration-500 hover:border-red-500/40 hover:-translate-y-3 hover:shadow-xl shadow-red-500/20`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-full bg-red-500/10 mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}>
                      <Icon className={`w-6 h-6 text-red-500`} />
                    </div>
                    <p className={`text-3xl sm:text-4xl font-black text-white group-hover:text-red-500 transition-colors duration-300`}>
                      {stat.value}
                    </p>
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== REVIEWS GRID ====== */}
      <section id="reviews-section" className="py-20 sm:py-28 px-6 sm:px-10 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 mb-4">
              <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">Student Love</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              What Our <span className="text-red-500">Students</span> Love ❤️
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">Real reviews from real students who transformed their careers with IADE</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, index) => (
              <div 
                key={review.id} 
                className="review-card group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Glow Ring */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-500/10 blur-2xl transition-all duration-700 ${hoveredCard === index ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`} />
                
                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 via-red-500 to-red-500/50 rounded-t-2xl group-hover:h-1.5 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />

                {/* Emoji Badge */}
                <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {review.emoji}
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-3 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500/30 to-red-500/10 border-2 border-red-500/30 flex items-center justify-center font-black text-red-500 text-lg flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:border-red-500">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm group-hover:text-red-500 transition-colors duration-300">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-mono tracking-wider">{review.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="relative z-10">
                  {renderStars(review.rating)}
                </div>

                {/* Text - Fixed visibility */}
                <p className="text-sm text-gray-300 leading-relaxed mt-3 relative z-10 group-hover:text-white/90 transition-colors duration-300 line-clamp-4">
                  "{review.text}"
                </p>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                  <span className="text-xs text-gray-400 font-mono tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {review.date}
                  </span>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-red-500/40 group-hover:text-red-500 transition-colors duration-300 group-hover:scale-110" />
                    <span className="text-xs text-gray-400">12</span>
                  </div>
                </div>

                {/* Hover Reveal Social Icons */}
                <div className={`absolute bottom-20 left-0 right-0 flex justify-center gap-3 transition-all duration-500 ${hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <button className="p-2 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500 transition-all hover:scale-110">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500 transition-all hover:scale-110">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500 transition-all hover:scale-110">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIAL HIGHLIGHT ====== */}
      <section className="relative px-6 sm:px-10 py-20 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-red-500/20 via-white/5 to-black rounded-3xl p-8 sm:p-12 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-red-500/10 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-red-500/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>
            
            <div className="relative z-10 text-center">
              <Quote className="w-12 h-12 text-red-500/30 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-black text-white leading-relaxed">
                "IADE didn't just teach me skills — they transformed my entire career perspective."
              </h3>
              <p className="mt-4 text-gray-400 font-mono text-sm tracking-wider">— Anonymous Student</p>
              <div className="mt-6 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WRITE REVIEW CTA ====== */}
      <section className="relative px-6 sm:px-10 pb-24 max-w-4xl mx-auto z-10">
        <div className="relative z-10 bg-gradient-to-br from-red-600 via-red-700 to-black rounded-3xl p-8 sm:p-12 text-center border border-white/10 shadow-2xl shadow-red-600/10 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }} />
            <div className="absolute -top-1/2 -right-1/2 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-[spinSlow_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-500/20 blur-3xl animate-pulse-glow" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-red-300 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/80">Share Your Experience</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
              Have You Learned With <span className="text-red-300 relative">
                IADE
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-red-300/30 rounded-full" />
              </span>?
            </h2>
            <p className="mt-3 text-white/80 max-w-lg mx-auto text-sm sm:text-base">
              Your feedback helps us grow and helps others make the right choice. 
              Every review makes a difference! 🌟
            </p>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
            >
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>
      </section>

      {/* ====== REVIEW MODAL ====== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="modal-overlay bg-black border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-lg shadow-2xl relative overflow-hidden">
            {/* Modal Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-red-500/5 blur-3xl" />

            <button
              onClick={() => {
                setIsModalOpen(false);
                setSubmitMessage('');
                setSubmitStatus('');
              }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-all hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
                Write a Review
              </h3>
              <p className="text-xs text-gray-400 mb-6">Share your experience and help others make the right choice</p>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1.5">Your Name *</label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:outline-none transition-all group-hover:border-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1.5">Role / Course</label>
                    <div className="relative group">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="e.g. Digital Marketing Student"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:outline-none transition-all group-hover:border-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1.5">Your Review *</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                      <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleInputChange}
                        placeholder="Share your experience with IADE..."
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:outline-none transition-all resize-none group-hover:border-white/20"
                      />
                    </div>
                  </div>

                  {submitMessage && (
                    <p className={`text-sm text-center ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'} animate-[fadeInUp_0.3s_ease-out]`}>
                      {submitMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-red-600/20 group flex items-center justify-center gap-2"
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

    </main>
  );
};

export default Review;