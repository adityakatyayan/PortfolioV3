import { Hero } from '@/components/Hero';
import { SkillsMarquee } from '@/components/SkillsMarquee';
import { Experience } from '@/components/Experience';
import { Certificates } from '@/components/Certificates';
import { Education } from '@/components/Education';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <SkillsMarquee />
      <Experience />
      <Certificates />
      <Education />
      <footer className="py-12 text-center text-xs opacity-50">
        Built by Aditya Katyayan · Crafted with Next.js & Framer Motion
      </footer>
    </main>
  );
}
