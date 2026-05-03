'use client';
import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import { GlassCard } from './ui/GlassCard';

export function Education() {
  return (
    <section id="education" className="relative py-24 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.3em] uppercase opacity-60">Scholastics</p>
          <h2 className="text-3xl md:text-4xl font-light mt-2">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="p-6 h-full flex flex-col">
                  <p className="text-xs tracking-widest opacity-60 mb-2">{edu.period}</p>
                  <h3 className="font-medium leading-tight mb-1">{edu.degree}</h3>
                  <p className="text-sm opacity-70 mb-4">{edu.school}</p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <span className="text-2xl font-light bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
