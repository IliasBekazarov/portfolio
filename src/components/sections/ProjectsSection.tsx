'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    id: '01',
    title: 'ATTENDANCE MARKING SYSTEM',
    desc: 'Web system for managing student attendance and reports at university. Features role-based authentication with 5 user roles: Admin, Manager, Teacher, Student, and Parent.',
    tags: ['PYTHON', 'DJANGO', 'REACT.JS', 'POSTGRESQL', 'REST API'],
    status: 'LIVE',
    year: '2025',
    href: 'https://github.com/IliasBekazarov/attendance-3',
  },
  {
    id: '02',
    title: 'SMART BOOKING SYSTEM',
    desc: 'Online queue and booking management system. Users can book dentist appointments remotely. Built frontend with React and integrated REST APIs collaborating with backend developers.',
    tags: ['REACT.JS', 'JAVASCRIPT', 'REST API', 'HTML', 'CSS'],
    status: 'LIVE',
    year: '2025',
    href: 'https://github.com/IliasBekazarov/booking-line',
  },
];

const STATUS_COLOR: Record<string, string> = {
  LIVE: 'var(--green)',
  BETA: 'var(--yellow)',
  WIP:  'var(--accent)',
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div className="section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 40 }}
        >
          <div className="section-label" style={{ marginBottom: 12 }}>SELECTED_WORK</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, fontStyle: 'italic', lineHeight: 1.05 }}>
            Featured<br />
            <span className="text-outline">Projects.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              className="card hover-lift"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{ padding: 24, display: 'block', textDecoration: 'none', color: 'inherit' }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-2)', letterSpacing: '0.1em' }}>{p.id}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: STATUS_COLOR[p.status] }} />
                  <span className="font-mono" style={{ fontSize: '0.6rem', color: STATUS_COLOR[p.status], letterSpacing: '0.1em' }}>{p.status}</span>
                </div>
              </div>

              <h3 style={{ fontWeight: 900, fontSize: '1.15rem', letterSpacing: '-0.01em', marginBottom: 10 }}>{p.title}</h3>
              <p style={{ color: 'var(--text-2)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              {/* Arrow */}
              <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-2)' }}>↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
