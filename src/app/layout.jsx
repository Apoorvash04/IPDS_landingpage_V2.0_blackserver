import { Inter, Sora, Space_Grotesk } from 'next/font/google';
import { SITE_URL } from '../data';
import './globals.css';

// Self-hosted at build time by next/font — no request to Google Fonts at runtime.
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-sora', display: 'swap' });
const brand = Space_Grotesk({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-brand', display: 'swap' });

const TITLE = 'IP & Data Solutions | IPDS';
const DESCRIPTION =
  'IP & Data Solutions (IPDS), Jodhpur — server & storage, backup, structured cabling, wireless, IP telephony and managed IT services. We protect what matters most: your IP and your data.';

// SEO: canonical URL, social previews (the image comes from app/opengraph-image.jsx) and crawler rules.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'IPDS',
  keywords: [
    'IT services Jodhpur',
    'managed IT services',
    'server and storage solutions',
    'backup and disaster recovery',
    'structured cabling',
    'wireless networking',
    'IP telephony',
    'firewall security',
    'virtualization VDI',
    'IP & Data Solutions',
    'IPDS',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'IP & Data Solutions',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: { icon: '/logo-icon.png', apple: '/logo-icon.png' },
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
