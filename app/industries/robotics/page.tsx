"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { Layers, Activity, Target, Cpu, Video, BarChart2, CheckCircle2, ArrowLeft } from "lucide-react";

const services = [
  { icon: Layers,   title: "LiDAR Point Cloud Annotation",  desc: "3D bounding boxes, instance segmentation, and ground plane labeling on LiDAR scans for robotic perception." },
  { icon: Activity, title: "Robot Action Labeling",          desc: "Action sequence annotation, task segmentation, and goal state labeling for imitation learning and behavior cloning." },
  { icon: Target,   title: "Embodied AI Datasets",           desc: "Scene understanding annotation, object affordance labeling, and spatial relationship tagging for embodied agents." },
  { icon: Cpu,      title: "Sensor Fusion Annotation",       desc: "Cross-modal labeling combining camera, LiDAR, radar, and depth sensor data for robust perception pipelines." },
  { icon: Video,    title: "Manipulation Video Labeling",    desc: "Frame-level annotation of robot manipulation tasks — grasp events, contact points, and trajectory labeling." },
  { icon: BarChart2, title: "Model Evaluation",              desc: "Human assessment of robot perception and decision outputs against ground-truth performance benchmarks." },
];

const useCases = [
  "Robot manipulation training data",
  "Embodied AI scene understanding",
  "LiDAR perception datasets",
  "Imitation learning annotations",
  "Human-robot interaction data",
  "Warehouse and logistics robotics",
];

export default function RoboticsPage() {
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
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-violet-nebula/20 text-violet-nebula text-xs font-bold uppercase tracking-widest mb-8">
              Industry
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[9rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Robotics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-nebula to-cyan-nebula">
                AI.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mt-12 leading-relaxed mb-12">
              Specialized data annotation for robotic perception, embodied AI, and autonomous systems — LiDAR, sensor fusion, manipulation video, and action labeling at production scale.
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
            <h2 className="text-4xl font-outfit font-bold text-white mb-16">What we do for Robotics teams</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} direction="up">
                <div className="glass p-8 h-full group hover:border-violet-nebula/30 transition-all duration-500">
                  <s.icon className="w-8 h-8 text-violet-nebula mb-6 group-hover:scale-110 transition-transform" />
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
                Robotics and embodied AI require annotation teams that understand 3D space, temporal sequences, and sensor modalities. Our annotators are calibrated specifically for robotic data types and trained on your task taxonomy before production begins.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((u, i) => (
                <Reveal key={u} delay={i * 0.07} direction="up">
                  <div className="flex items-center gap-3 glass p-5">
                    <CheckCircle2 className="w-5 h-5 text-violet-nebula shrink-0" />
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
            <h2 className="text-4xl font-outfit font-bold text-white mb-6">Building a robot that learns?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10">Tell us your data modality and task type — we&apos;ll propose a calibration-first pilot.</p>
            <Magnetic strength={0.15}>
              <Link href="/contact" className="btn-primary px-12 py-5 rounded-full font-bold text-lg">Discuss Your Robotics Data Needs</Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
