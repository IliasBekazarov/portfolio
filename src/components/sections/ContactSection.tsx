'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SOCIALS = [
  { label: 'GITHUB',    href: 'https://github.com/IliasBekazarov',     handle: '@IliasBekazarov' },
  { label: 'EMAIL',     href: 'mailto:ilias.dev.kg@gmail.com',         handle: 'ilias.dev.kg@gmail.com' },
  { label: 'WHATSAPP',  href: 'https://wa.me/996999459561',            handle: '+996 999 45 95 61' },
  { label: 'PHONE',     href: 'tel:+996999459561',                     handle: '+996 999 45 95 61' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const tz = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Bishkek', hour12: false,
        hour: '2-digit', minute: '2-digit', second: '2-digit',
      });
      setTime(tz);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="contact" ref={ref} style={{
      background: 'var(--bg)',
      padding: 'clamp(80px,10vw,140px) 0 0',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'flex-end' }}>

          {/* ── Big headline ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="section-label" style={{ marginBottom: 20 }}>GET_IN_TOUCH</div>

            <div style={{ lineHeight: 0.95, fontWeight: 900, fontStyle: 'italic' }}>
              {[
                { text: "LET'S BUILD", outline: false },
                { text: 'THE FUTURE', outline: true },
                { text: 'TOGETHER', outline: true },
              ].map(({ text, outline }, i) => (
                <div key={i} style={{
                  fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
                  WebkitTextStroke: outline ? '1.5px var(--text)' : 'none',
                  color: outline ? 'transparent' : 'var(--text)',
                  display: 'block',
                }}>{text}</div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
              <a href="mailto:ilias.dev.kg@gmail.com" className="btn btn-accent" style={{ fontSize: '0.72rem', letterSpacing: '0.1em', padding: '14px 28px' }}>
                START A PROJECT ↗
              </a>
              <a href="#contact" className="btn btn-solid" style={{ fontSize: '0.72rem', letterSpacing: '0.1em', padding: '14px 28px' }}>
                <span className="status-dot" /> AVAILABLE FOR HIRE
              </a>
            </div>
          </motion.div>

          {/* ── Right: social + clock ──────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
          >
            {/* Social links */}
            <div>
              <div className="section-label" style={{ marginBottom: 14 }}>SOCIAL_CONNECT</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: 'inherit', padding: '10px 0', borderBottom: '1px solid var(--border)' }}
                    className="hover-lift"
                  >
                    <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--text-2)' }}>{s.label}</span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Live clock */}
            <div>
              <div className="section-label" style={{ marginBottom: 10 }}>LOCAL_TIME</div>
              <div className="font-mono" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.02em', color: 'var(--accent)' }}>
                {time || '00:00:00'}
              </div>
              <div className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--text-2)', marginTop: 6 }}>
                BISHKEK, KYRGYZSTAN · UTC+6
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          marginTop: 80,
          padding: '20px clamp(20px, 6vw, 80px)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span className="font-mono" style={{ fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--text-2)' }}>
          © 2026 — LAUNCHED MAY 2026
        </span>
      </motion.div>
    </section>
  );
}
