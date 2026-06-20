import React from 'react';
import { MicroGlowOrb } from './Shared';

export function Footer() {
  return (
    <footer className="relative bg-[#FAF8F5] border-t border-[rgba(0,0,0,0.06)] pt-16 pb-8 overflow-hidden z-10">
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 font-arabic text-[300px] text-[rgba(201,168,76,0.08)] pointer-events-none z-[-1] select-none">
        ۞
      </div>
      <MicroGlowOrb className="bottom-0 left-0 bg-radial-a" />
      <MicroGlowOrb className="bottom-0 right-0 bg-radial-b" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left - Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="font-serif font-bold text-xl text-[--text-primary] tracking-tight">ASAR Quran School</span>
              <span className="text-[10px] text-[--text-secondary] uppercase tracking-widest font-semibold mt-1">A Div. of ASAR Global Pvt. Ltd.</span>
            </div>
            <p className="text-sm text-[--text-secondary] italic font-serif mt-2">"Learn the Quran. Understand Its Wisdom."</p>
            <p className="text-xs text-[--text-secondary] max-w-sm leading-relaxed mt-1">
               Providing accessible, structured, and certified online Quran education for students of all ages worldwide. 
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-col gap-4 md:items-center">
            <h4 className="font-bold text-[--text-primary] text-sm uppercase tracking-widest mb-2">Quick Links</h4>
            <div className="flex flex-col gap-3 md:items-center">
              <a href="#" className="text-sm text-[--text-secondary] hover:text-[--color-gold] transition-colors inline-block w-max">Home</a>
              <a href="#courses" className="text-sm text-[--text-secondary] hover:text-[--color-gold] transition-colors inline-block w-max">Courses</a>
              <a href="#how-it-works" className="text-sm text-[--text-secondary] hover:text-[--color-gold] transition-colors inline-block w-max">How It Works</a>
              <a href="#contact" className="text-sm text-[--text-secondary] hover:text-[--color-gold] transition-colors inline-block w-max">Contact</a>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="flex flex-col gap-4 md:items-end">
             <h4 className="font-bold text-[--text-primary] text-sm uppercase tracking-widest mb-2 text-left md:text-right w-full">Got Questions?</h4>
             <button 
                onClick={() => window.open('https://wa.me/923284119134', '_blank')}
                className="px-6 py-3 rounded-xl font-medium w-max animate-waHeartbeat block ctabutton border-none"
                style={{ backgroundColor: '#25D366', color: '#ffffff' }}
             >
                Chat on WhatsApp
             </button>
             <p className="text-xs text-[--text-secondary] mt-2">+92 328 4119134</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center border-t border-[rgba(0,0,0,0.06)] pt-8">
           <span className="font-arabic text-xl text-[--color-gold] mb-6 opacity-80 select-none">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
           <span className="text-xs text-[--text-secondary] mb-2 text-center">© 2026 ASAR Global Pvt. Ltd. All Rights Reserved.</span>
           <span className="text-[10px] text-[--text-secondary] opacity-60 text-center uppercase tracking-wider">ASAR Quran School is a division of ASAR Global Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-7 right-7 z-[9999] group flex items-center">
      {/* Tooltip */}
      <div className="absolute right-[110%] top-1/2 -translate-y-1/2 bento-glass !px-4 !py-2 !rounded-md w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block mr-2 text-xs font-medium text-[--text-primary]">
        Chat with us on WhatsApp
      </div>
      
      {/* Button */}
      <button 
        onClick={() => window.open('https://wa.me/923284119134', '_blank')}
        className="relative w-[64px] h-[64px] rounded-full bg-[#25D366] flex items-center justify-center animate-waHeartbeat hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(37,211,102,0.4)]"
        aria-label="WhatsApp Contact"
      >
        <div className="absolute inset-0 rounded-full border-[4px] border-white/20 animate-ping opacity-50 pointer-events-none"></div>
        <svg className="relative z-10 w-[32px] h-[32px] text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </button>
    </div>
  );
}
