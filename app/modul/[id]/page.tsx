'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, RefreshCw, Star } from 'lucide-react';
import { getModules } from '@/data/modules';
import ProgressBar from '@/components/ProgressBar';
import FeedbackBanner from '@/components/FeedbackBanner';
import AnswerCard from '@/components/AnswerCard';
import Surface, { ClayButton, Pill } from '@/components/Surface';
import Waechter from '@/components/Waechter';
import VideoEmbed from '@/components/VideoEmbed';
import InfoBox from '@/components/InfoBox';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { useTranslation } from '@/lib/i18n';
import { useLocale } from '@/lib/locale-context';

type Phase = 'learn' | 'quiz' | 'done';

type QuizState = {
  questionIndex: number;
  answered: boolean;
  selectedIndexes: number[];
  isCorrect: boolean;
  correctCount: number;
};

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export default function ModulPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const t = useTranslation();
  const { locale } = useLocale();
  const modules = getModules(locale);
  const TOTAL_MODULES = modules.length;

  const moduleId = parseInt(id);
  const mod = modules.find((m) => m.id === moduleId);

  const [userId, setUserId] = useState<string | null>(null);
  const [completedCount, setCompletedCount] = useState(0);
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
    if (!uid) { router.replace('/'); return; }
    setUserId(uid);

    fetch(`/api/progress?userId=${uid}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.progress) {
          const count = (data.progress as { completed: boolean }[]).filter((p) => p.completed).length;
          setCompletedCount(count);
        }
      })
      .catch(() => {});
  }, [router]);

  if (!mod) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <p style={{ color: 'var(--red)' }}>{t.modul.notFound}</p>
      </main>
    );
  }

  const totalLearn = mod.learnContent.length;
  const totalQuiz = mod.quiz.length;
  const currentQuestion = mod.quiz[quizState.questionIndex];
  const currentLearn = mod.learnContent[learnIndex];

  const handleToggleAnswer = (idx: number) => {
    if (quizState.answered) return;
    const { type } = currentQuestion;
    setQuizState((prev) => ({
      ...prev,
      selectedIndexes: type === 'single'
        ? [idx]
        : prev.selectedIndexes.includes(idx)
          ? prev.selectedIndexes.filter((i) => i !== idx)
          : [...prev.selectedIndexes, idx],
    }));
  };

  const handleSubmitAnswer = () => {
    if (quizState.selectedIndexes.length === 0) return;
    const correct = currentQuestion.correctIndexes;
    const { selectedIndexes } = quizState;
    const isCorrect =
      selectedIndexes.length === correct.length &&
      selectedIndexes.every((i) => correct.includes(i));

    if (userId) {
      fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, moduleId, questionIndex: quizState.questionIndex, isCorrect }),
      }).catch(console.error);
    }

    setQuizState((prev) => ({
      ...prev,
      answered: true,
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

  const handleRetryModule = () => {
    setPhase('learn');
    setLearnIndex(0);
    setQuizState({
      questionIndex: 0,
      answered: false,
      selectedIndexes: [],
      isCorrect: false,
      correctCount: 0,
    });
  };

  const getAnswerState = (idx: number) => {
    if (!quizState.answered) {
      return quizState.selectedIndexes.includes(idx) ? 'selected' : 'idle';
    }
    const isCorrect = currentQuestion.correctIndexes.includes(idx);
    const isSelected = quizState.selectedIndexes.includes(idx);
    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'wrong';
    return 'muted';
  };

  const hasPassed = totalQuiz > 0 && quizState.correctCount > 0;
  const isPerfect = quizState.correctCount === totalQuiz;
  const earnedXP = Math.round((quizState.correctCount / totalQuiz) * 100);

  const globalPct = TOTAL_MODULES > 0 ? Math.round((completedCount / TOTAL_MODULES) * 100) : 0;

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      maxWidth: isDesktop ? 780 : 540,
      margin: '0 auto',
      padding: '0 0 32px',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* ─── Global progress strip ─── */}
      <div style={{ height: 4, background: 'var(--surface-sunk)', flexShrink: 0 }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${globalPct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ height: '100%', background: 'var(--green)', borderRadius: '0 2px 2px 0' }}
        />
      </div>

      {/* ─── Top bar ─── */}
      <div style={{
        padding: isDesktop ? '16px 32px 8px' : '12px 20px 8px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}>
        <button
          onClick={() => router.push('/schulung')}
          style={{
            width: 42, height: 42, borderRadius: 14, border: 'none',
            background: 'var(--surface)', boxShadow: 'var(--clay-sm)',
            color: 'var(--text)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
          }}
        >
          <ArrowLeft size={18} strokeWidth={2.5}/>
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {t.modul.modulOf(mod.id, TOTAL_MODULES)} · {mod.emoji} · {t.modul.globalPct(globalPct)}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginTop: 2 }}>
            {mod.title}
          </div>
        </div>
        <Pill tone="red" size="sm" style={{ flexShrink: 0 }}>
          {phase === 'learn'
            ? `${learnIndex + 1}/${totalLearn}`
            : phase === 'quiz'
            ? `${quizState.questionIndex + 1}/${totalQuiz}`
            : '✓'
          }
        </Pill>
      </div>

      {/* ─── Phase progress bar ─── */}
      <div style={{ padding: isDesktop ? '0 32px 14px' : '0 20px 12px' }}>
        {phase === 'learn' && (
          <ProgressBar
            completed={learnIndex + 1}
            total={totalLearn}
            segments
            currentStep={learnIndex + 1}
            color="var(--red)"
            label={false}
          />
        )}
        {phase === 'quiz' && (
          <ProgressBar
            completed={quizState.answered ? quizState.questionIndex + 1 : quizState.questionIndex}
            total={totalQuiz}
            segments
            currentStep={quizState.answered ? quizState.questionIndex + 1 : quizState.questionIndex}
            color="var(--green)"
            label={false}
          />
        )}
      </div>

      <div style={{ flex: 1, padding: isDesktop ? '0 32px' : '0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <AnimatePresence mode="wait">

          {/* ─── LEARN PHASE ─── */}
          {phase === 'learn' && (
            <motion.div
              key={`learn-${learnIndex}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
              className="learn-grid"
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              {/* Left column: content card + optional video + optional infobox */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Surface radius={22} padding={isDesktop ? 28 : 20}>
                  <Pill tone="red" size="sm" style={{ marginBottom: 12 }}>
                    <BookOpen size={11}/> {t.modul.lessonOf(learnIndex + 1, totalLearn)}
                  </Pill>
                  <h2 style={{
                    fontSize: isDesktop ? 24 : 21,
                    fontWeight: 800,
                    letterSpacing: '-0.4px',
                    lineHeight: 1.2,
                    margin: '0 0 12px',
                    color: 'var(--text)',
                  }}>
                    {currentLearn.heading}
                  </h2>
                  <p style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                    margin: 0,
                  }}>
                    {currentLearn.text}
                  </p>
                </Surface>

                {/* YouTube video for module 1 first slide */}
                {mod.videoId && learnIndex === 0 && (
                  <VideoEmbed
                    videoId={mod.videoId}
                    title={t.modul.videoTitle(mod.title)}
                  />
                )}

                {/* InfoBox if this learn step has one */}
                {currentLearn.infoBox && (
                  <InfoBox variant={currentLearn.infoBox.variant} title={currentLearn.infoBox.title}>
                    {currentLearn.infoBox.text}
                  </InfoBox>
                )}
              </div>

              {/* Right column (desktop sidebar): Wächter tip */}
              <div style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                background: 'var(--green-soft)',
                borderRadius: 20, padding: '14px 16px',
                border: '1.5px solid var(--green)',
                boxShadow: 'var(--clay-sm)',
              }}>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ flexShrink: 0 }}
                >
                  <Waechter mood="happy" size={42}/>
                </motion.div>
                <div>
                  <div style={{
                    fontSize: 10, fontWeight: 800,
                    color: 'var(--green-deep)', letterSpacing: '0.5px',
                    textTransform: 'uppercase', marginBottom: 4,
                  }}>
                    {t.modul.hintLabel}
                  </div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--green-ink)', fontWeight: 500 }}>
                    {t.modul.hintText}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── QUIZ PHASE ─── */}
          {phase === 'quiz' && (
            <motion.div
              key={`quiz-${quizState.questionIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              <div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: 'var(--text-muted)',
                  letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 8,
                }}>
                  {t.modul.questionOf(quizState.questionIndex + 1, totalQuiz)}
                  {currentQuestion.type === 'multi' && (
                    <span style={{
                      color: 'var(--blue)', marginLeft: 8, fontWeight: 600,
                      letterSpacing: 0, textTransform: 'none',
                    }}>
                      {t.modul.multiHint}
                    </span>
                  )}
                </div>
                <h3 style={{
                  fontSize: isDesktop ? 21 : 18,
                  fontWeight: 800,
                  letterSpacing: '-0.3px',
                  lineHeight: 1.3,
                  margin: 0,
                  color: 'var(--text)',
                }}>
                  {currentQuestion.question}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {currentQuestion.options.map((option, idx) => (
                  <AnswerCard
                    key={idx}
                    letter={LETTERS[idx]}
                    label={option}
                    state={getAnswerState(idx) as 'idle' | 'selected' | 'correct' | 'wrong' | 'muted'}
                    onClick={() => handleToggleAnswer(idx)}
                    disabled={quizState.answered}
                  />
                ))}
              </div>

              {!quizState.answered && (
                <ClayButton
                  fullWidth
                  disabled={quizState.selectedIndexes.length === 0}
                  onClick={handleSubmitAnswer}
                >
                  {t.modul.btnCheckAnswer}
                </ClayButton>
              )}
            </motion.div>
          )}

          {/* ─── DONE PHASE ─── */}
          {phase === 'done' && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 20,
                maxWidth: 480, margin: '0 auto', width: '100%',
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Waechter
                  mood={hasPassed ? (isPerfect ? 'celebrate' : 'happy') : 'sad'}
                  size={100}
                />
              </motion.div>

              {hasPassed ? (
                /* ── PASSED ── */
                <Surface radius={22} style={{ width: '100%', textAlign: 'center' }}>
                  <Pill tone="green" size="sm" style={{ marginBottom: 12 }}>
                    <CheckCircle size={11}/> {t.modul.pillDone}
                  </Pill>
                  <h2 style={{
                    fontSize: 26, fontWeight: 900, letterSpacing: '-0.5px',
                    margin: 0, color: 'var(--text)',
                  }}>
                    {isPerfect ? t.modul.donePerfect : t.modul.donePassed}
                  </h2>

                  {/* XP earned banner */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: 'linear-gradient(135deg, var(--xp), var(--streak))',
                      color: '#fff',
                      padding: '8px 18px',
                      borderRadius: 999,
                      fontWeight: 900,
                      fontSize: 18,
                      margin: '14px 0 4px',
                      boxShadow: '0 4px 16px rgba(245,180,0,0.4)',
                    }}
                  >
                    <Star size={16} fill="#fff" strokeWidth={0}/>
                    +{earnedXP} XP
                  </motion.div>

                  <div style={{
                    fontSize: 44, fontWeight: 900, color: 'var(--green)',
                    letterSpacing: '-1px', margin: '10px 0 4px',
                  }}>
                    {Math.round((quizState.correctCount / totalQuiz) * 100)}
                    <span style={{ fontSize: 20, fontWeight: 700, opacity: 0.65 }}> %</span>
                  </div>

                  <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 16px' }}>
                    {t.modul.doneCorrect(quizState.correctCount, totalQuiz)}
                  </p>

                  {/* Stars for perfect */}
                  {isPerfect && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 14 }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.12, type: 'spring', stiffness: 280 }}
                        >
                          <Star size={28} fill="var(--xp)" color="var(--xp)" strokeWidth={1.5}/>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {mod.quiz.map((_, i) => (
                      <div key={i} style={{
                        width: 32, height: 32, borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700,
                        background: i < quizState.correctCount ? 'var(--green-soft)' : 'var(--red-soft)',
                        color: i < quizState.correctCount ? 'var(--green-deep)' : 'var(--red)',
                      }}>
                        {i < quizState.correctCount ? '✓' : '✗'}
                      </div>
                    ))}
                  </div>
                </Surface>
              ) : (
                /* ── FAILED (0 correct) ── */
                <Surface radius={22} style={{ width: '100%', textAlign: 'center' }} accent="var(--red)">
                  <Pill tone="red" size="sm" style={{ marginBottom: 12 }}>
                    {t.modul.pillFailed}
                  </Pill>
                  <h2 style={{
                    fontSize: 24, fontWeight: 800, letterSpacing: '-0.4px',
                    margin: 0, color: 'var(--text)',
                  }}>
                    {t.modul.doneFailed}
                  </h2>
                  <p style={{
                    fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55,
                    margin: '12px 0 0',
                  }}>
                    {t.modul.doneFailedDesc}
                  </p>
                </Surface>
              )}

              {hasPassed ? (
                <ClayButton fullWidth variant="success" disabled={saving} onClick={handleFinishModule}>
                  {saving ? t.modul.btnSaving : t.modul.btnOverview}
                </ClayButton>
              ) : (
                <ClayButton fullWidth onClick={handleRetryModule}>
                  <RefreshCw size={16} color="#fff" strokeWidth={2.5}/>
                  {t.modul.btnRetry}
                </ClayButton>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Sticky bottom: learn navigation ─── */}
      {phase === 'learn' && (
        <div style={{
          position: 'sticky', bottom: 0,
          padding: isDesktop ? '14px 32px 24px' : '14px 20px 20px',
          background: `linear-gradient(180deg, transparent, var(--bg) 32%)`,
          display: 'flex', gap: 10, marginTop: 8,
        }}>
          {learnIndex > 0 && (
            <ClayButton variant="soft" onClick={() => setLearnIndex((i) => i - 1)} style={{ width: 52, padding: 0 }}>
              <ArrowLeft size={18} strokeWidth={2.5}/>
            </ClayButton>
          )}
          <ClayButton fullWidth onClick={() => {
            if (learnIndex < totalLearn - 1) setLearnIndex((i) => i + 1);
            else setPhase('quiz');
          }}>
            {learnIndex < totalLearn - 1 ? t.modul.btnNext : t.modul.btnToQuiz}
            <ArrowRight size={16} color="#fff" strokeWidth={3}/>
          </ClayButton>
        </div>
      )}

      {/* ─── Sticky bottom: quiz feedback ─── */}
      {phase === 'quiz' && quizState.answered && (
        <div style={{ position: 'sticky', bottom: 0, padding: isDesktop ? '0 32px' : '0' }}>
          <FeedbackBanner
            isCorrect={quizState.isCorrect}
            explanation={currentQuestion.explanation}
            onNext={handleNextQuestion}
            nextLabel={quizState.questionIndex + 1 >= totalQuiz ? t.modul.seeResultLabel : t.modul.nextQuestionLabel}
          />
        </div>
      )}
    </main>
  );
}
