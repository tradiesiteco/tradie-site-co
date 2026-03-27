"use client";

import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "Melbourne Elite Plumbing",
    trade: "Plumber",
    image: "/portfolio/plumber_new.png",
    description: "Full website build with 24/7 booking system and local SEO.",
  },
  {
    title: "Spark Pro Electrical",
    trade: "Electrician",
    image: "/portfolio/electrician_new.png",
    description: "Conversion-focused site with emergency callout integration.",
  },
  {
    title: "Apex Constructions",
    trade: "Builder",
    image: "/portfolio/builder_new.png",
    description: "Portfolio showcase with project galleries and quote forms.",
  },
  {
    title: "Verdant Edge Landscapes",
    trade: "Landscaper",
    image: "/portfolio/landscaper_new.png",
    description: "Image-rich design with before/after project sliders.",
  },
  {
    title: "Summit Roofing Co",
    trade: "Roofer",
    image: "/portfolio/roofer_new.png",
    description: "Lead-generation site with instant quote calculator.",
  },
  {
    title: "Precision Painters",
    trade: "Painter",
    image: "/portfolio/painter_new.png",
    description: "Elegant portfolio with colour palette inspiration tools.",
  },
];

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.offsetWidth * 0.6;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="our-work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Portfolio
            </div>
            <h2 className="text-fluid-h2 text-white mb-6">
              Websites That
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {" "}
                Win Jobs.
              </span>
            </h2>
            <p className="text-fluid-body text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Real sites we&apos;ve built for real trades businesses across
              Melbourne. Every one designed to convert visitors into paying
              customers.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrollable Portfolio Slider */}
      <div className="relative mx-auto max-w-7xl px-6 group/slider">
        {/* Navigation Arrows - Ends of Slider */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-xl border border-slate-700 bg-slate-950/50 backdrop-blur-md hover:border-brand-primary/50 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-150 hover:bg-white/5 cursor-pointer group/arrow hidden md:flex"
          aria-label="Scroll left"
        >
          <svg
            className="w-5 h-5 transition-transform duration-150 group-hover/arrow:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-xl border border-slate-700 bg-slate-950/50 backdrop-blur-md hover:border-brand-primary/50 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-150 hover:bg-white/5 cursor-pointer group/arrow hidden md:flex"
          aria-label="Scroll right"
        >
          <svg
            className="w-5 h-5 transition-transform duration-150 group-hover/arrow:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <ScrollReveal delay={100}>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative shrink-0 w-[calc(33.333%-1rem)] min-w-[300px] snap-start"
              >
                <div className="rounded-2xl overflow-hidden glass glow-border transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden w-full">
                    <Image
                      src={project.image}
                      alt={`${project.title} website`}
                      fill
                      className="object-cover object-top transition-transform duration-150"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Trade pill badge */}
                    <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-slate-950 font-bold text-[10px] uppercase tracking-widest shadow-lg backdrop-blur-md">
                      {project.trade}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-primary transition-colors duration-150">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
