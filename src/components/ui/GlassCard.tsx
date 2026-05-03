'use client';
import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = MotionProps & {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function GlassCard({ children, className, glow = false, ...rest }: Props) {
  return (
    <motion.div className={cn('relative', className)} {...rest}>
      {glow && (
        <div className="absolute -inset-px rounded-[inherit] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-xl opacity-60" />
      )}
      <div className="glass rounded-2xl h-full w-full relative overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}
