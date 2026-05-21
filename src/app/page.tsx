'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/layout/Navigation';
import { ScrollProgressBar, SectionDots, SectionReveal } from '@/components/layout/ScrollEffects';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

const CustomCursor = dynamic(() => import('@/components/layout/CustomCursor'), { ssr: false });

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />
      <SectionDots />
      <Navigation />

      <main>
        <section id="home" className="snap-section">
          <SectionReveal><HeroSection /></SectionReveal>
        </section>
        <section id="about" className="snap-section">
          <SectionReveal delay={60}><AboutSection /></SectionReveal>
        </section>
        <div id="skills" className="snap-section">
          <SectionReveal delay={60}><SkillsSection /></SectionReveal>
        </div>
        <section id="projects" className="snap-section">
          <SectionReveal delay={60}><ProjectsSection /></SectionReveal>
        </section>
        <section id="experience" className="snap-section">
          <SectionReveal delay={60}><ExperienceSection /></SectionReveal>
        </section>
        <section id="contact" className="snap-section">
          <SectionReveal delay={60}><ContactSection /></SectionReveal>
        </section>
      </main>
    </>
  );
}
