import { siteConfig } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto text-center text-sm text-zinc-400 dark:text-zinc-500">
        <span>© {year} {siteConfig.name}</span>
      </div>
    </footer>
  );
}
