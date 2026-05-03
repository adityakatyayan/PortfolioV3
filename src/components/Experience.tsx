'use client';
import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { GlassCard } from './ui/GlassCard';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.3em] uppercase opacity-60">Experience</p>
          <h2 className="text-3xl md:text-4xl font-light mt-2">Where I&rsquo;ve worked</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.start}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-16 md:pl-24"
              >
                <div className="absolute left-6 md:left-8 top-7 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(168,85,247,0.8)] z-10" />

                <GlassCard>
                  <div className="p-5 md:p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden flex-shrink-0 shadow-lg">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-lg leading-tight">{exp.role}</h3>
                        <p className="text-sm opacity-80 mt-0.5">
                          {exp.company}
                          {exp.client && (
                            <span className="opacity-60"> · {exp.client}</span>
                          )}
                        </p>
                        <p className="text-xs opacity-50 mt-1.5 tracking-wide">
                          {exp.start} — {exp.end}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm opacity-80 leading-relaxed">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-2.5">
                          <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
