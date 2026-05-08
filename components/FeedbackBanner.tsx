'use client';

type Props = {
  isCorrect: boolean;
  explanation: string;
  onNext: () => void;
  nextLabel?: string;
};

export default function FeedbackBanner({ isCorrect, explanation, onNext, nextLabel = 'Weiter →' }: Props) {
  return (
    <div
      className="rounded-xl p-5 border-2 flex flex-col gap-4"
      style={{
        backgroundColor: isCorrect ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
        borderColor: isCorrect ? '#22c55e' : '#ef4444',
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{isCorrect ? '✅' : '❌'}</span>
        <div>
          <p
            className="font-bold text-base mb-1"
            style={{ color: isCorrect ? '#22c55e' : '#ef4444' }}
          >
            {isCorrect ? 'Richtig! Super gemacht.' : 'Nicht ganz — hier ist die Erklärung:'}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#f1f5f9' }}>
            {explanation}
          </p>
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full py-3 rounded-xl font-semibold text-base cursor-pointer transition-all duration-200 active:scale-95"
        style={{
          backgroundColor: isCorrect ? '#22c55e' : '#3b82f6',
          color: '#ffffff',
          minHeight: '48px',
        }}
      >
        {nextLabel}
      </button>
    </div>
  );
}
