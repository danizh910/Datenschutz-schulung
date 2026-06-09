'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Flame, Zap, Lock, Check, Star } from 'lucide-react';
import { getModules } from '@/data/modules';
import type { Module } from '@/data/modules';
import ProgressBar from '@/components/ProgressBar';
import Waechter from '@/components/Waechter';
import VideoEmbed from '@/components/VideoEmbed';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { useTranslation } from '@/lib/i18n';
import { useLocale } from '@/lib/locale-context';

type ProgressEntry = { moduleId: number; completed: boolean; score: number };
type ModuleStatus = 'done' | 'current' | 'locked';

const PATH_POSITIONS = [
  { x: 22, y: 40  },
  { x: 75, y: 200 },
  { x: 22, y: 360 },
  { x: 75, y: 520 },
  { x: 22, y: 680 },
  { x: 75, y: 840 },
  { x: 48, y: 1000 },
];

function scoreBadge(score: number): { bg: string; color: string; border: string; star: boolean } {
  if (score === 100) return { bg: 'var(--xp-soft)',     color: '#92640a',          border: 'rgba(245,180,0,0.45)',   star: true  };
  if (score >= 75)   return { bg: 'var(--green-soft)',  color: 'var(--green-deep)', border: 'rgba(21,184,134,0.35)', star: false };
  if (score >= 50)   return { bg: 'var(--streak-soft)', color: 'var(--streak)',     border: 'rgba(255,122,26,0.35)', star: false };
  return               { bg: 'var(--red-soft)',    color: 'var(--red)',        border: 'rgba(225,29,46,0.35)',  star: false };
}

function PathConnectorSVG({
  from, to, done, totalW, padding,
}: { from: { x: number; y: number }; to: { x: number; y: number }; done: boolean; totalW: number; padding: number }) {
  // Node centers are at (x% of totalW) in parent coords.
  // SVG origin is `padding` px from parent left, so subtract padding for SVG-local coords.
  const x1 = (from.x / 100) * totalW - padding;
  const y1 = from.y + 40;
  const x2 = (to.x / 100) * totalW - padding;
  const y2 = to.y + 40;
  const midY = (y1 + y2) / 2;
  const d = `M${x1},${y1} C${x1},${midY} ${x2},${midY} ${x2},${y2}`;
  return (
    <>
      <path d={d} fill="none" stroke="var(--surface-sunk)" strokeWidth={6} strokeLinecap="round" strokeDasharray="10 8" />
      {done && (
        <path
          d={d} fill="none" stroke="var(--green)" strokeWidth={6} strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 5px rgba(21,184,134,0.45))' }}
        />
      )}
    </>
  );
}

function ModulePathNode({
  mod, pos, status, score, onClick, currentLabel,
}: {
  mod: Module; pos: { x: number; y: number }; status: ModuleStatus;
  score: number; onClick: () => void; currentLabel: string;
}) {
  const isClickable = status !== 'locked';
  const badge = status === 'done' && score > 0 ? scoreBadge(score) : null;

  const circleBg = status === 'done' ? 'var(--green)' : status === 'current' ? 'var(--red)' : 'var(--surface-sunk)';
  const circleFg = status === 'locked' ? 'var(--text-subtle)' : '#fff';
  const circleGlow = status === 'done' ? 'var(--glow-green)' : status === 'current' ? 'var(--glow-red)' : 'none';

  return (
    <div style={{
      position: 'absolute', left: `${pos.x}%`, top: pos.y,
      transform: 'translateX(-50%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      zIndex: 2,
    }}>
      {/* Pulse ring for current module */}
      {status === 'current' && (
        <div style={{
          position: 'absolute', width: 106, height: 106,
          top: -13, left: '50%', marginLeft: -53,
          borderRadius: '50%', background: 'var(--red)', opacity: 0.13,
          animation: 'wPulse 2s ease-out infinite', pointerEvents: 'none',
        }}/>
      )}

      {/* "Aktuell" tooltip above */}
      {status === 'current' && (
        <div style={{
          position: 'absolute', top: -46, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--red)', color: '#fff',
          padding: '4px 12px', borderRadius: 8,
          fontSize: 10, fontWeight: 800, letterSpacing: '0.6px', whiteSpace: 'nowrap',
          boxShadow: '0 2px 10px rgba(225,29,46,0.4)', zIndex: 3,
        }}>
          {currentLabel}
          <div style={{
            position: 'absolute', bottom: -4, left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: 8, height: 8, background: 'var(--red)',
          }}/>
        </div>
      )}

      {/* Main circle */}
      <motion.button
        onClick={isClickable ? onClick : undefined}
        whileHover={isClickable ? { scale: 1.07, y: -3 } : undefined}
        whileTap={isClickable ? { scale: 0.93 } : undefined}
        style={{
          width: 80, height: 80, borderRadius: '50%',
          background: circleBg, color: circleFg,
          border: '3px solid var(--surface)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: isClickable ? 'pointer' : 'default',
          boxShadow: status !== 'locked' ? `var(--clay-lg), ${circleGlow}` : 'var(--clay-inset)',
          position: 'relative', padding: 0,
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {status === 'locked'
          ? <Lock size={26} strokeWidth={2.5}/>
          : <span style={{ fontSize: 32, lineHeight: 1, userSelect: 'none' }}>{mod.emoji}</span>
        }

        {/* Module number badge */}
        <div style={{
          position: 'absolute', bottom: -7, right: -7,
          width: 24, height: 24, borderRadius: '50%',
          background: 'var(--surface)',
          color: status === 'locked' ? 'var(--text-muted)' : circleBg,
          fontSize: 11, fontWeight: 800,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--clay-sm)', border: '1.5px solid var(--border)',
        }}>
          {mod.id}
        </div>

        {/* Done checkmark badge */}
        {status === 'done' && (
          <div style={{
            position: 'absolute', top: -5, right: -5,
            width: 22, height: 22, borderRadius: '50%',
            background: 'var(--green-deep)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid var(--surface)',
            boxShadow: '0 2px 6px rgba(14,141,103,0.4)',
          }}>
            <Check size={12} strokeWidth={3.5} color="#fff"/>
          </div>
        )}
      </motion.button>

      {/* Title label */}
      <div style={{
        background: 'var(--surface)',
        padding: '6px 14px', borderRadius: 12,
        boxShadow: 'var(--clay-sm)',
        fontSize: 12, fontWeight: 700,
        color: status === 'locked' ? 'var(--text-subtle)' : 'var(--text)',
        border: status === 'current' ? '1.5px solid rgba(225,29,46,0.4)' : '1px solid var(--border-soft)',
        maxWidth: 170, textAlign: 'center',
        lineHeight: 1.35,
        wordBreak: 'break-word',
      }}>
        {mod.title}
      </div>

      {/* Score badge */}
      {badge && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          fontSize: 11, fontWeight: 800, color: badge.color,
          background: badge.bg, padding: '3px 10px', borderRadius: 999,
          border: `1px solid ${badge.border}`,
        }}>
          {badge.star && <Star size={10} fill="currentColor" strokeWidth={0}/>}
          {score}%
        </div>
      )}
    </div>
  );
}

export default function SchulungPage() {
  const [userName, setUserName] = useState('');
  const [progressData, setProgressData] = useState<ProgressEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [streak] = useState(3);
  const [containerW, setContainerW] = useState(360);
  const pathRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const t = useTranslation();
  const { locale } = useLocale();
  const modules = getModules(locale);

  useEffect(() => {
    const uid = localStorage.getItem('userId');
    const uname = localStorage.getItem('userName');
    if (!uid) { router.replace('/'); return; }
    setUserName(uname || '');

    fetch(`/api/progress?userId=${uid}`)
      .then((r) => r.json())
      .then((data) => { if (data.progress) setProgressData(data.progress); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => {
    if (!pathRef.current) return;
    const ro = new ResizeObserver(() => {
      if (pathRef.current) setContainerW(pathRef.current.offsetWidth);
    });
    ro.observe(pathRef.current);
    setContainerW(pathRef.current.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const completedIds = new Set(progressData.filter((p) => p.completed).map((p) => p.moduleId));
  const completedCount = completedIds.size;
  const totalScore = progressData.reduce((sum, p) => sum + (p.score || 0), 0);
  const progressPct = modules.length > 0 ? Math.round((completedCount / modules.length) * 100) : 0;

  const getStatus = (moduleId: number): ModuleStatus => {
    if (completedIds.has(moduleId)) return 'done';
    if (moduleId === 1 || completedIds.has(moduleId - 1)) return 'current';
    return 'locked';
  };
  const getScore = (moduleId: number) => progressData.find((p) => p.moduleId === moduleId)?.score ?? 0;

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <Waechter mood="thinking" size={80}/>
          </motion.div>
          <p style={{ color: 'var(--text-muted)', marginTop: 14, fontSize: 14, fontWeight: 500 }}>
            {t.schulung.loadingText}
          </p>
        </div>
      </main>
    );
  }

  const pathHeight = PATH_POSITIONS[PATH_POSITIONS.length - 1].y + 130;
  const maxW = isDesktop ? 860 : 480;
  const barColor = progressPct === 100 ? 'var(--green)' : progressPct >= 50 ? 'var(--xp)' : 'var(--red)';

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingBottom: 40 }}>

      {/* ─── Header ─── */}
      <div style={{ padding: isDesktop ? '28px 40px 0' : '20px 20px 0', maxWidth: maxW, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 3 }}>
              {t.schulung.orgLabel}
            </div>
            <h1 style={{ fontSize: isDesktop ? 26 : 22, fontWeight: 800, color: 'var(--text)', margin: 0, letterSpacing: '-0.4px' }}>
              {t.schulung.welcome} {userName}
            </h1>
          </div>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'var(--streak-soft)', padding: '8px 12px', borderRadius: 14, boxShadow: 'var(--clay-sm)', border: '1px solid var(--border-soft)' }}>
              <Flame size={17} color="var(--streak)" fill="var(--streak)"/>
              <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--streak)' }}>{streak}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'var(--xp-soft)', padding: '8px 12px', borderRadius: 14, boxShadow: 'var(--clay-sm)', border: '1px solid var(--border-soft)' }}>
              <Zap size={17} color="var(--xp)" fill="var(--xp)"/>
              <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--xp)' }}>{totalScore}</span>
            </div>
          </div>
        </div>

        {/* Progress bar — custom label + color-coded bar */}
        <div style={{ marginTop: 18, marginBottom: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 500 }}>
              {completedCount} / {modules.length} Module abgeschlossen
            </span>
            <span style={{ color: barColor, fontSize: 13, fontWeight: 700, transition: 'color 0.4s ease' }}>
              {progressPct}%
            </span>
          </div>
          <ProgressBar completed={completedCount} total={modules.length} label={false} color={barColor}/>
        </div>

        {/* All-done banner */}
        {completedCount === modules.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: 'var(--green-soft)', border: '2px solid var(--green)',
              borderRadius: 20, padding: '18px 22px', marginBottom: 22,
              cursor: 'pointer', boxShadow: 'var(--glow-green)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            }}
            onClick={() => router.push('/abschluss')}
          >
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--green-deep)', marginBottom: 3 }}>
                {t.schulung.allDoneTitle}
              </div>
              <div style={{ fontSize: 13, color: 'var(--green-ink)', fontWeight: 500 }}>
                {t.schulung.allDoneDesc}
              </div>
            </div>
            <div style={{ background: 'var(--green)', color: '#fff', borderRadius: 12, padding: '8px 14px', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
              {t.schulung.allDoneBtn}
            </div>
          </motion.div>
        )}
      </div>

      {/* ─── Einführungsvideo ─── */}
      <div style={{ padding: isDesktop ? '0 40px' : '0 20px', maxWidth: maxW, margin: '0 auto 22px' }}>
        <div style={{ background: 'var(--surface)', borderRadius: 20, padding: '14px 16px 16px', boxShadow: 'var(--clay-sm)', border: '1px solid var(--border-soft)' }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
            {t.schulung.videoLabel}
          </div>
          <VideoEmbed videoId="bGHo6ahlXTI" title="Einführungsvideo: Datenschutz-Schulung MS Direct Group"/>
        </div>
      </div>

      {/* ─── Wächter tip ─── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: isDesktop ? '0 40px' : '0 20px', maxWidth: maxW, margin: '0 auto 24px' }}>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ flexShrink: 0 }}
        >
          <Waechter mood={completedCount === modules.length ? 'celebrate' : completedCount > 0 ? 'happy' : 'wave'} size={52}/>
        </motion.div>
        <div style={{
          background: 'var(--surface)', borderRadius: '16px 16px 16px 4px',
          padding: '10px 14px', boxShadow: 'var(--clay-sm)',
          fontSize: 13, fontWeight: 500, color: 'var(--text-muted)',
          border: '1px solid var(--border-soft)',
          maxWidth: isDesktop ? 400 : 260, lineHeight: 1.5,
        }}>
          {completedCount === 0
            ? t.schulung.tipStart
            : completedCount === modules.length
            ? t.schulung.tipDone
            : t.schulung.tipProgress(completedCount, modules.length)
          }
        </div>
      </div>

      {/* ─── Snake Path ─── */}
      <div
        ref={pathRef}
        style={{ position: 'relative', maxWidth: maxW, margin: '0 auto', padding: isDesktop ? '0 60px' : '0 20px', height: pathHeight }}
      >
        <svg
          style={{ position: 'absolute', inset: isDesktop ? '0 60px' : '0 20px', pointerEvents: 'none', overflow: 'visible' }}
          width={containerW - (isDesktop ? 120 : 40)}
          height={pathHeight}
        >
          {PATH_POSITIONS.slice(0, -1).map((pos, i) => (
            <PathConnectorSVG
              key={i}
              from={pos}
              to={PATH_POSITIONS[i + 1]}
              done={getStatus(modules[i].id) === 'done'}
              totalW={containerW}
              padding={isDesktop ? 60 : 20}
            />
          ))}
        </svg>

        {modules.map((mod, i) => (
          <ModulePathNode
            key={mod.id}
            mod={mod}
            pos={PATH_POSITIONS[i]}
            status={getStatus(mod.id)}
            score={getScore(mod.id)}
            onClick={() => router.push(`/modul/${mod.id}`)}
            currentLabel={t.schulung.currentLabel}
          />
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-subtle)', marginTop: 28, paddingBottom: 8 }}>
        {t.schulung.footer}
      </p>
    </main>
  );
}
