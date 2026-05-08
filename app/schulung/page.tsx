'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { modules } from '@/data/modules';
import ProgressBar from '@/components/ProgressBar';
import ModuleCard from '@/components/ModuleCard';

type ProgressEntry = {
  moduleId: number;
  completed: boolean;
  score: number;
};

export default function SchulungPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [progressData, setProgressData] = useState<ProgressEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const uid = localStorage.getItem('userId');
    const uname = localStorage.getItem('userName');
    if (!uid) {
      router.replace('/');
      return;
    }
    setUserId(uid);
    setUserName(uname || '');

    fetch(`/api/progress?userId=${uid}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.progress) setProgressData(data.progress);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [router]);

  const completedIds = new Set(progressData.filter((p) => p.completed).map((p) => p.moduleId));
  const completedCount = completedIds.size;

  const getStatus = (moduleId: number): 'completed' | 'available' | 'locked' => {
    if (completedIds.has(moduleId)) return 'completed';
    if (moduleId === 1) return 'available';
    if (completedIds.has(moduleId - 1)) return 'available';
    return 'locked';
  };

  const getScore = (moduleId: number) => {
    return progressData.find((p) => p.moduleId === moduleId)?.score ?? 0;
  };

  const totalScore = progressData.reduce((sum, p) => sum + (p.score || 0), 0);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0f1117' }}>
        <div className="text-center">
          <div className="text-4xl mb-4 animate-pulse">🛡️</div>
          <p style={{ color: '#94a3b8' }}>Fortschritt wird geladen…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-8 max-w-2xl mx-auto" style={{ backgroundColor: '#0f1117' }}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold" style={{ color: '#f1f5f9' }}>
            Hallo {userName} 👋
          </h1>
          {totalScore > 0 && (
            <div
              className="px-3 py-1.5 rounded-full text-sm font-bold"
              style={{ backgroundColor: 'rgba(59,130,246,0.15)', color: '#3b82f6' }}
            >
              {totalScore} Punkte
            </div>
          )}
        </div>
        <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>
          Deine Datenschutz-Schulung — MS Direct Group
        </p>
        <ProgressBar completed={completedCount} total={5} />
      </div>

      {/* All completed banner */}
      {completedCount === 5 && (
        <div
          className="rounded-2xl p-5 mb-6 border-2 text-center cursor-pointer"
          style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: '#22c55e' }}
          onClick={() => router.push('/abschluss')}
        >
          <p className="text-2xl mb-1">🎉</p>
          <p className="font-bold" style={{ color: '#22c55e' }}>
            Alle Module abgeschlossen!
          </p>
          <p className="text-sm mt-1" style={{ color: '#94a3b8' }}>
            Klicke hier um dein Zertifikat abzuholen →
          </p>
        </div>
      )}

      {/* Module Cards */}
      <div className="flex flex-col gap-4">
        {modules.map((mod) => {
          const status = getStatus(mod.id);
          const score = getScore(mod.id);
          return (
            <ModuleCard
              key={mod.id}
              module={mod}
              status={status}
              score={score}
              onClick={() => router.push(`/modul/${mod.id}`)}
            />
          );
        })}
      </div>

      <p className="mt-8 text-xs text-center" style={{ color: '#94a3b8' }}>
        © 2025 MS Direct Group · Direct2Future
      </p>
    </main>
  );
}
