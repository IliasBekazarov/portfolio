'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TICKER_ITEMS = [
  'REACT.JS', '✦', 'JAVASCRIPT', '✦', 'HTML / CSS', '✦', 'PYTHON', '✦',
  'DJANGO', '✦', 'POSTGRESQL', '✦', 'REST API', '✦', 'GIT / GITHUB', '✦',
  'REACT.JS', '✦', 'JAVASCRIPT', '✦', 'HTML / CSS', '✦', 'PYTHON', '✦',
  'DJANGO', '✦', 'POSTGRESQL', '✦', 'REST API', '✦', 'GIT / GITHUB', '✦',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <div style={{ paddingTop: 100, paddingBottom: 0, overflow: 'hidden', position: 'relative' }}>

      {/* ── Ambient glow blobs ─────────────────────────── */}
      <div style={{
        position: 'absolute', top: '-10%', left: '30%', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 65%)',
        pointerEvents: 'none', filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: '0%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)',
        pointerEvents: 'none', filter: 'blur(60px)',
      }} />

      {/* ── Big background text ────────────────────────── */}
      <div style={{
        position: 'absolute', top: 60, left: 0, right: 0,
        textAlign: 'center', pointerEvents: 'none', overflow: 'hidden',
        lineHeight: 0.85,
      }}>
        <motion.span
          className="text-outline"
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            fontSize: 'clamp(80px, 16vw, 200px)',
            fontFamily: 'var(--sans)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            display: 'block',
          }}
        >
          DEVELOPER
        </motion.span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* ── Top label row ──────────────────────────────── */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <span className="section-label">JUNIOR_FRONTEND_DEVELOPER // 2026_V.1</span>
          <span className="status-dot">AVAILABLE_FOR_HIRE</span>
        </motion.div>

        {/* ── Name ──────────────────────────────────────── */}
        <motion.div {...fadeUp(0.2)} style={{ marginBottom: 20 }}>
          <h1 style={{
            fontFamily: 'var(--sans)', fontWeight: 900,
            fontSize: 'clamp(52px, 9vw, 110px)',
            lineHeight: 0.95, letterSpacing: '-0.04em',
            marginBottom: 0,
          }}>
            <span style={{ color: 'var(--text)' }}>ILIAS</span>
            {' '}
            <span className="gradient-text">BEKNAZAROV</span>
            <span style={{ color: 'var(--accent)', fontSize: '0.5em', lineHeight: 1 }}>.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '0.85rem',
            color: 'var(--text-2)', letterSpacing: '0.1em',
            marginTop: 16,
          }}>
            JUNIOR FRONTEND DEVELOPER — BUILDING REAL PRODUCTS WITH REACT & JAVASCRIPT
          </p>
        </motion.div>

        {/* ── 3-column info cards ────────────────────────── */}
        <motion.div {...fadeUp(0.35)} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 12, marginTop: 48, marginBottom: 48,
        }}>

          {/* Card 1 — Active */}
          <div className="card card-glow" style={{ padding: '22px 24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />
              <span className="section-label" style={{ fontSize: '0.65rem' }}>ACTIVE_CODE</span>
            </div>
            <p style={{ fontWeight: 600, fontSize: '1rem', lineHeight: 1.5, marginBottom: 16, color: 'var(--text)' }}>
              Frontend dev & IT student — building real-world apps with React, Django & REST APIs
            </p>
            <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-2)', letterSpacing: '0.1em' }}>
              // UNIVERSITY_PROJECTS • TEAM_BASED • GROWING_FAST
            </p>
          </div>

          {/* Card 2 — Stack */}
          <div className="card card-glow" style={{ padding: '22px 24px' }}>
            <div className="section-label" style={{ fontSize: '0.65rem', marginBottom: 16 }}>ECOSYSTEM_STACK</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px' }}>
              {[
                { cat: '+ WEB', items: 'React • JavaScript' },
                { cat: '+ BACKEND', items: 'Python • Django' },
                { cat: '+ DATABASE', items: 'PostgreSQL • REST API' },
                { cat: '+ TOOLS', items: 'Git • GitHub • Figma' },
              ].map(s => (
                <div key={s.cat}>
                  <div className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', marginBottom: 4, letterSpacing: '0.06em' }}>{s.cat}</div>
                  <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-2)' }}>{s.items}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <a href="#contact" className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontSize: '0.7rem' }} data-hover="true">
                START COLLABORATION
              </a>
            </div>
          </div>

          {/* Card 3 — Location */}
          <div className="card card-glow" style={{ padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{
                padding: '6px 14px', borderRadius: 100,
                border: '1px solid rgba(0,212,255,0.3)',
                background: 'rgba(0,212,255,0.06)',
                fontFamily: 'var(--mono)', fontSize: '0.65rem',
                color: 'var(--accent)', letterSpacing: '0.1em',
              }}>
                ONLINE_24/7
              </div>
            </div>
            <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-2)', marginBottom: 6 }}>Remote</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 20 }}>
              <span className="text-accent">World</span>wide
            </p>
            <div>
              <div className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--text-2)', marginBottom: 4 }}>LOCATION_BASE</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600, letterSpacing: '0.05em' }}>BISHKEK, KG</span>
                <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--green)' }}>● Online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scrolling tech ticker ──────────────────────── */}
      <motion.div
        className="ticker-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{ padding: '14px 0' }}
      >
        <div className="ticker-inner animate-marquee" style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--text-2)', gap: 40 }}>
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} style={{ marginRight: 40, flexShrink: 0, color: item === '✦' ? 'var(--accent)' : 'var(--text-2)' }}>{item}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
