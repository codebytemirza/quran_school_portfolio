import React, { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-[3px] z-[9999]" 
        style={{ width: `${scrollProgress}%`, background: 'linear-gradient(90deg, #1B4332, #B48A30)' }}
      />
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
          scrolled ? 'bg-[rgba(250,248,245,0.9)] backdrop-blur-[20px] border-b border-[rgba(0,0,0,0.06)] py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col items-start cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-[--text-primary]">ASAR Quran School</span>
            <span className="text-[10px] md:text-xs text-[--text-secondary] uppercase tracking-widest font-semibold mt-1">A Div. of ASAR Global Pvt. Ltd.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="nav-link text-sm font-semibold text-[--text-primary] hover:text-[--text-gold] transition-colors">
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/923284119134" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full border border-[rgba(0,0,0,0.08)] bg-[rgba(0,0,0,0.02)] backdrop-blur-md text-sm font-bold text-[--text-primary] hover:bg-[rgba(201,168,76,0.1)] hover:text-[--text-gold] transition-all">
               Enroll Now
            </a>
          </div>

          <button 
            className="md:hidden text-[--text-primary] p-2 z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5 overflow-hidden">
               <span className={`block h-[2px] w-full bg-current transition-transform duration-300 ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
               <span className={`block h-[2px] w-full bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
               <span className={`block h-[2px] w-full bg-current transition-transform duration-300 ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-[rgba(250,248,245,0.98)] backdrop-blur-[30px] flex flex-col justify-center items-center gap-8 transition-opacity duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((link, idx) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setMenuOpen(false)}
            className="font-sans font-semibold text-2xl text-[--text-primary] hover:text-[--text-gold]"
            style={{ 
              transform: menuOpen ? 'translateX(0)' : 'translateX(-40px)',
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.4s ease ${(idx + 1) * 0.1}s` 
            }}
          >
            {link.name}
          </a>
        ))}
         <a 
            href="https://wa.me/923284119134" 
            target="_blank" 
            rel="noreferrer"
            className="mt-6 border border-[--color-gold] bg-[rgba(201,168,76,0.05)] px-8 py-3 rounded-full text-[--text-primary] font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Enroll via WhatsApp
          </a>
      </div>
    </>
  );
}
