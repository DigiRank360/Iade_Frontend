import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../utils/cn.js";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About Us",
    children: [
      { to: "/trainer", label: "Our Trainer" },
      { to: "/reviews", label: "IADE Reviews" },
      { to: "/gallery", label: "Our Gallery" },
    ],
  },
  {
    to: "/courses",
    label: "Courses",
    children: [
      { to: "/courses/digital-marketing", label: "Digital Marketing Master Class" },
      { to: "/courses/seo", label: "Search Engine Optimization (GEO + AEO)" },
      { to: "/courses/google-ads", label: "Google Ads" },
      { to: "/courses/social-media", label: "Social Media Marketing" },
      { to: "/courses/full-stack", label: "Full Stack Development" },
      { to: "/courses/wordpress", label: "WordPress Development" },
      { to: "/courses/graphics-designing", label: "Graphics Designing Course" },
      { to: "/courses/video-editing", label: "Video Editing Course" },
      { to: "/courses/laptop-repairing", label: "Laptop Repairing Course" },
    ],
  },
  {
    to: "/classes",
    label: "Classes",
    children: [
      { to: "/classes/online", label: "Online Classes" },
      { to: "/classes/offline", label: "Offline Classes" },
    ],
  },
  {
    to: "/placement",
    label: "Placement",
    children: [
      { to: "/placement/assistance", label: "Digital Marketing Assistance" },
      { to: "/placement/hire-fresher", label: "Hire Fresher Through IADE" },
    ],
  },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileSubmenu = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-300 font-body border-b border-white/10",
        scrolled ? "bg-ink py-3 shadow-2xl" : "bg-ink/90 backdrop-blur-md py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-[101]">
          <span className="bg-paper rounded-lg px-3 py-1.5 transition-all group-hover:scale-105">
            <img
              src="/logo.png"
              alt="IADE — Academy of Digital Education"
              className="h-7 w-auto object-contain"
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div key={item.label} className="relative group py-2">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 py-1",
                      isActive ? "text-brand" : "text-paper hover:text-brand"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {hasChildren && (
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-paper/80 group-hover:text-brand" />
                      )}

                      {/* Animated Hover Underline */}
                      <span
                        className={cn(
                          "absolute bottom-0 left-0 w-full h-[2px] bg-brand origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                          isActive && "scale-x-100"
                        )}
                      />
                    </>
                  )}
                </NavLink>

                {/* Desktop Dropdown - Clean Solid Background & Subtle Border */}
                {hasChildren && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-[110]">
                    <div className="w-64 bg-surface border border-white/10 rounded-2xl p-2 shadow-2xl">
                      {item.children.map((subItem) => (
                        <NavLink
                          key={subItem.to}
                          to={subItem.to}
                          className={({ isActive }) =>
                            cn(
                              "block px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200",
                              isActive
                                ? "bg-white/10 text-brand"
                                : "text-paper/90 hover:text-paper hover:bg-white/5 hover:text-brand hover:translate-x-1"
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

        {/* Action Button */}
        <a
          href="https://wa.me/918319578939"
          className="hidden md:inline-flex items-center justify-center rounded-full border border-brand bg-brand/20 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-paper hover:bg-brand hover:border-brand transition-all duration-300 z-[101]"
        >
          Get Started
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-paper p-2 rounded-lg hover:bg-white/10 transition-colors z-[101]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6 text-brand" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer - Solid Background & Subtle Border */}
      {open && (
        <nav className="md:hidden max-h-[80vh] overflow-y-auto flex flex-col px-6 py-4 bg-ink border-b border-white/10 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          {NAV_ITEMS.map((item, idx) => {
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = activeMobileDropdown === idx;

            return (
              <div key={item.label} className="border-b border-white/10 last:border-none">
                <div className="flex items-center justify-between py-3">
                  <NavLink
                    to={item.to}
                    onClick={() => !hasChildren && setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "text-xs uppercase tracking-widest font-bold",
                        isActive ? "text-brand" : "text-paper"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>

                  {hasChildren && (
                    <button
                      onClick={() => toggleMobileSubmenu(idx)}
                      className="p-1 text-paper/80 hover:text-brand"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isOpen && "rotate-180 text-brand"
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu (Mobile) */}
                {hasChildren && isOpen && (
                  <div className="pl-4 pb-3 flex flex-col gap-2">
                    {item.children.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "py-1.5 text-xs font-semibold transition-colors",
                            isActive ? "text-brand" : "text-muted hover:text-paper"
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

          <div className="pt-4 pb-2">
            <a
              href="https://wa.me/918319578939"
              className="block text-center rounded-full bg-brand py-3 text-xs uppercase font-bold tracking-widest text-paper hover:bg-brandDark transition-colors"
            >
              Get Started
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}