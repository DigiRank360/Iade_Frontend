import React, { useState, useEffect } from 'react';
import { 
  Images, 
  Users, 
  Award, 
  Calendar, 
  X,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  LayoutGrid,
  Image,
  Star,
  ZoomIn,
  ArrowUp,
} from 'lucide-react';

// NOTE: The Claude artifact sandbox blocks hotlinking to external image
// hosts (picsum.photos, images.unsplash.com, etc.) — that's why nothing
// was rendering. To guarantee images always show with zero network
// dependency, each image is generated on the fly as an inline SVG data
// URI (gradient background + icon + label), keyed by category below.
const CATEGORY_THEME = {
  classroom:   { colors: ['#1e3a5f', '#2563eb'], icon: 'classroom' },
  celebration: { colors: ['#5b3a00', '#eab308'], icon: 'celebration' },
  certificate: { colors: ['#0f3d1f', '#22c55e'], icon: 'certificate' },
};

const ICON_PATHS = {
  classroom: '<path d="M20 90 L100 40 L180 90 L100 130 Z" fill="none" stroke="white" stroke-width="4" stroke-opacity="0.85"/><path d="M60 105 L60 145 Q100 165 140 145 L140 105" fill="none" stroke="white" stroke-width="4" stroke-opacity="0.85"/><line x1="180" y1="90" x2="180" y2="130" stroke="white" stroke-width="4" stroke-opacity="0.85"/>',
  celebration: '<path d="M100 40 L112 75 L150 75 L120 97 L131 133 L100 111 L69 133 L80 97 L50 75 L88 75 Z" fill="white" fill-opacity="0.85"/>',
  certificate: '<rect x="55" y="45" width="90" height="70" rx="4" fill="none" stroke="white" stroke-width="4" stroke-opacity="0.85"/><line x1="70" y1="65" x2="130" y2="65" stroke="white" stroke-width="3" stroke-opacity="0.7"/><line x1="70" y1="80" x2="115" y2="80" stroke="white" stroke-width="3" stroke-opacity="0.7"/><circle cx="100" cy="130" r="14" fill="none" stroke="white" stroke-width="4" stroke-opacity="0.85"/><path d="M92 142 L88 160 L100 152 L112 160 L108 142" fill="white" fill-opacity="0.85"/>',
};

const makeImage = (category, seed, label) => {
  const theme = CATEGORY_THEME[category];
  const icon = ICON_PATHS[category];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 200 133">
    <defs>
      <linearGradient id="g${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${theme.colors[0]}"/>
        <stop offset="100%" stop-color="${theme.colors[1]}"/>
      </linearGradient>
      <pattern id="p${seed}" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="white" fill-opacity="0.06"/>
      </pattern>
    </defs>
    <rect width="200" height="133" fill="url(#g${seed})"/>
    <rect width="200" height="133" fill="url(#p${seed})"/>
    ${icon}
    <text x="100" y="118" font-family="Arial, sans-serif" font-size="9" fill="white" fill-opacity="0.75" text-anchor="middle" letter-spacing="0.5">${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

// Gallery Images Data — every image is a locally-generated SVG (no external
// network calls at all), so they render instantly and can never fail to load.
const GALLERY_IMAGES = [
  // Classroom Images
  { src: makeImage('classroom', 1, 'CLASSROOM'), category: 'classroom', title: 'Interactive Classroom Session', date: 'Jan 2025' },
  { src: makeImage('classroom', 2, 'WORKSHOP'), category: 'classroom', title: 'Digital Marketing Workshop', date: 'Dec 2024' },
  { src: makeImage('classroom', 3, 'TRAINING'), category: 'classroom', title: 'Practical Training Session', date: 'Nov 2024' },
  { src: makeImage('classroom', 4, 'DISCUSSION'), category: 'classroom', title: 'Group Discussion', date: 'Oct 2024' },

  // Celebration Images
  { src: makeImage('celebration', 5, 'GRADUATION'), category: 'celebration', title: 'Batch Graduation Ceremony', date: 'Sep 2024' },
  { src: makeImage('celebration', 6, 'SUCCESS'), category: 'celebration', title: 'Success Celebration', date: 'Aug 2024' },
  { src: makeImage('celebration', 7, 'FESTIVAL'), category: 'celebration', title: 'Festival Celebration', date: 'Jul 2024' },
  { src: makeImage('celebration', 8, 'AWARDS'), category: 'celebration', title: 'Award Ceremony', date: 'Jun 2024' },

  // Certificate Images
  { src: makeImage('certificate', 9, 'CERTIFICATE'), category: 'certificate', title: 'Certificate Distribution', date: 'May 2024' },
  { src: makeImage('certificate', 10, 'ACHIEVEMENT'), category: 'certificate', title: 'Achievement Recognition', date: 'Apr 2024' },
  { src: makeImage('certificate', 11, 'COMPLETION'), category: 'certificate', title: 'Course Completion', date: 'Mar 2024' },
  { src: makeImage('certificate', 12, 'SKILL CERT'), category: 'certificate', title: 'Skill Certification', date: 'Feb 2024' },

  // More images for variety
  { src: makeImage('classroom', 13, 'WORKSHOP'), category: 'classroom', title: 'Workshop Session', date: 'Dec 2024' },
  { src: makeImage('celebration', 14, 'BATCH PARTY'), category: 'celebration', title: 'Batch Party', date: 'Nov 2024' },
  { src: makeImage('certificate', 15, 'AWARDS'), category: 'certificate', title: 'Award Distribution', date: 'Oct 2024' },
];

// Stats Data
const STATS = [
  { icon: Images, value: "85+", label: "Photos" },
  { icon: Users, value: "12", label: "Batches" },
  { icon: Award, value: "500+", label: "Students" },
  { icon: Calendar, value: "4", label: "Years" }
];

// Categories
const CATEGORIES = [
  { id: 'all', label: 'All', icon: Grid3x3 },
  { id: 'classroom', label: 'Classroom', icon: LayoutGrid },
  { id: 'celebration', label: 'Celebrations', icon: Star },
  { id: 'certificate', label: 'Certificates', icon: Award }
];

// Final placeholder image (base64 encoded gray box with text) — only used if
// BOTH the primary and the Unsplash fallback fail to load (e.g. no network at all).
const PLACEHOLDER = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23222"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="18" fill="%23666" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewMode, setViewMode] = useState('grid');
  // imageLevel[index] = 0 -> using src (picsum), 1 -> using fallback (unsplash), 2 -> using PLACEHOLDER
  const [imageLevel, setImageLevel] = useState({});
  const [loadedImages, setLoadedImages] = useState({});

  // Filter images based on category
  const getFilteredImages = () => {
    if (activeCategory === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter(img => img.category === activeCategory);
  };

  const filteredImages = getFilteredImages();

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

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal, .gallery-card, .stat-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCategory]);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateImage = (direction) => {
    const newIndex = (currentIndex + direction + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Images are locally-generated SVGs now (no network calls), so this only
  // triggers in the extremely unlikely case the data URI itself is malformed.
  const handleImageError = (index) => {
    setImageLevel(prev => ({ ...prev, [index]: 2 }));
  };

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const getImageSrc = (image, index) => {
    const level = imageLevel[index] || 0;
    return level === 2 ? PLACEHOLDER : image.src;
  };

  const getCategoryBadgeColor = (category) => {
    const colors = {
      classroom: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      celebration: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      certificate: 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colors[category] || 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, currentIndex, filteredImages]);

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      
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
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-float { animation: floatShape 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }

        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card {
          opacity: 0;
          transform: translateY(40px) scale(0.9);
          transition: all 0.6s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .is-visible .stat-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .stat-card:nth-child(1) { transition-delay: 0s; }
        .stat-card:nth-child(2) { transition-delay: 0.1s; }
        .stat-card:nth-child(3) { transition-delay: 0.2s; }
        .stat-card:nth-child(4) { transition-delay: 0.3s; }

        .gallery-card {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 0.7s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .is-visible .gallery-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .gallery-card:nth-child(1) { transition-delay: 0s; }
        .gallery-card:nth-child(2) { transition-delay: 0.04s; }
        .gallery-card:nth-child(3) { transition-delay: 0.08s; }
        .gallery-card:nth-child(4) { transition-delay: 0.12s; }
        .gallery-card:nth-child(5) { transition-delay: 0.16s; }
        .gallery-card:nth-child(6) { transition-delay: 0.2s; }
        .gallery-card:nth-child(7) { transition-delay: 0.24s; }
        .gallery-card:nth-child(8) { transition-delay: 0.28s; }
        .gallery-card:nth-child(9) { transition-delay: 0.32s; }
        .gallery-card:nth-child(10) { transition-delay: 0.36s; }
        .gallery-card:nth-child(11) { transition-delay: 0.4s; }
        .gallery-card:nth-child(12) { transition-delay: 0.44s; }

        .gallery-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(239, 68, 68, 0.15);
        }

        .lightbox-overlay {
          animation: lightboxIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .filter-btn {
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .filter-btn:hover {
          transform: translateY(-2px);
        }
        .filter-btn.active {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.5);
          color: #ef4444;
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
          transition: transform 0.15s ease-out;
        }

        @media (max-width: 768px) {
          .gallery-card {
            transition-delay: 0s !important;
          }
        }
      `}</style>

      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 sm:px-10 py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="parallax-shape absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-red-600/10 animate-float"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          />
          <div 
            className="parallax-shape absolute bottom-[-150px] left-[-80px] w-[400px] h-[400px] rounded-full bg-red-600/5 animate-float"
            style={{ animationDelay: '2s', transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-red-600/5 blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6 animate-[fadeInUp_0.6s_ease-out]">
            <Images className="w-4 h-4 text-red-500 animate-[spinSlow_8s_linear_infinite]" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">Our Gallery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
            Student <span className="text-red-500 relative">
              Moments
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-red-500/30 rounded-full -z-10" />
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Celebrations, certifications, and achievements from our IADE community
          </p>
        </div>
      </section>

      {/* ====== STATS SECTION ====== */}
      <section className="reveal py-12 px-6 sm:px-10 border-y border-white/5 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-card group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 text-center transition-all duration-500 hover:border-red-500/40 hover:-translate-y-2 hover:shadow-xl shadow-red-500/10">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-full bg-red-500/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-white group-hover:text-red-500 transition-colors">
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

      {/* ====== FILTER BAR ====== */}
      <section className="py-8 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`filter-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    isActive 
                      ? 'bg-red-500/20 border-red-500/50 text-red-500' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  )}
                </button>
              );
            })}
            
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-red-500/20 text-red-500' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-red-500/20 text-red-500' : 'text-gray-400 hover:text-white'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== GALLERY GRID ====== */}
      <section className="py-8 px-6 sm:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredImages.map((image, index) => {
              const imgSrc = getImageSrc(image, index);
              const isLoaded = loadedImages[index];
              const level = imageLevel[index] || 0;
              
              return (
                <div
                  key={index}
                  className="gallery-card group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/10"
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                    <img
                      src={imgSrc}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageError(index)}
                    />
                    
                    {/* Loading Skeleton */}
                    {!isLoaded && level < 2 && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
                    )}
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(image.category)} backdrop-blur-sm border`}>
                      {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>

                    {/* Bottom Info - Shows on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-white font-bold text-sm">{image.title}</h4>
                      <p className="text-gray-300 text-xs flex items-center gap-1.5 mt-1">
                        <Calendar className="w-3 h-3" />
                        {image.date}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer - Always Visible */}
                  <div className="p-4 flex items-center justify-between border-t border-white/5">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm truncate">{image.title}</h4>
                      <p className="text-gray-400 text-xs flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {image.date}
                      </p>
                    </div>
                    <div className={`ml-2 px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap ${getCategoryBadgeColor(image.category)}`}>
                      {image.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Image className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">No Images Found</h3>
              <p className="text-gray-400 mt-2">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* ====== LIGHTBOX ====== */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="lightbox-overlay relative max-w-6xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-gray-400 hover:text-white transition-colors z-20"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Main Image */}
            <div className="relative bg-black/50 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={getImageSrc(selectedImage, currentIndex)}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain"
                onError={() => handleImageError(currentIndex)}
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(selectedImage.category)} border`}>
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-300 text-sm flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {selectedImage.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-red-500 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-red-500 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-400 font-mono tracking-wider">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}

      {/* ====== SCROLL TO TOP ====== */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-110 flex items-center justify-center ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </main>
  );
};

export default Gallery;