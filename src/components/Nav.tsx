'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
];

export function Nav() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: el.getBoundingClientRect().top };
      });
      const current = offsets
        .filter((o) => o.top < 200)
        .sort((a, b) => b.top - a.top)[0];
      if (current) setActive(current.id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.6 }}
    >
      <div
        className={`glass rounded-full transition-all duration-300 flex items-center gap-1 px-2 py-2 ${
          scrolled ? 'shadow-2xl' : ''
        }`}
      >
        <button
          onClick={() => go('home')}
          className="hidden md:flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 text-black font-semibold text-sm mr-1"
          aria-label="Home"
        >
          AK
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className="relative px-4 py-2 text-sm rounded-full transition-colors"
            >
              <span
                className={`relative z-10 transition-colors ${
                  active === s.id ? 'text-white' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {s.label}
              </span>
              {active === s.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/15"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => go('home')}
            className="flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 text-black font-semibold text-sm"
          >
            AK
          </button>
          <span className="text-sm opacity-80 capitalize">
            {sections.find((s) => s.id === active)?.label}
          </span>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-9 w-9 rounded-full flex items-center justify-center hover:bg-white/10"
          aria-label="Menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <div className="ml-1">
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 md:hidden glass rounded-2xl p-2"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                active === s.id ? 'bg-white/15' : 'hover:bg-white/10'
              }`}
            >
              {s.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
