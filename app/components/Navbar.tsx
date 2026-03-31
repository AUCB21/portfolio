'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { siteConfig, navItems } from '@/lib/data';
import { useLocale } from './LocaleProvider';

function ThemeToggle() {
  const { setTheme } = useTheme();

  const handleClick = () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {/* Sun — shown in dark mode via CSS, invisible in light mode */}
      <svg className="hidden dark:block" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      {/* Moon — shown in light mode via CSS, invisible in dark mode */}
      <svg className="block dark:hidden" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

function LocaleToggle() {
  const { locale, toggle } = useLocale();

  return (
    <button
      onClick={toggle}
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className="flex items-center gap-0.5 rounded-full border border-zinc-200 dark:border-zinc-700 overflow-hidden text-[11px] font-semibold tracking-wide"
    >
      <span
        className={`px-2 py-1 transition-colors ${
          locale === 'es'
            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
            : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'
        }`}
      >
        ES
      </span>
      <span
        className={`px-2 py-1 transition-colors ${
          locale === 'en'
            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
            : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'
        }`}
      >
        EN
      </span>
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'pt-2' : 'pt-4'
      }`}
    >
      <nav
        className={`flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-zinc-200 dark:border-zinc-800 shadow-sm'
            : 'bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border-zinc-200/50 dark:border-zinc-800/50'
        }`}
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 px-3 py-1 mr-1 tracking-tight"
          aria-label={`${siteConfig.name} — home`}
        >
          {siteConfig.initials}
        </a>

        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700 mr-1" aria-hidden="true" />

        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {t(item.label)}
          </a>
        ))}

        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700 mx-1" aria-hidden="true" />
        <LocaleToggle />
        <ThemeToggle />
      </nav>
    </header>
  );
}
