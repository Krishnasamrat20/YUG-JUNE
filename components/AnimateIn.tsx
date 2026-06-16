'use client';
import { useEffect, useRef } from 'react';

/**
 * Attaches IntersectionObserver to its child wrapper div.
 * Adds `in-view` class when element enters viewport.
 * Works with .reveal, .reveal-left, .reveal-scale, .wf-connector etc.
 */
export default function AnimateIn({
  children,
  className = 'reveal',
  delay,
  style,
  tag: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  style?: React.CSSProperties;
  tag?: keyof React.JSX.IntrinsicElements;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const AnyTag = Tag as React.ElementType;
  return (
    <AnyTag
      ref={ref}
      className={className}
      style={{ ...(delay ? { transitionDelay: delay } : {}), ...style }}
    >
      {children}
    </AnyTag>
  );
}
