"use client";

import { useState, useEffect } from "react";

const rotatingWords = [
  "stand out online.",
  "dominate Google.",
  "win more jobs.",
  "look world-class.",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020617]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary radial glow - Top Center as in screenshot */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full bg-brand-primary/20 blur-[150px]" />
        
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
          stand out online.
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
            <p className="text-4xl font-extrabold text-white mb-2 group-hover:text-brand-primary transition-colors">100%</p>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Custom Built Sites</p>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-slate-800/50" />
          
          <div className="text-center group">
            <p className="text-4xl font-extrabold text-white mb-2 group-hover:text-brand-primary transition-colors">Zero</p>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Pre-Made Templates</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-slate-800/50" />

          <div className="text-center group">
            <p className="text-4xl font-extrabold text-white mb-2 group-hover:text-brand-primary transition-colors">7 days</p>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Design to Launch</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
    </section>
  );
}
