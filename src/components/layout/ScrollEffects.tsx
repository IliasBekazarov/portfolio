'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const SECTIONS = [
  { id: 'home',       label: 'HOME' },
  { id: 'about',      label: 'ABOUT' },
  { id: 'skills',     label: 'SKILLS' },
  { id: 'projects',   label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'contact',    label: 'CONTACT' },
];

/* ── Scroll Progress Bar ────────────────────────────────── */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX, width: '100%' }}
    />
  );
}

/* ── Section Dots ───────────────────────────────────────── */
export function SectionDots() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="section-dots">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`section-dot-btn ${active === id ? 'active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={label}
        >
          <span className="dot-label">{label}</span>
        </button>
      ))}
    </div>
  );
}

/* ── Section Reveal — wraps children with IntersectionObserver ── */
export function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="section-reveal">
      {children}
    </div>
  );
}
