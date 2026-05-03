'use client';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, ArrowDown } from 'lucide-react';
import { assets } from '@/lib/assets';
import { profile } from '@/lib/data';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs tracking-wider opacity-80">Available for opportunities</span>
          </motion.div>

          <p className="text-sm tracking-[0.3em] uppercase opacity-60 mb-3">{profile.title}</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-[1.05]">
            {profile.name.split(' ')[0]}
            <br />
            <span className="font-medium bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="text-base md:text-lg opacity-70 max-w-md leading-relaxed mb-8">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            
              href={`mailto:${profile.email}`}
              className="glass rounded-full px-5 py-3 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Mail size={14} /> Email
            </a>
            
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-5 py-3 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="glass rounded-full px-5 py-3 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> Call
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative aspect-square max-w-sm md:max-w-md mx-auto w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
        >
          <motion.div
            className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-pink-500/40 blur-3xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative glass rounded-[2rem] p-3 h-full">
            <div className="rounded-[1.6rem] overflow-hidden h-full bg-white/5">
              <img
                src={assets.profile}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5 }}
        aria-label="Scroll to skills"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
