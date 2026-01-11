import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Ego Challenge',
    template: '%s | Ego Challenge',
  },
  description:
    'Descubrí los mejores modelos de autos, pickups y SUVs en Ego Challenge. Innovación, confort y rendimiento.',
  keywords: [
    'autos',
    'camionetas',
    'suv',
    'toyota',
    'ego challenge',
    'modelos',
  ],
  authors: [{ name: 'Ego Challenge Team' }],
  creator: 'Ego Challenge',
  publisher: 'Ego Challenge',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ego Challenge',
    description:
      'Descubrí los mejores modelos de autos, pickups y SUVs en Ego Challenge.',
    url: 'https://ego-challenge.vercel.app',
    siteName: 'Ego Challenge',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ego Challenge',
    description:
      'Descubrí los mejores modelos de autos, pickups y SUVs en Ego Challenge.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
