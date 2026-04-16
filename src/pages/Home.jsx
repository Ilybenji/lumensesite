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
            background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(253,82,0,0.07) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 30% at 80% 10%, rgba(253,82,0,0.04) 0%, transparent 60%)',
          }}
        />

        {/* About section gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at -5% 35%, rgba(253,82,0,0.14) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 30% at 100% 45%, rgba(253,82,0,0.07) 0%, transparent 60%)',
          }}
        />

        {/* Portfolio section gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 55% 45% at 15% 60%, rgba(253,82,0,0.14) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 65% 45% at 80% 55%, rgba(253,82,0,0.12) 0%, transparent 60%)',
          }}
        />

        {/* Testimonials section gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 75% 65% at 5% 75%, rgba(253,82,0,0.13) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 45% at 85% 80%, rgba(253,82,0,0.11) 0%, transparent 55%)',
          }}
        />

        {/* Contact section gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 90%, rgba(253,82,0,0.07) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 80% 85%, rgba(253,82,0,0.10) 0%, transparent 65%)',
          }}
        />

        {/* Footer gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 120% at 50% 95%, rgba(253,82,0,0.12) 0%, transparent 60%)',
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