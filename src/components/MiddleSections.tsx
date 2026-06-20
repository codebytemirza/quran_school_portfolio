import React from 'react';
import { BentoBox, FloatingArabic, MicroGlowOrb, useIntersectionObserver } from './Shared';

export function HowItWorks() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="how-it-works" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col z-10 overflow-hidden">
      
      {/* Background Fillers */}
      <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(201,168,76,0.05) 0px, rgba(201,168,76,0.05) 1px, transparent 1px, transparent 20px)' }} />
      <FloatingArabic letter="ﺏ" className="top-[20%] left-[10%] text-[100px]" delay="1s" />
      <FloatingArabic letter="ﺡ" className="bottom-[10%] right-[15%] text-[130px]" delay="8s" />
      <MicroGlowOrb className="top-[5%] left-[5%] bg-radial-a" />
      <MicroGlowOrb className="bottom-[5%] right-[5%] bg-radial-c" />

      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="bento-glass !py-1 !px-4 !rounded-full mb-4 animate-eyebrowIn">
          <span className="text-xs font-bold text-[--text-secondary] tracking-[2px] uppercase">The Process</span>
        </div>
        <h2 className="text-[--fs-h2] font-serif animate-goldShimmer text-gold-gradient">
          Your Journey Starts Here
        </h2>
      </div>

      <div className="relative" ref={ref}>
        {/* Connection Line - Desktop Only */}
        <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] z-0">
           <svg className="w-full h-2" preserveAspectRatio="none">
             <line 
               x1="0" y1="4" x2="100%" y2="4" 
               stroke="rgba(201,168,76,0.3)" 
               strokeWidth="2" 
               strokeDasharray="8 8" 
               className={isIntersecting ? 'animate-svgLineDraw' : ''}
               style={{ strokeDashoffset: isIntersecting ? 0 : 1000 }}
             />
           </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 w-full">
          {[
            { step: '1', icon: 'chat', title: 'Contact Us', desc: 'Send us a WhatsApp message to discuss your goals.', glow: 'a' as const },
            { step: '2', icon: 'cast_for_education', title: 'Free Trial', desc: 'Attend a free evaluation class with our expert teacher.', glow: 'b' as const },
            { step: '3', icon: 'wb_sunny', title: 'Begin', desc: 'Start your structured and personalized learning journey.', glow: 'c' as const },
          ].map((item, i) => (
            <BentoBox key={item.step} glowColor={item.glow} delay={i * 0.2} glowPosition="center" className="flex flex-col items-center text-center group hover:bg-[rgba(0,0,0,0.02)]">
              <div className="flex flex-col items-center relative mb-6">
                 <div className="text-[100px] font-serif font-bold text-[rgba(201,168,76,0.15)] leading-none select-none -mb-8 z-0 transition-transform duration-500 group-hover:scale-110">
                   0{item.step}
                 </div>
                 <div className="w-16 h-16 rounded-full bg-white border border-[rgba(0,0,0,0.06)] flex items-center justify-center relative z-10 shadow-md group-hover:bg-[#FAF8F5] transition-colors">
                    <span className="material-symbols-outlined text-[--color-gold] text-3xl">{item.icon}</span>
                 </div>
              </div>
              <h3 className="text-[22px] font-serif text-[--text-primary] mb-3 font-bold group-hover:text-[--color-gold] transition-colors">{item.title}</h3>
              <p className="text-[15px] text-[--text-secondary] max-w-[240px] leading-relaxed">{item.desc}</p>
            </BentoBox>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AyahSpotlight() {
  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto w-full flex flex-col z-10">
      <div className="absolute inset-0 bg-[--color-green] opacity-[0.03] z-[-1]" />
      
      <div className="w-full relative bento-glass !bg-[rgba(45,106,79,0.04)] !border-[rgba(45,106,79,0.1)] !p-8 md:!p-16 flex flex-col items-center text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(45,106,79,0.1)_0%,transparent_70%)] pointer-events-none z-0" />
        
        {/* Fillers */}
        <FloatingArabic letter="ﷲ" className="top-1/2 left-[5%] transform -translate-y-1/2 text-[180px] opacity-[0.05]" delay="0s" duration="20s" />
        <FloatingArabic letter="ﷲ" className="top-1/2 right-[5%] transform -translate-y-1/2 text-[180px] opacity-[0.05]" delay="5s" duration="25s" />
        <MicroGlowOrb className="top-0 left-0 bg-radial-a" />
        <MicroGlowOrb className="top-0 right-0 bg-radial-b" />
        <MicroGlowOrb className="bottom-0 left-0 bg-radial-c" />
        <MicroGlowOrb className="bottom-0 right-0 bg-radial-d" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
          {/* Top Divider */}
          <svg className="w-48 h-6 text-[--color-gold] opacity-60 mb-8" viewBox="0 0 100 20" fill="currentColor">
            <path d="M50 0 C60 10 70 10 80 10 L100 10 L100 12 L80 12 C70 12 60 12 50 20 C40 12 30 12 10 12 L0 12 L0 10 L10 10 C30 10 40 10 50 0 Z" />
            <circle cx="50" cy="10" r="3" />
          </svg>

          <h2 dir="rtl" className="font-arabic text-[--fs-arabic] text-[--text-arabic] mb-8 leading-[1.6] drop-shadow-md">
            "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ"
          </h2>
          
          <p className="font-serif italic text-xl md:text-3xl text-[--text-secondary] mb-6 leading-relaxed max-w-2xl">
            "And We have certainly made the Quran easy to remember. So is there anyone who will be mindful?"
          </p>
          
          <span className="font-sans text-sm text-[--color-gold] uppercase tracking-[2px] font-medium mb-10">
            — Surah Al-Qamar [54:17]
          </span>

          {/* Bottom Divider */}
          <svg className="w-48 h-6 text-[--color-gold] opacity-60 mb-10 transform rotate-180" viewBox="0 0 100 20" fill="currentColor">
            <path d="M50 0 C60 10 70 10 80 10 L100 10 L100 12 L80 12 C70 12 60 12 50 20 C40 12 30 12 10 12 L0 12 L0 10 L10 10 C30 10 40 10 50 0 Z" />
            <circle cx="50" cy="10" r="3" />
          </svg>

          <button 
            onClick={() => window.open('https://wa.me/923284119134', '_blank')}
            className="border border-[--color-gold] text-[--color-gold] px-10 py-5 rounded-2xl font-bold transition-all hover:bg-[rgba(201,168,76,0.1)] ctabutton flex items-center gap-3 w-max mx-auto shadow-[0_4px_20px_rgba(201,168,76,0.15)]"
          >
            Start Your Quran Journey
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
