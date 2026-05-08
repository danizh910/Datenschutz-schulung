'use client';

type Props = {
  completed: number;
  total: number;
};

export default function ProgressBar({ completed, total }: Props) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span style={{ color: '#94a3b8' }} className="text-sm">
          {completed} / {total} Module abgeschlossen
        </span>
        <span style={{ color: '#3b82f6' }} className="text-sm font-semibold">
          {pct}%
        </span>
      </div>
      <div
        className="w-full rounded-full h-3 overflow-hidden"
        style={{ backgroundColor: '#2a2d3e' }}
      >
        <div
          className="h-3 rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #3b82f6, #22c55e)',
          }}
        />
      </div>
    </div>
  );
}
