import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Samuel Owusu | Machine Learning Engineer & Software Developer',
  description: 'Portfolio of Samuel Owusu, a Machine Learning Engineer and Software Developer based in Aberdeen, Scotland, UK. Specializing in ML, AI, web development, and mobile app development.',
  keywords: ['Machine Learning', 'AI', 'Software Developer', 'Web Development', 'Android Development', 'Samuel Owusu', 'Ghana'],
  authors: [{ name: 'Samuel Owusu' }],
  creator: 'Samuel Owusu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://owususamuel.github.io',
    title: 'Samuel Owusu | Machine Learning Engineer',
    description: 'Portfolio of Samuel Owusu, a Machine Learning Engineer based in Aberdeen, Scotland, UK.',
    siteName: 'Samuel Owusu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Owusu | Machine Learning Engineer',
    description: 'Portfolio of Samuel Owusu, a Machine Learning Engineer based in Aberdeen, Scotland, UK.',
    creator: '@owusu_rg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
