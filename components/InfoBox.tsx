'use client';

import { ReactNode } from 'react';
import { Info, AlertTriangle } from 'lucide-react';

type Props = {
  variant: 'merksatz' | 'warnung';
  title?: string;
  children: ReactNode;
};

export default function InfoBox({ variant, title, children }: Props) {
  const isMerksatz = variant === 'merksatz';
  const accentColor = isMerksatz ? 'var(--blue)' : 'var(--streak)';
  const bg = isMerksatz ? 'var(--blue-soft)' : 'var(--streak-soft)';
  const defaultTitle = isMerksatz ? 'Merksatz' : 'Achtung';

  return (
    <div style={{
      display: 'flex',
      gap: 12,
      background: bg,
      border: `1.5px solid ${accentColor}`,
      borderRadius: 16,
      padding: '14px 16px',
      boxShadow: 'var(--clay-sm)',
    }}>
      <div style={{
        flexShrink: 0,
        width: 32,
        height: 32,
        borderRadius: 10,
        background: accentColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
      }}>
        {isMerksatz
          ? <Info size={16} color="#fff" strokeWidth={2.5} />
          : <AlertTriangle size={16} color="#fff" strokeWidth={2.5} />
        }
      </div>
      <div>
        <div style={{
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: '0.5px',
          textTransform: 'uppercase' as const,
          color: accentColor,
          marginBottom: 4,
        }}>
          {title ?? defaultTitle}
        </div>
        <div style={{
          fontSize: 13,
          lineHeight: 1.55,
          color: 'var(--text)',
          fontWeight: 500,
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}
