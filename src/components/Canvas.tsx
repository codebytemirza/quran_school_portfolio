import React, { useEffect, useRef } from 'react';

export function StarField() {
  return (
    <div 
      className="fixed inset-0 opacity-20 pointer-events-none z-[-1]" 
      style={{ backgroundImage: 'radial-gradient(white 1px, transparent 0)', backgroundSize: '40px 40px' }}
    />
  );
}

export function ParticleConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.innerWidth < 768) return;

    let particles: any[] = [];
    let animationFrameId: number;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    
    // Resize observer pattern for better performance instead of generic generic generic
    const initParticles = () => {
      particles = Array.from({ length: 50 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2
      }));
    };
    initParticles();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.fill();
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0,0,0,${0.03 * (1 - dist/120)})`;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      setSize();
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none hidden md:block z-0"
    />
  );
}
