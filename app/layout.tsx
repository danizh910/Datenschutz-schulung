import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#0f1117', color: '#f1f5f9' }}>
        {children}
      </body>
    </html>
  );
}
