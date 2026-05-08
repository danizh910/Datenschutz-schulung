'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { modules } from '@/data/modules';
import QuizQuestion from '@/components/QuizQuestion';
import FeedbackBanner from '@/components/FeedbackBanner';

type Phase = 'learn' | 'quiz' | 'done';

type QuizState = {
  questionIndex: number;
  answered: boolean;
  selectedIndexes: number[];
  isCorrect: boolean;
  correctCount: number;
};

export default function ModulePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const moduleId = parseInt(id);
  const mod = modules.find((m) => m.id === moduleId);

  const [userId, setUserId] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>(mod?.learnContent.length === 0 ? 'quiz' : 'learn');
  const [learnIndex, setLearnIndex] = useState(0);
  const [quizState, setQuizState] = useState<QuizState>({
    questionIndex: 0,
    answered: false,
    selectedIndexes: [],
    isCorrect: false,
    correctCount: 0,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const uid = localStorage.getItem('userId');
    if (!uid) {
      router.replace('/');
      return;
    }
    setUserId(uid);
  }, [router]);

  if (!mod) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0f1117' }}>
        <p style={{ color: '#ef4444' }}>Modul nicht gefunden.</p>
      </main>
    );
  }

  const totalLearn = mod.learnContent.length;
  const totalQuiz = mod.quiz.length;
  const currentQuestion = mod.quiz[quizState.questionIndex];

  const handleAnswer = (selectedIndexes: number[]) => {
    const correct = currentQuestion.correctIndexes;
    const isCorrect =
      selectedIndexes.length === correct.length &&
      selectedIndexes.every((i) => correct.includes(i));

    // Save quiz answer
    if (userId) {
      fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          moduleId,
          questionIndex: quizState.questionIndex,
          isCorrect,
        }),
      }).catch(console.error);
    }

    setQuizState((prev) => ({
      ...prev,
      answered: true,
      selectedIndexes,
      isCorrect,
      correctCount: prev.correctCount + (isCorrect ? 1 : 0),
    }));
  };

  const handleNextQuestion = () => {
    const nextIndex = quizState.questionIndex + 1;
    if (nextIndex >= totalQuiz) {
      setPhase('done');
    } else {
      setQuizState((prev) => ({
        ...prev,
        questionIndex: nextIndex,
        answered: false,
        selectedIndexes: [],
        isCorrect: false,
      }));
    }
  };

  const handleFinishModule = async () => {
    if (!userId || saving) return;
    setSaving(true);

    const score = Math.round((quizState.correctCount / totalQuiz) * 100);

    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, moduleId, score }),
      });
    } catch (err) {
      console.error(err);
    }

    router.push('/schulung');
  };

  return (
    <main className="min-h-screen px-4 py-6 max-w-2xl mx-auto" style={{ backgroundColor: '#0f1117' }}>
      {/* Top Bar */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => router.push('/schulung')}
          className="flex items-center gap-1 text-sm font-semibold rounded-xl px-3 py-2 transition-all duration-150"
          style={{ color: '#94a3b8', backgroundColor: '#1a1d2e', minHeight: '40px' }}
        >
          ← Zurück
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-xs" style={{ color: '#94a3b8' }}>
            Modul {mod.id} · {mod.emoji}
          </p>
          <p className="font-bold truncate" style={{ color: '#f1f5f9' }}>
            {mod.title}
          </p>
        </div>
      </div>

      {/* Phase: Learn */}
      {phase === 'learn' && (
        <div className="flex flex-col gap-5">
          {/* Progress indicator */}
          <div className="flex gap-1.5">
            {mod.learnContent.map((_, i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i <= learnIndex ? '#3b82f6' : '#2a2d3e',
                }}
              />
            ))}
          </div>

          {/* Content Card */}
          <div
            className="rounded-2xl border-2 p-6 flex flex-col gap-4"
            style={{ backgroundColor: '#1a1d2e', borderColor: '#2a2d3e' }}
          >
            <div
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full self-start"
              style={{ backgroundColor: 'rgba(59,130,246,0.15)', color: '#3b82f6' }}
            >
              📖 {learnIndex + 1} / {totalLearn}
            </div>
            <h2 className="text-xl font-bold" style={{ color: '#f1f5f9' }}>
              {mod.learnContent[learnIndex].heading}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              {mod.learnContent[learnIndex].text}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            {learnIndex > 0 && (
              <button
                onClick={() => setLearnIndex((i) => i - 1)}
                className="flex-1 py-4 rounded-xl font-semibold transition-all duration-150"
                style={{ backgroundColor: '#1a1d2e', color: '#94a3b8', minHeight: '56px' }}
              >
                ← Zurück
              </button>
            )}
            <button
              onClick={() => {
                if (learnIndex < totalLearn - 1) {
                  setLearnIndex((i) => i + 1);
                } else {
                  setPhase('quiz');
                }
              }}
              className="flex-1 py-4 rounded-xl font-bold transition-all duration-200 active:scale-[0.98]"
              style={{ backgroundColor: '#3b82f6', color: '#ffffff', minHeight: '56px' }}
            >
              {learnIndex < totalLearn - 1 ? 'Weiter →' : 'Zum Quiz →'}
            </button>
          </div>
        </div>
      )}

      {/* Phase: Quiz */}
      {phase === 'quiz' && (
        <div className="flex flex-col gap-5">
          {/* Quiz progress */}
          <div className="flex gap-1.5">
            {mod.quiz.map((_, i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    i < quizState.questionIndex
                      ? '#22c55e'
                      : i === quizState.questionIndex
                      ? '#3b82f6'
                      : '#2a2d3e',
                }}
              />
            ))}
          </div>

          <div
            className="rounded-2xl border-2 p-6"
            style={{ backgroundColor: '#1a1d2e', borderColor: '#2a2d3e' }}
          >
            {!quizState.answered ? (
              <QuizQuestion
                question={currentQuestion}
                questionNumber={quizState.questionIndex + 1}
                totalQuestions={totalQuiz}
                onAnswer={handleAnswer}
              />
            ) : (
              <div className="flex flex-col gap-4">
                {/* Show what was correct */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#94a3b8' }}>
                    Frage {quizState.questionIndex + 1} von {totalQuiz}
                  </p>
                  <p className="font-bold text-base mb-3" style={{ color: '#f1f5f9' }}>
                    {currentQuestion.question}
                  </p>
                  <div className="flex flex-col gap-2">
                    {currentQuestion.options.map((opt, idx) => {
                      const isSelected = quizState.selectedIndexes.includes(idx);
                      const isCorrect = currentQuestion.correctIndexes.includes(idx);
                      let bg = '#1a1d2e';
                      let border = '#2a2d3e';
                      let textColor = '#94a3b8';

                      if (isCorrect) {
                        bg = 'rgba(34,197,94,0.15)';
                        border = '#22c55e';
                        textColor = '#22c55e';
                      } else if (isSelected && !isCorrect) {
                        bg = 'rgba(239,68,68,0.15)';
                        border = '#ef4444';
                        textColor = '#ef4444';
                      }

                      return (
                        <div
                          key={idx}
                          className="rounded-xl p-3 border-2 flex items-center gap-2"
                          style={{ backgroundColor: bg, borderColor: border }}
                        >
                          <span className="text-sm flex-shrink-0">
                            {isCorrect ? '✅' : isSelected ? '❌' : ''}
                          </span>
                          <span className="text-sm" style={{ color: textColor }}>
                            {opt}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <FeedbackBanner
                  isCorrect={quizState.isCorrect}
                  explanation={currentQuestion.explanation}
                  onNext={handleNextQuestion}
                  nextLabel={
                    quizState.questionIndex + 1 >= totalQuiz
                      ? 'Ergebnis ansehen 🎉'
                      : 'Nächste Frage →'
                  }
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Phase: Done */}
      {phase === 'done' && (
        <div className="flex flex-col items-center gap-6">
          <div
            className="w-full rounded-2xl border-2 p-8 flex flex-col items-center gap-4 text-center"
            style={{ backgroundColor: '#1a1d2e', borderColor: '#22c55e' }}
          >
            <div className="text-6xl">
              {quizState.correctCount === totalQuiz ? '🎉' : quizState.correctCount >= totalQuiz / 2 ? '👍' : '💪'}
            </div>
            <h2 className="text-2xl font-bold" style={{ color: '#f1f5f9' }}>
              Modul abgeschlossen!
            </h2>
            <div
              className="text-4xl font-bold"
              style={{ color: '#22c55e' }}
            >
              {Math.round((quizState.correctCount / totalQuiz) * 100)} Punkte
            </div>
            <p style={{ color: '#94a3b8' }}>
              {quizState.correctCount} von {totalQuiz} Fragen korrekt beantwortet
            </p>

            <div className="flex gap-2 flex-wrap justify-center">
              {mod.quiz.map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{
                    backgroundColor:
                      i < quizState.correctCount
                        ? 'rgba(34,197,94,0.2)'
                        : 'rgba(239,68,68,0.2)',
                    color: i < quizState.correctCount ? '#22c55e' : '#ef4444',
                  }}
                >
                  {i < quizState.correctCount ? '✓' : '✗'}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleFinishModule}
            disabled={saving}
            className="w-full py-4 rounded-xl font-bold text-base transition-all duration-200 active:scale-[0.98]"
            style={{
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              minHeight: '56px',
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? 'Wird gespeichert…' : 'Zur Modulübersicht →'}
          </button>
        </div>
      )}
    </main>
  );
}
