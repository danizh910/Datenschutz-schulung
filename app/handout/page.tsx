'use client';

import { useEffect, useState } from 'react';
import { Printer, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getModules } from '@/data/modules';
import { useLocale } from '@/lib/locale-context';

export default function HandoutPage() {
  const { locale } = useLocale();
  const router = useRouter();
  const modules = getModules(locale);
  const [today, setToday] = useState('');

  useEffect(() => {
    const dateLocale =
      locale === 'en' ? 'en-GB'
      : locale === 'fr' ? 'fr-CH'
      : 'de-CH';
    setToday(new Date().toLocaleDateString(dateLocale, {
      day: '2-digit', month: 'long', year: 'numeric',
    }));
  }, [locale]);

  return (
    <>
      {/* ─── Print controls (hidden when printing) ─── */}
      <div className="no-print" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: '#1D3461', padding: '12px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
      }}>
        <button
          onClick={() => router.back()}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.12)', color: '#fff',
            border: 'none', borderRadius: 10, padding: '8px 14px',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}
        >
          <ArrowLeft size={15} strokeWidth={2.5}/>
          Zurück
        </button>
        <button
          onClick={() => window.print()}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#29B3E8', color: '#fff',
            border: 'none', borderRadius: 10, padding: '10px 20px',
            fontSize: 14, fontWeight: 700, cursor: 'pointer',
          }}
        >
          <Printer size={16} strokeWidth={2.5}/>
          Als PDF drucken / speichern
        </button>
      </div>

      {/* ─── Handout content ─── */}
      <div className="handout-page" style={{
        fontFamily: "'Arial','Helvetica Neue',Helvetica,sans-serif",
        background: '#fff',
        color: '#1A1414',
        maxWidth: 760,
        margin: '0 auto',
        padding: '80px 48px 60px',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          borderBottom: '3px solid #1D3461', paddingBottom: 20, marginBottom: 28,
        }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ms-direct-logo.svg"
              alt="MS Direct Group"
              width={180}
              style={{ display: 'block', height: 'auto', marginBottom: 14 }}
            />
            <h1 style={{
              fontSize: 22, fontWeight: 800, color: '#1D3461',
              margin: '0 0 4px', letterSpacing: '-0.4px',
            }}>
              Datenschutz-Schulung
            </h1>
            <p style={{ fontSize: 13, color: '#6B6256', margin: 0 }}>
              Kurzreferenz · Direct2Future
            </p>
          </div>
          <div style={{ textAlign: 'right', fontSize: 11, color: '#6B6256', lineHeight: 1.7 }}>
            <div style={{ fontWeight: 700, color: '#1D3461', fontSize: 12 }}>MS Direct Group</div>
            <div>Schweizer Datenschutzgesetz (DSG)</div>
            <div>In Kraft seit 1. September 2023</div>
            <div style={{ marginTop: 4 }}>{today}</div>
          </div>
        </div>

        {/* Intro box */}
        <div style={{
          background: '#E8EDF5', borderLeft: '4px solid #1D3461',
          borderRadius: '0 8px 8px 0', padding: '12px 16px', marginBottom: 28,
        }}>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#1D3461', fontWeight: 500 }}>
            Diese Kurzreferenz fasst die wichtigsten Inhalte der Datenschutz-Schulung zusammen.
            Bitte lese sie ergänzend zum interaktiven Training – nicht als Ersatz.
            Bei Fragen wende dich an den Datenschutzbeauftragten der MS Direct Group:
            <strong> Myrio Kluser · myrio.kluser@qmart.ch</strong>
          </p>
        </div>

        {/* Modules */}
        {modules.filter(m => m.learnContent.length > 0).map((mod, modIdx) => (
          <div key={mod.id} style={{ marginBottom: 28, pageBreakInside: 'avoid' }}>
            {/* Module title */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: '#1D3461', color: '#fff',
              borderRadius: 8, padding: '10px 16px', marginBottom: 14,
            }}>
              <span style={{ fontSize: 22, lineHeight: 1 }}>{mod.emoji}</span>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, opacity: 0.7, letterSpacing: '0.6px', textTransform: 'uppercase' }}>
                  Modul {mod.id}
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.2px' }}>
                  {mod.title}
                </div>
              </div>
            </div>

            {/* Learn content */}
            <div style={{ paddingLeft: 4 }}>
              {mod.learnContent.map((item, idx) => (
                <div key={idx} style={{ marginBottom: 12 }}>
                  <div style={{
                    fontSize: 12, fontWeight: 800, color: '#1D3461',
                    marginBottom: 4, letterSpacing: '-0.1px',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{
                      display: 'inline-block', width: 5, height: 5,
                      borderRadius: '50%', background: '#29B3E8', flexShrink: 0,
                    }}/>
                    {item.heading}
                  </div>
                  <p style={{
                    margin: '0 0 0 11px', fontSize: 12, lineHeight: 1.6,
                    color: '#4A4A4A',
                  }}>
                    {item.text}
                  </p>
                  {item.infoBox && (
                    <div style={{
                      margin: '6px 0 0 11px',
                      padding: '8px 12px',
                      borderRadius: 6,
                      background: item.infoBox.variant === 'warnung' ? '#FEF3F4' : '#E8EDF5',
                      borderLeft: `3px solid ${item.infoBox.variant === 'warnung' ? '#CC2E30' : '#1D3461'}`,
                      fontSize: 11, lineHeight: 1.55,
                      color: item.infoBox.variant === 'warnung' ? '#7A1014' : '#1D3461',
                    }}>
                      {item.infoBox.title && (
                        <span style={{ fontWeight: 800, marginRight: 4 }}>
                          {item.infoBox.title}:
                        </span>
                      )}
                      {item.infoBox.text}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {modIdx < modules.filter(m => m.learnContent.length > 0).length - 1 && (
              <div style={{ height: 1, background: '#E0E0E0', marginTop: 4 }}/>
            )}
          </div>
        ))}

        {/* Quick reference box */}
        <div style={{
          marginTop: 32,
          border: '2px solid #1D3461',
          borderRadius: 10,
          overflow: 'hidden',
          pageBreakInside: 'avoid',
        }}>
          <div style={{
            background: '#1D3461', color: '#fff',
            padding: '10px 16px', fontSize: 13, fontWeight: 800,
          }}>
            Schnellreferenz: Meldewege &amp; Kontakte
          </div>
          <div style={{ padding: '14px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
            {[
              { label: 'Datenschutzbeauftragter', value: 'Myrio Kluser · myrio.kluser@qmart.ch' },
              { label: 'Meldepflicht intern', value: 'Sofort an DSB oder vorgesetzte Person' },
              { label: 'Frist für EDÖB-Meldung', value: '72 Stunden nach Entdeckung' },
              { label: 'DSG in Kraft seit', value: '1. September 2023' },
              { label: 'Grundprinzipien', value: 'Verhältnismässigkeit, Zweckbindung, Transparenz' },
              { label: 'Zertifizierung', value: 'GoodPrivacy (SQS)' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#6B6256', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                  {label}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#1A1414', marginTop: 2 }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 32, paddingTop: 16,
          borderTop: '1px solid #E0E0E0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ fontSize: 10, color: '#A39A8C' }}>
            © 2025 MS Direct Group · Direct2Future · Datenschutz-Schulung
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ms-direct-logo.svg"
            alt="MS Direct Group"
            width={100}
            style={{ height: 'auto', opacity: 0.5 }}
          />
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          .handout-page {
            padding: 20px 32px !important;
            max-width: 100% !important;
          }
          body { background: #fff !important; }
          @page { margin: 12mm 10mm; }
        }
      `}</style>
    </>
  );
}
