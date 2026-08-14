import React, { useEffect, useMemo, useState } from 'react';
import {
  Images,
  Users,
  Award,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  LayoutGrid,
  Image as ImageIcon,
  Star,
  ZoomIn,
  ArrowUp,
  Sparkles,
  MoveUpRight,
} from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85',
    category: 'classroom',
    title: 'Interactive Classroom Session',
    date: 'January 2025',
    tag: 'Learning',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85',
    category: 'classroom',
    title: 'Digital Marketing Training',
    date: 'December 2024',
    tag: 'Training',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85',
    category: 'classroom',
    title: 'Group Discussion',
    date: 'November 2024',
    tag: 'Workshop',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
    category: 'classroom',
    title: 'Practical Learning Session',
    date: 'October 2024',
    tag: 'Practical',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85',
    category: 'celebration',
    title: 'Student Success Celebration',
    date: 'September 2024',
    tag: 'Celebration',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85',
    category: 'celebration',
    title: 'Batch Celebration',
    date: 'August 2024',
    tag: 'Students',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85',
    category: 'celebration',
    title: 'Student Community',
    date: 'July 2024',
    tag: 'Community',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=85',
    category: 'celebration',
    title: 'Annual Student Meet',
    date: 'June 2024',
    tag: 'Event',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=85',
    category: 'certificate',
    title: 'Certificate Distribution',
    date: 'May 2024',
    tag: 'Achievement',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85',
    category: 'certificate',
    title: 'Student Achievement',
    date: 'April 2024',
    tag: 'Recognition',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1400&q=85',
    category: 'certificate',
    title: 'Course Completion Ceremony',
    date: 'March 2024',
    tag: 'Certification',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85',
    category: 'certificate',
    title: 'Skill Certification',
    date: 'February 2024',
    tag: 'Skills',
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=85',
    category: 'classroom',
    title: 'Live Workshop',
    date: 'January 2024',
    tag: 'Workshop',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=85',
    category: 'celebration',
    title: 'Batch Party',
    date: 'December 2023',
    tag: 'Celebration',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85',
    category: 'certificate',
    title: 'Award Distribution',
    date: 'November 2023',
    tag: 'Awards',
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85',
    category: 'classroom',
    title: 'Creative Learning Environment',
    date: 'October 2023',
    tag: 'Learning',
  },
];

const STATS = [
  {
    icon: Images,
    value: '85+',
    label: 'Photos',
  },
  {
    icon: Users,
    value: '12',
    label: 'Batches',
  },
  {
    icon: Award,
    value: '500+',
    label: 'Students',
  },
  {
    icon: Calendar,
    value: '4+',
    label: 'Years',
  },
];

const CATEGORIES = [
  {
    id: 'all',
    label: 'All Moments',
    icon: Grid3X3,
  },
  {
    id: 'classroom',
    label: 'Classroom',
    icon: LayoutGrid,
  },
  {
    id: 'celebration',
    label: 'Celebrations',
    icon: Star,
  },
  {
    id: 'certificate',
    label: 'Certificates',
    icon: Award,
  },
];

const CATEGORY_STYLES = {
  classroom:
    'bg-blue-500/10 text-blue-300 border-blue-400/20',
  celebration:
    'bg-yellow-500/10 text-yellow-300 border-yellow-400/20',
  certificate:
    'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [loadedImages, setLoadedImages] = useState({});
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return GALLERY_IMAGES;
    }

    return GALLERY_IMAGES.filter(
      (image) => image.category === activeCategory
    );
  }, [activeCategory]);

  /* =========================
     MOUSE PARALLAX
  ========================= */

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x:
          (event.clientX / window.innerWidth - 0.5) * 20,
        y:
          (event.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  /* =========================
     SCROLL
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================
     BODY LOCK FOR LIGHTBOX
  ========================= */

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  /* =========================
     KEYBOARD NAVIGATION
  ========================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isLightboxOpen) return;

      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        navigateImage(-1);
      }

      if (event.key === 'ArrowRight') {
        navigateImage(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [isLightboxOpen, currentIndex, filteredImages]);

  /* =========================
     LIGHTBOX
  ========================= */

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const nextIndex =
      (currentIndex +
        direction +
        filteredImages.length) %
      filteredImages.length;

    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  /* =========================
     IMAGE LOAD
  ========================= */

  const handleImageLoad = (id) => {
    setLoadedImages((previous) => ({
      ...previous,
      [id]: true,
    }));
  };

  /* =========================
     SCROLL TOP
  ========================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /* =========================
     CATEGORY
  ========================= */

  const getCategoryName = (category) => {
    const names = {
      classroom: 'Classroom',
      celebration: 'Celebration',
      certificate: 'Certificate',
    };

    return names[category] || category;
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">

      {/* =========================================
          GLOBAL STYLES
      ========================================= */}

      <style>{`
        @keyframes floatOne {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(25px, -30px, 0);
          }
        }

        @keyframes floatTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-30px, 25px, 0);
          }
        }

        @keyframes pulseRed {
          0%, 100% {
            opacity: .15;
            transform: scale(1);
          }
          50% {
            opacity: .32;
            transform: scale(1.12);
          }
        }

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes lightboxIn {
          from {
            opacity: 0;
            transform: scale(.94) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .gallery-reveal {
          animation: revealUp .8s cubic-bezier(.2,.8,.2,1) both;
        }

        .float-one {
          animation: floatOne 9s ease-in-out infinite;
        }

        .float-two {
          animation: floatTwo 11s ease-in-out infinite;
        }

        .pulse-red {
          animation: pulseRed 5s ease-in-out infinite;
        }

        .lightbox-animation {
          animation: lightboxIn .4s cubic-bezier(.2,.8,.2,1);
        }

        .gallery-card {
          transition:
            transform .5s cubic-bezier(.2,.8,.2,1),
            border-color .4s ease,
            box-shadow .5s ease;
        }

        .gallery-card:hover {
          transform: translateY(-8px);
        }

        .gallery-card img {
          transition:
            transform .8s cubic-bezier(.2,.8,.2,1),
            filter .5s ease;
        }

        .gallery-card:hover img {
          transform: scale(1.08);
          filter: saturate(1.08);
        }

        .filter-button {
          transition:
            transform .3s ease,
            background-color .3s ease,
            border-color .3s ease,
            color .3s ease;
        }

        .filter-button:hover {
          transform: translateY(-2px);
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-28">

        {/* Background */}
        <div className="absolute inset-0 -z-20 bg-[#050505]" />

        {/* Grid */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />

        {/* Red Glow */}
        <div
          className="float-one absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-red-600/10 blur-3xl"
          style={{
            transform: `translate(
              ${mousePosition.x * 0.5}px,
              ${mousePosition.y * 0.5}px
            )`,
          }}
        />

        <div
          className="float-two absolute -bottom-48 -left-40 h-[480px] w-[480px] rounded-full bg-red-700/[0.08] blur-3xl"
          style={{
            transform: `translate(
              ${mousePosition.x * -0.3}px,
              ${mousePosition.y * -0.3}px
            )`,
          }}
        />

        <div className="pulse-red absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px]" />

        {/* Hero Content */}
        <div className="mx-auto max-w-6xl text-center">

          {/* Eyebrow */}
          <div className="gallery-reveal inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.07] px-4 py-2">
            <Sparkles className="h-4 w-4 text-red-500" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-red-400">
              IADE Gallery
            </span>
          </div>

          {/* Heading */}
          <h1
            className="gallery-reveal mt-7 text-5xl font-black leading-[.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
            style={{ animationDelay: '.08s' }}
          >
            Moments That
            <br />

            <span className="relative inline-block text-red-500">
              Define Us.
              <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-red-500/40" />
            </span>
          </h1>

          {/* Description */}
          <p
            className="gallery-reveal mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base"
            style={{ animationDelay: '.16s' }}
          >
            Explore the learning, celebrations, achievements and
            unforgettable moments that make the IADE student
            community special.
          </p>

          {/* Mini CTA */}
          <div
            className="gallery-reveal mt-8 flex items-center justify-center gap-3"
            style={{ animationDelay: '.24s' }}
          >
            <span className="h-px w-8 bg-red-500/40" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              Learn • Create • Grow
            </span>

            <span className="h-px w-8 bg-red-500/40" />
          </div>
        </div>
      </section>

      {/* =========================================
          STATS
      ========================================= */}

      <section className="border-y border-white/[0.06] bg-white/[0.025] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.07] sm:grid-cols-4">

          {STATS.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group px-5 py-4 text-center sm:px-8"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/10">
                  <Icon className="h-4 w-4 text-red-500" />
                </div>

                <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* =========================================
          FILTER SECTION
      ========================================= */}

      <section className="px-5 pb-8 pt-14 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
                Explore Gallery
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Every Moment Matters.
              </h2>
            </div>

            {/* View Switch */}
            <div className="flex items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.03] p-1 lg:self-auto">

              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`rounded-lg p-2.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-red-500 text-white'
                    : 'text-white/40 hover:text-white'
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`rounded-lg p-2.5 transition-all ${
                  viewMode === 'list'
                    ? 'bg-red-500 text-white'
                    : 'text-white/40 hover:text-white'
                }`}
                aria-label="List view"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>

            </div>
          </div>

          {/* Filters */}
          <div className="hide-scrollbar mt-7 flex gap-2 overflow-x-auto pb-2">

            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive =
                activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  className={`filter-button inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold ${
                    isActive
                      ? 'border-red-500/40 bg-red-500 text-white shadow-lg shadow-red-500/10'
                      : 'border-white/10 bg-white/[0.03] text-white/45 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />

                  {category.label}

                  {isActive && (
                    <span className="ml-1 h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </button>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================
          GALLERY
      ========================================= */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          {filteredImages.length > 0 ? (

            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid grid-cols-1 gap-5 md:grid-cols-2'
              }
            >

              {filteredImages.map((image, index) => {

                const isLoaded =
                  loadedImages[image.id];

                return (
                  <article
                    key={image.id}
                    className={`gallery-card group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] ${
                      viewMode === 'list'
                        ? 'flex flex-col sm:flex-row'
                        : ''
                    }`}
                    style={{
                      animation:
                        'revealUp .7s cubic-bezier(.2,.8,.2,1) both',
                      animationDelay: `${Math.min(
                        index * 0.04,
                        0.5
                      )}s`,
                    }}
                    onClick={() =>
                      openLightbox(image, index)
                    }
                  >

                    {/* Image */}
                    <div
                      className={`relative overflow-hidden bg-[#111] ${
                        viewMode === 'list'
                          ? 'aspect-[4/3] w-full sm:w-2/5'
                          : 'aspect-[4/3]'
                      }`}
                    >

                      {!isLoaded && (
                        <div className="absolute inset-0 z-10 overflow-hidden bg-white/[0.04]">
                          <div className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-[shimmer_1.5s_infinite]" />
                        </div>
                      )}

                      <img
                        src={image.src}
                        alt={image.title}
                        loading="lazy"
                        onLoad={() =>
                          handleImageLoad(image.id)
                        }
                        className={`h-full w-full object-cover ${
                          isLoaded
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                      {/* Top Badge */}
                      <div className="absolute left-4 top-4">
                        <span
                          className={`rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] backdrop-blur-md ${
                            CATEGORY_STYLES[
                              image.category
                            ]
                          }`}
                        >
                          {getCategoryName(
                            image.category
                          )}
                        </span>
                      </div>

                      {/* Zoom */}
                      <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-[-4px] items-center justify-center rounded-full border border-white/15 bg-black/40 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ZoomIn className="h-4 w-4 text-white" />
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">

                        <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">

                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-red-400">
                            {image.tag}
                          </p>

                          <h3 className="text-base font-bold leading-snug text-white">
                            {image.title}
                          </h3>

                        </div>

                      </div>
                    </div>

                    {/* Footer */}
                    <div
                      className={`flex items-center justify-between gap-3 border-t border-white/[0.06] p-4 ${
                        viewMode === 'list'
                          ? 'flex-1 border-t sm:border-l sm:border-t-0'
                          : ''
                      }`}
                    >

                      <div className="min-w-0">

                        <p className="flex items-center gap-1.5 text-[10px] text-white/35">
                          <Calendar className="h-3 w-3" />
                          {image.date}
                        </p>

                        <p className="mt-1 truncate text-xs font-semibold text-white/70">
                          {image.title}
                        </p>

                      </div>

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-red-500/30 group-hover:bg-red-500 group-hover:text-white">
                        <MoveUpRight className="h-3.5 w-3.5" />
                      </div>

                    </div>

                  </article>
                );
              })}

            </div>

          ) : (

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] py-24 text-center">

              <ImageIcon className="mx-auto h-12 w-12 text-white/20" />

              <h3 className="mt-5 text-xl font-bold text-white">
                No Moments Found
              </h3>

              <p className="mt-2 text-sm text-white/35">
                Try selecting another category.
              </p>

            </div>

          )}

        </div>
      </section>

      {/* =========================================
          BOTTOM CTA
      ========================================= */}

      <section className="relative overflow-hidden border-t border-white/[0.06] px-5 py-20 sm:px-8 lg:px-12">

        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.06] blur-3xl" />

        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
            <Images className="h-5 w-5 text-red-500" />
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Your Moment Could Be
            <span className="text-red-500"> Next.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/40">
            Join the IADE community, build real-world skills,
            create your portfolio and become part of our next
            success story.
          </p>

        </div>
      </section>

      {/* =========================================
          LIGHTBOX
      ========================================= */}

      {isLightboxOpen && selectedImage && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
          onClick={closeLightbox}
        >

          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/60 transition-all hover:border-red-500/30 hover:bg-red-500 hover:text-white sm:right-8 sm:top-8"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Main */}
          <div
            className="lightbox-animation relative flex w-full max-w-6xl flex-col"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black">

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[72vh] w-full object-contain"
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent px-5 pb-5 pt-20 sm:px-8 sm:pb-8">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                  <div>

                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] ${
                        CATEGORY_STYLES[
                          selectedImage.category
                        ]
                      }`}
                    >
                      {getCategoryName(
                        selectedImage.category
                      )}
                    </span>

                    <h2 className="mt-3 text-xl font-bold text-white sm:text-3xl">
                      {selectedImage.title}
                    </h2>

                    <p className="mt-2 flex items-center gap-2 text-xs text-white/45">
                      <Calendar className="h-3.5 w-3.5" />
                      {selectedImage.date}
                    </p>

                  </div>

                  <div className="hidden text-right sm:block">

                    <p className="text-2xl font-black text-white">
                      {String(
                        currentIndex + 1
                      ).padStart(2, '0')}
                    </p>

                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                      of{' '}
                      {String(
                        filteredImages.length
                      ).padStart(2, '0')}
                    </p>

                  </div>

                </div>

              </div>
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={() =>
                navigateImage(-1)
              }
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition-all hover:scale-110 hover:border-red-500 hover:bg-red-500 sm:left-0 sm:h-14 sm:w-14"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() =>
                navigateImage(1)
              }
              className="absolute right-2 top-1/2 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition-all hover:scale-110 hover:border-red-500 hover:bg-red-500 sm:right-0 sm:h-14 sm:w-14"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

          </div>
        </div>
      )}

      {/* =========================================
          SCROLL TOP
      ========================================= */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-red-500/30 bg-red-500 text-white shadow-xl shadow-red-500/20 transition-all duration-300 sm:bottom-8 sm:right-8 ${
          showScrollTop
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-5 scale-75 opacity-0'
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>

    </main>
  );
};

export default Gallery;