'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Bitte gib mindestens 2 Zeichen ein.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Fehler beim Anlegen.');
      }

      const { userId, name: savedName } = await res.json();
      localStorage.setItem('userId', userId);
      localStorage.setItem('userName', savedName);
      router.push('/schulung');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unbekannter Fehler.');
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ backgroundColor: '#0f1117' }}
    >
      <div
        className="w-full max-w-md rounded-2xl border-2 p-8 flex flex-col gap-6"
        style={{ backgroundColor: '#1a1d2e', borderColor: '#2a2d3e' }}
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🛡️</div>
          <h1 className="text-3xl font-bold mb-1" style={{ color: '#f1f5f9' }}>
            Datenschutz-Schulung
          </h1>
          <p className="text-sm font-semibold" style={{ color: '#3b82f6' }}>
            MS Direct Group · Direct2Future
          </p>
        </div>

        <p className="text-center leading-relaxed" style={{ color: '#94a3b8' }}>
          Willkommen zur interaktiven Datenschutz-Schulung. Gib deinen Namen ein und starte — du
          absolvierst 5 Module zum Schweizer DSG und sammelst dabei Punkte.
        </p>

        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { icon: '🎯', label: '5 Module' },
            { icon: '⚡', label: '~20 Min.' },
            { icon: '🏆', label: 'Zertifikat' },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-xl py-3 flex flex-col items-center gap-1"
              style={{ backgroundColor: '#0f1117' }}
            >
              <span className="text-2xl">{f.icon}</span>
              <span className="text-xs font-semibold" style={{ color: '#94a3b8' }}>
                {f.label}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleStart} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#94a3b8' }}>
              Dein Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="z.B. Anna Müller"
              autoFocus
              maxLength={80}
              className="w-full rounded-xl px-4 py-3 text-base outline-none transition-all duration-200"
              style={{
                backgroundColor: '#0f1117',
                color: '#f1f5f9',
                border: '2px solid #2a2d3e',
                minHeight: '52px',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
              onBlur={(e) => (e.target.style.borderColor = '#2a2d3e')}
            />
            {error && (
              <p className="mt-2 text-sm" style={{ color: '#ef4444' }}>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || name.trim().length < 2}
            className="w-full py-4 rounded-xl font-bold text-base transition-all duration-200 active:scale-[0.98]"
            style={{
              backgroundColor: loading || name.trim().length < 2 ? '#2a2d3e' : '#3b82f6',
              color: loading || name.trim().length < 2 ? '#94a3b8' : '#ffffff',
              minHeight: '56px',
              cursor: loading || name.trim().length < 2 ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Wird gestartet…' : 'Schulung starten →'}
          </button>
        </form>
      </div>

      <p className="mt-6 text-xs text-center" style={{ color: '#94a3b8' }}>
        © 2025 MS Direct Group · Direct2Future · Datenschutz-Schulung
      </p>
    </main>
  );
}
