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
  const colors = ['#E11D2E', '#15B886', '#FF7A1A', '#F5B400', '#2E6CF6'];
  const color = colors[Math.floor(x * colors.length) % colors.length];
  return (
    <motion.div
      style={{
        position: 'fixed', top: -20, left: `${x * 100}%`,
        width: 7, height: 13, borderRadius: 2,
        background: color, pointerEvents: 'none', zIndex: 100,
      }}
      initial={{ y: 0, rotate: 0, opacity: 1 }}
      animate={{ y: '110vh', rotate: 720, opacity: 0 }}
      transition={{ duration: 2.5 + delay, delay, ease: 'easeIn' }}
    />
  );
}

function Confetti() {
  const pieces = Array.from({ length: 20 }, (_, i) => ({
    id: i, x: (i * 0.618 + 0.1) % 1, delay: (i * 0.11) % 0.8,
  }));
  return <>{pieces.map((p) => <ConfettiPiece key={p.id} x={p.x} delay={p.delay}/>)}</>;
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
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <Waechter mood="thinking" size={80}/>
        </motion.div>
      </main>
    );
  }

  const maxW = isDesktop ? 640 : 480;

  return (
    <>
      {/* ─── Print CSS ─── */}
      <style>{`
        @media print {
          @page { margin: 12mm 14mm; size: A4 portrait; }
          html, body { background: #ffffff !important; color: #111 !important; }
          .no-print { display: none !important; }
          .cert-main {
            padding: 0 !important;
            max-width: 100% !important;
            min-height: auto !important;
            background: #ffffff !important;
          }
          .cert-header {
            background: #1D3461 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            border-radius: 12px 12px 0 0 !important;
          }
          .cert-seal {
            background: linear-gradient(135deg, #F5B400, #FF7A1A) !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cert-stat-red {
            background: #FCE4E6 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cert-stat-blue {
            background: #E1ECFF !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cert-stat-green {
            background: #D6F5E8 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cert-check-icon {
            background: #15B886 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cert-card {
            border: 2px solid #1D3461 !important;
            border-radius: 14px !important;
            box-shadow: none !important;
            page-break-inside: avoid;
          }
          .cert-checklist {
            background: #f5f5f5 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            border: 1px solid #ddd !important;
            border-radius: 12px !important;
            page-break-inside: avoid;
          }
          .cert-divider { display: block !important; border-top: 1px solid #e0e0e0 !important; margin: 12px 0 !important; }
        }
      `}</style>

      <main
        className="cert-main"
        style={{
          minHeight: '100vh',
          background: `linear-gradient(180deg, var(--green-soft) 0%, var(--bg) 38%)`,
          padding: isDesktop ? '40px 32px 56px' : '24px 20px 40px',
          maxWidth: maxW,
          margin: '0 auto',
        }}
      >
        {/* Confetti – screen only */}
        {showConfetti && (
          <span className="no-print">
            <Confetti/>
          </span>
        )}

        {/* Wächter – screen only */}
        <motion.div
          className="no-print"
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Waechter size={isDesktop ? 130 : 110} mood="celebrate"/>
        </motion.div>

        {/* Headline – screen only */}
        <div className="no-print" style={{ textAlign: 'center', marginBottom: 24 }}>
          <Pill tone="green" size="sm" style={{ marginBottom: 10 }}>
            <Trophy size={11}/> {t.abschluss.pillDone}
          </Pill>
          <h1 style={{
            fontSize: isDesktop ? 36 : 30, fontWeight: 900,
            letterSpacing: '-0.8px', lineHeight: 1.05, margin: '0 0 8px', color: 'var(--text)',
          }}>
            {t.abschluss.congratsTitle} {userName}.
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
            {t.abschluss.congratsSubtitle(modules.length)}
          </p>
        </div>

        {/* ─── Certificate card ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          style={{ marginBottom: 16 }}
        >
          <Surface className="cert-card" padding={0} radius={24} style={{ overflow: 'hidden' }}>

            {/* Header – hardcoded hex so it prints correctly regardless of dark/light mode */}
            <div
              className="cert-header"
              style={{
                background: 'linear-gradient(135deg, #1D3461 0%, #152549 100%)',
                borderRadius: '22px 22px 0 0',
                padding: isDesktop ? '22px 28px 20px' : '18px 22px 16px',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle circle decoration */}
              <div style={{
                position: 'absolute', top: -30, right: -30,
                width: 140, height: 140, borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
              }}/>

              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '1.2px', opacity: 0.7, textTransform: 'uppercase', marginBottom: 8 }}>
                MS DIRECT GROUP · DIRECT2FUTURE
              </div>
              <div style={{ fontSize: isDesktop ? 22 : 20, fontWeight: 900, letterSpacing: '-0.4px', lineHeight: 1.15 }}>
                {t.abschluss.certTitle}
              </div>
              <div style={{ fontSize: 12, opacity: 0.72, marginTop: 5, fontWeight: 500 }}>
                {t.abschluss.certProgram} · {today}
              </div>

              {/* Seal */}
              <div
                className="cert-seal"
                style={{
                  position: 'absolute', right: isDesktop ? 24 : 18, top: '50%', transform: 'translateY(-50%)',
                  width: 60, height: 60, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F5B400, #FF7A1A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.25), 0 0 0 3px rgba(255,255,255,0.2)',
                }}
              >
                <Shield size={26} color="#fff" strokeWidth={2.5}/>
              </div>
            </div>

            {/* Body */}
            <div style={{
              padding: isDesktop ? '20px 28px 24px' : '16px 22px 20px',
              background: '#ffffff',
            }}>
              {/* Logo – shown in original colours on white; always visible in print */}
              <div style={{ marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid #e8e8e8' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ms-direct-logo.png"
                  alt="MS Direct Group"
                  width={170}
                  style={{ display: 'block', height: 'auto' }}
                />
              </div>

              <div style={{ fontSize: 11, fontWeight: 700, color: '#666', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                {t.abschluss.awardedTo}
              </div>
              <div style={{ fontSize: isDesktop ? 28 : 24, fontWeight: 900, color: '#1A1414', marginTop: 2, letterSpacing: '-0.5px' }}>
                {userName}
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginTop: 10 }}>
                {[1,2,3,4,5].map((i) => (
                  <Trophy key={i} size={22}
                    color={i <= stars ? '#F5B400' : '#ddd'}
                    fill={i <= stars ? '#F5B400' : 'none'}
                    strokeWidth={2}
                  />
                ))}
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginTop: 16 }}>
                <div className="cert-stat-red" style={{ background: '#FCE4E6', borderRadius: 12, padding: '11px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#B0121F', letterSpacing: '0.5px', textTransform: 'uppercase', opacity: 0.8 }}>
                    {t.abschluss.statsPoints}
                  </div>
                  <div style={{ marginTop: 3, fontSize: 18, fontWeight: 900, color: '#B0121F' }}>
                    {totalScore}<span style={{ fontSize: 10, fontWeight: 700, marginLeft: 2, opacity: 0.65 }}>/{maxScore}</span>
                  </div>
                </div>
                <div className="cert-stat-blue" style={{ background: '#E1ECFF', borderRadius: 12, padding: '11px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#1A52D0', letterSpacing: '0.5px', textTransform: 'uppercase', opacity: 0.8 }}>
                    {t.abschluss.statsTime}
                  </div>
                  <div style={{ marginTop: 3, fontSize: 18, fontWeight: 900, color: '#1A52D0' }}>
                    ~20<span style={{ fontSize: 10, fontWeight: 700, marginLeft: 2, opacity: 0.65 }}>{t.abschluss.statsTimeSuffix}</span>
                  </div>
                </div>
                <div className="cert-stat-green" style={{ background: '#D6F5E8', borderRadius: 12, padding: '11px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#0A5F46', letterSpacing: '0.5px', textTransform: 'uppercase', opacity: 0.8 }}>
                    {t.abschluss.statsModules}
                  </div>
                  <div style={{ marginTop: 3, fontSize: 18, fontWeight: 900, color: '#0A5F46' }}>
                    {modules.length}<span style={{ fontSize: 10, fontWeight: 700, marginLeft: 2, opacity: 0.65 }}>✓</span>
                  </div>
                </div>
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
          <div
            className="cert-checklist"
            style={{
              background: 'var(--surface-soft)',
              borderRadius: 20,
              padding: isDesktop ? 18 : 14,
              border: '1px solid var(--border-soft)',
              boxShadow: 'var(--clay-sm)',
            }}
          >
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
                const scoreColor = score >= 80 ? '#0E8D67' : score >= 50 ? '#FF7A1A' : '#888';
                return (
                  <div key={mod.id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      className="cert-check-icon"
                      style={{
                        width: 24, height: 24, borderRadius: 7,
                        background: '#15B886',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}
                    >
                      <Check size={13} color="#fff" strokeWidth={3.5}/>
                    </div>
                    <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
                      {mod.title}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 800, flexShrink: 0, color: scoreColor }}>
                      {score}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTAs – screen only */}
        <div className="no-print" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
    </>
  );
}
