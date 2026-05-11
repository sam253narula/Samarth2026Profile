'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'dark' | 'light' | 'acid';
  className?: string;
}

export default function MagneticButton({ href, children, variant = 'light', className = '' }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const styles = {
    light: 'border-paper/30 bg-paper text-ink hover:bg-acid',
    dark: 'border-ink/20 bg-ink text-paper hover:bg-zinc-800',
    acid: 'border-acid/30 bg-acid text-ink hover:bg-paper'
  };

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`magnetic group inline-flex items-center gap-3 rounded-full border px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </motion.a>
  );
}
