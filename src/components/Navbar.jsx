'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NAV, PRO_SERVICES } from '../data';
import Icon from './Icon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // mobile only — on desktop the dropdown opens on hover / keyboard focus (CSS)
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    // rAF-throttled, passive listener: only flips state when the threshold is crossed.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  // Close everything after a click; blur so :focus-within doesn't keep the desktop dropdown open.
  const close = (e) => {
    setOpen(false);
    setDropOpen(false);
    e?.currentTarget.blur();
  };

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="/#home" className="nav-logo" aria-label="IP & Data Solutions — home" onClick={close}>
          <img src="/logo-icon.png" alt="IPDS" width="64" height="64" />
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {NAV.map((n) =>
            n.dropdown ? (
              <div key={n.href} className={`nav-drop ${dropOpen ? 'is-open' : ''}`}>
                <div className="nav-drop-head">
                  <Link href={n.href} className="nav-link nav-drop-trigger" onClick={close}>
                    {n.label}
                    <Icon name="chevron" size={16} className="nav-chevron" />
                  </Link>
                  <button
                    className="nav-drop-toggle"
                    aria-label={`${dropOpen ? 'Hide' : 'Show'} ${n.label}`}
                    aria-expanded={dropOpen}
                    onClick={() => setDropOpen((o) => !o)}
                  >
                    <Icon name="chevron" size={18} />
                  </button>
                </div>
                <div className="nav-drop-panel">
                  <div className="nav-drop-grid">
                    {PRO_SERVICES.map((s) => (
                      <Link key={s.slug} href={`/services#${s.slug}`} className="nav-drop-item" onClick={close}>
                        <Icon name={s.icon} size={20} />
                        <span>{s.short}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={n.href} href={n.href} className="nav-link" onClick={close}>
                {n.label}
              </a>
            )
          )}
          <a href="/#contact" className="btn btn-primary nav-cta nav-cta-mobile" onClick={close}>
            Contact Us
          </a>
        </nav>

        <div className="nav-actions">
          <a href="/#contact" className="btn btn-primary nav-cta">
            Contact Us
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
