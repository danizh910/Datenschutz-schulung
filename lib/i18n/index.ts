'use client';

import { useLocale } from '@/lib/locale-context';
import { de } from './de';
import { en } from './en';
import { fr } from './fr';

export type { I18nDict } from './de';

export function useTranslation() {
  const { locale } = useLocale();
  if (locale === 'en') return en;
  if (locale === 'fr') return fr;
  return de;
}
