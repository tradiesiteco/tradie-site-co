"use client";

import { useState, useEffect } from "react";

const rotatingWords = [
  "stand out online.",
  "dominate Google.",
  "win more jobs.",
  "look world-class.",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary radial glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-500/10 blur-[120px] animate-glow-pulse" />
        {/* Secondary accent glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-400/5 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Headline */}
        <h1 className="text-fluid-display text-white animate-slide-up mb-6">
          Your trade deserves to
          <br />
          <span className="inline-block overflow-hidden h-[1.3em] align-bottom relative">
            <span
              key={currentIndex}
              className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-slide-up-in"
            >
              {rotatingWords[currentIndex]}
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-fluid-body text-slate-400 max-w-2xl mx-auto mb-10 animate-slide-up-delay">
          We build fast, stunning, AI-powered websites for plumbers,
          electricians, builders, and every trade in between. Stop losing jobs to
          competitors.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-all duration-150 hover:-translate-y-0.5"
          >
            See Our Demo Sites
            <svg
              className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-150 hover:bg-white/5 hover:-translate-y-0.5"
          >
            Get a Quote
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 animate-fade-in flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            "99.9% Uptime",
            "Zero-Tech-Stress Guarantee",
            "Cancel Anytime",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-slate-500 text-sm"
            >
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
