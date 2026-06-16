"use client";
import React from "react";
import Reveal from "./Reveal";
import { FileText, Users, Pencil, Search, ShieldCheck, BarChart2 } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Guideline Design",
    desc: "Taxonomy definition and detailed annotation instructions authored before any production work begins.",
  },
  {
    icon: Users,
    title: "Calibration Sessions",
    desc: "Annotator alignment training run at project start and periodically throughout to prevent drift.",
  },
  {
    icon: Pencil,
    title: "Production Annotation",
    desc: "Specialist annotators execute labeling under your taxonomy with continuous self-review at source.",
  },
  {
    icon: Search,
    title: "Multi-Tier Review",
    desc: "Every submission reviewed by a senior reviewer before it advances to QA for final validation.",
  },
  {
    icon: ShieldCheck,
    title: "QA & Measurement",
    desc: "Gold sets, IAA tracking, and error-rate measurement applied to every batch before delivery.",
  },
  {
    icon: BarChart2,
    title: "Delivery Reporting",
    desc: "Export-ready datasets shipped with a QA report, IAA metrics, reviewer notes, and full audit trail.",
  },
];

export default function MethodologySection() {
  return (
    <section className="py-32 bg-void-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-nebula/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: heading + context */}
          <div className="space-y-8">
            <Reveal direction="left">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-violet-nebula">
                Our Standard
              </p>
              <h2 className="text-5xl lg:text-6xl font-outfit font-bold text-white mt-4 leading-tight">
                Every Project <br />
                <span className="text-violet-nebula">Includes.</span>
              </h2>
            </Reveal>
            <Reveal direction="left" delay={0.15}>
              <p className="text-white/45 text-lg leading-relaxed max-w-md">
                These six steps aren't optional. Every engagement — regardless of size — runs this same structured pipeline.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.25}>
              <div className="glass border-violet-nebula/20 bg-violet-nebula/5 p-6 rounded-2xl max-w-md">
                <p className="text-white/70 text-sm leading-relaxed italic">
                  "We built this process after seeing what goes wrong when annotation teams skip steps. The methodology isn't overhead — it's the product."
                </p>
                <p className="text-violet-nebula text-xs font-bold uppercase tracking-widest mt-4">
                  — YUG AI Co-Founders
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: checklist grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.09} direction="up">
                <div className="glass p-6 h-full group hover:border-violet-nebula/30 transition-all duration-500">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-violet-nebula/10 border border-violet-nebula/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-violet-nebula" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="text-base font-outfit font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
