'use client';
import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { GlassCard } from './ui/GlassCard';

export function Experience() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase opacity-60">Experience</p>
          <h2 className="text-3xl md:text-4xl font-light mt-2">Where I&rsquo;ve worked</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.start}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex flex-col md:flex-row md:items-center gap-6 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

                <div className="md:w-1/2 pl-16 md:pl-0 md:px-8">
                  <GlassCard>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-lg leading-tight">{exp.role}</h3>
                          <p className="text-sm opacity-70">
                            {exp.company}
                            {exp.client && ` · ${exp.client}`}
                          </p>
                          <p className="text-xs opacity-50 mt-1">
                            {exp.start} — {exp.end}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm opacity-80">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="opacity-40 mt-1">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
