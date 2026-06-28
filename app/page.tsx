'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Award, ChevronDown } from 'lucide-react';
import Surface, { ClayButton } from '@/components/Surface';
import Waechter from '@/components/Waechter';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { useTranslation } from '@/lib/i18n';
import { getModules } from '@/data/modules';
import { useLocale } from '@/lib/locale-context';

export default function LandingPage() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focused, setFocused] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const t = useTranslation();
  const { locale } = useLocale();
  const modules = getModules(locale);

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError(t.landing.nameError);
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
        throw new Error(data.error || t.landing.nameError);
      }
      const { userId, name: savedName } = await res.json();
      localStorage.setItem('userId', userId);
      localStorage.setItem('userName', savedName);
      router.push('/schulung');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : t.landing.nameError);
      setLoading(false);
    }
  };

  const features = [
    { icon: BookOpen, label: t.landing.features.modules.label(modules.length), desc: t.landing.features.modules.desc, color: 'var(--red)',   bg: 'var(--red-soft)'  },
    { icon: Clock,    label: t.landing.features.time.label,    desc: t.landing.features.time.desc,    color: 'var(--blue)',  bg: 'var(--blue-soft)' },
    { icon: Award,    label: t.landing.features.cert.label,    desc: t.landing.features.cert.desc,    color: 'var(--green)', bg: 'var(--green-soft)'},
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

        {/* MS Direct Logo */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ textAlign: 'center', marginBottom: 24 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ms-direct-logo.png"
            alt="MS Direct Group – Every order a fulfilled promise"
            width={220}
            style={{ display: 'inline-block', maxWidth: '100%', height: 'auto' }}
          />
        </motion.div>

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
            {t.landing.title}
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
            {t.landing.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          style={{ marginBottom: 12 }}
        >
          <Surface radius={24} padding={isDesktop ? 28 : 22}>
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

            <form onSubmit={handleStart} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label
                  htmlFor="userName"
                  style={{
                    display: 'block',
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    marginBottom: 7,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  {t.landing.labelName}
                </label>
                <input
                  id="userName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.landing.namePlaceholder}
                  autoFocus
                  maxLength={80}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 14,
                    border: `2px solid ${focused ? 'var(--navy)' : 'var(--border)'}`,
                    background: 'var(--surface-soft)',
                    color: 'var(--text)',
                    fontSize: 15,
                    fontFamily: 'inherit',
                    outline: 'none',
                    minHeight: 52,
                    boxShadow: focused ? 'var(--glow-navy)' : 'var(--clay-inset)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                />
                {error && (
                  <p role="alert" style={{ marginTop: 6, fontSize: 12, color: 'var(--red)', fontWeight: 600 }}>
                    {error}
                  </p>
                )}
              </div>

              <ClayButton
                type="submit"
                fullWidth
                disabled={loading || name.trim().length < 2}
              >
                {loading ? t.landing.btnStarting : t.landing.btnStart}
              </ClayButton>

              {/* Privacy toggle */}
              <div>
                <button
                  type="button"
                  onClick={() => setPrivacyOpen((o) => !o)}
                  aria-expanded={privacyOpen}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    background: 'none', border: 'none', padding: 0,
                    fontSize: 11, fontWeight: 600, color: 'var(--text-muted)',
                    cursor: 'pointer', width: '100%', justifyContent: 'center',
                  }}
                >
                  {t.landing.privacyToggle}
                  <ChevronDown
                    size={13}
                    strokeWidth={2.5}
                    style={{ transition: 'transform 0.2s', transform: privacyOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <AnimatePresence>
                  {privacyOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        marginTop: 8, padding: '10px 12px',
                        background: 'var(--surface-soft)',
                        borderRadius: 10,
                        fontSize: 11, color: 'var(--text-muted)',
                        lineHeight: 1.6, margin: '8px 0 0',
                        border: '1px solid var(--border-soft)',
                      }}>
                        {t.landing.privacyNotice}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p style={{
                textAlign: 'center',
                fontSize: 11,
                color: 'var(--text-subtle)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                {t.landing.disclaimer}
              </p>
            </form>
          </Surface>
        </motion.div>

        <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-subtle)', marginTop: 4 }}>
          {t.landing.footer}
        </p>
      </div>
    </main>
  );
}
