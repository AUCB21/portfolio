'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig, socialLinks, ui } from '@/lib/data';
import { useLocale } from './LocaleProvider';

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLocale();

  return (
    <section id="contact" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        className="flex flex-col gap-3 mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
          {t(ui.contact.badge)}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {t(ui.contact.heading)}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
          {t(ui.contact.description)}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-3 px-6 py-4 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-2xl font-medium hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          {siteConfig.email}
        </a>

        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-2xl font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            {link.label} ↗
          </a>
        ))}
      </motion.div>
    </section>
  );
}
