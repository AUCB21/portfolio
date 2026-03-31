'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Locale, L } from '@/lib/data';

type LocaleContextType = {
  locale: Locale;
  toggle: () => void;
  t: (text: L) => string;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: 'es',
  toggle: () => {},
  t: (text: L) => text.es,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  const toggle = () => setLocale((l) => (l === 'es' ? 'en' : 'es'));
  const t = (text: L) => text[locale];

  return (
    <LocaleContext.Provider value={{ locale, toggle, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
