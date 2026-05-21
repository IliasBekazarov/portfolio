'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function Typewriter({ text, speed = 50, delay = 0, className = '', onComplete, showCursor = true }: TypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setDone(true);
          onComplete?.();
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && !done && <span className="cursor-blink" style={{ color: 'var(--accent-primary)' }}>█</span>}
      {showCursor && done && <span className="cursor-blink" style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>█</span>}
    </span>
  );
}

interface ScrollProgressProps {
  containerId?: string;
}

export function ScrollProgress({ containerId }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerId
      ? document.getElementById(containerId)
      : document.documentElement;

    const handleScroll = () => {
      if (!container) return;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };

    const target = containerId ? document.getElementById(containerId) : window;
    target?.addEventListener('scroll', handleScroll);
    return () => target?.removeEventListener('scroll', handleScroll);
  }, [containerId]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50"
      style={{ background: 'linear-gradient(90deg, #00d4ff, #b084ff, #00ffaa)' }}
      initial={{ scaleX: 0, transformOrigin: '0%' }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
}

export function GlowButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
}) {
  const baseClass = `btn-primary font-mono text-sm px-6 py-3 rounded-lg cursor-none inline-flex items-center gap-2 ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} data-hover="true" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass} data-hover="true">
      {children}
    </button>
  );
}

export function SectionLabel({ label }: { label: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-8 h-px" style={{ background: 'var(--accent-primary)' }} />
      <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-primary)' }}>
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
    </motion.div>
  );
}
