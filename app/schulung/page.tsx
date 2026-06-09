'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Flame, Zap, Lock, Check, Shield, User, AlertTriangle, Mail, Trophy } from 'lucide-react';
import { getModules } from '@/data/modules';
import type { Module } from '@/data/modules';
import ProgressBar from '@/components/ProgressBar';
import Waechter from '@/components/Waechter';
import VideoEmbed from '@/components/VideoEmbed';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { useTranslation } from '@/lib/i18n';
import { useLocale } from '@/lib/locale-context';

type ProgressEntry = {
  moduleId: number;
  completed: boolean;
  score: number;
};

type ModuleStatus = 'done' | 'current' | 'locked';

const PATH_POSITIONS = [
  { x: 30, y: 40  },
  { x: 68, y: 170 },
  { x: 30, y: 300 },
  { x: 68, y: 430 },
  { x: 50, y: 560 },
];

const MODULE_ICONS = [Shield, User, AlertTriangle, Mail, Trophy];

function PathConnectorSVG({
  from, to, done, containerW,
}: { from: { x: number; y: number }; to: { x: number; y: number }; done: boolean; containerW: number }) {
  const x1 = (from.x / 100) * containerW;
  const y1 = from.y + 40;
  const x2 = (to.x / 100) * containerW;
  const y2 = to.y + 40;
  const mx = (x1 + x2) / 2;
  const d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
  return (
    <path
      d={d}
      fill="none"
      stroke={done ? 'var(--green)' : 'var(--surface-sunk)'}
      strokeWidth={6}
      strokeLinecap="round"
      strokeDasharray={done ? undefined : '12 8'}
      style={{ transition: 'stroke 0.5s ease' }}
    />
  );
}

function ModulePathNode({
  mod, pos, status, score, onClick, currentLabel,
}: {
  mod: Module;
  pos: { x: number; y: number };
  status: ModuleStatus;
  score: number;
  onClick: () => void;
  currentLabel: string;
}) {
  const IconComp = MODULE_ICONS[mod.id - 1];
  const isClickable = status !== 'locked';

  const cfg = {
    done:    { bg: 'var(--green)',         fg: '#fff',               ring: 'var(--green-soft)',  glow: 'var(--glow-green)' },
    current: { bg: 'var(--red)',           fg: '#fff',               ring: 'var(--red-soft)',    glow: 'var(--glow-red)' },
    locked:  { bg: 'var(--surface-sunk)', fg: 'var(--text-subtle)', ring: 'transparent',        glow: 'none' },
  }[status];

  return (
    <div
      style={{
        position: 'absolute',
        left: `${pos.x}%`,
        top: pos.y,
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        zIndex: 2,
      }}
    >
      {status === 'current' && (
        <div style={{
          position: 'absolute',
          width: 96, height: 96,
          top: -8, left: '50%', marginLeft: -48,
          borderRadius: '50%',
          background: 'var(--red)',
          opacity: 0.18,
          animation: 'wPulse 1.8s ease-out infinite',
          pointerEvents: 'none',
        }}/>
      )}

      {status === 'current' && (
        <div style={{
          position: 'absolute',
          top: -38, right: -68,
          background: 'var(--text)',
          color: 'var(--surface)',
          padding: '5px 10px',
          borderRadius: 10,
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: '0.5px',
          boxShadow: 'var(--clay-sm)',
          whiteSpace: 'nowrap',
          zIndex: 3,
        }}>
          {currentLabel}
          <div style={{
            position: 'absolute',
            bottom: -4, left: 12,
            width: 8, height: 8,
            background: 'var(--text)',
            transform: 'rotate(45deg)',
          }}/>
        </div>
      )}

      <motion.button
        onClick={isClickable ? onClick : undefined}
        whileHover={isClickable ? { scale: 1.05 } : undefined}
        whileTap={isClickable ? { scale: 0.95 } : undefined}
        style={{
          width: 80, height: 80,
          borderRadius: '50%',
          background: cfg.bg,
          color: cfg.fg,
          border: `4px solid var(--surface)`,
          outline: status !== 'locked' ? `4px solid ${cfg.ring}` : 'none',
          outlineOffset: -8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: isClickable ? 'pointer' : 'default',
          boxShadow: status !== 'locked' ? `var(--clay-lg), ${cfg.glow}` : 'var(--clay-inset)',
          position: 'relative',
        }}
      >
        {status === 'done'
          ? <Check size={36} strokeWidth={3.2}/>
          : status === 'locked'
          ? <Lock size={28} strokeWidth={2.5}/>
          : <IconComp size={34} strokeWidth={2.2}/>
        }
        <div style={{
          position: 'absolute',
          bottom: -6, right: -6,
          width: 26, height: 26,
          borderRadius: '50%',
          background: 'var(--surface)',
          color: status === 'locked' ? 'var(--text-muted)' : cfg.bg,
          fontSize: 12, fontWeight: 800,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--clay-sm)',
          border: '1.5px solid var(--border)',
        }}>
          {mod.id}
        </div>
      </motion.button>

      <div style={{
        background: 'var(--surface)',
        padding: '6px 12px',
        borderRadius: 12,
        boxShadow: 'var(--clay-sm)',
        fontSize: 12,
        fontWeight: 700,
        color: status === 'locked' ? 'var(--text-subtle)' : 'var(--text)',
        whiteSpace: 'nowrap',
        border: '1px solid var(--border-soft)',
      }}>
        {mod.title}
      </div>

      {status === 'done' && score > 0 && (
        <div style={{
          fontSize: 11,
          fontWeight: 800,
          color: 'var(--green-deep)',
          background: 'var(--green-soft)',
          padding: '2px 8px',
          borderRadius: 999,
        }}>
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

  const getStatus = (moduleId: number): ModuleStatus => {
    if (completedIds.has(moduleId)) return 'done';
    if (moduleId === 1) return 'current';
    if (completedIds.has(moduleId - 1)) return 'current';
    return 'locked';
  };

  const getScore = (moduleId: number) =>
    progressData.find((p) => p.moduleId === moduleId)?.score ?? 0;

  if (loading) {
    return (
      <main style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg)',
      }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Waechter mood="thinking" size={80}/>
          </motion.div>
          <p style={{ color: 'var(--text-muted)', marginTop: 14, fontSize: 14, fontWeight: 500 }}>
            {t.schulung.loadingText}
          </p>
        </div>
      </main>
    );
  }

  const pathHeight = PATH_POSITIONS[PATH_POSITIONS.length - 1].y + 120;
  const maxW = isDesktop ? 860 : 480;

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      paddingBottom: 40,
    }}>
      {/* ─── Header ─── */}
      <div style={{
        padding: isDesktop ? '28px 40px 0' : '20px 20px 0',
        maxWidth: maxW,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: 'var(--text-muted)',
              letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: 3,
            }}>
              {t.schulung.orgLabel}
            </div>
            <h1 style={{
              fontSize: isDesktop ? 26 : 22,
              fontWeight: 800,
              color: 'var(--text)',
              margin: 0,
              letterSpacing: '-0.4px',
            }}>
              {t.schulung.welcome} {userName}
            </h1>
          </div>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'var(--streak-soft)',
              padding: '8px 12px', borderRadius: 14,
              boxShadow: 'var(--clay-sm)',
              border: '1px solid var(--border-soft)',
            }}>
              <Flame size={17} color="var(--streak)" fill="var(--streak)"/>
              <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--streak)' }}>{streak}</span>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'var(--xp-soft)',
              padding: '8px 12px', borderRadius: 14,
              boxShadow: 'var(--clay-sm)',
              border: '1px solid var(--border-soft)',
            }}>
              <Zap size={17} color="var(--xp)" fill="var(--xp)"/>
              <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--xp)' }}>{totalScore}</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18, marginBottom: 22 }}>
          <ProgressBar completed={completedCount} total={5}/>
        </div>

        {completedCount === 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: 'var(--green-soft)',
              border: '2px solid var(--green)',
              borderRadius: 20,
              padding: '18px 22px',
              marginBottom: 22,
              cursor: 'pointer',
              boxShadow: 'var(--glow-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
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
            <div style={{
              background: 'var(--green)',
              color: '#fff',
              borderRadius: 12,
              padding: '8px 14px',
              fontSize: 13,
              fontWeight: 700,
              flexShrink: 0,
            }}>
              {t.schulung.allDoneBtn}
            </div>
          </motion.div>
        )}
      </div>

      {/* ─── Einführungsvideo ─── */}
      <div style={{
        padding: isDesktop ? '0 40px' : '0 20px',
        maxWidth: maxW,
        margin: '0 auto 22px',
      }}>
        <div style={{
          background: 'var(--surface)',
          borderRadius: 20,
          padding: '14px 16px 16px',
          boxShadow: 'var(--clay-sm)',
          border: '1px solid var(--border-soft)',
        }}>
          <div style={{
            fontSize: 10, fontWeight: 800, letterSpacing: '0.5px',
            textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8,
          }}>
            {t.schulung.videoLabel}
          </div>
          <VideoEmbed
            videoId="bGHo6ahlXTI"
            title="Einführungsvideo: Datenschutz-Schulung MS Direct Group"
          />
        </div>
      </div>

      {/* ─── Wächter intro ─── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: isDesktop ? '0 40px' : '0 20px',
        maxWidth: maxW, margin: '0 auto 18px',
      }}>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ flexShrink: 0 }}
        >
          <Waechter
            mood={completedCount === 5 ? 'celebrate' : completedCount > 0 ? 'happy' : 'wave'}
            size={52}
          />
        </motion.div>
        <div style={{
          background: 'var(--surface)',
          borderRadius: '16px 16px 16px 4px',
          padding: '10px 14px',
          boxShadow: 'var(--clay-sm)',
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--text-muted)',
          border: '1px solid var(--border-soft)',
          maxWidth: isDesktop ? 400 : 260,
          lineHeight: 1.5,
        }}>
          {completedCount === 0
            ? t.schulung.tipStart
            : completedCount === 5
            ? t.schulung.tipDone
            : t.schulung.tipProgress(completedCount)
          }
        </div>
      </div>

      {/* ─── Snake Path ─── */}
      <div
        ref={pathRef}
        style={{
          position: 'relative',
          maxWidth: maxW,
          margin: '0 auto',
          padding: isDesktop ? '0 60px' : '0 20px',
          height: pathHeight,
        }}
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
              containerW={containerW - (isDesktop ? 120 : 40)}
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

      <p style={{
        textAlign: 'center',
        fontSize: 11,
        color: 'var(--text-subtle)',
        marginTop: 24,
        paddingBottom: 8,
      }}>
        {t.schulung.footer}
      </p>
    </main>
  );
}
