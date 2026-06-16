"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../logo.jpg';
import { cn } from "@/hooks/cn";
import Magnetic from "./Magnetic";

const links = [
  { href: '/services',          label: 'Services' },
  { href: '/industries',        label: 'Industries' },
  { href: '/quality-assurance', label: 'Quality' },
  { href: '/about',             label: 'About' },
  { href: '/contact',           label: 'Contact' },
];

export default function GlobalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-300",
        isScrolled
          ? "backdrop-blur-md bg-void-black/50 border-b border-white/5 py-4"
          : "bg-transparent"
      )}
    >
      <Link href="/" className="flex items-center gap-2 group">
        <Image 
          src={logo} 
          alt="YUG AI" 
          width={34} 
          height={34} 
          className="rounded-lg group-hover:rotate-12 transition-transform duration-300 object-contain" 
        />
        <span className="font-outfit font-bold text-xl tracking-tight text-white uppercase">YUG <span className="text-cyan-nebula">AI</span></span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hover:text-cyan-nebula transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Magnetic strength={0.1}>
          <Link
            href="/contact"
            className="px-5 py-2.5 glass text-white hover:border-cyan-nebula/50 transition-all text-sm font-bold"
          >
            Schedule a Call
          </Link>
        </Magnetic>
      </div>

      <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Menu">
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-void-black/95 backdrop-blur-xl border-b border-white/10 p-8 flex flex-col gap-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-white/70 hover:text-cyan-nebula"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary px-6 py-3 rounded-full text-center font-bold"
          >
            Schedule a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
