import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from './SectionHeader';

const COMPETENCIES = [
  { title: 'Strategi', desc: 'Varumärkesstrategi och positionering som grund för all visuell kommunikation.' },
  { title: 'Identitet', desc: 'Logotyper, typografi och grafiska system som definierar ert varumärke.' },
  { title: 'Digital', desc: 'Webbdesign, interaktioner och digitala upplevelser som engagerar.' },
  { title: 'Rörelse', desc: 'Animerat innehåll och rörlig grafik som fångar uppmärksamhet.' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="om-oss" className="relative bg-void py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="01" label="Om oss" />

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
          className="font-heading font-extralight text-stellar text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.03em] max-w-5xl mb-24 md:mb-32"
        >
          Vi tror på att design inte bara handlar om estetik — det handlar om att bygga
          förtroende, skapa igenkänning och ge varje varumärke en röst som hörs.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border-t border-vapor/10">
          {COMPETENCIES.map((comp, i) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.25, 0.1, 0, 1] }}
              className="pt-8 pr-8 pb-8 border-r border-vapor/10 last:border-r-0"
            >
              <h3 className="font-heading font-normal text-stellar text-lg mb-3">{comp.title}</h3>
              <p className="font-body font-light text-vapor text-sm leading-relaxed">{comp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}