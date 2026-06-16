"use client";
import React from "react";
import Reveal from "./Reveal";
import { Rocket, Brain, Layers, Database, FlaskConical } from "lucide-react";

const profiles = [
  {
    icon: Brain,
    title: "LLM Teams",
    label: "Language Model Development",
    desc: "Building, fine-tuning, or aligning large language models. You need preference data, evaluation benchmarks, and safety annotation — at consistent quality and throughput.",
    color: "text-cyan-nebula",
    border: "border-cyan-nebula/20",
    bg: "bg-cyan-nebula/5",
  },
  {
    icon: Rocket,
    title: "AI Startups",
    label: "Early-Stage AI Companies",
    desc: "Moving fast on a tight runway. You need a reliable human data partner who doesn't require enterprise contracts and can start with a focused pilot.",
    color: "text-violet-nebula",
    border: "border-violet-nebula/20",
    bg: "bg-violet-nebula/5",
  },
  {
    icon: Layers,
    title: "AI Product Organizations",
    label: "AI-Integrated Products",
    desc: "Shipping AI features to real users. You need ongoing human evaluation, red teaming, and feedback loops to keep model behavior aligned with product expectations.",
    color: "text-cyan-nebula",
    border: "border-cyan-nebula/20",
    bg: "bg-cyan-nebula/5",
  },
  {
    icon: Database,
    title: "Data Operations Teams",
    label: "Internal Data Teams",
    desc: "Running annotation workflows in-house but need a trusted QA layer, reviewer capacity, or structured process for edge case handling and audit trails.",
    color: "text-violet-nebula",
    border: "border-violet-nebula/20",
    bg: "bg-violet-nebula/5",
  },
  {
    icon: FlaskConical,
    title: "Research Labs",
    label: "Academic & Applied Research",
    desc: "Publishing benchmarks, studying model behavior, or annotating specialized corpora. You need domain-calibrated annotators and reliable inter-annotator agreement.",
    color: "text-cyan-nebula",
    border: "border-cyan-nebula/20",
    bg: "bg-cyan-nebula/5",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="py-32 bg-[#050510] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-nebula/4 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <Reveal direction="down">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-nebula mb-4">
              Designed For
            </p>
            <h2 className="text-5xl lg:text-6xl font-outfit font-bold text-white">
              Who We Work With.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/45 max-w-xl mx-auto text-lg">
              We partner with teams that take data quality seriously and need a human intelligence operation they can trust.
            </p>
          </Reveal>
        </div>

        {/* 3-col top row, 2-col bottom row centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {profiles.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} direction="up">
              <ProfileCard p={p} />
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {profiles.slice(3).map((p, i) => (
            <Reveal key={p.title} delay={(i + 3) * 0.1} direction="up">
              <ProfileCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ p }: { p: typeof profiles[number] }) {
  return (
    <div className={`glass p-8 h-full group hover:border-white/20 transition-all duration-500 ${p.border} ${p.bg}`}>
      <div className="flex items-start gap-5 mb-5">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${p.border} shrink-0`}>
          <p.icon className={`w-5 h-5 ${p.color}`} />
        </div>
        <div>
          <p className={`text-[9px] font-bold uppercase tracking-[0.3em] ${p.color} mb-1`}>{p.label}</p>
          <h3 className="text-xl font-outfit font-bold text-white">{p.title}</h3>
        </div>
      </div>
      <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
    </div>
  );
}
