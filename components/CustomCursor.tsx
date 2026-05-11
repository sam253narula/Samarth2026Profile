'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX - (hovering ? 42 : 14));
      mouseY.set(event.clientY - (hovering ? 42 : 14));
    };
    const enter = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest('a, button, .cursor-target')) setHovering(true);
    };
    const leave = () => setHovering(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    };
  }, [hovering, mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[80] hidden rounded-full bg-paper md:block"
      style={{ x: springX, y: springY }}
      animate={{ width: hovering ? 84 : 28, height: hovering ? 84 : 28, opacity: hovering ? 0.42 : 0.78 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
    />
  );
}
