"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/hooks/cn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean; // accepted but no longer applied (removed GSAP filter dep)
}

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const offset = 28;
    const tx = direction === "left" ? -offset : direction === "right" ? offset : 0;
    const ty = direction === "up" ? offset : direction === "down" ? -offset : 0;

    // Initial hidden state — pure inline styles, no GSAP
    el.style.opacity = "0";
    el.style.transform = tx !== 0 || ty !== 0 ? `translate(${tx}px, ${ty}px)` : "";
    el.style.transition = "none";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        // Let the browser apply the transition before changing to the target state
        requestAnimationFrame(() => {
          el.style.transition = `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "";
        });
      },
      // No rootMargin shrinkage — fires as soon as any part of element is in viewport
      { threshold: 0.05 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      el.style.opacity = "";
      el.style.transform = "";
      el.style.transition = "";
    };
  }, [direction, delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
