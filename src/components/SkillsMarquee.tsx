'use client';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export function SkillsMarquee() {
  const row = [...skills, ...skills];

  return (
    <section id="skills" className="relative py-24 overflow-hidden scroll-mt-24">
      <motion.div
        className="max-w-6xl mx-auto px-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm tracking-[0.3em] uppercase opacity-60">Stack & Skills</p>
        <h2 className="text-3xl md:text-4xl font-light mt-2">What I work with</h2>
      </motion.div>

      {/* Two rows moving in opposite directions for richness */}
      <div className="relative space-y-4">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[rgb(var(--bg))] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[rgb(var(--bg))] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4 whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {row.map((skill, i) => (
            <span
              key={`a-${i}`}
              className="glass rounded-full px-6 py-3 text-sm font-medium tracking-wide flex-shrink-0"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4 whitespace-nowrap will-change-transform"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          {row.map((skill, i) => (
            <span
              key={`b-${i}`}
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
