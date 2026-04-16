import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Mail, Send } from 'lucide-react';

const CONTACTS = [
  {
    icon: Mail,
    label: 'E-post',
    value: 'contact@lumense.org',
    href: 'mailto:contact@lumense.org',
  },
  {
    icon: Send,
    label: 'Telegram',
    value: '@lumensegfx',
    href: 'https://t.me/lumensegfx',
  },
];

function MagneticLink({ children, href, className }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-300 ${className}`}
    >
      {children}
    </a>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="kontakt" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="05" label="Kontakt" />

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="font-heading font-extralight text-stellar text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] mb-6"
        >
          Har du ett projekt?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="font-body font-light text-vapor text-base md:text-lg max-w-lg mb-20 leading-relaxed"
        >
          Vi vill höra om din idé. Hör av dig via e-post eller Telegram så
          återkommer vi inom 24 timmar.
        </motion.p>

        <div className="space-y-10">
          {CONTACTS.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: [0.25, 0.1, 0, 1] }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-ember/10 border border-ember/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-ember" />
                </div>
                <div>
                  <p className="text-xs font-body font-light tracking-[0.2em] uppercase text-vapor mb-1">
                    {contact.label}
                  </p>
                  <MagneticLink
                    href={contact.href}
                    className="font-heading font-light text-stellar text-xl md:text-2xl hover:text-stellar/70 transition-colors duration-300"
                  >
                    {contact.value}
                  </MagneticLink>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}