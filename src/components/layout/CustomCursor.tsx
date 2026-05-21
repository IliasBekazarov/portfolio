'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const trailSpringConfig = { damping: 35, stiffness: 150 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const trailSpringX = useSpring(trailX, trailSpringConfig);
  const trailSpringY = useSpring(trailY, trailSpringConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const hasTouchRef = useRef(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Only show cursor on non-touch devices
      if (hasTouchRef.current) return;
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
      trailX.set(e.clientX - 20);
      trailY.set(e.clientY - 20);
      setIsVisible(true);
    };

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only trigger hovering when the element explicitly opts in via data-hover
      if (target.closest('[data-hover], a, button, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-hover], a, button, [role="button"]')) {
        setIsHovering(false);
      }
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

  document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleEnter);
    document.addEventListener('mouseout', handleLeave);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
  // Detect touch devices and avoid showing custom cursor
  const handleTouch = () => { hasTouchRef.current = true; };
  document.addEventListener('touchstart', handleTouch, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleEnter);
      document.removeEventListener('mouseout', handleLeave);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('touchstart', handleTouch as any);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{ x: trailSpringX, y: trailSpringY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.8 : isClicking ? 0.8 : 1,
          width: 40,
          height: 40,
        }}
        transition={{ scale: { duration: 0.15 } }}
      >
        <div
          className="w-10 h-10 rounded-full border border-[#00d4ff] opacity-40"
          style={{
            boxShadow: '0 0 10px rgba(0,212,255,0.3)',
          }}
        />
      </motion.div>

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{ x: springX, y: springY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.6 : isHovering ? 0 : 1,
        }}
        transition={{ scale: { duration: 0.1 } }}
      >
        <div
          className="w-4 h-4 rounded-sm"
          style={{
            background: 'var(--accent-primary)',
            boxShadow: '0 0 10px rgba(0,212,255,0.8), 0 0 20px rgba(0,212,255,0.4)',
          }}
        />
      </motion.div>

      {/* Hover state: expanded glow */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-40"
          style={{ x: trailSpringX, y: trailSpringY }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <div
            className="w-10 h-10 rounded-full"
            style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }}
          />
        </motion.div>
      )}
    </>
  );
}
