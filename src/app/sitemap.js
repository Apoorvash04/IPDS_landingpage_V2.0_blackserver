import { SITE_URL } from '../data';

// Served as /sitemap.xml
export default function sitemap() {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
