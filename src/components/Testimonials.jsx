import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "This setup let us add sections without touching the rest of the page. Shipping speed doubled overnight.",
    author: 'Avery Chen',
    role: 'Product Lead at Nimbus',
  },
  {
    quote:
      'The animated hero gives us personality while the composable sections keep the codebase neat and predictable.',
    author: 'Jordan Lee',
    role: 'Design Engineer at Lumen',
  },
  {
    quote:
      'We iterated on features in isolation and nothing broke. Exactly how modern UIs should feel.',
    author: 'Priya Sharma',
    role: 'Frontend Engineer at Arcadia',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-50/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Loved by builders</h2>
          <p className="mt-4 text-lg text-gray-600">A few words from teams shipping delightful, scalable UIs.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <p className="text-gray-800">“{t.quote}”</p>
              <footer className="mt-4">
                <div className="text-sm font-medium text-gray-900">{t.author}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
