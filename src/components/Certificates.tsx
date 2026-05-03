'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X } from 'lucide-react';
import { certificates } from '@/lib/data';
import { GlassCard } from './ui/GlassCard';

type Cert = (typeof certificates)[number];

export function Certificates() {
  const [active, setActive] = useState<Cert | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="certificates" className="relative py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.3em] uppercase opacity-60">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-light mt-2">Certificates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.verifyUrl || cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <GlassCard glow={i === 0} className="h-full">
                <div className="p-6 flex flex-col h-full">
                  {cert.image ? (
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white mb-4">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 mb-4 flex items-center justify-center">
                      <span className="text-4xl opacity-40">🎓</span>
                    </div>
                  )}

                  <h3 className="font-medium leading-tight mb-1 line-clamp-2">{cert.title}</h3>
                  <p className="text-xs opacity-60 mb-4">{cert.issuer}</p>

                  <div className="flex gap-2 mt-auto">
                    {cert.image && (
                      <button
                        onClick={() => setActive(cert)}
                        className="flex-1 glass rounded-full px-4 py-2 text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                      >
                        <Eye size={14} /> View
                      </button>
                    )}
                    {cert.verifyUrl && (
                      <a className="flex-1 glass rounded-full px-4 py-2 text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors" href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} /> Verify
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] glass rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 glass rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1 pr-12">{active.title}</h3>
                <p className="text-sm opacity-60 mb-4">{active.issuer}</p>
                <div className="rounded-xl overflow-hidden bg-white max-h-[70vh] overflow-y-auto">
                  <img src={active.image} alt={active.title} className="w-full h-auto" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
