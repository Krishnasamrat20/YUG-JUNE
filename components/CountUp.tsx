'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CountUp({
  end, suffix = '', duration = 1800
}: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const obj = { v: 0 };
    const scroller = document.scrollingElement || document.documentElement;
    const tween = gsap.to(obj, {
      v: end,
      duration: Math.max(0.1, (duration / 1000)),
      ease: 'power2.out',
      onUpdate: () => setVal(Math.round(obj.v)),
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        scroller,
      },
    });

    return () => {
      tween.kill();
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
    };
  }, [end, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}
