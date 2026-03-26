"use client";

import ScrollReveal from "@/components/ScrollReveal";

const serviceAreas = [
  "Ringwood",
  "Croydon",
  "Mitcham",
  "Box Hill",
  "Glen Waverley",
  "Doncaster",
  "Blackburn",
  "Nunawading",
  "Healesville",
  "Lilydale",
];

export default function Footer() {
  return (
    <footer className="relative py-16 sm:py-24 border-t border-slate-800/50 bg-slate-950/50">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
          {/* Branding */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                TS
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Tradie Site Co
              </span>
            </div>
            <p className="text-slate-400 text-fluid-small mb-8 max-w-sm">
              Agency-quality websites built for Melbourne trades. enterprise-grade AI meets local expertise to help you dominate your local market.
            </p>
            <div className="flex items-center gap-4">
               {/* Quick Links could go here if needed, or social icons */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-slate-200 text-sm font-bold uppercase tracking-widest mb-6">
              Contact Us
            </p>
            <div className="space-y-4">
              <a
                href="mailto:tradiesiteco@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors duration-150 text-sm group"
              >
                <svg
                  className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                tradiesiteco@gmail.com
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm leading-relaxed">
                <svg
                  className="w-4 h-4 text-slate-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Ringwood, VIC — Serving Melbourne&apos;s Eastern Suburbs
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <svg
                  className="w-4 h-4 text-slate-600 shadow-sm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Mon - Fri, 8:00am - 5:00pm
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <p className="text-slate-200 text-sm font-bold uppercase tracking-widest mb-6">
              Service Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-500 text-[10px] font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Tradie Site Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
