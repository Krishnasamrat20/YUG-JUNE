"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import QASection from "@/components/QASection";
import Link from "next/link";

export default function QAPage() {
  return (
    <main className="bg-void-black min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-80" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-cyan-nebula/20 text-cyan-nebula text-xs font-bold uppercase tracking-widest mb-8">
              Quality Assurance
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[9rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula to-violet-nebula text-white">
                Validated
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mt-12 leading-relaxed">
              Our multi-tier QA framework ensures that every label meets the highest standards of accuracy and consistency.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main QA Section */}
      <QASection />

      {/* Framework Details */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <Reveal direction="left">
                <h2 className="text-5xl font-outfit font-bold text-white mb-8">The QA <span className="text-cyan-nebula">Framework.</span></h2>
                <p className="text-white/50 text-lg leading-relaxed">
                  Beyond manual review, we implement systematic checkpoints throughout the data lifecycle to maintain quality at scale.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid gap-6">
              {[
                { title: "Gold Sets", desc: "Pre-labeled reference items seeded into production batches to continuously assess accuracy." },
                { title: "Calibration", desc: "Regular alignment sessions to keep annotators synchronized with evolving guidelines." },
                { icon: CheckCircle2, title: "IAA Tracking", desc: "Inter-annotator agreement metrics tracked per-batch to identify guideline gaps." },
                { icon: CheckCircle2, title: "Full Audit Trails", desc: "Every annotation and review action is logged and traceable for compliance." }
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1} direction="up">
                  <div className="glass p-8 group hover:border-cyan-nebula/30 transition-all duration-500">
                    <h3 className="text-2xl font-outfit font-bold text-white mb-2 group-hover:text-cyan-nebula transition-colors">{item.title}</h3>
                    <p className="text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-[#050510] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <h2 className="text-5xl font-outfit font-bold text-white mb-8">Ready for Zero-Noise data?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-12 text-lg">Discuss your quality requirements and request a pilot batch today.</p>
            <Magnetic strength={0.15}>
              <Link href="/contact" className="btn-primary px-12 py-5 rounded-full font-bold text-xl">Request Pilot Proposal</Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
