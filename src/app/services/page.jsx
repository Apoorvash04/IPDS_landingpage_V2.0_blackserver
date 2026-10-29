import Navbar from '../../components/Navbar';
import ProServices from '../../components/ProServices';
import Footer from '../../components/Footer';
import RevealObserver from '../../components/RevealObserver';
import ServicesFx from '../../components/ServicesFx';
import { PRO_SERVICES, SITE_URL } from '../../data';

const TITLE = 'Professional IT Services | IPDS';
const DESCRIPTION =
  'IT consulting & system integration, network infrastructure, cybersecurity & access control, data protection & disaster recovery, servers & data center, and managed IT support. IPDS, Jodhpur.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/services' },
  openGraph: { type: 'website', url: '/services', siteName: 'IP & Data Solutions', title: TITLE, description: DESCRIPTION, locale: 'en_IN' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

// Schema.org list of the six services, each linked to its section on this page.
const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Professional IT Services',
  itemListElement: PRO_SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: `${s.text} Includes: ${s.items.join(', ')}.`,
      url: `${SITE_URL}/services#${s.slug}`,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: 'IN',
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, '\\u003c') }}
      />
      <Navbar />
      <main>
        <ProServices />
      </main>
      <Footer />
      <RevealObserver />
      <ServicesFx />
    </>
  );
}
