"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
          ? "py-3 bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-150">
            TS
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Tradie Site Co
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-150 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-150 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-all duration-150 hover:-translate-y-0.5"
          >
            Claim Your AI-Powered Site
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-150 ${mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-150 ${mobileOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-150 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-4 glass-strong mt-2 mx-4 rounded-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-300 hover:text-white text-base font-medium transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-all duration-150 mt-2"
          >
            Claim Your AI-Powered Site
          </a>
        </div>
      </div>
    </nav>
  );
}
