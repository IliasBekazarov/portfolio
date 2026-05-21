'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const JOBS = [
  {
    date: 'SEP 2025 — DEC 2025',
    role: 'FULL STACK DEVELOPER (INTERN)',
    company: 'SU Solution · Bishkek',
    desc: 'Developed a web-based Attendance Marking System for university use. Implemented student attendance tracking, reporting, and leave request features. Built REST APIs and integrated frontend with backend services.',
    tags: ['PYTHON', 'DJANGO', 'REACT.JS', 'POSTGRESQL', 'REST API'],
  },
  {
    date: 'FEB 2025 — APR 2025',
    role: 'FRONTEND DEVELOPER (TEAM PROJECT)',
    company: 'StartApp · Remote',
    desc: 'Built the frontend of a Smart Booking System using React. Implemented an online queue system allowing users to book dentist appointments remotely. Collaborated with backend developers to integrate REST APIs.',
    tags: ['REACT.JS', 'JAVASCRIPT', 'REST API', 'HTML', 'CSS'],
  },
];

const EDU = [
  {
    date: 'SEP 2024 — DEC 2025',
    degree: 'IT & BUSINESS COLLEGE',
    school: 'Salymbekov University · Bishkek',
    desc: 'IT student specialising in frontend development. Built real-world university and team-based projects including the Attendance Marking System.',
    tags: ['FRONTEND', 'WEB DEV', 'DATABASES'],
  },
  {
    date: 'JAN 2026 — APR 2026',
    degree: 'EXCHANGE PROGRAM',
    school: 'INTI International University · Malaysia',
    desc: 'Academic Mobility Program. International study experience at a top Malaysian university, broadening technical and global perspective.',
    tags: ['INTERNATIONAL', 'EXCHANGE', 'MALAYSIA'],
  },
];

function TimelineCard({ date, title, sub, desc, tags, i, inView }: {
  date: string; title: string; sub: string; desc: string; tags: string[];
  i: number; inView: boolean;
}) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      style={{ padding: 22 }}
    >
      <span className="font-mono" style={{
        display: 'inline-block', marginBottom: 14, padding: '4px 12px',
        background: 'var(--bg)', border: '1px solid var(--border)',
        borderRadius: 999, fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--accent)',
      }}>{date}</span>
      <h4 style={{ fontWeight: 900, fontSize: '0.9rem', letterSpacing: '0.02em', marginBottom: 4 }}>{title}</h4>
      <div className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-2)', marginBottom: 10 }}>{sub}</div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 14 }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div className="section" ref={ref}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>

          {/* ── Experience ─────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 24 }}
            >
              <div className="section-label" style={{ marginBottom: 10 }}>WORK_HISTORY</div>
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, fontStyle: 'italic' }}>Experience</h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {JOBS.map((j, i) => (
                <TimelineCard key={i} date={j.date} title={j.role} sub={j.company} desc={j.desc} tags={j.tags} i={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* ── Education ──────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginBottom: 24 }}
            >
              <div className="section-label" style={{ marginBottom: 10 }}>ACADEMIC_PATH</div>
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, fontStyle: 'italic' }}>Education</h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {EDU.map((e, i) => (
                <TimelineCard key={i} date={e.date} title={e.degree} sub={e.school} desc={e.desc} tags={e.tags} i={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: 48, textAlign: 'center' }}
        >
          <a
            href="/Ilias-Beknazarov-CV.pdf"
            download="Ilias-Beknazarov-CV.pdf"
            className="btn btn-solid font-mono"
            style={{ letterSpacing: '0.12em', fontSize: '0.72rem', padding: '14px 40px' }}
          >
            DOWNLOAD_FULL_CV ↓
          </a>
        </motion.div>
      </div>
    </div>
  );
}
