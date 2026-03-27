import ScrollReveal from "@/components/ScrollReveal";

const included = [
  "Bespoke website design & development",
  "Managed cloud hosting (99.9% uptime)",
  "Monthly content & design updates",
  "SEO optimization & Google Business setup",
  "SSL security certificate",
  "Mobile-first responsive design",
  "Analytics dashboard access",
  "Priority email & phone support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Simple Pricing
            </div>
            <h2 className="text-fluid-h2 text-white mb-4">
              One Plan.
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {" "}
                Everything Included.
              </span>
            </h2>
            <p className="text-fluid-body text-slate-400 max-w-xl mx-auto">
              No hidden fees. No lock-in contracts. Cancel anytime.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Card */}
        <ScrollReveal delay={100}>
          <div>
            <div className="relative group rounded-3xl glass glow-border p-10 transition-all duration-200">
              {/* Inner gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left column — Plan info & CTA */}
                <div className="flex flex-col">
                  {/* Plan label */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    Growth Plan
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                      $150
                    </span>
                    <span className="text-slate-400 text-lg font-medium">/mo</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-8">
                    + one-time $300 setup &amp; onboarding fee
                  </p>

                  <div className="mt-auto">
                    {/* CTA */}
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-primary hover:bg-[#00e692] text-slate-950 text-sm font-bold rounded-xl transition-all duration-150 hover:-translate-y-0.5"
                    >
                      Claim Your AI-Powered Site
                    </a>
                    <p className="text-slate-600 text-xs text-center mt-3">
                      No lock-in contracts. Cancel anytime.
                    </p>
                  </div>
                </div>

                {/* Right column — Features list */}
                <div className="md:border-l md:border-slate-700/50 md:pl-10">
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">
                    Everything Included
                  </p>
                  <ul className="space-y-4">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-brand-primary shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
