"use client";
import React from "react";
import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Taxonomy",    desc: "Define label schema, entity types, and classification hierarchies tailored to your model's needs." },
  { n: "02", title: "Guidelines",  desc: "Author detailed annotation instructions with examples, edge cases, and calibration items." },
  { n: "03", title: "Calibration", desc: "Align annotators through guided calibration sessions before any production work begins." },
  { n: "04", title: "Annotation",  desc: "Execute labeling at scale with trained specialists following your taxonomy and guidelines." },
  { n: "05", title: "Review",      desc: "Senior reviewer inspects every annotator submission for errors and guideline compliance." },
  { n: "06", title: "QA",          desc: "QA Lead validates the batch, measures inter-annotator agreement, and reviews gold set performance." },
  { n: "07", title: "Delivery",    desc: "Export-ready datasets with QA report, IAA metrics, reviewer notes, and full audit documentation." },
];

export default function WorkflowSection() {
  return (
    <section className="py-32 bg-void-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-nebula/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <Reveal direction="down">
            <h2 className="text-5xl lg:text-6xl font-outfit font-bold text-white">
              How YUG AI Delivers <span className="text-violet-nebula">Quality.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              Every project follows the same structured, traceable pipeline — no shortcuts, no black boxes.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical connector line (desktop: left-side; always visible) */}
          <div className="absolute left-[2.35rem] top-6 bottom-6 w-px bg-gradient-to-b from-cyan-nebula/30 via-violet-nebula/30 to-cyan-nebula/10 hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <Reveal key={step.n} delay={i * 0.08} direction="left">
                  <div className="flex gap-6 items-start group">

                    {/* Step node */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-[4.7rem] h-[4.7rem] rounded-2xl flex flex-col items-center justify-center border transition-all duration-500 group-hover:scale-105 ${
                        isLast
                          ? "bg-cyan-nebula/15 border-cyan-nebula/50"
                          : "bg-white/4 border-white/12 group-hover:border-violet-nebula/40 group-hover:bg-violet-nebula/8"
                      }`}>
                        <span className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${isLast ? "text-cyan-nebula" : "text-white/30"}`}>
                          {step.n}
                        </span>
                        <span className={`text-sm font-outfit font-bold ${isLast ? "text-cyan-nebula" : "text-white group-hover:text-violet-nebula transition-colors"}`}>
                          {step.title}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 glass p-6 transition-all duration-500 group-hover:border-white/20 ${isLast ? "border-cyan-nebula/20 bg-cyan-nebula/5" : ""}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-outfit font-bold text-white">{step.title}</h3>
                        {isLast && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-nebula/15 text-cyan-nebula text-[10px] font-bold uppercase tracking-widest border border-cyan-nebula/30">
                            Final
                          </span>
                        )}
                      </div>
                      <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
