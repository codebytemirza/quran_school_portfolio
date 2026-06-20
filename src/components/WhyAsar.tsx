import React from 'react';
import { BentoBox, FloatingArabic, MicroGlowOrb } from './Shared';

export function WhyAsar() {
  return (
    <section id="why-asar" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col z-10">
      
      {/* Decorative SVG Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] bg-repeat z-[-1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25L30 0Z' fill='%23C9A84C'/%3E%3C/svg%3E")`
        }}
      />
      <FloatingArabic letter="ﻡ" className="top-[10%] right-[10%] text-[150px]" delay="2s" />

      <div className="flex flex-col items-center text-center mb-16">
        <div className="bento-glass !py-1 !px-4 !rounded-full mb-4 animate-eyebrowIn">
          <span className="text-xs font-bold text-[--text-secondary] tracking-[2px] uppercase">Why Choose Us</span>
        </div>
        <h2 className="text-[--fs-h2] font-serif animate-goldShimmer text-gold-gradient">
          Built for Every Learner
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* Mission Card - Spans 2 rows, 2 cols on lg */}
        <BentoBox className="lg:col-span-2 lg:row-span-2 flex flex-col justify-center" glowColor="b" delay={0}>
          <svg className="w-12 h-12 text-[--color-gold] opacity-20 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.433.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
          <blockquote className="text-2xl md:text-3xl font-serif text-[--text-primary] leading-relaxed mb-4">
            "Knowledge of the Quran is the foundation of all wisdom."
          </blockquote>
          <span className="text-sm text-[--text-secondary] font-medium">— ASAR Quran School Mission</span>
          <MicroGlowOrb className="bottom-4 right-4 bg-radial-b" />
        </BentoBox>

        {/* Scholars */}
        <BentoBox className="lg:col-span-1 lg:row-span-1" glowColor="a" delay={0.1}>
          <span className="material-symbols-outlined text-[36px] text-[--color-gold] mb-3">eco</span>
          <h3 className="text-lg font-serif text-[--text-gold] mb-2 font-bold">Certified Scholars</h3>
          <p className="text-sm text-[--text-secondary]">Qualified Qaris and Islamic teachers with Ijazah.</p>
        </BentoBox>

        {/* Flexible */}
        <BentoBox className="lg:col-span-1 lg:row-span-1" glowColor="c" delay={0.2}>
          <span className="material-symbols-outlined text-[36px] text-[--color-gold] mb-3">schedule</span>
          <h3 className="text-lg font-serif text-[--text-gold] mb-2 font-bold">Flexible Timings</h3>
          <p className="text-sm text-[--text-secondary]">Morning, evening, and weekend slots available.</p>
        </BentoBox>

        {/* Online All Ages */}
        <BentoBox className="lg:col-span-2 lg:row-span-1 flex flex-col justify-center" glowColor="d" delay={0.3} glowPosition="bottom-right">
          <div className="flex gap-4 items-center mb-3">
             <span className="material-symbols-outlined text-[36px] text-[--color-gold]">devices</span>
             <span className="material-symbols-outlined text-[36px] text-[--color-gold]">groups</span>
          </div>
          <h3 className="text-xl font-serif text-[--text-gold] mb-2 font-bold">100% Online · All Ages Welcome</h3>
          <p className="text-sm text-[--text-secondary]">Live and recorded sessions on any device for kids, teens, and adults at every level.</p>
          <MicroGlowOrb className="top-4 right-4 bg-radial-d" />
        </BentoBox>

        {/* Certs */}
        <BentoBox className="lg:col-span-1 lg:row-span-1" glowColor="b" delay={0.4}>
          <span className="material-symbols-outlined text-[36px] text-[--color-gold] mb-3">workspace_premium</span>
          <h3 className="text-lg font-serif text-[--text-gold] mb-2 font-bold">Certificates</h3>
          <p className="text-sm text-[--text-secondary]">Certified upon successful course completion.</p>
        </BentoBox>

        {/* Syllabus */}
        <BentoBox className="lg:col-span-2 lg:row-span-1" glowColor="a" delay={0.5} glowPosition="center">
          <span className="material-symbols-outlined text-[36px] text-[--color-gold] mb-3">emoji_events</span>
          <h3 className="text-lg font-serif text-[--text-gold] mb-2 font-bold">Structured Syllabus</h3>
          <p className="text-sm text-[--text-secondary]">Scientifically designed learning paths tailored for steady progress and deep understanding.</p>
        </BentoBox>

        {/* CTA Chip */}
        <BentoBox className="lg:col-span-1 lg:row-span-1 flex items-center justify-center p-0" glowColor="c" delay={0.6}>
           <a href="https://wa.me/923284119134" target="_blank" rel="noreferrer" className="w-full h-full flex flex-col items-center justify-center text-center p-6 group hover:bg-[rgba(0,0,0,0.02)] transition-colors">
             <span className="text-lg font-serif text-[--color-gold] mb-2 group-hover:scale-105 transition-transform duration-300">Start Today</span>
             <span className="text-[#25D366] opacity-80 group-hover:opacity-100 transition-opacity font-bold">Contact Us →</span>
           </a>
        </BentoBox>

      </div>
    </section>
  );
}
