import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akhurath Zenith Solutions | Global Aviation & Investment Consultancy',
  description: 'Elite global aviation and investment consultancy delivering specialized services in aviation, investment, healthcare, training, and R&D across international markets.',
  keywords: 'aviation consulting, investment solutions, project management, global consultancy',
  authors: [{ name: 'Akhurath Zenith Solutions' }],
  creator: 'Akhurath Zenith Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.akhurath-zenith.com',
    title: 'Akhurath Zenith Solutions | Global Aviation & Investment Consultancy',
    description: 'Elite global aviation and investment consultancy delivering specialized services',
    siteName: 'Akhurath Zenith Solutions',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-platinum-light`}>
        {children}
      </body>
    </html>
  );
}
