import SectionHeading from "../components/SectionHeading.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { CONTACT } from "../utils/data.js";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import EnrollCTA from "../components/EnrollCTA.jsx";

export default function Contact() {
  return (
    <main className="bg-ink min-h-screen text-paper overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-24 px-6 sm:px-10">
        {/* Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-brand text-xs font-bold uppercase tracking-[0.35em] mb-6">
              Contact IADE
            </p>

            <h1 className="font-display text-5xl sm:text-3xl lg:text-5xl font-bold uppercase leading-[0.9] tracking-tight">
              Let's Build
              <span className="block text-brand">Your Future.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-muted text-base sm:text-lg leading-relaxed">
              Have questions about our courses, batches, fees, placements,
              or career opportunities? Our team is here to help you choose
              the right path and get started with confidence.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 mt-16 border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-surface p-6 sm:p-8">
              <p className="text-2xl sm:text-3xl font-bold text-brand">
                7+
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                Years Experience
              </p>
            </div>

            <div className="bg-surface p-6 sm:p-8">
              <p className="text-2xl sm:text-3xl font-bold text-brand">
                100+
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                Happy Students
              </p>
            </div>

            <div className="bg-surface p-6 sm:p-8">
              <p className="text-2xl sm:text-3xl font-bold text-brand">
                10+
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                Career Courses
              </p>
            </div>

            <div className="bg-surface p-6 sm:p-8">
              <p className="text-2xl sm:text-3xl font-bold text-brand">
                24/7
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                Online Enquiry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT AREA ================= */}
      <section className="px-6 sm:px-10 pb-28">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">

            {/* ================= LEFT INFO ================= */}
            <div className="space-y-5">

              <div className="mb-8">
                <p className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-3">
                  Get In Touch
                </p>

                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
                  We're Here To
                  <span className="text-brand"> Help.</span>
                </h2>
              </div>

              {/* Address */}
              <div className="group bg-surface border border-white/10 rounded-2xl p-6 hover:border-brand/40 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-brand/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted mb-2">
                      Visit Us
                    </p>
                    <p className="text-sm leading-relaxed text-paper/90">
                      {CONTACT.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="group block bg-surface border border-white/10 rounded-2xl p-6 hover:border-brand/40 transition-all duration-300"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-brand/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted mb-1">
                      Email Us
                    </p>
                    <p className="text-sm text-paper/90 break-all">
                      {CONTACT.email}
                    </p>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                </div>
              </a>

              {/* Phone */}
              <div className="bg-surface border border-white/10 rounded-2xl p-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-brand/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted mb-2">
                      Call Us
                    </p>

                    <div className="space-y-1">
                      <a
                        href={`tel:${CONTACT.phone1}`}
                        className="block text-sm text-paper/90 hover:text-brand transition-colors"
                      >
                        {CONTACT.phone1}
                      </a>

                      <a
                        href={`tel:${CONTACT.phone2}`}
                        className="block text-sm text-paper/90 hover:text-brand transition-colors"
                      >
                        {CONTACT.phone2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918319578939"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 bg-brand rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-paper" />
                </div>

                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-paper/70">
                    Quick Response
                  </p>
                  <p className="font-bold mt-1">
                    Chat with us on WhatsApp
                  </p>
                </div>

                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Working Hours */}
              <div className="flex items-center gap-4 px-2 pt-3">
                <Clock className="w-5 h-5 text-brand" />

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Working Hours
                  </p>
                  <p className="text-sm text-paper/80 mt-1">
                    Monday – Saturday · 10:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* ================= FORM ================= */}
            <div className="relative">
              <div className="absolute -inset-1 bg-brand/10 blur-2xl rounded-3xl pointer-events-none" />

              <div className="relative bg-surface border border-white/10 rounded-3xl p-6 sm:p-10">
                <div className="mb-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-brand text-xs font-bold uppercase tracking-[0.3em] mb-3">
                        Start A Conversation
                      </p>

                      <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
                        Send Us A
                        <span className="text-brand"> Message.</span>
                      </h2>
                    </div>

                    <div className="hidden sm:flex w-12 h-12 rounded-full border border-brand/30 items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-brand" />
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mt-4 max-w-xl">
                    Fill out the form and tell us what you're looking for.
                    Our team will get back to you with the right information.
                  </p>
                </div>

                <ContactForm />

                {/* Trust Points */}
                <div className="grid sm:grid-cols-2 gap-3 mt-8 pt-7 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    Quick Response
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    Course Guidance
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    Batch Information
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    Career Assistance
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    <EnrollCTA />

    </main>
  );
}