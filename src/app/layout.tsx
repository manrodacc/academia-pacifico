import React from 'react';
import './globals.css';
import { Toaster } from 'sonner';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Academia Pacífico — Plataforma Académica',
  description: 'Sistema integral de gestión académica pre-universitaria.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
