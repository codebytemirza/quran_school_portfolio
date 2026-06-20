import React, { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Once visible, we can stop observing if we only want to reveal once
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, {
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting] as const;
}

interface BentoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'a' | 'b' | 'c' | 'd';
  glowPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  delay?: number;
}

export const BentoBox: React.FC<BentoBoxProps> = ({
  children,
  className = '',
  glowColor = 'a',
  glowPosition = 'top-left',
  delay = 0,
  ...props
}) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`bento-glass ${className} ${isIntersecting ? 'animate-bentoReveal' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
      {...props}
    >
      <div className={`corner-glow corner-${glowPosition} bg-radial-${glowColor}`} />
      {children}
    </div>
  );
}

export function MicroGlowOrb({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute w-[30px] h-[30px] rounded-full filter blur-[8px] animate-orbPulse pointer-events-none z-0 ${className}`} />
  );
}

export function FloatingArabic({ letter, className = '', delay = '0s', duration = '30s' }: { letter: string; className?: string; delay?: string; duration?: string }) {
  return (
    <div 
      className={`absolute select-none pointer-events-none font-arabic opacity-[0.04] text-[--color-gold] animate-arabicDrift z-0 ${className}`}
      style={{ animationDelay: delay, animationDuration: duration }}
    >
      {letter}
    </div>
  );
}
