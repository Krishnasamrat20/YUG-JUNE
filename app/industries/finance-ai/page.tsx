"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { FileText, TrendingUp, ShieldAlert, MessageSquare, BarChart2, Lock, CheckCircle2, ArrowLeft } from "lucide-react";

const services = [
  { icon: FileText,     title: "Financial Document Labeling",  desc: "Annotation of earnings reports, SEC filings, contracts, and financial statements for NLP model training." },
  { icon: TrendingUp,   title: "Market Sentiment Annotation",  desc: "Sentiment and intent labeling on financial news, analyst reports, and earnings call transcripts." },
  { icon: ShieldAlert,  title: "Fraud & Risk Classification",  desc: "Transaction pattern labeling, anomaly tagging, and risk scoring annotation for fraud detection models." },
  { icon: MessageSquare, title: "Earnings Call Transcription", desc: "Accurate transcription and speaker diarization of earnings calls, investor calls, and analyst briefings." },
  { icon: BarChart2,    title: "Model Evaluation",             desc: "Human evaluation of financial AI outputs — accuracy, compliance, and hallucination scoring by domain experts." },
  { icon: Lock,         title: "Data Security & NDA",          desc: "Full NDA coverage, project isolation, and role-based access controls for sensitive financial data." },
];

const useCases = [
  "Financial NLP model training",
  "Fraud detection datasets",
  "Risk classification pipelines",
  "Earnings call analysis models",
  "Regulatory compliance AI",
  "Market sentiment models",
];

export default function FinanceAIPage() {
  return (
    <main className="bg-void-black min-h-screen pt-20">

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-80" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="down">
            <Link href="/industries" className="inline-flex items-center gap-2 text-white/40 hover:text-cyan-nebula text-xs uppercase tracking-widest font-bold mb-10 transition-colors">
              <ArrowLeft size={14} /> All Industries
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-cyan-nebula/20 text-cyan-nebula text-xs font-bold uppercase tracking-widest mb-8">
              Industry
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[9rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Finance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula to-violet-nebula">
                AI.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mt-12 leading-relaxed mb-12">
              Precision data operations for financial AI teams — from document annotation and sentiment labeling to fraud detection datasets and model evaluation, with full NDA coverage.
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

      {/* Services */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl font-outfit font-bold text-white mb-16">What we do for Finance AI teams</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} direction="up">
                <div className="glass p-8 h-full group hover:border-cyan-nebula/30 transition-all duration-500">
                  <s.icon className="w-8 h-8 text-cyan-nebula mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-outfit font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-[#080815]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <h2 className="text-4xl font-outfit font-bold text-white mb-6">Use Cases</h2>
              <p className="text-white/50 leading-relaxed">
                Financial AI demands accuracy, domain expertise, and strict data security. Our annotators are trained on financial terminology and work under full NDA with project-level isolation as standard.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((u, i) => (
                <Reveal key={u} delay={i * 0.07} direction="up">
                  <div className="flex items-center gap-3 glass p-5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-nebula shrink-0" />
                    <span className="text-white font-medium text-sm">{u}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-void-black border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <h2 className="text-4xl font-outfit font-bold text-white mb-6">Working on a Finance AI system?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10">Discuss your data requirements and we&apos;ll propose a pilot scoped to your use case.</p>
            <Magnetic strength={0.15}>
              <Link href="/contact" className="btn-primary px-12 py-5 rounded-full font-bold text-lg">Discuss Your Finance AI Project</Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
