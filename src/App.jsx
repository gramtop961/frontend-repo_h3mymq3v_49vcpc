import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Get Started', href: '#get-started' },
  ];

  const footerLinks = [
    { label: 'Docs', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header brand={{ name: 'Extendable UI', href: '#' }} links={navLinks} />

      <main>
        <section id="overview">
          <Hero
            eyebrow="Playful. Vibrant. Extendable."
            title="Build animated, modular pages without friction"
            subtitle="A flexible section-based layout with rich motion. Swap parts, add features, and keep everything smooth and responsive."
            primary={{ label: 'Start Building', href: '#features' }}
            secondary={{ label: 'See it in action', href: '#testimonials' }}
          />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="get-started">
          <CTA />
        </section>
      </main>

      <Footer brand="Extendable UI" links={footerLinks} />
    </div>
  );
}
