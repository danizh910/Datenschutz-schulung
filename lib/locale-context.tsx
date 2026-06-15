'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LOCALES } from '@/data/locales';
import type { Locale } from '@/data/locales';

const LOCALE_CODES = LOCALES.map(l => l.code) as string[];

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({ locale: 'de', setLocale: () => {} });

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('de');

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved && LOCALE_CODES.includes(saved)) setLocaleState(saved as Locale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
