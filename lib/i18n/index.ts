'use client';

import { useLocale } from '@/lib/locale-context';
import { de } from './de';
import { en } from './en';
import { fr } from './fr';
import { cs } from './cs';
import { hr } from './hr';
import { pl } from './pl';
import { es } from './es';
import { it } from './it';
import { pt } from './pt';

export type { I18nDict } from './de';

export function useTranslation() {
  const { locale } = useLocale();
  if (locale === 'en') return en;
  if (locale === 'fr') return fr;
  if (locale === 'cs') return cs;
  if (locale === 'hr') return hr;
  if (locale === 'pl') return pl;
  if (locale === 'es') return es;
  if (locale === 'it') return it;
  if (locale === 'pt') return pt;
  return de;
}
