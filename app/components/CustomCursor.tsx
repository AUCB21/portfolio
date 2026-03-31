'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

// Imported with { ssr: false } — window is always available here.
export function CustomCursor() {
  const isTouch = useState(() => window.matchMedia('(pointer: coarse)').matches)[0];
  const [isHovering, setIsHovering] = useState(false);

  // Direct motion values — no spring on position so there's zero lag.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest('a, button, [role="button"], input, textarea, select, label')
      );
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [isTouch, x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{ scale: isHovering ? 2.8 : 1 }}
      transition={{ type: 'spring', stiffness: 600, damping: 35 }}
    >
      <div className="w-3 h-3 rounded-full bg-white" />
    </motion.div>
  );
}
