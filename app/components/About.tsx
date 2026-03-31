'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig, ui } from '@/lib/data';
import { useLocale } from './LocaleProvider';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLocale();

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col gap-3">
            <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
              {t(ui.about.badge)}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t(ui.about.heading)}
            </h2>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base sm:text-lg">
            {t(siteConfig.bio)}
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {siteConfig.location}
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-950 dark:to-violet-950 border border-indigo-200 dark:border-indigo-900 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="text-6xl sm:text-8xl font-bold text-indigo-400 dark:text-indigo-600 select-none tracking-tight">
              {siteConfig.initials}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
