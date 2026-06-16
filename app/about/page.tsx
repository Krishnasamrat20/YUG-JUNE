"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { ArrowRight, Globe, Zap, Heart, Shield } from "lucide-react";
import Image from "next/image";
import p1 from '../../P1.png';
import p2 from '../../p2.png';
import p3 from '../../p3.png';
import p4 from '../../p4.png';
import Link from "next/link";

const team = [
  { name: 'Krishna Samrat Bajpai', role: 'Co-Founder', detail: 'Overseeing product vision, client relationships, and delivery standards.', img: p2 },
  { name: 'Priyesh Singh',         role: 'Co-Founder', detail: 'Driving AI strategy, annotation operations, and data pipeline delivery.', img: p1 },
  { name: 'Abhishek Singh',        role: 'Co-Founder', detail: 'Leading engineering, QA systems, and technical delivery infrastructure.', img: p4 },
  { name: 'Shreshth Bajpai',       role: 'Co-Founder', detail: 'Building partnerships and enterprise client development globally.', img: p3 },
];

const values = [
  { icon: Shield, title: 'Accuracy Before Volume', color: 'text-cyan-nebula', desc: 'We would rather deliver fewer, higher-quality labels than large batches of mediocre data.' },
  { icon: Globe, title: 'Transparency by Default', color: 'text-violet-nebula', desc: 'Clients receive QA reports, IAA metrics, and reviewer notes on every single delivery.' },
  { icon: Zap, title: 'Founder-Led Delivery', color: 'text-cyan-nebula', desc: 'Leadership is directly involved in quality standards and client engagements — always.' },
  { icon: Heart,  title: 'Pilot-First Philosophy', color: 'text-violet-nebula', desc: 'We earn trust through results before production commitments. Every engagement starts with a pilot.' },
];

export default function AboutPage() {
  return (
    <main className="bg-void-black min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-80" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-cyan-nebula/20 text-cyan-nebula text-xs font-bold uppercase tracking-widest mb-8">
              About YUG AI
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-8xl font-outfit font-bold leading-[1.1] max-w-4xl text-white">
              A founder-led company <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula to-violet-nebula text-white">
                built for AI teams
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mt-8">
              We help AI teams improve model quality through structured human feedback systems — evaluation, RLHF, annotation, and QA operations built for the way modern AI teams actually work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission + Philosophy */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <Reveal direction="left">
              <div className="glass p-12 h-full border-cyan-nebula/10 hover:border-cyan-nebula/30 transition-colors group">
                <span className="w-12 h-1 bg-cyan-nebula block mb-8 group-hover:w-24 transition-all duration-500" />
                <h2 className="text-3xl font-outfit font-bold text-white mb-6">Make AI models better through structured human intelligence.</h2>
                <p className="text-white/60 leading-relaxed">
                  We believe AI quality is fundamentally a human problem. The best models are trained, evaluated, and improved with structured, expert human input — not volume alone.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="glass p-12 h-full border-violet-nebula/10 hover:border-violet-nebula/30 transition-colors group">
                <span className="w-12 h-1 bg-violet-nebula block mb-8 group-hover:w-24 transition-all duration-500" />
                <h2 className="text-3xl font-outfit font-bold text-white mb-6">Process-first. Quality-obsessed. Founder-accountable.</h2>
                <p className="text-white/60 leading-relaxed">
                  Every engagement starts with a pilot. Every batch is validated against gold sets. Every delivery comes with a QA report. No black boxes, no hollow metrics.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Values */}
          <Reveal direction="down" className="mb-16">
            <h2 className="text-5xl font-outfit font-bold text-white">How we operate.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} direction="up">
                <div className="glass p-8 h-full group hover:border-white/20 transition-all">
                  <v.icon className={`w-8 h-8 ${v.color} mb-6 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-outfit font-bold text-white mb-4">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Team */}
          <Reveal direction="down" className="mb-16">
            <h2 className="text-5xl font-outfit font-bold text-white text-center">The people behind YUG AI.</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.15} direction="up" className="text-center group">
                <div className="glass p-8 h-full border-white/5 hover:border-cyan-nebula/30 transition-all duration-500">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 relative overflow-hidden ring-4 ring-cyan-nebula/10 group-hover:ring-cyan-nebula/30 transition-all">
                    <Image src={m.img} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{m.name}</h3>
                  <p className="text-cyan-nebula text-xs font-bold uppercase tracking-widest mb-4">{m.role}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{m.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-void-black border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-5xl font-outfit font-bold text-white mb-8">Work with a team that takes quality seriously.</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-12 text-lg">Start with a free pilot on your actual data. No commitment required.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Magnetic strength={0.1}>
                <Link href="/contact" className="btn-primary px-10 py-4 rounded-full font-bold">Schedule Discovery Call</Link>
              </Magnetic>
              <Magnetic strength={0.1}>
                <Link href="/contact" className="glass px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Request Pilot</Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
