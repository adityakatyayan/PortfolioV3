'use client';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { assets } from '@/lib/assets';
import { profile } from '@/lib/data';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 ambient-glow">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase opacity-60 mb-4">{profile.title}</p>
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
            <a
              href={`mailto:${profile.email}`}
              className="glass rounded-full px-5 py-3 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Mail size={14} /> Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-5 py-3 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
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
          transition={{ duration: 1, delay: 0.5 }}
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
    </section>
  );
}
