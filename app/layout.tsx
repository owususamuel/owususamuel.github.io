import type { Metadata, Viewport } from 'next';
import { Anybody, Martian_Mono, Newsreader } from 'next/font/google';
import './globals.css';

const anybody = Anybody({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-anybody',
  display: 'swap',
});

const martianMono = Martian_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-martian',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-newsreader',
  display: 'swap',
});

const description =
  'Samuel Owusu is a machine learning engineer and software developer working on speech, language and AI agents.';

export const metadata: Metadata = {
  metadataBase: new URL('https://owususamuel.github.io'),
  title: 'Samuel Owusu',
  description,
  authors: [{ name: 'Samuel Owusu' }],
  creator: 'Samuel Owusu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Samuel Owusu',
    description: 'Machine learning engineer and software developer.',
    siteName: 'Samuel Owusu',
  },
  twitter: {
    card: 'summary',
    title: 'Samuel Owusu',
    description: 'Machine learning engineer and software developer.',
    creator: '@owusu_rg',
  },
};

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EAECE7' },
    { media: '(prefers-color-scheme: dark)', color: '#0D0F12' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anybody.variable} ${martianMono.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
