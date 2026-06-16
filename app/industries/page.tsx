"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { ArrowRight, ChevronRight, Globe, Zap, Heart, Shield, Layers, Activity, ShieldCheck, Cpu, Mic, Video, Image as ImageIcon, Lock, Key, Mail, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

const industries = [
  { name: 'LLM Training',     href: '/industries/llm-training',       desc: 'Pre-training data, instruction tuning, RLHF, and evaluation for LLM teams.' },
  { name: 'Healthcare AI',    href: '/industries/healthcare-ai',       desc: 'Structured annotation for clinical data and medical imaging.' },
  { name: 'Autonomous',       href: '/industries/autonomous-vehicles', desc: 'Dense LiDAR and video annotation for frontier mobility.' },
  { name: 'Finance AI',       href: '/industries/finance-ai',          desc: 'Document labeling, sentiment annotation, and fraud detection datasets.' },
  { name: 'Retail AI',        href: '/industries/retail-ai',           desc: 'Customer behavior analysis and inventory management data.' },
  { name: 'Robotics AI',      href: '/industries/robotics',            desc: 'LiDAR, sensor fusion, and action labeling for embodied AI systems.' },
  { name: 'Surveillance AI',  href: '/industries/surveillance-ai',     desc: 'Precision labeling for object detection and event recognition.' },
  { name: 'Agriculture AI',   href: '/industries/agriculture-ai',      desc: 'High-fidelity data for crop monitoring and autonomous farming.' },
  { name: 'E-commerce AI',    href: '/industries/ecommerce-ai',        desc: 'Catalog taxonomy and preference data for retail search.' },
];

export default function IndustriesPage() {
  return (
    <main className="bg-void-black min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-80" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-cyan-nebula/20 text-cyan-nebula text-xs font-bold uppercase tracking-widest mb-8">
              Industries
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[10rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Sectors we <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula to-violet-nebula text-white">
                Empower
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mt-12 leading-relaxed">
              Domain-specific human intelligence operations for the industries building the future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.1} direction="up">
                <Link href={ind.href} className="glass p-10 h-full flex flex-col justify-between group hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-outfit font-bold text-white group-hover:text-cyan-nebula transition-colors">{ind.name}</h2>
                    <p className="text-white/40 text-lg leading-relaxed">{ind.desc}</p>
                  </div>
                  <div className="mt-12 flex items-center gap-2 text-cyan-nebula font-bold text-sm">
                    Explore Industry <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-[#050510] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <h2 className="text-5xl font-outfit font-bold text-white mb-8">Ready to start a project?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-12 text-lg">Discuss your industry-specific data requirements with our technical team.</p>
            <Magnetic strength={0.15}>
              <Link href="/contact" className="btn-primary px-12 py-5 rounded-full font-bold text-xl">Schedule Discovery Call</Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
