import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { CONTACT } from "../utils/data.js";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink text-paper font-body px-6 sm:px-12 pt-16 pb-12 overflow-hidden">
      
      {/* Subtle Ambient Red Glow in the Background */}
      <div 
        className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand Info & About (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="p-2 bg-paper rounded-xl border border-white/10 group-hover:border-brand/50 transition-colors">
                <img src="/logo.png" alt="IADE" className="h-8 w-auto object-contain" />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl tracking-tight text-paper">IADE</h3>
                <p className="text-[11px] font-bold text-brand uppercase tracking-widest">
                  Academy of Digital Education
                </p>
              </div>
            </Link>

            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Bhopal's premier institute for Digital Marketing and Graphic Design. We build industry-ready skills through practical training and real live projects.
            </p>

            {/* Premium Dark Social Buttons */}
            <div className="flex gap-3 pt-1">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/theiadeacademy", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/iadeofficial/", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/87425894/admin/dashboard/", label: "LinkedIn" },
                { Icon: Youtube, href: "https://www.youtube.com/@iadeeducation", label: "YouTube" },
              ].map(({ Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-paper hover:bg-brand hover:border-brand transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/40"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <p className="font-display font-bold text-sm tracking-wider uppercase text-paper">
                Quick Links
              </p>
            </div>
            
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "All Courses", path: "/courses" },
                { name: "Contact", path: "/contact" },
                { name: "Gallery", path: "/gallery" },
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path} 
                    className="text-muted hover:text-paper hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:text-brand transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Courses (3 Columns) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <p className="font-display font-bold text-sm tracking-wider uppercase text-paper">
                Our Courses
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                { name: "Digital Marketing", path: "/courses/digital-marketing-master-class" },
                { name: "SEO (GEO + AEO)", path: "/courses/seo" },
                { name: "Graphic Designing", path: "/courses/graphics-designing-course" },
                { name: "Video Editing", path: "/courses/video-editing" },
                { name: "WordPress Development", path: "/courses/wordpress-development" },
              ].map((course, i) => (
                <li key={i}>
                  <Link 
                    to={course.path} 
                    className="text-muted hover:text-paper hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{course.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:text-brand transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info (3 Columns) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <p className="font-display font-bold text-sm tracking-wider uppercase text-paper">
                Get In Touch
              </p>
            </div>

            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-surface border border-white/5 text-brand shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-surface border border-white/5 text-brand shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-paper transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-surface border border-white/5 text-brand shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <a href={`tel:${CONTACT.phone1}`} className="hover:text-paper transition-colors">
                    {CONTACT.phone1}
                  </a>
                  <a href={`tel:${CONTACT.phone2}`} className="hover:text-paper transition-colors">
                    {CONTACT.phone2}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p className="font-mono">
            © {new Date().getFullYear()} <span className="text-paper font-semibold">IADE</span> — Indian Academy of Digital Education, Bhopal.
          </p>
          <p className="text-[11px] tracking-wider uppercase text-muted/70">
            Crafted for Digital Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}