import React, { useEffect, useRef, useState } from 'react';
import heroImgUrl from '../assets/images/quran_hero_image_1781952742722.jpg';
import { ParticleConstellation } from './Canvas';
import { FloatingArabic, MicroGlowOrb, useIntersectionObserver } from './Shared';

function CounterUp({ end, suffix = '', duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver();
  const hasRun = useRef(false);

  useEffect(() => {
    if (isIntersecting && !hasRun.current) {
      hasRun.current = true;
      const start = performance.now();
      
      const update = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(end * ease));
        
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setCount(end); // Ensure we end exactly on the target
        }
      };
      
      requestAnimationFrame(update);
    }
  }, [isIntersecting, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-28 pb-12 overflow-hidden px-4 md:px-6 lg:px-12 max-w-[1440px] mx-auto w-full z-10">
      <ParticleConstellation />
      
      <FloatingArabic letter="ﷲ" className="top-[20%] left-[5%] text-[120px]" delay="0s" />
      <FloatingArabic letter="۞" className="top-[60%] left-[45%] text-[80px]" delay="5s" />
      <FloatingArabic letter="ﺱ" className="bottom-[15%] left-[20%] text-[100px]" delay="12s" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch z-10 w-full flex-grow mt-8">
        
        {/* Left Column - Main Hero Content */}
        <div className="lg:col-span-8 bento-glass !p-8 md:!p-14 w-full flex flex-col items-start relative overflow-hidden justify-center group h-full">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[--color-green] opacity-10 blur-[100px] pointer-events-none rounded-full transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[--color-gold] opacity-[0.08] blur-[100px] pointer-events-none rounded-full transform -translate-x-1/2 translate-y-1/2" />
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] animate-eyebrowIn mb-8 relative z-10 shadow-sm backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[--color-gold] animate-pulse"></span>
            <span className="text-[11px] md:text-sm font-bold text-[--color-gold] tracking-[0.2em] uppercase truncate max-w-full leading-none">✦ Enrolling Now — Batch 2026</span>
          </div>
          
          <h1 className="text-[clamp(42px,6vw,84px)] leading-[1.05] font-serif mb-8 animate-heroReveal relative z-10 w-full" style={{ animationDelay: '0s' }}>
            <span className="text-[--text-primary] block tracking-tight w-full">Learn the Quran</span>
            <span className="animate-goldShimmer text-gold-gradient block tracking-tight overflow-visible w-full pb-3" style={{ animationDelay: '0.2s' }}>With Clarity & Confidence.</span>
          </h1>
          
          <p className="text-[--fs-body] font-light text-[--text-secondary] max-w-xl mb-12 animate-heroReveal leading-[1.8] relative z-10 text-lg" style={{ animationDelay: '0.4s' }}>
            ASAR Quran School brings you structured, certified Quran education — from Qaida to Hifz. Online. Flexible. For every age.
          </p>
          
           <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-heroReveal relative z-10" style={{ animationDelay: '0.6s' }}>
             <button 
               onClick={() => window.open('https://wa.me/923284119134', '_blank')}
               className="px-8 py-4 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 animate-waHeartbeat hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] ctabutton whitespace-nowrap border-none"
               style={{ backgroundColor: '#25D366', color: '#ffffff' }}
             >
               Enroll on WhatsApp
               <span className="material-symbols-outlined text-xl">arrow_forward</span>
             </button>
             <button 
              onClick={() => { document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-4 md:py-5 rounded-2xl bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] text-[--text-primary] font-semibold hover:bg-[rgba(0,0,0,0.06)] transition-colors flex justify-center items-center gap-3 ctabutton whitespace-nowrap"
            >
              Browse Courses
              <span className="material-symbols-outlined text-xl">arrow_downward</span>
            </button>
          </div>

          {/* Floating Fact Chips - Integrated inside left column for cleanliness */}
          <div className="absolute bottom-10 right-10 hidden xl:flex items-center gap-4 z-20">
             <div className="px-5 py-2.5 rounded-xl bg-[rgba(255,255,255,0.4)] border border-[rgba(0,0,0,0.08)] backdrop-blur-md flex items-center gap-3 shadow-lg hover:bg-[rgba(255,255,255,0.6)] transition-colors cursor-default group/chip">
                <span className="material-symbols-outlined text-[--color-gold] text-[20px] group-hover/chip:rotate-12 transition-transform">library_books</span>
                <span className="text-[12px] font-bold text-gray-700 tracking-[0.1em] uppercase">114 Surahs</span>
             </div>
             <div className="px-5 py-2.5 rounded-xl bg-[rgba(255,255,255,0.4)] border border-[rgba(0,0,0,0.08)] backdrop-blur-md flex items-center gap-3 shadow-lg hover:bg-[rgba(255,255,255,0.6)] transition-colors cursor-default group/chip">
                <span className="material-symbols-outlined text-[--color-gold] text-[20px] group-hover/chip:-translate-y-1 transition-transform">menu_book</span>
                <span className="text-[12px] font-bold text-gray-700 tracking-[0.1em] uppercase">30 Juz</span>
             </div>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="lg:col-span-4 relative w-full h-[450px] lg:h-auto lg:min-h-[640px] animate-heroReveal flex" style={{ animationDelay: '0.4s' }}>
          <div className="bento-glass w-full h-full !p-2 relative overflow-hidden group flex-grow">
            <div className="absolute inset-0 bg-gradient-to-t from-[--bg-void] via-transparent to-transparent z-10 pointer-events-none opacity-80" />
            <div className="absolute inset-0 bg-[rgba(201,168,76,0.05)] group-hover:bg-transparent transition-colors duration-700 z-0 pointer-events-none" />
            
            <img 
              src={heroImgUrl} 
              alt="Holy Quran" 
              className="w-full h-full object-cover rounded-[28px] md:rounded-[36px] filter brightness-[0.8] contrast-[1.15] saturate-[1.2] transition-transform duration-[2s] group-hover:scale-105"
            />
            {/* Grand gradient overlay */}
            <div className="absolute inset-x-2 bottom-2 h-[75%] bg-gradient-to-t from-[#050A0E] via-[rgba(5,10,14,0.4)] to-transparent rounded-b-[28px] md:rounded-b-[36px] pointer-events-none z-10" />
            
            <div className="absolute bottom-10 left-10 right-10 z-20 flex flex-col items-start w-[calc(100%-5rem)]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-full border border-[rgba(255,255,255,0.3)] mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <span className="material-symbols-outlined text-[14px] text-white">star</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold drop-shadow-md">Featured Resource</span>
              </div>
              <p className="text-3xl font-serif text-white mb-5 shadow-sm font-medium leading-tight text-shadow">Interactive Digital <br/>Mus'haf</p>
              <div className="h-[2px] w-[80px] bg-gradient-to-r from-[--color-gold] to-transparent opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-8 z-10 w-full mb-4">
        {[
          { label: 'Students Enroll', value: 500, suffix: '+' },
          { label: 'Expert Courses', value: 6, suffix: '' },
          { label: 'Online Learning', value: 100, suffix: '%' },
          { label: 'Avg User Rating', value: 4.9, suffix: '★' }
        ].map((stat, i) => (
           <div key={i} className="bento-glass !p-6 md:!p-8 flex flex-col items-center justify-center text-center animate-bentoReveal opacity-0 gap-3 !border-[rgba(0,0,0,0.04)] !bg-[rgba(255,255,255,0.4)]" style={{ transform: 'scale(0.97)', animationDelay: `${0.8 + (i * 0.1)}s` }}>
             <div className="text-4xl lg:text-5xl font-serif text-[--text-gold] font-bold tracking-tight">
               {typeof stat.value === 'number' && stat.value % 1 !== 0 ? (
                 <span className="flex items-center gap-1">4.9 <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></span>
               ) : (
                 <CounterUp end={stat.value} suffix={stat.suffix} />
               )}
             </div>
             <div className="text-[10px] md:text-sm text-[--text-secondary] uppercase tracking-[0.2em] font-semibold leading-tight">{stat.label}</div>
           </div>
        ))}
      </div>
    </section>
  );
}
