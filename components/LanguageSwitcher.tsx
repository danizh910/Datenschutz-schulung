'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from '@/lib/locale-context';
import { LOCALES } from '@/data/locales';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active = LOCALES.find(l => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!open) return;
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 999 }}
    >
      {open && (
        <ul
          role="listbox"
          aria-label="Sprache wählen"
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 6px)',
            right: 0,
            background: 'var(--surface)',
            border: '1px solid var(--border-soft)',
            borderRadius: 14,
            boxShadow: 'var(--clay)',
            padding: 4,
            margin: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            minWidth: 160,
          }}
        >
          {LOCALES.map(({ code, label }) => (
            <li key={code} role="option" aria-selected={locale === code}>
              <button
                onClick={() => { setLocale(code); setOpen(false); }}
                style={{
                  width: '100%',
                  padding: '7px 14px',
                  borderRadius: 10,
                  border: 'none',
                  background: locale === code ? 'var(--red)' : 'transparent',
                  color: locale === code ? '#fff' : 'var(--text-muted)',
                  fontSize: 13,
                  fontWeight: locale === code ? 800 : 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  transition: 'background 0.15s, color 0.15s',
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Sprache wählen"
        style={{
          padding: '7px 14px',
          borderRadius: 14,
          border: '1px solid var(--border-soft)',
          background: 'var(--surface)',
          color: 'var(--text-muted)',
          fontSize: 13,
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: 'var(--clay)',
          fontFamily: 'inherit',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          minHeight: 36,
        }}
      >
        {active.label}
        <span aria-hidden="true" style={{ fontSize: 9, opacity: 0.55 }}>{open ? '▲' : '▼'}</span>
      </button>
    </div>
  );
}
