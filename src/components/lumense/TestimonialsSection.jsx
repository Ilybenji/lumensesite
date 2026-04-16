import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from './SectionHeader';

const STATS = [
  { value: '50+', label: 'Genomförda projekt' },
  { value: '30+', label: 'Nöjda kunder' },
  { value: '3+', label: 'År av erfarenhet' },
];

const TESTIMONIALS = [
  {
    quote: 'Lumense levererade en identitet som överskred alla förväntningar. Professionellt, kreativt och med en känsla för detaljer som är sällsynt.',
    author: 'Marcus Lindberg',
    company: 'Nordvik Solutions',
  },
  {
    quote: 'Från koncept till leverans var hela processen smidig. Resultatet? Ett varumärke som verkligen sticker ut.',
    author: 'Sara Eklund',
    company: 'Ether Studio',
  },
];

function AnimatedNumber({ value, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0, 1] }}
      className="font-heading font-extralight text-stellar text-5xl md:text-7xl tracking-[-0.04em]"
    >
      {value}
    </motion.span>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="04" label="Resultat" />

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-32 border-t border-b border-vapor/10">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="py-12 md:py-16 border-r border-vapor/10 last:border-r-0 text-center"
            >
              <AnimatedNumber value={stat.value} delay={i * 0.2} />
              <p className="font-body font-light text-vapor text-sm mt-3 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              ref={i === 0 ? ref : undefined}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.25, 0.1, 0, 1] }}
            >
              <p className="font-heading font-extralight text-stellar/80 text-xl md:text-2xl leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body text-stellar text-sm">{t.author}</p>
                <p className="font-body font-light text-vapor text-xs mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}