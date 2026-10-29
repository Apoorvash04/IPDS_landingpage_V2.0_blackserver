import { ImageResponse } from 'next/og';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

// Social share card (WhatsApp, LinkedIn, Facebook, X) — generated once at build time, in the site's colours.
export const alt = 'IP & Data Solutions — we protect what matters most: your IP and your data.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const logoSrc = `data:image/png;base64,${await readFile(join(process.cwd(), 'public/logo-icon.png'), 'base64')}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#07080c',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <img src={logoSrc} width={231} height={255} />
        <div style={{ display: 'flex', marginTop: 36, fontSize: 72, fontWeight: 700 }}>
          IP <span style={{ color: '#E41146', margin: '0 18px' }}>&amp;</span> Data Solutions
        </div>
        <div style={{ display: 'flex', marginTop: 20, fontSize: 32, color: '#a3a7b3' }}>
          From innovation to information — your IP and your data, protected.
        </div>
      </div>
    ),
    size
  );
}
