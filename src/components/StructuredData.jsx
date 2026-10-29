import { CONTACT, FAQS, SERVICES, SITE_URL, SOCIALS } from '../data';

// Schema.org JSON-LD for search engines: the business, its services and the FAQs. Renders nothing visible.
const DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#business`,
      name: 'IP & Data Solutions',
      alternateName: 'IPDS',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-icon.png`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        'Server & storage, backup, structured cabling, wireless, IP telephony and managed IT services in Jodhpur.',
      email: CONTACT.email,
      telephone: CONTACT.phones[0].replace(/\s/g, ''),
      address: {
        '@type': 'PostalAddress',
        streetAddress: '371, Ayushman Ashapurna Valley, Near New High Court, Jhalamand',
        addressLocality: 'Jodhpur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
      areaServed: 'IN',
      sameAs: SOCIALS.filter((s) => s.icon !== 'whatsapp').map((s) => s.href),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Services',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.text },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'IP & Data Solutions',
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(DATA).replace(/</g, '\\u003c') }}
    />
  );
}
