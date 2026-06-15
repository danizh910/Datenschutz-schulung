// Re-export types for consumers
export type { InfoBoxData, QuizQuestion, LearnContent, Module } from './module-types';

// Default export (DE) kept for backward compatibility
export { modules } from './modules.de';

// Re-export canonical locale list and type
export type { Locale } from './locales';

import { modules as de } from './modules.de';
import { modules as en } from './modules.en';
import { modules as fr } from './modules.fr';
import { modules as cs } from './modules.cs';
import { modules as hr } from './modules.hr';
import { modules as pl } from './modules.pl';
import { modules as es } from './modules.es';
import { modules as it } from './modules.it';
import { modules as pt } from './modules.pt';
import type { Module } from './module-types';
import type { Locale } from './locales';

export function getModules(locale: Locale = 'de'): Module[] {
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
