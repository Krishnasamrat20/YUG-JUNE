"use client";
import React from "react";
import Reveal from "./Reveal";

const words = [
  "AI Evaluation",
  "RLHF",
  "Human Feedback",
  "Data Annotation",
  "Red Teaming",
  "QA Systems",
  "LLM Benchmarking",
  "IAA Tracking",
  "Gold Sets",
  "Workflow Design",
  "Safety Testing",
  "Preference Data",
];

export default function Ticker() {
  return (
    <section className="py-12 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-violet-nebula/5" />
      <div className="flex whitespace-nowrap -rotate-2 scale-110">
        <div className="flex animate-marquee-slower">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 text-2xl font-outfit font-bold uppercase italic tracking-tighter text-white/10 px-6">
              {words.map((word) => (
                <span key={word} className="flex items-center gap-12">
                  {word}
                  <span className="w-2 h-2 rounded-full bg-cyan-nebula/20" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
