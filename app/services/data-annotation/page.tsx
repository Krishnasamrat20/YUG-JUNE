"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { Image as ImageIcon, Video, Mic, Type, Layers, Tag, CheckCircle2, BarChart2, ArrowLeft } from "lucide-react";

const features = [
  { icon: ImageIcon,    title: "Image Annotation",      desc: "Bounding boxes, polygons, semantic segmentation, keypoints, and classification across diverse image datasets." },
  { icon: Video,        title: "Video Annotation",       desc: "Frame-level and temporal labeling for object tracking, action recognition, and scene understanding." },
  { icon: Type,         title: "Text Annotation",        desc: "NER, sentiment, intent classification, relation extraction, summarization labeling, and instruction tuning data." },
  { icon: Mic,          title: "Audio Annotation",       desc: "Speech transcription, speaker diarization, acoustic event labeling, and language identification." },
  { icon: Layers,       title: "3D & Sensor Fusion",     desc: "LiDAR point cloud annotation, radar-camera fusion, and 3D bounding box labeling for autonomous systems." },
  { icon: Tag,          title: "Taxonomy & Guidelines",  desc: "We author project-specific annotation taxonomies, edge case documentation, and calibration sets before work begins." },
  { icon: CheckCircle2, title: "3-Tier Quality Review",  desc: "Every label passes through Annotator → Senior Reviewer → QA Lead with gold sets and IAA measurement." },
  { icon: BarChart2,    title: "Delivery & Reporting",   desc: "Export-ready datasets in your required format, with full QA report, IAA metrics, and reviewer notes per batch." },
];

const useCases = [
  "Computer vision model training",
  "LLM instruction tuning data",
  "Autonomous vehicle perception",
  "Medical image labeling",
  "Conversational AI datasets",
  "Multimodal model training",
];

export default function DataAnnotationPage() {
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
              Annotation
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[9rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Data <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula to-violet-nebula">
                Annotation.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mt-12 leading-relaxed mb-12">
              High-accuracy labeling across image, video, text, audio, and 3D modalities. Built around expert guidelines, calibration sessions, and a 3-tier QA framework.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07} direction="up">
                <div className="glass p-8 h-full group hover:border-cyan-nebula/30 transition-all duration-500">
                  <f.icon className="w-8 h-8 text-cyan-nebula mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-base font-outfit font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
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
                Our annotation teams are active across every major AI vertical. Whether you need dense pixel-level labels or large-scale text classification, we adapt our pipeline to your exact requirements.
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
            <h2 className="text-4xl font-outfit font-bold text-white mb-6">Ready to start annotating?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10">Send us a sample of your data and we&apos;ll scope a pilot within 24 hours.</p>
            <Magnetic strength={0.15}>
              <Link href="/contact" className="btn-primary px-12 py-5 rounded-full font-bold text-lg">Request an Annotation Pilot</Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
