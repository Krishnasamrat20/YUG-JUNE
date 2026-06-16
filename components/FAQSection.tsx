"use client";
import React, { useState } from "react";
import Reveal from "./Reveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do you ensure quality?",
    a: "Through our 3-tier QA framework: every annotation passes through an Annotator, a Senior Reviewer, and a QA Lead. We seed production batches with pre-labeled gold sets to continuously measure annotator accuracy, track inter-annotator agreement (IAA) on every batch, and provide full audit logs with every delivery.",
  },
  {
    q: "How do pilot projects work?",
    a: "We scope a representative sample of your actual data — typically 100–500 items. Our full QA pipeline runs on that sample and you receive a complete delivery package: labeled data, quality report, IAA metrics, reviewer notes, and improvement recommendations. No commitment required beyond the pilot itself.",
  },
  {
    q: "Do you support RLHF?",
    a: "Yes. RLHF data collection is one of our core specializations. We support preference pair collection, multi-response ranking tasks, detailed feedback annotation, and domain-specific RLHF for code, medicine, law, finance, and other expert domains — all with calibration sessions and IAA reporting.",
  },
  {
    q: "Do you support multilingual projects?",
    a: "Yes. We support multilingual annotation, evaluation, and RLHF data collection. Contact us with your target languages and volume — we will confirm annotator availability and run a calibration check before committing to production.",
  },
  {
    q: "Can you work with our existing tools?",
    a: "Yes. We adapt to your annotation platform, data format, and delivery preferences. We support Label Studio, Scale AI, custom in-house platforms, and standard export formats including JSON, CSV, JSONL, and COCO. If your platform is different, let us know and we will assess compatibility.",
  },
  {
    q: "How do you protect client data?",
    a: "Every team member signs an NDA before any project begins. Projects are fully isolated from each other with role-based access controls and complete access logs. We can also operate within your secure cloud environment or VPN on request for sensitive engagements.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-void-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <Reveal direction="down">
              <h2 className="text-5xl font-outfit font-bold text-white">
                Frequently Asked{" "}
                <span className="text-cyan-nebula">Questions</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-white/50 text-lg">
                Everything you need to know before getting started.
              </p>
            </Reveal>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06} direction="up">
                <div
                  className={`border rounded-[20px] overflow-hidden transition-all duration-300 ${
                    open === i
                      ? "border-cyan-nebula/30 bg-white/3"
                      : "border-white/8 hover:border-white/18 bg-white/2"
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-7 py-6 text-left gap-6"
                  >
                    <span className="font-outfit font-bold text-white text-lg leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        open === i
                          ? "border-cyan-nebula/40 bg-cyan-nebula/10"
                          : "border-white/15"
                      }`}
                    >
                      {open === i
                        ? <Minus className="w-3.5 h-3.5 text-cyan-nebula" />
                        : <Plus className="w-3.5 h-3.5 text-white/40" />
                      }
                    </div>
                  </button>

                  {open === i && (
                    <div className="px-7 pb-7">
                      <p className="text-white/55 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
