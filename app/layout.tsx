import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Jeffrey Ting',
  description:
    "Jeffrey Ting's personal website, outlining personal projects, work experience, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
