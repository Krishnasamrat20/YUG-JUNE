"use client";
import React from "react";
import Reveal from "./Reveal";
import { Users } from "lucide-react";

export default function FounderBanner() {
  return (
    <section className="bg-[#080815] border-y border-white/5 py-5">
      <div className="container mx-auto px-6">
        <Reveal direction="none">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">

            {/* Badge */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-cyan-nebula/15 border border-cyan-nebula/30 flex items-center justify-center">
                <Users className="w-4 h-4 text-cyan-nebula" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-nebula">
                Founder-Led Delivery
              </span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/10" />

            {/* Statement */}
            <p className="text-white/45 text-sm leading-relaxed">
              Co-founders personally oversee every project baseline —{" "}
              <span className="text-white/65 font-medium">not delegated to account managers.</span>
            </p>

            <div className="hidden sm:block w-px h-6 bg-white/10" />

            {/* Status */}
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Now Accepting Pilots
              </span>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
