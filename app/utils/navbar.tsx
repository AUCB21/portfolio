'use client';

import { useState } from 'react';
import Link from 'next/link';
import navLinks from '@/constants';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-white/10">
        <ul className="flex items-center gap-1">
          {navLinks.map((link, index) => {
            const [key, url] = Object.entries(link)[0];
            const displayName = key.charAt(0).toUpperCase() + key.slice(1);
            
            return (
              <li key={key}>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors duration-200 rounded-full block"
                >
                  {hoveredIndex === index && (
                    <span className="absolute inset-0 bg-white/10 rounded-full -z-10" />
                  )}
                  {displayName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;