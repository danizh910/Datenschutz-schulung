'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award } from 'lucide-react';
import Surface, { ClayButton } from '@/components/Surface';
import Waechter from '@/components/Waechter';
import { useIsDesktop } from '@/hooks/useIsDesktop';

export default function LandingPage() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const isDesktop = useIsDesktop();

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Bitte mindestens 2 Zeichen eingeben.');
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

  const features = [
    { icon: BookOpen, label: '5 Module',    desc: 'DSG Grundlagen',  color: 'var(--red)',   bg: 'var(--red-soft)'  },
    { icon: Clock,    label: '~20 Min.',    desc: 'Lernaufwand',     color: 'var(--blue)',  bg: 'var(--blue-soft)' },
    { icon: Award,    label: 'Zertifikat', desc: 'Zum Download',    color: 'var(--green)', bg: 'var(--green-soft)'},
  ];

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isDesktop ? '48px 32px' : '24px 20px',
    }}>
      <div style={{ width: '100%', maxWidth: isDesktop ? 560 : 440 }}>

        {/* Organisation badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ textAlign: 'center', marginBottom: 24 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.8px',
            textTransform: 'uppercase', color: 'var(--text-muted)',
            padding: '5px 12px', borderRadius: 999,
            background: 'var(--surface-soft)',
            border: '1px solid var(--border)',
          }}>
            MS Direct Group · Direct2Future
          </span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: 28 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'inline-block', marginBottom: 18 }}
          >
            <Waechter mood="wave" size={isDesktop ? 108 : 88}/>
          </motion.div>
          <h1 style={{
            fontSize: isDesktop ? 36 : 28,
            fontWeight: 800,
            letterSpacing: '-0.8px',
            lineHeight: 1.1,
            margin: '0 0 10px',
            color: 'var(--text)',
          }}>
            Datenschutz-Schulung
          </h1>
          <p style={{
            fontSize: 14,
            color: 'var(--text-muted)',
            lineHeight: 1.55,
            margin: 0,
            maxWidth: 380,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Interaktive Zertifizierungsschulung zum Schweizer Datenschutzgesetz (DSG)
            für Mitarbeitende der MS Direct Group.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          style={{ marginBottom: 12 }}
        >
          <Surface radius={24} padding={isDesktop ? 28 : 22}>

            {/* Feature tiles */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 10,
              marginBottom: 24,
            }}>
              {features.map(({ icon: Icon, label, desc, color, bg }) => (
                <div key={label} style={{
                  background: bg,
                  borderRadius: 16,
                  padding: isDesktop ? '16px 10px' : '12px 8px',
                  textAlign: 'center',
                  boxShadow: 'var(--clay-sm)',
                  border: '1px solid var(--border-soft)',
                }}>
                  <Icon size={22} color={color} strokeWidth={2} style={{ display: 'block', margin: '0 auto 6px' }}/>
                  <div style={{ fontSize: 13, fontWeight: 700, color, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--text-subtle)' }}>{desc}</div>
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: 'var(--border-soft)', marginBottom: 22 }}/>

            {/* Form */}
            <form onSubmit={handleStart} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  marginBottom: 7,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  Dein Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="z.B. Anna Müller"
                  autoFocus
                  maxLength={80}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 14,
                    border: `2px solid ${focused ? 'var(--red)' : 'var(--border)'}`,
                    background: 'var(--surface-soft)',
                    color: 'var(--text)',
                    fontSize: 15,
                    fontFamily: 'inherit',
                    outline: 'none',
                    minHeight: 52,
                    boxShadow: focused ? 'var(--glow-red)' : 'var(--clay-inset)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                />
                {error && (
                  <p style={{ marginTop: 6, fontSize: 12, color: 'var(--red)', fontWeight: 600 }}>
                    {error}
                  </p>
                )}
              </div>

              <ClayButton
                type="submit"
                fullWidth
                disabled={loading || name.trim().length < 2}
              >
                {loading ? 'Wird gestartet…' : 'Schulung starten'}
              </ClayButton>

              <p style={{
                textAlign: 'center',
                fontSize: 11,
                color: 'var(--text-subtle)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                Deine Angaben werden ausschliesslich für die Schulungserfassung verwendet.
              </p>
            </form>
          </Surface>
        </motion.div>

        <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-subtle)', marginTop: 4 }}>
          © 2025 MS Direct Group · Direct2Future · Datenschutz-Schulung
        </p>
      </div>
    </main>
  );
}
