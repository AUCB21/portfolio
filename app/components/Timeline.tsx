'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { timeline, ui } from '@/lib/data';
import type { TimelineEntry } from '@/lib/data';
import { useLocale } from './LocaleProvider';

const dotStyles: Record<TimelineEntry['type'], string> = {
  work: 'bg-sky-500 ring-sky-200 dark:ring-sky-900',
  education: 'bg-violet-500 ring-violet-200 dark:ring-violet-900',
  course: 'bg-emerald-500 ring-emerald-200 dark:ring-emerald-900',
  project: 'bg-indigo-500 ring-indigo-200 dark:ring-indigo-900',
};

const badgeStyles: Record<TimelineEntry['type'], string> = {
  work: 'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 border-sky-200 dark:border-sky-800',
  education: 'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300 border-violet-200 dark:border-violet-800',
  course: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  project: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
};

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t } = useLocale();

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative pl-10"
    >
      <span
        className={`absolute left-0 top-1.5 -translate-x-[calc(50%-1px)] w-3.5 h-3.5 rounded-full ring-4 ${dotStyles[entry.type]}`}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2 pb-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${badgeStyles[entry.type]}`}>
            {t(ui.timeline.types[entry.type])}
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            {t(entry.period)}
          </span>
        </div>

        <div>
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
            {entry.title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{entry.subtitle}</p>
        </div>

        {entry.description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t(entry.description)}
          </p>
        )}

        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="flex flex-col gap-1 mt-1">
            {entry.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" aria-hidden="true" />
                {t(bullet)}
              </li>
            ))}
          </ul>
        )}

        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
        )}

        {(entry.href || entry.github) && (
          <div className="flex gap-4">
            {entry.href && (
              <a href={entry.href} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                {t(ui.live)} ↗
              </a>
            )}
            {entry.github && (
              <a href={entry.github} target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLocale();

  return (
    <section id="timeline" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        className="flex flex-col gap-3 mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
          {t(ui.timeline.badge)}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {t(ui.timeline.heading)}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">
          {t(ui.timeline.description)}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          {(Object.entries(ui.timeline.types) as [TimelineEntry['type'], { es: string; en: string }][]).map(
            ([type, label]) => (
              <div key={type} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ring-2 ${dotStyles[type]}`} aria-hidden="true" />
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{t(label)}</span>
              </div>
            )
          )}
        </div>
      </motion.div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-px border-l-2 border-dashed border-zinc-200 dark:border-zinc-800"
          aria-hidden="true"
        />
        <ul className="flex flex-col">
          {timeline.map((entry, i) => (
            <TimelineItem key={`${entry.title}-${i}`} entry={entry} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
