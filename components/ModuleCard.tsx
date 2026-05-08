'use client';

import { Module } from '@/data/modules';

type Props = {
  module: Module;
  status: 'completed' | 'available' | 'locked';
  score?: number;
  onClick?: () => void;
};

export default function ModuleCard({ module, status, score, onClick }: Props) {
  const isClickable = status !== 'locked';

  const statusConfig = {
    completed: { icon: '✅', label: 'Abgeschlossen', color: '#22c55e', bg: 'rgba(34,197,94,0.1)', border: '#22c55e' },
    available: { icon: '▶️', label: 'Starten', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', border: '#3b82f6' },
    locked: { icon: '🔒', label: 'Gesperrt', color: '#94a3b8', bg: 'rgba(42,45,62,0.5)', border: '#2a2d3e' },
  };

  const cfg = statusConfig[status];

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className="rounded-2xl p-5 border-2 flex items-center gap-4 transition-all duration-200 select-none"
      style={{
        backgroundColor: cfg.bg,
        borderColor: cfg.border,
        cursor: isClickable ? 'pointer' : 'not-allowed',
        opacity: status === 'locked' ? 0.6 : 1,
        minHeight: '80px',
      }}
      onMouseEnter={(e) => {
        if (isClickable) {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px rgba(59,130,246,0.15)`;
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <div className="text-3xl flex-shrink-0">{module.emoji}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#94a3b8' }}>
            Modul {module.id}
          </span>
          {status === 'completed' && score !== undefined && (
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(34,197,94,0.2)', color: '#22c55e' }}
            >
              {score} Punkte
            </span>
          )}
        </div>
        <p className="font-bold text-base leading-tight" style={{ color: '#f1f5f9' }}>
          {module.title}
        </p>
        {status !== 'locked' && (
          <p className="text-xs mt-1 line-clamp-1" style={{ color: '#94a3b8' }}>
            {module.description}
          </p>
        )}
      </div>
      <div className="flex-shrink-0 flex items-center gap-1" style={{ color: cfg.color }}>
        <span className="text-sm font-semibold">{cfg.label}</span>
        {status !== 'locked' && <span className="text-sm">→</span>}
      </div>
    </div>
  );
}
