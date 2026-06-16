"use client";
import React from "react";
import Hero from "@/components/Hero";
import FounderBanner from "@/components/FounderBanner";
import WhyYugSection from "@/components/WhyYugSection";
import StatsBar from "@/components/StatsBar";
import Ticker from "@/components/Ticker";
import ServicesSection from "@/components/ServicesSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import PilotSection from "@/components/PilotSection";
import MethodologySection from "@/components/MethodologySection";
import WorkflowSection from "@/components/WorkflowSection";
import QASection from "@/components/QASection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { Lock, ShieldCheck, Activity, Key } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-void-black min-h-screen">

      {/* 1. Hero */}
      <Hero />

      {/* 2. Founder trust bar */}
      <FounderBanner />

      {/* 3. Why YUG AI */}
      <WhyYugSection />

      {/* 4. Stats + Ticker */}
      <StatsBar />
      <Ticker />

      {/* 5. Services */}
      <ServicesSection />

      {/* 6. Who We Work With */}
      <WhoWeWorkWith />

      {/* 7. Pilot → Validate → Scale */}
      <PilotSection />

      {/* 8. Methodology — Every Project Includes */}
      <MethodologySection />

      {/* 9. Delivery Pipeline / Workflow */}
      <WorkflowSection />

      {/* 10. QA Architecture */}
      <QASection />

      {/* 11. Founding Team */}
      <TeamSection />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. Enterprise Security */}
      <section className="py-32 bg-[#050510] relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal direction="down">
            <h2 className="text-5xl lg:text-7xl font-outfit font-bold mb-20 text-white">
              Enterprise <span className="text-cyan-nebula">Security.</span>
            </h2>
          </Reveal>

          <div className="relative h-[400px]">
            <SecurityIsland
              icon={Lock}
              text="NDA-Enforced Teams"
              pos="top-10 left-[5%] md:left-[15%]"
              delay={0}
              color="text-cyan-nebula"
              borderColor="border-cyan-nebula/30"
            />
            <SecurityIsland
              icon={ShieldCheck}
              text="Project Isolation"
              pos="top-40 right-[5%] md:right-[20%]"
              delay={2}
              color="text-violet-nebula"
              borderColor="border-violet-nebula/30"
            />
            <SecurityIsland
              icon={Activity}
              text="Full Audit Trails"
              pos="bottom-10 left-[15%] md:left-[30%]"
              delay={4}
              color="text-cyan-nebula"
              borderColor="border-cyan-nebula/30"
            />
            <SecurityIsland
              icon={Key}
              text="RBAC Access Control"
              pos="top-0 right-[30%] md:right-[45%]"
              delay={1}
              color="text-violet-nebula"
              borderColor="border-violet-nebula/30"
            />
          </div>
        </div>
      </section>

      {/* 14. CTA */}
      <CTASection />
    </main>
  );
}

function SecurityIsland({
  icon: Icon,
  text,
  pos,
  delay,
  color,
  borderColor,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  pos: string;
  delay: number;
  color: string;
  borderColor: string;
}) {
  return (
    <div
      className={`absolute ${pos} glass px-8 py-4 rounded-full border ${borderColor} flex items-center gap-4 bg-void-black/80 hover:scale-105 transition-transform duration-500 group animate-float-custom`}
      style={{ animationDelay: `${-delay}s` }}
    >
      <Icon className={`${color} w-5 h-5`} />
      <span className="font-bold text-white text-sm md:text-base">{text}</span>
    </div>
  );
}
