'use client';

import { CSSProperties, ReactNode } from 'react';

type SurfaceVariant = 'card' | 'soft' | 'sunk';

type SurfaceProps = {
  children: ReactNode;
  variant?: SurfaceVariant;
  radius?: number;
  padding?: number | string;
  accent?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export default function Surface({
  children,
  variant = 'card',
  radius = 22,
  padding = 20,
  accent,
  className,
  style,
  onClick,
}: SurfaceProps) {
  const bgMap: Record<SurfaceVariant, string> = {
    card: 'var(--surface)',
    soft: 'var(--surface-soft)',
    sunk: 'var(--surface-sunk)',
  };
  const shadowMap: Record<SurfaceVariant, string> = {
    card: 'var(--clay)',
    soft: 'var(--clay-sm)',
    sunk: 'var(--clay-inset)',
  };

  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: bgMap[variant],
        borderRadius: radius,
        padding: typeof padding === 'number' ? `${padding}px` : padding,
        boxShadow: shadowMap[variant],
        border: accent
          ? `1.5px solid ${accent}`
          : '1px solid var(--border-soft)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Pill ───────────────────────────────────────────────────────
type PillTone = 'neutral' | 'red' | 'green' | 'streak' | 'xp' | 'blue';
type PillSize = 'sm' | 'md';

type PillProps = {
  children: ReactNode;
  tone?: PillTone;
  size?: PillSize;
  className?: string;
  style?: CSSProperties;
};

const toneBg: Record<PillTone, string> = {
  neutral: 'var(--surface-sunk)',
  red:     'var(--red-soft)',
  green:   'var(--green-soft)',
  streak:  'var(--streak-soft)',
  xp:      'var(--xp-soft)',
  blue:    'var(--blue-soft)',
};
const toneFg: Record<PillTone, string> = {
  neutral: 'var(--text-muted)',
  red:     'var(--red)',
  green:   'var(--green-deep)',
  streak:  'var(--streak)',
  xp:      'var(--xp)',
  blue:    'var(--blue)',
};

export function Pill({ children, tone = 'neutral', size = 'md', className, style }: PillProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: size === 'sm' ? '4px 8px' : '6px 12px',
        borderRadius: 999,
        fontSize: size === 'sm' ? 11 : 12,
        fontWeight: 700,
        letterSpacing: '0.2px',
        color: toneFg[tone],
        background: toneBg[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// ─── ClayButton ─────────────────────────────────────────────────
type ButtonVariant = 'primary' | 'success' | 'soft' | 'ghost';

type ClayButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: CSSProperties;
};

const btnBg: Record<ButtonVariant, string> = {
  primary: 'var(--navy)',
  success: 'var(--green)',
  soft:    'var(--surface-soft)',
  ghost:   'transparent',
};
const btnFg: Record<ButtonVariant, string> = {
  primary: '#fff',
  success: '#fff',
  soft:    'var(--text)',
  ghost:   'var(--text-muted)',
};
const btnShadow: Record<ButtonVariant, string> = {
  primary: 'var(--clay)',
  success: 'var(--clay)',
  soft:    'var(--clay-sm)',
  ghost:   'none',
};

export function ClayButton({
  children,
  variant = 'primary',
  fullWidth,
  disabled,
  onClick,
  type = 'button',
  className,
  style,
}: ClayButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        background: disabled ? 'var(--surface-sunk)' : btnBg[variant],
        color: disabled ? 'var(--text-subtle)' : btnFg[variant],
        border: 'none',
        padding: '14px 22px',
        borderRadius: 18,
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: '-0.1px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: disabled ? 'var(--clay-inset)' : btnShadow[variant],
        opacity: disabled ? 0.6 : 1,
        width: fullWidth ? '100%' : undefined,
        minHeight: 52,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontFamily: 'inherit',
        transition: 'transform 0.12s, box-shadow 0.12s, opacity 0.15s',
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!disabled) (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
      }}
      onMouseDown={(e) => {
        if (!disabled) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.98)';
      }}
      onMouseUp={(e) => {
        if (!disabled) (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
      }}
    >
      {children}
    </button>
  );
}
