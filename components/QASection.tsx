"use client";
import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { Lock, Activity, Layers, Cpu, Target, FileText, CheckCircle2 } from "lucide-react";
import gsap from "gsap";

const tiers = [
  {
    n: "Tier 1",
    role: "Annotator",
    accentBg: "bg-cyan-nebula",
    border: "border-cyan-500/50",
    tagColor: "text-cyan-nebula",
    bg: "bg-cyan-950/20",
    desc: "Trained specialist executes labeling per taxonomy and guidelines. Self-reviews before submission to ensure quality from the source.",
    points: ["Labeling per client taxonomy", "Self-review before submission", "Calibration trained per project"],
  },
  {
    n: "Tier 2",
    role: "Reviewer",
    accentBg: "bg-violet-nebula",
    border: "border-violet-500/50",
    tagColor: "text-violet-nebula",
    bg: "bg-violet-950/20",
    desc: "Senior reviewer checks every annotator submission for errors, edge cases, and guideline adherence before it advances.",
    points: ["100% submission coverage", "Edge case detection", "Guideline enforcement"],
  },
  {
    n: "Tier 3",
    role: "QA Lead",
    accentBg: "bg-white/50",
    border: "border-white/30",
    tagColor: "text-white/80",
    bg: "bg-white/5",
    desc: "QA Lead validates the full batch, measures IAA, reviews gold set performance, and authorises final delivery.",
    points: ["IAA measurement & reporting", "Gold set performance review", "Final delivery sign-off"],
  },
];

// Final resting positions for each slot relative to center of container
// x/y are pixel offsets added on top of the xPercent/yPercent centering
const FRONT   = { x: 0,   y: 0,  scale: 1,    opacity: 1,    rotation: 0  };
const BACK_L  = { x: -62, y: 28, scale: 0.86, opacity: 0.52, rotation: -7 };
const BACK_R  = { x: 62,  y: 48, scale: 0.75, opacity: 0.30, rotation: 7  };

const feats = [
  { icon: Target,   title: "Gold Sets",    desc: "Pre-labeled reference items seeded into production batches to continuously assess accuracy." },
  { icon: Cpu,      title: "Calibration",  desc: "Regular alignment sessions before and during projects to keep annotators consistent." },
  { icon: Activity, title: "IAA Tracking", desc: "Inter-annotator agreement measured on every batch. Disagreement surfaces guideline gaps." },
  { icon: FileText, title: "Audit Logs",   desc: "Full traceability of every annotation action, QA decision, and revision on request." },
];

export default function QASection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const frontRef   = useRef(0);
  const timerRef   = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const cards = Array.from(stack.querySelectorAll<HTMLElement>(".qa-card"));
    if (cards.length < 3) return;

    // xPercent/yPercent keep cards centred in the container
    // x/y apply offsets on top of that centering
    gsap.set(cards, {
      xPercent: -50, yPercent: -50,
      x: 0, y: 60, scale: 0.9, opacity: 0, rotation: 0,
    });

    // Assign positions based on which index is currently "front"
    const applyPositions = (fIdx: number) => {
      const lIdx = (fIdx + 1) % 3; // back-left  (slightly behind)
      const rIdx = (fIdx + 2) % 3; // back-right (furthest behind)

      // Update z-index instantly before the tween so no overlap glitch
      gsap.set(cards[fIdx], { zIndex: 30 });
      gsap.set(cards[lIdx], { zIndex: 20 });
      gsap.set(cards[rIdx], { zIndex: 10 });

      gsap.to(cards[fIdx], { ...FRONT,  duration: 0.65, ease: "power3.inOut" });
      gsap.to(cards[lIdx], { ...BACK_L, duration: 0.65, ease: "power3.inOut" });
      gsap.to(cards[rIdx], { ...BACK_R, duration: 0.65, ease: "power3.inOut" });
    };

    const startCycle = () => {
      // Tier 1 starts at the front
      frontRef.current = 0;
      setActiveIdx(0);
      applyPositions(0);

      timerRef.current = setInterval(() => {
        const next = (frontRef.current + 1) % 3;
        frontRef.current = next;
        setActiveIdx(next);
        applyPositions(next);
      }, 3000);
    };

    // Trigger the whole thing once the section scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // Stagger fly-in for all 3 cards, then begin revolving
        cards.forEach((card, i) => {
          gsap.to(card, {
            opacity: 1, y: 0, scale: 1,
            duration: 0.6,
            delay: i * 0.14,
            ease: "back.out(1.3)",
            onComplete: i === cards.length - 1 ? startCycle : undefined,
          });
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(stack);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section className="py-32 bg-void-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

          {/* ── Left: copy ── */}
          <div className="space-y-12">
            <Reveal direction="left">
              <h2 className="text-6xl font-outfit font-bold leading-tight text-white">
                Zero-Noise <br />
                <span className="text-cyan-nebula">QA Architecture.</span>
              </h2>
            </Reveal>

            <div className="space-y-8">
              {[
                { icon: Lock,     title: "Founder-Led Delivery", desc: "Strategic oversight on every project baseline.",           color: "text-cyan-nebula"   },
                { icon: Activity, title: "IAA Tracking",          desc: "Inter-annotator agreement metrics on every batch.",         color: "text-violet-nebula" },
                { icon: Layers,   title: "3-Tier Review",         desc: "Annotator → Senior Reviewer → QA Lead.",                   color: "text-cyan-nebula"   },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1} direction="left" className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-white">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Right: revolving card deck ── */}
          <div className="flex flex-col items-center gap-6">
            {/*
              Container: not overflow-hidden so rotated/offset back-cards
              can peek out beyond the box edges without clipping.
            */}
            <div
              ref={stackRef}
              className="relative w-[360px] h-[500px]"
            >
              {tiers.map((tier) => (
                <div
                  key={tier.n}
                  /* absolute top-1/2 left-1/2 gives the anchor point;
                     GSAP's xPercent/yPercent then pull the card back to its
                     visual centre, and x/y add the per-slot offset. */
                  className={`qa-card absolute top-1/2 left-1/2 w-[340px] h-[420px] rounded-2xl border-2 ${tier.border} ${tier.bg} glass p-8`}
                >
                  {/* Coloured accent strip */}
                  <div className={`w-14 h-1.5 rounded-full mb-6 ${tier.accentBg}`} />

                  <span className={`text-[10px] font-bold uppercase tracking-widest ${tier.tagColor} block mb-1`}>
                    {tier.n}
                  </span>
                  <h3 className="text-2xl font-outfit font-bold text-white mb-4">{tier.role}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{tier.desc}</p>

                  <ul className="space-y-2.5">
                    {tier.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-white/60">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${tier.tagColor}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Dot progress indicators */}
            <div className="flex items-center gap-3">
              {tiers.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-500 ${
                    i === activeIdx
                      ? "w-7 h-2 bg-cyan-nebula"
                      : "w-2 h-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Current tier label */}
            <p className="text-white/35 text-xs uppercase tracking-widest font-bold">
              {tiers[activeIdx].n} — {tiers[activeIdx].role}
            </p>
          </div>
        </div>

        {/* ── QA Metrics panel ── */}
        <Reveal direction="up" delay={0.2}>
          <div className="glass border-cyan-nebula/15 bg-gradient-to-br from-cyan-nebula/5 to-transparent p-10 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-outfit font-bold text-white mb-4">
                  Every batch is measured, not assumed.
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Our QA framework goes beyond manual review. Systematic measurement checkpoints run on every batch so quality is provable, not just claimed.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Gold Sets",          desc: "Pre-labeled items seeded into every batch" },
                  { label: "IAA Tracking",        desc: "Inter-annotator agreement on every delivery" },
                  { label: "Reviewer Audits",     desc: "100% of annotator work reviewed" },
                  { label: "Escalation Process",  desc: "Clear path for edge cases and disagreements" },
                  { label: "Audit Trails",        desc: "Full log of every annotation and QA action" },
                ].map((m) => (
                  <div key={m.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-nebula shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-bold text-sm">{m.label}</p>
                      <p className="text-white/40 text-xs leading-snug">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Feature grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feats.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1} direction="up">
              <div className="glass p-8 h-full group hover:border-violet-nebula/30 transition-all duration-500">
                <f.icon className="w-8 h-8 text-violet-nebula mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-outfit font-bold text-white mb-2">{f.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
