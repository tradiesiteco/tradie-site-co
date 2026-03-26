"use client";

import { useState, useEffect } from "react";

const rotatingWords = [
  "stand out online.",
  "dominate Google.",
  "win more jobs.",
  "look world-class.",
];

/**
 * Counter-up component for stats
 */
function Counter({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
      current += increment;
      setCount(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020617]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary radial glow - Wider and Brighter version of original layout */}
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1300px] h-[1000px] rounded-full bg-brand-primary/30 blur-[160px]" />

        {/* Secondary accent glow - Original layout */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-secondary/10 blur-[100px]" />

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
        <h1 className="text-fluid-display text-white animate-slide-up mb-8 font-extrabold tracking-tight">
          Your trade deserves to
          <br />
          <span className="inline-block overflow-hidden h-[1.3em] align-bottom relative">
            <span
              key={currentIndex}
              className="inline-block bg-gradient-to-r from-brand-primary via-brand-primary/90 to-brand-secondary bg-clip-text text-transparent animate-slide-up-in"
            >
              {rotatingWords[currentIndex]}
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-fluid-body text-slate-300 max-w-2xl mx-auto mb-12 animate-slide-up-delay leading-relaxed">
          We build fast, stunning, AI-powered websites for plumbers,
          electricians, builders, and every trade in between. Stop losing jobs to
          competitors.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay mb-20">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-[#00e692] text-slate-950 font-bold rounded-xl transition-all duration-150 hover:-translate-y-0.5"
          >
            Get My Free Website
            <svg
              className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1"
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
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-50 text-slate-950 font-bold rounded-xl hover:bg-white transition-all duration-150 hover:-translate-y-0.5"
          >
            See How It Works
          </a>
        </div>

        {/* Statistics Block from Screenshot */}
        <div className="animate-fade-in flex flex-wrap items-center justify-center gap-12 sm:gap-20 py-8 border-t border-slate-800/50">
          <div className="text-center group">
            <p className="text-4xl font-extrabold text-white mb-2 group-hover:text-brand-primary transition-colors">
              <Counter target={100} suffix="%" />
            </p>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Custom Built Sites</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-slate-800/50" />

          <div className="text-center group">
            <p className="text-4xl font-extrabold text-white mb-2 group-hover:text-brand-primary transition-colors">Zero</p>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Pre-Made Templates</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-slate-800/50" />

          <div className="text-center group">
            <p className="text-4xl font-extrabold text-white mb-2 group-hover:text-brand-primary transition-colors">
              <Counter target={7} suffix=" days" />
            </p>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Design to Launch</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - starts around stats block */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent" />
    </section>
  );
}
