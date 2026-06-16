"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { Swords, AlertTriangle, Bug, Layers, Wrench, ScrollText, ArrowLeft } from "lucide-react";

const features = [
  { icon: Swords,        title: "Jailbreak Testing",              desc: "Systematic prompting to identify vulnerabilities in safety filters and refusal mechanisms." },
  { icon: AlertTriangle, title: "Harmful Output Elicitation",     desc: "Structured adversarial testing designed to surface harmful, biased, or policy-violating outputs." },
  { icon: Bug,           title: "Failure Mode Analysis",          desc: "Documenting edge cases, failure patterns, and model weaknesses with reproducible examples." },
  { icon: Layers,        title: "Risk Matrix",                    desc: "Structured risk assessment categorizing failure modes by severity and frequency." },
  { icon: Wrench,        title: "Mitigation Recommendations",     desc: "Actionable recommendations for fine-tuning, RLHF, or safety layer improvements." },
  { icon: ScrollText,    title: "Attack Logs",                    desc: "Full documentation of adversarial prompts, model responses, and classification decisions." },
];

export default function RedTeamPage() {
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
              Safety
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[9rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Red <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula to-violet-nebula text-white">
                Teaming
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mt-12 leading-relaxed mb-12">
              Adversarial testing of AI systems to identify failure modes, jailbreaks, harmful outputs, and safety-critical vulnerabilities before deployment.
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
            <h2 className="text-4xl font-outfit font-bold text-white mb-6">Ready to stress-test your model?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10">Discuss your threat model and we&apos;ll design a targeted red team campaign.</p>
            <Magnetic strength={0.15}>
              <Link href="/contact" className="btn-primary px-12 py-5 rounded-full font-bold text-lg">Discuss Your Red Teaming Needs</Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
