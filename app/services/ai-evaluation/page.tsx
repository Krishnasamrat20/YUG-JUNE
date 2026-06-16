"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { BarChart2, Users, GitCompare, ShieldAlert, Activity, FileBarChart, ArrowLeft } from "lucide-react";

const features = [
  { icon: BarChart2,    title: "Evaluation Rubric Design", desc: "We work with your team to design structured rubrics covering quality dimensions relevant to your model and use case." },
  { icon: Users,        title: "Scored Outputs",            desc: "Human evaluators score model outputs against defined criteria — with documented reasoning and calibrated scoring." },
  { icon: GitCompare,   title: "Comparative Evaluation",    desc: "Side-by-side comparison of model versions, checkpoints, or competing models using consistent human judgment." },
  { icon: ShieldAlert,  title: "Safety & Alignment Review", desc: "Structured review for harmful content, refusal behavior, hallucination, and alignment with intended behavior." },
  { icon: Activity,     title: "IAA-Validated Results",     desc: "Inter-annotator agreement measured on all evaluation batches to ensure consistency and statistical reliability." },
  { icon: FileBarChart, title: "Quality Dashboards",        desc: "Structured delivery of evaluation results with error category breakdowns and improvement recommendations." },
];

export default function AIEvalPage() {
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
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-cyan-nebula/20 text-cyan-nebula text-xs font-bold uppercase tracking-widest mb-8">
              Evaluation
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[9rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula to-violet-nebula text-white">
                Evaluation
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mt-12 leading-relaxed mb-12">
              Systematic assessment of AI model outputs across quality, safety, coherence, and alignment dimensions. Designed for teams running evaluation at production scale.
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
                <div className="glass p-8 h-full group hover:border-cyan-nebula/30 transition-all duration-500">
                  <f.icon className="w-8 h-8 text-cyan-nebula mb-6 group-hover:scale-110 transition-transform" />
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
            <h2 className="text-4xl font-outfit font-bold text-white mb-6">Ready to evaluate your model?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10">Start with a free pilot batch. No commitment required.</p>
            <Magnetic strength={0.15}>
              <Link href="/contact" className="btn-primary px-12 py-5 rounded-full font-bold text-lg">Request an AI Evaluation Pilot</Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
