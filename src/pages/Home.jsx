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
    <div className="bg-void min-h-screen">
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