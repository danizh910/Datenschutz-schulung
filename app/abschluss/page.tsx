'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, Download, Trophy, Check, FileText, Trash2 } from 'lucide-react';
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
  const [userId, setUserId] = useState('');
  const [progressData, setProgressData] = useState<ProgressEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const certContainerRef = useRef<HTMLDivElement>(null);
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
    setUserName(uname || ''); // eslint-disable-line react-hooks/set-state-in-effect
    setUserId(uid); // eslint-disable-line react-hooks/set-state-in-effect

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
  const confirmationNr = userId
    ? `CONF-${userId.replace(/-/g, '').substring(0, 8).toUpperCase()}`
    : '';

  const handleDownloadPdf = async () => {
    if (!certContainerRef.current) return;
    setPdfLoading(true);
    try {
      const { generateCertificatePdf } = await import('@/lib/pdf/certificate');
      await generateCertificatePdf(
        certContainerRef.current,
        `Teilnahmebestaetigung-${userName.replace(/\s+/g, '-')}.pdf`,
      );
    } finally {
      setPdfLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(t.schulung.deleteConfirm)) return;
    const uid = localStorage.getItem('userId');
    if (!uid) return;
    try {
      await fetch(`/api/delete?userId=${uid}`, { method: 'DELETE' });
    } catch {
      // best-effort
    }
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    router.replace('/');
  };

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
    <main
      style={{
        minHeight: '100vh',
        background: `linear-gradient(180deg, var(--green-soft) 0%, var(--bg) 38%)`,
        padding: isDesktop ? '40px 32px 56px' : '24px 20px 40px',
        maxWidth: maxW,
        margin: '0 auto',
      }}
    >
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
          fontSize: isDesktop ? 36 : 30, fontWeight: 900,
          letterSpacing: '-0.8px', lineHeight: 1.05, margin: '0 0 8px', color: 'var(--text)',
        }}>
          {t.abschluss.congratsTitle} {userName}.
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
          {t.abschluss.congratsSubtitle(modules.length)}
        </p>
      </div>

      {/* PDF-captured container */}
      <div ref={certContainerRef} style={{ background: '#ffffff', borderRadius: 24, padding: 0, marginBottom: 16 }}>

        {/* ─── Certificate card ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          style={{ marginBottom: 16 }}
        >
          <Surface padding={0} radius={24} style={{ overflow: 'hidden', boxShadow: '0 2px 16px rgba(29,52,97,0.13)', border: '2px solid #1D3461' }}>

            {/* Header */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1D3461 0%, #152549 100%)',
                borderRadius: '22px 22px 0 0',
                padding: isDesktop ? '22px 28px 20px' : '18px 22px 16px',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: -30, right: -30,
                width: 140, height: 140, borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
              }}/>

              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '1.2px', opacity: 0.7, textTransform: 'uppercase', marginBottom: 8 }}>
                {t.abschluss.certOrg}
              </div>
              <div style={{ fontSize: isDesktop ? 22 : 20, fontWeight: 900, letterSpacing: '-0.4px', lineHeight: 1.15 }}>
                {t.abschluss.certTitle}
              </div>
              <div style={{ fontSize: 12, opacity: 0.72, marginTop: 5, fontWeight: 500 }}>
                {t.abschluss.certProgram}
              </div>

              {/* Seal */}
              <div
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
              {/* Logo */}
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
                <div style={{ background: '#FCE4E6', borderRadius: 12, padding: '11px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#B0121F', letterSpacing: '0.5px', textTransform: 'uppercase', opacity: 0.8 }}>
                    {t.abschluss.statsPoints}
                  </div>
                  <div style={{ marginTop: 3, fontSize: 18, fontWeight: 900, color: '#B0121F' }}>
                    {totalScore}<span style={{ fontSize: 10, fontWeight: 700, marginLeft: 2, opacity: 0.65 }}>/{maxScore}</span>
                  </div>
                </div>
                <div style={{ background: '#E1ECFF', borderRadius: 12, padding: '11px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#1A52D0', letterSpacing: '0.5px', textTransform: 'uppercase', opacity: 0.8 }}>
                    {t.abschluss.statsDate}
                  </div>
                  <div style={{ marginTop: 3, fontSize: 12, fontWeight: 900, color: '#1A52D0', lineHeight: 1.2 }}>
                    {today}
                  </div>
                </div>
                <div style={{ background: '#D6F5E8', borderRadius: 12, padding: '11px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#0A5F46', letterSpacing: '0.5px', textTransform: 'uppercase', opacity: 0.8 }}>
                    {t.abschluss.statsModules}
                  </div>
                  <div style={{ marginTop: 3, fontSize: 18, fontWeight: 900, color: '#0A5F46' }}>
                    {modules.length}<span style={{ fontSize: 10, fontWeight: 700, marginLeft: 2, opacity: 0.65 }}>✓</span>
                  </div>
                </div>
              </div>

              {/* Confirmation number + disclaimer */}
              {confirmationNr && (
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid #e8e8e8', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#888', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      {t.abschluss.confirmationNr}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#1D3461', letterSpacing: '0.5px', marginTop: 2 }}>
                      {confirmationNr}
                    </div>
                  </div>
                  <div style={{ fontSize: 9, color: '#AAA', textAlign: 'right', lineHeight: 1.4, maxWidth: 180 }}>
                    {t.abschluss.certDisclaimer}
                  </div>
                </div>
              )}
            </div>
          </Surface>
        </motion.div>

        {/* Module checklist */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.35 }}
          style={{ marginBottom: 8 }}
        >
          <div
            style={{
              background: '#FBF6EE',
              borderRadius: 20,
              padding: isDesktop ? 18 : 14,
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <div style={{
              fontSize: 11, fontWeight: 700, color: '#6B6256',
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
                      style={{
                        width: 24, height: 24, borderRadius: 7,
                        background: '#15B886',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}
                    >
                      <Check size={13} color="#fff" strokeWidth={3.5}/>
                    </div>
                    <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: '#1A1414', lineHeight: 1.3 }}>
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

      </div>{/* end certContainerRef */}

      {/* CTAs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ClayButton fullWidth onClick={handleDownloadPdf} disabled={pdfLoading}>
          <Download size={16} color="#fff" strokeWidth={2.6}/>
          {pdfLoading ? '…' : t.abschluss.btnDownload}
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

        {/* Data deletion */}
        <button
          onClick={handleDelete}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            background: 'transparent', color: 'var(--text-muted)',
            border: '1px solid var(--border-soft)', borderRadius: 14,
            padding: '10px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer',
            marginTop: 4,
          }}
        >
          <Trash2 size={14} strokeWidth={2}/>
          {t.schulung.deleteData}
        </button>
      </div>
    </main>
  );
}
