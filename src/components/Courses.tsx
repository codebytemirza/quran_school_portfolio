import React from 'react';
import { BentoBox, FloatingArabic } from './Shared';

export function Courses() {
  const courses = [
    {
      id: "qaida",
      icon: "menu_book",
      name: "Noorani Qaida",
      level: "Beginners",
      duration: "2 Months",
      desc: "The essential foundation for reading the Quran using correct Arabic pronunciation.",
      className: "lg:col-span-1 lg:row-span-2",
      glow: "a" as const,
      topics: ["Arabic Alphabets", "Correct Pronunciation", "Joining Words", "Basic Vowels (Harakat)"]
    },
    {
      id: "nazra",
      icon: "sort_by_alpha",
      name: "Nazra Quran",
      level: "Quran Reading",
      duration: "4 Months",
      desc: "Read the Quran fluently by looking, focusing on accuracy and fluency.",
      className: "lg:col-span-1 lg:row-span-1",
      glow: "b" as const,
      topics: ["Fluent Reading", "Accuracy Focus", "Daily Recitation", "Makharij Review"]
    },
    {
      id: "tajweed",
      icon: "mic",
      name: "Tajweed Rules",
      level: "Pronunciation",
      duration: "3 Months",
      desc: "Master the intricate rules of recitation to read the Quran as it was revealed.",
      className: "lg:col-span-1 lg:row-span-1",
      glow: "c" as const,
      topics: ["Ghunnah & Ikhfa", "Madd Rules", "Stopping (Waqf)", "Articulation Points"]
    },
    {
      id: "hifz",
      icon: "psychology",
      name: "Hifz Program",
      level: "Memorization",
      duration: "12–24 Months",
      desc: "Structured memorization program with robust revision strategies.",
      className: "lg:col-span-1 lg:row-span-1",
      glow: "d" as const,
      topics: ["Daily New Lessons", "Continuous Revision", "Retention Techniques", "Pacing & Goal Setting"]
    },
    {
      id: "tafseer",
      icon: "library_books",
      name: "Tafseer ul Quran",
      level: "Meaning & Analysis",
      duration: "6 Months",
      desc: "Deep dive into the meanings, historical context, and wisdom of the verses.",
      className: "lg:col-span-1 lg:row-span-1",
      glow: "a" as const,
      topics: ["Historical Context", "Root Arabic Words", "Lessons & Morals", "Practical Application"]
    },
    {
      id: "islamic",
      icon: "dark_mode",
      name: "Islamic Studies",
      level: "Aqeedah/Fiqh/Seerah",
      duration: "3 Months",
      desc: "Comprehensive study covering the core tenets of Islamic faith and history.",
      className: "lg:col-span-1 lg:row-span-1",
      glow: "b" as const,
      topics: ["Prophetic Seerah", "Basic Fiqh", "Aqeedah (Faith)", "Islamic Etiquette (Adab)"]
    }
  ];

  return (
    <section id="courses" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col z-10">
      
      {/* Decorative SVG Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-repeat z-[-1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25L30 0Z' fill='%23C9A84C'/%3E%3C/svg%3E")`
        }}
      />
      <FloatingArabic letter="ﻥ" className="bottom-[10%] left-[5%] text-[180px]" delay="7s" />

      <div className="flex flex-col items-center text-center mb-16">
        <div className="bento-glass !py-1 !px-4 !rounded-full mb-4 animate-eyebrowIn">
          <span className="text-xs font-bold text-[--text-secondary] tracking-[2px] uppercase">Our Curriculum</span>
        </div>
        <h2 className="text-[--fs-h2] font-serif animate-goldShimmer text-gold-gradient">
          Courses for Every Learner
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-auto md:auto-rows-[minmax(280px,auto)] w-full">
        
        {courses.map((course, i) => {
          let gridClass = "col-span-1";
          if (course.id === "qaida") gridClass = "md:col-span-2 xl:col-span-2";
          else if (course.id === "islamic") gridClass = "md:col-span-2 xl:col-span-3";
          else if (course.id === "tafseer") gridClass = "xl:col-span-2";

          return (
            <BentoBox key={course.id} className={`${gridClass} flex flex-col group hover:bg-[rgba(0,0,0,0.02)]`} glowColor={course.glow} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4 sm:gap-0">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm bg-white">
                   <span className="material-symbols-outlined text-[32px] text-[--color-gold] relative z-10">{course.icon}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.1em] font-bold bg-[rgba(0,0,0,0.04)] text-gray-700 px-3 py-1.5 rounded-full">{course.level}</span>
                  <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-[--color-gold] bg-[rgba(201,168,76,0.1)] px-3 py-1.5 rounded-full border border-[rgba(201,168,76,0.2)]">{course.duration}</span>
                </div>
              </div>
              
              <h3 className="text-[clamp(1.5rem,2vw,1.75rem)] font-serif text-[--text-primary] mb-3 font-bold group-hover:text-[--color-gold] transition-colors">{course.name}</h3>
              <p className="text-[15px] text-[--text-secondary] mb-6 leading-relaxed">
                {course.desc}
              </p>
              
              <div className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.topics.map((topic, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[--text-secondary] bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.04)] px-3 py-1.5 rounded-md">
                      <span className="w-1 h-1 rounded-full bg-[--color-gold]"></span>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href="https://wa.me/923284119134" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex mt-auto text-sm font-semibold text-[--color-gold] group/btn hover:text-[--color-green] items-center gap-2 w-max"
              >
                Course Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </BentoBox>
          );
        })}

        <div className="md:col-span-2 xl:col-span-3 animate-badgeBob flex w-full" style={{ animationDelay: '1s' }}>
          <BentoBox className="w-full flex w-full flex-col md:flex-row items-center justify-between text-center md:text-left !py-8 !px-10" glowColor="c" delay={0.7} glowPosition="center">
            <span className="font-arabic text-[clamp(28px,4vw,40px)] text-[--text-arabic] mb-4 md:mb-0 drop-shadow-md order-1 md:order-2 leading-tight">"وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ"</span>
            <div className="flex items-center gap-4 order-2 md:order-1">
               <span className="w-12 h-[1px] bg-[--color-gold] hidden md:block opacity-50"></span>
               <span className="text-xs font-bold text-[--color-gold] uppercase tracking-[0.2em]">Quran 54:17</span>
            </div>
          </BentoBox>
        </div>

      </div>
    </section>
  );
}
