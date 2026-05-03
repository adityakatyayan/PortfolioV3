'use client';
import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base mesh gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 0%, rgba(168, 85, 247, 0.18), transparent 50%),' +
            'radial-gradient(ellipse 70% 50% at 80% 30%, rgba(59, 130, 246, 0.16), transparent 50%),' +
            'radial-gradient(ellipse 60% 80% at 50% 70%, rgba(236, 72, 153, 0.12), transparent 50%),' +
            'radial-gradient(ellipse 90% 60% at 100% 100%, rgba(168, 85, 247, 0.14), transparent 50%)',
        }}
      />

      {/* Drifting orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.35), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 80, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(236, 72, 153, 0.28), transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, 150, -80, 0],
          y: [0, -120, 60, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Noise texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
