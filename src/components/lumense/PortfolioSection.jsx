

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Safer',
    category: 'Webbdesign',
    year: '2025',
    image: 'https://i.ibb.co/jcDsHQ1/safermockup.png',
    link: 'https://t.me/safer',
  },
  {
    title: 'Safer',
    category: 'Varumärkesidentitet',
    year: '2025',
    image: 'https://i.ibb.co/zWtC4jj7/presentationsafer.png',
    link: 'https://t.me/safer',
  },
  {
    title: 'Solaris Web',
    category: 'Webbdesign',
    year: '2024',
    image: 'https://media.db.com/images/public/69de7b3585144549942fa748/1939ec5ed_generated_f1d3b01c.png',
    link: '#',
  },
  {
    title: 'Aura Identity',
    category: 'Grafisk design',
    year: '2025',
    image: 'https://media.db.com/images/public/69de7b3585144549942fa748/8a7ec5e14_generated_7ab43c33.png',
    link: '#',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0, 1] }}
      onClick={handleClick}
      data-clickable
      className="group relative overflow-hidden bg-secondary cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
        <div>
          <h3 className="font-heading font-semibold text-stellar text-xl md:text-2xl mb-1">
            {project.title}
          </h3>
          <p className="text-xs font-body font-light tracking-[0.15em] uppercase text-white">
            {project.category} — {project.year}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full border border-stellar/20 flex items-center justify-center group-hover:bg-stellar group-hover:border-stellar transition-all duration-500">
          <ArrowUpRight
            size={16}
            className="text-stellar group-hover:text-void transition-colors duration-500"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="portfolio" className="relative bg-void py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(253,82,0,0.05) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 75% 30%, rgba(253,82,0,0.06) 0%, transparent 65%)' }} />
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="03" label="Portfolio" />

        <motion.h2
          ref={ref}
          initial={{ opacity: 1, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="font-heading font-extralight text-stellar text-4xl md:text-6xl tracking-[-0.03em] mb-16 md:mb-20"
        >
          Utvalda projekt
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}