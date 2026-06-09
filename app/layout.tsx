import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LocaleProvider } from '@/lib/locale-context';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Datenschutz-Schulung | MS Direct Group',
  description: 'Interaktive Datenschutz-Schulung für Mitarbeitende der MS Direct Group — Direct2Future',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark h-full">
      <body className={`${plusJakarta.variable} min-h-full flex flex-col`}
            style={{ fontFamily: 'var(--font-plus-jakarta, "Plus Jakarta Sans"), system-ui, sans-serif' }}>
        <LocaleProvider>
          {children}
          <LanguageSwitcher />
        </LocaleProvider>
      </body>
    </html>
  );
}
