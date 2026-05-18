'use client';

import { motion } from 'framer-motion';

type AnswerState = 'idle' | 'selected' | 'correct' | 'wrong' | 'muted';

type Props = {
  letter: string;
  label: string;
  state?: AnswerState;
  onClick?: () => void;
  disabled?: boolean;
};

const stateStyles: Record<AnswerState, {
  bg: string; border: string; color: string; letterBg: string; letterFg: string;
}> = {
  idle:     { bg: 'var(--surface)',      border: 'var(--border)',   color: 'var(--text)',       letterBg: 'var(--surface-sunk)', letterFg: 'var(--text-muted)' },
  selected: { bg: 'var(--blue-soft)',    border: 'var(--blue)',     color: 'var(--text)',       letterBg: 'var(--blue)',         letterFg: '#fff' },
  correct:  { bg: 'var(--green-soft)',   border: 'var(--green)',    color: 'var(--green-ink)',  letterBg: 'var(--green)',        letterFg: '#fff' },
  wrong:    { bg: 'var(--red-soft)',     border: 'var(--red)',      color: 'var(--red-ink)',    letterBg: 'var(--red)',          letterFg: '#fff' },
  muted:    { bg: 'var(--surface-soft)', border: 'var(--border)',   color: 'var(--text-subtle)', letterBg: 'var(--surface-sunk)', letterFg: 'var(--text-subtle)' },
};

export default function AnswerCard({ letter, label, state = 'idle', onClick, disabled }: Props) {
  const s = stateStyles[state];
  const isClickable = !disabled && (state === 'idle' || state === 'selected');

  return (
    <motion.button
      onClick={isClickable ? onClick : undefined}
      animate={state === 'wrong' ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        width: '100%',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 16px',
        borderRadius: 18,
        border: `2px solid ${s.border}`,
        background: s.bg,
        color: s.color,
        cursor: isClickable ? 'pointer' : 'default',
        minHeight: 56,
        boxShadow: state === 'correct'
          ? 'var(--glow-green)'
          : state === 'wrong'
          ? 'var(--glow-red)'
          : 'var(--clay-sm)',
        transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
        fontFamily: 'inherit',
      }}
      whileTap={isClickable ? { scale: 0.98 } : undefined}
      whileHover={isClickable ? { y: -2 } : undefined}
    >
      {/* Letter chip */}
      <div style={{
        width: 32,
        height: 32,
        borderRadius: 10,
        background: s.letterBg,
        color: s.letterFg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 800,
        flexShrink: 0,
        boxShadow: 'var(--clay-sm)',
      }}>
        {state === 'correct' ? '✓' : state === 'wrong' ? '✗' : letter}
      </div>

      <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.35 }}>
        {label}
      </span>
    </motion.button>
  );
}
