'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, Download, Trophy, Check, FileText } from 'lucide-react';
import Surface, { ClayButton, Pill } from '@/components/Surface';
import Waechter from '@/components/Waechter';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { useTranslation } from '@/lib/i18n';
import { useLocale } from '@/lib/locale-context';
import { getModules } from '@/data/modules';

type ProgressEntry = {
  moduleId: number;
  completed: boolean;
  score: number;
};

function ConfettiPiece({ delay, x }: { delay: number; x: number }) {
  const colors = ['var(--red)', 'var(--green)', 'var(--streak)', 'var(--xp)', 'var(--blue)'];
  const color = colors[Math.floor(x * colors.length) % colors.length];
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: -20,
        left: `${x * 100}%`,
        width: 7,
        height: 13,
        borderRadius: 2,
        background: color,
        pointerEvents: 'none',
        zIndex: 100,
      }}
      initial={{ y: 0, rotate: 0, opacity: 1 }}
      animate={{ y: '110vh', rotate: 720, opacity: 0 }}
      transition={{ duration: 2.5 + delay, delay, ease: 'easeIn' }}
    />
  );
}

function Confetti() {
  const pieces = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i * 0.618 + 0.1) % 1,
    delay: (i * 0.11) % 0.8,
  }));
  return (
    <>
      {pieces.map((p) => (
        <ConfettiPiece key={p.id} x={p.x} delay={p.delay}/>
      ))}
    </>
  );
}

export default function AbschlussPage() {
  const [userName, setUserName] = useState('');
  const [progressData, setProgressData] = useState<ProgressEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(true);
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const t = useTranslation();
  const { locale } = useLocale();
  const modules = getModules(locale);

  const dateLocale = locale === 'en' ? 'en-GB' : locale === 'fr' ? 'fr-CH' : 'de-CH';

  useEffect(() => {
    const uid = localStorage.getItem('userId');
    const uname = localStorage.getItem('userName');
    if (!uid) { router.replace('/'); return; }
    setUserName(uname || '');

    fetch(`/api/progress?userId=${uid}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.progress) {
          const completed = (data.progress as ProgressEntry[]).filter((p) => p.completed);
          if (completed.length < modules.length) { router.replace('/schulung'); return; }
          setProgressData(data.progress);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));

    const timer = setTimeout(() => setShowConfetti(false), 3500);
    return () => clearTimeout(timer);
  }, [router]);

  const today = new Date().toLocaleDateString(dateLocale, {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  const totalScore = progressData.reduce((sum, p) => sum + (p.score || 0), 0);
  const maxScore = modules.length * 100;
  const stars = Math.round((totalScore / maxScore) * 5);

  if (loading) {
    return (
      <main style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg)',
      }}>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Waechter mood="thinking" size={80}/>
        </motion.div>
      </main>
    );
  }

  const stats = [
    { label: t.abschluss.statsPoints, value: String(totalScore), suffix: `/${modules.length * 100}`, color: 'var(--red)',   bg: 'var(--red-soft)'   },
    { label: t.abschluss.statsTime,   value: '~20',              suffix: t.abschluss.statsTimeSuffix,   color: 'var(--blue)',  bg: 'var(--blue-soft)'  },
    { label: t.abschluss.statsModules,value: String(modules.length), suffix: '✓', color: 'var(--green)', bg: 'var(--green-soft)' },
  ];

  const maxW = isDesktop ? 640 : 480;

  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(180deg, var(--green-soft) 0%, var(--bg) 38%)`,
      padding: isDesktop ? '40px 32px 56px' : '24px 20px 40px',
      maxWidth: maxW,
      margin: '0 auto',
    }}>
      {showConfetti && <Confetti/>}

      {/* Wächter */}
      <motion.div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Waechter size={isDesktop ? 130 : 110} mood="celebrate"/>
      </motion.div>

      {/* Headline */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Pill tone="green" size="sm" style={{ marginBottom: 10 }}>
          <Trophy size={11}/> {t.abschluss.pillDone}
        </Pill>
        <h1 style={{
          fontSize: isDesktop ? 36 : 30,
          fontWeight: 900,
          letterSpacing: '-0.8px',
          lineHeight: 1.05,
          margin: '0 0 8px',
          color: 'var(--text)',
        }}>
          {t.abschluss.congratsTitle} {userName}.
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
          {t.abschluss.congratsSubtitle(modules.length)}
        </p>
      </div>

      {/* Certificate card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{ marginBottom: 16 }}
      >
        <Surface padding={0} radius={24}>
          {/* Header band */}
          <div style={{
            background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))',
            borderRadius: '22px 22px 0 0',
            padding: isDesktop ? '20px 28px' : '16px 22px',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -24, right: -24,
              width: 120, height: 120, borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
            }}/>
            {/* Logo – white filter on dark background */}
            <div style={{ marginBottom: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ms-direct-logo.svg"
                alt="MS Direct Group"
                width={150}
                style={{
                  height: 'auto',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.92,
                }}
              />
            </div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '1px', opacity: 0.75, textTransform: 'uppercase' }}>
              {t.abschluss.certOrg}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.3px', marginTop: 4 }}>
              {t.abschluss.certTitle}
            </div>
            <div style={{ fontSize: 12, opacity: 0.75, marginTop: 2 }}>
              {t.abschluss.certProgram} · {today}
            </div>
            {/* Seal */}
            <div style={{
              position: 'absolute', right: isDesktop ? 24 : 18, top: '50%', transform: 'translateY(-50%)',
              width: 62, height: 62, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--xp), var(--streak))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2), 0 0 0 4px rgba(255,255,255,0.15)',
            }}>
              <Shield size={28} color="#fff" strokeWidth={2.4}/>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: isDesktop ? '22px 28px 24px' : '18px 22px 20px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              {t.abschluss.awardedTo}
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)', marginTop: 2, letterSpacing: '-0.4px' }}>
              {userName}
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: 4, marginTop: 10 }}>
              {[1,2,3,4,5].map((i) => (
                <Trophy key={i} size={20}
                  color={i <= stars ? 'var(--xp)' : 'var(--surface-sunk)'}
                  fill={i <= stars ? 'var(--xp)' : 'none'}
                  strokeWidth={2.2}
                />
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginTop: 16 }}>
              {stats.map(({ label, value, suffix, color, bg }) => (
                <div key={label} style={{
                  background: bg, borderRadius: 14, padding: '12px 8px',
                  textAlign: 'center', boxShadow: 'var(--clay-sm)',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: '0.4px', textTransform: 'uppercase', opacity: 0.75 }}>
                    {label}
                  </div>
                  <div style={{ marginTop: 3, fontSize: 20, fontWeight: 800, color, letterSpacing: '-0.3px' }}>
                    {value}
                    <span style={{ fontSize: 11, fontWeight: 700, marginLeft: 2, opacity: 0.7 }}>{suffix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Surface>
      </motion.div>

      {/* Module checklist */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.35 }}
        style={{ marginBottom: 22 }}
      >
        <Surface variant="soft" radius={20} padding={isDesktop ? 18 : 14}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: 'var(--text-muted)',
            letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 12,
          }}>
            {t.abschluss.completedModules}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {modules.map((mod) => {
              const entry = progressData.find((p) => p.moduleId === mod.id);
              const score = entry?.score ?? 0;
              return (
                <div key={mod.id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: 8,
                    background: 'var(--green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Check size={13} color="#fff" strokeWidth={3.5}/>
                  </div>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
                    {mod.title}
                  </div>
                  <div style={{
                    fontSize: 12, fontWeight: 800, flexShrink: 0,
                    color: score >= 80 ? 'var(--green-deep)' : score >= 50 ? 'var(--xp)' : 'var(--text-muted)',
                  }}>
                    {score}%
                  </div>
                </div>
              );
            })}
          </div>
        </Surface>
      </motion.div>

      {/* CTAs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ClayButton fullWidth onClick={() => window.print()}>
          <Download size={16} color="#fff" strokeWidth={2.6}/>
          {t.abschluss.btnDownload}
        </ClayButton>
        <ClayButton
          variant="soft"
          fullWidth
          onClick={() => window.open('/handout', '_blank')}
          style={{ border: '1.5px solid var(--navy-soft)' }}
        >
          <FileText size={16} color="var(--navy)" strokeWidth={2.4}/>
          <span style={{ color: 'var(--navy)' }}>{t.abschluss.btnHandout}</span>
        </ClayButton>
        <ClayButton variant="soft" fullWidth onClick={() => router.push('/schulung')}>
          {t.abschluss.btnOverview}
        </ClayButton>
      </div>
    </main>
  );
}
