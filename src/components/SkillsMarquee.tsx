'use client';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export function SkillsMarquee() {
  const row = [...skills, ...skills];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <p className="text-sm tracking-[0.3em] uppercase opacity-60">Stack & Skills</p>
        <h2 className="text-3xl md:text-4xl font-light mt-2">What I work with</h2>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[rgb(var(--bg))] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[rgb(var(--bg))] to-transparent" />

        <motion.div
          className="flex gap-4 whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {row.map((skill, i) => (
            <span
              key={i}
              className="glass rounded-full px-6 py-3 text-sm font-medium tracking-wide flex-shrink-0"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
