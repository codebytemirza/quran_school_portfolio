import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyAsar } from './components/WhyAsar';
import { Courses } from './components/Courses';
import { HowItWorks, AyahSpotlight } from './components/MiddleSections';
import { Testimonials, Contact } from './components/BottomSections';
import { Footer, FloatingWhatsApp } from './components/FooterUtils';
import { StarField } from './components/Canvas';

export default function App() {
  return (
    <div className="relative min-h-screen pt-0 bg-[--bg-void] text-[--text-primary] selection:bg-[--color-gold] selection:text-[--bg-void]">
      {/* Background Layer */}
      <StarField />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[--color-green] opacity-[0.05] rounded-full blur-[120px] pointer-events-none z-[-1]" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex flex-col items-center w-full relative z-10">
        <Hero />
        <WhyAsar />
        <Courses />
        <HowItWorks />
        <AyahSpotlight />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer & Utilities */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
