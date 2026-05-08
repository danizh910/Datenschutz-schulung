'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type ProgressEntry = {
  moduleId: number;
  completed: boolean;
  score: number;
};

export default function AbschlussPage() {
  const [userName, setUserName] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const uid = localStorage.getItem('userId');
    const uname = localStorage.getItem('userName');

    if (!uid) {
      router.replace('/');
      return;
    }

    setUserName(uname || '');

    fetch(`/api/progress?userId=${uid}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.progress) {
          const completed = (data.progress as ProgressEntry[]).filter((p) => p.completed);
          if (completed.length < 5) {
            router.replace('/schulung');
            return;
          }
          const sum = completed.reduce((acc, p) => acc + (p.score || 0), 0);
          setTotalScore(sum);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0f1117' }}>
        <div className="text-4xl animate-pulse">🏆</div>
      </main>
    );
  }

  const today = new Date().toLocaleDateString('de-CH', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ backgroundColor: '#0f1117' }}
    >
      <div
        className="w-full max-w-md rounded-2xl border-2 p-8 flex flex-col items-center gap-6 text-center"
        style={{ backgroundColor: '#1a1d2e', borderColor: '#22c55e' }}
      >
        {/* Badge */}
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center border-4"
          style={{
            background: 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(59,130,246,0.3))',
            borderColor: '#22c55e',
          }}
        >
          <span className="text-5xl">🏆</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: '#f1f5f9' }}>
            Datenschutz-Profi
          </h1>
          <p className="text-sm" style={{ color: '#22c55e' }}>
            Zertifikat erhalten
          </p>
        </div>

        {/* Certificate */}
        <div
          className="w-full rounded-xl border p-5 flex flex-col gap-3"
          style={{ backgroundColor: '#0f1117', borderColor: '#2a2d3e' }}
        >
          <p className="text-xs uppercase tracking-widest font-bold" style={{ color: '#94a3b8' }}>
            Datenschutz-Schulung
          </p>
          <p className="text-xl font-bold" style={{ color: '#f1f5f9' }}>
            {userName}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
            hat die Datenschutz-Schulung der
          </p>
          <p className="font-bold" style={{ color: '#3b82f6' }}>
            MS Direct Group
          </p>
          <p className="text-sm" style={{ color: '#94a3b8' }}>
            erfolgreich abgeschlossen.
          </p>
          <div
            className="mt-2 pt-3 border-t flex items-center justify-between"
            style={{ borderColor: '#2a2d3e' }}
          >
            <span className="text-xs" style={{ color: '#94a3b8' }}>
              {today}
            </span>
            <div
              className="px-3 py-1 rounded-full text-sm font-bold"
              style={{ backgroundColor: 'rgba(59,130,246,0.2)', color: '#3b82f6' }}
            >
              {totalScore} / 500 Punkte
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
          Datenschutz beginnt bei dir! Du hast alle 5 Module zum Schweizer DSG erfolgreich absolviert.
          Dein Engagement schützt die Daten unserer Kunden und Mitarbeitenden.
        </p>

        {/* Stars */}
        <div className="flex gap-2 text-2xl">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              style={{ color: i < Math.round(totalScore / 100) ? '#f59e0b' : '#2a2d3e' }}
            >
              ★
            </span>
          ))}
        </div>

        <button
          onClick={() => router.push('/schulung')}
          className="w-full py-4 rounded-xl font-bold transition-all duration-200 active:scale-[0.98]"
          style={{ backgroundColor: '#3b82f6', color: '#ffffff', minHeight: '56px' }}
        >
          Zur Übersicht zurück
        </button>
      </div>

      <p className="mt-6 text-xs" style={{ color: '#94a3b8' }}>
        © 2025 MS Direct Group · Direct2Future
      </p>
    </main>
  );
}
