'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories, ui } from '@/lib/data';
import { useLocale } from './LocaleProvider';

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLocale();

  return (
    <section id="skills" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        className="flex flex-col gap-3 mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
          {t(ui.skills.badge)}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {t(ui.skills.heading)}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.label.es}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              {t(category.label)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <div
                  key={skill}
                  className="group relative px-3 py-1.5 text-sm rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 overflow-hidden cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  <span className="relative z-10">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
