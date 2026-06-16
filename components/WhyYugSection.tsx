"use client";
import React from "react";
import Reveal from "./Reveal";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Structured QA Framework",
    desc: "3-tier review — Annotator → Reviewer → QA Lead — with gold sets, IAA tracking, and full audit logs on every batch.",
    color: "text-cyan-nebula",
  },
  {
    title: "Founder-Led Delivery",
    desc: "Leadership is directly involved in every engagement. Your project is never handed off to junior managers.",
    color: "text-violet-nebula",
  },
  {
    title: "Pilot-First Engagements",
    desc: "We earn trust through results before production commitments. Every relationship starts with a scoped pilot on your actual data.",
    color: "text-cyan-nebula",
  },
  {
    title: "Transparent Reporting",
    desc: "Every delivery includes a QA report, IAA metrics, and reviewer notes. No black boxes, no hollow metrics.",
    color: "text-violet-nebula",
  },
  {
    title: "Evaluation-Focused Operations",
    desc: "AI evaluation and RLHF are the core of what we do — not a side service tacked on to a general annotation shop.",
    color: "text-cyan-nebula",
  },
  {
    title: "Human Feedback Expertise",
    desc: "Deep expertise in preference pair collection, calibration, and feedback pipeline design across expert domains.",
    color: "text-violet-nebula",
  },
];

export default function WhyYugSection() {
  return (
    <section className="py-32 bg-[#080815] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-nebula/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <Reveal direction="down">
            <h2 className="text-5xl lg:text-6xl font-outfit font-bold text-white">
              Why AI Teams Choose{" "}
              <span className="text-cyan-nebula">YUG AI</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              What separates a quality partner from a data vendor.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} direction="up">
              <div className="glass p-8 h-full group hover:border-white/20 transition-all duration-500">
                <CheckCircle2 className={`w-6 h-6 ${r.color} mb-5 shrink-0`} />
                <h3 className="text-lg font-outfit font-bold text-white mb-3">{r.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
