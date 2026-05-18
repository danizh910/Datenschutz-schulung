'use client';

import { motion } from 'framer-motion';
import Waechter from './Waechter';
import { ClayButton } from './Surface';

type Props = {
  isCorrect: boolean;
  explanation: string;
  onNext: () => void;
  nextLabel?: string;
};

export default function FeedbackBanner({
  isCorrect,
  explanation,
  onNext,
  nextLabel = 'Weiter →',
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        borderRadius: '24px 24px 0 0',
        padding: '20px 20px 24px',
        background: isCorrect ? 'var(--green-soft)' : 'var(--red-soft)',
        border: `2px solid ${isCorrect ? 'var(--green)' : 'var(--red)'}`,
        borderBottom: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
        <motion.div
          animate={isCorrect
            ? { y: [0, -8, 0] }
            : { x: [0, -4, 4, -3, 3, 0] }}
          transition={isCorrect
            ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.5 }}
        >
          <Waechter mood={isCorrect ? 'celebrate' : 'sad'} size={64}/>
        </motion.div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: 18,
            fontWeight: 800,
            color: isCorrect ? 'var(--green-deep)' : 'var(--red)',
            letterSpacing: '-0.2px',
            marginBottom: 4,
          }}>
            {isCorrect ? 'Korrekt.' : 'Leider falsch.'}
          </div>
          {isCorrect && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                fontSize: 12, fontWeight: 700,
                color: '#fff',
                background: 'var(--green)',
                padding: '3px 10px', borderRadius: 999,
                marginBottom: 6,
              }}
            >
              ⚡ +20 XP
            </motion.div>
          )}
          <p style={{
            fontSize: 13,
            lineHeight: 1.5,
            color: isCorrect ? 'var(--green-ink)' : 'var(--red-ink)',
            margin: 0,
          }}>
            {explanation}
          </p>
        </div>
      </div>

      <ClayButton
        variant={isCorrect ? 'success' : 'primary'}
        fullWidth
        onClick={onNext}
      >
        {nextLabel}
      </ClayButton>
    </motion.div>
  );
}
