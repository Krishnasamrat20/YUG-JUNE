"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  { href:'/services/ai-evaluation', title:'AI Evaluation', tag:'Evaluation', desc:'Systematic assessment of AI model outputs for quality, safety, and alignment.' },
  { href:'/services/rlhf',          title:'RLHF Data Collection', tag:'RLHF', desc:'Human preference data for reinforcement learning from human feedback.' },
  { href:'/services/data-annotation', title:'Data Annotation', tag:'Annotation', desc:'High-accuracy labeling across image, video, text, and audio.' },
  { href:'/services/red-teaming',   title:'Red Teaming & Safety Testing', tag:'Safety', desc:'Adversarial testing to surface failure modes and unsafe outputs.' },
  { href:'/quality-assurance', title:'Quality Assurance', tag:'QA', desc:'3-tier QA model with gold sets, IAA tracking, and audit logs.' },
  { href:'/contact',                title:'Workflow Consulting', tag:'Strategy', desc:'Taxonomy design, guideline authoring, and annotation workflow architecture.' },
];

export default function ServicesPage() {
  return (
    <main className="bg-void-black min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-80" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-cyan-nebula/20 text-cyan-nebula text-xs font-bold uppercase tracking-widest mb-8">
              Services
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[9rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Full-stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula to-violet-nebula text-white">
                AI Ops.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mt-12 leading-relaxed mb-12">
              From evaluation rubrics to delivery-ready datasets — we handle the full spectrum of AI data operations.
            </p>
          </Reveal>
          <Reveal delay={0.6} direction="none">
            <div className="flex flex-wrap justify-center gap-6">
              <Magnetic strength={0.1}>
                <Link href="/contact" className="btn-primary px-10 py-4 rounded-full font-bold">Schedule Discovery Call</Link>
              </Magnetic>
              <Magnetic strength={0.1}>
                <Link href="/contact" className="glass px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Request Pilot Proposal</Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-6">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.1} direction="up">
                <Link 
                  href={svc.href}
                  className="glass p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:border-white/20 transition-all duration-500 bg-gradient-to-r hover:from-cyan-nebula/5 hover:to-transparent"
                >
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <h2 className="text-3xl font-outfit font-bold text-white">{svc.title}</h2>
                      <span className="px-3 py-1 rounded-full bg-cyan-nebula/10 text-cyan-nebula text-[10px] font-bold uppercase tracking-widest border border-cyan-nebula/20">
                        {svc.tag}
                      </span>
                    </div>
                    <p className="text-white/50 text-lg leading-relaxed max-w-3xl">{svc.desc}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-white/20 group-hover:text-cyan-nebula group-hover:scale-110 transition-all duration-500 shrink-0">
                    <ChevronRight size={32} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-[#080815] border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <h2 className="text-5xl font-outfit font-bold text-white mb-8">Start with a free pilot.</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-12 text-lg">No commitment. Validate quality on your actual data before scaling.</p>
            <Magnetic strength={0.15}>
              <Link href="/contact" className="btn-primary px-12 py-5 rounded-full font-bold text-xl">Request a Pilot Proposal</Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
