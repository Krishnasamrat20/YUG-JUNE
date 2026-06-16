"use client";
import React from "react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import Link from "next/link";
import { Phone, FlaskConical, ClipboardCheck, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Phone,
    title: "Discovery Call",
    desc: "30-minute scoping session to understand your use case, data type, volume, and quality requirements.",
    color: "text-cyan-nebula",
    border: "border-cyan-nebula/25",
    glow: "bg-cyan-nebula/8",
  },
  {
    n: "02",
    icon: FlaskConical,
    title: "Pilot Project",
    desc: "We annotate or evaluate a representative sample of your actual data through our full 3-tier QA stack.",
    color: "text-violet-nebula",
    border: "border-violet-nebula/25",
    glow: "bg-violet-nebula/8",
  },
  {
    n: "03",
    icon: ClipboardCheck,
    title: "Quality Review",
    desc: "You receive a complete QA package: quality report, IAA metrics, reviewer notes, and recommendations.",
    color: "text-cyan-nebula",
    border: "border-cyan-nebula/25",
    glow: "bg-cyan-nebula/8",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Production Engagement",
    desc: "Satisfied with pilot quality? We scale to your full production volume with the same standards.",
    color: "text-violet-nebula",
    border: "border-violet-nebula/25",
    glow: "bg-violet-nebula/8",
  },
];

const deliverables = [
  "Quality Report",
  "IAA Metrics",
  "Reviewer Notes",
  "Improvement Recommendations",
];

export default function PilotSection() {
  return (
    <section className="py-32 bg-[#080815] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-cyan-nebula/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-cyan-nebula/20 text-cyan-nebula text-xs font-bold uppercase tracking-widest mb-2">
              How We Work
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-5xl lg:text-6xl font-outfit font-bold text-white">
              Pilot{" "}
              <span className="text-cyan-nebula">→</span>{" "}
              Validate{" "}
              <span className="text-cyan-nebula">→</span>{" "}
              Scale
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              We earn your trust before you commit. Every engagement starts with a risk-free pilot on your real data — no commitments, no guesswork.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1} direction="up">
              <div className={`glass p-8 h-full border ${step.border} group hover:border-opacity-70 transition-all duration-500 ${step.glow}`}>
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-4xl font-outfit font-bold ${step.color} opacity-20 group-hover:opacity-50 transition-opacity duration-500`}>
                    {step.n}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/15 hidden lg:block mt-1" />
                  )}
                </div>
                <step.icon className={`w-6 h-6 ${step.color} mb-5 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-lg font-outfit font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Deliverables panel */}
        <Reveal direction="up" delay={0.3}>
          <div className="glass p-10 border-cyan-nebula/15 bg-gradient-to-br from-cyan-nebula/5 to-transparent mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-outfit font-bold text-white mb-4">
                  What you receive from every pilot.
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Every pilot delivery includes a full documentation package — so you can evaluate quality independently and make an informed decision before any production commitment.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-nebula shrink-0" />
                    <span className="text-white font-bold">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6">
            <Magnetic strength={0.1}>
              <Link href="/contact" className="btn-primary px-10 py-4 rounded-full font-bold text-lg">
                Schedule Discovery Call
              </Link>
            </Magnetic>
            <Magnetic strength={0.1}>
              <Link href="/contact" className="glass px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Request Pilot Proposal
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
