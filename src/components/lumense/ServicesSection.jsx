import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Layers, Fingerprint, Play, Monitor } from 'lucide-react';

const SERVICES = [
  {
    icon: Layers,
    title: 'Grafisk design',
    desc: 'Trycksaker, visuella system och grafiska element som kommunicerar ert budskap med precision.',
  },
  {
    icon: Fingerprint,
    title: 'Varumärkesidentitet',
    desc: 'Från logotyp till komplett identitetssystem — vi bygger varumärken som håller.',
  },
  {
    icon: Play,
    title: 'Rörligt innehåll',
    desc: 'Motion graphics, animationer och videoproduktion som fångar och behåller uppmärksamheten.',
  },
  {
    icon: Monitor,
    title: 'Webbdesign',
    desc: 'Responsiva digitala upplevelser med fokus på interaktion, prestanda och visuell impact.',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="tjanster" className="relative bg-void py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="02" label="Tjänster" />

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="font-heading font-extralight text-stellar text-4xl md:text-6xl tracking-[-0.03em] mb-16 md:mb-20"
        >
          Vad vi gör
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.25, 0.1, 0, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative p-8 md:p-10 border border-vapor/10 transition-all duration-500 group ${
                  i === 3 ? 'lg:col-span-2' : ''
                } ${hoveredIndex === i ? 'bg-white/[0.03] border-vapor/20' : ''}`}
              >
                <div className="mb-6">
                  <Icon
                    size={28}
                    strokeWidth={1}
                    className="text-vapor/50 group-hover:text-stellar/70 transition-colors duration-500"
                  />
                </div>
                <h3 className="font-heading font-normal text-stellar text-xl md:text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="font-body font-light text-vapor text-sm leading-relaxed max-w-md">
                  {service.desc}
                </p>

                {/* Subtle glow on hover */}
                {hoveredIndex === i && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}