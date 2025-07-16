import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Admin Dashboard',
    template: `%s | Admin Dashboard`,
  },
  description: 'Professional admin dashboard for managing your application',
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    title: 'Admin Dashboard',
    description: 'Professional admin dashboard for managing your application',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Dashboard',
    description: 'Professional admin dashboard for managing your application',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
