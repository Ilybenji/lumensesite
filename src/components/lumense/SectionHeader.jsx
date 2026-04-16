import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionHeader({ number, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
      className="flex items-center gap-4 mb-16 md:mb-24"
    >
      <span className="text-xs font-body font-light text-ember">{number}</span>
      <div className="w-12 h-px bg-ember/40" />
      <span className="text-xs font-body font-light tracking-[0.3em] uppercase text-ember">
        {label}
      </span>
    </motion.div>
  );
}