import React from 'react';

export default function Hero({
  eyebrow = 'Build faster',
  title = 'Make your page effortlessly extendable',
  subtitle = 'Compose your UI from small, focused parts. Swap sections, add features, and scale your product without rewrites.',
  primary = { label: 'Get Started', href: '#' },
  secondary = { label: 'Learn More', href: '#' },
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-400/30 via-fuchsia-400/20 to-amber-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {subtitle}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href={primary.href}
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              {primary.label}
            </a>
            <a
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50"
            >
              {secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
