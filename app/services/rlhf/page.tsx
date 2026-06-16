"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { ThumbsUp, List, MessageSquare, BookOpen, Target, BarChart2, ArrowLeft } from "lucide-react";

const features = [
  { icon: ThumbsUp,    title: "Preference Pair Collection", desc: "Structured collection of A/B preference pairs from calibrated human raters — with documented reasoning." },
  { icon: List,        title: "Response Ranking",           desc: "Multi-response ranking tasks for reward model training across quality, safety, and helpfulness dimensions." },
  { icon: MessageSquare, title: "Feedback Annotation",      desc: "Detailed human feedback annotation on model responses — covering specific strengths, weaknesses, and correction suggestions." },
  { icon: BookOpen,    title: "Domain Specialization",      desc: "RLHF data collection by domain specialists for code, medicine, law, finance, and other expert domains." },
  { icon: Target,      title: "Calibration & Alignment",    desc: "Rater calibration sessions ensure consistent preference signals that translate reliably to reward model training." },
  { icon: BarChart2,   title: "IAA Reports",                desc: "Inter-annotator agreement on all RLHF batches — measured and reported to validate data quality before delivery." },
];

export default function RLHFPage() {
  return (
    <main className="bg-void-black min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-80" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="down">
            <Link href="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-cyan-nebula text-xs uppercase tracking-widest font-bold mb-10 transition-colors">
              <ArrowLeft size={14} /> All Services
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-violet-nebula/20 text-violet-nebula text-xs font-bold uppercase tracking-widest mb-8">
              RLHF
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[9rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              RLHF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-nebula to-cyan-nebula text-white">
                Data
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mt-12 leading-relaxed mb-12">
              Human preference data collection for reinforcement learning from human feedback pipelines. Calibrated, consistent, and designed for reward model training.
            </p>
          </Reveal>
          <Reveal delay={0.55} direction="none">
            <div className="flex flex-wrap gap-6">
              <Magnetic strength={0.1}>
                <Link href="/contact" className="btn-primary px-10 py-4 rounded-full font-bold">Schedule a Discovery Call</Link>
              </Magnetic>
              <Magnetic strength={0.1}>
                <Link href="/contact" className="glass px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Request Pilot</Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl font-outfit font-bold text-white mb-16">What we deliver</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} direction="up">
                <div className="glass p-8 h-full group hover:border-violet-nebula/30 transition-all duration-500">
                  <f.icon className="w-8 h-8 text-violet-nebula mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-outfit font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#080815] border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <h2 className="text-4xl font-outfit font-bold text-white mb-6">Ready to build your RLHF dataset?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10">Start with a calibration pilot. No commitment required.</p>
            <Magnetic strength={0.15}>
              <Link href="/contact" className="btn-primary px-12 py-5 rounded-full font-bold text-lg">Request an RLHF Pilot</Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
