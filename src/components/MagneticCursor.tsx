'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) {
      setHidden(true);
      document.documentElement.style.cursor = 'auto';
      return;
    }

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-magnetic], input, textarea, select');
      setHovered(!!interactive);
    };
    const leaveDoc = () => setHidden(true);
    const enterDoc = () => setHidden(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    document.addEventListener('mouseleave', leaveDoc);
    document.addEventListener('mouseenter', enterDoc);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.removeEventListener('mouseleave', leaveDoc);
      document.removeEventListener('mouseenter', enterDoc);
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[200] mix-blend-difference"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: hovered ? 48 : 12,
            height: hovered ? 48 : 12,
            opacity: hovered ? 0.9 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-[199]"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="h-1 w-1 rounded-full bg-white/60" />
      </motion.div>
    </>
  );
}
