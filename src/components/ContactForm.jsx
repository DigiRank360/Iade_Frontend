import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / form service of choice.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand/40 bg-surface p-8 text-center">
        <p className="font-display font-bold text-xl text-brand">Thanks — we'll reach out shortly.</p>
        <p className="text-muted mt-2 text-sm">You can also WhatsApp us directly for a faster response.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full name"
        required
        className="w-full rounded-lg bg-surface border border-white/10 px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-brand"
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone number"
        required
        className="w-full rounded-lg bg-surface border border-white/10 px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-brand"
      />
      <input
        name="course"
        value={form.course}
        onChange={handleChange}
        placeholder="Course you're interested in"
        className="w-full rounded-lg bg-surface border border-white/10 px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-brand"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows={4}
        className="w-full rounded-lg bg-surface border border-white/10 px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-brand"
      />
      <button
        type="submit"
        className="w-full rounded-full bg-brand text-paper px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
}
