import React from 'react';
import { motion } from 'framer-motion';

export default function CTA({
  title = 'Ready to build something delightful?',
  subtitle = 'Compose your page from animated, reusable parts — and scale without friction.',
  action = { label: 'Start now', href: '#features' },
}) {
  return (
    <section className="relative py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-indigo-50 p-8 shadow-sm sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
            <div className="mt-8">
              <a
                href={action.href}
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-800"
              >
                {action.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
