import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akhurath Zenith Solutions | Private Jet Chartering & Aircraft Leasing Excellence',
  description: 'Bespoke private jet chartering and aircraft leasing services tailored for global aviation excellence. Trusted by aviation partners across India, Southeast Asia, the Middle East & Africa.',
  keywords: 'private jet charter, aircraft leasing, private aviation, jet charter services, aircraft leasing solutions, luxury aviation, business aviation',
  authors: [{ name: 'Akhurath Zenith Solutions' }],
  creator: 'Akhurath Zenith Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.akhurath-zenith.com',
    title: 'Akhurath Zenith Solutions | Private Jet Chartering & Aircraft Leasing Excellence',
    description: 'Bespoke private jet chartering and aircraft leasing services tailored for global aviation excellence',
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
