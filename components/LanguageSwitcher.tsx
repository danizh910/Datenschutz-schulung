'use client';

import { useLocale } from '@/lib/locale-context';
import type { Locale } from '@/data/modules';

const LANGS: { code: Locale; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      display: 'flex',
      gap: 2,
      background: 'var(--surface)',
      borderRadius: 14,
      padding: 4,
      boxShadow: 'var(--clay)',
      border: '1px solid var(--border-soft)',
      zIndex: 999,
    }}>
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          style={{
            padding: '6px 11px',
            borderRadius: 10,
            border: 'none',
            background: locale === code ? 'var(--red)' : 'transparent',
            color: locale === code ? '#fff' : 'var(--text-muted)',
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.3px',
            cursor: 'pointer',
            minHeight: 32,
            minWidth: 36,
            fontFamily: 'inherit',
            transition: 'background 0.15s, color 0.15s',
          }}
          aria-pressed={locale === code}
          aria-label={`Switch language to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
