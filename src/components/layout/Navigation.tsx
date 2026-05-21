'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export default function Navigation() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(7,7,9,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition: 'all 0.3s ease',
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px' }}>
          {/* Monogram */}
          <button
            onClick={() => scrollTo('#home')}
            data-hover="true"
            style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', padding: 0 }}
          >
            <div style={{
              width: 36, height: 36,
              border: '1px solid rgba(0,212,255,0.3)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '0.8rem',
              color: 'var(--accent)',
            }}>IB</div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-2)' }}>
              iliasdev
            </span>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="hidden-mobile">
            {links.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
                data-hover="true"
                style={{ background: 'none', border: 'none', padding: '6px 0' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="mailto:ilias@example.com" className="btn" data-hover="true"
              style={{ padding: '10px 20px', fontSize: '0.7rem', display: 'none' }}
              id="nav-cta">
              Hire me
            </a>
            {/* Burger — mobile */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              data-hover="true"
              className="show-mobile"
              style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
            >
              {[0,1,2].map(i => (
                <motion.div key={i} style={{ width: 22, height: 1.5, background: 'var(--text)', borderRadius: 2 }}
                  animate={menuOpen
                    ? i === 0 ? { rotate: 45, y: 6.5 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -6.5 }
                    : { rotate: 0, y: 0, opacity: 1 }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, zIndex: 49,
              background: 'rgba(7,7,9,0.97)', backdropFilter: 'blur(24px)',
              borderBottom: '1px solid var(--border)',
              padding: '24px 32px 32px',
              display: 'flex', flexDirection: 'column', gap: 24,
            }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                className="nav-link"
                style={{ background: 'none', border: 'none', textAlign: 'left', fontSize: '1rem', letterSpacing: '0.08em' }}
                data-hover="true"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } #nav-cta { display: flex !important; } }
      `}</style>
    </>
  );
}
