'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CODE = [
  [['tok-kw','const '],['tok-var','dev '],['tok-kw','= '],['tok-str','"Ilias Beknazarov"'],['',';\n']],
  [['tok-kw','const '],['tok-var','focus '],['','= [']],
  [['','  '],['tok-str','"React"'],['',', '],['tok-str','"JavaScript"'],['',', '],['tok-str','"UI/UX"']],
  [['',']; ']],
  [['tok-kw','let '],['tok-var','status '],['','= '],['tok-str','"Open to opportunities"'],['',';']],
];

const STATS = [
  { value: '2',    label: 'PROJECTS' },
  { value: '1+',   label: 'YEARS EXP' },
  { value: 'React', label: 'MAIN STACK', accent: true },
  { value: 'Open',  label: 'TO HIRE', yellow: true },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="section" ref={ref}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>

          {/* ── Left: Code card + stats ──────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Code block */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{ padding: '24px' }}
            >
              {/* Window bar */}
              <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
                {['#ff5f57','#ffbd2e','#28c840'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
              </div>
              {/* Code lines */}
              <pre style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', lineHeight: 1.9, margin: 0 }}>
                {CODE.map((line, li) => (
                  <div key={li}>
                    {line.map(([cls, txt], ti) => (
                      <span key={ti} className={cls}>{txt}</span>
                    ))}
                  </div>
                ))}
              </pre>
            </motion.div>

            {/* About Me heading + text */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{ padding: '24px' }}
            >
              <h2 style={{ fontWeight: 900, fontSize: '2rem', fontStyle: 'italic', marginBottom: 16 }}>ABOUT ME</h2>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Junior Frontend Developer and IT student with hands-on experience building real-world
                web applications using React and JavaScript. Worked on an Attendance Marking System and
                a Smart Booking System — from REST API integration to responsive UI. Motivated to grow,
                ship great products, and contribute through teamwork and continuous learning.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
            >
              {STATS.map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '2rem', fontWeight: 900, lineHeight: 1,
                    color: s.accent ? 'var(--accent)' : s.yellow ? 'var(--yellow)' : 'var(--text)',
                    fontStyle: 'italic',
                  }}>
                    {s.value}
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-2)', marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Stack & Tech (skill bars) ─────────── */}
          <SkillBars inView={inView} />
        </div>
      </div>
    </div>
  );
}

const SKILLS = [
  { label: 'REACT.JS / JAVASCRIPT',   pct: 85, color: 'var(--yellow)' },
  { label: 'HTML / CSS',              pct: 90, color: 'var(--accent)' },
  { label: 'PYTHON / DJANGO',         pct: 72, color: 'var(--green)' },
  { label: 'REST API / POSTGRESQL',   pct: 75, color: '#c792ea' },
  { label: 'GIT / GITHUB',            pct: 80, color: '#f78c6c' },
];

function SkillBars({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      style={{ padding: '28px 28px 24px' }}
    >
      <div className="section-label" style={{ marginBottom: 6 }}>CORE_CAPABILITIES</div>
      <h3 style={{ fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', marginBottom: 28 }}>
        Stack &amp; Tech
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {SKILLS.map((sk, i) => (
          <div key={sk.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-2)' }}>{sk.label}</span>
              <span className="font-mono" style={{ fontSize: '0.7rem', color: sk.color }}>{sk.pct}%</span>
            </div>
            <div className="progress-track">
              <motion.div
                className="progress-fill"
                style={{ background: sk.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${sk.pct}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tools row */}
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {['CONTACT_ME', 'REACT.JS', 'PYTHON', 'DJANGO', 'GIT'].map((t, i) => (
          i === 0
            ? <a key={t} href="#contact" className="btn btn-solid" style={{ fontSize: '0.65rem', padding: '10px 20px' }} data-hover="true">CONTACT_ME</a>
            : <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}
