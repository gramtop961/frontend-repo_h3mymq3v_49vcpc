import React from 'react';
import { Rocket, Settings, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ICONS = { Rocket, Settings, Shield, Star };

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function Features({
  heading = 'Why this layout scales',
  subheading = 'Each section is a small, focused component. Rearrange or reuse them anywhere.',
  items = [
    { icon: 'Rocket', title: 'Launch quickly', description: 'Start with sensible defaults and extend as you go — no rewrites needed.' },
    { icon: 'Settings', title: 'Composable parts', description: 'Swap entire sections without touching other pieces of the page.' },
    { icon: 'Shield', title: 'Robust patterns', description: 'Encapsulated components reduce breakage as your app grows.' },
    { icon: 'Star', title: 'Polished by default', description: 'Thoughtful defaults with clean, accessible markup and styles.' },
  ],
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-lg text-gray-600">{subheading}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => {
            const Icon = ICONS[item.icon] || Star;
            return (
              <motion.div
                key={idx}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={idx}
                variants={fadeIn}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
