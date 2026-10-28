import { Inter, Sora, Space_Grotesk } from 'next/font/google';
import './globals.css';

// Self-hosted at build time by next/font — no request to Google Fonts at runtime.
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-sora', display: 'swap' });
const brand = Space_Grotesk({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-brand', display: 'swap' });

export const metadata = {
  title: 'IP & Data Solutions | IPDS',
  description:
    'IP & Data Solutions (IPDS), Jodhpur — server & storage, backup, structured cabling, wireless, IP telephony and managed IT services. We protect what matters most: your IP and your data.',
  icons: { icon: '/logo-icon.png' },
};

export const viewport = {
  themeColor: '#07080c',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${brand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
