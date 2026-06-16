"use client";
import React from "react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTASection() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const mask = containerRef.current.querySelector("#peephole-mask");

      gsap.to(mask, {
        scale: 15,
        opacity: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-void-black overflow-hidden py-32"
    >
      <div
        id="peephole-mask"
        className="absolute inset-0 bg-cyan-nebula z-0 scale-0 rounded-full opacity-10 blur-[100px]"
      />

      <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <Reveal direction="down">
            <h2 className="text-6xl lg:text-[10rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Ready to <br />
              Build <span className="text-cyan-nebula">Better?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Start with a scoped pilot on your actual data. No long-term contract, no onboarding overhead.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.4} direction="none">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Magnetic strength={0.15}>
              <Link
                href="/contact"
                className="btn-primary px-12 py-5 rounded-full font-bold text-xl group flex items-center gap-3"
              >
                Schedule a Discovery Call
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.1}>
              <Link
                href="/contact"
                className="glass px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Request a Pilot Proposal
              </Link>
            </Magnetic>
          </div>
        </Reveal>

        {/* Response time + email */}
        <Reveal delay={0.6} direction="none">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-white/35 text-sm font-medium">
                We typically respond within{" "}
                <span className="text-white/60 font-bold">24 hours.</span>
              </span>
            </div>
            <a
              href="mailto:hello@yugai.live"
              className="text-cyan-nebula text-sm font-bold hover:brightness-125 transition-all tracking-wide"
            >
              hello@yugai.live
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
