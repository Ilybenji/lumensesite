import React from 'react';
import { motion } from 'framer-motion';
import ParticleField from './ParticleField';

const letterVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 1.0 + i * 0.04,
      duration: 0.8,
      ease: [0.25, 0.1, 0, 1],
    },
  }),
};

function AnimatedText({ text, className, startDelay = 0 }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i + startDelay}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.querySelector('#kontakt');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      {/* Ember glow — subtle radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(253,82,0,0.07) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 30% at 80% 20%, rgba(253,82,0,0.04) 0%, transparent 60%)',
        }}
      />
      <ParticleField />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        {/* Logo mark */}
        <motion.img
          src="https://i.ibb.co/cSyYSksW/lumense2.png"
          alt="Lumense"
          className="h-20 md:h-32 lg:h-40 w-auto mb-12 opacity-90"
          initial={{ opacity: 0.3, scale: 2 }}
          animate={{ opacity: 0.9, scale: 3 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs md:text-sm font-body font-light tracking-[0.3em] uppercase text-ember mb-8"
        >
          Grafiskt designstudio
        </motion.p>

        {/* Main headline */}
        <h1 className="font-heading font-extralight text-stellar leading-[0.95] tracking-[-0.04em] text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8">
          <AnimatedText text="Vi skapar varumärken" />
          <br />
          <AnimatedText text="som syns i framtiden" startDelay={20} />
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-base md:text-lg font-body font-light text-vapor max-w-lg leading-relaxed mb-12"
        >
          Varumärkesidentitet, visuell kommunikation och digitalt innehåll —
          designat för att göra intryck.
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          onClick={scrollToContact}
          className="group relative px-10 py-4 border border-ember/20 text-sm font-body font-light tracking-[0.2em] uppercase text-ember hover:bg-ember hover:text-void transition-all duration-500"
        >
          Starta ett projekt
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-xs font-body font-light tracking-[0.3em] uppercase text-vapor/50">
          Scrolla
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-stellar/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}



