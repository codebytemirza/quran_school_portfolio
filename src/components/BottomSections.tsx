import React from 'react';
import { BentoBox, MicroGlowOrb } from './Shared';

export function Testimonials() {
  const testimonials = [
    {
      quote: "My daughter finished Noorani Qaida in just 2 months. The teacher was incredibly patient. Highly recommend!",
      author: "Fatima R.",
      location: "Lahore",
      glow: "a" as const,
      delay: 0
    },
    {
      quote: "I am an adult learner and was hesitant, but the flexible timings made it easy. Now I read Quran confidently.",
      author: "Ahmed K.",
      location: "Dubai",
      glow: "b" as const,
      delay: 0.2
    },
    {
      quote: "The Tafseer course opened my eyes to the depth of the Quran. Excellent structured curriculum.",
      author: "Sara M.",
      location: "Karachi",
      glow: "c" as const,
      delay: 0.4
    }
  ];

  return (
    <section id="testimonials" className="relative py-12 md:py-16 px-0 md:px-12 max-w-7xl mx-auto w-full flex flex-col z-10">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] bg-repeat z-[-1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25L30 0Z' fill='%23C9A84C'/%3E%3C/svg%3E")`
        }}
      />

      <div className="flex flex-col items-center text-center mb-10 px-6">
        <div className="bento-glass !py-1 !px-4 !rounded-full mb-4 animate-eyebrowIn">
          <span className="text-xs font-bold text-[--text-secondary] tracking-[2px] uppercase">Student Voices</span>
        </div>
        <h2 className="text-[--fs-h2] font-serif animate-goldShimmer text-gold-gradient">
          What Our Students Say
        </h2>
      </div>

      <div className="relative w-full">
        {/* Floating Chips */}
        <div className="absolute top-[-40px] left-[10%] hidden lg:block animate-badgeBob bento-glass !py-2 !px-4 !rounded-full z-10" style={{ animationDelay: '0s' }}>
          <span className="text-xs text-[--text-secondary]">Join 500+ Students</span>
        </div>
        <div className="absolute top-[-20px] right-[10%] hidden lg:block animate-badgeBob bento-glass !py-2 !px-4 !rounded-full z-10" style={{ animationDelay: '1.5s' }}>
          <span className="text-xs text-[--text-secondary]">Learn at Your Pace</span>
        </div>

        {/* Horizontal scroll snap on mobile, grid on desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 px-6 md:px-0 pb-8 hide-scrollbar snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[85vw] sm:min-w-[50vw] md:min-w-0 snap-start flex">
              <BentoBox glowColor={t.glow} delay={t.delay} className="w-full flex flex-col relative !p-8 md:!p-10">
                <div className="absolute top-4 left-6 text-9xl font-serif text-[--color-gold] opacity-[0.08] leading-none pointer-events-none">"</div>
                <div className="flex gap-1 text-[--color-gold] mb-6 relative z-10">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-lg font-serif text-[--text-primary] mb-8 flex-grow relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex flex-col relative z-10">
                  <span className="text-sm font-bold text-[--text-primary]">{t.author}</span>
                  <span className="text-xs text-[--text-secondary]">{t.location}</span>
                </div>
              </BentoBox>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    number: '',
    course: '',
    timing: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Assalamu Alaikum! I want to enroll in ASAR Quran School.
Name: ${formData.name}
WhatsApp: ${formData.number}
Course: ${formData.course}
Timing: ${formData.timing}
Message: ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/923284119134?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col z-10">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="bento-glass !py-1 !px-4 !rounded-full mb-4 animate-eyebrowIn">
          <span className="text-xs font-bold text-[--text-secondary] tracking-[2px] uppercase">Get Started</span>
        </div>
        <h2 className="text-[--fs-h2] font-serif animate-goldShimmer text-gold-gradient">
          Ready to Begin?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full">
        
        {/* Left - Contact Info */}
        <BentoBox glowColor="a" delay={0.2} glowPosition="center" className="flex flex-col justify-center relative overflow-hidden h-full">
          <div className="absolute bottom-[-10%] right-[-5%] font-arabic text-[120px] opacity-[0.08] text-[--color-gold] animate-arabicDrift pointer-events-none z-0">
            بِسْمِ اللَّهِ
          </div>
          
          <div className="relative z-10 flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-serif text-[--color-gold] mb-2 font-bold">Contact Us</h3>
              <p className="text-[--text-secondary] text-sm leading-relaxed max-w-md">
                We are available to answer your questions and help you choose the best course.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] flex items-center justify-center text-xl">
                  <span className="material-symbols-outlined text-[--color-gold]">phone_iphone</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[--text-secondary] uppercase tracking-wider mb-1">WhatsApp / Phone</span>
                  <span className="text-lg font-medium text-[--text-primary]">+92 328 4119134</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] flex items-center justify-center text-xl">
                  <span className="material-symbols-outlined text-[--color-gold]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[--text-secondary] uppercase tracking-wider mb-1">Location</span>
                  <span className="text-lg font-medium text-[--text-primary]">Online — Available Worldwide</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] flex items-center justify-center text-xl">
                  <span className="material-symbols-outlined text-[--color-gold]">language</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[--text-secondary] uppercase tracking-wider mb-1">Website</span>
                  <span className="text-lg font-medium text-[--text-primary]">asarglobal.com</span>
                </div>
              </div>
            </div>

             <div className="pt-4 border-t border-[rgba(0,0,0,0.06)] mt-2">
                 <span className="text-xs text-[--text-secondary] tracking-widest uppercase block">ASAR Global Pvt. Ltd.</span>
             </div>
          </div>
        </BentoBox>

        {/* Right - Form */}
        <BentoBox glowColor="b" delay={0.4} className="flex flex-col h-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10 w-full h-full justify-between">
            <h3 className="text-xl font-serif text-[--text-primary] mb-2 font-bold">Enrollment Request</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input 
                required 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white border border-[rgba(0,0,0,0.08)] rounded-xl text-[--text-primary] px-4 py-3.5 min-h-[48px] focus:outline-none focus:border-[--color-gold] focus:ring-2 focus:ring-[rgba(201,168,76,0.15)] transition-all text-sm shadow-sm"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                required 
                type="tel" 
                placeholder="WhatsApp Number" 
                className="w-full bg-white border border-[rgba(0,0,0,0.08)] rounded-xl text-[--text-primary] px-4 py-3.5 min-h-[48px] focus:outline-none focus:border-[--color-gold] focus:ring-2 focus:ring-[rgba(201,168,76,0.15)] transition-all text-sm shadow-sm"
                value={formData.number} onChange={e => setFormData({...formData, number: e.target.value})}
              />
            </div>

            <select 
              required 
              className="w-full bg-[size:16px_16px] bg-white border border-[rgba(0,0,0,0.08)] shadow-sm rounded-xl text-[--text-primary] px-4 py-3.5 min-h-[48px] focus:outline-none focus:border-[--color-gold] focus:ring-2 focus:ring-[rgba(201,168,76,0.15)] transition-all text-sm appearance-none"
              value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})}
            >
              <option value="" disabled className="bg-white">Select Course</option>
              <option value="Noorani Qaida" className="bg-white">Noorani Qaida</option>
              <option value="Nazra Quran" className="bg-white">Nazra Quran</option>
              <option value="Tajweed Rules" className="bg-white">Tajweed Rules</option>
              <option value="Hifz Program" className="bg-white">Hifz Program</option>
              <option value="Tafseer ul Quran" className="bg-white">Tafseer ul Quran</option>
              <option value="Islamic Studies" className="bg-white">Islamic Studies</option>
            </select>

            <select 
              required 
              className="w-full bg-white border border-[rgba(0,0,0,0.08)] shadow-sm rounded-xl text-[--text-primary] px-4 py-3.5 min-h-[48px] focus:outline-none focus:border-[--color-gold] focus:ring-2 focus:ring-[rgba(201,168,76,0.15)] transition-all text-sm appearance-none"
              value={formData.timing} onChange={e => setFormData({...formData, timing: e.target.value})}
            >
              <option value="" disabled className="bg-white">Select Preferred Time</option>
              <option value="Morning" className="bg-white">Morning</option>
              <option value="Evening" className="bg-white">Evening</option>
              <option value="Weekend" className="bg-white">Weekend</option>
            </select>

            <textarea 
              placeholder="Any specific questions? (Optional)" 
              rows={3}
              className="w-full bg-white border border-[rgba(0,0,0,0.08)] shadow-sm rounded-xl text-[--text-primary] px-4 py-3.5 focus:outline-none focus:border-[--color-gold] focus:ring-2 focus:ring-[rgba(201,168,76,0.15)] transition-all text-sm resize-none"
              value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
            />

            <button 
              type="submit" 
              className="w-full px-8 py-4 lg:py-5 rounded-2xl font-bold mt-4 flex items-center justify-center gap-3 animate-waHeartbeat ctabutton hover:opacity-90 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-transform hover:scale-[1.02] border-none"
              style={{ backgroundColor: '#25D366', color: '#ffffff' }}
            >
              Send via WhatsApp
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>
        </BentoBox>

      </div>
    </section>
  );
}
