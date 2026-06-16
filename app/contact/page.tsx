"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { MessageSquare, Mail, Calendar, Phone, Send } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-void-black min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-80" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass border-cyan-nebula/20 text-cyan-nebula text-xs font-bold uppercase tracking-widest mb-8">
              Contact
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-[10rem] font-outfit font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-nebula to-violet-nebula text-white">
                Better AI
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mt-12 leading-relaxed">
              Book a discovery call, request a pilot proposal, or ask us anything. We typically respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left Column: Info */}
            <div className="lg:col-span-5 space-y-12">
              <Reveal direction="left">
                <h2 className="text-5xl font-outfit font-bold text-white">Get in touch.</h2>
              </Reveal>

              <div className="grid gap-4">
                {[
                  { label: 'Book a Discovery Call', val: '30-minute scoping call', href: 'https://calendly.com/yug-ai', icon: Calendar, color: 'text-cyan-nebula' },
                  { label: 'Email Us', val: 'hello@yugai.live', href: 'mailto:hello@yugai.live', icon: Mail, color: 'text-violet-nebula' },
                  { label: 'WhatsApp Business', val: 'Chat with the team', href: 'https://wa.me/911234567890', icon: MessageSquare, color: 'text-cyan-nebula' },
                ].map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.1} direction="left">
                    <Magnetic strength={0.05}>
                      <a 
                        href={c.href} 
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        className="glass p-6 flex items-center gap-6 group hover:border-white/20 transition-all duration-500 w-full"
                      >
                        <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <c.icon className={`w-6 h-6 ${c.color}`} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{c.label}</p>
                          <p className="text-white font-bold text-lg">{c.val}</p>
                        </div>
                      </a>
                    </Magnetic>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.4} direction="left">
                <div className="glass p-8 bg-gradient-to-br from-cyan-nebula/5 to-transparent border-cyan-nebula/10">
                  <p className="text-sm text-white/50 leading-relaxed">
                    <span className="text-cyan-nebula font-bold">Response time:</span> We typically respond within 24 hours. For urgent requests, WhatsApp is fastest.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.2} direction="up">
                <div className="glass p-12 border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-violet-nebula/5 blur-[80px] -z-10 group-hover:bg-violet-nebula/10 transition-colors" />
                  <h3 className="text-2xl font-outfit font-bold text-white mb-10">Send a message</h3>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
