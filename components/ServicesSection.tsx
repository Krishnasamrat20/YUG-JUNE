"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import { LineChart, Repeat, Image as ImageIcon, ShieldCheck, Cpu, Code, ArrowRight } from "lucide-react";
import Link from "next/link";


const services = [
  {
    href: '/services/ai-evaluation',
    title: 'AI Evaluation',
    tag: 'Evaluation',
    desc: 'Systematic human scoring of model outputs across quality, safety, coherence, and alignment.',
    icon: LineChart,
    deliverables: ['Evaluation Report', 'Rubric Scores', 'Reviewer Notes', 'QA Summary'],
  },
  {
    href: '/services/rlhf',
    title: 'RLHF Data Collection',
    tag: 'RLHF',
    desc: 'Calibrated human preference data for reinforcement learning pipelines.',
    icon: Repeat,
    deliverables: ['Preference Rankings', 'Reward Model Data', 'Human Feedback Sets'],
  },
  {
    href: '/services/data-annotation',
    title: 'Data Annotation',
    tag: 'Annotation',
    desc: 'High-accuracy labeling across image, video, text, audio, and 3D modalities.',
    icon: ImageIcon,
    deliverables: ['Labeled Dataset', 'QA Report', 'Audit Trail'],
  },
  {
    href: '/services/red-teaming',
    title: 'Red Teaming & Safety Testing',
    tag: 'Safety',
    desc: 'Adversarial testing to surface failure modes, jailbreaks, and unsafe outputs.',
    icon: ShieldCheck,
    deliverables: ['Vulnerability Report', 'Attack Logs', 'Risk Matrix'],
  },
  {
    href: '/quality-assurance',
    title: 'Quality Assurance',
    tag: 'QA',
    desc: '3-tier QA model with gold sets, IAA tracking, and full audit trails.',
    icon: Cpu,
    deliverables: ['QA Report', 'IAA Metrics', 'Audit Trail'],
  },
  {
    href: '/contact',
    title: 'Workflow Consulting',
    tag: 'Strategy',
    desc: 'Taxonomy design, guideline authoring, and annotation workflow architecture.',
    icon: Code,
    deliverables: ['Taxonomy Document', 'Annotation Guidelines', 'Workflow Blueprint'],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-void-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <Reveal direction="left">
              <h2 className="text-5xl lg:text-7xl font-outfit font-bold text-white">
                Services built for <span className="text-cyan-nebula">scale.</span>
              </h2>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <p className="text-white/60 text-lg leading-relaxed">
                End-to-end human data operations for frontier AI teams — from taxonomy design to production-scale evaluation.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.3}>
            <Link href="/services" className="text-cyan-nebula font-bold hover:underline flex items-center gap-2 group whitespace-nowrap">
              View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 0.08} direction="up">
              <Link
                href={svc.href}
                className="glass p-8 h-full flex flex-col group hover:border-white/20 transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-white/5 to-transparent"
              >
                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-nebula/10 flex items-center justify-center text-cyan-nebula group-hover:scale-110 transition-transform">
                    <svc.icon size={22} />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-nebula/10 text-cyan-nebula text-[10px] font-bold uppercase tracking-wider border border-cyan-nebula/20">
                    {svc.tag}
                  </span>
                </div>

                {/* Title + desc */}
                <h3 className="text-xl font-outfit font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{svc.desc}</p>

                {/* Deliverables */}
                <div className="mt-auto border-t border-white/8 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Deliverables</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.deliverables.map((d) => (
                      <span key={d} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/55 text-xs font-medium">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More */}
                <div className="mt-5 flex items-center gap-2 text-cyan-nebula font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={13} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
