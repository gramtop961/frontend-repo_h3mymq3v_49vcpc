import React from 'react';

export default function Footer({ brand = 'Extendable UI', links = [] }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-500">© {year} {brand}. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-gray-900">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
