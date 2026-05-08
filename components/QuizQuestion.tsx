'use client';

import { useState } from 'react';
import { QuizQuestion as QuizQuestionType } from '@/data/modules';

type Props = {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedIndexes: number[]) => void;
};

export default function QuizQuestion({ question, questionNumber, totalQuestions, onAnswer }: Props) {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (idx: number) => {
    if (question.type === 'single') {
      setSelected([idx]);
    } else {
      setSelected((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    }
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;
    onAnswer(selected);
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#94a3b8' }}>
          Frage {questionNumber} von {totalQuestions}
          {question.type === 'multi' && (
            <span className="ml-2 normal-case" style={{ color: '#3b82f6' }}>
              (Mehrere Antworten möglich)
            </span>
          )}
        </p>
        <h3 className="text-lg font-bold leading-snug" style={{ color: '#f1f5f9' }}>
          {question.question}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option, idx) => {
          const isSelected = selected.includes(idx);
          return (
            <button
              key={idx}
              onClick={() => toggle(idx)}
              className="w-full text-left rounded-xl p-4 border-2 transition-all duration-150 cursor-pointer active:scale-[0.98] flex items-center gap-3"
              style={{
                backgroundColor: isSelected ? 'rgba(59,130,246,0.15)' : '#1a1d2e',
                borderColor: isSelected ? '#3b82f6' : '#2a2d3e',
                color: '#f1f5f9',
                minHeight: '56px',
              }}
            >
              <div
                className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center border-2 transition-all duration-150"
                style={{
                  borderColor: isSelected ? '#3b82f6' : '#2a2d3e',
                  backgroundColor: isSelected ? '#3b82f6' : 'transparent',
                  borderRadius: question.type === 'single' ? '50%' : '6px',
                }}
              >
                {isSelected && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm leading-snug">{option}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={handleSubmit}
        disabled={selected.length === 0}
        className="w-full py-4 rounded-xl font-bold text-base transition-all duration-200 cursor-pointer active:scale-[0.98]"
        style={{
          backgroundColor: selected.length === 0 ? '#2a2d3e' : '#3b82f6',
          color: selected.length === 0 ? '#94a3b8' : '#ffffff',
          minHeight: '56px',
          cursor: selected.length === 0 ? 'not-allowed' : 'pointer',
        }}
      >
        Antwort prüfen
      </button>
    </div>
  );
}
