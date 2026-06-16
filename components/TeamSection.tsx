"use client";
import React from "react";
import Reveal from "./Reveal";
import Image from "next/image";
import Link from "next/link";
import p1 from "../P1.png";
import p2 from "../p2.png";
import p3 from "../p3.png";
import p4 from "../p4.png";

const team = [
  { name: "Krishna Samrat Bajpai", role: "Co-Founder", img: p2 },
  { name: "Priyesh Singh",         role: "Co-Founder", img: p1 },
  { name: "Abhishek Singh",        role: "Co-Founder", img: p4 },
  { name: "Shreshth Bajpai",       role: "Co-Founder", img: p3 },
];

export default function TeamSection() {
  return (
    <section className="py-32 bg-[#080815]">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16 space-y-4">
          <Reveal direction="down">
            <h2 className="text-5xl font-outfit font-bold text-white">
              The team behind{" "}
              <span className="text-cyan-nebula">YUG AI.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/50 text-lg">
              People buy from people. We believe in being transparent about who we are.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1} direction="up">
              <div className="text-center group">
                <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden ring-2 ring-white/10 group-hover:ring-cyan-nebula/40 transition-all duration-500">
                  <Image
                    src={m.img}
                    alt={m.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-bold text-white text-sm leading-snug mb-1">{m.name}</p>
                <p className="text-cyan-nebula text-[10px] font-bold uppercase tracking-widest">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white/40 hover:text-cyan-nebula text-sm font-bold uppercase tracking-widest transition-colors duration-300"
            >
              Meet the full team →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
