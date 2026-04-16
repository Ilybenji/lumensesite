import React from 'react';
import Navbar from '../components/lumense/Navbar';
import HeroSection from '../components/lumense/HeroSection';
import AboutSection from '../components/lumense/AboutSection';
import ServicesSection from '../components/lumense/ServicesSection';
import PortfolioSection from '../components/lumense/PortfolioSection';
import TestimonialsSection from '../components/lumense/TestimonialsSection';
import ContactSection from '../components/lumense/ContactSection';
import Footer from '../components/lumense/Footer';

export default function Home() {
  return (
    <div className="bg-void min-h-screen relative">
      {/* Global seamless gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hero area gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 90%, rgba(253,82,0,0.08) 0%, transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 45% 35% at 60% 15%, rgba(253,82,0,0.05) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 30% 20% at 50% 8%, rgba(253,82,0,0.04) 0%, transparent 55%)',
          }}
        />

        {/* About section gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at -5% 50%, rgba(253,82,0,0.14) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 30% at 100% 80%, rgba(253,82,0,0.07) 0%, transparent 60%)',
          }}
        />

        {/* Portfolio section gradients - softer */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 35% 30% at 25% 75%, rgba(253,82,0,0.06) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 30% 25% at 75% 25%, rgba(253,82,0,0.04) 0%, transparent 60%)',
          }}
        />

        {/* Testimonials section gradients - softer */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 35% 30% at 15% 55%, rgba(253,82,0,0.05) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 30% 25% at 85% 85%, rgba(253,82,0,0.04) 0%, transparent 55%)',
          }}
        />

        {/* Contact section gradients - softer */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 35% 35% at 50% 45%, rgba(253,82,0,0.03) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 30% 30% at 70% 15%, rgba(253,82,0,0.03) 0%, transparent 65%)',
          }}
        />

        {/* Footer gradient - softer */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 60% at 50% 100%, rgba(253,82,0,0.04) 0%, transparent 60%)',
          }}
        />
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}