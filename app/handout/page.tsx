'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLocale } from '@/lib/locale-context';
import { useTranslation } from '@/lib/i18n';

export default function HandoutPage() {
  const { locale } = useLocale();
  const router = useRouter();
  const t = useTranslation();
  const handoutRef = useRef<HTMLDivElement>(null);
  const [today, setToday] = useState('');
  const [pdfLoading, setPdfLoading] = useState(false);

  useEffect(() => {
    const dateLocale =
      locale === 'en' ? 'en-GB'
      : locale === 'fr' ? 'fr-CH'
      : 'de-CH';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(new Date().toLocaleDateString(dateLocale, {
      day: '2-digit', month: 'long', year: 'numeric',
    }));
  }, [locale]);

  const handleDownloadPdf = async () => {
    if (!handoutRef.current) return;
    setPdfLoading(true);
    try {
      const { generateHandoutPdf } = await import('@/lib/pdf/handout');
      await generateHandoutPdf(handoutRef.current, 'Datenschutz-Handout.pdf');
    } finally {
      setPdfLoading(false);
    }
  };

  const { handout: h } = t;

  return (
    <>
      {/* ─── Fixed nav bar (hidden in PDF capture) ─── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: '#1D3461', padding: '12px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
      }}>
        <button
          onClick={() => router.push('/schulung')}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.12)', color: '#fff',
            border: 'none', borderRadius: 10, padding: '8px 14px',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}
        >
          <ArrowLeft size={15} strokeWidth={2.5}/>
          {h.backBtn}
        </button>
        <button
          onClick={handleDownloadPdf}
          disabled={pdfLoading}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#29B3E8', color: '#fff',
            border: 'none', borderRadius: 10, padding: '10px 20px',
            fontSize: 14, fontWeight: 700, cursor: pdfLoading ? 'default' : 'pointer',
            opacity: pdfLoading ? 0.7 : 1,
          }}
        >
          <Download size={16} strokeWidth={2.5}/>
          {pdfLoading ? '…' : h.printBtn}
        </button>
      </div>

      {/* ─── Handout content (captured by html2canvas) ─── */}
      <div
        ref={handoutRef}
        style={{
          fontFamily: "'Arial','Helvetica Neue',Helvetica,sans-serif",
          background: '#fff',
          color: '#1A1414',
          maxWidth: 760,
          margin: '0 auto',
          padding: '80px 48px 60px',
        }}
      >

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          borderBottom: '3px solid #1D3461', paddingBottom: 20, marginBottom: 24,
        }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ms-direct-logo.png"
              alt="MS Direct Group"
              width={180}
              style={{ display: 'block', height: 'auto', marginBottom: 14 }}
            />
            <h1 style={{ fontSize: 20, fontWeight: 800, color: '#1D3461', margin: '0 0 4px', letterSpacing: '-0.4px' }}>
              {h.pageTitle}
            </h1>
            <p style={{ fontSize: 12, color: '#6B6256', margin: 0 }}>{h.subtitle}</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: 11, color: '#6B6256', lineHeight: 1.7, flexShrink: 0 }}>
            <div style={{ fontWeight: 700, color: '#1D3461', fontSize: 12 }}>MS Direct Group</div>
            <div>{h.version}</div>
            <div style={{ marginTop: 4 }}>{today}</div>
          </div>
        </div>

        {/* Complement note */}
        <div style={{
          background: '#E8EDF5', borderLeft: '4px solid #1D3461',
          borderRadius: '0 8px 8px 0', padding: '10px 16px', marginBottom: 24,
          fontSize: 12, color: '#1D3461', fontWeight: 500, lineHeight: 1.55,
        }}>
          {h.complementNote}
        </div>

        {/* ─── Two-column upper section ─── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>

          {/* Principles */}
          <div style={{ pageBreakInside: 'avoid' }}>
            <SectionTitle>{h.principlesTitle}</SectionTitle>
            {h.principles.map((p, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#1D3461', marginBottom: 2 }}>
                  <Bullet/> {p.heading}
                </div>
                <p style={{ margin: '0 0 0 11px', fontSize: 11, lineHeight: 1.55, color: '#4A4A4A' }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          {/* Rights */}
          <div style={{ pageBreakInside: 'avoid' }}>
            <SectionTitle>{h.rightsTitle}</SectionTitle>
            {h.rights.map((r, i) => (
              <div key={i} style={{ marginBottom: 8, fontSize: 11, lineHeight: 1.55, color: '#4A4A4A', paddingLeft: 11 }}>
                <Bullet inline/> {r}
              </div>
            ))}
          </div>
        </div>

        {/* ─── Dos / Don'ts ─── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          <DosDonts title={h.dosTitle} items={h.dos} variant="dos"/>
          <DosDonts title={h.dontsTitle} items={h.donts} variant="donts"/>
        </div>

        {/* ─── Reporting ─── */}
        <div style={{ marginBottom: 20, pageBreakInside: 'avoid' }}>
          <SectionTitle>{h.reportingTitle}</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <ReportingRow>{h.reportingInternal}</ReportingRow>
            <ReportingRow>{h.reportingExternal}</ReportingRow>
            <ReportingRow highlight>{h.reportingContact}</ReportingRow>
          </div>
        </div>

        {/* ─── Quick ref table ─── */}
        <div style={{ border: '2px solid #1D3461', borderRadius: 10, overflow: 'hidden', pageBreakInside: 'avoid' }}>
          <div style={{ background: '#1D3461', color: '#fff', padding: '10px 16px', fontSize: 13, fontWeight: 800 }}>
            {h.quickRefTitle}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 16px', gap: '8px 24px' }}>
            {h.quickRef.map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#6B6256', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#1A1414', marginTop: 2 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 28, paddingTop: 14,
          borderTop: '1px solid #E0E0E0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ fontSize: 10, color: '#A39A8C' }}>
            © 2025 MS Direct Group · Direct2Future · {h.version}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ms-direct-logo.png" alt="MS Direct Group" width={100} style={{ height: 'auto', opacity: 0.5 }}/>
        </div>
      </div>
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 12, fontWeight: 800, color: '#1D3461',
      textTransform: 'uppercase', letterSpacing: '0.5px',
      borderBottom: '2px solid #1D3461', paddingBottom: 4, marginBottom: 10,
    }}>
      {children}
    </div>
  );
}

function Bullet({ inline }: { inline?: boolean }) {
  return (
    <span style={{
      display: inline ? 'inline-block' : 'inline-block',
      width: 5, height: 5, borderRadius: '50%',
      background: '#29B3E8', flexShrink: 0,
      verticalAlign: 'middle', marginRight: 4,
    }}/>
  );
}

function DosDonts({ title, items, variant }: { title: string; items: readonly string[]; variant: 'dos' | 'donts' }) {
  const isDos = variant === 'dos';
  return (
    <div style={{ pageBreakInside: 'avoid' }}>
      <div style={{
        fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px',
        borderBottom: `2px solid ${isDos ? '#15B886' : '#E11D2E'}`,
        color: isDos ? '#0A5F46' : '#B0121F',
        paddingBottom: 4, marginBottom: 10,
      }}>
        {title}
      </div>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 7 }}>
          <span style={{
            flexShrink: 0, width: 16, height: 16, borderRadius: '50%',
            background: isDos ? '#D6F5E8' : '#FCE4E6',
            color: isDos ? '#0A5F46' : '#B0121F',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 10, fontWeight: 900, lineHeight: 1,
            marginTop: 1,
          }}>
            {isDos ? '✓' : '✕'}
          </span>
          <span style={{ fontSize: 11, lineHeight: 1.55, color: '#4A4A4A' }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ReportingRow({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div style={{
      fontSize: 11, lineHeight: 1.6, padding: '6px 10px',
      background: highlight ? '#FEF3F4' : '#F4F7FB',
      borderLeft: `3px solid ${highlight ? '#E11D2E' : '#1D3461'}`,
      borderRadius: '0 6px 6px 0',
      color: highlight ? '#7A1014' : '#4A4A4A',
    }}>
      {children}
    </div>
  );
}
