import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Vision",
    description:
      "Jump on a quick call or fill out our brief. Tell us about your trade, your style, and what you want your website to do. No jargon, no tech talk.",
  },
  {
    number: "02",
    title: "We Build It Fast",
    description:
      "Our AI-powered workflow means your custom-coded site is designed, built, and polished in hours — not weeks. You review it and we refine until it's perfect.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    description:
      "We handle hosting, SEO, and ongoing updates. Your site goes live and starts generating leads while you focus on what you do best — your trade.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              How It Works
            </div>
            <h2 className="text-fluid-h2 text-white mb-4">
              Your New Website in
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {" "}
                Three Steps
              </span>
            </h2>
            <p className="text-fluid-body text-slate-400 max-w-xl mx-auto">
              We&apos;ve stripped away the bloat. Getting online has never been
              this simple.
            </p>
          </div>
        </ScrollReveal>

        {/* Three Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className="group relative rounded-2xl glass glow-border p-8 transition-all duration-200 hover:-translate-y-1 flex flex-col items-center text-center h-full">
                {/* Inner gradient glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Step Number Circle */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-150 shadow-lg shadow-brand-primary/20">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-fluid-h3 text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-fluid-small text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
