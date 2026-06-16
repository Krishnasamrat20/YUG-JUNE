"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import logo from "../logo.jpg";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Aurora Gradient Drift
    const aurora = containerRef.current?.querySelector(".aurora-bg");
    if (aurora) {
      gsap.to(aurora, {
        backgroundPosition: "100% 50%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "linear",
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Aurora */}
      <div className="absolute inset-0 aurora-bg opacity-40 transition-opacity duration-1000" />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1708778002531-5bb1c27c4ea3?auto=format&w=1440&q=80&fit=crop')] opacity-10 mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal direction="down" blur={false}>
              <div className="inline-flex items-center gap-3 px-4 py-2 glass border-cyan-nebula/20 text-cyan-nebula text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-cyan-nebula animate-pulse" />
                Now Accepting Pilot Projects
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-5xl lg:text-8xl font-outfit font-bold leading-[1.1]">
                Human Intelligence{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula via-violet-nebula to-fuchsia-500">
                  for Better AI.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                AI Evaluation, RLHF, Human Feedback, Data Annotation, and Quality Assurance for modern AI teams.
              </p>
            </Reveal>

            <Reveal delay={0.6} direction="none">
              <div className="flex flex-wrap gap-4 pt-4">
                <Magnetic strength={0.1}>
                  <Link href="/contact" className="btn-primary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 group">
                    Schedule a Discovery Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.1}>
                  <Link href="/contact" className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                    Request a Pilot Proposal
                  </Link>
                </Magnetic>
              </div>
            </Reveal>

            {/* Service checkmarks */}
            <Reveal delay={0.8} direction="none">
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                {["AI Evaluation","RLHF","Human Feedback","Data Annotation","Red Teaming","QA Systems"].map((s) => (
                  <span key={s} className="flex items-center gap-1.5 text-white/45 text-sm font-medium">
                    <span className="text-cyan-nebula">✓</span> {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: animated logo */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[520px]">

            {/* ── Background glow blobs ── */}
            <div
              className="absolute w-[340px] h-[340px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,255,255,0.07) 0%, transparent 70%)" }}
            />
            <div
              className="absolute w-[260px] h-[260px] rounded-full pointer-events-none translate-x-12 translate-y-10"
              style={{ background: "radial-gradient(circle, rgba(138,43,226,0.09) 0%, transparent 70%)" }}
            />

            {/* ── Orbit ring 1 + glowing dot (slow spin, cyan) ── */}
            <div
              className="absolute w-[450px] h-[450px] rounded-full border border-cyan-nebula/12 pointer-events-none hidden lg:block"
              style={{ animation: "logoSpin 30s linear infinite" }}
            >
              {/* dot at top of ring */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-nebula"
                style={{ boxShadow: "0 0 10px #00FFFF, 0 0 24px #00FFFF" }}
              />
            </div>

            {/* ── Orbit ring 2 + glowing dot (reverse, violet, dashed) ── */}
            <div
              className="absolute w-[358px] h-[358px] rounded-full border border-violet-nebula/16 pointer-events-none hidden lg:block"
              style={{
                borderStyle: "dashed",
                animation: "logoSpinReverse 20s linear infinite",
              }}
            >
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-violet-nebula"
                style={{ boxShadow: "0 0 8px #8A2BE2, 0 0 18px #8A2BE2" }}
              />
            </div>

            {/* ── Orbit ring 3 (faster, white/subtle) ── */}
            <div
              className="absolute w-[270px] h-[270px] rounded-full border border-white/7 pointer-events-none hidden lg:block"
              style={{ animation: "logoSpin 14s linear infinite" }}
            />

            {/* ── Logo container with breathing animation ── */}
            <div
              className="relative z-10"
              style={{ animation: "logoBreath 5s ease-in-out infinite" }}
            >
              {/* Logo card */}
              <div
                className="relative w-[220px] h-[220px] rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(18,10,143,0.35) 0%, rgba(5,5,16,0.88) 100%)",
                  border: "1px solid rgba(0,255,255,0.22)",
                  boxShadow:
                    "0 0 40px rgba(0,255,255,0.18), 0 0 90px rgba(138,43,226,0.14), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src={logo}
                  alt="YUG AI"
                  fill
                  className="object-contain p-5"
                  priority
                />
              </div>

              {/* ── Floating service chips (bob independently) ── */}
              {/* Top */}
              <div
                className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap glass px-4 py-1.5 rounded-full text-[11px] font-bold text-cyan-nebula border border-cyan-nebula/30"
                style={{ animation: "chipFloat 3.6s ease-in-out infinite 0s" }}
              >
                ✦ AI Evaluation
              </div>
              {/* Left */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -left-[118px] whitespace-nowrap glass px-4 py-1.5 rounded-full text-[11px] font-bold text-violet-nebula border border-violet-nebula/30"
                style={{ animation: "chipFloat 3.6s ease-in-out infinite 0.9s" }}
              >
                ✦ RLHF Data
              </div>
              {/* Right */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -right-[116px] whitespace-nowrap glass px-4 py-1.5 rounded-full text-[11px] font-bold text-white/55 border border-white/18"
                style={{ animation: "chipFloat 3.6s ease-in-out infinite 1.8s" }}
              >
                ✦ Annotation
              </div>
              {/* Bottom */}
              <div
                className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap glass px-4 py-1.5 rounded-full text-[11px] font-bold text-violet-nebula border border-violet-nebula/30"
                style={{ animation: "chipFloat 3.6s ease-in-out infinite 2.7s" }}
              >
                ✦ Red Teaming
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
