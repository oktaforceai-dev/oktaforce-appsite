'use client';

import {useEffect, useRef} from 'react';

type TechBackgroundProps = {
  density?: number;
  speed?: number;
  maxDistance?: number;
};

export function TechBackground({density = 70, speed = 0.25, maxDistance = 130}: TechBackgroundProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let running = true;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const themeIsDark = () => document.documentElement.classList.contains('dark');
    const colorLilac = 'rgba(147,112,219,';
    const colorCyan = 'rgba(0,255,255,';

    type Point = {x: number; y: number; vx: number; vy: number; c: number};
    let points: Point[] = [];

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      if (!ctx) return;

      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      resize();
      const area = width * height;
      const count = Math.max(25, Math.min(160, Math.floor((density / (1200 * 700)) * area)));
      points = Array.from({length: count}, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        c: Math.random()
      }));
    }

    function step() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = themeIsDark() ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';
      ctx.fillRect(0, 0, width, height);

      for (const point of points) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < maxDistance) {
            const progress = 1 - distance / maxDistance;
            const base = a.c > 0.5 ? colorLilac : colorCyan;
            ctx.strokeStyle = `${base}${themeIsDark() ? 0.35 * progress : 0.25 * progress})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const point of points) {
        ctx.fillStyle = themeIsDark() ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    const handleResize = () => init();
    const handleVisibility = () => {
      running = !document.hidden;
      if (running) {
        raf = requestAnimationFrame(step);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);
    init();
    raf = requestAnimationFrame(step);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [density, speed, maxDistance]);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 opacity-50 md:opacity-60"
      aria-hidden="true"
    />
  );
}

export default TechBackground;
