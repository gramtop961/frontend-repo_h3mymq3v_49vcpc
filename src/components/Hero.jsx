import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({
  eyebrow = 'Playful. Vibrant. Extendable.',
  title = 'Build animated, modular pages without friction',
  subtitle = 'A flexible section-based layout with rich motion. Swap parts, add features, and keep everything smooth and responsive.',
  primary = { label: 'Get Started', href: '#features' },
  secondary = { label: 'See it in action', href: '#demo' },
  splineScene = 'https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode',
}) {
  return (
    <section className="relative">
      {/* Background 3D scene */}
      <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[600px]">
        <Spline scene={splineScene} style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlay to improve text contrast, does not block interaction */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="mx-auto -mt-36 max-w-7xl px-4 sm:px-6 lg:-mt-44 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200/60 bg-white/80 p-6 backdrop-blur md:p-10">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 sm:mt-6">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={primary.href}
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              {primary.label}
            </a>
            <a
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:bg-gray-50"
            >
              {secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
