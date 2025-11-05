import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
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
            eyebrow="Composable by design"
            title="A foundation that grows with your product"
            subtitle="We split the page into focused, reusable sections. Add, remove, or reorder parts without touching the rest."
            primary={{ label: 'Start Building', href: '#features' }}
            secondary={{ label: 'See Features', href: '#features' }}
          />
        </section>

        <section id="features">
          <Features />
        </section>

        {/* Example of how easily new sections can be added later:
            <Testimonials /> or <CTA /> can slot in right here without refactoring */}
      </main>

      <Footer brand="Extendable UI" links={footerLinks} />
    </div>
  );
}
