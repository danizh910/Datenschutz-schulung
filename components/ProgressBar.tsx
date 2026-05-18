'use client';

type Props = {
  completed: number;
  total: number;
  /* segmented mode: show individual step segments */
  segments?: boolean;
  /* current step for segmented (0-indexed active segment) */
  currentStep?: number;
  color?: string;
  label?: boolean;
};

export default function ProgressBar({
  completed,
  total,
  segments,
  currentStep,
  color = 'var(--red)',
  label = true,
}: Props) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (segments) {
    // Segmented progress bar for module steps
    const active = currentStep ?? completed;
    return (
      <div style={{ display: 'flex', gap: 6 }}>
        {Array.from({ length: total }).map((_, i) => {
          const filled = i < active;
          const isCurrent = i === active - 1;
          return (
            <div
              key={i}
              style={{
                flex: 1,
                height: 8,
                borderRadius: 999,
                background: filled ? color : 'var(--surface-sunk)',
                boxShadow: filled ? 'none' : 'var(--clay-inset)',
                transition: 'background 0.4s ease',
                border: isCurrent ? '1px solid rgba(0,0,0,0.04)' : 'none',
              }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginBottom: 8,
        }}>
          <span style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 500 }}>
            {completed} / {total} Module abgeschlossen
          </span>
          <span style={{ color: color, fontSize: 13, fontWeight: 700 }}>
            {pct}%
          </span>
        </div>
      )}
      <div style={{
        height: 14,
        background: 'var(--surface-sunk)',
        borderRadius: 999,
        boxShadow: 'var(--clay-inset)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: '2px 2px 2px 2px',
          width: pct > 0 ? `calc(${pct}% - 4px)` : '0',
          minWidth: pct > 5 ? 10 : 0,
          background: `linear-gradient(180deg, ${color}, var(--green-deep))`,
          borderRadius: 999,
          boxShadow: '0 1px 0 rgba(255,255,255,0.4) inset, 0 -1px 0 rgba(0,0,0,0.1) inset',
          transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}/>
      </div>
    </div>
  );
}
