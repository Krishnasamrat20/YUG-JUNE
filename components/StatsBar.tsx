"use client";
import React from "react";
import Reveal from "./Reveal";
import { cn } from "@/hooks/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { label: 'Annotation accuracy target', value: 98, suffix: '%+', color: "text-cyan-nebula" },
  { label: 'Services', value: 8, suffix: '', color: "text-violet-nebula" },
  { label: 'Industry verticals', value: 8, suffix: '+', color: "text-cyan-nebula" },
  { label: 'QA review layers', value: 3, suffix: '×', color: "text-violet-nebula" },
];

export default function StatsBar() {
  return (
    <section className="py-24 bg-void-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} direction="up">
              <div className="glass p-8 text-center space-y-2 group hover:border-white/20 transition-all duration-500 h-full flex flex-col justify-center">
                <div className={cn("text-5xl font-outfit font-bold", stat.color)}>
                  <StatValue value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatValue({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    gsap.registerPlugin(ScrollTrigger);
    const obj = { val: 0 };
    const parent = node.parentElement || node;
    const scroller = document.scrollingElement || document.documentElement;
    const tween = gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        node.textContent = Math.round(obj.val).toString();
      },
      scrollTrigger: {
        trigger: node.parentElement || node,
        start: "top 85%",
        toggleActions: "play none none reverse",
        scroller,
      },
    });

    return () => {
      tween.kill();
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
    };
  }, [value]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
