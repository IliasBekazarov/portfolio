'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/utils';

const steps = [
  {
    phase: '01',
    title: 'Discover & Design',
    icon: '◈',
    color: '#00d4ff',
    description: 'Understanding goals, users, and constraints. Wireframes, user flows, and design systems.',
    tools: ['Figma', 'User Research', 'Architecture Planning'],
  },
  {
    phase: '02',
    title: 'Engineer',
    icon: '⚙',
    color: '#b084ff',
    description: 'Clean, typed, documented code. Component-driven development with TDD principles.',
    tools: ['TypeScript', 'React', 'Node.js'],
  },
  {
    phase: '03',
    title: 'Test & Optimize',
    icon: '◎',
    color: '#00ffaa',
    description: 'Unit tests, integration tests, performance profiling, and accessibility audits.',
    tools: ['Jest', 'Playwright', 'Lighthouse'],
  },
  {
    phase: '04',
    title: 'Deploy & Monitor',
    icon: '⬆',
    color: '#ffd700',
    description: 'CI/CD pipelines, containerized deployments, monitoring, and iterative improvements.',
    tools: ['Docker', 'GitHub Actions', 'Vercel'],
  },
];

const principles = [
  { label: 'code_quality', value: '"Clean, maintainable, documented"', color: '#00d4ff' },
  { label: 'ux_first', value: '"User experience drives decisions"', color: '#b084ff' },
  { label: 'performance', value: '"Fast, optimized, accessible"', color: '#00ffaa' },
  { label: 'scalability', value: '"Built to grow"', color: '#ffd700' },
  { label: 'collaboration', value: '"Clear communication, version control"', color: '#ff9060' },
];

export default function ProcessSection() {
  return (
    <section className="snap-section flex items-center justify-center relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(rgba(0,255,170,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,170,0.4) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <SectionLabel label="04 — Process" />
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
            <span className="text-white">How I </span>
            <span className="gradient-text-green">Build</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Process steps */}
          <div>
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-px" style={{
                background: 'linear-gradient(to bottom, #00d4ff, #b084ff, #00ffaa, #ffd700)',
                opacity: 0.3,
              }} />

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.phase}
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                  >
                    {/* Icon */}
                    <div className="shrink-0">
                      <motion.div
                        className="w-16 h-16 glass rounded-xl flex items-center justify-center text-xl z-10 relative"
                        style={{
                          border: `1px solid ${step.color}44`,
                          boxShadow: `0 0 20px ${step.color}22`,
                          color: step.color,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs" style={{ color: step.color }}>{step.phase}</span>
                        <h3 className="font-display font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="font-body text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map(tool => (
                          <span key={tool} className="font-mono text-xs px-2 py-0.5 rounded" style={{
                            background: step.color + '15',
                            color: step.color,
                            border: `1px solid ${step.color}33`,
                          }}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Principles code */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0,255,170,0.2)' }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <span className="font-mono text-xs ml-2" style={{ color: '#00ffaa' }}>principles.ts</span>
              </div>

              <div className="p-6 space-y-1">
                <div className="font-mono text-sm">
                  <span className="code-keyword">const </span>
                  <span className="code-property">principles</span>
                  <span className="text-white"> = {'{'}</span>
                </div>

                {principles.map((p, i) => (
                  <motion.div
                    key={p.label}
                    className="font-mono text-sm pl-4 group flex items-start gap-2 hover:bg-white/[0.02] rounded px-3 -mx-1 py-0.5 transition-colors cursor-default"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <span style={{ color: p.color }}>{p.label}</span>
                    <span className="text-white">: </span>
                    <span className="code-string">{p.value}</span>
                    <span className="text-white">,</span>
                  </motion.div>
                ))}

                <div className="font-mono text-sm text-white">{'}'}</div>
                <div className="font-mono text-sm mt-2">
                  <span className="code-keyword">export default </span>
                  <span className="code-function">devPhilosophy</span>
                  <span className="text-white">;</span>
                </div>

                <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="font-mono text-xs space-y-1">
                    <div style={{ color: 'var(--text-comment)' }}>// Runtime stats</div>
                    <div>
                      <span style={{ color: 'var(--text-comment)' }}>uptime: </span>
                      <span style={{ color: '#00ffaa' }}>99.9%</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-comment)' }}>status: </span>
                      <span style={{ color: '#00ffaa' }}>&ldquo;always_learning&rdquo;</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-comment)' }}>next_deploy: </span>
                      <span style={{ color: '#00d4ff' }}>&ldquo;your_project&rdquo;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { v: '60fps', l: 'Animations' },
                { v: '<3s', l: 'Load Time' },
                { v: 'A11y', l: 'Accessible' },
              ].map(stat => (
                <div key={stat.l} className="glass rounded-xl p-4 text-center" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="font-display font-bold text-lg gradient-text-green">{stat.v}</div>
                  <div className="font-mono text-xs mt-1" style={{ color: 'var(--text-comment)' }}>{stat.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
