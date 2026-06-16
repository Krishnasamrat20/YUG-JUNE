"use client";
import React from "react";
import Link from "next/link";

const cols = [
  { title: 'Services', links: [
    { href: '/services/ai-evaluation', label: 'AI Evaluation' },
    { href: '/services/rlhf', label: 'RLHF' },
    { href: '/services/data-annotation', label: 'Data Annotation' },
    { href: '/services/red-teaming', label: 'Red Teaming' },
    { href: '/quality-assurance', label: 'Quality Assurance' },
  ]},
  { title: 'Industries', links: [
    { href: '/industries/llm-training', label: 'LLM Training' },
    { href: '/industries/finance-ai', label: 'Finance AI' },
    { href: '/industries/robotics', label: 'Robotics' },
    { href: '/industries', label: 'All Industries' },
  ]},
  { title: 'Company', links: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/industries', label: 'Industries' },
    { href: '/quality-assurance', label: 'Quality Framework' },
  ]},
];

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#030308]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-nebula to-violet-nebula group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-outfit font-bold text-xl tracking-tight text-white uppercase">YUG <span className="text-cyan-nebula">AI</span></span>
            </Link>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              Precision human intelligence for modern AI teams. Built for safety, accuracy, and enterprise-scale operations.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@yugai.live" className="text-cyan-nebula text-sm font-bold hover:brightness-125 transition-all">hello@yugai.live</a>
              <div className="text-white/20 text-xs font-mono tracking-widest uppercase">Response within 24h</div>
            </div>
          </div>
          
          {cols.map(col => (
            <div key={col.title} className="space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/60">{col.title}</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-cyan-nebula transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
          <span>© {new Date().getFullYear()} YUG AI OPERATIONS</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cyan-nebula transition-colors">Twitter</a>
            <a href="#" className="hover:text-cyan-nebula transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* ── Powered by BrahmCloud ── */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://brahmcloud.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/8 hover:border-cyan-nebula/35 transition-all duration-500 hover:shadow-[0_0_28px_rgba(0,255,255,0.12)]"
          >
            {/* subtle bg fill on hover */}
            <div className="absolute inset-0 rounded-full bg-cyan-nebula/0 group-hover:bg-cyan-nebula/5 transition-colors duration-500" />

            {/* "Powered by" label */}
            <span className="relative text-[9px] font-bold uppercase tracking-[0.35em] text-white/25 group-hover:text-white/50 transition-colors duration-300">
              Powered by
            </span>

            {/* pulsing status dot */}
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-nebula opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-nebula" />
            </span>

            {/* BrahmCloud — running shimmer gradient text */}
            <span className="relative text-[11px] font-bold uppercase tracking-[0.3em] brahmcloud-text">
              BrahmCloud
            </span>

            {/* diagonal arrow — slides in on hover */}
            <svg
              className="relative w-3 h-3 text-cyan-nebula opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
