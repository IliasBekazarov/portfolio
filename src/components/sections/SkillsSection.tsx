'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const INSTALL_LINES = [
  { text: '+ react@18.2.0',        color: 'var(--green)' },
  { text: '+ javascript@ES2024',   color: 'var(--green)' },
  { text: '+ html-css@latest',     color: 'var(--green)' },
  { text: '+ python@3.12.0',       color: 'var(--green)' },
  { text: '+ django@5.0.0',        color: 'var(--green)' },
  { text: '+ postgresql@16.0.0',   color: 'var(--green)' },
  { text: '+ rest-api@latest',     color: 'var(--green)' },
  { text: '+ git@2.44.0',          color: 'var(--green)' },
  { text: ' ',                     color: '' },
  { text: '✓ Installation complete — 8 packages installed', color: 'var(--accent)' },
];

const TABS = [
  {
    id: 'frontend', icon: '⚛', label: 'Frontend', count: 3,
    skills: [
      { name: 'React.js',    version: 'v18.2.0',  pct: 85, color: '#61dafb' },
      { name: 'JavaScript',  version: 'ES2024',   pct: 88, color: '#f7df1e' },
      { name: 'HTML / CSS',  version: 'latest',   pct: 90, color: '#e34c26' },
    ],
  },
  {
    id: 'backend', icon: '⚙', label: 'Backend', count: 4,
    skills: [
      { name: 'Python',      version: 'v3.12.0',  pct: 72, color: '#ffd43b' },
      { name: 'Django',      version: 'v5.0.0',   pct: 70, color: '#092e20' },
      { name: 'PostgreSQL',  version: 'v16.0.0',  pct: 68, color: '#336791' },
      { name: 'REST API',    version: 'latest',   pct: 75, color: 'var(--green)' },
    ],
  },
  {
    id: 'tools', icon: '�', label: 'Tools', count: 3,
    skills: [
      { name: 'Git / GitHub', version: 'v2.44.0', pct: 80, color: '#f05032' },
      { name: 'Figma',        version: 'latest',  pct: 65, color: '#f24e1e' },
      { name: 'VS Code',      version: 'latest',  pct: 90, color: 'var(--accent)' },
    ],
  },
  {
    id: 'languages', icon: '🌐', label: 'Languages', count: 3,
    skills: [
      { name: 'Kyrgyz',   version: 'native',  pct: 100, color: '#e83e3e' },
      { name: 'Russian',  version: 'A2',      pct: 45,  color: '#4285f4' },
      { name: 'English',  version: 'A2',      pct: 40,  color: 'var(--yellow)' },
    ],
  },
];

type Ease4 = [number, number, number, number];
const E: Ease4 = [0.16, 1, 0.3, 1];

function SkillCard({ name, version, pct, color, i, visible }: {
  name: string; version: string; pct: number; color: string; i: number; visible: boolean;
}) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, delay: i * 0.06, ease: E }}
      style={{ padding: '16px 18px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>{name}</span>
        <span className="font-mono" style={{ fontSize: '0.6rem', color: 'var(--text-2)', letterSpacing: '0.08em' }}>{version}</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={visible ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: 0.2 + i * 0.06, ease: E }}
        />
      </div>
      <div style={{ textAlign: 'right', marginTop: 5 }}>
        <span className="font-mono" style={{ fontSize: '0.6rem', color, letterSpacing: '0.1em' }}>{pct}%</span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [activeTab, setActiveTab] = useState('frontend');
  const currentTab = TABS.find(t => t.id === activeTab)!;

  return (
    <div className="section" ref={ref}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>

          {/* ── Left: Terminal ───────────────────────── */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: E }}
            style={{ padding: 0, overflow: 'hidden' }}
          >
            {/* Title bar */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              borderBottom: '1px solid var(--border)',
              padding: '12px 18px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ff5f57','#ffbd2e','#28c840'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-2)', letterSpacing: '0.08em' }}>npm — skills</span>
            </div>

            {/* Body */}
            <div style={{ padding: '22px 22px 28px' }}>
              <div className="font-mono" style={{ fontSize: '0.78rem', marginBottom: 14 }}>
                <span style={{ color: 'var(--green)' }}>$ </span>
                <span style={{ color: 'var(--accent)' }}>npm install </span>
                <span style={{ color: 'var(--text-2)' }}>@ilias/skills</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {INSTALL_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    className="font-mono"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                    style={{ fontSize: '0.72rem', color: line.color || 'var(--text-2)' }}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
              <motion.span
                className="font-mono"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ fontSize: '0.78rem', color: 'var(--accent)', display: 'inline-block', marginTop: 14 }}
              >
                █
              </motion.span>
            </div>
          </motion.div>

          {/* ── Right: Tabs + skills ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: E }}
          >
            <div className="section-label" style={{ marginBottom: 8 }}>TECH_ARSENAL</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 900, fontStyle: 'italic', marginBottom: 22 }}>
              My Arsenal
            </h2>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
              {TABS.map(tab => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="font-mono"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 7,
                      padding: '8px 14px', borderRadius: 8, cursor: 'pointer',
                      border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                      background: active ? 'rgba(0,212,255,0.07)' : 'var(--bg-card)',
                      color: active ? 'var(--accent)' : 'var(--text-2)',
                      fontSize: '0.68rem', letterSpacing: '0.06em',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                    <span style={{
                      background: active ? 'var(--accent)' : 'rgba(255,255,255,0.08)',
                      color: active ? 'var(--bg)' : 'var(--text-2)',
                      borderRadius: 999, padding: '1px 6px', fontSize: '0.56rem',
                    }}>{tab.count}</span>
                  </button>
                );
              })}
            </div>

            {/* Skill cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                {currentTab.skills.map((sk, i) => (
                  <SkillCard key={sk.name} {...sk} i={i} visible={inView} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
