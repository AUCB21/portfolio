'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects, ui } from '@/lib/data';
import type { Project } from '@/lib/data';
import { useLocale } from './LocaleProvider';
import { SpotlightCard } from './SpotlightCard';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const inView = useInView(divRef, { once: true, margin: '-80px' });
  const { t } = useLocale();

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <SpotlightCard>
        <article className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {project.title}
      </h3>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
        {t(project.description)}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-1">
        {project.href && (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
            {t(ui.live)} ↗
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            GitHub ↗
          </a>
        )}
      </div>
        </article>
      </SpotlightCard>
    </motion.div>
  );
}

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLocale();

  return (
    <section id="work" ref={ref} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        className="flex flex-col gap-3 mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
          {t(ui.work.badge)}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {t(ui.work.heading)}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">
          {t(ui.work.description)}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
