// Re-export types for consumers
export type { InfoBoxData, QuizQuestion, LearnContent, Module } from './module-types';

// Default export (DE) kept for backward compatibility
export { modules } from './modules.de';

import { modules as de } from './modules.de';
import { modules as en } from './modules.en';
import { modules as fr } from './modules.fr';
import type { Module } from './module-types';

export type Locale = 'de' | 'en' | 'fr';

export function getModules(locale: Locale = 'de'): Module[] {
  if (locale === 'en') return en;
  if (locale === 'fr') return fr;
  return de;
}
