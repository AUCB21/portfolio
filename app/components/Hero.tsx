'use client';

import { motion, type Variants } from 'framer-motion';
import { siteConfig, socialLinks, ui } from '@/lib/data';
import { useLocale } from './LocaleProvider';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto"
    >
      <div className="flex flex-col gap-6">
        {siteConfig.available && (
          <motion.div
            className="flex items-center gap-2 w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {t(ui.available)}
            </span>
          </motion.div>
        )}

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-none"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-500 dark:text-zinc-400 tracking-tight"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {t(siteConfig.title)}
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {t(siteConfig.tagline)}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-3 pt-2"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#work"
            className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-semibold overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative group-hover:text-white transition-colors duration-300">
              {t(ui.viewWork)}
            </span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-medium rounded-full transition-colors"
          >
            {t(ui.getInTouch)}
          </a>
          <a
            href={t(ui.cv.path)}
            download={t(ui.cv.label)}
            className="flex items-center gap-1.5 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-medium rounded-full transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t(ui.cv.download)}
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
