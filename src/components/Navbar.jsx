import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../utils/cn.js";

const NAV_ITEMS = [
  { to: "/", label: "Home" },

  {
    label: "About Us",
    children: [
      { to: "/trainer", label: "Our Trainer" },
      { to: "/review", label: "IADE Reviews" },
      { to: "/gallerys", label: "Our Gallery" },
    ],
  },

  {
    label: "Courses",
    children: [
      { to: "/digitalmmc", label: "Digital Marketing Master Class" },
      { to: "/seo", label: "Search Engine Optimization (GEO + AEO)" },
      { to: "/google-ads", label: "Google Ads" },
      { to: "/social-media", label: "Social Media Marketing" },
      { to: "/fullstack-dev", label: "Full Stack Development" },
      { to: "/wordpress", label: "WordPress Development" },
      { to: "/graphics-designing", label: "Graphics Designing Course" },
      { to: "/video-editing", label: "Video Editing Course" },
      { to: "/laptop-repairing", label: "Laptop Repairing Course" },
    ],
  },

  {
    label: "Classes",
    children: [
      { to: "/online-class", label: "Online Classes" },
      { to: "/offline-class", label: "Offline Classes" },
    ],
  },

  {
    label: "Placement",
    children: [
      { to: "/digital-ma", label: "Digital Marketing Assistance" },
      { to: "/hire", label: "Hire Fresher Through IADE" },
    ],
  },

  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleMobileSubmenu = (index) => {
    setActiveMobileDropdown(
      activeMobileDropdown === index ? null : index
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-[100] font-body border-b border-white/10 transition-all duration-300",
        scrolled
          ? "bg-ink/95 backdrop-blur-xl py-3 shadow-2xl"
          : "bg-ink/90 backdrop-blur-md py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10">
        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex items-center gap-2 group z-[101]"
        >
          <span className="bg-paper rounded-lg px-3 py-1.5 transition-all duration-300 group-hover:scale-105">
            <img
              src="/logo.png"
              alt="IADE — Academy of Digital Education"
              className="h-7 w-auto object-contain"
            />
          </span>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const hasChildren =
              item.children && item.children.length > 0;

            return (
              <div
                key={item.label}
                className="relative group py-2"
              >
                <NavLink
                  to={item.to || "#"}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative flex items-center gap-1.5",
                      "text-xs font-bold uppercase tracking-widest",
                      "py-1",
                      "text-paper/90",
                      "transition-colors duration-300",
                      "hover:text-brand",

                      // Active page changes text color only.
                      // No default underline.
                      isActive && "text-brand"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Navigation Label */}
                      <span>{item.label}</span>

                      {/* Dropdown Arrow */}
                      {hasChildren && (
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5",
                            "text-paper/60",
                            "transition-all duration-300",
                            "group-hover:text-brand",
                            "group-hover:rotate-180",
                            isActive && "text-brand"
                          )}
                        />
                      )}

                      {/* ================= HOVER ONLY UNDERLINE ================= */}
                      <span
                        className="
                          absolute
                          left-1/2
                          -translate-x-1/2
                          bottom-0
                          h-[2px]
                          w-0
                          rounded-full
                          bg-brand
                          transition-all
                          duration-300
                          ease-out
                          group-hover:w-full
                        "
                      />
                    </>
                  )}
                </NavLink>

                {/* ================= DESKTOP DROPDOWN ================= */}
                {hasChildren && (
                  <div
                    className="
                      absolute
                      top-full
                      left-0
                      pt-3
                      opacity-0
                      invisible
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                      transition-all
                      duration-300
                      ease-out
                      z-[110]
                    "
                  >
                    <div
                      className="
                        w-64
                        bg-surface
                        border
                        border-white/10
                        rounded-2xl
                        p-2
                        shadow-2xl
                        backdrop-blur-xl
                      "
                    >
                      {item.children.map((subItem) => (
                        <NavLink
                          key={subItem.to}
                          to={subItem.to}
                          className={({ isActive }) =>
                            cn(
                              "block",
                              "px-4 py-2.5",
                              "rounded-xl",
                              "text-xs font-semibold",
                              "transition-all duration-200",

                              isActive
                                ? "bg-brand/10 text-brand"
                                : "text-paper/80 hover:bg-brand/10 hover:text-brand hover:translate-x-1"
                            )
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ================= GET STARTED BUTTON ================= */}
        <a
          href="https://wa.me/918319578939"
          className="
            hidden
            md:inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-brand
            bg-brand/10
            px-6
            py-2.5
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-paper
            transition-all
            duration-300
            hover:bg-brand
            hover:text-paper
            hover:shadow-[0_0_25px_rgba(255,0,0,0.25)]
            hover:-translate-y-0.5
            z-[101]
          "
        >
          Get Started
        </a>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="
            md:hidden
            text-paper
            p-2
            rounded-lg
            transition-all
            duration-300
            hover:bg-brand/10
            hover:text-brand
            z-[101]
          "
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-6 h-6 text-brand" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {open && (
        <nav
          className="
            md:hidden
            max-h-[80vh]
            overflow-y-auto
            flex
            flex-col
            px-6
            py-4
            bg-ink
            border-b
            border-white/10
            shadow-2xl
            animate-in
            slide-in-from-top-5
            duration-200
          "
        >
          {NAV_ITEMS.map((item, idx) => {
            const hasChildren =
              item.children && item.children.length > 0;

            const isOpen = activeMobileDropdown === idx;

            return (
              <div
                key={item.label}
                className="border-b border-white/10 last:border-none"
              >
                <div className="flex items-center justify-between py-3">
                  {/* Mobile Main Link */}
                  <NavLink
                    to={item.to || "#"}
                    end={item.to === "/"}
                    onClick={() =>
                      !hasChildren && setOpen(false)
                    }
                    className={({ isActive }) =>
                      cn(
                        "text-xs",
                        "uppercase",
                        "tracking-widest",
                        "font-bold",
                        "transition-colors duration-300",

                        isActive
                          ? "text-brand"
                          : "text-paper/90 hover:text-brand"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>

                  {/* Mobile Dropdown Button */}
                  {hasChildren && (
                    <button
                      onClick={() =>
                        toggleMobileSubmenu(idx)
                      }
                      className="
                        p-1
                        text-paper/60
                        hover:text-brand
                        transition-colors
                        duration-300
                      "
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isOpen &&
                            "rotate-180 text-brand"
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* ================= MOBILE SUBMENU ================= */}
                {hasChildren && isOpen && (
                  <div
                    className="
                      pl-4
                      pb-3
                      flex
                      flex-col
                      gap-2
                      border-l
                      border-brand/30
                      ml-1
                    "
                  >
                    {item.children.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "py-1.5",
                            "text-xs",
                            "font-semibold",
                            "transition-all",
                            "duration-200",

                            isActive
                              ? "text-brand"
                              : "text-paper/60 hover:text-brand hover:translate-x-1"
                          )
                        }
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* ================= MOBILE GET STARTED ================= */}
          <div className="pt-4 pb-2">
            <a
              href="https://wa.me/918319578939"
              className="
                block
                text-center
                rounded-full
                border
                border-brand
                bg-brand
                py-3
                text-xs
                uppercase
                font-bold
                tracking-widest
                text-paper
                transition-all
                duration-300
                hover:bg-brand/90
                hover:shadow-[0_0_25px_rgba(255,0,0,0.25)]
              "
            >
              Get Started
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}