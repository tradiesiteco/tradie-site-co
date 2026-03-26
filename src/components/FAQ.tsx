"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Do I own my domain?",
    answer:
      "Absolutely. Your domain is registered in your name and you retain full ownership at all times. If you ever decide to leave, we'll transfer everything to you — no questions asked.",
  },
  {
    question: "How do we update photos or content?",
    answer:
      "Simply send us the new photos or text via email and we'll have it updated within 24-48 business hours. Need it faster? Just let us know. Content changes are included in your monthly subscription.",
  },
  {
    question: "Why a subscription instead of a one-off build?",
    answer:
      "A one-off build gets you a snapshot in time that immediately starts ageing. Our subscription model means your site stays current with ongoing updates, security patches, SEO optimizations, and design refreshes — all included. Think of it as having a full-time web team for a fraction of the cost.",
  },
  {
    question: "What happens if I want to cancel?",
    answer:
      "No lock-in contracts. You can cancel your subscription at any time. We'll export your site files and help with any transition you need. We believe our value should keep you, not a contract.",
  },
  {
    question: "How fast can my site go live?",
    answer:
      "Most sites go live within 48-72 hours from our initial briefing call. Our AI-powered workflow handles the heavy lifting, while our local team ensures every detail is polished for your specific trade and suburb.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="text-fluid-h2 text-white mb-4">
              Got
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Questions?
              </span>
            </h2>
            <p className="text-fluid-body text-slate-400">
              Here are the answers to the most common ones.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="rounded-2xl glass glow-border transition-all duration-150 overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left cursor-pointer group"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-white font-medium text-base pr-4 group-hover:text-blue-400 transition-colors duration-150">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-150 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-7 pb-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4" />
                    <p className="text-slate-400 text-fluid-small leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
