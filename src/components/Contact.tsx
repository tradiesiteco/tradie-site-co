"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const trades = [
  "Select your trade",
  "Plumber",
  "Electrician",
  "Roofer",
  "Landscaper",
  "Builder",
  "Painter",
  "Carpenter",
  "Tiler",
  "Concreter",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    trade: "",
    suburb: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Get Started
            </div>
            <h2 className="text-fluid-h2 text-white mb-4">
              Ready to
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {" "}
                Dominate
              </span>{" "}
              Your Local Market?
            </h2>
            <p className="text-fluid-body text-slate-400 max-w-2xl mx-auto">
              Drop your details and we&apos;ll reach out within 24 hours with a
              free strategy call.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={150}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-150 text-sm"
                />
                <select
                  name="trade"
                  required
                  value={formData.trade}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-150 text-sm appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.25rem 1.25rem",
                  }}
                >
                  {trades.map((trade) => (
                    <option
                      key={trade}
                      value={trade === "Select your trade" ? "" : trade}
                      disabled={trade === "Select your trade"}
                    >
                      {trade}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="suburb"
                  placeholder="Your suburb"
                  required
                  value={formData.suburb}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-150 text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-150 text-sm"
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-primary hover:bg-[#00e692] text-slate-950 font-bold rounded-xl transition-all duration-150 hover:-translate-y-0.5 text-sm cursor-pointer shadow-lg shadow-brand-primary/20"
                >
                  Claim Your AI-Powered Site
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl glass p-12 text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-brand-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                We&apos;ve Got Your Details!
              </h3>
              <p className="text-slate-400 text-sm">
                Expect a call from our team within 24 hours. In the meantime,
                check your inbox.
              </p>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
